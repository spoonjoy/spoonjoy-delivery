# AGENTS.md

Operating rules for agents working in `spoonjoy-delivery`.

## What this repo is

Delivery coordination and shipment-evidence for cross-surface Spoonjoy changes.
It answers one question per change: **is the exact change actually live on every
surface it should ship to?** — and answers it with machine-checkable,
provider-backed identifiers, never screenshots or task status.

## The model (three objects)

- **Product Contract** — design truth for a feature. Lives in the product repo
  that owns the surface (`spoonjoy-v2` for web / Workers), not here.
- **Product Change** — coordination record: the change, its target surfaces, and
  the identifier expected on each. Lives here.
- **Release Set** — immutable provider-backed evidence that the change is live.
  The only artifact that marks a Product Change "shipped".

## Rules

- **Proof is a deployed identifier per surface.** A screenshot or a
  "task: done" is not proof.
- **Read-only against every provider.** Tooling here fetches and compares public
  identifiers. It never mutates a provider, never deploys, and never creates
  cloud identities or secrets.
- **No secrets here.** Credentials stay in the repo that owns the surface. This
  repo receives read-only attestations only.
- **Ownership boundaries.** Domain contracts → `spoonjoy-v2`. Delivery
  coordination + verification → here. Native provenance → `spoonjoy-apple`.
- **Keep it small.** Prefer the smallest committed record and the smallest
  read-only check that proves the point.

## Surfaces and their identifiers

| Surface | Identifier that proves "live" |
| --- | --- |
| web / Workers | git SHA of the live Cloudflare Worker deployment |
| native Apple | shipped TestFlight / App Store build |
| MCP | deployed MCP server version |
