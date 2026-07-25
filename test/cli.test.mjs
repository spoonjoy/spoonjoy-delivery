import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { createServer } from "node:http";
import { mkdtemp, writeFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const BIN = fileURLToPath(new URL("../bin/deliver.mjs", import.meta.url));
const SHA = "1a2b3c4d5e6f708192a3b4c5d6e7f8091a2b3c4d";

let server;
let baseUrl;
let workdir;

before(async () => {
  // A stand-in for the live web surface: serves the Increment 1 health shape.
  server = createServer((req, res) => {
    res.setHeader("content-type", "application/json");
    res.end(JSON.stringify({ ok: true, data: { ok: true, version: "v1", sourceSha: SHA } }));
  });
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  baseUrl = `http://127.0.0.1:${server.address().port}/api/v1/health`;
  workdir = await mkdtemp(join(tmpdir(), "deliver-cli-"));
});

after(async () => {
  await new Promise((resolve) => server.close(resolve));
  await rm(workdir, { recursive: true, force: true });
});

function runCli(args) {
  return new Promise((resolve) => {
    execFile(process.execPath, [BIN, ...args], (error, stdout, stderr) => {
      resolve({ code: error ? (error.code ?? 1) : 0, stdout, stderr });
    });
  });
}

async function writeRecord(name, expected) {
  const path = join(workdir, name);
  await writeFile(
    path,
    JSON.stringify({
      id: name,
      productChange: "Recipe Photo Studio",
      surfaces: [{ surface: "web", endpoint: baseUrl, path: "data.sourceSha", expected }],
    }),
  );
  return path;
}

test("deliver verify exits 0 when the live SHA matches the record", async () => {
  const record = await writeRecord("match.json", SHA);
  const { code, stdout } = await runCli(["verify", record]);
  assert.equal(code, 0);
  assert.match(stdout, /VERIFIED: change is live/);
});

test("deliver verify exits non-zero when the record expects a different SHA (fails closed)", async () => {
  const record = await writeRecord("mismatch.json", "ffffffffffffffffffffffffffffffffffffffff");
  const { code, stdout } = await runCli(["verify", record]);
  assert.equal(code, 1);
  assert.match(stdout, /NOT VERIFIED/);
});

test("deliver verify exits 2 on bad usage", async () => {
  const { code, stderr } = await runCli(["verify"]);
  assert.equal(code, 2);
  assert.match(stderr, /usage: deliver verify/);
});

test("deliver verify exits 2 when the record file cannot be read", async () => {
  const { code, stderr } = await runCli(["verify", join(workdir, "does-not-exist.json")]);
  assert.equal(code, 2);
  assert.match(stderr, /cannot read Product Change record/);
});
