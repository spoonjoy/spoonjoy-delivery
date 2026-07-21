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
**What**: Add red contract tests for package metadata, Node 22/pnpm pinning, strict compiler/linter/formatter settings, ESM exports/bin, deterministic scripts, warning failure, coverage thresholds, repository instructions, ignored private artifacts, and SHA-pinned workflow actions.
**Output**: `test/repository-contract.test.ts` plus red logs.
**Acceptance**: Focused Vitest fails only because foundation files/configuration are absent.

### ⬜ Unit 1b: Delivery Repository Foundation - Implementation
**What**: Add `package.json`, `pnpm-lock.yaml`, `tsconfig.json`, `eslint.config.mjs`, `vitest.config.ts`, formatter config, `.gitignore`, `AGENTS.md`, `src/index.ts`, `src/cli.ts`, and `README.md` using Node 22, pnpm 10.28.1, ESM, strict TypeScript, Ajv 2020, YAML strict parsing, RFC 8785 canonicalization, and zero-warning scripts.
**Output**: Installable `spoonjoy-delivery` package and green repository contract.
**Acceptance**: Frozen install, format check, lint, typecheck, focused tests, and build pass without warnings.

### ⬜ Unit 1c: Delivery Repository Foundation - Coverage
**What**: Cover CLI success/failure/help/version and configuration branches; run all foundation gates.
**Output**: Coverage and warning logs.
**Acceptance**: 100% statements/branches/functions/lines for new code and all gates green.

### ⬜ Unit 2a: Structural Schemas and Parsing - Tests
**What**: Add red fixture tests for every planning object, strict JSON/YAML parsing, duplicate keys, unknown fields, invalid versions/IDs/SHAs/digests/timestamps, empty collections, malformed unions, and schema fixture drift.
**Output**: `schemas/*.schema.json`, `test/schema.test.ts`, `test/fixtures/schema/{valid,invalid}/`, and red logs.
**Acceptance**: Tests fail on missing parser/schema implementation and demonstrate each rejection path.

### ⬜ Unit 2b: Structural Schemas and Parsing - Implementation
**What**: Implement `src/parse.ts`, `src/schema.ts`, and versioned JSON Schemas for authority policy, Product Change/Contract/Pack, authorization, claims/terminals/cancellation, operation graph/receipt, evidence/attestation, handoff/rebaseline, cleanup, finalization, Release Set, and projections.
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
**What**: Add red semantic tests for authority roles, GitHub actor/run provenance, allowed transitions, monotonic generations, expected-parent CAS, active-generation reservation, pre/post-claim supersession, emergency cancellation, terminal containment, expired claims, direct-child finalization, unauthorized/self-declared appends, and every race ordering.
**Output**: `test/ledger.test.ts`, ledger history fixtures, and red logs.
**Acceptance**: Tests exercise both winners of each CAS race and reject all illegal histories.

### ⬜ Unit 4b: Ledger State Machine and Authority - Implementation
**What**: Implement `src/authority.ts`, `src/ledger.ts`, `src/transitions.ts`, immutable actor policy `policies/authority-v1.yaml`, append payload/digest generation, and local history validation for `refs/heads/release-ledger`.
**Output**: Deterministic ledger transition engine.
**Acceptance**: Only protected-workflow/provider-bound actors and legal expected-parent transitions validate; shipment is possible only through direct-child `ReleaseSetPublished`.

### ⬜ Unit 4c: Ledger State Machine and Authority - Coverage
**What**: Complete transition-table, clock/expiry, race, cancellation, and malformed-history coverage.
**Output**: State-machine matrix and coverage logs.
**Acceptance**: 100% coverage, mutation testing spot checks reject removed guards, zero warnings.

### ⬜ Unit 5a: Typed Operation DAGs - Tests
**What**: Add source-agnostic red tests for static templates, typed topological dataflow, authoritative-query/prior-receipt inputs, branch cardinality, template/resolved digests, per-request drift, idempotency, retry, compensation, and partial failure. Use fictional provider fixtures only; exact web/native operation inventories wait for the validated Unit 13 rebaseline.
**Output**: `test/operation-graph.test.ts`, generic operation fixtures, and red logs.
**Acceptance**: Unknown methods/paths/nodes, unresolved/multiple/out-of-graph values, stale pre-state, and ambiguous POST/PATCH/skip branches fail.

