# Doing: Spoonjoy Cross-Client Delivery

**Status**: drafting
**Execution Mode**: direct
**Created**: 2026-07-20 21:27
**Planning**: ./2026-07-20-1958-planning-cross-client-delivery.md
**Artifacts**: ./2026-07-20-1958-doing-cross-client-delivery/

## Execution Mode

- **direct**: Execute units sequentially in the coordinating task. Fresh sub-agents perform the mandatory hostile reviews; source-repository work begins only after the retained TestFlight task's protected handoff validates.

## Objective

Build and pilot a production-grade delivery system that carries one Spoonjoy product contract through web/backend, native Apple, and MCP/agent implementations to independently verified exact releases and terminal cleanup. Only an authoritative `ReleaseSetPublished` append on the protected release ledger may declare the Product Change shipped.

## Upstream Work Items

- Codex task `019f2e25-2fc3-75b2-8ba3-335f3777115a`: its protected source-owner handoff and receiver acknowledgment are Unit 13's prerequisite; it retains the active TestFlight/source lane until validation succeeds.

## Completion Criteria

- [ ] `spoonjoy-delivery` has protected `main` and `release-ledger`, enforced checks/admin rules, no force-push/deletion, automatic merged-branch deletion, default read-only workflow tokens that cannot approve pull requests, selected SHA-pinned Actions, deterministic installs, strict TypeScript, zero-warning gates, and 100% statements/branches/functions/lines.
- [ ] Structural schemas and semantic validators reject unknown fields, malformed or duplicate identities, missing edges, cycles, illegal transitions, stale evidence, invalid dispositions, unauthorized actors, non-monotonic generations, competing claims, and ambiguous ownership.
- [ ] Product Contracts capture invariants, state transitions, authorization, ownership, errors, idempotency, ordering, offline behavior, compatibility, degradation, migration, rollback, and scenario expectations.
- [ ] RFC 8785 `semanticContractDigest`, `packDigest`, and `provenanceDigest` boundaries pass duplicate-key, ordering, number, Unicode, changed-projection, unrelated-source, and Swift/TypeScript golden-vector tests.
- [ ] Web emits the exact Photo Studio Contract Pack and exposes its runtime digest; native locks it, validates codecs/scenarios, embeds code-signed provenance, and externally binds app/archive/IPA/ASC identities.
- [ ] The protected ledger append workflow binds GitHub-reported actor identities and expected parent; direct/self-declared appends fail. Active claims reserve generations, environment approval releases exactly one claimed mutation job, and every race ordering is tested.
- [ ] Static typed operation DAGs authorize all real web/native/governance/provider alternatives; runtime receipts bind authoritative pre-state, hash-linked resolved inputs, selected branch, sanitized result, retries, and containment.
- [ ] Production deploy, migrations/capabilities/rollback/canary/reporting, TestFlight upload/metadata/group/notification/expiry, cleanup, artifact/attestation, finalization, projection, and tag paths reject missing, stale, revoked, wrong-SHA/generation/graph/claim authorization.
- [ ] Source-owned attestors use exact reviewed delivery SHA and least-privilege credentials, query providers independently, keep raw output private, emit sanitized GitHub artifact attestations, and are dispatched/verified through authenticated `gh` without provider secrets in delivery.
- [ ] Every evidence class passes public/private/forbidden classification and adversarial leak scanning before logs, summaries, annotations, caches, artifacts, commits, or releases.
- [ ] Rebaseline validates exact web/native main SHAs, release-task commit, protected handoff/acknowledgment, zero in-flight source mutations, and cleanup ownership before source edits.
- [ ] Current and previous client identities freeze; previous-source debug/simulator passes against staged Worker; a queue created by exact previous installed TestFlight replays idempotently after additive production deploy; pre-provenance binary attestation is explicit.
- [ ] Shared Photo Studio scenarios independently prove browser, iPhone TestFlight, iPad candidate, signed macOS candidate, deterministic MCP, and bounded agent experience where required, using a common backend oracle and run-owned data.
- [ ] Exact-manifest cleanup removes deletable run-owned D1/R2/OAuth/media/fixture/artifact/branch/worktree residue and explicitly classifies non-deletable provider records and preserved ownership.
- [ ] Named Worker/capability/migration/native-candidate/Release Set rollback and containment commands produce verified receipts.
- [ ] Negative proof injects stale/mismatched evidence and fails before a successful finalization.
- [ ] `ReleaseSetPublished` is the direct child of `FinalizationClaim`, contains the complete Release Set, and is the sole shipment event; main/tag/GitHub Release projections point to it without becoming alternate authorities.
- [ ] Fresh architecture, security, compatibility, test, release, and visual reviewers converge with no BLOCKER or MAJOR findings.
- [ ] Desk/repository records contain exact source SHAs, three digests, provider attestations, Worker/native/ASC identities, installed proof, cleanup proof, and authoritative ledger commit.

## Code Coverage Requirements

**MANDATORY: 100% coverage on all new code.**
- No coverage exclusions or warning suppression on new delivery, web, workflow-support, or native core logic.
- Every statement, branch, function, line, error path, retry, parser failure, transition, race, predicate alternative, redaction, provider failure, rollback, supersession, and cleanup refusal is tested.
- Edge cases include null, empty, duplicate, Unicode, numeric boundary, expiry boundary, malformed SHA/digest/ID, unknown field/type, ambiguous predicate, stale read, concurrent append, partial provider failure, and leaked evidence.
- Full repository suites and changed-code coverage remain green with zero warnings before each merge.

## TDD Requirements

**Strict TDD - no exceptions:**
1. **Tests first**: Write failing tests before implementation.
2. **Verify failure**: Run the focused command and capture the expected red result in the artifacts directory.
3. **Minimal implementation**: Write only enough code to satisfy the contract.
4. **Verify pass**: Re-run focused tests and capture green evidence.
5. **Refactor**: Keep behavior and coverage green.
6. **No skipping**: Workflow, settings, shell, Swift, and live-provider behavior require executable contract tests, not prose assertions.

## Work Units

### Legend
⬜ Not started · 🔄 In progress · ✅ Done · ❌ Blocked

### ⬜ Unit 0: Freeze Execution Context
**What**: Record the delivery branch/worktree, current delivery commit, web/native remote-main locator SHAs, active TestFlight task ownership, Node/pnpm/Swift/Xcode/GitHub CLI versions, GitHub actor/org IDs, repository visibility/settings, and the no-touch boundary for the active source lane. Verify installed planner/doer skills against repo-local sources when present.
**Output**: `unit-0-context.json`, `unit-0-repository-settings.json`, and `unit-0-ownership.md` under the artifacts directory.
**Acceptance**: JSON parses; IDs/SHAs are exact; no source checkout, deployment, TestFlight, or source worktree changed; the active TestFlight owner has the coordination message.

### ⬜ Unit 1a: Delivery Repository Foundation - Tests
**What**: Add red contract tests for package metadata, Node 22/pnpm pinning, strict compiler/linter/formatter settings, ESM exports/bin, deterministic scripts, warning failure, coverage thresholds, repository instructions, ignored private artifacts, and SHA-pinned workflow actions. Run the pre-package red test with `corepack pnpm@10.28.1 dlx --allow-build=esbuild vitest@4.0.18 run test/repository-contract.test.ts` so Unit 1a does not depend on Unit 1b.
**Output**: `test/repository-contract.test.ts` plus red logs.
**Acceptance**: The pinned bootstrap command runs without a repository package and fails only because foundation files/configuration are absent.

### ⬜ Unit 1b: Delivery Repository Foundation - Implementation
**What**: Add `package.json`, `pnpm-lock.yaml`, `tsconfig.json`, `eslint.config.mjs`, `vitest.config.ts`, formatter config, `.gitignore`, `AGENTS.md`, `src/index.ts`, `src/cli.ts`, and `README.md` using Node 22, pnpm 10.28.1, ESM, strict TypeScript, Ajv 2020, YAML strict parsing, RFC 8785 canonicalization, and zero-warning scripts.
**Output**: Installable `spoonjoy-delivery` package and green repository contract.
**Acceptance**: Frozen install, format check, lint, typecheck, focused tests, and build pass without warnings.

### ⬜ Unit 1c: Delivery Repository Foundation - Coverage
**What**: Cover CLI success/failure/help/version and configuration branches; run all foundation gates.
**Output**: Coverage and warning logs.
**Acceptance**: 100% statements/branches/functions/lines for new code and all gates green.

### ⬜ Unit 2a: Structural Schemas and Parsing - Tests
**What**: Add red fixture tests for every planning object, `ReceiverAcknowledged`, bootstrap/bootstrap-resume/recovery authorization/claim/receipt unions with deliberately null workflow fields, `BootstrapRolledBack`, the installed-gate governance union with required run fields, rollback-proof selectors, proof-dependency manifests/replay decisions/no-replay receipts, strict JSON/YAML parsing, duplicate keys, unknown fields, invalid versions/IDs/SHAs/digests/timestamps, empty collections, malformed unions, and schema fixture drift.
**Output**: `schemas/*.schema.json`, `test/schema.test.ts`, `test/fixtures/schema/{valid,invalid}/`, and red logs.
**Acceptance**: Tests fail on missing parser/schema implementation and demonstrate each rejection path.

### ⬜ Unit 2b: Structural Schemas and Parsing - Implementation
**What**: Implement `src/parse.ts`, `src/schema.ts`, and versioned JSON Schemas for authority policy, Product Change/Contract/Pack, `ReceiverAcknowledged`, authorization, claims/terminals/cancellation, closed bootstrap/bootstrap-resume/recovery exception unions and terminals, the installed-gate governance union, operation graph/receipt, rollback-proof selector, proof-dependency manifest/replay decision/no-replay receipt, evidence/attestation, handoff/rebaseline, cleanup, finalization, Release Set, and projections. Workflow run/attempt may be null only for exact interactive exception kinds; installed-gate and all other workflow-backed claims/receipts require them.
**Output**: Strict typed parser API with machine-readable validation errors.
**Acceptance**: Valid fixtures parse; every invalid fixture fails closed with stable error codes; no permissive additional properties.

### ⬜ Unit 2c: Structural Schemas and Parsing - Coverage
**What**: Add missing parser/schema branch and error-format tests; validate every checked-in YAML/JSON example.
**Output**: Schema inventory and coverage logs.
**Acceptance**: 100% coverage, zero warnings, all schema examples green.

### ⬜ Unit 3a: Canonical Digests - Tests
**What**: Add red RFC 8785/duplicate-key/golden-vector tests for semantic, pack, and provenance digests, deterministic path ordering, projection/fixture/scenario hash sets, source/tree/validator identity, Unicode/numeric boundaries, and TypeScript/Swift cross-language vectors.
**Output**: `test/digests.test.ts`, `test/fixtures/digests/`, and red logs.
**Acceptance**: Tests prove changed projections preserve semantic digest but change pack digest, while unrelated source changes affect only provenance.

### ⬜ Unit 3b: Canonical Digests - Implementation
**What**: Implement `src/canonical.ts`, `src/digests.ts`, digest manifests, and a CLI command that builds/verifies Contract Packs without reading undeclared files.
**Output**: Deterministic digest library and `contract pack|verify` CLI.
**Acceptance**: Golden vectors and dependency-boundary tests pass byte-for-byte.

### ⬜ Unit 3c: Canonical Digests - Coverage
**What**: Cover all canonicalization, filesystem ordering, missing/duplicate projection, and digest mismatch paths.
**Output**: Coverage, fixture-validation, and warning logs.
**Acceptance**: 100% coverage and deterministic repeated-run digest equality.

### ⬜ Unit 4a: Ledger State Machine and Authority - Tests
**What**: Add red semantic tests for authority roles, GitHub actor/run provenance, allowed transitions, monotonic generations, expected-parent CAS, active-generation reservation, pre/post-claim supersession, emergency cancellation, terminal containment, expired claims, direct-child finalization, unauthorized/self-declared appends, `ReceiverAcknowledged` predecessor/authority/idempotency/active-claim races, bootstrap success/pre-mutation abort/post-mutation rollback-and-resume semantics, drift-recovery authorization, and every race ordering.
**Output**: `test/ledger.test.ts`, ledger history fixtures, and red logs.
**Acceptance**: Tests exercise both winners of each CAS race and reject all illegal histories.

### ⬜ Unit 4b: Ledger State Machine and Authority - Implementation
**What**: Implement `src/authority.ts`, `src/ledger.ts`, `src/transitions.ts`, immutable actor policy `policies/authority-v1.yaml`, `ReceiverAcknowledged`, exact source-agnostic authority rules for bootstrap/recovery, append payload/digest generation, and local history validation for `refs/heads/release-ledger`. `ReceiverAcknowledged` is legal only on a quiescent terminal ledger head with no active/reserved claim, through exact merged protected workflow triggered by actor `16390116`; its key is `(upstream_handoff_digest, receiver_task_id)`, identical retry resolves to the existing commit, and a second/different payload for that key is forbidden. Bootstrap target success is consumed once per repository/environment identity; pre-mutation abort is non-consuming; after partial mutation, exact-prestate `BootstrapRolledBack` may terminate even after expiry and permits only same-identity/prestate/target resume. Recovery only restores last attested policy.
**Output**: Deterministic ledger transition engine.
**Acceptance**: Only protected-workflow/provider-bound actors and legal expected-parent transitions validate; bootstrap target cannot succeed twice, pre-mutation abort does not consume it, exact-prestate post-mutation rollback ends the active claim without widening future resume authority, recovery cannot alter policy or run without drift, and no exception authorizes source/provider mutation; shipment is possible only through direct-child `ReleaseSetPublished`.

### ⬜ Unit 4c: Ledger State Machine and Authority - Coverage
**What**: Complete transition-table, clock/expiry, race, cancellation, and malformed-history coverage.
**Output**: State-machine matrix and coverage logs.
**Acceptance**: 100% coverage, mutation testing spot checks reject removed guards, zero warnings.

### ⬜ Unit 5a: Typed Operation DAGs - Tests
**What**: Add source-agnostic red tests for static templates, typed topological dataflow, authoritative-query/prior-receipt inputs, branch cardinality, template/resolved digests, per-request drift, idempotency, retry, compensation, partial failure, typed rollback-target universe/eligibility/priority/total-order/setup/refusal including duplicate/conflicting IDs and exact ties, the reserved bootstrap interactive node sequence, same-identity/prestate/target-only bootstrap resume, the installed-gate governance successor, and restore-only drift recovery. Use fictional provider fixtures only; exact web/native provider-operation inventories wait for Unit 13.
**Output**: `test/operation-graph.test.ts`, generic operation fixtures, and red logs.
**Acceptance**: Unknown methods/paths/nodes, unresolved/multiple/out-of-graph values, stale pre-state, and ambiguous POST/PATCH/skip branches fail.

### ⬜ Unit 5b: Typed Operation DAGs - Implementation
**What**: Implement `src/operation-graph.ts`, `src/receipts.ts`, deterministic rollback-target selection/setup planning, fixed source-agnostic governance graphs, canonical expression resolution, dry-run plans, apply-time revalidation, receipt chaining, and containment planning. Candidate universe is the union of current-Product-Change run-owned manifests and authoritative provider inventory for the target type. Reject non-run-owned, wrong-identity/state, missing-time, or conflicting duplicate IDs; collapse byte-identical duplicates. Among eligible candidates choose the minimum total key `(priority_tier integer, created_at UTC epoch milliseconds, canonical target_id UTF-8 bytes lexicographically)`. Equal full keys or malformed keys fail closed. Only when no tier-1 candidate exists may a single setup target derived from claim digest enter tier 2. Record all candidates/reasons/freshness/key/selection/setup/forbidden mutations.
**Output**: Validated static DAG and runtime receipt APIs plus `operation dry-run|verify-receipts` CLI.
**Acceptance**: Generic fixtures resolve one authorized branch per node and preserve hash-linked provenance without embedding assumptions about unvalidated source workflows.

