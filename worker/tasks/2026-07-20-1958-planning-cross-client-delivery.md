# Planning: Spoonjoy Cross-Client Delivery

**Status**: NEEDS_REVIEW
**Created**: 2026-07-20 19:58

## Goal

Build and pilot a small, production-grade delivery system that carries one Spoonjoy product contract through web/backend, native Apple, and MCP/agent implementations to independently verified exact releases and terminal cleanup. Only a provider-backed Release Set may declare a Product Change shipped.

## Scope

### In Scope

- Bootstrap `spoonjoy/spoonjoy-delivery` as a public, branch-protected TypeScript repository with pinned CI, strict typing, zero-warning gates, and 100% coverage.
- Define versioned schemas plus semantic validators for Product Changes, Product Contracts, Contract Packs, Candidate Authorizations, actor proofs, provider attestations, dependency/staleness edges, handoffs, cleanup reports, and final Release Sets.
- Define a versioned authority policy keyed by immutable GitHub actor IDs. V1 is explicitly single-operator: GitHub actor `arimendelow` (`16390116`) may issue/approve/revoke/supersede Candidate Authorizations, approve protected environments, finalize/tag Release Sets, and issue non-shipping waivers; GitHub Actions may execute only the operation authorized for its exact workflow/run/environment; read-only attestors can neither authorize nor mutate. Every authority action is protected-commit- or GitHub-run-bound and independently reviewable.
- Keep domain Product Contracts in `spoonjoy-v2`; keep cross-repo coordination and finalization controls in `spoonjoy-delivery`; keep native contract locks and signed-in-binary provenance in `spoonjoy-apple`.
- Generate three separately invalidated identities with SHA-256, duplicate-key rejection, deterministic path ordering, RFC 8785 canonical JSON, and cross-language golden vectors: `semanticContractDigest` over normative behavior only; `packDigest` over that semantic digest plus projection, fixture, and scenario hashes; and `provenanceDigest` over the pack digest, source tree/SHA, and validator artifact hash.
- Require every Product Change to classify server/domain, web, MCP/protocol, agent experience, iOS, iPadOS, macOS, offline queues, auth, data migration, observability, release notes, and cleanup as `required`, `no-op`, or `deferred` with an explicit reason.
- Model additive expand, optional capability gating, backfill or reviewed maintenance, compatibility validation, deployment, deprecation, and eventual contract/removal phases.
- Freeze current and previous App Store Connect build IDs/source SHAs when a Product Change opens. Validate previous-source debug/simulator code against the staged Worker before deployment, then replay a queue created by the exact previous installed TestFlight build against production after additive deployment. A transitional attestation binds pre-provenance binaries to ASC identity, source SHA, release workflow/run, and independently verified bundle metadata.
- Add exact contract locking and provenance to native builds. Embed source SHA/tree, semantic/pack/provenance digests, build/version identity, and validator artifact identity inside the code-signed app; bind the embedded manifest to archive/IPA hashes and App Store Connect build identity in an external attestation.
- Add source-owned, manually dispatchable read-only attestor workflows that query GitHub, Cloudflare/D1, and App Store Connect from the repositories that own those credentials. Each wrapper targets the source repository's protected environment, checks out reviewed delivery attestor code at an exact 40-character SHA, and executes no candidate-controlled code after secrets are injected. A local delivery CLI uses the operator's authenticated `gh` session to dispatch and monitor exact workflow revisions, then verifies inputs, run identities, attestations, artifacts, and checksums. V1 does not require a cross-repository bot token.
- Inventory and verify the effective scopes of every attestor credential. Use dedicated least-privilege read-only provider credentials where the existing deployment or publication credential has write scope; fail closed and record `BLOCKED_HUMAN` if a provider requires a human-only credential action that cannot be completed through the authenticated account tooling.
- Compile Release Sets from fresh authoritative re-queries, not from deployment-authored summaries. Treat existing production and TestFlight summaries as locators only. Each provider attestation records normalized request parameters, normalized non-secret response fields, the attestor workflow/source SHA, the delivery validator SHA, the GitHub run identity, issuance/expiry, and content digest.
- Classify every evidence field and artifact before capture as public sanitized, private ephemeral, or forbidden. Browser/native screenshots, installed-device metadata, queue evidence, logs, cleanup manifests, generated media, provider responses, and visual-review artifacts must use synthetic/run-owned data or redact account/device/path/media identifiers before upload; raw evidence stays private and ephemeral, while public records retain only allowlisted fields, verdicts, and digests.
- Make dependency edges drive proof invalidation for source changes, contract changes, Worker redeploys, migrations, native rebuilds, App Store Connect metadata/group changes, capability changes, validator changes, and evidence expiry.
- Define shared semantic scenarios with distinct web, installed-native, deterministic MCP, and agent-experience proofs where the corresponding surface is required. Agent trials record exact model ID, Codex host/build, tool-schema digest, unsupported temperature controls, five no-retry trials, a four-of-five deterministic-oracle threshold, a 100,000-token aggregate ceiling, redacted transcripts, and advisory human/model taste notes that cannot override the deterministic oracle. Use a common backend/database oracle and run-owned cleanup.
- Pilot the process on Recipe Photo Studio after the active TestFlight task releases native ownership. Keep current TestFlight completion and Apple clean-callback cutover as separate prerequisites or Product Changes.
- Add exact-manifest production cleanup keyed by run ID and immutable ownership fingerprints for run-owned D1 rows, R2 objects, OAuth clients/tokens, and generated media, with dry-run/apply parity, reference checks, and post-apply provider proof. Add safe cleanup for temporary artifacts, merged branches, and clean terminal worktrees. Never force-delete dirty or separately owned work.
- Produce durable documentation, rollback paths, hostile implementation/security/release reviews, and live dogfood evidence for the consuming surfaces.