### ⬜ Unit 5b: Typed Operation DAGs - Implementation
**What**: Implement `src/operation-graph.ts`, `src/receipts.ts`, canonical expression resolution, dry-run plans, apply-time revalidation, receipt chaining, and containment planning.
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
**What**: Add red mocked-HTTP tests for exact workflow dispatch, run/attempt/workflow SHA/actor verification, waiting-job/environment inventory, singleton enforcement, approval request/response, before/after transition checks, artifact identity/download/digest/expiry, GitHub attestation claims, reruns/forks/mutable refs/rate limits/pagination/retries, and redacted errors.
**Output**: `test/github.test.ts`, HTTP fixtures, and red logs.
**Acceptance**: All stale, ambiguous, unauthorized, replayed, or leaking provider states fail closed.

### ⬜ Unit 7b: GitHub Run, Attestation, and Environment APIs - Implementation
**What**: Implement `src/github.ts`, `src/attestations.ts`, authenticated `gh` adapter, exact dispatch/wait/download/verify, environment review handshake, and artifact-attestation verification.
**Output**: `attestor dispatch|verify` and `claim approve` CLI commands with dependency injection for tests.
**Acceptance**: Mocked provider matrix passes; production code never logs token/provider payloads.

### ⬜ Unit 7c: GitHub Run, Attestation, and Environment APIs - Coverage
**What**: Cover all HTTP/status/retry/pagination/timeout/cancellation/approval branches.
**Output**: Coverage and warning logs.
**Acceptance**: 100% coverage and zero warnings.

### ⬜ Unit 8a: Protected Ledger Append and Finalization - Tests
**What**: Add red workflow/semantic tests for exact-SHA append workflow, expected-parent update, provider actor/run binding, claim/terminal/cancellation/finalization payloads, singleton environment governance, Release Set proof graph, stale evidence, direct-child shipment, aborted finalization, and non-authoritative main/tag projections.
**Output**: `test/finalization.test.ts`, `test/workflow-contract.test.ts`, workflow fixtures, and red logs.
**Acceptance**: Direct pushes, wrong parent/actor/workflow, interleaved finalization, stale provider evidence, and projection-only shipment fail.

### ⬜ Unit 8b: Protected Ledger Append and Finalization - Implementation
**What**: Implement `src/finalize.ts`, `src/projections.ts`, `.github/workflows/ledger-append.yml`, `.github/workflows/project-release-set.yml`, GitHub artifact attestations, and CLI commands for authorize/revoke/claim/terminal/cancel/finalize/project.
**Output**: Exact-SHA protected workflow append path and complete Release Set compiler.
**Acceptance**: Local fixture history ships only via `ReleaseSetPublished`; projection retries do not alter ledger truth.

### ⬜ Unit 8c: Protected Ledger Append and Finalization - Coverage
**What**: Cover every finalization rejection, race, failed query, projection retry, and attestation claim.
**Output**: Finalization matrix and coverage logs.
**Acceptance**: 100% coverage, zero warnings, workflow contracts green.

### ⬜ Unit 9a: Rebaseline, Handoff, and Cleanup - Tests
**What**: Add red tests for protected handoff/acknowledgment, exact main/task SHAs, in-flight run detection, cleanup ownership, worktree status, exact-manifest D1/R2/OAuth/media fingerprints, reference checks, dry-run/apply parity, non-deletable provider dispositions, and deletion refusal.
**Output**: `test/rebaseline.test.ts`, `test/cleanup.test.ts`, fixtures, and red logs.
**Acceptance**: Missing/mismatched handoff, dirty/ambiguous ownership, broad deletes, drifted fingerprints, and unclassified retained records fail.

### ⬜ Unit 9b: Rebaseline, Handoff, and Cleanup - Implementation
**What**: Implement `src/rebaseline.ts`, `src/cleanup.ts`, `rebaseline verify`, and `cleanup plan|verify|apply` with apply adapters disabled unless an exact claimed operation invokes them.
**Output**: Source-ownership gate and exact-manifest cleanup engine.
**Acceptance**: Fixture dry-run/apply/verify receipts match; no broad production cleanup exists.