### ⬜ Unit 5c: Typed Operation DAGs - Coverage
**What**: Cover every graph node/alternative, retry/compensation branch, and receipt-link failure.
**Output**: DAG matrix and coverage logs.
**Acceptance**: 100% coverage and zero warnings.

### ⬜ Unit 6a: Evidence Classification and Redaction - Tests
**What**: Add red adversarial tests for secrets, tokens, headers, emails, names, account/device IDs, private paths, D1 rows, queue payloads, media metadata, images, logs, summaries, annotations, caches, artifacts, unknown fields/classes, ANSI/multiline/encoded leaks, and raw provider failures.
**Output**: `test/evidence-policy.test.ts`, hostile fixtures, and red logs.
**Acceptance**: Every leak channel fails publication before emission; sanitized fixtures preserve required proof fields/digests.

### ⬜ Unit 6b: Evidence Classification and Redaction - Implementation
**What**: Implement `src/evidence-policy.ts`, `src/redact.ts`, public/private/forbidden registry, provider allowlists, pre-stream safe process capture, sanitized error summaries, and `evidence scan|sanitize` CLI.
**Output**: One evidence gate shared by all workflows/CLIs.
**Acceptance**: Raw stdout/stderr remains `0600` runner-temporary; no `tee`, xtrace, secret-bearing argument, raw replay, or unclassified upload path exists.

### ⬜ Unit 6c: Evidence Classification and Redaction - Coverage
**What**: Fuzz encodings/delimiters and cover classifier/scanner/sanitizer/process error branches.
**Output**: Leak matrix, fuzz seed corpus, and coverage logs.
**Acceptance**: 100% coverage, deterministic sanitized output, zero warnings.

### ⬜ Unit 7a: GitHub Run, Attestation, and Environment APIs - Tests
**What**: Add red mocked-HTTP tests for exact workflow dispatch, run/attempt/workflow SHA/actor verification, waiting-job/environment inventory, singleton enforcement, approval request/response, authenticated viewer and named-environment queries, sanitized UI-evidence ingestion for bootstrap/resume/governance/recovery graphs, resume identity/prestate/target mismatch rejection, before/after transition checks, artifact identity/download/digest/expiry, GitHub attestation claims, reruns/forks/mutable refs/rate limits/pagination/retries, and redacted errors.
**Output**: `test/github.test.ts`, HTTP fixtures, and red logs.
**Acceptance**: All stale, ambiguous, unauthorized, replayed, or leaking provider states fail closed.

### ⬜ Unit 7b: GitHub Run, Attestation, and Environment APIs - Implementation
**What**: Implement `src/github.ts`, `src/attestations.ts`, authenticated `gh` adapter, exact dispatch/wait/download/verify, environment review handshake, `environment bootstrap|resume|govern|recover plan|receipt|verify` for the fixed interactive graphs, and artifact-attestation verification. The CLI validates and hashes bounded browser-produced UI evidence; it cannot synthesize actor identity, terminate rollback without exact prestate, change resume/recovery targets, or invoke source/provider operations.
**Output**: `attestor dispatch|verify` and `claim approve` CLI commands with dependency injection for tests.
**Acceptance**: Mocked provider matrix passes; production code never logs token/provider payloads.

### ⬜ Unit 7c: GitHub Run, Attestation, and Environment APIs - Coverage
**What**: Cover all HTTP/status/retry/pagination/timeout/cancellation/approval branches.
**Output**: Coverage and warning logs.
**Acceptance**: 100% coverage and zero warnings.

### ⬜ Unit 8a: Protected Ledger Append and Finalization - Tests
**What**: Add red workflow/semantic tests for exact-SHA append workflow, expected-parent update, `ReceiverAcknowledged` actor/payload/idempotent retry/active-claim refusal, provider actor/run binding, claim/terminal/cancellation/finalization payloads, singleton environment governance, coordinator-before-local ordering, nonce-bound evidence ingest, operator disappearance/timeout abort, final source-attestor plans/artifacts/age, point-in-time provider consistency semantics, Release Set proof graph, stale evidence, direct-child shipment, aborted finalization, and non-authoritative main/tag projections.
**Output**: `test/finalization.test.ts`, `test/workflow-contract.test.ts`, workflow fixtures, and red logs.
**Acceptance**: Direct pushes, wrong parent/actor/workflow, interleaved finalization, stale provider evidence, and projection-only shipment fail.

### ⬜ Unit 8b: Protected Ledger Append and Finalization - Implementation
**What**: Implement `src/finalize.ts`, `src/projections.ts`, `.github/workflows/ledger-append.yml`, `.github/workflows/finalization-coordinator.yml`, `.github/workflows/finalization-evidence.yml`, `.github/workflows/project-release-set.yml`, nonce-bound GitHub artifact attestations, and CLI commands for authorize/revoke/claim/terminal/cancel/finalize/project. The coordinator starts before local/provider queries, accepts one exact evidence artifact, and appends `FinalizationAborted` on timeout or invalid evidence.
**Output**: Exact-SHA protected workflow append path and complete Release Set compiler.
**Acceptance**: Local fixture history ships only via `ReleaseSetPublished`; projection retries do not alter ledger truth.

### ⬜ Unit 8c: Protected Ledger Append and Finalization - Coverage
**What**: Cover every finalization rejection, race, failed query, projection retry, and attestation claim.
**Output**: Finalization matrix and coverage logs.
**Acceptance**: 100% coverage, zero warnings, workflow contracts green.

### ⬜ Unit 9a: Rebaseline, Handoff, and Cleanup - Tests
**What**: Add red tests for outbound-owner-release ingestion, strict receiver-ack projection, protected `ReceiverAcknowledged` ledger binding, byte-identical protected-field equivalence, remote commit reachability, exact main/task SHAs, in-flight run detection, cleanup ownership, worktree status, exact-manifest D1/R2/OAuth/media fingerprints, reference checks, dry-run/apply parity, non-deletable provider dispositions, and deletion refusal.
**Output**: `test/rebaseline.test.ts`, `test/cleanup.test.ts`, fixtures, and red logs.
**Acceptance**: Missing/mismatched handoff, dirty/ambiguous ownership, broad deletes, drifted fingerprints, and unclassified retained records fail.

### ⬜ Unit 9b: Rebaseline, Handoff, and Cleanup - Implementation
**What**: Implement `src/rebaseline.ts`, `src/handoff.ts`, `src/cleanup.ts`, `handoff acknowledge|verify`, `rebaseline verify`, and `cleanup plan|verify|apply`. `handoff acknowledge` generates a strict receiver-ack projection from exact outbound artifact/commit and protected ledger event; `handoff verify` re-queries both remotes and equivalence. Cleanup apply adapters remain disabled unless an exact claimed operation invokes them.
**Output**: Source-ownership gate and exact-manifest cleanup engine.
**Acceptance**: Fixture dry-run/apply/verify receipts match; no broad production cleanup exists.

### ⬜ Unit 9c: Rebaseline, Handoff, and Cleanup - Coverage
**What**: Cover repository/provider drift, partial deletion/containment, retry, preserved records, and worktree refusal.
**Output**: Coverage and cleanup safety logs.
**Acceptance**: 100% coverage, zero warnings.

### ⬜ Unit 10a: Delivery CLI, Samples, and Documentation - Tests
**What**: Add red end-to-end CLI tests for init/validate/digest/authorize/dispatch/claim/receipt/evidence/rebaseline/cleanup/finalize/project, `replay evaluate`, and `environment bootstrap|resume|govern|recover` commands, stable exit codes/JSON, sample Product Change/Contract/Release Set validation, and docs command/path drift.
**Output**: `test/cli-e2e.test.ts`, sample fixtures, and red logs.
**Acceptance**: Command matrix fails only on missing wiring/docs.

### ⬜ Unit 10b: Delivery CLI, Samples, and Documentation - Implementation
**What**: Wire the CLI; add `examples/`, `docs/architecture.md`, `docs/authority-and-ledger.md`, `docs/operation-graphs.md`, `docs/evidence-policy.md`, `docs/source-integration.md`, `docs/rollback.md`, and `docs/photo-studio-pilot.md` without secrets/private paths, including bootstrap failure/consumption semantics, exact UI paths, receipt semantics, installed-gate changes, restore-only drift recovery, and the honest point-in-time consistency boundary across independent Cloudflare and ASC control planes.
**Output**: Usable operator CLI and complete public docs.
**Acceptance**: Samples validate; docs commands execute; no stale names or unverifiable shipment language.

### ⬜ Unit 10c: Delivery CLI, Samples, and Documentation - Coverage
**What**: Complete CLI/output/docs-drift coverage and run the full delivery suite.
**Output**: Full delivery validation artifact set.
**Acceptance**: Format, lint, typecheck, test, 100% coverage, build, advisory/security scan, warning scan, and docs drift all green.

### ⬜ Unit 11a: Delivery CI and Settings Contracts - Tests
**What**: Add red tests for CI jobs, SHA-pinned Actions, artifact-attestation permissions, dependency/advisory gates, protected main/ledger rules, workflow-only ledger bypass, environment reviewers, token permissions, and automatic branch deletion.
**Output**: CI/settings contract tests and red logs.
**Acceptance**: Tests fail against the repository's current permissive Actions/settings state.

### ⬜ Unit 11b: Delivery CI and Settings Contracts - Implementation
**What**: Add SHA-pinned `.github/workflows/ci.yml`, settings verifier/apply-plan commands, dependency/advisory checks, and non-mutating fixture support for branch/ruleset/environment contracts.
**Output**: Reviewable CI and governance code.
**Acceptance**: Focused contracts pass against fixtures; no live repository setting changes yet.

### ⬜ Unit 11c: Delivery CI and Settings Contracts - Coverage
**What**: Cover missing checks, unpinned actions, permission escalation, wrong reviewer/bypass, failed API reads, pagination, and settings drift.
**Output**: Coverage and warning logs.
**Acceptance**: 100% coverage, all delivery gates green, zero warnings.

### ⬜ Unit 11d: Delivery Repository Settings - Apply and Verify
**What**: Capture settings-before, apply automatic branch deletion, read-only workflow tokens, no PR approval, selected SHA-pinned Actions, protected main, protected `release-ledger`, no force/delete, required checks/admin enforcement, workflow-only ledger bypass, and delivery environments; capture settings-after without invoking the not-yet-merged append workflow.
**Output**: Before/apply/after JSON and settings-verifier report.
**Acceptance**: Settings verifier passes against live GitHub; no ledger append or provider mutation occurs before workflow merge.

### ⬜ Unit 12a: Delivery Hostile Review and TDD Repair
**What**: Run fresh architecture, security, privacy, test, and release reviewers over the delivery diff and repair every BLOCKER/MAJOR through new red tests and green implementation.
**Output**: Review verdicts and atomic repair commits.
**Acceptance**: All reviewers converge; full local gates remain green at 100% coverage with zero warnings.

### ⬜ Unit 12b: Delivery Pull Request and Protected CI
**What**: Open the delivery PR, complete self-review, run protected CI, and repair any PR-only failure without merging.
**Output**: PR URL, exact head SHA, CI run IDs, and terminal reviewer verdict.
**Acceptance**: All required checks succeed on the exact head; no unresolved review thread or in-flight run.

### ⬜ Unit 12c: Delivery Merge and Exact-Main Proof
**What**: Merge the protected PR, verify exact delivery main/CI, preserve the coordinating worktree, and rotate it onto clean `worker/cross-client-delivery-records-r0` based on verified main for Units 13-29e.
**Output**: Merge SHA, exact-main run IDs, settings post-query, records branch/worktree path/base SHA, and retired implementation-branch receipt.
**Acceptance**: Main is clean/green; no in-flight delivery mutation; coordinating worktree remains clean on the exact records base.

### ⬜ Unit 12d: Protected Ledger Append Live Proof
**What**: From exact merged delivery main, prove direct ledger update fails and a disposable non-shipping protected-workflow append succeeds, then terminally contain/remove the fixture through the same ledger semantics.
**Output**: Append run/attempt ID, ledger parent/fixture/containment commits, actor/workflow identity, direct-push rejection, and post-query.
**Acceptance**: Only merged protected workflow can append; fixture is non-shipping and terminally contained; no provider mutation.

### ⬜ Unit 13a0: Cross-Task Handoff Contract Interoperability
**What**: Without touching source code/provider state, wait for the release owner to push its tests-first handoff repair: canonical `outbound-owner-release.json` usage, strict `receiver-ack.schema.json`, `scripts/verify-release-ownership-handoff.rb`, consistent cleanup/evidence-index paths, and tests that bind a receiver projection to the protected `ReceiverAcknowledged` ledger event. Inspect the exact remote commit and run its fixture/verifier gates read-only.
**Output**: Upstream repair commit/PR/main reachability, changed path inventory, exact test commands/results, schema/verifier digests, and coordination receipt.
**Acceptance**: Upstream owner confirms it still owns source; one canonical outbound filename exists; receiver schema/verifier bind outbound commit/digest, delivery projection commit, ledger commit/payload, exact protected fields, receiver IDs, and remote reachability; all tests pass with zero warnings. No source/provider mutation by this task.

### ⬜ Unit 13a1: Upstream Source Owner Handoff Ingestion
**What**: Wait in-turn for task `019f2e25-2fc3-75b2-8ba3-335f3777115a` and ingest its terminal protected outbound handoff naming this cross-client task without touching source repositories.
**Output**: Upstream `outbound-owner-release.json` commit/path/SHA-256, release-task commit, exact web/native/provider state, zero-in-flight fields, and cleanup owner.
**Acceptance**: Artifact validates against the exact Unit 13a0 schema/verifier and names this task, but ownership remains upstream until Units 13a2-13a3 validate; no source mutation is performed.

### ⬜ Unit 13a2: Cross-Client Receiver Acknowledgment
**What**: Validate Unit 13a1, use exact merged `.github/workflows/ledger-append.yml` to append non-shipping `ReceiverAcknowledged` to protected `release-ledger`, independently verify it, then run `handoff acknowledge` to write `records/handoffs/<outbound-sha256>/receiver-ack.json` on `records-r0`. Commit/push that projection, verify its remote reachability, and send outbound/projection/ledger locators to the release owner. The projection is not authoritative without the ledger event.
**Output**: Protected append run/parent/ledger commit/payload; actor/workflow proof; receiver-ack path/SHA-256 and delivery projection commit; remote post-queries; coordination receipt.
**Acceptance**: Ledger event and projection both bind exact outbound commit/path/digest, protected fields, receiver IDs, and each other; same retry idempotent, mismatch rejected; delivery projection commit remote-reachable; upstream schema passes; source/provider untouched.

### ⬜ Unit 13a3: Upstream Two-Sided Handoff Verification
**What**: Wait for the release owner to ingest the exact Unit 13a2 projection, commit/push byte-identical `receiver-ack.json` in its canonical release task tree, run its repaired verifier against `outbound-owner-release.json` plus that acknowledgment, and send the exact upstream commit/output. Independently rerun delivery `handoff verify` against both remotes and protected ledger.
**Output**: Upstream receiver-ack commit/path/digest, verifier output/digest, delivery verification output, all remote-reachability queries, and explicit ownership-transfer receipt.
**Acceptance**: Both verifiers agree byte-for-byte on every protected field and exact commits/digests; ledger event/projection/upstream copy are mutually bound and remote-reachable; upstream explicitly releases ownership only now; any mismatch leaves ownership upstream and blocks Unit 13b.