### Out of Scope

- A central orchestration service, always-on dashboard, monorepo conversion, generated Swift SDK, universal feature-flag platform, or generalized multi-product framework.
- Rewriting all existing Spoonjoy API behavior into normative contracts before the Photo Studio pilot; V1 covers changed/pilot capability boundaries and establishes extension seams.
- Treating screenshots as semantic proof, direct JSON-RPC as agent-experience proof, source-token checks as installed-app proof, or manually copied task status as release evidence.
- Copying Cloudflare, D1, Apple, GitHub, or user credentials into committed files, workflow artifacts, logs, fixtures, or the delivery repository.
- Touching the active native/TestFlight release lane, its worktrees, or current web deployment ownership before task `019f2e25-2fc3-75b2-8ba3-335f3777115a` sends an explicit handoff.
- Folding Apple callback cutover into the Photo Studio pilot.
- Deleting pre-existing, dirty, ambiguous, or separately owned data, branches, artifacts, or worktrees.
- Claiming GitHub concurrency is cross-repository, claiming hosted model behavior is deterministic, or claiming repository administrators are cryptographically unable to rewrite Git history.

## Completion Criteria

- [ ] `spoonjoy-delivery` has protected `main` with enforced required checks/admins, no force-push/deletion, automatic merged-branch deletion, default read-only workflow tokens that cannot approve pull requests, selected SHA-pinned Actions, strict TypeScript, deterministic installs, fail-closed lint/typecheck/test/build/security gates, 100% statements/branches/functions/lines, and zero warnings.
- [ ] Parsers/schemas reject unknown fields and structural invalidity; semantic validators reject malformed/duplicate identities, missing dependencies, cycles, illegal historical transitions, stale evidence, ambiguous ownership, invalid dispositions, and non-monotonic lock generations.
- [ ] A Product Contract captures invariants, state transitions, authorization, ownership, errors, idempotency, ordering, offline behavior, compatibility, degradation, migration, rollback, and scenario expectations.
- [ ] `semanticContractDigest`, `packDigest`, and `provenanceDigest` follow the documented boundaries, canonicalization, and golden vectors. A changed projection preserves the semantic digest, changes the pack digest, and fails an unchanged-pack assertion; unrelated source changes affect provenance without falsely changing semantics.
- [ ] `spoonjoy-v2` emits the exact Contract Pack and serves or exposes its runtime digest for exact Worker verification.
- [ ] `spoonjoy-apple` locks the expected digest, validates codecs/scenarios against it, embeds signed app provenance, and emits an attestation binding archive/IPA hashes to source, contract, build, and App Store Connect identity.
- [ ] A mandatory rebaseline bundle records fetched web/native `main` SHAs, active release-task commit, protected-commit-bound owner-release handoff, matching protected-commit receiver acknowledgment, zero in-flight source mutations/deploys, and terminal cleanup ownership; source edits and the pilot remain blocked until its validator passes.
- [ ] The authority policy maps immutable actor IDs to issuance, approval, revocation, supersession, environment approval, execution, attestation, finalization/tagging, and waiver roles. Candidate Authorizations and Release Sets bind the authority-policy digest, issuer/approver actor IDs, protected commit/run identities, approval evidence, and revocation state; semantic validation rejects unauthorized actors or role escalation.
- [ ] An operation-scoped Candidate Authorization binds Product Change ID, pack digest, exact source SHA(s), monotonically increasing lock generation, expiry, idempotency key, and exactly one permitted provider mutation class: migration/backfill, capability change, production deploy, Worker rollback, TestFlight upload/attachment/notification/expiry, D1/R2/OAuth/media cleanup, Release Set publication, or protected-tag creation. Each path rejects absent, stale, superseded, revoked, wrong-generation, wrong-SHA, or wrong-operation authorization, including legacy unbound dispatches; unused classes have executable `no-op` dispositions.
- [ ] Every provider mutation has a dry-run where the provider permits one, immediate pre-apply drift revalidation, idempotent apply, immutable execution receipt, and post-operation authoritative query. Read-only attestor credentials are technically and semantically incapable of authorizing or executing mutations.
- [ ] Cloudflare/D1 and App Store Connect attestors independently query authoritative providers from source-owned `workflow_dispatch` runs with verified least-privilege credentials and produce GitHub artifact attestations from exact source-workflow and delivery-validator SHAs.
- [ ] The delivery CLI dispatches source-owned attestors through the operator's authenticated `gh` session, accepts only the expected repository/ref/event/inputs/permissions, waits for terminal success, verifies artifact identity and digest, and refuses expired, rerun-with-different-input, fork-authored, or mutable-reference evidence.
- [ ] Attestations and the Release Set predicate verify GitHub repository/workflow/ref/event/environment/subject claims and retain signed predicate plus subject digests after ephemeral Actions artifacts expire. Every screenshot, device/queue record, log, cleanup manifest, media/visual artifact, and provider output passes a pre-upload public/private/forbidden classifier and allowlist scanner; raw evidence remains private ephemeral; public artifacts contain sanitized manifests/verdicts/digests only. Adversarial account/device/path/media/PII/secret/header/D1-row fixtures, unknown fields, or unknown classifications make publication fail closed.
- [ ] Finalization compare-and-swap publishes only when Candidate Authorization generation and all source/provider identities remain unchanged; it fails for stale digests, wrong Worker version, pending/changed migration, mismatched CI, unbound native archive, wrong TestFlight build/group/state, missing installed proof, changed ASC metadata, expired evidence, failed cleanup, or superseded dependency.
- [ ] A required surface needs fresh successful proof and a `no-op` needs executable impact validation. `deferred`, `waived`, `superseded`, `rolled_back`, or `BLOCKED_HUMAN` cannot produce `shipped`; a named policy authority may issue an owner/scope/reason/expiry-bound exception only as `released_with_waiver` with a supersession edge.
- [ ] A hotfix changing a dependency invalidates only the mechanically dependent proofs and cannot inherit stale green evidence.
- [ ] The compatibility matrix first proves previous-source debug/simulator behavior against the staged Worker, then proves a mutation queued by the exact previous installed TestFlight build replays idempotently against additive production; pre-provenance builds use the explicit transitional attestation.
- [ ] Shared Photo Studio scenarios produce independent browser, iPhone TestFlight, iPad candidate-binary, signed macOS candidate, deterministic MCP, and bounded agent-trial evidence where required, with seeded preconditions, actions, backend effects, queue state, user-visible results, provenance, and run-owned cleanup. Missing physical hardware is an explicit `BLOCKED_HUMAN` proof boundary, not a simulated installed-device pass.
- [ ] The Photo Studio pilot reaches an exact Worker and exact installed TestFlight build, then generates a fresh provider-backed Release Set that independently re-queries all authorities before finalization.
- [ ] Negative dogfood deliberately injects at least one stale/mismatched digest and proves closure fails before the successful pilot.
- [ ] Exact-manifest cleanup proves zero deletable run-owned D1, R2, OAuth/credential, fixture, media, temporary artifact, branch, and worktree residue. Non-deletable ASC builds/provider audit records are enumerated as `selected`, `expired_or_contained`, or `preserved_provider_record`; pre-existing ownership is separate.
- [ ] Named dry-run/apply rollback commands and fixtures verify expected provider state, containment, and attestation fields for Worker rollback, capability disable, additive-migration containment, TestFlight candidate supersession, and Release Set supersession.
- [ ] Fresh harsh architecture, security, compatibility, test, release, and visual reviewers converge with no BLOCKER or MAJOR findings.
- [ ] Durable Desk and repository records point to exact source SHAs, semantic/pack/provenance digests, provider attestation IDs, Worker version, native build/ASC identity, installed proof, cleanup evidence, and the final append-only Release Set committed through protected `main` and bound to a protected release tag.