### ⬜ Unit 9c: Rebaseline, Handoff, and Cleanup - Coverage
**What**: Cover repository/provider drift, partial deletion/containment, retry, preserved records, and worktree refusal.
**Output**: Coverage and cleanup safety logs.
**Acceptance**: 100% coverage, zero warnings.

### ⬜ Unit 10a: Delivery CLI, Samples, and Documentation - Tests
**What**: Add red end-to-end CLI tests for init/validate/digest/authorize/dispatch/claim/receipt/evidence/rebaseline/cleanup/finalize/project commands, stable exit codes/JSON, sample Product Change/Contract/Release Set validation, and docs command/path drift.
**Output**: `test/cli-e2e.test.ts`, sample fixtures, and red logs.
**Acceptance**: Command matrix fails only on missing wiring/docs.

### ⬜ Unit 10b: Delivery CLI, Samples, and Documentation - Implementation
**What**: Wire the CLI; add `examples/`, `docs/architecture.md`, `docs/authority-and-ledger.md`, `docs/operation-graphs.md`, `docs/evidence-policy.md`, `docs/source-integration.md`, `docs/rollback.md`, and `docs/photo-studio-pilot.md` without secrets/private paths.
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
**What**: Capture settings-before, apply automatic branch deletion, read-only workflow tokens, no PR approval, selected SHA-pinned Actions, protected main, protected `release-ledger`, no force/delete, required checks/admin enforcement, workflow-only ledger bypass, and delivery environments; capture settings-after.
**Output**: Before/apply/after JSON and protected append/direct-push fixture receipts.
**Acceptance**: Settings verifier passes against live GitHub; direct ledger update fails; disposable protected-workflow append succeeds; run ID, ledger parent/commit, and post-query are recorded.

### ⬜ Unit 12a: Delivery Hostile Review and TDD Repair
**What**: Run fresh architecture, security, privacy, test, and release reviewers over the delivery diff and repair every BLOCKER/MAJOR through new red tests and green implementation.
**Output**: Review verdicts and atomic repair commits.
**Acceptance**: All reviewers converge; full local gates remain green at 100% coverage with zero warnings.

### ⬜ Unit 12b: Delivery Pull Request and Protected CI
**What**: Open the delivery PR, complete self-review, run protected CI, and repair any PR-only failure without merging.
**Output**: PR URL, exact head SHA, CI run IDs, and terminal reviewer verdict.
**Acceptance**: All required checks succeed on the exact head; no unresolved review thread or in-flight run.

### ⬜ Unit 12c: Delivery Merge and Exact-Main Proof
**What**: Merge the protected PR, verify exact delivery main and CI, then retire only the merged delivery implementation branch/worktree.
**Output**: Merge SHA, exact-main run IDs, settings post-query, and worktree/branch cleanup receipt.
**Acceptance**: Main is clean/green; no in-flight delivery mutation; only canonical clone and protected ledger remain.

### ⬜ Unit 13a: Source Owner Handoff Receipt
**What**: Wait in-turn for task `019f2e25-2fc3-75b2-8ba3-335f3777115a` and ingest its protected owner-release handoff plus receiver acknowledgment without touching source repositories.
**Output**: Handoff/acknowledgment commits, task commit, and stated cleanup owner.
**Acceptance**: Both protected records agree on exact ownership and no source mutation is performed.

### ⬜ Unit 13b: Source Rebaseline Verification
**What**: Query exact web/native remote main, open PRs, active workflow runs, deployments, TestFlight mutations, worktrees, and cleanup ownership; run `rebaseline verify`.
**Output**: Rebaseline bundle and validator report.
**Acceptance**: Zero in-flight source mutation/deploy/release work, exact SHAs, explicit cleanup ownership, and green validator.

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
**What**: Add red tests for non-environment preflight, one protected mutation job/environment, authorization/claim verification, no legacy unbound auto-deploy, DAG receipt/containment hooks, and private provider capture.
**Output**: Web release workflow red tests.
**Acceptance**: Current automatic/unbound deploy and mixed protected-job behavior are rejected by tests.

### ⬜ Unit 15b: Web Release Authorization - Implementation
**What**: Split `.github/workflows/production-deploy.yml` into preflight plus singleton claimed mutation operations, pin exact delivery validator, and gate D1/deploy/canary/report/artifact nodes with private output and receipts.
**Output**: Authorized production workflow.
**Acceptance**: Workflow contract tests, security tests, typecheck/build, and dry-run fixtures pass; no provider mutation occurs in validation.