### ⬜ Unit 13b: Source Rebaseline Verification
**What**: Query exact web/native remote main, open PRs, active workflow runs, deployments, TestFlight mutations, worktrees, and cleanup ownership; run `rebaseline verify`.
**Output**: Rebaseline bundle and validator report.
**Acceptance**: Units 13a0-13a3 all validate by independent GitHub queries; zero in-flight source mutation/deploy/release work, exact SHAs, explicit cleanup ownership, and green validator. Neither outbound artifact, ledger-only event, nor branch-only projection can unlock source work alone.

### ⬜ Unit 13c: Source Worktree Creation
**What**: Create isolated `worker/cross-client-delivery` web/native worktrees from the exact validated mains and record branch/upstream state.
**Output**: Source worktree paths, branches, base SHAs, and clean-status proof.
**Acceptance**: Both worktrees are clean, agent-scoped, and based on rebaseline SHAs; pre-existing/dirty worktrees remain untouched.

### ⬜ Unit 13d: Pre-Edit Compatibility Freeze
**What**: Freeze pre-edit web/native SHAs plus current/previous ASC build IDs, versions, source SHAs, release runs, bundle metadata, and available installed identities before any source edit.
**Output**: Protected compatibility-freeze artifact consumed by Units 14-25.
**Acceptance**: Independent GitHub/ASC queries agree; transitional provenance fields are complete; freeze digest is stable and protected.

### ⬜ Unit 14a: Web Product Contract and Pack - Tests
**What**: In the web worktree, add red tests for `contracts/photo-studio-v1.json`, OpenAPI/MCP/fixture/scenario projection hashes, Product Contract completeness, generated pack determinism, runtime digest exposure, stale projection rejection, and delivery validator exact-SHA pinning.
**Output**: Focused web red tests and contract fixtures.
**Acceptance**: Tests fail only because contract-pack generation/runtime integration is absent.

### ⬜ Unit 14b: Web Product Contract and Pack - Implementation
**What**: Add the normative Photo Studio contract, `scripts/build-product-contract-pack.ts`, checked generated pack, and runtime semantic/pack/provenance identities in `app/routes/well-known.spoonjoy-release-readiness.tsx`; integrate current OpenAPI, MCP tool schemas, cover/spoon fixtures, and scenario IDs without changing existing product behavior.
**Output**: Exact web-owned Contract Pack.
**Acceptance**: Focused tests, OpenAPI/MCP drift checks, typecheck, and build pass.

### ⬜ Unit 14c: Web Product Contract and Pack - Coverage
**What**: Cover generation, missing/stale projections, duplicate keys, filesystem errors, readiness exposure, and no-op behavior.
**Output**: Web coverage/warning logs.
**Acceptance**: 100% changed-code coverage, full web suite green, zero warnings.

### ⬜ Unit 15a: Web Release Authorization - Tests
**What**: Add red tests for non-environment preflight, one protected mutation job/environment, authorization/claim verification, claimed read-only `authorize-environment-governance-update` and `verify-environment-governance` operations that wait on `production` without provider credentials, no legacy unbound auto-deploy, DAG receipt/containment hooks, and private provider capture.
**Output**: Web release workflow red tests.
**Acceptance**: Current automatic/unbound deploy and mixed protected-job behavior are rejected by tests.

### ⬜ Unit 15b: Web Release Authorization - Implementation
**What**: Split `.github/workflows/production-deploy.yml` into preflight plus singleton claimed mutation operations; add claimed read-only `authorize-environment-governance-update` and `verify-environment-governance` branches under the same `production` gate, with the former emitting a bounded approved-job grant and the latter asserting settings; pin exact delivery validator; and gate D1/deploy/canary/report/artifact nodes with private output and receipts.
**Output**: Authorized production workflow.
**Acceptance**: Workflow contract tests, security tests, typecheck/build, and dry-run fixtures pass; no provider mutation occurs in validation.

### ⬜ Unit 15c: Web Release Authorization - Coverage
**What**: Cover absent/stale/revoked claims, environment mismatch, governance authorization/verification with no provider-secret or deploy access, each operation alternative/receipt/containment, and log leaks.
**Output**: Web workflow coverage and warning logs.
**Acceptance**: 100% changed-code coverage, full suite green, zero warnings.

### ⬜ Unit 16a: Web Provider Attestor - Tests
**What**: Add red tests for source-owned exact-delivery-SHA dispatch, FinalizationClaim/nonce binding for final-query mode, least-privilege Cloudflare/D1/R2/GitHub queries, complete fingerprints/audit-watermarks, strict IMF-fixdate GMT parsing/UTC normalization, per-provider `S/C/R` observation windows, final consistency requery after pagination, inclusive ±5-second/120-second boundaries, missing/stale/future/substituted timestamps, sanitized output, artifact attestation, expiry, and wrong run/ref/event.
**Output**: Web attestor red tests.
**Acceptance**: Self-authored deploy summaries and broad/mutable evidence fail verification.

### ⬜ Unit 16b: Web Provider Attestor - Implementation
**What**: Add the source-owned production attestor workflow and scripts, including a final-query mode bound to a delivery FinalizationClaim and nonce, that capture raw responses privately, perform final inventory consistency requery, record signed per-provider observation windows/server-clock proof, and emit only complete allowlisted attested evidence.
**Output**: Independent web/Cloudflare/D1/GitHub attestor.
**Acceptance**: Mock and live read-only dry runs plus artifact verification pass without mutation.

### ⬜ Unit 16c: Web Provider Attestor - Coverage
**What**: Cover provider/API/attestation/redaction/retry/expiry branches.
**Output**: Attestor coverage and warning logs.
**Acceptance**: 100% changed-code coverage, full web gates green.

### ⬜ Unit 17a: Web Exact Cleanup - Tests
**What**: Add red tests for run-owned D1/R2/OAuth/media fingerprints, reference-safe plan/apply/verify, drift, partial failure, preserved records, and broad/non-owned deletion refusal.
**Output**: Web cleanup red tests.
**Acceptance**: Broad cleanup and non-run-owned deletion are impossible; existing QA/local cleanup behavior remains intact.

### ⬜ Unit 17b: Web Exact Cleanup - Implementation
**What**: Add exact-manifest cleanup adapters and receipts while leaving broad production cleanup disabled.
**Output**: Claimed D1/R2/OAuth/media cleanup operations.
**Acceptance**: Local/QA fixture apply proves parity and zero run-owned residue; production adapter cannot apply without claim.

### ⬜ Unit 17c: Web Exact Cleanup - Coverage
**What**: Cover provider drift, retries, reference conflicts, partial cleanup, preserved records, and claim refusal.
**Output**: Web cleanup coverage logs.
**Acceptance**: 100% changed-code coverage, full suite/build green, zero warnings.

### ⬜ Unit 18a: Web Shared Scenarios - Tests
**What**: Add red tests for run-owned Photo Studio seed/action/oracle/cleanup, browser/MCP actor manifests, bounded agent trial schema, editorialize/Spoon options, retries, private evidence, and stale-digest negative proof.
**Output**: Web scenario red tests.
**Acceptance**: Unbound actors, wrong digests, duplicate effects, and leaking evidence fail.

### ⬜ Unit 18b: Web Shared Scenarios - Implementation
**What**: Implement shared Photo Studio browser/MCP/agent harness using current cover/spoon APIs and one deterministic backend oracle.
**Output**: Reusable actor scenario harness.
**Acceptance**: Local/QA fixture runs pass and clean only run-owned state.

### ⬜ Unit 18c: Web Shared Scenarios - Coverage
**What**: Cover upload/generate/editorialize/Spoon/error/retry/oracle/agent-threshold/cleanup paths.
**Output**: Scenario coverage and warning logs.
**Acceptance**: 100% changed-code coverage, full web suite/build green.

### ⬜ Unit 19a: Native Contract Lock - Tests
**What**: Add red Swift tests for three digest golden vectors, expected-pack mismatch, Photo Studio codecs/scenarios, transitional pre-provenance identity, and stale source using Unit 13d.
**Output**: Native contract red tests and cross-language fixtures.
**Acceptance**: Tests fail only on absent lock/codec integration.

### ⬜ Unit 19b: Native Contract Lock - Implementation
**What**: Add contract/digest types/resources and integrate expected-pack validation with current cover controls, offline queue, and scenario verifier.
**Output**: Native Contract Pack lock and parity scenarios.
**Acceptance**: Focused Swift tests/scenarios and cross-language vectors pass.

### ⬜ Unit 19c: Native Contract Lock - Coverage
**What**: Cover decoding/mismatch/resource/scenario errors and run full Swift coverage/warning gates.
**Output**: Native contract coverage logs.
**Acceptance**: 100% core coverage, full suite/scenarios/builds green, zero warnings.

### ⬜ Unit 20a: Native Archive Provenance - Tests
**What**: Add red tests for generated code-signed metadata, source/tree/build/validator identities, app/archive/IPA hashes, signature extraction, ASC binding, and self-hash prohibition.
**Output**: Native provenance red tests.
**Acceptance**: Tests fail only on missing provenance generation/binding.

### ⬜ Unit 20b: Native Archive Provenance - Implementation
**What**: Add build-time exact metadata and external package/archive attestation generation.
**Output**: Code-signed in-binary provenance and external archive binding.
**Acceptance**: iOS/macOS fixture builds and signature/hash extraction pass.

### ⬜ Unit 20c: Native Archive Provenance - Coverage
**What**: Cover missing/malformed build values, signature/hash mismatch, archive errors, and ASC mismatch.
**Output**: Provenance coverage/build logs.
**Acceptance**: 100% core/changed-script coverage, full builds green.

### ⬜ Unit 21a: Native TestFlight Authorization - Tests
**What**: Add red workflow tests for non-environment preflight, singleton internal-testflight mutation job, claimed read-only `authorize-environment-governance-update` and `verify-environment-governance` operations that wait on `internal-testflight` without ASC credentials, reviewer/self-review/no-bypass settings, claim/run/attempt validation, legacy dispatch rejection, receipts, and containment.
**Output**: Native workflow red tests.
**Acceptance**: Current unbound/mixed TestFlight path and raw `tee` output fail the new contracts.

### ⬜ Unit 21b: Native TestFlight Authorization - Implementation
**What**: Refactor `.github/workflows/testflight.yml` into exact preflight and claimed singleton mutation operations pinned to the delivery validator, including claimed read-only `authorize-environment-governance-update` and `verify-environment-governance` branches under the same `internal-testflight` gate; the former emits a bounded approved-job grant and the latter asserts settings.
**Output**: Authorized TestFlight workflow shell.
**Acceptance**: Focused contracts, full Swift suite, scenarios, builds, shell syntax, and warning scans pass.

### ⬜ Unit 21c: Native TestFlight Authorization - Coverage
**What**: Cover claim/environment/run/retry/containment, governance authorization/verification with no ASC-secret or upload access, and settings drift paths.
**Output**: Native workflow coverage logs.
**Acceptance**: 100% core/changed-script contract coverage, full gates green, zero warnings.

### ⬜ Unit 22a: Native Publisher Privacy and DAG - Tests
**What**: Add red tests for every current ASC upload/PATCH/POST/skip/409 alternative, typed receipt dataflow, drift, idempotency, partial failure, private stdout/stderr, and no `tee`/raw replay.
**Output**: Publisher red tests.
**Acceptance**: Current raw-output and ambiguous runtime-ID behavior fails.

### ⬜ Unit 22b: Native Publisher Privacy and DAG - Implementation
**What**: Refactor the publisher into authorized graph operations with private capture, sanitized receipts, typed runtime IDs, per-request revalidation, and containment.
**Output**: Receipt-producing TestFlight publisher.
**Acceptance**: Fixture dry-runs resolve exactly one branch per node; shell/Ruby/Swift contracts pass.

### ⬜ Unit 22c: Native Publisher Privacy and DAG - Coverage
**What**: Cover all provider alternatives, failures, retries, redaction, and containment.
**Output**: Publisher matrix and coverage logs.
**Acceptance**: Full native gates green, zero warnings.

### ⬜ Unit 23a: Native ASC Attestor - Tests
**What**: Add red tests for exact delivery SHA, FinalizationClaim/nonce binding for final-query mode, least-privilege ASC queries, app/build/group/metadata/notification state, complete fingerprints/audit-watermarks, strict IMF-fixdate GMT parsing/UTC normalization, `S/C/R` observation windows, final consistency requery after pagination, inclusive ±5-second/120-second boundaries, missing/stale/future/substituted timestamps, sanitization, artifact attestation, expiry, and wrong run/ref.
**Output**: ASC attestor red tests.
**Acceptance**: Publisher summaries and raw tester responses cannot verify.

### ⬜ Unit 23b: Native ASC Attestor - Implementation
**What**: Add source-owned read-only ASC attestor with private raw capture, allowlisted evidence, final inventory consistency requery, signed ASC/GitHub observation-window proof, and a final-query mode bound to a delivery FinalizationClaim and nonce.
**Output**: Independent ASC attestor.
**Acceptance**: Fixture/read-only dry run and attestation verification pass without mutation.

### ⬜ Unit 23c: Native ASC Attestor - Coverage
**What**: Cover query/pagination/state/redaction/attestation/error branches.
**Output**: ASC attestor coverage logs.
**Acceptance**: Full native gates green, zero warnings.

### ⬜ Unit 24a: Previous-Client Queue Compatibility - Tests
**What**: Add red tests for Unit 13d identities, previous-source staged routing, exact previous-installed queue seed/export, post-deploy replay, idempotent backend effect, transitional attestation, and cleanup.
**Output**: Queue compatibility red tests.
**Acceptance**: Tests reject simulator-as-TestFlight, source-token-as-installed-proof, unbound queue data, and mismatched actors/digests.

### ⬜ Unit 24b: Previous-Client Queue Compatibility - Implementation
**What**: Implement previous-source staged adapter and previous-installed queue seed/export/replay proof.
**Output**: Executable two-stage compatibility harness.
**Acceptance**: Local/staged fixture runs pass without production mutation and clean all run-owned fixture state.

### ⬜ Unit 24c: Previous-Client Queue Compatibility - Coverage
**What**: Cover queue/offline/error/retry/replay/duplicate/provenance/cleanup paths.
**Output**: Compatibility coverage logs.
**Acceptance**: Full native gates green at 100% core coverage.

### ⬜ Unit 25a: Native Actor Adapters and Oracle - Tests
**What**: Add red tests for iPhone/iPad/macOS actor manifests, installed provenance, shared scenario IDs, backend oracle, accessibility/performance/visual evidence, private artifact classification, and hardware blockers.
**Output**: Actor adapter red tests.
**Acceptance**: Mismatched platform/digest/proof type and simulated installed proof fail.

### ⬜ Unit 25b: Native Actor Adapters and Oracle - Implementation
**What**: Implement platform actor adapters, installed provenance capture, backend oracle integration, and sanitized evidence manifests.
**Output**: Native Photo Studio actor matrix.
**Acceptance**: Fixture scenarios pass on built apps without production mutation.

### ⬜ Unit 25c: Native Actor Adapters - Coverage and Visual QA
**What**: Cover actor/error/offline/private-evidence paths and run visual QA on all touched web/native fixtures.
**Output**: Coverage, sanitized visual verdict/digests, and closed absurdity ledger.
**Acceptance**: Full web/native gates green, 100% changed-code coverage, no warnings, no open visual finding.

