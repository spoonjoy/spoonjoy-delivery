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

- None.

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
**What**: Add red tests for static templates, typed topological dataflow, authoritative-query/prior-receipt inputs, branch cardinality, template/resolved digests, per-request drift, idempotency, retry, compensation, partial failure, and the exact current web/TestFlight operation alternatives.
**Output**: `test/operation-graph.test.ts`, `operations/web-production-v1.yaml`, `operations/native-testflight-v1.yaml`, fixtures, and red logs.
**Acceptance**: Unknown methods/paths/nodes, unresolved/multiple/out-of-graph values, stale pre-state, and ambiguous POST/PATCH/skip branches fail.

### ⬜ Unit 5b: Typed Operation DAGs - Implementation
**What**: Implement `src/operation-graph.ts`, `src/receipts.ts`, canonical expression resolution, dry-run plans, apply-time revalidation, receipt chaining, and containment planning.
**Output**: Validated static DAG and runtime receipt APIs plus `operation dry-run|verify-receipts` CLI.
**Acceptance**: Exact web/native fixtures resolve one authorized branch per node and preserve hash-linked provenance.

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

### ⬜ Unit 11: Delivery CI and Repository Governance
**What**: TDD the CI/settings contracts, add SHA-pinned `.github/workflows/ci.yml`, artifact attestation permissions, dependency review/advisory checks, then configure repository Actions permissions, auto-delete branches, protected `main`, protected `release-ledger`, required checks/admin enforcement, no force/delete, workflow-only ledger bypass, and environments used by delivery mutations.
**Output**: Green protected PR checks plus before/after settings JSON.
**Acceptance**: Settings verifier independently matches the plan; workflow tokens default read-only/cannot approve PRs; direct ledger update fails while protected append workflow succeeds in a disposable non-shipping fixture.

### ⬜ Unit 12: Delivery Implementation Hostile Review and Merge
**What**: Run fresh architecture, security, privacy, test, and release reviewers over the entire delivery diff; repair findings with tests; open a non-draft PR; require protected CI and final harsh review; merge; verify exact `main`; retire only the delivery implementation worktree/branch after terminal proof.
**Output**: Merged delivery SHA, PR/run URLs, reviewer verdicts, exact-main gates, and clean delivery worktree inventory.
**Acceptance**: No BLOCKER/MAJOR findings, protected checks green, exact main verified, no delivery residue beyond canonical clone and protected ledger.

### ⬜ Unit 13: Source Ownership Rebaseline Gate
**What**: Wait in-turn for task `019f2e25-2fc3-75b2-8ba3-335f3777115a`; ingest its protected handoff and acknowledgment; query exact web/native main, active runs/deployments/TestFlight mutations, and cleanup ownership; run `rebaseline verify`; only then create isolated `worker/cross-client-delivery` source worktrees.
**Output**: Protected rebaseline record, verified handoff bundle, exact source SHAs, and source worktree paths.
**Acceptance**: Zero in-flight source mutation/deploy/release work, explicit cleanup ownership, validator green; no source edit occurs earlier.

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

### ⬜ Unit 15a: Web Authorization and Attestor - Tests
**What**: Add red tests for non-environment preflight, one protected mutation job/environment, authorization/claim verification, exact DAG nodes, no legacy unbound auto-deploy, sanitized provider output, source-owned read-only attestor dispatch, artifact attestation, and all production workflow partial failures.
**Output**: Web workflow/security red tests.
**Acceptance**: Current automatic/unbound deploy and mixed protected-job behavior are rejected by tests.

### ⬜ Unit 15b: Web Authorization and Attestor - Implementation
**What**: Split `.github/workflows/production-deploy.yml` into preflight plus singleton protected mutation job; pin exact delivery validator; gate the full D1/deploy/canary/report/artifact DAG on authorization/claim; add `.github/workflows/delivery-attest-production.yml`; capture provider output privately and attest sanitized evidence.
**Output**: Authorized production workflow and independent read-only Cloudflare/D1/GitHub attestor.
**Acceptance**: Workflow contract tests, security tests, typecheck/build, and dry-run fixtures pass; no provider mutation occurs in validation.

### ⬜ Unit 15c: Web Authorization and Attestor - Coverage
**What**: Cover absent/stale/revoked claims, environment mismatch, each operation alternative/receipt/containment, attestor pagination/provider errors, and log leaks.
**Output**: Web workflow coverage and warning logs.
**Acceptance**: 100% changed-code coverage, full suite green, zero warnings.

