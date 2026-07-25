#!/usr/bin/env node
// deliver — read-only delivery verification for Spoonjoy Product Changes.
//
//   deliver verify <record.json>
//
// Fetches the live identifier each surface reports and asserts it matches the
// identifier the Product Change expects. Exits 0 when the change is live on
// every surface, non-zero otherwise. Read-only: no provider mutation, no
// secrets, no deploys.

import { readFile } from "node:fs/promises";
import { verifyRecord } from "../lib/verify.mjs";

const USAGE = "usage: deliver verify <record.json>\n";

export async function run(argv, { stdout = process.stdout, stderr = process.stderr } = {}) {
  const [command, recordPath] = argv;

  if (command !== "verify" || !recordPath) {
    stderr.write(USAGE);
    return 2;
  }

  let record;
  try {
    record = JSON.parse(await readFile(recordPath, "utf8"));
  } catch (error) {
    stderr.write(`cannot read Product Change record "${recordPath}": ${error.message}\n`);
    return 2;
  }

  const { ok, results } = await verifyRecord(record);

  const label = record.productChange ?? record.id ?? recordPath;
  stdout.write(`Product Change: ${label}\n`);
  for (const result of results) {
    const mark = result.ok ? "PASS" : "FAIL";
    const live = result.live ?? "(absent)";
    stdout.write(`  [${mark}] ${result.surface}: expected ${result.expected}, live ${live} — ${result.reason}\n`);
  }
  if (results.length === 0) {
    stdout.write("  no surfaces declared in record\n");
  }
  stdout.write(ok ? "\nVERIFIED: change is live on every declared surface.\n" : "\nNOT VERIFIED: at least one surface does not match.\n");

  return ok ? 0 : 1;
}

// Only run when invoked as a script (not when imported by tests).
if (import.meta.url === `file://${process.argv[1]}`) {
  run(process.argv.slice(2)).then((code) => process.exit(code));
}