### ⬜ Unit 26a: Web Source Hostile Review and Repair
**What**: Run contract, security, privacy, test, release, and visual reviewers on the web diff and repair through TDD.
**Output**: Converged web verdicts and repair commits.
**Acceptance**: No BLOCKER/MAJOR; full web gates green.

### ⬜ Unit 26b: Web Pull Request and Protected CI
**What**: Open the web PR, self-review, run protected CI, and repair PR-only failures without merge or deploy.
**Output**: PR/head/run IDs and terminal review state.
**Acceptance**: Exact head green; no unresolved or in-flight check.

### ⬜ Unit 26c: Web Merge and Exact-Main Proof
**What**: Coordinate merge, verify exact web main/CI, and prove no production deployment started.
**Output**: Merge SHA, exact-main runs, deployment query, and worktree ownership.
**Acceptance**: Main green, zero in-flight deploy, no source cleanup yet.

### ⬜ Unit 27a: Native Source Hostile Review and Repair
**What**: Run contract, security, privacy, compatibility, test, release, and visual reviewers on the native diff and repair through TDD.
**Output**: Converged native verdicts and repair commits.
**Acceptance**: No BLOCKER/MAJOR; full native gates green.

### ⬜ Unit 27b: Native Pull Request and Protected CI
**What**: Open the native PR, self-review, run protected CI, and repair PR-only failures without merge or TestFlight.
**Output**: PR/head/run IDs and terminal review state.
**Acceptance**: Exact head green; no unresolved or in-flight check.

### ⬜ Unit 27c: Native Merge and Exact-Main Proof
**What**: Coordinate merge, verify exact native main/CI, and prove no TestFlight run started.
**Output**: Merge SHA, exact-main runs, TestFlight query, and worktree ownership.
**Acceptance**: Main green, zero in-flight TestFlight, no source cleanup yet.

### ⬜ Unit 27d1: Web Production Environment Bootstrap
**What**: Append authorization and a claim for the versioned bootstrap exception, re-query authenticated GitHub actor `16390116`, capture web `production`, and use `Settings > Environments > production` to install the protected target. Capture every attempt/state. Failure before UI mutation may append non-consuming abort. After partial mutation, either continue to target success or prove exact prestate and append `BootstrapRolledBack`; any later attempt must use `github-environment-ui-bootstrap-resume-v1` with the same identity/prestate/target digests. No attempt grants source/provider authority.
**Output**: Authorization/claim plus target-success, pre-mutation-abort, or exact-prestate `BootstrapRolledBack` commit; per-attempt actor/environment/UI/API evidence; operation kind; explicitly null workflow run/attempt fields; receipt digest; and post-query.
**Acceptance**: Every attempt has an executable terminal; target success consumes bootstrap, pre-mutation abort is non-consuming, post-mutation rollback terminates safely but only same-target resume remains legal; UI/API evidence agree and independently prove bypass off; no workflow or deploy runs.

### ⬜ Unit 27d2: Web Production Environment Protected Proof
**What**: Authorize and claim the merged web workflow's read-only `verify-environment-governance` operation, dispatch it at exact main, prove its sole `production` job enters `waiting`, re-query approver actor `16390116`, approve that exact waiting job, and append its sanitized verification receipt plus terminal or containment.
**Output**: Authorization/claim/terminal-or-containment commits, workflow/run/attempt/job/environment IDs, waiting and approval API responses, actor proof, verification receipt digest, and authoritative post-query.
**Acceptance**: Exactly one claimed job waits and is approved by actor `16390116`; it validates current environment settings without access to Cloudflare/D1 secrets or deploy commands; terminal-or-containment appended; no deploy occurs.

### ⬜ Unit 27e1: Native Internal-TestFlight Environment Bootstrap
**What**: Append authorization and a claim for the versioned bootstrap exception, re-query authenticated GitHub actor `16390116`, capture native `internal-testflight`, and use `Settings > Environments > internal-testflight` to install the protected target. Capture every attempt/state. Failure before UI mutation may append non-consuming abort. After partial mutation, either continue to target success or prove exact prestate and append `BootstrapRolledBack`; any later attempt must use `github-environment-ui-bootstrap-resume-v1` with the same identity/prestate/target digests. No attempt grants TestFlight/provider authority.
**Output**: Authorization/claim plus target-success, pre-mutation-abort, or exact-prestate `BootstrapRolledBack` commit; per-attempt actor/environment/UI/API evidence; operation kind; explicitly null workflow run/attempt fields; receipt digest; and post-query.
**Acceptance**: Every attempt has an executable terminal; target success consumes bootstrap, pre-mutation abort is non-consuming, post-mutation rollback terminates safely but only same-target resume remains legal; UI/API evidence agree and independently prove bypass off; no workflow or TestFlight run starts.

### ⬜ Unit 27e2: Native Internal-TestFlight Environment Protected Proof
**What**: Authorize and claim the merged native workflow's read-only `verify-environment-governance` operation, dispatch it at exact main, prove its sole `internal-testflight` job enters `waiting`, re-query approver actor `16390116`, approve that exact waiting job, and append its sanitized verification receipt plus terminal or containment.
**Output**: Authorization/claim/terminal-or-containment commits, workflow/run/attempt/job/environment IDs, waiting and approval API responses, actor proof, verification receipt digest, and authoritative post-query.
**Acceptance**: Exactly one claimed job waits and is approved by actor `16390116`; it validates current environment settings without access to ASC secrets or upload commands; terminal-or-containment appended; no TestFlight upload occurs.

### ⬜ Unit 28: Merged-State Pilot Rebaseline
**What**: Re-query exact merged mains, environments, credential scopes, current/previous ASC identities, hardware, Codex host/model/tool digest, in-flight runs, and cleanup ownership.
**Output**: Pilot rebaseline/freeze record.
**Acceptance**: Validator green; singleton environments match actor/bypass rules; zero in-flight mutation; exact IDs recorded without secret values.

### ⬜ Unit 29a: Photo Studio Change and Exact Operation Graphs - Tests
**What**: Add red validation fixtures for exact merged web/native operation nodes/alternatives, Product Change classifications, compatibility matrix, evidence requirements, freeze references, and a complete proof-dependency manifest for Units 30-59. Tests require every node's direct immutable/runtime inputs, predecessor edges, propagation closure, original acceptance reference, and fail-closed replay/no-replay predicates.
**Output**: Red change/operation fixtures plus the coordinating records branch, worktree path, and exact base SHA inherited from Unit 12c.
**Acceptance**: Generic or stale pre-rebaseline graphs fail validation.

### ⬜ Unit 29b: Photo Studio Change and Exact Operation Graphs - Implementation
**What**: Add exact Product Change/source operation templates and `records/photo-studio-proof-dependencies.json`. Its direct inputs are: 30 web/delivery/workflow/graph/freeze/staged-policy; 31=30+ledger/environment/Worker-prestate; 32=31+previous-source/scenario; 33=31+web-attestor/staged-state; 34 previous-installed-build/queue/scenario; 35 web/delivery/D1-schema/migration/environment/D1-prestate; 36=35+web-pack/workflow/Worker-prestate; 37=36+canary/OAuth-fixture/cleanup-policy; 38=35-37+web-attestor/provider-state; 39=34-38+queue-contract; 40=35-38+browser-harness; 41=35-40+MCP-schema/harness; 42=35-41+agent-host/model/tool/budget; 43 native/delivery/workflow/archive-provenance/environment/ASC-prestate; 44=43+publisher-graph/ASC-metadata; 45=43-44+group-state; 46=43-45+notification-policy/state; 47=43-46+ASC-attestor; 48=43-47+iPhone/build/scenario; 49=43-47+iPad/build/scenario; 50 native/pack/signed-macOS/scenario; 51=36+Worker-predecessor/rollback-selector/graph/state; 52=36-40+capability-selector/isolation/graph/state; 53=35+migration/backup/containment-graph; 54=43-47+sacrificial-build-selector/supersession-graph/state; 55=35-42+D1-cleanup-manifest/state; 56=35-42+R2/media-manifest/state; 57=37+OAuth/token-manifest/state; 58a=43-57+provider-record-state/disposition-policy; 58b=30-58a+artifact-manifest/state; 59 ledger/finalization-workflow+all cleanup terminals. Unit 34 is a `historical_barrier`: its invalidation increments `compatibility_generation` and atomically marks Units 30-39 replay-required so queue seed occurs before a fresh Unit 36 candidate-version deploy. Classify source/build/contract/workflow/graph/ledger/operation-receipt/actor-result/rollback-result/cleanup-operation identities as durable: changed identity invalidates, elapsed time does not. Classify current source-main/check, environment, provider/ASC/runtime, cleanup-zero, build-eligibility, and feedback state as renewable observations with exact read-only renewal query/expected predicate; age requires refresh, not mutation replay. Generate transitive/barrier edges fail closed.
**Output**: Validated change/operation/dependency files, complete node-input/edge inventory, and dry-run/replay-evaluation plans.
**Acceptance**: Exactly one predicate per operation node; every proof node 30-59 has the listed direct inputs, transitive closure, and original acceptance reference; changed/missing/unknown inputs fail closed; all required/no-op/deferred rules valid.

### ⬜ Unit 29c: Photo Studio Change and Exact Operation Graphs - Hostile Review
**What**: Hostile-review the Product Change and graph records and make bounded fixture/data repairs without opening or merging a PR.
**Output**: Converged reviewer verdicts, repair commits, and final graph/change digests.
**Acceptance**: No BLOCKER/MAJOR; local validators green; no provider mutation.

### ⬜ Unit 29d: Photo Studio Change and Exact Operation Graphs - Pull Request
**What**: Open the delivery records PR and obtain protected CI plus terminal review on the exact head.
**Output**: PR URL, head SHA, CI run IDs, and review state.
**Acceptance**: Exact head green; no unresolved/in-flight check; no merge or provider mutation.

### ⬜ Unit 29e: Photo Studio Change and Exact Operation Graphs - Merge
**What**: Merge the protected `records-r0` PR, verify exact delivery main, and rotate the coordinating worktree onto clean `worker/cross-client-delivery-live-r1` at that exact main for Units 30-42.
**Output**: Merge SHA, exact-main CI runs, graph/change digest post-query, and clean `live-r1` branch/worktree/base locator.
**Acceptance**: Exact main green and matches reviewed records; `records-r0` retired; `live-r1` is pushed, clean, and contains no unreviewed receipt yet; no provider mutation.

### ⬜ Unit 30: Staged Web Preflight
**What**: Dispatch the exact staged preflight for the merged web SHA at 0% or version override and validate graph, dry-run, and preflight digest.
**Output**: Preflight run/attempt, workflow SHA, graph/freeze digests, and waiting environment/job inventory.
**Acceptance**: No mutation; one expected staged mutation job waits; all identities match.

### ⬜ Unit 31: Staged Web Claim and Mutation
**What**: Append staged authorization/claim, approve the singleton environment, execute staged Worker mutation, and append terminal or containment.
**Output**: Ledger parent/authorization/claim/terminal commits, run ID, Worker receipt, and provider post-query.
**Acceptance**: Only claimed job transitions; exact staged Worker exists at 0%; terminal or containment recorded.

### ⬜ Unit 32: Previous-Source Staged Scenario
**What**: Run frozen previous-source debug/simulator Photo Studio scenarios against the exact staged Worker, including queued mutation creation; clean staged run-owned state.
**Output**: Actor evidence, backend oracle, queue manifest, and cleanup receipt linked to Unit 31.
**Acceptance**: Exact previous source passes; mismatch negative fails; production traffic unchanged; zero staged residue.

### ⬜ Unit 33: Staged Independent Attestation
**What**: Dispatch and verify the read-only attestor for staged Worker/D1/runtime digest and bind it to Unit 31 terminal.
**Output**: Attestor run/artifact IDs, GitHub attestation, provider post-query, and evidence digest.
**Acceptance**: Exact identities match; no mutation; raw evidence absent from public output.

### ⬜ Unit 34: Previous Installed Queue Seed
**What**: On the frozen previous TestFlight build, create/export one run-bound offline Photo Studio mutation before the current `compatibility_generation` Unit 36 candidate-version production deploy; bind queue timestamp/generation and keep the device offline until Unit 39.
**Output**: Installed build/ASC/source identity, queue-before manifest, run-owned IDs, and private evidence digest.
**Acceptance**: Real frozen installed build; queue pending exactly once; queue evidence predates same-generation Unit 36 deploy; no production backend effect yet. Missing/invalid durable evidence requires a new compatibility generation, never standalone reseeding after its deploy.

### ⬜ Unit 35: Production D1 Migration Operation
**What**: Authorize, preflight, claim, approve, and apply or executable-no-op the exact D1 migration/backfill operation; post-query and append terminal.
**Output**: Authorization/claim/terminal-or-containment commits, run/attempt ID, migration receipt digest, authoritative D1 post-query, and containment receipt if needed.
**Acceptance**: Receipt binds exact claim/graph/run; terminal-or-containment appended; no pending migration; unrelated rows unchanged.

### ⬜ Unit 36: Production Worker Deploy Operation
**What**: Authorize, preflight, claim, approve, and apply exact Worker deploy; verify source/pack/runtime/traffic and append terminal.
**Output**: Authorization/claim/terminal commits, run/attempt ID, deploy receipt digest, Worker version/source/digests, authoritative post-query, and rollback locator.
**Acceptance**: Exact version active; health/readiness green; deploy receipt matches claim; terminal or containment commit recorded.

### ⬜ Unit 37: Production Canary and Reporting Operation
**What**: Authorize OAuth/user/token/legacy-row canary plus conditional GitHub report/artifact nodes, exact cleanup, post-query, and terminal append.
**Output**: Authorization/claim/terminal-or-containment commits, run/attempt ID, per-node receipt digests, issue/artifact IDs, cleanup receipt, and authoritative provider post-query.
**Acceptance**: Receipts bind exact claim/graph/run; terminal-or-containment appended; one branch per node; residue zero; no sensitive output.

### ⬜ Unit 38: Production Web Independent Attestation
**What**: Dispatch and verify read-only GitHub/Cloudflare/D1/R2/runtime attestors for Units 35-37.
**Output**: Attestor run/artifact/attestation IDs, provider post-queries, and evidence digests.
**Acceptance**: Exact source/Worker/pack/migration/capability state matches; no mutation; evidence fresh.

### ⬜ Unit 39: Previous Installed Queue Replay
**What**: Bring the frozen queued mutation online against production, verify one idempotent effect and user-visible result, then exact-clean run-owned state.
**Output**: Queue after-state, backend/UI oracle, transitional attestation, cleanup receipts, and post-query.
**Acceptance**: Replay once; no duplicate cover/spoon/media; zero run-owned residue.

### ⬜ Unit 40: Production Browser Actor Proof
**What**: Run upload/generate/editorialize/Spoon browser scenarios with run-owned data and exact cleanup.
**Output**: Browser evidence digest, backend oracle, cleanup receipts, and post-query.
**Acceptance**: Required semantics pass; private media stays private; residue zero.

### ⬜ Unit 41: Production MCP Actor Proof
**What**: Run the same scenarios through deterministic MCP protocol with exact tool-schema digest and cleanup.
**Output**: MCP transcript digest, backend oracle, cleanup receipts, and post-query.
**Acceptance**: Protocol and semantics pass without duplicate effects or residue.