### ⬜ Unit 16a: Web Exact Cleanup and Shared Scenarios - Tests
**What**: Add red tests for run-owned Photo Studio user/recipe/spoon/cover/media manifests, D1/R2/OAuth reference-safe cleanup, dry-run/apply/verify receipts, browser and MCP backend oracle scenarios, bounded agent trial transcript schema, and stale digest negative proof.
**Output**: Web cleanup/scenario red tests.
**Acceptance**: Broad cleanup and non-run-owned deletion are impossible; existing QA/local cleanup behavior remains intact.

### ⬜ Unit 16b: Web Exact Cleanup and Shared Scenarios - Implementation
**What**: Add exact claimed production cleanup adapter and shared Photo Studio seed/action/oracle/cleanup harness reusing current cover/spoon/MCP APIs; keep raw browser/media/agent evidence private and emit sanitized proof.
**Output**: Authorized cleanup operation and reusable scenario harness.
**Acceptance**: Local/QA fixture apply proves parity and zero run-owned residue; production adapter cannot apply without claim.

### ⬜ Unit 16c: Web Exact Cleanup and Shared Scenarios - Coverage
**What**: Cover provider drift, partial cleanup, reference conflict, image generation/editorialization failure/retry, Spoon optional fields, agent threshold, and cleanup retry.
**Output**: Web scenario/cleanup coverage logs.
**Acceptance**: 100% changed-code coverage, full suite/build green, zero warnings.

### ⬜ Unit 17a: Native Contract Lock and Provenance - Tests
**What**: Add red Swift tests for semantic/pack/provenance golden vectors, lock mismatch, Photo Studio codecs/scenarios, generated provenance resource/Info.plist fields, source/tree/build/validator identities, archive/IPA/app hash binding, code signature extraction, pre-provenance transitional attestation, and stale source rejection.
**Output**: Native red tests and cross-language fixtures.
**Acceptance**: Tests fail only on missing lock/provenance implementation.

### ⬜ Unit 17b: Native Contract Lock and Provenance - Implementation
**What**: Add delivery contract/provenance types/resources to `Sources/SpoonjoyCore`, build-time exact identities in code-signed app metadata, package/archive attestation generation, and Contract Pack validation integrated with current cover controls/offline queue/scenario verifier.
**Output**: Native expected-pack lock and signed-in-binary provenance.
**Acceptance**: Focused Swift tests, scenarios, iOS/macOS builds, signature extraction, and cross-language vectors pass.

### ⬜ Unit 17c: Native Contract Lock and Provenance - Coverage
**What**: Cover all decoding/mismatch/resource/build/attestation errors and run full Swift coverage/warning gates.
**Output**: Native coverage and build logs.
**Acceptance**: 100% core coverage, full suite/scenarios/builds green, zero warnings.

### ⬜ Unit 18a: Native Authorization and ASC Attestor - Tests
**What**: Add red tests for preflight/singleton internal-testflight environment job, required reviewer/self-review/no-bypass settings, claim/run/attempt verification, exact TestFlight DAG alternatives, private provider output, approval-history actor, receipts/containment, source-owned read-only ASC attestor, artifact attestations, and legacy unbound dispatch rejection.
**Output**: Native workflow/security red tests.
**Acceptance**: Current unbound/mixed TestFlight path and raw `tee` output fail the new contracts.

### ⬜ Unit 18b: Native Authorization and ASC Attestor - Implementation
**What**: Refactor `.github/workflows/testflight.yml` and `scripts/ci-publish-testflight.sh` to exact authorization/claim DAG execution, singleton protected mutation job, private stdout/stderr, sanitized receipts, and no raw replay; add `.github/workflows/delivery-attest-asc.yml` using exact delivery SHA and least-privilege ASC credentials.
**Output**: Authorized TestFlight lifecycle and independent ASC attestor.
**Acceptance**: Focused contracts, full Swift suite, scenarios, builds, shell syntax, and warning scans pass.

### ⬜ Unit 18c: Native Authorization and ASC Attestor - Coverage
**What**: Cover each ASC POST/PATCH/skip/409 branch, drift, partial failure/containment, claim/environment mismatch, provider/log failure, and attestor response.
**Output**: Native workflow matrix and coverage logs.
**Acceptance**: 100% core/changed-script contract coverage, full gates green, zero warnings.

