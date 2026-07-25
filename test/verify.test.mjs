import { test } from "node:test";
import assert from "node:assert/strict";
import { getByPath, verifyRecord, verifySurface } from "../lib/verify.mjs";

const SHA = "1a2b3c4d5e6f708192a3b4c5d6e7f8091a2b3c4d";

/** Build a fake `fetch` that returns a JSON body (or a status / throw). */
function fakeFetch({ body, status = 200, throws } = {}) {
  return async () => {
    if (throws) throw new Error(throws);
    return { ok: status >= 200 && status < 300, status, json: async () => body };
  };
}

const webSurface = (expected) => ({
  surface: "web",
  endpoint: "https://example.test/api/v1/health",
  path: "data.sourceSha",
  expected,
});

test("getByPath reads nested keys and returns undefined for missing paths", () => {
  assert.equal(getByPath({ data: { sourceSha: SHA } }, "data.sourceSha"), SHA);
  assert.equal(getByPath({ data: {} }, "data.sourceSha"), undefined);
  assert.equal(getByPath({}, "data.sourceSha.nope"), undefined);
});

test("verifySurface passes when the live identifier matches expected", async () => {
  const result = await verifySurface(webSurface(SHA), {
    fetchImpl: fakeFetch({ body: { data: { sourceSha: SHA } } }),
  });
  assert.equal(result.ok, true);
  assert.equal(result.live, SHA);
  assert.equal(result.reason, "match");
});

test("verifySurface fails closed when the live identifier differs (wrong SHA)", async () => {
  const result = await verifySurface(webSurface(SHA), {
    fetchImpl: fakeFetch({ body: { data: { sourceSha: "ffffffffffffffffffffffffffffffffffffffff" } } }),
  });
  assert.equal(result.ok, false);
  assert.match(result.reason, /does not match/);
});

test("verifySurface fails closed when the identifier is absent (change not deployed)", async () => {
  const result = await verifySurface(webSurface(SHA), {
    fetchImpl: fakeFetch({ body: { data: { version: "v1" } } }),
  });
  assert.equal(result.ok, false);
  assert.match(result.reason, /absent/);
});

test("verifySurface fails closed on a non-2xx endpoint", async () => {
  const result = await verifySurface(webSurface(SHA), { fetchImpl: fakeFetch({ status: 503 }) });
  assert.equal(result.ok, false);
  assert.match(result.reason, /HTTP 503/);
});

test("verifySurface fails closed when the request throws", async () => {
  const result = await verifySurface(webSurface(SHA), { fetchImpl: fakeFetch({ throws: "network down" }) });
  assert.equal(result.ok, false);
  assert.match(result.reason, /could not fetch/);
});

test("verifySurface fails closed when the record has no expected identifier", async () => {
  const result = await verifySurface(webSurface(undefined), {
    fetchImpl: fakeFetch({ body: { data: { sourceSha: SHA } } }),
  });
  assert.equal(result.ok, false);
  assert.match(result.reason, /missing an expected identifier/);
});

test("verifyRecord is live only when every surface matches", async () => {
  const record = { surfaces: [webSurface(SHA), { ...webSurface(SHA), surface: "web-2" }] };
  const allMatch = await verifyRecord(record, {
    fetchImpl: fakeFetch({ body: { data: { sourceSha: SHA } } }),
  });
  assert.equal(allMatch.ok, true);

  const oneWrong = await verifyRecord(
    { surfaces: [webSurface(SHA), webSurface("ffffffffffffffffffffffffffffffffffffffff")] },
    { fetchImpl: fakeFetch({ body: { data: { sourceSha: SHA } } }) },
  );
  assert.equal(oneWrong.ok, false);
});

test("verifyRecord fails closed when the record declares no surfaces", async () => {
  const result = await verifyRecord({ surfaces: [] });
  assert.equal(result.ok, false);
});