### ⬜ Unit 42: Production Agent Experience Proof
**What**: Run five no-retry trials on frozen Codex host/model/tool digest under the token ceiling and exact cleanup.
**Output**: Five sanitized trial manifests, oracle scores, token total, cleanup receipts, and post-query.
**Acceptance**: At least four of five deterministic oracles pass; advisory taste cannot override; no leak or residue.

### ⬜ Unit 42a: Web Live-Records Hostile Review
**What**: Validate and hostile-review all public-safe Unit 30-42 records on `live-r1`, their ledger/provider locators, evidence classifications, and dependency-manifest updates; repair record data only without provider mutation.
**Output**: Converged verdicts, final `live-r1` head/digests, and private-artifact absence scan.
**Acceptance**: No BLOCKER/MAJOR; every Unit 30-42 terminal has one exact sanitized record; validators green; no raw/private evidence or provider mutation.

### ⬜ Unit 42b: Web Live-Records Pull Request
**What**: Open the `live-r1` records PR and obtain protected CI plus terminal review on the exact head.
**Output**: PR/head/run/review IDs.
**Acceptance**: Exact head green; no unresolved/in-flight check; no merge or provider mutation.

### ⬜ Unit 42c: Web Live-Records Merge and Rotation
**What**: Merge `live-r1`, verify exact delivery main/CI, and rotate the coordinating worktree onto clean `worker/cross-client-delivery-live-r2` for Units 43-50.
**Output**: Merge/main/run IDs, protected web-records commit/digest, and clean `live-r2` locator.
**Acceptance**: Main contains the reviewed Unit 30-42 records; `live-r1` retired; `live-r2` clean at exact main.

### ⬜ Unit 43: Native Archive and Upload Operation
**What**: Authorize, preflight, claim, approve, archive/export/upload, verify provenance/hashes, post-query ASC, and append terminal.
**Output**: Authorization/claim/terminal-or-containment commits, run/attempt ID, upload receipt digest, hashes/provenance, ASC app/build IDs/state, and authoritative post-query.
**Acceptance**: Receipt binds exact claim/graph/run; terminal-or-containment appended; exact artifact uploads once and reaches required state or containment.

### ⬜ Unit 44: ASC Metadata and Localization Operation
**What**: Authorize export-compliance and app/build-localization predicate branches, post-query, and append terminal.
**Output**: Authorization/claim/terminal-or-containment commits, run/attempt ID, PATCH/POST/skip receipt digests, and authoritative ASC post-query.
**Acceptance**: Receipts bind exact claim/graph/run; one branch per node; exact resolved IDs; terminal-or-containment appended.

### ⬜ Unit 45: ASC Group Attachment Operation
**What**: Authorize group create/attach/skip, post-query exact relation, and append terminal.
**Output**: Authorization/claim/terminal-or-containment commits, run/attempt ID, group receipt digest/IDs, and authoritative ASC post-query.
**Acceptance**: Receipt binds exact claim/graph/run; exact build attached once; terminal-or-containment appended.

### ⬜ Unit 46: ASC Tester Notification Operation
**What**: Apply executable no-op by default, or authorize auto-notify/notification only if explicitly required; post-query and append terminal.
**Output**: Authorization/claim/terminal-or-containment commits, run/attempt ID, no-op or notification receipt digest, and authoritative ASC post-query.
**Acceptance**: Receipt binds exact claim/graph/run; no implicit notification; chosen branch has terminal-or-containment append.

### ⬜ Unit 47: ASC Independent Attestation
**What**: Dispatch and verify read-only ASC attestor for Units 43-46 and bind evidence to native terminals.
**Output**: Attestor run/artifact/attestation IDs, ASC post-query, and evidence digest.
**Acceptance**: State matches receipts; no PII or mutation.

### ⬜ Unit 48: iPhone Installed Proof
**What**: Install and launch exact TestFlight candidate on available iPhone and run Photo Studio/offline/retry scenario with oracle and cleanup.
**Output**: Installed provenance, actor evidence digest, accessibility/performance/visual verdict, cleanup, and post-query.
**Acceptance**: Real TestFlight identity matches; required semantics pass or change is non-shipped.

### ⬜ Unit 49: iPad Candidate Proof
**What**: Run exact signed candidate on available iPad hardware, otherwise record `BLOCKED_HUMAN`; execute scenario/oracle/cleanup when available.
**Output**: Installed/candidate provenance or blocker, evidence digest, cleanup, and post-query.
**Acceptance**: Proof type is honest; required unavailable hardware prevents shipped state.

### ⬜ Unit 50: macOS Signed Candidate Proof
**What**: Run exact signed macOS candidate scenario with provenance, oracle, accessibility/performance/visual review, and cleanup.
**Output**: Signed app identity, actor evidence digest, verdicts, cleanup, and post-query.
**Acceptance**: Exact source/pack/signature matches and required semantics pass.

### ⬜ Unit 50a: Native Live-Records Hostile Review
**What**: Validate and hostile-review all public-safe Unit 43-50 records on `live-r2`, their ledger/ASC locators, evidence classifications, and dependency-manifest updates; repair record data only without provider mutation.
**Output**: Converged verdicts, final `live-r2` head/digests, and private-artifact absence scan.
**Acceptance**: No BLOCKER/MAJOR; every Unit 43-50 terminal has one exact sanitized record; validators green; no PII/private evidence or provider mutation.

### ⬜ Unit 50b: Native Live-Records Pull Request
**What**: Open the `live-r2` records PR and obtain protected CI plus terminal review on the exact head.
**Output**: PR/head/run/review IDs.
**Acceptance**: Exact head green; no unresolved/in-flight check; no merge or provider mutation.

### ⬜ Unit 50c: Native Live-Records Merge and Rotation
**What**: Merge `live-r2`, verify exact delivery main/CI, and rotate the coordinating worktree onto clean `worker/cross-client-delivery-live-r3` for Units 51-59.
**Output**: Merge/main/run IDs, protected native-records commit/digest, and clean `live-r3` locator.
**Acceptance**: Main contains the reviewed Unit 43-50 records; `live-r2` retired; `live-r3` clean at exact main.

### ⬜ Unit 51: Worker Rollback Proof
**What**: Build candidate universe from every current-Product-Change Unit 31 run-owned deployment manifest plus authoritative Cloudflare deployment inventory. Run the Unit 5 total-order selector at a GitHub-server timestamp no more than 120 seconds before apply. Tier 1 requires exact candidate/predecessor/graph, active provider identity, and attested 0% traffic; tier 2 is one claim-digest-derived new 0%-traffic deployment with separately claimed setup; otherwise fail. Production traffic changes are forbidden. Live rollback/restore selected target; simulation is negative-only.
**Output**: Selector/candidate/isolation evidence, optional setup claim/receipts/terminal, proof authorization/claim/terminal-or-containment, run/attempt ID, rollback/restore receipt digests, before/rollback/restore versions, and authoritative post-query.
**Acceptance**: Selector schema lists all candidates/reasons, follows priority deterministically, and has fresh zero-traffic proof; any setup has its own claim/receipt/terminal; live receipts bind exact target/claim/graph/run; candidate restored; unrelated traffic/state unchanged. No eligible target, stale isolation, containment, or simulation-only evidence blocks shipment.

### ⬜ Unit 52: Capability Rollback Proof
**What**: Build candidate universe from every current-Product-Change run-owned subject/override manifest from Units 37/40 plus authoritative backend inventory. Run the Unit 5 total-order selector no more than 120 seconds before apply. Tier 1 requires exact graph/subject ownership, run-only ACL/reachability, and cleanup capability; tier 2 is one claim-digest-derived run-owned subject/isolated override with claimed setup/cleanup; otherwise fail. Global capability mutation is forbidden. Live disable/restore selected target; simulation is negative-only.
**Output**: Selector/candidate/isolation evidence, optional setup/cleanup claims/receipts/terminals, proof authorization/claim/terminal-or-containment, run/attempt ID, disable/restore receipt digests, capability states, and authoritative post-query.
**Acceptance**: Selector schema lists all candidates/reasons, follows priority deterministically, and has fresh reachability/isolation proof; setup and cleanup have claims/receipts/terminals; live receipts bind exact target/claim/graph/run; degraded behavior and exact restore pass; unrelated users unchanged. No eligible target blocks shipment.

### ⬜ Unit 53: Migration Containment Proof
**What**: Authorize and exercise safe additive-migration containment without destructive rollback.
**Output**: Authorization/claim/terminal-or-containment commits, run/attempt ID, containment receipt digest, migration state/backup locator, and authoritative post-query.
**Acceptance**: Receipt binds exact claim/graph/run; terminal-or-containment appended; previous clients compatible; no data loss.

### ⬜ Unit 54: Native Candidate Supersession Proof
**What**: Build candidate universe from every current-Product-Change run-owned ASC build manifest plus authoritative ASC inventory. Run the Unit 5 total-order selector no more than 120 seconds before apply. Tier 1 requires non-selected build ID, exact app/source/pack, run ownership, eligible provider state, and no external tester distribution; tier 2 is one claim-digest-derived new signed sacrificial build/fresh build number with claimed archive/upload setup; otherwise fail. Selected-candidate mutation/deletion is forbidden. Live-supersede selected sacrificial build; simulation is negative-only.
**Output**: Selector/candidate/isolation evidence, optional sacrificial-build setup claim/provenance/receipts/terminal, proof authorization/claim/terminal, run/attempt ID, supersession receipt digest, selected/contained build dispositions, and authoritative ASC post-query.
**Acceptance**: Selector schema lists all candidates/reasons, follows priority deterministically, proves fresh ASC state and distinct build IDs; any setup has claim/provenance/receipt/terminal; live supersession matches exact target/claim; sacrificial build cannot ship; selected build remains eligible/unchanged. No eligible target, containment, or simulation-only evidence blocks shipment.

### ⬜ Unit 55: D1 Cleanup Operation
**What**: Authorize exact-manifest deletion of remaining run-owned D1 rows, verify references and zero count, and append terminal.
**Output**: Authorization/claim/terminal-or-containment commits, run/attempt ID, plan/apply/verify receipt digests, and authoritative D1 post-query.
**Acceptance**: Receipts bind exact claim/graph/run; terminal-or-containment appended; zero run-owned residue; unrelated data unchanged.

### ⬜ Unit 56: R2 and Generated Media Cleanup Operation
**What**: Authorize exact-manifest deletion of run-owned R2/media objects, verify references and zero keys, and append terminal.
**Output**: Authorization/claim/terminal-or-containment commits, run/attempt ID, plan/apply/verify receipt digests, and authoritative R2 post-query.
**Acceptance**: Receipts bind exact claim/graph/run; terminal-or-containment appended; zero run-owned residue; referenced objects preserved.

### ⬜ Unit 57: OAuth and Token Cleanup Operation
**What**: Authorize exact cleanup of run-owned OAuth clients/tokens/connections, verify zero, and append terminal.
**Output**: Authorization/claim/terminal-or-containment commits, run/attempt ID, plan/apply/verify receipt digests, and authoritative provider/D1 post-query.
**Acceptance**: Receipts bind exact claim/graph/run; terminal-or-containment appended; zero run-owned residue; active credentials preserved.

### ⬜ Unit 58a: Provider Record Classification
**What**: Read-only classify non-deletable ASC/provider records as selected, expired-or-contained, or preserved-provider-record; retain source/coordinating worktrees.
**Output**: Provider post-query and preserved-record inventory.
**Acceptance**: Every non-deletable record has one valid disposition; no mutation occurs.

### ⬜ Unit 58b: Artifact and Cache Cleanup Operation
**What**: Authorize claimed deletion of run-owned temporary provider artifacts/caches and verify zero; retain source/coordinating worktrees through Unit 60d.
**Output**: Authorization/claim/terminal-or-containment commits, run/attempt ID, cleanup receipt digest, and authoritative artifact/cache post-query.
**Acceptance**: Receipt binds exact claim/graph/run; terminal-or-containment appended; zero deletable artifact/cache residue; worktrees remain.

### ⬜ Unit 59: Negative Finalization Proof
**What**: Attempt finalization with stale digest, wrong claim, mismatched provider identity, and failed cleanup fixtures.
**Output**: Rejected run IDs, ledger parent, error codes, and no-shipment post-query.
**Acceptance**: No `ReleaseSetPublished`; state unchanged except explicit aborted test records.

### ⬜ Unit 59a: Safety Live-Records Hostile Review
**What**: Validate and hostile-review all public-safe Unit 51-59 records on `live-r3`, their ledger/provider locators, exact rollback branch selections, cleanup dispositions, and dependency-manifest updates; repair record data only.
**Output**: Converged verdicts, final `live-r3` head/digests, and private-artifact absence scan.
**Acceptance**: No BLOCKER/MAJOR; every Unit 51-59 terminal has one exact sanitized record; validators green; no raw/private evidence or provider mutation.

### ⬜ Unit 59b: Safety Live-Records Pull Request
**What**: Open the `live-r3` records PR and obtain protected CI plus terminal review on the exact head.
**Output**: PR/head/run/review IDs.
**Acceptance**: Exact head green; no unresolved/in-flight check; no merge or provider mutation.

### ⬜ Unit 59c: Safety Live-Records Merge and Rotation
**What**: Merge `live-r3`, verify exact delivery main/CI, and rotate the coordinating worktree onto clean `worker/cross-client-delivery-repair-i1-r4` for Unit 60 iteration 1.
**Output**: Merge/main/run IDs, protected safety-records commit/digest, and clean iteration/branch/worktree locator.
**Acceptance**: Main contains reviewed Unit 51-59 records; `live-r3` retired; repair iteration is `i1`; `repair-i1-r4` clean at exact main.

### ⬜ Unit 60a: Pre-Finalization Hostile Audit
**What**: Begin or resume monotonic `repair_iteration=iN` (starting `i1`), verify/create clean source worktrees from exact current mains when a repair may touch them, and verify the coordinating records branch. A new iteration creates `worker/cross-client-delivery-repair-iN-r4` from exact delivery main; a resumed iteration uses its latest recorded `rK`, with K incremented after each protected records merge. Run fresh architecture, security, privacy, compatibility, test, release-receipt, and visual reviewers over merged/live state without editing.
**Output**: Iteration ID; exact delivery/web/native bases; branch/worktree ownership; ordered findings with affected repositories, proof nodes, and replay scope.
**Acceptance**: Iteration is one greater than any prior aborted/nonconverged iteration; worktrees are clean/owned or explicitly no-edit; every finding has severity/evidence/owner/manifest nodes; no mutation or shipment.

### ⬜ Unit 60b1a: Delivery Repair Unit Expansion
**What**: Map each delivery finding in stable severity/path/line order to `finding_sequence=fM`, one bounded tests/implementation/coverage set, and reserved dedicated name `worker/cross-client-delivery-code-iN-fM`; Unit 60b1b creates each branch/worktree just-in-time from then-current exact main. Amend/review the doing doc before repair. The coordinating `repair-iN-rK` branch remains records-only and K does not change for code merges; emit no-repair receipt when none.
**Output**: Reviewer-approved amended doing doc and finding/reserved-branch inventory, or no-repair receipt.
**Acceptance**: Every finding maps once; code and records branches/worktrees are disjoint; no code, PR, records merge, or shipment occurs in this unit.

### ⬜ Unit 60b1b: Delivery Repair Pull Request
**What**: Process only the lowest unmerged fM. Create its dedicated branch/worktree fresh from then-current exact main, complete that finding's generated TDD units, open one PR, and obtain protected CI/terminal review without merge. Do not create or review f(M+1) yet. Validate no-PR when no-op.
**Output**: Current finding/branch/base/PR/head/run/review IDs, remaining ordered findings, or no-PR receipt.
**Acceptance**: Current exact head is green with no unresolved/in-flight check; base equals main after all prior f merges; later branches do not exist; records branch untouched; Unit 60b1c is the only next delivery-repair unit.

