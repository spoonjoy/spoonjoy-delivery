// Read-only verification of a Product Change against the live identifiers each
// surface reports. This module never mutates a provider, deploys, or reads a
// secret — it performs GET requests and compares strings. See AGENTS.md.

/** Read a dotted path (e.g. "data.sourceSha") out of a parsed JSON body. */
export function getByPath(obj, path) {
  return String(path)
    .split(".")
    .reduce((acc, key) => (acc == null ? undefined : acc[key]), obj);
}

/**
 * Verify one surface: GET its endpoint, pull the live identifier at `path`, and
 * compare it to `expected`. Returns a plain result object; never throws.
 *
 * `fetchImpl` is injectable so the behavior is testable without the network.
 */
export async function verifySurface(surface, { fetchImpl = fetch } = {}) {
  const { surface: name, endpoint, path, expected } = surface;
  const base = { surface: name, endpoint, path, expected };

  if (typeof expected !== "string" || expected.length === 0) {
    return { ...base, live: undefined, ok: false, reason: "record is missing an expected identifier" };
  }

  let body;
  try {
    const res = await fetchImpl(endpoint, { headers: { accept: "application/json" } });
    if (!res.ok) {
      return { ...base, live: undefined, ok: false, reason: `endpoint returned HTTP ${res.status}` };
    }
    body = await res.json();
  } catch (error) {
    return { ...base, live: undefined, ok: false, reason: `could not fetch endpoint: ${error.message}` };
  }

  const live = getByPath(body, path);
  if (typeof live !== "string") {
    return { ...base, live: undefined, ok: false, reason: `identifier "${path}" is absent from the response` };
  }
  if (live !== expected) {
    return { ...base, live, ok: false, reason: "live identifier does not match expected" };
  }
  return { ...base, live, ok: true, reason: "match" };
}

/**
 * Verify every surface named in a Product Change record. The change is
 * considered live only when all surfaces match (fails closed).
 */
export async function verifyRecord(record, options = {}) {
  const surfaces = Array.isArray(record?.surfaces) ? record.surfaces : [];
  const results = [];
  for (const surface of surfaces) {
    results.push(await verifySurface(surface, options));
  }
  return { ok: surfaces.length > 0 && results.every((result) => result.ok), results };
}
