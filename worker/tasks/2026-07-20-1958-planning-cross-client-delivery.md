# Planning: Spoonjoy Cross-Client Delivery

**Status**: NEEDS_REVIEW
**Created**: 2026-07-20 19:58

## Goal

Build and pilot a small, production-grade delivery system that carries one Spoonjoy product contract through web/backend, native Apple, and MCP/agent implementations to independently verified exact releases and terminal cleanup. Only a provider-backed Release Set may declare a Product Change shipped.

## Scope

### In Scope

- Bootstrap `spoonjoy/spoonjoy-delivery` as a public, branch-protected TypeScript repository with pinned CI, strict typing, zero-warning gates, and 100% coverage.
- Define versioned schemas for Product Changes, Product Contracts, Contract Packs, actor proofs, provider attestations, dependency/staleness edges, handoffs, cleanup reports, and final Release Sets.
- Keep domain Product Contracts in `spoonjoy-v2`; keep cross-repo coordination and finalization controls in `spoonjoy-delivery`; keep native contract locks and signed-in-binary provenance in `spoonjoy-apple`.
- Generate a Contract Pack from a machine-readable normative contract plus hashes for OpenAPI, MCP schemas, fixtures, scenario IDs, validator version, and source revision.
- Require every Product Change to classify server/domain, web, MCP/protocol, agent experience, iOS, iPadOS, macOS, offline queues, auth, data migration, observability, release notes, and cleanup as `required`, `no-op`, or `deferred` with an explicit reason.
- Model additive expand, optional capability gating, backfill or reviewed maintenance, compatibility validation, deployment, deprecation, and eventual contract/removal phases.
- Validate the current and immediately previous supported TestFlight contract plus queued offline mutation replay until a public App Store support policy supersedes this rule.
- Add exact contract locking and provenance to native builds. Embed source SHA/tree, contract digest, build/version identity, and validator version inside the code-signed app; bind the embedded manifest to archive/IPA hashes and App Store Connect build identity in an external attestation.
- Add source-owned, manually dispatchable read-only attestor workflows that query GitHub, Cloudflare/D1, and App Store Connect from the repositories that own those credentials. A local delivery CLI uses the operator's authenticated `gh` session to dispatch and monitor the exact workflow revisions, then verifies their inputs, run identities, artifacts, and checksums without copying provider secrets into the delivery repo. V1 does not require a cross-repository bot token.
- Inventory and verify the effective scopes of every attestor credential. Use dedicated least-privilege read-only provider credentials where the existing deployment or publication credential has write scope; fail closed and record `BLOCKED_HUMAN` if a provider requires a human-only credential action that cannot be completed through the authenticated account tooling.
- Compile Release Sets from fresh authoritative re-queries, not from deployment-authored summaries. Treat existing production and TestFlight summaries as locators only. Each provider attestation records normalized request parameters, normalized non-secret response fields, the attestor workflow/source SHA, the delivery validator SHA, the GitHub run identity, issuance/expiry, and content digest.
- Make dependency edges drive proof invalidation for source changes, contract changes, Worker redeploys, migrations, native rebuilds, App Store Connect metadata/group changes, capability changes, validator changes, and evidence expiry.
- Define shared semantic scenarios with distinct web, installed-native, deterministic MCP, and pinned host/model agent proofs where the corresponding surface is required. Use a common backend/database oracle and run-owned cleanup.
- Pilot the process on Recipe Photo Studio after the active TestFlight task releases native ownership. Keep current TestFlight completion and Apple clean-callback cutover as separate prerequisites or Product Changes.
- Add safe cleanup planning/application for run-owned data, credentials, artifacts, merged branches, and clean terminal worktrees. Never force-delete dirty or separately owned work.
- Produce durable documentation, rollback paths, hostile implementation/security/release reviews, and live dogfood evidence for the consuming surfaces.

### Out of Scope

- A central orchestration service, always-on dashboard, monorepo conversion, generated Swift SDK, universal feature-flag platform, or generalized multi-product framework.
- Rewriting all existing Spoonjoy API behavior into normative contracts before the Photo Studio pilot; V1 covers changed/pilot capability boundaries and establishes extension seams.
- Treating screenshots as semantic proof, direct JSON-RPC as agent-experience proof, source-token checks as installed-app proof, or manually copied task status as release evidence.
- Copying Cloudflare, D1, Apple, GitHub, or user credentials into committed files, workflow artifacts, logs, fixtures, or the delivery repository.
- Touching the active native/TestFlight release lane, its worktrees, or current web deployment ownership before task `019f2e25-2fc3-75b2-8ba3-335f3777115a` sends an explicit handoff.
- Folding Apple callback cutover into the Photo Studio pilot.
- Deleting pre-existing, dirty, ambiguous, or separately owned data, branches, artifacts, or worktrees.

## Completion Criteria