### ⬜ Unit 60b1c: Delivery Repair Merge
**What**: Merge only Unit 60b1b's current reviewed PR, verify exact main/CI, and retire its code branch/worktree. If findings remain, loop to Unit 60b1b, which creates the next branch from this new exact main; otherwise continue to Unit 60b2a. Never merge/rewrite the records branch here.
**Output**: Current finding merge SHA/exact-main CI/cleanup receipt, remaining findings, and next-unit decision, or no-merge receipt.
**Acceptance**: Merged code is exactly the reviewed head; no stale-base approval is reused; branch retired; records head/K identical; next action is deterministically 60b1b or 60b2a; no shipment.

### ⬜ Unit 60b2a: Web Repair Unit Expansion
**What**: Map each web finding to one bounded tests/implementation/coverage unit set, amend this doing doc with those explicit units, and run fresh granularity/validation/ambiguity/quality review before any repair; emit a no-repair receipt when none apply.
**Output**: Reviewer-approved amended doing doc with one atomic unit set per web finding, or no-repair receipt.
**Acceptance**: Every web finding maps to exactly one bounded unit set with What/Output/Acceptance; no code, PR, deploy, or shipment occurs in this unit.

### ⬜ Unit 60b2b: Web Repair Pull Request
**What**: After every generated web repair unit is complete and locally green, open the repair PR and obtain protected CI/terminal review without merge, or validate no-PR when Unit 60b2a is no-op.
**Output**: PR/head/run IDs and review state, or no-PR receipt.
**Acceptance**: Exact head green with no unresolved/in-flight check; no merge/deploy/shipment.

### ⬜ Unit 60b2c: Web Repair Merge
**What**: Merge the reviewed web repair and verify exact main, or validate no-merge when Unit 60b2b is no-op.
**Output**: Merge SHA/exact-main CI/deployment query or no-merge receipt.
**Acceptance**: Web main green, zero in-flight deploy, and every web finding covered; no shipment.

### ⬜ Unit 60b3a: Native Repair Unit Expansion
**What**: Map each native finding to one bounded tests/implementation/coverage unit set, amend this doing doc with those explicit units, and run fresh granularity/validation/ambiguity/quality review before any repair; emit a no-repair receipt when none apply.
**Output**: Reviewer-approved amended doing doc with one atomic unit set per native finding, or no-repair receipt.
**Acceptance**: Every native finding maps to exactly one bounded unit set with What/Output/Acceptance; no code, PR, TestFlight, or shipment occurs in this unit.

### ⬜ Unit 60b3b: Native Repair Pull Request
**What**: After every generated native repair unit is complete and locally green, open the repair PR and obtain protected CI/terminal review without merge, or validate no-PR when Unit 60b3a is no-op.
**Output**: PR/head/run IDs and review state, or no-PR receipt.
**Acceptance**: Exact head green with no unresolved/in-flight check; no merge/TestFlight/shipment.

### ⬜ Unit 60b3c: Native Repair Merge
**What**: Merge the reviewed native repair and verify exact main, or validate no-merge when Unit 60b3b is no-op.
**Output**: Merge SHA/exact-main CI/TestFlight query or no-merge receipt.
**Acceptance**: Native main green, zero in-flight TestFlight, and every native finding covered; no shipment.

### ⬜ Unit 60c11d: Conditional Replay of Unit 11d
**What**: Re-query and reapply delivery repository settings only if governance code/policy changed, otherwise issue a validated no-replay receipt.
**Output**: Dependency decision plus fresh settings before/apply/after verification or no-replay receipt.
**Acceptance**: Decision binds repaired delivery SHA/policy; any replay leaves settings exact and performs no ledger/provider mutation.

### ⬜ Unit 60c12d: Conditional Replay of Unit 12d
**What**: Re-prove protected ledger append behavior only if append workflow/ledger governance changed, otherwise issue a validated no-replay receipt.
**Output**: Dependency decision plus fresh direct-push rejection, append run/ledger/containment/post-query or no-replay receipt.
**Acceptance**: Decision binds repaired workflow/settings; any replay is non-shipping, exact, and terminally contained.

### ⬜ Unit 60c27d1: Conditional Web Environment Governance Repair
**What**: Always re-query live web environment settings. If they match and reviewed policy is unchanged, issue a validated no-replay receipt. If they match but reviewed policy changed, authorize and claim `github-environment-ui-governance-v1`, obtain a bounded approved-job grant through the existing `production` gate, then apply only the grant-bound UI delta. If live drift removed or weakened the gate, authorize `github-environment-ui-recovery-v1` and restore only the last terminally attested policy; after protected proof succeeds, use the ordinary installed-gate path for any separately reviewed policy delta. Append UI/API receipts plus terminal or containment for every claim. The one-time bootstrap exception is forbidden here.
**Output**: Dependency decision; authorization/claim/terminal-or-containment commits; workflow/run/attempt/job/environment and actor IDs; before/after UI/API evidence digests; or no-replay receipt.
**Acceptance**: Decision binds repaired web SHA, authoritative live state, and last/new policy digests; no-replay is allowed only on an exact live match; recovery can only restore the last attested policy and cannot apply a new delta; every subsequent change uses the restored gate; every claim reaches an unambiguous terminal and starts no deploy.

### ⬜ Unit 60c27d2: Conditional Replay of Web Protected Environment Proof
**What**: Re-run Unit 27d2 when the web workflow, validator, environment policy, or Unit 60c27d1 result invalidates its proof; otherwise issue a validated no-replay receipt.
**Output**: Dependency decision plus fresh claimed waiting/approval/verification/terminal evidence or no-replay receipt.
**Acceptance**: Decision binds repaired web/workflow/policy SHAs and digests; any replay proves the sole read-only `production` job under the installed gate and starts no deploy.

### ⬜ Unit 60c27e1: Conditional Native Environment Governance Repair
**What**: Always re-query live native environment settings. If they match and reviewed policy is unchanged, issue a validated no-replay receipt. If they match but reviewed policy changed, authorize and claim `github-environment-ui-governance-v1`, obtain a bounded approved-job grant through the existing `internal-testflight` gate, then apply only the grant-bound UI delta. If live drift removed or weakened the gate, authorize `github-environment-ui-recovery-v1` and restore only the last terminally attested policy; after protected proof succeeds, use the ordinary installed-gate path for any separately reviewed policy delta. Append UI/API receipts plus terminal or containment for every claim. The one-time bootstrap exception is forbidden here.
**Output**: Dependency decision; authorization/claim/terminal-or-containment commits; workflow/run/attempt/job/environment and actor IDs; before/after UI/API evidence digests; or no-replay receipt.
**Acceptance**: Decision binds repaired native SHA, authoritative live state, and last/new policy digests; no-replay is allowed only on an exact live match; recovery can only restore the last attested policy and cannot apply a new delta; every subsequent change uses the restored gate; every claim reaches an unambiguous terminal and starts no TestFlight upload.

### ⬜ Unit 60c27e2: Conditional Replay of Native Protected Environment Proof
**What**: Re-run Unit 27e2 when the native workflow, validator, environment policy, or Unit 60c27e1 result invalidates its proof; otherwise issue a validated no-replay receipt.
**Output**: Dependency decision plus fresh claimed waiting/approval/verification/terminal evidence or no-replay receipt.
**Acceptance**: Decision binds repaired native/workflow/policy SHAs and digests; any replay proves the sole read-only `internal-testflight` job under the installed gate and performs no upload.

### ⬜ Unit 60c28: Conditional Replay of Unit 28
**What**: Re-run merged-state pilot rebaseline when any delivery/web/native repair or Unit 60c27d1-e2 replay landed, otherwise issue a validated no-replay receipt.
**Output**: Fresh Unit 28 rebaseline/freeze or no-replay receipt.
**Acceptance**: Decision binds repair SHAs; any replay is green with zero in-flight mutation.

### ⬜ Unit 60c29a: Conditional Replay of Unit 29a
**What**: First integrate exact delivery main into current records-only `repair-iN-rK` using `git merge --no-ff origin/main` (never rebase/force-push), preserving every records commit; then re-run exact graph/change validation tests when Unit 60c28 changes dependencies, otherwise issue a validated no-replay receipt.
**Output**: Fresh red/validation fixtures or no-replay receipt.
**Acceptance**: Decision binds Unit 60c28 and detects every stale graph/freeze reference.

### ⬜ Unit 60c29b: Conditional Replay of Unit 29b
**What**: Update graph/change records to pass Unit 60c29a when invalidated, otherwise issue a validated no-replay receipt.
**Output**: Fresh validated records/digests or no-replay receipt.
**Acceptance**: Exactly one predicate per node and all dispositions valid; no PR or mutation.

### ⬜ Unit 60c29c: Conditional Replay of Unit 29c
**What**: Hostile-review updated records and make bounded data repairs when invalidated, otherwise issue a validated no-replay receipt.
**Output**: Converged verdict/repair commits or no-replay receipt.
**Acceptance**: No BLOCKER/MAJOR; validators green; no PR or mutation.

### ⬜ Unit 60c29d: Conditional Replay of Unit 29d
**What**: Open the updated records PR and obtain protected CI/review when invalidated, otherwise issue a validated no-replay receipt.
**Output**: PR/head/run/review state or no-replay receipt.
**Acceptance**: Exact head green, no unresolved/in-flight check, no merge or mutation.

### ⬜ Unit 60c29e: Conditional Replay of Unit 29e
**What**: Merge and exact-main verify the updated records when invalidated, then rotate the coordinating worktree from current `repair-iN-rK` to clean `repair-iN-r(K+1)` at that main; otherwise issue a validated no-replay receipt and retain current `rK`.
**Output**: Merge SHA/exact-main CI/digests plus retired/new branch locators, or no-replay receipt with retained branch locator.
**Acceptance**: Decision binds Unit 60c28; delivery main green; exactly one current iteration records branch exists; no provider mutation.

### ⬜ Unit 60c29f: Mechanical Replay Invalidation Evaluation
**What**: This unit is re-entrant within `repair_iteration=iN`; each invocation increments `evaluation_pass=pM` and supersedes all prior passes. Run `replay evaluate` against protected manifest/baselines, current durable identities, latest renewable batch (when present), and predecessor outcomes using fresh GitHub server `decision_at`. Durable changed/missing/unknown inputs or renewable predicate mismatches mark `replay_required` and propagate; expired/missing renewable observations mark `refresh_required` for Unit 60c59b, never mutation replay by age alone. Every Unit 60c30-59 invocation consumes only the latest unconsumed pM decision.
**Output**: Attested `replay-evaluation-iN-pM.json` with every node, pass/supersedes digest, `decision_at`, durable old/current maps, renewable predicate/refresh states, predecessor closure, decision/reason codes, original acceptance, and manifest/tool/iteration digests.
**Acceptance**: Pass number is monotonic; all nodes present once; latest pass authoritative; durable no-replay has byte-equal evidence; refresh/replay propagate deterministically. Unit 34 invalidation increments compatibility generation and marks Units 30-39 required as one barrier closure; no stale pass can drive a unit; no provider mutation occurs.

### ⬜ Unit 60c30: Conditional Replay of Unit 30
**What**: Consume Unit 60c29f's Unit 30 decision; replay the original unit when required, otherwise emit its schema-valid no-replay receipt.
**Output**: Dependency decision plus fresh Unit 30 evidence or no-replay receipt.
**Acceptance**: Decision binds repaired SHAs/graph and exact prior evidence; invalidated proof is terminal and fresh.

### ⬜ Unit 60c31: Conditional Replay of Unit 31
**What**: Consume Unit 60c29f's Unit 31 decision; replay the original unit when required, otherwise emit its schema-valid no-replay receipt.
**Output**: Dependency decision plus fresh Unit 31 run/ledger/provider evidence or no-replay receipt.
**Acceptance**: Decision binds repaired SHAs/graph; any replay has terminal-or-containment commit and post-query.

### ⬜ Unit 60c32: Conditional Replay of Unit 32
**What**: Consume Unit 60c29f's Unit 32 decision; replay the original unit when required, otherwise emit its schema-valid no-replay receipt.
**Output**: Dependency decision plus fresh Unit 32 actor/oracle/cleanup evidence or no-replay receipt.
**Acceptance**: Decision binds dependencies; any replay is fresh and residue-free.

### ⬜ Unit 60c33: Conditional Replay of Unit 33
**What**: Consume Unit 60c29f's Unit 33 decision; replay the original unit when required, otherwise emit its schema-valid no-replay receipt.
**Output**: Dependency decision plus fresh Unit 33 attestation evidence or no-replay receipt.
**Acceptance**: Decision binds dependencies; any replay is fresh, exact, and read-only.

### ⬜ Unit 60c34: Conditional Replay of Unit 34
**What**: Consume only the latest pass. When Unit 34 is required, verify that same pass marked Units 30-39 required with a fresh `compatibility_generation`; execute queue seed only after same-generation Units 30-33 and before Units 35-39. Refuse standalone replay. Otherwise emit no-replay receipt.
**Output**: Dependency decision plus fresh Unit 34 installed-queue evidence or no-replay receipt.
**Acceptance**: Decision binds exact previous installed build and compatibility generation; replay order is 30-33 -> 34 -> 35-39, Unit 36 produces a fresh exact candidate version after seed, and no standalone post-deploy seed is accepted.

### ⬜ Unit 60c35: Conditional Replay of Unit 35
**What**: Consume Unit 60c29f's Unit 35 decision; replay the original unit when required, otherwise emit its schema-valid no-replay receipt.
**Output**: Dependency decision plus fresh Unit 35 run/ledger/receipt/post-query or no-replay receipt.
**Acceptance**: Any replay binds claim/graph/run and reaches terminal-or-containment.

### ⬜ Unit 60c36: Conditional Replay of Unit 36
**What**: Consume Unit 60c29f's Unit 36 decision; replay the original unit when required, otherwise emit its schema-valid no-replay receipt.
**Output**: Dependency decision plus fresh Unit 36 run/ledger/receipt/post-query or no-replay receipt.
**Acceptance**: Any replay binds claim/graph/run and reaches terminal-or-containment.

### ⬜ Unit 60c37: Conditional Replay of Unit 37
**What**: Consume Unit 60c29f's Unit 37 decision; replay the original unit when required, otherwise emit its schema-valid no-replay receipt.
**Output**: Dependency decision plus fresh Unit 37 run/ledger/receipt/cleanup/post-query or no-replay receipt.
**Acceptance**: Any replay binds claim/graph/run, reaches terminal, and leaves zero canary residue.

### ⬜ Unit 60c38: Conditional Replay of Unit 38
**What**: Consume Unit 60c29f's Unit 38 decision; replay the original unit when required, otherwise emit its schema-valid no-replay receipt.
**Output**: Dependency decision plus fresh Unit 38 attestations or no-replay receipt.
**Acceptance**: Any replay is fresh, exact, independent, and read-only.

### ⬜ Unit 60c39: Conditional Replay of Unit 39
**What**: Consume Unit 60c29f's Unit 39 decision; replay the original unit when required, otherwise emit its schema-valid no-replay receipt.
**Output**: Dependency decision plus fresh Unit 39 queue/oracle/cleanup evidence or no-replay receipt.
**Acceptance**: Any replay is idempotent and residue-free.