## Code Coverage Requirements

- 100% statements, branches, functions, and lines for all new delivery TypeScript and workflow-support logic.
- Every parser, schema branch, dependency transition, stale-evidence path, provider error, retry boundary, mismatch, rollback, supersession, and cleanup refusal is tested.
- No warning suppression, uncovered generated control flow, permissive `any`, or success-on-network/parser failure.
- Product-repo changes retain each repository's existing 100% changed-code coverage and zero-warning requirements across all affected consumers.

## Open Questions

- Which exact web/native `main` SHAs, release-task commit, handoff artifact, in-flight state, and cleanup owner will the active TestFlight task transfer? Closure: ingest and validate its signed owner-release bundle before any source edit or pilot action; delivery-repository implementation may proceed independently.
- Do existing Cloudflare and App Store Connect secrets prove read-only scope suitable for independent attestation? Closure: inventory effective scope without exposing values, provision distinct least-privilege source-repository environment secrets if required, and record `BLOCKED_HUMAN` only if authenticated tooling cannot complete the provider action.
- Which physical Apple devices and exact signed artifacts are available for installed proof at pilot time? Closure: inventory iPhone/iPad/macOS capabilities at freeze, require real TestFlight proof where hardware exists, and classify any genuinely unavailable physical-device proof as `BLOCKED_HUMAN` rather than substituting simulator evidence.
- Which exact Codex host/build and hosted model revision are available for the Photo Studio agent-experience trial? Closure: freeze the observable identities at run start and apply the fixed five-trial, no-retry, four-of-five oracle, and token-ceiling policy; hosted-weight determinism is not claimed.