### ⬜ Unit 19a: Compatibility and Installed Scenario Harness - Tests
**What**: Add red tests for frozen current/previous build/source identities, previous-source debug routing to staged Worker, exact previous installed queue seed, post-deploy replay, transitional attestation, browser/iPhone/iPad/macOS/MCP actor manifests, deterministic backend oracle, bounded agent trials, private evidence, and cleanup.
**Output**: Cross-client scenario red tests.
**Acceptance**: Tests reject simulator-as-TestFlight, source-token-as-installed-proof, unbound queue data, and mismatched actors/digests.

### ⬜ Unit 19b: Compatibility and Installed Scenario Harness - Implementation
**What**: Implement shared scenario IDs/fixtures, previous-source staged harness, native queue seed/export/replay proof, installed app provenance capture, platform-specific actor adapters, backend oracle, and sanitized evidence manifests.
**Output**: Executable compatibility and Photo Studio actor scenario matrix.
**Acceptance**: Local/staged fixture runs pass without production mutation and clean all run-owned fixture state.

### ⬜ Unit 19c: Compatibility and Installed Scenario Harness - Coverage and Visual QA
**What**: Cover actor/queue/offline/error/retry/private-evidence paths; run `visual-qa-dogfood` on all touched Photo Studio native/web surfaces across desktop/mobile/iPhone/iPad/macOS fixtures and close the absurdity ledger.
**Output**: Cross-client coverage, sanitized screenshot digests/verdicts, and visual ledger.
**Acceptance**: Full web/native gates green, 100% changed-code coverage, no warnings, no open visual finding.

### ⬜ Unit 20: Source Integration Hostile Review and Merge
**What**: Run independent contract, security, privacy, compatibility, test, release, and visual reviews over both source diffs; fix by TDD; open separate web/native PRs; serialize merges with the release owner; verify exact source mains and full protected CI. Do not deploy or publish yet.
**Output**: Merged exact web/native SHAs, PR/run URLs, review verdicts, and zero in-flight merge proof.
**Acceptance**: No BLOCKER/MAJOR findings; main checks green; no source provider mutation occurred; source worktrees retained for pilot only if explicitly owned.

### ⬜ Unit 21: Pilot Freeze and Credential/Environment Proof
**What**: Create/validate the Photo Studio Product Change; classify every surface; freeze current/previous ASC build/source identities and exact web/native mains; inventory attestor/mutator credential scopes without values; configure/verify singleton protected environments and authority actor; classify hardware/model/host capabilities; append operation authorizations through protected ledger workflow.
**Output**: Product Change, authority/credential/environment/hardware/model evidence, static DAG authorizations, and exact freeze record.
**Acceptance**: All required/no-op/deferred dispositions valid; no unsafe credential scope; no human-only blocker hidden; authorization appends bind provider actor/workflow evidence.

### ⬜ Unit 22: Previous-Source Staged Compatibility
**What**: Dispatch authorized web staging at 0%/version override as supported by the current deploy orchestrator; validate previous-source debug/simulator Photo Studio and queued mutation creation against the staged Worker; capture receipts and clean staged run-owned state.
**Output**: Staged Worker identity, previous-source compatibility proof, queue seed manifest, and cleanup receipt.
**Acceptance**: Exact previous source/pack passes; stale/mismatch negative case fails; no installed TestFlight proof is falsely claimed; production traffic unchanged.

### ⬜ Unit 23: Authorized Production Web Release
**What**: Dispatch the exact web preflight, append/approve the Execution Claim, execute the authorized production DAG, record per-node receipts/containment, query Worker/D1/R2/GitHub authorities with the independent attestor, and verify runtime pack digest plus migrations/capability state.
**Output**: Exact Worker/version/source/digest, provider receipts/attestations, and terminal claim record.
**Acceptance**: Singleton environment transition verified; all authorized nodes terminal; unauthorized legacy dispatch test fails; production health/OpenAPI/MCP/browser canaries green.

### ⬜ Unit 24: Previous Installed Queue Replay
**What**: Using the exact previous installed TestFlight build, create the run-bound offline mutation before upgrade/relaunch as required, replay against additive production, verify idempotent backend/user-visible result and transitional provenance, then clean only run-owned state.
**Output**: Previous-installed identity, queue-before/after, backend oracle, UI result, transitional attestation, and cleanup receipt.
**Acceptance**: Installed proof is from the frozen ASC build; replay occurs once; no duplicate cover/spoon/media; private evidence remains private; zero deletable run-owned residue.