### ⬜ Unit 60c40: Conditional Replay of Unit 40
**What**: Consume Unit 60c29f's Unit 40 decision; replay the original unit when required, otherwise emit its schema-valid no-replay receipt.
**Output**: Dependency decision plus fresh Unit 40 browser/oracle/cleanup evidence or no-replay receipt.
**Acceptance**: Any replay is exact, private-safe, and residue-free.

### ⬜ Unit 60c41: Conditional Replay of Unit 41
**What**: Consume Unit 60c29f's Unit 41 decision; replay the original unit when required, otherwise emit its schema-valid no-replay receipt.
**Output**: Dependency decision plus fresh Unit 41 MCP/oracle/cleanup evidence or no-replay receipt.
**Acceptance**: Any replay is exact, deterministic, and residue-free.

### ⬜ Unit 60c42: Conditional Replay of Unit 42
**What**: Consume Unit 60c29f's Unit 42 decision; replay the original unit when required, otherwise emit its schema-valid no-replay receipt.
**Output**: Dependency decision plus fresh Unit 42 trial/oracle/cleanup evidence or no-replay receipt.
**Acceptance**: Any replay uses frozen host/model/tool identity, obeys budget, and is residue-free.

### ⬜ Unit 60c43: Conditional Replay of Unit 43
**What**: Consume Unit 60c29f's Unit 43 decision; replay the original unit when required, otherwise emit its schema-valid no-replay receipt.
**Output**: Dependency decision plus fresh Unit 43 run/ledger/upload/post-query or no-replay receipt.
**Acceptance**: Any replay binds claim/graph/run and reaches terminal-or-containment.

### ⬜ Unit 60c44: Conditional Replay of Unit 44
**What**: Consume Unit 60c29f's Unit 44 decision; replay the original unit when required, otherwise emit its schema-valid no-replay receipt.
**Output**: Dependency decision plus fresh Unit 44 run/ledger/receipts/post-query or no-replay receipt.
**Acceptance**: Any replay binds claim/graph/run and reaches terminal-or-containment.

### ⬜ Unit 60c45: Conditional Replay of Unit 45
**What**: Consume Unit 60c29f's Unit 45 decision; replay the original unit when required, otherwise emit its schema-valid no-replay receipt.
**Output**: Dependency decision plus fresh Unit 45 run/ledger/receipt/post-query or no-replay receipt.
**Acceptance**: Any replay binds claim/graph/run and reaches terminal-or-containment.

### ⬜ Unit 60c46: Conditional Replay of Unit 46
**What**: Consume Unit 60c29f's Unit 46 decision; replay the original unit when required, otherwise emit its schema-valid no-replay receipt.
**Output**: Dependency decision plus fresh Unit 46 run/ledger/receipt/post-query or no-replay receipt.
**Acceptance**: Any replay binds claim/graph/run, has explicit notify/no-op state, and reaches terminal.

### ⬜ Unit 60c47: Conditional Replay of Unit 47
**What**: Consume Unit 60c29f's Unit 47 decision; replay the original unit when required, otherwise emit its schema-valid no-replay receipt.
**Output**: Dependency decision plus fresh Unit 47 ASC attestation or no-replay receipt.
**Acceptance**: Any replay is fresh, exact, independent, and read-only.

### ⬜ Unit 60c48: Conditional Replay of Unit 48
**What**: Consume Unit 60c29f's Unit 48 decision; replay the original unit when required, otherwise emit its schema-valid no-replay receipt.
**Output**: Dependency decision plus fresh Unit 48 installed/oracle/cleanup evidence or no-replay receipt.
**Acceptance**: Any replay uses exact TestFlight build and is residue-free.

### ⬜ Unit 60c49: Conditional Replay of Unit 49
**What**: Consume Unit 60c29f's Unit 49 decision; replay the original unit when required, otherwise emit its schema-valid no-replay receipt.
**Output**: Dependency decision plus fresh Unit 49 installed/blocker evidence or no-replay receipt.
**Acceptance**: Any replay uses honest physical/candidate proof and preserves blocker semantics.

### ⬜ Unit 60c50: Conditional Replay of Unit 50
**What**: Consume Unit 60c29f's Unit 50 decision; replay the original unit when required, otherwise emit its schema-valid no-replay receipt.
**Output**: Dependency decision plus fresh Unit 50 signed-app/oracle/cleanup evidence or no-replay receipt.
**Acceptance**: Any replay uses exact signed candidate and is residue-free.

### ⬜ Unit 60c51: Conditional Replay of Unit 51
**What**: Consume Unit 60c29f's Unit 51 decision; replay the original unit when required, otherwise emit its schema-valid no-replay receipt.
**Output**: Dependency decision plus fresh Unit 51 run/ledger/receipts/post-query or no-replay receipt.
**Acceptance**: Any replay binds claim/graph/run, reaches terminal, and restores exact candidate.

### ⬜ Unit 60c52: Conditional Replay of Unit 52
**What**: Consume Unit 60c29f's Unit 52 decision; replay the original unit when required, otherwise emit its schema-valid no-replay receipt.
**Output**: Dependency decision plus fresh Unit 52 run/ledger/receipts/post-query or no-replay receipt.
**Acceptance**: Any replay binds claim/graph/run, reaches terminal, and restores capability.

### ⬜ Unit 60c53: Conditional Replay of Unit 53
**What**: Consume Unit 60c29f's Unit 53 decision; replay the original unit when required, otherwise emit its schema-valid no-replay receipt.
**Output**: Dependency decision plus fresh Unit 53 run/ledger/receipt/post-query or no-replay receipt.
**Acceptance**: Any replay binds claim/graph/run, reaches terminal-or-containment, and loses no data.

### ⬜ Unit 60c54: Conditional Replay of Unit 54
**What**: Consume Unit 60c29f's Unit 54 decision; replay the original unit when required, otherwise emit its schema-valid no-replay receipt.
**Output**: Dependency decision plus fresh Unit 54 run/ledger/receipt/post-query or no-replay receipt.
**Acceptance**: Any replay binds claim/graph/run and reaches terminal-or-containment.

### ⬜ Unit 60c55: Conditional Replay of Unit 55
**What**: Consume Unit 60c29f's Unit 55 decision; replay the original unit when required, otherwise emit its schema-valid no-replay receipt.
**Output**: Dependency decision plus fresh Unit 55 run/ledger/cleanup/post-query or no-replay receipt.
**Acceptance**: Any replay binds claim/graph/run, reaches terminal, and proves zero D1 residue.

### ⬜ Unit 60c56: Conditional Replay of Unit 56
**What**: Consume Unit 60c29f's Unit 56 decision; replay the original unit when required, otherwise emit its schema-valid no-replay receipt.
**Output**: Dependency decision plus fresh Unit 56 run/ledger/cleanup/post-query or no-replay receipt.
**Acceptance**: Any replay binds claim/graph/run, reaches terminal, and proves zero media residue.

### ⬜ Unit 60c57: Conditional Replay of Unit 57
**What**: Consume Unit 60c29f's Unit 57 decision; replay the original unit when required, otherwise emit its schema-valid no-replay receipt.
**Output**: Dependency decision plus fresh Unit 57 run/ledger/cleanup/post-query or no-replay receipt.
**Acceptance**: Any replay binds claim/graph/run, reaches terminal, and proves zero auth residue.

### ⬜ Unit 60c58a: Conditional Replay of Unit 58a
**What**: Consume Unit 60c29f's Unit 58a decision; replay the original unit when required, otherwise emit its schema-valid no-replay receipt.
**Output**: Dependency decision plus fresh read-only classification/post-query or no-replay receipt.
**Acceptance**: Any replay is read-only and every retained record has one valid disposition.

### ⬜ Unit 60c58b: Conditional Replay of Unit 58b
**What**: Consume Unit 60c29f's Unit 58b decision; replay the original unit when required, otherwise emit its schema-valid no-replay receipt.
**Output**: Dependency decision plus fresh claim/run/receipt/terminal/post-query or no-replay receipt.
**Acceptance**: Any replay binds exact claim/graph/run, reaches terminal-or-containment, and proves zero deletable artifact residue.

### ⬜ Unit 60c59: Conditional Replay of Unit 59
**What**: Consume Unit 60c29f's Unit 59 decision; replay the original unit when required, otherwise emit its schema-valid no-replay receipt.
**Output**: Dependency decision plus fresh negative-finalization evidence or no-replay receipt.
**Acceptance**: Any replay still proves no shipment and no unintended state change.

### ⬜ Unit 60c59a: Post-Replay Freshness Evaluation
**What**: After all latest-pass required replays, invoke Unit 60c29f again to create p(M+1) from refreshed durable outputs. If it emits `replay_required`, consume that latest pass and repeat. When only `refresh_required` or green remains, proceed to Unit 60c59b; never jump directly to a replay unit with an older decision.
**Output**: Latest attested evaluation pass, supersession chain, replay loop history, and durable-green/renewable-refresh node sets.
**Acceptance**: One latest pass owns every next action; all durable nodes are green simultaneously; no prior-pass decision is consumed; containment/failure loops through a new Unit 60c29f pass.

### ⬜ Unit 60c59b: Read-Only Renewable Observation Batch
**What**: In parallel, dispatch exact web/native read-only attestors and GitHub queries defined by every manifest `renewal_query` to refresh current source-main/check, environment, Worker/D1/R2/runtime, ASC/build eligibility, cleanup-zero, and feedback state without rerunning uploads, hardware/actor trials, rollback, or cleanup mutations. Bind one GitHub-server observation time and provider-specific windows; feed the batch into a new Unit 60c29f pass. If predicates mismatch, that new pass marks only dependent proof nodes `replay_required`; if they match, observations are green.
**Output**: Attested renewable-observation batch/query IDs/times/digests, predicate results, provider post-queries, and resulting latest evaluation-pass locator.
**Acceptance**: Every renewable class is queried exactly once per provider/account scope; all calls read-only; durable proof remains unchanged. If the resulting latest pass contains any `replay_required`, return to the lowest required Unit 60c30-59, execute latest-pass actions through Unit 60c59a, then run Unit 60c59b again. Only a latest pass with durable green and all renewable predicates green may proceed to Unit 60d.

### ⬜ Unit 60d: Final Convergence Review
**What**: Run fresh reviewers against repaired merged/live state and the complete replay evidence without editing.
**Output**: Final architecture/security/privacy/compatibility/test/release/visual verdicts.
**Acceptance**: Only all-reviewer convergence with no BLOCKER/MAJOR and a complete green proof graph may skip Units 60d1a-c and proceed to Unit 60e. Any finding or replay containment/failure blocks convergence, executes the failed-iteration checkpoint in Units 60d1a-c, and cannot reach Unit 60e/61.

### ⬜ Unit 60d1a: Failed-Iteration Records Review
**What**: Only on Unit 60d non-convergence, integrate exact current delivery main into current records-only `repair-iN-rK` with `git merge --no-ff origin/main` (never rebase/force-push), add findings/proof failures/amendment scope/forward-port manifest, and hostile-review complete failed-iteration records.
**Output**: Converged failed-iteration records verdict, exact branch head/digests, and forward-port manifest naming every record/path/ledger locator.
**Acceptance**: No failed-iteration record is omitted; manifest reproduces the complete branch tree from protected parent; private evidence absent; no provider mutation.

### ⬜ Unit 60d1b: Failed-Iteration Records Pull Request
**What**: Open the failed `repair-iN-rK` records PR and obtain protected CI plus terminal review.
**Output**: PR/head/run/review IDs.
**Acceptance**: Exact head green; no unresolved/in-flight check; no merge or provider mutation.

### ⬜ Unit 60d1c: Failed-Iteration Records Merge and Loopback
**What**: Merge failed-iteration records, verify exact delivery main/CI, increment to `repair_iteration=i(N+1)`, create `worker/cross-client-delivery-repair-i(N+1)-r4` from that main, verify the forward-port manifest byte-for-byte, amend/review the doing doc with bounded repairs, and loop to Unit 60a.
**Output**: Merge/main/run IDs, protected failed-iteration records commit, retired prior branch, next iteration/branch/worktree/base, forward-port verification, and doing-doc review verdict.
**Acceptance**: Protected main preserves the complete failed iteration; next branch contains that ancestry with no dropped record; iteration increments once; Unit 60a is the only next unit.

### ⬜ Unit 60e: Source Worktree Retention and Freeze
**What**: After Unit 60d convergence, retain task-owned source/coordinating worktrees for possible finalization abort repair, verify them clean at exact merged mains, and freeze their ownership/branch/base locators. Do not retire them before successful Unit 64 publication.
**Output**: Git/worktree inventory, clean-state proof, and finalization-loop ownership freeze.
**Acceptance**: Every task worktree is clean and recreatable from recorded exact main; unrelated work untouched; no branch/worktree deletion occurs.

### ⬜ Unit 60f1: Final Repair-Records Hostile Review
**What**: Integrate exact current delivery main into current records-only `repair-iN-rK` with `git merge --no-ff origin/main` (never rebase/force-push), then validate and hostile-review all repair/replay/no-replay/renewable-observation records, iteration links, and final dependency closure; repair record data only.
**Output**: Converged verdicts, exact branch head/digests, complete iteration evidence index, and private-artifact absence scan.
**Acceptance**: No BLOCKER/MAJOR; every repaired/replayed/no-replay node is represented; all original acceptance criteria are green; no containment/failure is treated as success.

### ⬜ Unit 60f2: Final Repair-Records Pull Request
**What**: Open the current `repair-iN-rK` records PR and obtain protected CI plus terminal review on the exact head.
**Output**: PR/head/run/review IDs.
**Acceptance**: Exact head green; no unresolved/in-flight check; no merge or provider mutation.

### ⬜ Unit 60f3: Final Repair-Records Merge
**What**: Merge current `repair-iN-rK`, verify exact delivery main/CI and GitHub artifact attestation, then rotate the coordinating worktree onto clean `worker/cross-client-delivery-finalize-iN` at that main without adding records.
**Output**: Merge/main/run/attestation IDs, canonical protected records commit/digest, and clean finalization branch/worktree locator.
**Acceptance**: Protected main contains the complete reviewed record chain through Unit 60; attestation binds exact commit; prior repair branch retired; no unreviewed record exists.

### ⬜ Unit 60f4: Pre-Claim Proof Freshness Recheck
**What**: Immediately before Unit 61, run the Unit 60c59b read-only renewable-observation batch from protected Unit 60f3 records, then run a new numbered Unit 60c29f evaluation with fresh GitHub server time. Durable proofs remain valid by exact identity; renewable predicates must match current state. A mismatch/unknown records failure on `finalize-iN` and jumps to Units 64a1-c before loopback; age alone causes another read-only query, not upload/hardware/mutation replay.
**Output**: Attested pre-claim renewable batch, latest evaluation pass/time, durable/renewable predicate inventory, protected records identity, and green decision or loopback record.
**Acceptance**: Unit 61 starts only from one complete green latest pass bound to Unit 60f3; every renewable predicate is freshly queried; durable proof is not needlessly repeated; mismatch/unknown cannot be waived.

### ⬜ Unit 61: Finalization Claim
**What**: Append a fresh generation-reserving `FinalizationClaim` through protected workflow immediately after green Unit 60f4, binding `repair_iteration`, exact canonical protected records commit/attestation, freshness-evaluation digest/time, and all proof/cleanup terminals.
**Output**: Finalization generation, repair iteration, append run ID, ledger parent/claim commit, canonical records identity, and provider actor/workflow identity.
**Acceptance**: Generation is new; claim is ledger head, binds exact Unit 60f3 records, and blocks every other transition. An aborted prior generation cannot be reused.