## Decisions Made

- Use the name `spoonjoy-delivery` for the dedicated public delivery/finalization repository and `cross-client-delivery` for the durable Desk task.
- Use three distinct objects: Product Contract for design truth, Product Change for mutable coordination, and Release Set for final provider-backed attestation.
- Use a versioned single-operator V1 authority policy bound to immutable GitHub actor ID `16390116`. Ari may authorize, revoke, finalize, and issue non-shipping waivers; execution remains constrained to exact protected workflow/environment identities. A future separation-of-duty policy is a versioned policy change, not an undocumented assumption.
- Product Contracts live in `spoonjoy-v2`; coordination and finalization live in `spoonjoy-delivery`; native locks/provenance live in `spoonjoy-apple`.
- Do not implement a task-ID lease or pretend GitHub concurrency is global in V1. Source-repository concurrency serializes each provider lane; a protected, monotonically increasing Candidate Authorization generation plus compare-and-swap finalization coordinates cross-repository state. Preserve ownership changes as append-only Git handoffs.
- Planning and Desk status describe intent and coordination but cannot prove shipment.
- Reuse existing exact-SHA deploy/TestFlight workflows, OpenAPI/MCP tests, scenario harnesses, and cleanup tools through thin attestors and validators rather than replacing them.
- Use source-owned `workflow_dispatch` attestors so credentials remain in their current security boundaries. The local delivery CLI dispatches them with the operator's existing GitHub authentication; V1 does not introduce a delivery-repository bot token.
- Require an explicit credential-scope inventory and dedicated read-only provider credentials wherever current deployment/publication credentials are broader than attestation requires.
- Separate semantic, pack, and provenance digests with explicit dependency edges; validate relationships rather than assuming equal bytes imply semantic conformance.
- Require actor-specific proof. Protocol correctness and agent usefulness are different evidence.
- Define zero residue as zero deletable run-owned residue; enumerate non-deletable provider records and preserved pre-existing ownership explicitly.
- Pilot only Photo Studio. Current TestFlight publication is a prerequisite release operation; Apple callback cutover is a separate Product Change.
- Gate every provider mutation with an operation-scoped Candidate Authorization that binds Product Change, pack digest, exact source SHA(s), lock generation, expiry, idempotency key, and one mutation class. Existing migration, capability, deploy/rollback, TestFlight lifecycle, cleanup, release-publication, and tag paths must reject unbound or stale authorization before this process becomes shipment authority.
- Merge/deploy sequencing is validated handoff/rebaseline, freeze current/previous identities, additive server/schema work, previous-source debug/simulator proof against staged Worker, exact authorized server deployment, previous-installed queue replay against production, production web/MCP proof, authorized native CI/archive/TestFlight, installed proof, cleanup, fresh provider re-query, compare-and-swap Release Set publication.