### ⬜ Unit 15c: Web Release Authorization - Coverage
**What**: Cover absent/stale/revoked claims, environment mismatch, each operation alternative/receipt/containment, and log leaks.
**Output**: Web workflow coverage and warning logs.
**Acceptance**: 100% changed-code coverage, full suite green, zero warnings.

### ⬜ Unit 16a: Web Provider Attestor - Tests
**What**: Add red tests for source-owned exact-delivery-SHA dispatch, least-privilege Cloudflare/D1/GitHub queries, pagination/errors, sanitized output, artifact attestation, expiry, and wrong run/ref/event.
**Output**: Web attestor red tests.
**Acceptance**: Self-authored deploy summaries and broad/mutable evidence fail verification.

### ⬜ Unit 16b: Web Provider Attestor - Implementation
**What**: Add the source-owned production attestor workflow and scripts that capture raw responses privately and emit only allowlisted attested evidence.
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
**What**: Add red workflow tests for non-environment preflight, singleton internal-testflight mutation job, reviewer/self-review/no-bypass settings, claim/run/attempt validation, legacy dispatch rejection, receipts, and containment.
**Output**: Native workflow red tests.
**Acceptance**: Current unbound/mixed TestFlight path and raw `tee` output fail the new contracts.

### ⬜ Unit 21b: Native TestFlight Authorization - Implementation
**What**: Refactor `.github/workflows/testflight.yml` into exact preflight and claimed singleton mutation operations pinned to the delivery validator.
**Output**: Authorized TestFlight workflow shell.
**Acceptance**: Focused contracts, full Swift suite, scenarios, builds, shell syntax, and warning scans pass.

### ⬜ Unit 21c: Native TestFlight Authorization - Coverage
**What**: Cover claim/environment/run/retry/containment and settings drift paths.
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
**What**: Add red tests for exact delivery SHA, least-privilege ASC queries, app/build/group/metadata/notification state, pagination/errors, sanitization, artifact attestation, expiry, and wrong run/ref.
**Output**: ASC attestor red tests.
**Acceptance**: Publisher summaries and raw tester responses cannot verify.

### ⬜ Unit 23b: Native ASC Attestor - Implementation
**What**: Add source-owned read-only ASC attestor with private raw capture and allowlisted evidence.
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

### ⬜ Unit 28: Merged-State Pilot Rebaseline
**What**: Re-query exact merged mains, environments, credential scopes, current/previous ASC identities, hardware, Codex host/model/tool digest, in-flight runs, and cleanup ownership.
**Output**: Pilot rebaseline/freeze record.
**Acceptance**: Validator green; singleton environments match actor/bypass rules; zero in-flight mutation; exact IDs recorded without secret values.

### ⬜ Unit 29a: Photo Studio Change and Exact Operation Graphs - Tests
**What**: Add red validation fixtures for exact merged web/native operation nodes/alternatives, Product Change classifications, compatibility matrix, evidence requirements, and freeze references.
**Output**: Red change/operation fixtures.
**Acceptance**: Generic or stale pre-rebaseline graphs fail validation.

### ⬜ Unit 29b: Photo Studio Change and Exact Operation Graphs - Implementation
**What**: Add exact Product Change and source-specific graph templates from merged source, classify every surface, and produce authorization payloads without appending.
**Output**: Validated change/graph files and dry-run plans.
**Acceptance**: Exactly one predicate per fixture node; all required/no-op/deferred rules valid.

### ⬜ Unit 29c: Photo Studio Change and Exact Operation Graphs - Hostile Review
**What**: Hostile-review the Product Change and graph records and make bounded fixture/data repairs without opening or merging a PR.
**Output**: Converged reviewer verdicts, repair commits, and final graph/change digests.
**Acceptance**: No BLOCKER/MAJOR; local validators green; no provider mutation.

### ⬜ Unit 29d: Photo Studio Change and Exact Operation Graphs - Pull Request
**What**: Open the delivery records PR and obtain protected CI plus terminal review on the exact head.
**Output**: PR URL, head SHA, CI run IDs, and review state.
**Acceptance**: Exact head green; no unresolved/in-flight check; no merge or provider mutation.