### ⬜ Unit 62: Fresh Final Provider Queries
**What**: Re-query GitHub, source mains/checks, Cloudflare Worker/D1/R2, runtime digests, ASC, installed proof locators, cleanup, and feedback health against Unit 61.
**Output**: Attestor run/artifact IDs, provider post-queries, evidence digests/expiry, and either a green result or a structured failure report consumed by Unit 63.
**Acceptance**: Every query reaches a terminal classified result; a green result proves all identities match, while any mismatch/failure is preserved as a sanitized fail-closed report; no ledger drift or mutation; raw evidence private.

### ⬜ Unit 63: Release Set Compile and Leak Scan
**What**: When Unit 62 is green, compile the complete Release Set, validate graph/claims/receipts/dispositions, and scan every field/artifact. When Unit 62 is not green, emit a bound skipped-due-to-provider-failure record instead of compiling.
**Output**: Canonical Release Set digest, validation report, and leak-scan report, or a structured skip/failure report consumed by Unit 63a.
**Acceptance**: The result is terminally classified: either the Release Set is publishable with proposed state `shipped`, all proofs fresh, and no waiver/blocker/leak, or publication is explicitly refused with bound reasons; Product Change remains unshipped and ledger remains Unit 61.

### ⬜ Unit 63a: Final Attestor Dispatch Plan
**What**: When Unit 63 is green, compile a single-use final-query plan with FinalizationClaim, nonce, exact workflow/source/validator identities, evidence predicates, 45-minute coordinator timeout, and timestamp contract. Strict-parse provider/GitHub HTTP `Date` only as IMF-fixdate GMT, convert to UTC epoch milliseconds at exact one-second precision, and serialize RFC 3339 with `.000Z`; missing/non-GMT/invalid/substituted artifact times fail. Per provider let `S` be first-page Date, `C` final full-inventory consistency-requery Date, and `R` the immediately following GitHub API Date. Require inclusive `S <= C`, `C-S <= 120000`, and `-5000 <= R-C <= 5000`. If Unit 63 is not green, emit a structured skip report.
**Output**: Validated final-query dispatch plan/digest/nonce and green or structured skip report.
**Acceptance**: Plan is complete, single-use, source-owned-secret preserving, and executable by Unit 64 through authenticated local `gh`; it grants read-only attestation only and performs no query or mutation itself.

### ⬜ Unit 63b: Finalization Claim Resolution
**What**: Resolve Unit 61 before any other transition. If Units 62-63a are fully green, record a validated publish decision for its exact generation/repair iteration and leave `FinalizationClaim` as ledger head for Unit 64. If any is not green, expected-parent append `FinalizationAborted`, verify it as head, write sanitized abort evidence to `finalize-iN`, and jump to Units 64a1-c. A later Unit 61 must create a fresh generation.
**Output**: Publish-decision receipt, or append run/parent/`FinalizationAborted` commit/actor proof/post-query plus reviewer-approved loopback units.
**Acceptance**: The claim is never stranded: green proof authorizes only Unit 64, while any query/compile/leak failure ends at `FinalizationAborted` before repair; no failed generation can publish.

### ⬜ Unit 64: Authoritative ReleaseSetPublished Append
**What**: After Unit 63b records a green publish decision, first start the protected `finalization-coordinator` at the exact merged delivery SHA with Unit 63a's nonce/plan and prove it is waiting with a 45-minute fail-closed timeout. Then execute local orchestration: in parallel, use authenticated `gh` to dispatch both exact source-owned final-query attestors; verify their private Cloudflare/D1/R2/ASC fingerprints, audit/watermark metadata where exposed, identities, and attestations; replace freshness-bound evidence; recompile and leak-scan the set; and dispatch the protected `finalization-evidence` ingest for the same nonce. The coordinator accepts at most one attested evidence artifact, requires each private-provider snapshot to be at most 120 seconds old, re-queries source mains/checks/mutation runs, public Worker/runtime digests, evidence identity/expiry, nonce reuse, and ledger parent, then appends either `ReleaseSetPublished` or `FinalizationAborted`. Missing local progress, dispatch/query/verification/compile/ingest failure, timeout, stale evidence, or drift selects abort followed only by Units 64a1-c.
**Output**: Coordinator/evidence run IDs; final attestor run/attempt/artifact/attestation IDs and point-in-time provider query timestamps; refreshed Release Set/query/leak digests; ledger parent; authoritative `ReleaseSetPublished` or `FinalizationAborted` commit; actor/workflow proof; and post-query.
**Acceptance**: Coordinator is durable before local work and emits exactly one direct-child terminal even if local disappears. Immediately before CAS it strict-parses fresh GitHub API Date as `E` using Unit 63a rules. For every provider independently require inclusive `E >= C-5000` and `E >= R-5000`; let raw age `A=E-S`: `A < -5000` fails, `-5000 <= A < 0` clamps to `0`, and `0 <= A <= 120000` passes, with boundary values accepted and larger magnitude rejected. Artifact time never determines freshness; consistency hashes match. Drift/uncertainty abort. `ReleaseSetPublished` skips Units 64a1-c and alone unlocks Unit 65; `FinalizationAborted` writes sanitized abort evidence to `finalize-iN` and executes Units 64a1-c. Publication binds point-in-time observations, not a distributed lock.

### ⬜ Unit 64a1: Finalization-Abort Records Review
**What**: Conditional on Unit 60f4, 63b, or 64 failure/abort, integrate exact current delivery main into `finalize-iN` with `git merge --no-ff origin/main`, add all pre-claim/finalization query/coordinator/abort evidence and a byte-complete forward-port manifest, and hostile-review public-safe records. On successful Unit 64 publication this unit is skipped.
**Output**: Abort source unit; either pre-claim failure with `finalization_generation=null`/no ledger event or post-claim generation/`FinalizationAborted` locator; converged records verdict; exact `finalize-iN` head/digests; and forward-port manifest.
**Acceptance**: Every post-Unit60f3 record and abort locator is present; private evidence absent; source finalization branch ancestry preserved; no provider mutation.

### ⬜ Unit 64a2: Finalization-Abort Records Pull Request
**What**: Open the `finalize-iN` abort-records PR and obtain protected CI plus terminal review.
**Output**: PR/head/run/review IDs.
**Acceptance**: Exact head green; no unresolved/in-flight check; no merge or provider mutation.

### ⬜ Unit 64a3: Finalization-Abort Records Merge and Loopback
**What**: Merge abort records, verify exact delivery main/CI, increment to `repair_iteration=i(N+1)`, create `worker/cross-client-delivery-repair-i(N+1)-r4` from that main, verify the forward-port manifest byte-for-byte, preserve/recreate source worktrees from exact mains, amend/review the doing doc, and loop to Unit 60a.
**Output**: Merge/main/run IDs, protected abort-records commit, retired `finalize-iN`, next iteration/branch/worktree/base, forward-port/worktree proof, and doing-doc verdict.
**Acceptance**: Protected main preserves all finalization failure records; next branch has exact ancestry; iteration increments once; fresh Unit 61 generation will be required; Unit 60a is the only next unit.

### ⬜ Unit 65: Main Projection
**What**: Only when Unit 64 post-query proves `ReleaseSetPublished` is protected-ledger head for the current finalization generation, authorize and project that authoritative commit/digest to protected main, then verify pointer and CI.
**Output**: Authorization/claim/terminal commits, run/attempt ID, projection receipt digest, main commit/CI, and authoritative pointer post-query.
**Acceptance**: Guard rejects `FinalizationAborted`, missing, stale, or prior-generation Unit 64 state; receipt matches claim; projection points to current `ReleaseSetPublished`; terminal or containment commit recorded; projection cannot alter shipment truth.

### ⬜ Unit 66: Protected Tag and GitHub Release Projection
**What**: Only after Unit 65 succeeds for current `ReleaseSetPublished`, authorize and create protected tag/GitHub Release pointing to that ledger event, attach sanitized attestations, and verify.
**Output**: Authorization/claim/terminal commits, run/attempt ID, projection receipt digest, tag/release/attestation URLs, and authoritative post-query.
**Acceptance**: Guard rejects absent/aborted/stale generations; receipt matches claim; terminal or containment commit recorded; projections identify current Unit 64 publication; retries idempotent; no private artifact.

### ⬜ Unit 67: Post-Shipment Read-Only Closeout
**What**: Only after Units 64-66 prove current-generation publication/projections, read-only verify ledger/projections/providers/feedback/in-flight state, update Desk/lessons/docs, retire all clean task-owned source/coordinating branches/worktrees, notify Slugger, and report final inventory. Any new product/release finding opens a superseding Product Change.
**Output**: Final evidence index, Desk completion commit, post-query, coordinating-worktree cleanup receipt, final inventory, and Slugger receipt.
**Acceptance**: Guard rejects aborted/non-published generations; zero in-flight operation or residual task-owned worktree/branch; repos clean/synced; unrelated work untouched; no post-shipment corrective mutation.

## Execution

- **TDD strictly enforced**: tests -> red -> implementation -> green -> refactor.
- Commit after each a/b/c phase or atomic live-operation receipt; push every commit.
- Run each repository's focused gate during development and full gate before merge/finalization.
- Store public-safe logs/manifests only under `./2026-07-20-1958-doing-cross-client-delivery/`; raw evidence remains private ephemeral and is deleted after sanitized proof.
- Source edits are forbidden before Unit 13 rebaseline succeeds; the active TestFlight task retains its lane until then.
- Provider mutations require authority, dry-run/preflight, protected ledger claim, singleton environment approval, per-request drift checks, receipts, terminal/containment, and post-query.
- The first-install bootstrap family (`github-environment-ui-bootstrap-v1` plus same-target-only resume) and restore-only `github-environment-ui-recovery-v1` are the only operations exempt from their target environment's approval gate: all require protected ledger authorization/claim, authenticated actor-ID proof, bounded UI changes, UI/API evidence, and unambiguous terminal state; none can invoke source/provider mutation code. Bootstrap installs a new gate once; recovery requires proven drift and can only restore the last attested policy. All policy changes use the installed gate.
- Cross-provider publication uses exact, age-bounded, source-owned point-in-time attestations plus a durable protected coordinator; it must never claim an atomic distributed snapshot or lock across Cloudflare and ASC because those control planes expose no shared transaction. Later external changes create new state and require a new Product Change.
- Every Unit 60c30-59 action consumes only the latest numbered Unit 60c29f evaluation pass; a newer pass supersedes all unconsumed older decisions. A replay inherits the original unit's complete What/Output/Acceptance plus current-iteration identities; `terminal-or-containment` describes ledger safety, not proof success. Containment, blocker, failed postcondition, or missing evidence marks the node failed, propagates through a new evaluation pass, blocks Unit 60d/61, and opens the next reviewer-gated repair iteration. Durable no-replay requires byte-equal direct inputs and green predecessors; renewable observation age triggers Unit 60c59b read-only refresh, never mutation replay by itself.
- Public-safe records are committed on the named iteration branch and merge through protected PR/CI checkpoints after Units 29, 42, 50, 59, and 60. Finalization consumes only Unit 60f3's exact protected-main commit and GitHub attestation; branch-only records are never authoritative.
- Visual changes or consuming-surface proof require `visual-qa-dogfood` and a closed absurdity ledger.
- Fix ordinary blockers with fresh sub-agents and TDD; surface only true human-only credentials/hardware/account capability after all safe authenticated paths are exhausted.
- Keep checklists and ledger/Desk ownership current after every transition.

## Progress Log

- 2026-07-20 20:58: Created from the reviewer-approved planning doc in direct execution mode; source work remains gated on the active TestFlight owner's protected handoff.
- 2026-07-20 21:11: Granularity pass fixed the pre-edit identity-freeze order, split delivery governance/review and every mixed source feature into atomic tracks, and decomposed the live pilot into one mutation, attestation, actor proof, rollback, cleanup, or ledger transition per unit with terminal evidence.
- 2026-07-20 21:16: Granularity Round 2 split record review/PR/merge and final audit/repair/replay/convergence/cleanup, retained source worktrees through repairs, and completed missing deploy, supersession, and projection claim/receipt/terminal evidence.
- 2026-07-20 21:23: Final granularity repair preserved the coordinating worktree, moved the `shipped` transition exclusively to Unit 64, split delivery/web/native repairs and every conditional Unit 30-59 replay, separated provider-record classification from claimed artifact deletion, and completed live mutation evidence chains.
- 2026-07-20 21:29: Granularity convergence repair moved protected append proof after workflow merge, split every delivery/web/native repair into repair/PR/merge, replayed merged-state rebaseline and exact operation records before live proofs, and separated read-only versus claimed cleanup replay.
- 2026-07-20 21:35: Final granularity findings were closed with reviewer-gated one-unit-per-finding repair expansion and conditional replay of live delivery settings plus protected-ledger append proof before downstream rebaseline.
- 2026-07-20 21:46: Validation pass made the upstream release task's outbound handoff and this task's protected receiver acknowledgment explicit, added authorized web/native environment-governance operations, and made the Unit 1 red test independently runnable with pinned Vitest.
- 2026-07-20 21:54: Validation Round 2 pinned pnpm and allowed only the esbuild bootstrap, replaced the circular first environment approval with a ledger-authorized, actor-bound GitHub UI bootstrap exception, and added separate read-only protected workflow proofs for both source environments.
- 2026-07-20 22:02: Validation Round 3 assigned the bootstrap exception to early schema/authority/DAG/GitHub/CLI TDD units, added installed-gate governance and proof replays after source repairs, and guaranteed every finalization claim ends in either publication or `FinalizationAborted` before repair.
- 2026-07-20 22:09: Validation Round 4 made exact-prestate rollback a nonterminal same-claim bootstrap waypoint, added restore-only live-drift governance recovery, and moved final private provider attestors into the uninterrupted publication unit before its protected zero-drift checks.
- 2026-07-20 22:15: Validation Round 5 added terminal `BootstrapRolledBack` with same-target-only resume, started a fail-closed protected coordinator before local finalization work, and replaced impossible cross-provider lock claims with exact age-bounded point-in-time attestation semantics.
- 2026-07-20 22:23: Validation Round 6 added component-level red graph and GitHub/UI tests for bootstrap resume before its implementation and CLI wiring.
- 2026-07-20 22:24: Validation converged with no remaining BLOCKER or MAJOR finding.
- 2026-07-20 22:38: Ambiguity pass protected receiver acknowledgment on `release-ledger`, added mechanical proof invalidation and protected records checkpoints, defined repair/finalization iteration loops, required isolated live rollback proofs, and fixed signed observation-time semantics.
- 2026-07-20 22:48: Ambiguity Round 2 assigned `ReceiverAcknowledged` and rollback selection to early TDD, added temporal no-replay invalidation and pre-claim recheck, protected failed-iteration records, and specified inclusive server-clock equations.
- 2026-07-20 22:59: Ambiguity Round 3 made replay evaluations re-entrant/latest-pass-only, separated durable proof from batched renewable observations, total-ordered rollback candidates, and isolated delivery code-repair branches from records branches.
- 2026-07-20 23:12: Ambiguity Round 4 closed renewable replay routing, serialized delivery repair PRs on fresh bases, added protected finalization-abort records checkpoints, and made queue-before-deploy proof a replayable compatibility-generation barrier.
- 2026-07-20 23:19: Ambiguity converged with no remaining BLOCKER or MAJOR finding.
- 2026-07-20 23:27: Cold validation added an upstream-owned canonical receiver-ack schema/verifier repair plus delivery ledger/projection and two-sided verification stages before source rebaseline.