## Context / References

- `/Users/arimendelow/Projects/spoonjoy-v2`
- `/Users/arimendelow/Projects/spoonjoy-apple`
- `/Users/arimendelow/Projects/spoonjoy-v2-audit-remediation/worker/tasks/2026-07-15-1152-doing-audit-remediation.md`
- `/Users/arimendelow/Projects/spoonjoy-apple-audit-release-train/worker/tasks/2026-07-16-0856-doing-audit-release-train.md`
- `/Users/arimendelow/Projects/spoonjoy-apple-audit-release-train/worker/tasks/2026-07-16-0856-doing-audit-release-train/evidence-index.md`
- `/Users/arimendelow/desk/spoonjoy/cross-client-delivery/task.md`
- `/Users/arimendelow/desk/spoonjoy/audit-remediation/task.md`
- `https://github.com/spoonjoy/spoonjoy-delivery`
- `https://github.com/spoonjoy/spoonjoy-v2/actions/workflows/production-deploy.yml`
- `https://github.com/spoonjoy/spoonjoy-apple/actions/workflows/testflight.yml`

## Notes

The delivery repository is a control plane and evidence compiler, not a second implementation of Spoonjoy. It owns schemas, validators, exact-SHA attestor code, Candidate Authorization/Release Set finalization, and safe cleanup coordination. Domain behavior remains in the product repositories.

The Release Set must use independent read-only provider queries. Deployment/TestFlight summaries locate candidate evidence but do not attest to themselves. Source-owned dispatchable workflows preserve existing secret boundaries while pinning the source workflow and delivery validator to reviewed SHAs. The dispatching CLI verifies the GitHub run itself; a copied artifact without its matching repository, ref, event, inputs, permissions, checksum, and terminal run is invalid.

Embedded native provenance cannot contain the hash of the archive that contains it. The code-signed app embeds source/tree, semantic/pack/provenance identities, build identity, and validator artifact identity; an external signed attestation binds that embedded manifest hash to archive/IPA hashes and the resulting App Store Connect build.

Product Change records include a surface-impact matrix, compatibility matrix, dependency graph, evidence requirements, handoff history, and cleanup ownership. Source-local concurrency prevents same-lane overlap; Candidate Authorization generations and compare-and-swap finalization coordinate cross-repository changes. Git history preserves handoffs. The generated Release Set, not the mutable record, is the shipment authority. "Immutable" means append-only under protected `main` plus a protected tag, with supersession represented by a new record; this plan does not claim that a repository administrator is cryptographically incapable of rewriting history.