- [ ] `spoonjoy-delivery` has protected `main`, automatic merged-branch deletion, pinned GitHub Actions, strict TypeScript, deterministic installs, fail-closed lint/typecheck/test/build/security gates, 100% statements/branches/functions/lines, and zero warnings.
- [ ] Product Change, Product Contract, Contract Pack, actor proof, provider attestation, cleanup report, and Release Set schemas reject unknown fields, malformed identities, missing dependencies, duplicate evidence, cycles, unsupported status transitions, stale evidence, and ambiguous ownership.
- [ ] A Product Contract captures invariants, state transitions, authorization, ownership, errors, idempotency, ordering, offline behavior, compatibility, degradation, migration, rollback, and scenario expectations.
- [ ] A Contract Pack digest binds the normative subset and every projection hash, scenario ID, validator version, and source revision; same-digest-but-different-projection fixtures fail.
- [ ] `spoonjoy-v2` emits the exact Contract Pack and serves or exposes its runtime digest for exact Worker verification.
- [ ] `spoonjoy-apple` locks the expected digest, validates codecs/scenarios against it, embeds signed app provenance, and emits an attestation binding archive/IPA hashes to source, contract, build, and App Store Connect identity.
- [ ] Cloudflare/D1 and App Store Connect attestors independently query authoritative providers from source-owned `workflow_dispatch` runs with verified least-privilege credentials and produce GitHub-verifiable attestations from exact source-workflow and delivery-validator SHAs.
- [ ] The delivery CLI dispatches source-owned attestors through the operator's authenticated `gh` session, accepts only the expected repository/ref/event/inputs/permissions, waits for terminal success, verifies artifact identity and digest, and refuses expired, rerun-with-different-input, fork-authored, or mutable-reference evidence.
- [ ] Finalization fails for a stale contract digest, wrong Worker version, pending or changed migration, failed or mismatched CI run, unbound native archive, wrong TestFlight build/group/state, missing installed proof, changed ASC metadata, expired artifact, failed cleanup, or superseded dependency.
- [ ] Finalization supports explicit `superseded`, `rolled_back`, `waived`, and `BLOCKED_HUMAN` dispositions without allowing them to masquerade as successful proof.
- [ ] A hotfix changing a dependency invalidates only the mechanically dependent proofs and cannot inherit stale green evidence.
- [ ] The old-client matrix proves the previous supported native contract remains functional and a pre-upgrade queued mutation replays idempotently against the candidate Worker.
- [ ] Shared Photo Studio scenarios produce independent web, installed-native, deterministic MCP, and agent-evaluation evidence where required, with seeded preconditions, actions, backend effects, queue state, user-visible results, provenance, and run-owned cleanup.
- [ ] The Photo Studio pilot reaches an exact Worker and exact installed TestFlight build, then generates a fresh provider-backed Release Set that independently re-queries all authorities before finalization.
- [ ] Negative dogfood deliberately injects at least one stale/mismatched digest and proves closure fails before the successful pilot.
- [ ] Cleanup proves zero run-owned D1, R2, OAuth/credential, fixture, temporary artifact, branch, and worktree residue while enumerating preserved pre-existing ownership separately.
- [ ] Rollback is exercised or safely simulated for the Worker, capability state, migration boundary, native candidate selection, and Release Set supersession.
- [ ] Fresh harsh architecture, security, compatibility, test, release, and visual reviewers converge with no BLOCKER or MAJOR findings.
- [ ] Durable Desk and repository records point to exact source SHAs, contract digest, provider attestation IDs, Worker version, native build/ASC identity, installed proof, cleanup evidence, and the final append-only Release Set committed through protected `main` and bound to a protected release tag.

## Code Coverage Requirements

- 100% statements, branches, functions, and lines for all new delivery TypeScript and workflow-support logic.
- Every parser, schema branch, dependency transition, stale-evidence path, provider error, retry boundary, mismatch, rollback, supersession, and cleanup refusal is tested.
- No warning suppression, uncovered generated control flow, permissive `any`, or success-on-network/parser failure.
- Product-repo changes retain each repository's existing 100% changed-code coverage and zero-warning requirements across all affected consumers.

## Open Questions

- None. Ari approved the dedicated delivery repository, explicit surface classification, semantic parity, current-plus-previous TestFlight compatibility, and autonomous implementation. Any unavailable provider credential will be treated as a late human-only capability blocker only after source-repo secret reuse and safe attestation paths are exhausted.

## Decisions Made