### ⬜ Unit 29e: Photo Studio Change and Exact Operation Graphs - Merge
**What**: Merge the protected records PR and verify exact delivery main.
**Output**: Merge SHA, exact-main CI runs, and graph/change digest post-query.
**Acceptance**: Exact main green and matches reviewed records; no provider mutation.

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
**What**: On the frozen previous TestFlight build, create and export one run-bound offline Photo Studio mutation before production deploy.
**Output**: Installed build/ASC/source identity, queue-before manifest, run-owned IDs, and private evidence digest.
**Acceptance**: Real frozen installed build; queue pending exactly once; no production backend effect yet.

### ⬜ Unit 35: Production D1 Migration Operation
**What**: Authorize, preflight, claim, approve, and apply or executable-no-op the exact D1 migration/backfill operation; post-query and append terminal.
**Output**: Run ID, ledger parent/claim/terminal commits, migration receipt, D1 post-query, and containment if needed.
**Acceptance**: Authorized node terminal; no pending migration; unrelated rows unchanged.

### ⬜ Unit 36: Production Worker Deploy Operation
**What**: Authorize, preflight, claim, approve, and apply exact Worker deploy; verify source/pack/runtime/traffic and append terminal.
**Output**: Authorization/claim/terminal commits, run/attempt ID, deploy receipt digest, Worker version/source/digests, authoritative post-query, and rollback locator.
**Acceptance**: Exact version active; health/readiness green; deploy receipt matches claim; terminal or containment commit recorded.

### ⬜ Unit 37: Production Canary and Reporting Operation
**What**: Authorize OAuth/user/token/legacy-row canary plus conditional GitHub report/artifact nodes, exact cleanup, post-query, and terminal append.
**Output**: Run ID, ledger commits, per-node receipts, issue/artifact IDs, cleanup, and provider post-query.
**Acceptance**: One predicate branch per node; canary residue zero; no sensitive output.

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

### ⬜ Unit 43: Native Archive and Upload Operation
**What**: Authorize, preflight, claim, approve, archive/export/upload, verify provenance/hashes, post-query ASC, and append terminal.
**Output**: Run ID, ledger commits, hashes/provenance, ASC app/build IDs/state, receipt, and post-query.
**Acceptance**: Exact artifact uploads once and reaches required state or containment.

### ⬜ Unit 44: ASC Metadata and Localization Operation
**What**: Authorize export-compliance and app/build-localization predicate branches, post-query, and append terminal.
**Output**: Run ID, ledger commits, PATCH/POST/skip receipts, and ASC post-query.
**Acceptance**: One branch per node, exact resolved IDs/digests, terminal or containment.

### ⬜ Unit 45: ASC Group Attachment Operation
**What**: Authorize group create/attach/skip, post-query exact relation, and append terminal.
**Output**: Run ID, ledger commits, group receipts/IDs, and ASC post-query.
**Acceptance**: Exact build attached once; terminal or containment.

### ⬜ Unit 46: ASC Tester Notification Operation
**What**: Apply executable no-op by default, or authorize auto-notify/notification only if explicitly required; post-query and append terminal.
**Output**: Run ID, ledger commits, no-op or notification receipts, and ASC post-query.
**Acceptance**: No implicit notification; chosen predicate branch is terminal.

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

### ⬜ Unit 51: Worker Rollback Proof
**What**: Authorize and safely exercise or simulate exact Worker rollback/restore with provider queries and terminal receipts.
**Output**: Ledger/run IDs, before/rollback/restore versions, receipts, and post-query.
**Acceptance**: Named target selected, containment safe, candidate restored, no unrelated change.

### ⬜ Unit 52: Capability Rollback Proof
**What**: Authorize and exercise or simulate capability disable/restore with runtime oracle and terminal receipts.
**Output**: Ledger/run IDs, capability states, receipts, and post-query.
**Acceptance**: Degraded behavior matches contract and restore is exact.

### ⬜ Unit 53: Migration Containment Proof
**What**: Authorize and exercise safe additive-migration containment without destructive rollback.
**Output**: Ledger/run IDs, migration state/backup locator, containment receipt, and post-query.
**Acceptance**: Existing/previous clients remain compatible and no data loss occurs.

