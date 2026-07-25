# spoonjoy-delivery

Coordination and shipment-evidence for Spoonjoy features that must land on more
than one surface: web / Cloudflare Workers, native Apple, and MCP.

A feature is not "shipped" because a screenshot looks right or a task is marked
done. It is shipped when each surface reports a **deployed identifier** that
matches the change. This repo holds the coordination records and the read-only
tooling that checks those identifiers.

## The three objects

1. **Product Contract** — the design truth for a feature (schemas, endpoints,
   behavior). Lives in the product repo that owns the surface (`spoonjoy-v2` for
   web / Workers). Not stored here.
2. **Product Change** — a coordination record: one feature change, the surfaces
   it must reach, and the identifier expected on each. Lives here.
3. **Release Set** — immutable, provider-backed evidence that a change is live:
   the actual deployed identifier collected from each surface. A Release Set is
   the **only** artifact that marks a Product Change "shipped".

## Principle

A deployed identifier per surface is proof. A screenshot or a task-status claim
is not.

| Surface | Identifier that proves "live" |
| --- | --- |
| web / Workers | git SHA of the live Cloudflare Worker deployment |
| native Apple | shipped TestFlight / App Store build |
| MCP | deployed MCP server version |

## Repo ownership

| Concern | Repo |
| --- | --- |
| Domain / product contracts | `spoonjoy-v2` |
| Delivery coordination + verification | `spoonjoy-delivery` (this repo) |
| Native provenance | `spoonjoy-apple` |

Credentials stay in the repo that owns the surface. This repo never holds
provider secrets — it only receives read-only attestations: public identifiers
it can fetch and compare.

See [`AGENTS.md`](./AGENTS.md) for how to work in this repo.