- Use the name `spoonjoy-delivery` for the dedicated public delivery/finalization repository and `cross-client-delivery` for the durable Desk task.
- Use three distinct objects: Product Contract for design truth, Product Change for mutable coordination, and Release Set for final provider-backed attestation.
- Product Contracts live in `spoonjoy-v2`; coordination and finalization live in `spoonjoy-delivery`; native locks/provenance live in `spoonjoy-apple`.
- Do not implement a task-ID lease in V1. Serialize finalization with GitHub Actions concurrency and preserve ownership changes as append-only Git handoffs.
- Planning and Desk status describe intent and coordination but cannot prove shipment.
- Reuse existing exact-SHA deploy/TestFlight workflows, OpenAPI/MCP tests, scenario harnesses, and cleanup tools through thin attestors and validators rather than replacing them.
- Use source-owned `workflow_dispatch` attestors so credentials remain in their current security boundaries. The local delivery CLI dispatches them with the operator's existing GitHub authentication; V1 does not introduce a delivery-repository bot token.
- Require an explicit credential-scope inventory and dedicated read-only provider credentials wherever current deployment/publication credentials are broader than attestation requires.
- Separate normative contract digest from projection hashes; validate dependency relationships rather than assuming equal bytes imply semantic conformance.
- Require actor-specific proof. Protocol correctness and agent usefulness are different evidence.
- Define zero residue as zero run-owned residue and enumerate preserved pre-existing ownership explicitly.
- Pilot only Photo Studio. Current TestFlight publication is a prerequisite release operation; Apple callback cutover is a separate Product Change.
- Merge/deploy sequencing is freeze, additive server/schema work, old-client/offline replay, exact server deployment, production web/MCP proof, native CI/archive/TestFlight, installed proof, cleanup, then independent final re-query.

## Context / References

- `/Users/arimendelow/Projects/spoonjoy-v2`
- `/Users/arimendelow/Projects/spoonjoy-apple`
- `/Users/arimendelow/Projects/spoonjoy-v2-audit-remediation/worker/tasks/2026-07-15-1152-doing-audit-remediation.md`
- `/Users/arimendelow/desk/spoonjoy/cross-client-delivery/task.md`
- `/Users/arimendelow/desk/spoonjoy/audit-remediation/task.md`
- `https://github.com/spoonjoy/spoonjoy-delivery`
- `https://github.com/spoonjoy/spoonjoy-v2/actions/workflows/production-deploy.yml`
- `https://github.com/spoonjoy/spoonjoy-apple/actions/workflows/testflight.yml`

## Notes

The delivery repository is a control plane and evidence compiler, not a second implementation of Spoonjoy. It owns schemas, validators, reusable attestors, finalization, and safe cleanup coordination. Domain behavior remains in the product repositories.

The Release Set must use independent read-only provider queries. Deployment/TestFlight summaries locate candidate evidence but do not attest to themselves. Source-owned dispatchable workflows preserve existing secret boundaries while pinning the source workflow and delivery validator to reviewed SHAs. The dispatching CLI verifies the GitHub run itself; a copied artifact without its matching repository, ref, event, inputs, permissions, checksum, and terminal run is invalid.

Embedded native provenance cannot contain the hash of the archive that contains it. The code-signed app embeds source/tree, contract digest, build identity, and validator version; an external signed attestation binds that embedded manifest hash to archive/IPA hashes and the resulting App Store Connect build.

Product Change records include a surface-impact matrix, compatibility matrix, dependency graph, evidence requirements, handoff history, and cleanup ownership. GitHub concurrency serializes finalization; Git history preserves handoffs. The generated Release Set, not the mutable record, is the shipment authority. "Immutable" means append-only under protected `main` plus a protected tag, with supersession represented by a new record; this plan does not claim that a repository administrator is cryptographically incapable of rewriting history.

Evidence nodes declare dependencies and staleness triggers. A relevant source, contract, provider, migration, capability, build, metadata, validator, or expiry change invalidates dependent evidence mechanically. A final provider re-query occurs after cleanup and immediately before immutable release publication.

Photo Studio scenarios begin with a recipe lacking a cover and cover upload/generation behavior, preserve the original image in a Spoon where requested, verify editorialized-cover lifecycle and retry/offline behavior, inspect authoritative backend state, and clean only the run's identities and media. The exact scenario inventory will be validated against current source after native release ownership transfers.

## Progress Log

- 2026-07-20 19:58: Ari approved autonomous implementation and the recommended repository, parity, classification, and compatibility defaults.
- 2026-07-20 19:58: Created public repository `spoonjoy/spoonjoy-delivery`, repaired the failed automatic clone with an explicit HTTPS clone, and created isolated branch/worktree `worker/cross-client-delivery`.
- 2026-07-20 19:58: Created durable Desk task `spoonjoy/cross-client-delivery`, recorded ownership isolation from the active TestFlight task, and pushed Desk commit `32481dd28ee07ef1098c80c4bc4fd334d7f5dd54`.
- 2026-07-20 19:58: Drafted this plan after Tinfoil Hat and Stranger With Candy ideation scrutiny exposed stale narrative truth, missing compatibility phases, self-authored proof, native provenance gaps, and actor-proof conflation.
- 2026-07-20 20:12: Grounded the workflow design in the current repositories and replaced the impossible cross-repository secret inheritance assumption with source-owned dispatchable attestors, explicit credential-scope proof, exact GitHub run verification, and an append-only release-record definition.