### ⬜ Unit 54: Native Candidate Supersession Proof
**What**: Authorize and exercise or simulate candidate supersession without deleting immutable ASC records.
**Output**: Authorization/claim/terminal commits, run/attempt ID, supersession receipt digest, selected/contained build dispositions, and authoritative ASC post-query.
**Acceptance**: Supersession receipt matches claim; superseded candidate cannot ship; selected build remains explicit; terminal or containment commit recorded.

### ⬜ Unit 55: D1 Cleanup Operation
**What**: Authorize exact-manifest deletion of remaining run-owned D1 rows, verify references and zero count, and append terminal.
**Output**: Run/ledger IDs, plan/apply/verify receipts, and D1 post-query.
**Acceptance**: Zero run-owned D1 residue; unrelated data unchanged.

### ⬜ Unit 56: R2 and Generated Media Cleanup Operation
**What**: Authorize exact-manifest deletion of run-owned R2/media objects, verify references and zero keys, and append terminal.
**Output**: Run/ledger IDs, plan/apply/verify receipts, and R2 post-query.
**Acceptance**: Zero run-owned media residue; referenced/pre-existing objects preserved.

### ⬜ Unit 57: OAuth and Token Cleanup Operation
**What**: Authorize exact cleanup of run-owned OAuth clients/tokens/connections, verify zero, and append terminal.
**Output**: Run/ledger IDs, plan/apply/verify receipts, and provider/D1 post-query.
**Acceptance**: Zero run-owned auth residue; active/pre-existing credentials preserved.

### ⬜ Unit 58: Artifact Cleanup and Provider Records
**What**: Classify non-deletable provider records and remove run-owned temporary provider artifacts/caches; retain source branches/worktrees through final review and replay.
**Output**: Preserved-record inventory and artifact cleanup receipt.
**Acceptance**: Zero deletable provider-artifact residue; source worktrees remain available for Unit 60 repairs.

### ⬜ Unit 59: Negative Finalization Proof
**What**: Attempt finalization with stale digest, wrong claim, mismatched provider identity, and failed cleanup fixtures.
**Output**: Rejected run IDs, ledger parent, error codes, and no-shipment post-query.
**Acceptance**: No `ReleaseSetPublished`; state unchanged except explicit aborted test records.

### ⬜ Unit 60a: Pre-Finalization Hostile Audit
**What**: Run fresh architecture, security, privacy, compatibility, test, release-receipt, and visual reviewers over merged/live state without editing.
**Output**: Ordered findings with exact affected repositories and proof units.
**Acceptance**: Every finding has severity, evidence, owner, and required replay scope; no mutation or shipment.

### ⬜ Unit 60b: Pre-Finalization Repair Pull Requests
**What**: Repair findings through per-repository TDD commits, protected PRs, and exact-main merges; create a superseding change/authorization when behavior or provider operations change.
**Output**: Repair PRs/SHAs/CI, reviewer verdicts, and superseding records where required.
**Acceptance**: Repaired exact mains green; no unresolved review; no shipment; unaffected proof is not replayed yet.

### ⬜ Unit 60c: Repair Rebaseline and Affected Proof Replay
**What**: Rebaseline merged repairs, mechanically invalidate dependent evidence, and replay each explicitly affected Unit 30-59 proof to fresh terminal evidence.
**Output**: Rebaseline digest, invalidation graph, replay run/ledger/provider/cleanup receipts.
**Acceptance**: Every invalidated proof has fresh terminal evidence; unrelated proof remains valid by dependency graph; no shipment.

### ⬜ Unit 60d: Final Convergence Review
**What**: Run fresh reviewers against repaired merged/live state and the complete replay evidence without editing.
**Output**: Final architecture/security/privacy/compatibility/test/release/visual verdicts.
**Acceptance**: All reviewers return no BLOCKER/MAJOR; proof graph is complete; no shipment yet.

### ⬜ Unit 60e: Source Branch and Worktree Retirement
**What**: Retire only clean merged source branches/worktrees after Unit 60d, preserving dirty, pre-existing, or separately owned work.
**Output**: Git/worktree before/after and ownership-safe cleanup receipt.
**Acceptance**: Task source branches/worktrees absent; canonical/source-owner checkouts clean; unrelated work untouched.

### ⬜ Unit 61: Finalization Claim
**What**: Append the generation-reserving `FinalizationClaim` through protected workflow after all proof/cleanup terminals.
**Output**: Append run ID, ledger parent/claim commit, and provider actor/workflow identity.
**Acceptance**: Claim is ledger head and blocks every other transition.