Evidence nodes declare dependencies and staleness triggers. A relevant source, semantic contract, projection pack, provider, migration, capability, build, metadata, validator, or expiry change invalidates only dependent evidence mechanically. A final provider re-query occurs after cleanup and immediately before compare-and-swap release publication. Required proof, executable `no-op`, and non-shipping deferred/waived dispositions are distinct terminal semantics.

Provider wrappers check out delivery attestor code before secret injection, run only reviewed exact-SHA commands afterward, keep raw responses in runner-temporary storage, allowlist public fields, and fail publication when adversarial secret/PII scanning finds emails, names, tokens, headers, private paths, or raw D1 rows. GitHub artifact attestations bind public evidence to repository/workflow/ref/event/environment/subject claims; the protected Release Set retains signed predicates and subject digests beyond ephemeral Actions artifact retention.

The authority policy is data, not prose. V1 names Ari's immutable GitHub actor ID as the sole authorization/finalization/waiver authority and GitHub Actions as a constrained executor. Candidate Authorization issuance, revocation, and supersession are protected-commit-bound; workflow execution is exact-run/environment-bound; handoff requires matching protected commits from releasing and receiving tasks. Read-only attestors have no mutation role. A waiver can produce only `released_with_waiver`, never `shipped`.

All evidence uses an explicit classification registry. Raw screenshots, device identifiers, queue payloads, provider responses, paths, logs, and media remain local/runner-private and expire after sanitized proof generation. Public artifacts contain synthetic/run-owned identifiers where possible, otherwise redacted allowlisted fields, machine verdicts, and cryptographic digests. Classification and scanning run before every upload, attestation, summary, commit, or release publication.

Production cleanup is exact-manifest, never broad search-and-delete. The manifest binds a run ID to immutable row/object/client/media fingerprints, checks live references before apply, and re-queries after deletion. App Store Connect builds and provider audit records are durable evidence and receive explicit retained dispositions instead of a false zero-residue claim.

Photo Studio scenarios begin with a recipe lacking a cover and cover upload/generation behavior, preserve the original image in a Spoon where requested, verify editorialized-cover lifecycle and retry/offline behavior, inspect authoritative backend state, and clean only the run's identities and media. The exact scenario inventory will be validated against current source after native release ownership transfers.

## Progress Log

- 2026-07-20 19:58: Ari approved autonomous implementation and the recommended repository, parity, classification, and compatibility defaults.
- 2026-07-20 19:58: Created public repository `spoonjoy/spoonjoy-delivery`, repaired the failed automatic clone with an explicit HTTPS clone, and created isolated branch/worktree `worker/cross-client-delivery`.
- 2026-07-20 19:58: Created durable Desk task `spoonjoy/cross-client-delivery`, recorded ownership isolation from the active TestFlight task, and pushed Desk commit `32481dd28ee07ef1098c80c4bc4fd334d7f5dd54`.
- 2026-07-20 19:58: Drafted this plan after Tinfoil Hat and Stranger With Candy ideation scrutiny exposed stale narrative truth, missing compatibility phases, self-authored proof, native provenance gaps, and actor-proof conflation.
- 2026-07-20 20:12: Grounded the workflow design in the current repositories and replaced the impossible cross-repository secret inheritance assumption with source-owned dispatchable attestors, explicit credential-scope proof, exact GitHub run verification, and an append-only release-record definition.
- 2026-07-20 20:25: Addressed the first hostile plan review's three blockers and seven major findings: Candidate Authorization now gates provider mutations, compatibility uses staged-source then installed-production proof, digest identities are separated, rebaseline is mandatory, public artifacts are attested/redacted, cleanup is exact-manifest, and waiver/agent/hardware semantics fail closed.
- 2026-07-20 20:38: Addressed Round 2's three major findings by defining the immutable-actor single-operator authority policy, extending operation-scoped authorization to every provider mutation, and applying fail-closed evidence classification/redaction to screenshots, devices, queues, logs, cleanup, media, and provider artifacts.