### ⬜ Unit 25: Production Browser, MCP, and Agent Proof
**What**: Run shared Photo Studio upload/generate/editorialize/Spoon scenarios in a browser and deterministic MCP client, then five no-retry agent trials using frozen host/model/tool digest and 100,000-token aggregate ceiling; use one backend oracle and exact cleanup.
**Output**: Actor-specific sanitized evidence, deterministic results, agent trial matrix, backend oracle, cleanup receipts, and leak-scan proof.
**Acceptance**: Browser/MCP required proofs pass; agent passes at least four of five deterministic oracles; advisory taste cannot override failure; no public user/device/media data.

### ⬜ Unit 26: Authorized Native Archive and TestFlight
**What**: Dispatch exact native preflight, append/approve Execution Claim, build/archive/export from exact source/pack, bind signed-in-binary provenance to app/archive/IPA, execute authorized ASC DAG, independently re-query ASC, and append terminal receipts. Do not notify unless the operation graph explicitly authorizes it.
**Output**: Exact build/version/app/build/group identities, hashes/provenance, ASC receipts/attestation, and terminal claim.
**Acceptance**: One claimed environment job transitions; build is valid/attached as authorized; metadata/group/notification branches match predicates; no raw provider output leaks.

### ⬜ Unit 27: Installed Native Actor Proof and Visual Dogfood
**What**: Install/launch exact candidate on available iPhone TestFlight, iPad candidate artifact, and signed macOS candidate; run Photo Studio and offline/retry scenarios; verify in-app/bundle provenance, backend effects, private evidence, accessibility, performance, and visual quality; classify unavailable physical hardware as `BLOCKED_HUMAN` without substitution.
**Output**: Per-platform installed proofs, sanitized screenshot/verdict digests, performance/accessibility results, backend oracle, and cleanup.
**Acceptance**: Required platform proofs pass or terminal state is non-shipped; no simulator/source-token proof is mislabeled installed; visual absurdity ledger is closed.

### ⬜ Unit 28: Negative Proof, Rollback, and Exact Cleanup
**What**: Inject stale/mismatched digest/claim fixtures and prove finalization fails; exercise or safely contain named Worker/capability/migration/native-candidate/Release Set rollback paths under authorization; exact-manifest clean D1/R2/OAuth/media/artifacts/branches/worktrees; classify preserved provider records; re-query all authorities.
**Output**: Negative-finalization evidence, rollback/containment receipts, cleanup plan/apply/verify receipts, preserved-record inventory, and zero-residue proof.
**Acceptance**: Negative case cannot ship; every authorized rollback terminal; zero deletable run-owned residue; dirty/Clem/separately owned work remains untouched.

### ⬜ Unit 29: Finalization and Shipment Projection
**What**: Append `FinalizationClaim`, run fresh GitHub/Cloudflare/D1/ASC/source/runtime/cleanup queries, compile and leak-scan the complete Release Set, expected-parent append `ReleaseSetPublished` as direct child, then project its ledger commit to protected main/tag/GitHub Release with separate authorized retryable operations.
**Output**: Authoritative ledger commit, complete Release Set, GitHub artifact attestations, main/tag/release projections, and final provider re-query.
**Acceptance**: Ledger head remains the finalization claim until direct-child publication; any drift aborts; only ledger append confers `shipped`; projections verify their ledger pointer.

### ⬜ Unit 30: Final Hostile Audit, Durable Closeout, and Cleanup
**What**: Run fresh architecture/security/privacy/compatibility/test/release/visual reviewers against merged and live state; repair any finding through the appropriate TDD/release cycle; update Desk task/lessons and product docs; verify exact SHAs/settings/runs/providers/feedback health; remove only terminal clean task worktrees/merged branches; notify Slugger.
**Output**: Converged review bundle, final evidence index, Desk completion commit, exact repository/worktree inventory, and Slugger completion receipt.
**Acceptance**: No BLOCKER/MAJOR findings or residual agent-owned work; all relevant repos clean/synced; no in-flight workflow/deploy/TestFlight operation; protected records point to authoritative ledger shipment.

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