### ⬜ Unit 62: Fresh Final Provider Queries
**What**: Re-query GitHub, source mains/checks, Cloudflare Worker/D1/R2, runtime digests, ASC, installed proof locators, cleanup, and feedback health against Unit 61.
**Output**: Attestor run/artifact IDs, provider post-queries, and evidence digests/expiry.
**Acceptance**: All identities match; no ledger drift or mutation; raw evidence private.

### ⬜ Unit 63: Release Set Compile and Leak Scan
**What**: Compile the complete Release Set from Unit 62, validate graph/claims/receipts/dispositions, and scan every field/artifact.
**Output**: Canonical Release Set digest, validation report, and leak-scan report.
**Acceptance**: State is `shipped`, all required proofs fresh, no waiver/blocker/leak, ledger still Unit 61.

### ⬜ Unit 64: Authoritative ReleaseSetPublished Append
**What**: Expected-parent append the complete Release Set as the direct child of Unit 61 through protected workflow.
**Output**: Append run ID, ledger parent, authoritative commit, actor/workflow proof, and post-query.
**Acceptance**: CAS succeeds once; commit is ledger head and sole shipment event.

### ⬜ Unit 65: Main Projection
**What**: Authorize and project the authoritative ledger commit/digest to protected main, then verify pointer and CI.
**Output**: Authorization/claim/terminal commits, run/attempt ID, projection receipt digest, main commit/CI, and authoritative pointer post-query.
**Acceptance**: Receipt matches claim; projection points to Unit 64; terminal or containment commit recorded; projection cannot alter shipment truth.

### ⬜ Unit 66: Protected Tag and GitHub Release Projection
**What**: Authorize and create protected tag/GitHub Release pointing to Unit 64, attach sanitized attestations, and verify.
**Output**: Authorization/claim/terminal commits, run/attempt ID, projection receipt digest, tag/release/attestation URLs, and authoritative post-query.
**Acceptance**: Receipt matches claim; terminal or containment commit recorded; projections identify Unit 64; retries idempotent; no private artifact.

### ⬜ Unit 67: Post-Shipment Read-Only Closeout
**What**: Read-only verify ledger/projections/providers/feedback/in-flight state, update Desk/lessons/docs, notify Slugger, and report clean repository/worktree inventory. Any new product/release finding opens a superseding Product Change.
**Output**: Final evidence index, Desk completion commit, post-query, cleanup inventory, and Slugger receipt.
**Acceptance**: Zero in-flight operation or residual agent-owned work; repos clean/synced; no post-shipment corrective mutation.

## Execution

- **TDD strictly enforced**: tests -> red -> implementation -> green -> refactor.
- Commit after each a/b/c phase or atomic live-operation receipt; push every commit.
- Run each repository's focused gate during development and full gate before merge/finalization.
- Store public-safe logs/manifests only under `./2026-07-20-1958-doing-cross-client-delivery/`; raw evidence remains private ephemeral and is deleted after sanitized proof.
- Source edits are forbidden before Unit 13 rebaseline succeeds; the active TestFlight task retains its lane until then.
- Provider mutations require authority, dry-run/preflight, protected ledger claim, singleton environment approval, per-request drift checks, receipts, terminal/containment, and post-query.
- Visual changes or consuming-surface proof require `visual-qa-dogfood` and a closed absurdity ledger.
- Fix ordinary blockers with fresh sub-agents and TDD; surface only true human-only credentials/hardware/account capability after all safe authenticated paths are exhausted.
- Keep checklists and ledger/Desk ownership current after every transition.

## Progress Log

- 2026-07-20 21:27: Created from the reviewer-approved planning doc in direct execution mode; source work remains gated on the active TestFlight owner's protected handoff.
- 2026-07-20 21:48: Granularity pass fixed the pre-edit identity-freeze order, split delivery governance/review and every mixed source feature into atomic tracks, and decomposed the live pilot into one mutation, attestation, actor proof, rollback, cleanup, or ledger transition per unit with terminal evidence.
- 2026-07-20 22:00: Granularity Round 2 split record review/PR/merge and final audit/repair/replay/convergence/cleanup, retained source worktrees through repairs, and completed missing deploy, supersession, and projection claim/receipt/terminal evidence.
