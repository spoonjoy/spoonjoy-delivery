# Doing: Spoonjoy Cross-Client Delivery

**Status**: drafting
**Execution Mode**: direct
**Created**: 2026-07-20 21:27
**Planning**: ./2026-07-20-1958-planning-cross-client-delivery.md
**Artifacts**: ./2026-07-20-1958-doing-cross-client-delivery/

## Execution Mode

- **direct**: Execute units sequentially in the coordinating task. Fresh sub-agents perform the mandatory hostile reviews; source-repository work begins only after the retained TestFlight task's protected handoff validates.
- **public evidence**: Every repository artifact/output uses repository, stable worktree ID, role, branch, base SHA, and local-path SHA-256 only. Absolute/home/private path mappings exist solely in private Desk cleanup state and are never committed, uploaded, logged, summarized, or embedded through another object.

## Objective

Build and pilot a production-grade delivery system that carries one Spoonjoy product contract through web/backend, native Apple, and MCP/agent implementations to independently verified exact releases and terminal cleanup. Only a protected `ReleaseSetPublished` append with its mandatory exact post-result `PublicationObserved` proof may declare the Product Change shipped.

## Upstream Work Items

- Codex task `019f2e25-2fc3-75b2-8ba3-335f3777115a`: its protected source-owner handoff and receiver acknowledgment are Unit 13's prerequisite; it retains the active TestFlight/source lane until validation succeeds.

## Completion Criteria

- [ ] `spoonjoy-delivery` has protected `main` and `release-ledger`, enforced checks/admin rules, no force-push/deletion, automatic merged-branch deletion, default read-only workflow tokens that cannot approve pull requests, selected SHA-pinned Actions, deterministic installs, strict TypeScript, zero-warning gates, and 100% statements/branches/functions/lines.
- [ ] Structural schemas and semantic validators reject unknown fields, malformed or duplicate identities, missing edges, cycles, illegal transitions, stale evidence, invalid dispositions, unauthorized actors, non-monotonic generations, competing claims, and ambiguous ownership.
- [ ] Product Contracts capture invariants, state transitions, authorization, ownership, errors, idempotency, ordering, offline behavior, compatibility, degradation, migration, rollback, and scenario expectations.
- [ ] RFC 8785 `semanticContractDigest`, `packDigest`, and `provenanceDigest` boundaries pass duplicate-key, ordering, number, Unicode, changed-projection, unrelated-source, and Swift/TypeScript golden-vector tests.
- [ ] Web emits the exact Photo Studio Contract Pack and exposes its runtime digest; native locks it, validates codecs/scenarios, embeds code-signed provenance, and externally binds app/archive/IPA/ASC identities.
- [ ] A one-time audited `ledger-root-bootstrap-v1` ceremony installs and then permanently disables its own setup path after the dedicated least-privilege ledger GitHub App appends `RootAuthorityInstalled`. The App is the sole `release-ledger` bypass actor; its private key and short-lived installation tokens remain outside Actions in an OIDC-gated Cloudflare append broker that validates the exact job plus canonical event/expected parent, performs only that CAS update, and returns a receipt. Ordinary `GITHUB_TOKEN`, other workflows/Apps, direct, and self-declared appends fail.
- [ ] Static typed operation DAGs authorize all real web/native/governance/provider alternatives; runtime receipts bind authoritative pre-state, hash-linked resolved inputs, selected branch, sanitized result, retries, and containment.
- [ ] Production deploy, migrations/capabilities/rollback/canary/reporting, TestFlight upload/metadata/group/notification/expiry, cleanup, artifact/attestation, finalization, projection, and tag paths reject missing, stale, revoked, wrong-SHA/generation/graph/claim authorization.
- [ ] Source-owned attestors use exact reviewed delivery SHA and least-privilege credentials, query providers independently, keep raw output private, emit sanitized GitHub artifact attestations, and are dispatched/verified through authenticated `gh` without provider secrets in delivery.
- [ ] Every evidence class passes public/private/forbidden classification and adversarial leak scanning before logs, summaries, annotations, caches, artifacts, commits, or releases.
- [ ] Rebaseline validates exact web/native main SHAs, release-task commit, protected handoff/acknowledgment, zero in-flight source mutations, and cleanup ownership before source edits.
- [ ] Current and previous client identities freeze; previous-source debug/simulator passes against staged Worker; a queue created by exact previous installed TestFlight replays idempotently after additive production deploy; pre-provenance binary attestation is explicit.
- [ ] Shared Photo Studio scenarios independently prove browser, iPhone TestFlight, iPad candidate, signed macOS candidate, deterministic MCP, and bounded agent experience where required, using a common backend oracle and run-owned data.
- [ ] Exact-manifest cleanup removes deletable run-owned D1/R2/OAuth/media/fixture/artifact/branch/worktree residue; crash-consistent supervisor-signed local tombstones and nonce-bound source-runner cleanup attestations prove final private residue zero; non-deletable provider records and preserved ownership are explicit.
- [ ] Named Worker/capability/migration/native-candidate/Release Set rollback and containment commands produce verified receipts.
- [ ] Negative proof injects stale/mismatched evidence and fails before a successful finalization.
- [ ] `ReleaseSetPublished` is the direct child of `FinalizationClaim`, consumes independently verified cleanup plus a bounded pre-CAS point-in-time provider snapshot, contains the complete Release Set, and is the sole shipment event. It becomes effective only with exact post-result `PublicationObserved` proof; no claim is made about provider age at the unknowable atomic Git ref-update instant.
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
**What**: Record the delivery branch/stable worktree ID/role/local-path digest, current delivery commit, web/native remote-main locator SHAs, active TestFlight task ownership, Node/pnpm/Swift/Xcode/GitHub CLI versions, GitHub actor/org IDs, repository visibility/settings, and the no-touch boundary for the active source lane. Keep the digest-to-absolute-path map only in private Desk state. Verify installed planner/doer skills against repo-local sources when present.
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
**What**: Add red fixture tests for every planning object, `ReceiverAcknowledged`, bootstrap/bootstrap-resume/recovery authorization/claim/receipt unions with deliberately null workflow fields, `BootstrapRolledBack`, `SupervisorEnvelopeKeyProvisioned|Retired` events and provision/rotate/retire receipts, the installed-gate governance union with required run fields, rollback-proof selectors, proof-dependency manifests/replay decisions/no-replay receipts, strict JSON/YAML parsing, duplicate keys, unknown fields, invalid versions/IDs/SHAs/digests/timestamps, empty collections, malformed unions, and schema fixture drift.
**Output**: `schemas/*.schema.json`, `test/schema.test.ts`, `test/fixtures/schema/{valid,invalid}/`, and red logs.
**Acceptance**: Tests fail on missing parser/schema implementation and demonstrate each rejection path.

### ⬜ Unit 2b: Structural Schemas and Parsing - Implementation
**What**: Implement `src/parse.ts`, `src/schema.ts`, and versioned JSON Schemas for authority policy, Product Change/Contract/Pack, `ReceiverAcknowledged`, authorization, claims/terminals/cancellation, closed bootstrap/bootstrap-resume/recovery exception unions and terminals, supervisor-envelope provision/rotate/retire events/receipts, the installed-gate governance union, operation graph/receipt, rollback-proof selector, proof-dependency manifest/replay decision/no-replay receipt, evidence/attestation, handoff/rebaseline, cleanup, finalization, Release Set, and projections. Workflow run/attempt may be null only for exact interactive exception kinds; key lifecycle, installed-gate, and all other workflow-backed claims/receipts require them.
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
**What**: Add red semantic tests for authority roles, GitHub actor/run provenance, dedicated ledger GitHub App/installation identity, transitions/generations/CAS, supervisor-envelope key provision/rotation/retirement with distinct repository identities and active-run retention, durable recovery registration/expiry, resolver gating across reservation/claim/pending publication, coordinator/recovery races, direct-child finalization plus mandatory observation effectiveness proof, unauthorized App or ordinary `GITHUB_TOKEN` appends, receiver/bootstrap/drift recovery, and every ordering.
**Output**: `test/ledger.test.ts`, ledger history fixtures, and red logs.
**Acceptance**: Tests exercise both winners of each CAS race and reject all illegal histories.

### ⬜ Unit 4b: Ledger State Machine and Authority - Implementation
**What**: Implement authority/ledger/transitions and immutable policy binding the sole ledger-writer GitHub App ID, installation ID, repository ID, `ledger-writer` environment, allowed exact workflow identities, and fixed web/native supervisor-envelope lifecycle graphs. Add repository-distinct `SupervisorEnvelopeKeyProvisioned|Retired` transitions with monotonic generation, one active encryption key, decrypt-only retention for bound live runs, and containment on unknown provider inventory. Add receiver/recovery registration/expiry records and a `PublicationObserved` schema that is explicitly not a ledger event: it is a protected GitHub artifact attestation plus required check bound to exact publication commit/ref-query run/Date. Any matching recovery may emit only this observation or ledger abort/expiry; validator forbids recovery publication. `ReleaseSetPublished` remains pending until observation validates.
**Output**: Deterministic ledger transition engine.
**Acceptance**: Only protected actors/legal transitions validate; recovery registration cannot publish or strand future work; every active reservation/claim is resolver-gated; bootstrap/recovery remain narrow; and shipment is possible only through a direct-child `ReleaseSetPublished` whose `PublicationObserved` proof matches exact head/commit/run.

### ⬜ Unit 4c: Ledger State Machine and Authority - Coverage
**What**: Complete transition-table, clock/expiry, race, cancellation, and malformed-history coverage.
**Output**: State-machine matrix and coverage logs.
**Acceptance**: 100% coverage, mutation testing spot checks reject removed guards, zero warnings.

### ⬜ Unit 5a: Typed Operation DAGs - Tests
**What**: Add source-agnostic red tests for static templates, typed dataflow, authoritative-query/prior-receipt inputs, branch cardinality, digests, drift, idempotency, retry, compensation, partial failure, typed rollback selection, two repository-distinct supervisor-envelope provision/rotate/retire graphs, and two reserved interactive roots: one-time `ledger-root-bootstrap-v1` with same-identity/prestate/target-only resume or exact rollback and permanent post-install disablement; plus target-environment bootstrap/resume/govern/recover. Use fictional provider fixtures; exact source inventories wait for Unit 13.
**Output**: `test/operation-graph.test.ts`, generic operation fixtures, and red logs.
**Acceptance**: Unknown methods/paths/nodes, unresolved/multiple/out-of-graph values, stale pre-state, and ambiguous POST/PATCH/skip branches fail.

### ⬜ Unit 5b: Typed Operation DAGs - Implementation
**What**: Implement `src/operation-graph.ts`, `src/receipts.ts`, deterministic rollback-target selection/setup planning, fixed source-agnostic governance and repository-distinct supervisor-envelope provision/rotate/retire graphs, canonical expression resolution, dry-run/revalidation/receipt/containment, and `ledger-root-bootstrap-v1`. Key graphs bind Cloudflare secret prestate, public key/event generation, exact OIDC repository/workflow allowlist, active-run retention, bootstrap credential, challenge, local-zero, delete/contain alternatives, and terminal. The root graph binds authenticated operator, exact repository/broker/App/ruleset/environment prestate and code digests; permits only install, exact-target resume, or exact-prestate rollback; emits one App-authenticated `RootAuthorityInstalled`; verifies the setup credential/path is removed; and thereafter rejects every root-bootstrap invocation. Candidate selection retains the documented total-order and fail-closed rules.
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
**What**: Add red mocked-HTTP tests for exact workflow dispatch, run/attempt/workflow SHA/actor verification, dedicated App/installation token provenance and least privilege, waiting-job/environment inventory, singleton enforcement, approval request/response, authenticated viewer and named-environment queries, sanitized UI-evidence ingestion for bootstrap/resume/governance/recovery graphs, resume identity/prestate/target mismatch rejection, before/after transition checks, artifact identity/download/digest/expiry, GitHub attestation claims, reruns/forks/mutable refs/rate limits/pagination/retries, and redacted errors.
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
**What**: Add red workflow/semantic tests for sole-App append/authority/recovery/resolver/finalization plus executable Linux/macOS supervisor isolation: distinct child UID/session, peer-credential-gated signer service, no inherited signer FD/socket/mount, ptrace/task-port/privilege denial, read-only host mounts, cgroup/UID-wide exhaustion, cancellation recovery, and fail-closed unsupported host. Cover an ordinary write-enabled `GITHUB_TOKEN` ledger rejection, alternate-App rejection, staged tombstone through lock-gated post-fsync `PROMOTED`, a separately isolated pre-bound promotion witness that reads final state under shared lock and signs exact tombstone/package digests, pre-CAS/observation races, pending publication, and projections.
**Output**: `test/finalization.test.ts`, `test/workflow-contract.test.ts`, workflow fixtures, and red logs.
**Acceptance**: Direct pushes, wrong parent/actor/workflow, interleaved finalization, stale provider evidence, and projection-only shipment fail.

### ⬜ Unit 8b: Protected Ledger Append and Finalization - Implementation
**What**: Implement finalization/cleanup/projection libraries, supervisor/recovery CLI, ledger/coordinator/abort-recovery/evidence/projection workflows, and attestations. Coordinator registers recovery then claims. Resolver gates merges/transitions. Matching recovery can expire/abort or emit the non-ledger protected `PublicationObserved` attestation/check after exact no-cache ref observation, but cannot append publication. Projections reject pending events. Cleanup uses staged signed receipts, independent source teardown, and `PromotionObservedV1` from an isolated witness whose claim-bound key is inaccessible to the cleanup supervisor/coordinator.
**Output**: Exact-SHA protected workflow append path and complete Release Set compiler.
**Acceptance**: Local fixture history ships only via `ReleaseSetPublished`; projection retries do not alter ledger truth.

### ⬜ Unit 8c: Protected Ledger Append and Finalization - Coverage
**What**: Cover every finalization race plus hostile child signer invocation, `/proc`/task-port access, inherited descriptors, advisory-lock bypass, forked/detached descendants, out-of-root writes, signals/cancellation, UID/peer-credential mismatch, Linux cgroup and macOS UID-wide exhaustion, unsupported isolation, and crashes/verifier races before/after pending fsync, key destruction, rename, directory fsync, `PROMOTED`, witness shared-lock acquisition/direct root read/signature/key destruction, observation, and projection. Reject coordinator-authored, pre-PROMOTED, stale-package, alternate-key, inaccessible-root, and unsigned witness evidence.
**Output**: Finalization matrix and coverage logs.
**Acceptance**: 100% coverage, zero warnings, workflow contracts green.

### ⬜ Unit 9a: Rebaseline, Handoff, and Cleanup - Tests
**What**: Add red tests for outbound-owner-release ingestion, strict public receiver-ack projection with stable worktree IDs/repository roles/path digests and no absolute/private paths, protected `ReceiverAcknowledged` ledger binding, byte-identical protected-field equivalence, remote commit reachability, exact main/task SHAs, in-flight run detection, private cleanup ownership/path mapping, worktree status, exact-manifest D1/R2/OAuth/media fingerprints, reference checks, dry-run/apply parity, non-deletable provider dispositions, and deletion refusal.
**Output**: `test/rebaseline.test.ts`, `test/cleanup.test.ts`, fixtures, and red logs.
**Acceptance**: Missing/mismatched handoff, dirty/ambiguous ownership, broad deletes, drifted fingerprints, and unclassified retained records fail.

### ⬜ Unit 9b: Rebaseline, Handoff, and Cleanup - Implementation
**What**: Implement `src/rebaseline.ts`, `src/handoff.ts`, `src/cleanup.ts`, `handoff acknowledge|verify`, `rebaseline verify`, and `cleanup plan|verify|apply`. `handoff acknowledge` generates a strict public receiver-ack projection from exact outbound artifact/commit and protected ledger event, rejects absolute/home/private paths recursively, and carries only stable worktree IDs/roles/path SHA-256 digests; `handoff verify` re-queries both remotes and equivalence. A separate private cleanup map resolves those digests locally and never enters artifacts/commits. Cleanup apply adapters remain disabled unless an exact claimed operation invokes them.
**Output**: Source-ownership gate and exact-manifest cleanup engine.
**Acceptance**: Fixture dry-run/apply/verify receipts match; no broad production cleanup exists.

### ⬜ Unit 9c: Rebaseline, Handoff, and Cleanup - Coverage
**What**: Cover repository/provider drift, partial deletion/containment, retry, preserved records, and worktree refusal.
**Output**: Coverage and cleanup safety logs.
**Acceptance**: 100% coverage, zero warnings.

### ⬜ Unit 10a: Delivery CLI, Samples, and Documentation - Tests
**What**: Add red end-to-end CLI tests for init/validate/digest/authorize/dispatch/claim/receipt/evidence/rebaseline/cleanup/finalize/project, `replay evaluate`, `environment bootstrap|resume|govern|recover`, and `supervisor-key provision|rotate|retire|verify` commands, stable exit codes/JSON, sample Product Change/Contract/Release Set validation, and docs command/path drift.
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
**What**: Add red tests for CI, pinned Actions, attestations, `ProtectedMainV1`/`ProtectedLedgerV1`, exact root-intent signature/digest domains, signed genesis/object/ref transport and later fast-forward-only journal appends, root App/bootstrap-credential key custody, supervisor-envelope provision/rotation/one-use OIDC unwrap, resume/rollback/kill switch, sole App bypass, and broker identity/actor/transition enforcement. Model `token_mint_started/token_issued/token_revoke_started`, conservative expiry containment, bounded-byte mailbox, prepare/commit/status-observe, and every crash. Live negatives include wrong positive check App IDs, extra ledger bypass principals, legal OIDC with illegal event, unauthorized rerun/unwrap/replay, wrong repository/workflow/job/key generation/capsule, caller-created Git objects, substituted/oversized package bytes, orphan/duplicate genesis objects, ref-create conflict, lost App-key response, duplicate App/envelope keys, secret-write uncertainty, local key residue, and unreconciled bootstrap-token revocation.
**Output**: CI/settings contract tests and red logs.
**Acceptance**: Tests fail against the repository's current permissive Actions/settings state.

### ⬜ Unit 11b: Delivery CI and Settings Contracts - Implementation
**What**: Add SHA-pinned CI/resolver. Define `ProtectedMainV1` with repository-specific `{context, expected App ID}` checks, and `ProtectedLedgerV1` with exactly the policy-pinned ledger App bypass and no ordinary writer path; both normalize/stability-check all layers. Implement serialized broker identity/actor/transition validation plus distinct web/native envelope-key generations and a one-use unwrap endpoint. Unwrap validates immutable GitHub OIDC repository/owner/actor/environment/workflow/ref/SHA/run/attempt/check-run/job/audience/JTI, exact active claim/capsule digest/key event, consumes a Durable Object nonce before decrypt, returns signer bytes only once, and rejects replay/retired/contained generations; App and envelope private keys never leave broker storage. Model append state independently as `prepared -> committing -> cas_succeeded|cas_uncertain -> observed|abort_authorized -> terminal`, and model each credential lease as `none -> token_mint_started -> token_issued -> token_revoke_started -> token_revoked|token_contained`. Before every write-token POST, persist the attempt/authorized transition, no-cache GitHub Date, 15000ms mint deadline, and conservative `containUntil = Date + 3675000ms` (provider one-hour lifetime plus request deadline and 60s skew); a lost response globally blocks all writes through that time. On response persist provider `expires_at` plus HMAC fingerprint before Git work. Each one-repository `contents:write`/`actions:read` token is memory-only and is revoked in `finally` regardless of append state; require `204`, else retry revocation while live or globally contain until expiry. `H` observation never possesses that write token: use unauthenticated no-cache GET while the delivery repository is public, otherwise a separately journaled read-only token with the same revoke/contain lifecycle. Exact unchanged-head evidence may authorize an abort CAS only as a new journaled mutation attempt with a newly minted write token. Preserve `cas_uncertain` across token teardown and broker restarts.
**Output**: Reviewable CI and governance code.
**Acceptance**: Focused contracts pass against fixtures; no live repository setting changes yet.

### ⬜ Unit 11c: Delivery CI and Settings Contracts - Coverage
**What**: Cover resolver/transition bypass, actors/reruns/jobs/approval/OIDC, envelope-key generation/rotation/retirement, nonce-before-decrypt, wrong/replayed JTI/capsule/claim/repository/workflow/job/generation and response-loss handling, token scope and crashes before/after mint dispatch/response persistence/Git work/revoke dispatch/response, conservative global containment and expiry release, mailbox missing/substituted/oversized/caller-blob cases, CAS/ref-observation races, signed journal genesis/object-upload/create-if-absent/fast-forward conflicts and orphan reconciliation, App/bootstrap/envelope key creation/import/challenge/inventory/duplicate revocation/local purge, ruleset mode/wrong-positive-source/extra-bypass/digest drift, APIs, permissions, and broker drift.
**Output**: Coverage and warning logs.
**Acceptance**: 100% coverage, all delivery gates green, zero warnings.

### ⬜ Unit 11d: Root Bootstrap Intent and Dry Run
**What**: Read-only capture prestate and compile acyclic unsigned `RootBootstrapIntentV1` as RFC 8785 canonical JSON. Inline `rootCodeManifest` is an array sorted by raw UTF-8 bytes of `path`; every entry is exactly `{path,type:"file",mode,size,sha256}`. Paths are repository-root-relative NFC UTF-8 with `/`, no leading slash, empty/`.`/`..` segment, backslash, NUL, duplicate, or normalization alias; `mode` is Git index `100644` or `100755`; `size` and SHA-256 cover exact file bytes. Reject symlinks, submodules, directories as entries, and all special files. Include only regular files below `src/`, `schemas/`, `policy/`, `scripts/`, `.github/workflows/`, plus exact package/lock/TypeScript/Wrangler config allowlists. Exclude `.git`, `worker/`, build/coverage/temp; reserve and reject the basenames `root-bootstrap-intent.json`, `root-bootstrap-intent.sig`, `root-bootstrap-envelope.json`, and prefix `root-bootstrap-journal` anywhere in an included tree, so detached intent/signature/envelope/journal bytes can never enter their own commitment. `rootCodeDigest` is SHA-256 of the manifest array's RFC 8785 bytes. `policyManifest` and `schemaManifest` are exact order-preserving filters for `path` prefixes `policy/` and `schemas/`; bind each RFC 8785 projection and SHA-256 digest separately. Sign exact bytes `UTF8("spoonjoy-root-bootstrap-intent-v1") || 0x00 || RFC8785(unsigned intent)` with `SecKeyAlgorithm.ecdsaSignatureMessageX962SHA256`; detached signature is ASN.1 DER ECDSA. Export the uncompressed 65-byte ANSI X9.63 P-256 point, encode it as RFC 5480 SubjectPublicKeyInfo DER using `id-ecPublicKey`/`prime256v1`, and pin SHA-256 of those SPKI bytes in `policy/root-bootstrap-key.json`. Golden vectors fix manifest/projection/intent/domain/SPKI/signature digests and positive/negative verification. Bind prestate/targets, `ProtectedMainV1`/`ProtectedLedgerV1`, exact root event, App manifest/key target, one-use least-privilege Cloudflare bootstrap credential scope/expiry/revocation target, rollback, and states including `REMOTE_JOURNAL_CREATED`. Root-sign a bounded journal-genesis transaction containing the exact canonical entry bytes, Git blob/tree/zero-parent commit bytes and expected OIDs, author/committer/timestamps, ref, and absent-ref precondition. Only those object uploads plus one `POST /git/refs` create-if-absent are genesis-self-journal-exempt; each is locally fsynced, and restart re-queries exact objects/ref, accepts only byte/OID equality, records harmless unreachable objects, and fails/rolls back on any different existing ref. Later journal append transactions are root-signed, bind exact observed parent and child object bytes/OIDs, upload only those objects, then `PATCH` the ref with `force:false`; because the child has the exact observed parent, any intervening head makes the update non-fast-forward and fail. Journal transaction object/ref calls alone are self-journal-exempt and are reconciled by no-cache exact-head/content queries. Every external nonjournal call requires local append/fsync, successful remote intent append, call, remote receipt append, and requery append. Test every boundary.
**Output**: Canonical unsigned acyclic intent; inline manifest and policy/schema projections; exact canonical-byte/digest/key/SPKI/signature golden vectors; detached signature proof; exact prestates/targets/genesis/events; journal ref/genesis/commit schemas; full crash/reconcile table; and zero-mutation proof.
**Acceptance**: Independent implementations reproduce every byte and digest, reject excluded/self-referential/aliased/nonregular inputs, and verify the exact P-256/SHA-256 signature domain. Intent content is committed/reviewable and contains no self-reference; every step has exact pre/post/query/reconcile semantics; no live setting, ref, App, broker, environment, or provider mutation occurs.

### ⬜ Unit 12a: Delivery Hostile Review and TDD Repair
**What**: Run fresh architecture, security, privacy, test, and release reviewers over the delivery diff and repair every BLOCKER/MAJOR through new red tests and green implementation. Any code/policy/prestate-affecting repair regenerates and re-signs the acyclic root intent before the final verdict.
**Output**: Review verdicts and atomic repair commits.
**Acceptance**: All reviewers converge; full local gates remain green at 100% coverage with zero warnings.

### ⬜ Unit 12b: Delivery Pull Request and Exact-Head CI
**What**: Open the delivery PR, complete self-review, run exact-head CI, and repair PR-only failures. After final head/review is frozen, create a protected GitHub artifact attestation `RootBootstrapEnvelopeV1` binding exact head, unsigned intent digest, `rootCodeManifest`/root-code/policy-projection/schema-projection digests, pinned SPKI fingerprint, detached-signature digest and verification result, expected current-main SHA, CI/reviewer verdicts, actor, issuance/expiry, and no-mutation proof. Re-query head/main and verify the envelope; any drift invalidates it and requires a new exact-head cycle.
**Output**: PR, exact head/main, CI/review IDs, intent digest, external envelope/attestation IDs/digest, and no-mutation proof.
**Acceptance**: Checks/reviews green on exact head; external envelope makes the acyclic binding durable before mutation; head/main/prestate remain exact; no unresolved/in-flight run or live root change.

### ⬜ Unit 12c: Delivery Merge and Exact-Main Proof
**What**: Only after Unit 12a/12b convergence, verify and consume the exact acyclic intent plus `RootBootstrapEnvelopeV1`. Execute and reconcile the exact signed genesis transaction, then use signed fast-forward-only journal appends around every nonjournal call. CAS-install the envelope-bound head on expected unprotected main. Through the journal, create a one-use least-privilege Cloudflare bootstrap credential with fixed service/account scopes and expiry, create/install exactly one ledger App key, and stream its creation response directly through an anonymous pipe into the disabled broker secret binding without command arguments, logs, artifacts, or persistent plaintext. Query App key inventory and fingerprint, deploy broker disabled, perform a signed challenge proving the secret maps to exact App/installation/repository, revoke duplicates, fsync-verify the private `0700` transient root empty, and revoke the bootstrap credential; lost key/secret/revocation responses block or roll back until authoritative inventory/challenge/expiry resolves. Apply `ProtectedMainV1` plus ledger rules/environment and have the verified broker create exact zero-parent ledger genesis. Interruption reconciles intent/envelope/journal/provider state and allows only same-target resume or exact rollback while pre-root. Stop at `GENESIS_CREATED`; unrelated work stays blocked.
**Output**: Full local/remote journal chain; signed genesis/object/ref reconciliation; exact-main/CI; App/install/key fingerprint/inventory; scoped Cloudflare bootstrap credential creation/revocation or containment; broker secret/challenge/local-zero proof; rules/environment/ledger-genesis identities; per-call pre/post/reconcile evidence; or exact rollback proof.
**Acceptance**: Live application occurs only after reviewed exact head; main now satisfies stable `ProtectedMainV1`; journal and ledger genesis refs/bytes/commits match intent. Exactly one challenged App key exists only in the broker; no plaintext/local/bootstrap credential remains or is uncertain. Broker remains root-only; no `RootAuthorityInstalled` yet; every injected crash converges without hidden choice.

### ⬜ Unit 12d: Protected Ledger Append Live Proof
**What**: Continue the journaled ceremony from exact `GENESIS_CREATED`. Broker appends exact `RootAuthorityInstalled` as genesis child and durably records/revokes its token. That event is the permanent kill switch: every bootstrap binary/version first observes ledger and refuses install/resume/rollback mutation after it, even if broker cleanup/redeploy was interrupted; only bounded post-root credential/path deletion and verification may continue. Prove token revocation `204` or block all operations until the real one-hour expiry plus containment. Remove setup paths, prove reentry fails, then execute/contain one disposable non-shipping append while direct, `GITHUB_TOKEN`, other App, wrong workflow/environment/actor/rerunner, illegal event, and exfiltration attempts fail. Rotate clean worktree to `worker/cross-client-delivery-records-r0` only after `VERIFIED`.
**Output**: Root/fixture/containment commits and broker operation journals; bootstrap kill/cleanup/reentry and token revocation-or-expiry proof; negative principals/transitions; stable rules; records branch/base.
**Acceptance**: Root event permanently disables setup mutation, including crash-after-root recovery; only broker-validated legal App CAS appends work; token never leaves broker and revocation/containment is terminal; main/ledger satisfy policy; no product/provider mutation.

### ⬜ Unit 13a0: Cross-Task Handoff Contract Interoperability
**What**: Without touching source/provider state, treat repairs `2ad767db1a3237b12dcda45e0f398119e8d3e8f8`, `f324901fc246bf9743503ab5aa46f59f87ff230a`, and `7411307777e9828cea5dc1b33d62434ab4ea2fdd` as nonterminal; the last fixes App substitution but still publishes absolute worktree paths through protected outbound bytes. Require a later explicitly reviewed, remote-reachable upstream successor. `ProtectedMainV1` consumes repository-specific allowlists of exact `{context, expected App ID}`, normalizes every classic/ruleset layer, requires active PR/strict checks/no force-delete/no broad bypass, and verifies stable digests; wrong positive App IDs/spoof checks fail. `ProtectedLedgerV1` derives the dedicated ledger App ID only from exact-byte protected delivery authority policy and `RootAuthorityInstalled` artifacts whose ref/commit/path/SHA-256 and mutual policy/App binding are re-queried, treats source/acknowledgment/event App IDs as redundant equal echoes, requires active mutability blocking and exactly that anchored App bypass, and permits no user/team/role/admin/other-App/direct writer path. Public outbound/ack bytes use only stable worktree IDs/roles/path digests and recursively reject local/private paths. Negative tests substitute acknowledgment/event/bypass together and inject absolute paths. Verify canonical handoff schemas/checker, acyclic ledger binding, both mains, ledger, and exact ack bytes.
**Output**: Exact upstream successor/PR/reachability, paths/tests/schema/verifier digests, repository-specific check-source allowlists, normalized stable `ProtectedMainV1` and `ProtectedLedgerV1` reports/digests, and coordination receipt.
**Acceptance**: Remote committed successor is independently green before Unit 13a1; both mains satisfy exact expected-source policy and ledger only the exact App bypass; wrong/missing/extra-positive source or bypass, permissive/drifting rules, branch-only evidence, and self-reference fail; upstream still owns source; no source/provider mutation by this task.

### ⬜ Unit 13a1: Upstream Source Owner Handoff Ingestion
**What**: Wait in-turn for task `019f2e25-2fc3-75b2-8ba3-335f3777115a` and ingest its terminal protected outbound handoff naming this cross-client task without touching source repositories.
**Output**: Upstream `outbound-owner-release.json` commit/path/SHA-256, release-task commit, exact web/native/provider state, zero-in-flight fields, and cleanup owner.
**Acceptance**: Artifact validates against the exact Unit 13a0 schema/verifier and names this task, but ownership remains upstream until Units 13a2-13a3 validate; no source mutation is performed.

### ⬜ Unit 13a2: Cross-Client Receiver Acknowledgment
**What**: Validate Unit 13a1, use exact merged `.github/workflows/ledger-append.yml` and the dedicated ledger App to append non-shipping `ReceiverAcknowledged` to protected `release-ledger`, independently verify it, then run `handoff acknowledge` to write `records/handoffs/<outbound-sha256>/receiver-ack.json` on `worker/cross-client-delivery-records-r0`. Commit/push and open a protected PR to delivery `main`; do not treat branch reachability as acknowledgment.
**Output**: Protected append run/parent/ledger commit/payload and App proof; receiver-ack path/SHA-256, staging commit, PR, exact head checks, and coordination receipt.
**Acceptance**: Ledger event binds outbound digest/receiver IDs; ack content binds outbound commit/path/digest plus ledger commit/payload and protected fields; same retry is idempotent and mismatch/self-reference fails; upstream schema passes; PR exact head is green; source/provider untouched.

### ⬜ Unit 13a2a: Receiver Acknowledgment Protected Merge
**What**: Fresh-review and merge Unit 13a2 through delivery `main`, verify exact-main CI, expected check App sources, and stable `ProtectedMainV1` digest before/after ref/content verification; then re-query exact acknowledgment bytes. Send protected-main/ledger locators to the release owner.
**Output**: Review verdict, PR/merge/main SHA, exact-main runs/check App IDs, normalized rule reports/digests, remote ack bytes/digest, and coordination receipt.
**Acceptance**: Delivery main satisfies stable `ProtectedMainV1` and contains exact ack; any-source/drifting/branch-only evidence fails; zero in-flight merge/deploy; no source/provider mutation.

### ⬜ Unit 13a3: Upstream Two-Sided Handoff Verification
**What**: Wait for the release owner to ingest Unit 13a2a, merge byte-identical `receiver-ack.json` through native main, and run the `ProtectedMainV1` verifier against both containing commits plus ledger. Independently rerun delivery verification, including expected check App sources and stable normalized rule digests before/after every ref/content query.
**Output**: Upstream ack PR/merge/main SHA/path/digest, exact-main CI, verifier output/digest, delivery verification, live ruleset/ref/content queries, and explicit ownership-transfer receipt.
**Acceptance**: Both verifiers agree byte-for-byte; outbound/ledger commits are bound; both containing mains satisfy stable `ProtectedMainV1` with expected check sources and contain exact ack without self-reference. All are remote-reachable; upstream releases ownership only now; mismatch, permissive protection, or rule drift leaves ownership upstream and blocks Unit 13b.

### ⬜ Unit 13b: Source Rebaseline Verification
**What**: Query exact web/native remote main, open PRs, active workflow runs, deployments, TestFlight mutations, worktrees, and cleanup ownership; run `rebaseline verify`.
**Output**: Rebaseline bundle and validator report.
**Acceptance**: Units 13a0-13a3 all validate by independent GitHub queries; zero in-flight source mutation/deploy/release work, exact SHAs, explicit cleanup ownership, and green validator. Neither outbound artifact, ledger-only event, nor branch-only projection can unlock source work alone.

### ⬜ Unit 13c: Source Worktree Creation
**What**: Create isolated `worker/cross-client-delivery` web/native worktrees from the exact validated mains and record branch/upstream state.
**Output**: Public-safe source worktree IDs/roles/path digests, branches, base SHAs, and clean-status proof; private Desk path map.
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
**What**: Add red tests for web workflows: build-only pushes; shared claimed mutation; `environment: {name: production, deployment: false}` with required review/no Deployment; no privileged install/action; and one credential-free preflight artifact containing checksum-verified portable Node `22.22.0`, complete Wrangler `4.90.0`, static output, supervisor binary/policy, run/nonce-bound teardown public key, and an encrypted one-use signer capsule for exact OS/architecture. Reject mutable/wrong bundles, unbound or alternate signer keys, Pages credential overreach, self-signed hostile-child teardown, and DAG containment failure.
**Output**: Web release workflow red tests.
**Acceptance**: Current automatic/unbound deploy and mixed protected-job behavior are rejected by tests.

### ⬜ Unit 15b: Web Release Authorization - Implementation
**What**: Split production workflow into preflight/claimed operations and make Storybook push/PR build-only. Pin Node to `22.22.0`. Credential-free preflight fetches the policy-authorized, protected-ledger-pinned public envelope key from the OIDC broker, builds and attests the portable Node/Wrangler/static artifact, exact supervisor binary/policy, an ephemeral Ed25519 teardown public key, and private key encrypted to that envelope key; plaintext key is destroyed before upload. Bind envelope-key generation/fingerprint/event commit, artifact/supervisor/policy/public-key/capsule/run/nonce digests into the Execution Claim before approval. Protected `deployment:false` job presents its exact GitHub OIDC identity and claim to the broker for one-use capsule unwrap directly into the out-of-child supervisor's memory, verifies the whole artifact, and invokes bundled Node/Wrangler in the Linux sandbox. The unwrap key never enters Actions; no setup/install/package network or child access to signer/unwrap material exists. Emit no GitHub Deployment/status and produce the pre-bound teardown proof.
**Output**: Authorized production workflow.
**Acceptance**: Workflow contract tests, security tests, typecheck/build, and dry-run fixtures pass; no provider mutation occurs in validation.

### ⬜ Unit 15c: Web Release Authorization - Coverage
**What**: Cover claim/environment/reviewer paths, build-only push/PR, deploy alternatives, GitHub Deployment side effects, wrong Node/checksum/signature/OS/architecture, incomplete/tampered Wrangler tree, runner mismatch, alternate/unbound/self-signed teardown keys, capsule replay/decrypt outside supervisor, any setup/install/package fetch after token, child/signer isolation and teardown failure, concurrency/governance/receipt/containment, and leaks.
**Output**: Web workflow coverage and warning logs.
**Acceptance**: 100% changed-code coverage, full suite green, zero warnings.

### ⬜ Unit 16a: Web Provider Attestor - Tests
**What**: Add red tests for exact identities/provider queries and Unit 8's Linux supervisor profile: credential-free preflight signer bootstrap bound to claim, distinct UID/cgroup, peer-credential signer ACL, no signer FD/socket/host mount, ptrace/privilege denial, supervisor-held lease, read-only root/private tmpfs, descendant exhaustion, cancellation recovery, and separate no-secret verifier. Include alternate/self-signed key, hostile signer/`/proc`/FD/lock/fork/signal children, teardown/residue, evidence, expiry, and wrong run/ref/event.
**Output**: Web attestor red tests.
**Acceptance**: Self-authored deploy summaries and broad/mutable evidence fail verification.

### ⬜ Unit 16b: Web Provider Attestor - Implementation
**What**: Before approval, credential-free preflight fetches and pins the broker's exact web envelope public key/generation, then attests the exact supervisor/policy plus run/nonce-bound teardown public key and encrypted one-use signer capsule; bind those digests into the claim/final-attestor plan. After approval, the supervisor alone exchanges exact job OIDC/claim/capsule digest for one unwrap and receives signer bytes into locked memory; broker rejects replay, wrong generation, job, actor, workflow, run/attempt, nonce, or capsule. Run source queries as a child inside the exact Linux supervisor's ephemeral sandbox containing all provider secrets, `TMPDIR`/`HOME`, downloads/caches, and manifested writes. Supervisor holds the cleanup lease for the child, destroys/fsync-verifies the sandbox after cgroup exhaustion, and signs teardown with only the pre-bound key. A separate no-secret job rejects alternate/self-signed keys, verifies/uploads final evidence, and inventories artifacts/caches. Cancellation or absent teardown aborts.
**Output**: Independent web/Cloudflare/D1/GitHub evidence plus separately verified sandbox teardown attestation.
**Acceptance**: Mock/live read-only runs pass; secret-bearing child cannot self-attest cleanup; no finalization on missing/invalid teardown or unexpected object.

### ⬜ Unit 16c: Web Provider Attestor - Coverage
**What**: Cover provider/API/attestation/redaction/retry/expiry plus bootstrap key/capsule/policy binding, alternate/self-signed receipt rejection, child isolation, signer/unwrap/lease denial, supervisor teardown, separate verifier, artifact/cache inventory, cancellation, and absent-disposal branches.
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
**What**: Add red workflow tests for credential-free preflight, singleton internal-testflight mutation job using `environment: {name: internal-testflight, deployment: false}`, required-review waiting with no GitHub Deployment/status object or custom protection rule, and a preflight-attested macOS supervisor/policy/run/nonce public key plus encrypted one-use signer capsule bound into the claim. Cover claimed governance without ASC credentials, reviewer/self-review/no-bypass settings, alternate/self-signed keys, claim/run/attempt validation, legacy dispatch rejection, receipts, and containment.
**Output**: Native workflow red tests.
**Acceptance**: Current unbound/mixed TestFlight path and raw `tee` output fail the new contracts.

### ⬜ Unit 21b: Native TestFlight Authorization - Implementation
**What**: Refactor `.github/workflows/testflight.yml` into exact credential-free preflight and claimed singleton mutation operations pinned to the delivery validator. Preflight fetches the policy-authorized, protected-ledger-pinned native envelope public key/generation/event commit from the OIDC broker and attests supervisor binary/policy, macOS profile, run/nonce public key and private key encrypted to that key; bind all digests into the claim before approval. Every protected job uses `environment: {name: internal-testflight, deployment: false}` so required reviewers/secrets apply without implicit GitHub Deployment mutation. After approval only the supervisor may exchange exact job OIDC/claim/capsule digest for one unwrap into locked memory; the unwrap key never enters Actions. Governance branches emit/assert bounded policy evidence and have no ASC credentials.
**Output**: Authorized TestFlight workflow shell.
**Acceptance**: Focused contracts, full Swift suite, scenarios, builds, shell syntax, and warning scans pass.

### ⬜ Unit 21c: Native TestFlight Authorization - Coverage
**What**: Cover claim/environment/run/retry/containment, `deployment: false` reviewer waiting and custom-protection incompatibility, negative GitHub Deployment/status proof, bootstrap public-key/supervisor/policy/capsule binding and replay/tamper/alternate-key failures, governance with no ASC access, and settings drift paths.
**Output**: Native workflow coverage logs.
**Acceptance**: 100% core/changed-script contract coverage, full gates green, zero warnings.

### ⬜ Unit 22a: Native Publisher Privacy and DAG - Tests
**What**: Add red tests for every ASC operation/receipt/failure and executable macOS supervisor profile on the actual `macos-26` path: pre-bound bootstrap key, separate ephemeral child UID, local peer-credential signer ACL, no signer/unwrap/lease capability, task-port/ptrace/privilege denial, deny-by-default `sandbox-exec` writes outside controlled private roots, supervisor-held lease, UID-wide process enumeration/termination, detached `setsid`/double-fork exhaustion, hostile alternate/self-signed key/out-of-root-write/lock/signal/cancellation cases, and separate no-secret verifier. Missing required macOS primitive fails closed.
**Output**: Publisher red tests.
**Acceptance**: Current raw-output and ambiguous runtime-ID behavior fails.

### ⬜ Unit 22b: Native Publisher Privacy and DAG - Implementation
**What**: Refactor publisher into authorized graph operations executed under the exact pre-attested macOS supervisor. It obtains the claim-bound one-use signer only through the broker's exact-OIDC unwrap into locked memory outside the unique child UID, holds the shared cleanup lease on the child's behalf, applies a deny-by-default filesystem sandbox with only manifested private roots writable, and blocks signer/task-port/ptrace/privilege access. After child exit it terminates and re-enumerates every process under that UID, destroys/fsync-verifies roots, and signs with only the pre-bound key. Separate no-secret job rejects alternate keys, verifies/uploads receipt, and inventories artifacts/caches. Typed runtime IDs, capture, revalidation, containment, cancellation, and unsupported-boundary failure remain exact.
**Output**: Receipt-producing TestFlight publisher with separately verified sandbox teardown attestation.
**Acceptance**: Fixture dry-runs resolve exactly one branch per node; shell/Ruby/Swift contracts pass.

### ⬜ Unit 22c: Native Publisher Privacy and DAG - Coverage
**What**: Cover provider alternatives/failures/retries/redaction plus live macOS bootstrap binding, child/signer/unwrap/lease isolation, out-of-root writes, detached descendants, UID exhaustion, supervisor teardown, alternate-key rejection, separate verifier, cancellation, artifact/cache inventory, and containment.
**Output**: Publisher matrix and coverage logs.
**Acceptance**: Full native gates green, zero warnings.

### ⬜ Unit 23a: Native ASC Attestor - Tests
**What**: Add red tests for exact identity/ASC state/windows and the same executable macOS profile as Unit 22: pre-bound key, separate UID, peer ACL, no signer/unwrap/lease capability, task-port/ptrace/privilege denial, deny-by-default writes, UID-wide detached-descendant exhaustion, hostile alternate-key/out-of-root/fork/signal/cancellation cases, and separate verifier. Reject unsupported isolation, absent teardown, objects, expiry, and wrong run/ref.
**Output**: ASC attestor red tests.
**Acceptance**: Publisher summaries and raw tester responses cannot verify.

### ⬜ Unit 23b: Native ASC Attestor - Implementation
**What**: Run source-owned read-only ASC final queries under the Unit 22 claim-bound macOS supervisor/profile. Supervisor alone unwraps signer and holds lease, child has a unique UID and only manifested writable roots, and every process with that UID is terminated/re-enumerated before root destruction/fsync and pre-bound signing. Separate no-secret job rejects alternate keys, verifies/uploads allowlisted evidence/teardown, and inventories GitHub objects. Cancellation, out-of-root write, unsupported isolation, or absent teardown aborts.
**Output**: Independent ASC evidence with separately verified sandbox teardown attestation.
**Acceptance**: Fixture/read-only run passes without mutation; secret-bearing child cannot self-attest; no raw tester/credential/cache residue or unclassified object.

### ⬜ Unit 23c: Native ASC Attestor - Coverage
**What**: Cover query/pagination/state/redaction/attestation/error plus macOS bootstrap binding, child signer/unwrap/lease denial, deny-write probes, detached descendants/UID exhaustion, alternate-key rejection, teardown, separate verifier, artifact/cache, cancellation, unsupported boundary, and absent-disposal branches.
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
**What**: Coordinate merge, verify exact web main/CI/Storybook build, and prove neither Worker/D1 nor Storybook Pages nor GitHub Deployment/status mutation started from the push.
**Output**: Merge SHA, exact-main CI/Storybook runs, Worker/Pages/GitHub Deployment queries, and worktree ownership.
**Acceptance**: Main/build green; zero automatic or in-flight Worker/D1/Pages/GitHub Deployment mutation; no source cleanup yet.

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

### ⬜ Unit 27d1a: Web Supervisor Envelope Key Provisioning
**What**: Authorize and claim one `web-supervisor-envelope-key-provision-v1` operation under the root policy's fixed repository/workflow/key-lifecycle graph. Through a one-use scoped Cloudflare credential, generate a distinct X25519 envelope keypair inside an enumerable private context, stream the private key into the broker secret binding, prove an exact web-repository/workflow/job OIDC challenge can unwrap only a disposable test capsule, then broker-append `SupervisorEnvelopeKeyProvisioned` carrying only generation/public key/fingerprint/challenge/policy digests. Inventory the binding/key generation, destroy/fsync local plaintext, revoke the bootstrap credential, and journal every partial failure. Rotation creates and appends generation N+1, keeps N decrypt-only until every bound run terminates, then appends retirement and deletes N; duplicate/unknown keys or uncertain deletion contain all unwraps.
**Output**: Authorization/claim/provision-or-retire-event/terminal-or-containment commits; public-key event/policy digests; secret-binding generation/fingerprint; scoped credential creation/revocation; challenge; local-zero/key inventory; rotation/deletion/partial-failure receipts; and post-query.
**Acceptance**: Exactly one active web generation is policy-pinned and usable only by broker-validated web OIDC/claim/capsule identity; private unwrap key never enters GitHub Actions, arguments, logs, or artifacts. Bootstrap credential and local plaintext are provably absent or all unwraps remain contained; no deploy/provider mutation occurs.

### ⬜ Unit 27d2: Web Production Environment Protected Proof
**What**: Authorize and claim the merged web workflow's read-only `verify-environment-governance` operation, dispatch it at exact main, prove its sole `production` job enters `waiting`, re-query approver actor `16390116`, approve that exact waiting job, verify one disposable Unit 27d1a capsule unwrap reaches only the supervisor, and append its sanitized verification receipt plus terminal or containment.
**Output**: Authorization/claim/terminal-or-containment commits, workflow/run/attempt/job/environment IDs, waiting and approval API responses, actor proof, verification receipt digest, and authoritative post-query.
**Acceptance**: Exactly one claimed job waits and is approved by actor `16390116`; it validates current environment settings without access to Cloudflare/D1 secrets or deploy commands; terminal-or-containment appended; no deploy occurs.

### ⬜ Unit 27e1: Native Internal-TestFlight Environment Bootstrap
**What**: Append authorization and a claim for the versioned bootstrap exception, re-query authenticated GitHub actor `16390116`, capture native `internal-testflight`, and use `Settings > Environments > internal-testflight` to install the protected target. Capture every attempt/state. Failure before UI mutation may append non-consuming abort. After partial mutation, either continue to target success or prove exact prestate and append `BootstrapRolledBack`; any later attempt must use `github-environment-ui-bootstrap-resume-v1` with the same identity/prestate/target digests. No attempt grants TestFlight/provider authority.
**Output**: Authorization/claim plus target-success, pre-mutation-abort, or exact-prestate `BootstrapRolledBack` commit; per-attempt actor/environment/UI/API evidence; operation kind; explicitly null workflow run/attempt fields; receipt digest; and post-query.
**Acceptance**: Every attempt has an executable terminal; target success consumes bootstrap, pre-mutation abort is non-consuming, post-mutation rollback terminates safely but only same-target resume remains legal; UI/API evidence agree and independently prove bypass off; no workflow or TestFlight run starts.

### ⬜ Unit 27e1a: Native Supervisor Envelope Key Provisioning
**What**: Authorize and claim one `native-supervisor-envelope-key-provision-v1` operation under the root policy's fixed repository/workflow/key-lifecycle graph. Through a separate one-use scoped Cloudflare credential, generate a distinct X25519 envelope keypair inside an enumerable private context, stream the private key into the broker secret binding, prove an exact native-repository/workflow/job OIDC challenge can unwrap only a disposable test capsule, then broker-append `SupervisorEnvelopeKeyProvisioned` carrying only generation/public key/fingerprint/challenge/policy digests. Inventory the binding/key generation, destroy/fsync local plaintext, revoke the bootstrap credential, and journal every partial failure. Rotation creates and appends generation N+1, keeps N decrypt-only until every bound run terminates, then appends retirement and deletes N; duplicate/unknown keys or uncertain deletion contain all unwraps.
**Output**: Authorization/claim/provision-or-retire-event/terminal-or-containment commits; public-key event/policy digests; secret-binding generation/fingerprint; scoped credential creation/revocation; challenge; local-zero/key inventory; rotation/deletion/partial-failure receipts; and post-query.
**Acceptance**: Exactly one active native generation, distinct from web, is policy-pinned and usable only by broker-validated native OIDC/claim/capsule identity; private unwrap key never enters GitHub Actions, arguments, logs, or artifacts. Bootstrap credential and local plaintext are provably absent or all unwraps remain contained; no TestFlight/provider mutation occurs.

### ⬜ Unit 27e2: Native Internal-TestFlight Environment Protected Proof
**What**: Authorize and claim the merged native workflow's read-only `verify-environment-governance` operation, dispatch it at exact main, prove its sole `internal-testflight` job enters `waiting`, re-query approver actor `16390116`, approve that exact waiting job, verify one disposable Unit 27e1a capsule unwrap reaches only the supervisor, and append its sanitized verification receipt plus terminal or containment.
**Output**: Authorization/claim/terminal-or-containment commits, workflow/run/attempt/job/environment IDs, waiting and approval API responses, actor proof, verification receipt digest, and authoritative post-query.
**Acceptance**: Exactly one claimed job waits and is approved by actor `16390116`; it validates current environment settings without access to ASC secrets or upload commands; terminal-or-containment appended; no TestFlight upload occurs.

### ⬜ Unit 28: Merged-State Pilot Rebaseline
**What**: Re-query exact merged mains, production environment/shared mutation concurrency, required-review/no-custom-protection compatibility with `deployment: false`, web/native distinct envelope-key generations/fingerprints/unwrap policy and zero bootstrap credentials, least-privilege scopes, Worker/Storybook Pages and negative GitHub Deployment/status state, exact portable Node checksum/signature/OS/architecture plus Wrangler-tree/runner identities, current/previous ASC identities, hardware, Codex host/model/tool digest, in-flight runs, and cleanup ownership.
**Output**: Pilot rebaseline/freeze record.
**Acceptance**: Validator green; singleton environments match actor/bypass rules; zero in-flight mutation; exact IDs recorded without secret values.

### ⬜ Unit 29a: Photo Studio Change and Exact Operation Graphs - Tests
**What**: Add red validation fixtures for exact merged web/native operation nodes/alternatives, Product Change classifications, compatibility matrix, evidence requirements, freeze references, and a complete proof-dependency manifest for Units 30-59. Tests require every node's direct immutable/runtime inputs, predecessor edges, propagation closure, original acceptance reference, and fail-closed replay/no-replay predicates.
**Output**: Red change/operation fixtures plus the coordinating records branch, stable worktree ID/path digest, and exact base SHA inherited from Unit 12c; private Desk path map.
**Acceptance**: Generic or stale pre-rebaseline graphs fail validation.

### ⬜ Unit 29b: Photo Studio Change and Exact Operation Graphs - Implementation
**What**: Add exact Product Change/source operation templates and `records/photo-studio-proof-dependencies.json`. Its direct inputs are: 30 web/delivery/workflow/graph/freeze/staged-policy/web-envelope-key-event-generation; 31=30+ledger/environment/Worker-prestate; 32=31+previous-source/scenario; 33=31+web-attestor/staged-state; 34 previous-installed-build/queue/scenario; 35 web/delivery/D1-schema/migration/environment/D1-prestate; 36=35+web-pack/workflow/Worker-prestate; 37=36+canary/OAuth-fixture/cleanup-policy; 37a=37+web/Storybook-workflow/Pages-project/deployment-false/Pages-prestate/static-digest/portable-Node-22.22.0-checksum-signature-OS-arch/Wrangler-tree/runner-image/negative-GitHub-Deployment/sandbox-teardown; 38=35-37a+web-attestor/provider-state/teardown; 39=34-38+queue-contract; 40=35-38+browser-harness; 41=35-40+MCP-schema/harness; 42=35-41+agent-host/model/tool/budget; 43 native/delivery/workflow/archive-provenance/environment/native-envelope-key-event-generation/ASC-prestate; 44=43+publisher-graph/ASC-metadata; 45=43-44+group-state; 46=43-45+notification-policy/state; 47=43-46+ASC-attestor/teardown; 48=43-47+iPhone/build/scenario; 49=43-47+iPad/build/scenario; 50 native/pack/signed-macOS/scenario; 51=36+Worker-predecessor/rollback-selector/graph/state; 52=36-40+capability-selector/isolation/graph/state; 53=35+migration/backup/containment-graph; 54=43-47+sacrificial-build-selector/supersession-graph/state; 55=35-42+D1-cleanup-manifest/state; 56=35-42+R2/media-manifest/state; 57=37+OAuth/token-manifest/state; 58a=43-57+provider-record-state/disposition-policy; 58b=30-58a+artifact-manifest/state; 59 ledger/finalization-workflow+all cleanup terminals. Unit 34 is a historical barrier marking 30-39 required. Classify immutable identities/results as durable and current source/environment/provider/runtime/cleanup/build/feedback/key-generation state as renewable with exact read-only query/predicate. Generate transitive/barrier edges fail closed.
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

### ⬜ Unit 37a: Storybook Pages Deploy Operation
**What**: Authorize, preflight, claim, required-review approve, and deploy exact Storybook output through `deployment:false`/shared concurrency. Before token injection verify attested portable Node `22.22.0` executable checksum/signature/OS/architecture, complete Wrangler tree, static digest, and runner-image identity. Invoke only bundled Node/Wrangler inside independently supervised secret sandbox; no setup/install/package fetch/action. Emit no GitHub Deployment/status and obtain separate teardown/provider/terminal proof.
**Output**: Authorization/claim/terminal-or-containment commits, run/approval IDs, source/static/portable-Node/tool-tree/runner digests, Pages IDs, negative GitHub Deployment query, independent sandbox teardown, post-query, and containment receipt.
**Acceptance**: One claimed Pages mutation after Worker/canary; required review still applies; every runtime/input/claim/run and teardown binds; no post-token install/raw output; token is Pages-only; zero residue. Containment/failure is not success.

### ⬜ Unit 38: Production Web Independent Attestation
**What**: Dispatch and verify read-only GitHub/Worker/D1/R2/Cloudflare Pages/runtime attestors for Units 35-37a.
**Output**: Attestor run/artifact/attestation IDs, provider post-queries, and evidence digests.
**Acceptance**: Exact source/Worker/Storybook Pages/build/portable-Node checksum/signature/OS/arch/tool-tree/runner/pack/migration/capability state and teardown match; no GitHub Deployment/status side effect; no attestor mutation; evidence fresh.

### ⬜ Unit 39: Previous Installed Queue Replay
**What**: Bring the frozen queued mutation online against production, verify one idempotent effect and user-visible result, then exact-clean run-owned state.
**Output**: Queue after-state, backend/UI oracle, transitional attestation, cleanup receipts, and post-query.
**Acceptance**: Replay once; no duplicate cover/spoon/media; zero run-owned residue.

### ⬜ Unit 40: Production Browser Actor Proof
**What**: Run authenticated upload/generate/editorialize/Spoon scenarios with run-owned data and capture exactly 14 deployed-state views: `default`, `spoon-off`, `editorial-off`, `processing`, `failure`, `empty`, and `narrow`, each at mobile 390x844 and desktop 1440x1000. Use real loading/transition/error/empty data, visual-qa-dogfood, backend/state oracles, axe/accessibility-tree scans, keyboard/focus/touch-target checks, text/overlap/clipping metrics, and exact cleanup.
**Output**: Fourteen named screenshots with source/pack/state/viewport digests, browser/backend oracles, accessibility/performance/layout reports, absurdity ledger, cleanup receipts, and provider post-query.
**Acceptance**: Every named state and viewport matches its oracle; zero incoherent overlap/clipping/blank capture/serious accessibility violation; processing/failure transitions are observed rather than mocked; required semantics pass; private media absent from public evidence; absurdity ledger closed; residue zero.

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
**What**: Against a disposable non-shipping authorization, attempt finalization with stale digest, wrong claim, mismatched provider identity, forged/missing cleanup, cached/late pre-CAS Date, and original cancellation before append. Exercise lost-response/pending-observation races only in the isolated fixture ledger from Unit 8, where recovery observation cannot affect the Product Change.
**Output**: Rejected original/recovery run IDs, timing/cleanup error codes, ledger parent/abort, fixture pending/observation race receipts, and no-shipment post-query.
**Acceptance**: No effective production `ReleaseSetPublished`; every live disposable claim aborts; fixture pending events cannot project; recovery never appends publication; only explicit non-shipping test records/proofs change.

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

### ⬜ Unit 60c37a: Conditional Replay of Unit 37a
**What**: Consume only the latest evaluation pass Unit 37a decision; replay the original claimed Storybook Pages deploy when required, otherwise emit its schema-valid no-replay receipt.
**Output**: Dependency decision plus fresh Unit 37a run/ledger/Pages receipt/post-query or no-replay receipt.
**Acceptance**: Replay inherits Unit 37a, binds exact source/build/portable-Node/tool-tree/runner/claim/run and teardown, proves no GitHub Deployment/status side effect, reaches terminal success, and preserves shared serialization; containment/failure blocks convergence.

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
**What**: In parallel, dispatch exact web/native read-only attestors and GitHub queries for every `renewal_query`: source/check, environment/deployment-false, provider/runtime, Storybook static/portable-Node checksum-signature-OS-arch/Wrangler-tree/runner identities, negative GitHub Deployment state, independent sandbox teardown, ASC/build eligibility, cleanup-zero, and feedback. Bind GitHub-server/provider windows and feed a new Unit 60c29f pass without mutation.
**Output**: Attested renewable-observation batch/query IDs/times/digests, source-runner cleanup attestations/artifact-cache inventories, predicate results, provider post-queries, and resulting latest evaluation-pass locator.
**Acceptance**: Every renewable class is queried exactly once per scope; all calls read-only; every source runner proves cleanup; durable proof remains unchanged. Missing cleanup fails the batch. If the latest pass requires replay, return to the lowest Unit 60c30-59, execute through Unit 60c59a, then rerun the batch. Only durable and renewable green may proceed.

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
**What**: After Unit 60d convergence, retain task-owned source/coordinating worktrees for possible finalization abort repair, verify them clean at exact merged mains, and freeze their ownership/branch/base locators. Do not retire them before successful Unit 64c publication.
**Output**: Public-safe Git/worktree ID/role/branch/base/path-digest inventory, clean-state proof, finalization-loop ownership freeze, and private Desk path map.
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

### ⬜ Unit 60f3a: Finalization Attempt Cleanup Context
**What**: Before private query, initialize enumerable `0700` root and fsynced WAL `ALLOCATING -> OPEN -> SEALED -> PURGING -> PURGED -> PROMOTED`. Run exact cleanup supervisor outside the secret-bearing writer's UID/session and have it hold the shared cleanup lease on the child's behalf; child receives no lock or signer capability. Independently launch a policy-pinned promotion-witness service under a third UID/session with its own ephemeral Ed25519 key, root read capability, and shared-lock capability but no provider credential, cleanup write, child-control, or supervisor-signing capability; bind witness code/policy/public-key/context digests into final preflight and claim before any private work. Linux uses root-owned sockets with `SO_PEERCRED`, `FD_CLOEXEC`, non-dumpable/no-new-privileges children, read-only root/private tmpfs, seccomp and dedicated cgroups killed empty. macOS uses root launchd sockets with local peer credentials, newly created unprivileged UIDs, denied task-port/ptrace/privilege escalation, deny-by-default `sandbox-exec` profiles, and UID-wide process exhaustion. Unsupported boundary is `BLOCKED_HUMAN`, never clean. Cleanup supervisor exclusively purges/restarts its orphans; witness only reads/signs after acquiring shared lock.
**Output**: Context; cleanup and witness public-key/code/policy/isolation-profile digests; supervisor/child/witness UID/session/peer/lease/lock proofs; denied capability probes; empty cgroup or UID-process inventories; fsynced WAL/restart evidence; and pending/final/witness fixtures.
**Acceptance**: Active-platform boundaries are executable before writes; child cannot reach signer, unwrap material, host APIs, privilege, lease, out-of-root writes, or surviving descendants; cleanup supervisor/coordinator cannot reach witness key, and witness cannot mutate cleanup/provider state. Cancellation/restart converges or yields no receipt. Crash injection leaves discoverable state or non-authoritative `.pending`; no final tombstone or package validates without matching `PROMOTED` plus a later direct-read witness signature. Partial setup routes to Unit 64b; no provider mutation.

### ⬜ Unit 60f4: Final Attestor Preflight and Waiting Proof
**What**: Dispatch every final web/native attestor exactly once through its credential-free preflight before any claim. Capture exact repository/ref/workflow SHA, run/attempt/check-run/job IDs, environment, source SHA, nonce, supervisor/policy/public-key/capsule/artifact-attestation digests, active envelope-key events/generations, and complete expected protected-job set. Independently attest the Unit 60f3a promotion-witness code/policy/public key/context and prove its private key is isolated and unused. Prove every secret-bearing job is waiting for its environment and no provider secret/query has started. Freeze all identities for the generation. Any cancellation, rerun, new attempt, job-set/key-event/witness drift, bootstrap mismatch, or premature start fails the generation and purges through Unit 64b without claim.
**Output**: Final-attestor preflight manifest; source and witness artifact attestations; exact waiting-job/API evidence; source-envelope/witness generation/nonce bindings; and green or pre-claim abort record.
**Acceptance**: Exactly one preflight per required source succeeds; all bound protected jobs wait, witness key remains unused, and no secret work ran. Identities are immutable and consumable by Unit 60f4a/61; no signer or witness key from an earlier renewable-observation run/generation is reused.

### ⬜ Unit 60f4a: Pre-Claim Proof Freshness Recheck
**What**: Immediately before Unit 61 and after final attestors are waiting, perform only credential-free no-cache GitHub/ref/run/job/artifact-attestation and public runtime-identity liveness checks with fresh GitHub server time. Re-evaluate the already completed Unit 60c59b batch without dispatching any attestor or provider query, and reverify Unit 60f4 identities still wait unchanged. If renewable evidence has aged out, or any mismatch/unknown/premature start appears, cancel the frozen jobs, execute Unit 64b cleanup as a pre-claim abort, record the failed generation through Units 64a1-c with `finalization_generation=null`, and restart at Unit 60c59b before dispatching an entirely new Unit 60f4 set; never refresh after freeze.
**Output**: Attempt-context digest, exact prior renewable-batch locator/age evaluation, credential-free liveness queries, frozen-attestor waiting proof, predicate inventory, protected records identity, and green or cancel/purge/restart record.
**Acceptance**: Unit 61 starts only from one complete green latest Unit 60c59b pass plus a credential-free liveness recheck bound to Units 60f3/60f3a/60f4; final jobs still wait exact and no source/provider credential or new run is used after freeze. Stale/mismatch/unknown/missing cleanup cannot be waived and creates a new pre-claim generation from Unit 60c59b.

### ⬜ Unit 61: Finalization Claim
**What**: Dispatch the exact protected coordinator after green Unit 60f4a. First broker-append `FinalizationRecoveryRegistered` with exact recovery SHA/policy, predecessor, local context key, witness code/policy/public-key/context digests, active source envelope-key events/generations, and every frozen source run/attempt/check-run/job/environment/bootstrap digest; then append bound claim and create one Durable Object finalization operation/mailbox. Coordinator watches operation state. Original may publish/abort; recovery may expire unclaimed registration, abort dead/overdue claim, or observe already-CASed publication. Resolver and broker transition validator reject every unrelated/illegal event despite App bypass.
**Output**: Registration run/parent/commit/payload, coordinator/recovery SHAs, sweeper identity, deadline/expiry, generation, claim parent/commit, local witness and source signer-bootstrap/key-event bindings, records identity, dedicated ledger App actor proof, and resolver query.
**Acceptance**: Recovery authority is durable before claim and survives run loss. Registration without claim reaches `RecoveryRegistrationExpired`; a claim reaches publication/abort; recovery cannot publish; CAS losers re-query/exit. After outage, resolver check forces overdue recovery before any merge/transition.

### ⬜ Unit 62: Credential-Free Final Liveness Recheck
**What**: While Unit 61 coordinator watches the Durable Object and before deadline, perform only credential-free GitHub/ref/run/job/artifact-attestation and public runtime-identity liveness checks. Reverify every Unit 60f4 run/attempt/check-run/job/environment/bootstrap remains exact and waiting. Do not dispatch replacement work, approve any environment, access a provider secret/capsule, or query private Cloudflare/ASC state. Compile the exact provider-query request inventory that the frozen jobs will execute once in Unit 64.
**Output**: Coordinator/context identities, frozen attestor run/artifact/waiting-job IDs, public liveness evidence, provider-query request inventory/digest, and either green readiness or a structured pre-secret failure consumed by Unit 63.
**Acceptance**: Every credential-free check reaches a terminal classified result and exact jobs still wait; any mismatch/failure is sanitized and fail closed; coordinator remains at the exact claim; no private provider query, secret access, ledger drift, or mutation occurs.

### ⬜ Unit 63: Draft Release Set Compile and Leak Scan
**What**: When Unit 62 is green, compile a credential-free Release Set draft containing only already protected evidence plus typed unresolved slots bound to the Unit 62 provider-query inventory. Validate graph/claims/receipts/dispositions and scan every populated field/artifact. The draft is never publishable and cannot claim provider freshness or proposed state `shipped`. When Unit 62 is not green, emit a bound skipped-due-to-preflight-failure record.
**Output**: Canonical draft/template digest, unresolved-slot/query-inventory binding, validation/leak-scan reports, or a structured skip/failure report consumed by Unit 63a.
**Acceptance**: The result is readiness-only: exact protected inputs and every required unresolved provider slot are enumerated with no leak, or continuation is explicitly refused. Product Change remains unshipped, ledger remains Unit 61, and no provider credential/query is used.

### ⬜ Unit 63a: Final Attestor Dispatch Plan
**What**: Compile one credential-free plan bound to claim/operation/coordinator/recovery/deadline, frozen jobs/bootstrap, cleanup, nonce, draft/query inventory, witness schema, and mailbox. All HTTP dates are exactly one non-obs-fold IMF-fixdate `Date` header parsed to integer milliseconds; duplicate/missing/malformed dates, `304`, nonzero/invalid `Age`, or cache-hit indicators fail. All provider queries launch in parallel within a 5000ms start spread. Per provider, `S` is the no-cache GitHub Date immediately before its query, `C` the no-cache GitHub Date immediately after its response, and `R` the provider response Date; require `S<=C`, `C-S<=45000`, `-5000<=R-C<=5000`, and `max(C)-min(S)<=60000` milliseconds. The executable post-query budget is final compile/leak scan `<=20000`, private purge/promotion/witness `<=90000`, and protected relay dispatch/wait/approval through `E` start `<=60000`; `finalEvidenceDeadline=min(claimDeadline,min(S)+300000)` leaves at least 70000ms margin. Any sub-budget/deadline breach aborts without refresh. Mailbox input carries base64 of RFC 8785 canonical, fully sanitized final Release Set bytes (maximum 32768 before base64), digest, detached bounded `PromotionObservedV1` bytes/digest, operation ID, and no blob/tree/commit locator; broker decodes/strict-parses/rescans and alone creates Git objects. Every broker invocation persists a unique epoch ID, wall-clock anchor Date, and monotonic offsets; offsets are compared only within that epoch. `E`, `F`, and `H` are closed tagged unions. `response` requires start/end/deadline offsets, end-start within the operation bound, one strict Date, status, and operation-specific response fields, while forbidding timeout/error fields. `timeout` requires start, exact deadline/end, and timeout marker while forbidding Date/status/response/error fields. `transport_error` requires start/end no later than deadline plus a sanitized error code while forbidding Date/status/response/timeout fields. For `E`, the deadline is start+10000; response must be `200` for the exact nonce/ref with no cache evidence; for every `T in {S,C,R}`, fail when `E.date-T < -5000`, clamp only `[-5000,0]` to zero, and require normalized age `<=300000`; E must begin before `finalEvidenceDeadline`. Persist `committing` before CAS; `casDispatchOffset-E.endOffset` must be `0..5000`. For `F`, `startOffset=casDispatchOffset`, deadline is start+15000, and response includes the response digest; when `E` and `F` respond in one epoch require `-5000<=F.date-E.date<=25000`. Any dispatched CAS enters `cas_uncertain` regardless of `F`. The first same-epoch `H` starts `0..5000` after `F.endOffset`; each later same-epoch `H` starts `0..5000` after the prior `H.endOffset`; each deadline is start+10000 and each response includes exact ref. Same-epoch adjacent response dates differ by `-5000..20000`. After restart, a new epoch first obtains response-only no-cache GitHub anchor `A` within 10000; first `H` starts `0..5000` after `A.endOffset` and requires `-5000<=H.date-A.date<=20000`; no monotonic value crosses epochs. Candidate => observable even after deadline; exact unchanged claim => `abort_authorized`; legal other head => classify. Retry separately bounded `H` invocations without total count while unavailable. Every write invocation revokes/contains its token in `finally` while preserving append state; `H` has no write token; abort CAS uses a new journaled write-token attempt. Forbid atomic/CAS-age claims.
**Output**: Plan/digest/nonce; operation/mailbox/coordinator/recovery/context/bootstrap/deadline bindings; exact 32768-byte canonical package transport; formal `S/C/R/E/F/H` schemas/equations; per-epoch clock records; prepare/Git-object/CAS/status/observation/revocation contracts; green/skip.
**Acceptance**: Plan is single-use, source-secret preserving, executable only by Units 64-64c, and cannot outlive the deadline. Every final attestor must return verified cleanup; only the exact mailbox relay may request publication; no query or mutation occurs in this unit.

### ⬜ Unit 63b: Finalization Claim Resolution
**What**: If Units 62-63a are readiness-green, record continue bound to operation/coordinator/recovery/generation/deadline, draft/query-inventory digest, and reverify coordinator plus all frozen attestor jobs wait and claim is head. Otherwise mark operation `abort_required`; original or recovery broker-appends `FinalizationAborted`, then Unit 64b and Units 64a1-c. Recovery independently resolves coordinator/mailbox cancellation, and no lost signal can authorize approval, query, or commit.
**Output**: Continue-decision receipt, or original/recovery terminal run/parent/`FinalizationAborted` commit/actor/race proof/post-query plus context-bound purge and loopback units.
**Acceptance**: Green proof authorizes only Unit 64; any query/compile/leak/timeout/disappearance failure resolves the claim to `FinalizationAborted`; Units 64a1-c cannot start before green Unit 64b; no failed generation can publish or be reused.

### ⬜ Unit 64: Final Point-in-Time Evidence Assembly
**What**: After Unit 63b readiness-green, approve/continue only the exact frozen Unit 60f4 jobs once. Each revalidates identities before secret access, executes the bound Unit 62 provider-query inventory exactly once, and launches Worker/D1/R2/Pages/ASC/installed/feedback/cleanup queries in parallel within the Unit 63a 5000ms spread/45000ms individual/60000ms batch bounds. Verify claim-bound teardown, fingerprints, formal `S/C/R`, manifests/object inventories, then fill every draft slot and compile/leak-scan the one final Release Set within 20000ms. Produce RFC 8785 canonical fully sanitized package bytes <=32768 containing that Release Set and future promoted-tombstone slot/schema; stage only these public-safe bytes/digest for Unit 64b and later mailbox input. Reject replacement jobs, retries that create a new run/attempt, repeated provider-query batches, sub-budget breach, Git blob/tree/commit locators, or caller-created objects. Cancellation/rerun/drift/query failure/oversize marks `abort_required`, then Unit 64b.
**Output**: Coordinator/recovery/context; environment-approval receipt; exact attestor/evidence/cleanup IDs; one provider-query batch with `S/C/R`; completed draft/final Release Set/query/leak digests; bounded canonical sanitized bytes/digest; or abort proof.
**Acceptance**: Exactly the frozen jobs run once and exactly one authoritative provider-query/final-compile batch exists for the generation. Every unresolved draft slot, local write, and source-runner residue class is accounted for; consistency/time-window equations match; no private artifact enters sanitized output. On green ledger remains `FinalizationClaim` and only Unit 64b runs next; runner uncertainty/failure/timeout cannot publish or be retried under the generation.

### ⬜ Unit 64b: Finalization Private-Evidence Purge
**What**: Under cleanup-supervisor exclusive promotion lock, fsync `SEALED -> PURGING`, exhaust the Linux child cgroup or macOS child UID process inventory, reconcile/delete private state, fsync affected dirs, and rescan roots/handles. Sign `.pending`, fsync its file and receipt directory, then destroy signer handle and verify. Fsync WAL `PURGED`; atomically rename pending to final; fsync final receipt directory; atomically write/fsync WAL `PROMOTED` only afterward; construct/freeze the canonical public package with tombstone filled and revalidated under 32768 bytes; then release exclusive lock. The independent witness acquires shared lock, directly reads the final tombstone, `PROMOTED` WAL, manifested roots/handles, and exact frozen package, and emits detached `PromotionObservedV1` over context/tombstone/WAL/package digests plus witness code/policy/key/generation and observation time. Fsync the attestation, destroy/verify witness key, release lock, and have a separate verifier check it. Restart recovery revalidates incomplete stages before either lock is released. Verify independent source teardown/object inventories.
**Output**: Final signed tombstone; lock-gated `PROMOTED` WAL proof; frozen canonical public package/digest; detached `PromotionObservedV1` bytes/digest/signature and witness destruction; isolation/descendant exhaustion; source teardown or uncertainty; manifest/crash/root/handle/object scans; and `publication_clean` or `abort_recordable`.
**Acceptance**: `.pending` is durable before cleanup-key destruction; final rename/directory fsync precede `PROMOTED`; witness observes only after shared-lock acquisition and signs exact direct-read final state/package before its key is destroyed. No verifier/projection/broker accepts caller assertion, missing/alternate/stale witness, or state observed under exclusive lock. Every crash/race converges safely. `publication_clean` requires all independent teardown plus valid witness and alone reaches Unit 64c/65; uncertainty is abort-only; local failure retries.

### ⬜ Unit 64c: Authoritative Finalization Resolution
**What**: After `publication_clean`, dispatch exact protected-main OIDC mailbox relay carrying only bounded canonical sanitized package bytes/digest, detached `PromotionObservedV1` bytes/digest, and operation ID, then approve its `ledger-writer` job. Reject any caller blob/tree/commit. Broker rescans both artifacts, verifies the witness signature against the claim-bound key plus exact package/tombstone/WAL/context digests, and rejects a caller-only `PROMOTED` assertion. It then verifies bootstrap/claim and formal timing schemas, persists pre-mint containment, creates blob/tree/candidate itself, executes E/CAS, records `F`, and enters `cas_uncertain` after dispatch until authoritative ref observation. In `finally`, tear down the write-token lease to `token_revoked` or `token_contained` without changing `cas_uncertain`. Status/observe performs as many separately bounded `H` invocations as needed across restarts and never possesses the write token. Candidate is observed even after deadline; exact unchanged claim transitions to `abort_authorized`, which may start one new journaled mutation attempt with a newly minted write token for expected-parent abort CAS; that race with a late candidate CAS has one winner. Other head follows legal transition. Every abort attempt also revokes/contains independently. Protected relay/recovery turns broker observation into `PublicationObserved`.
**Output**: Operation/mailbox/run/job/OIDC/package-byte identities; broker-created blob/tree/commit; cleanup; formal `S/C/R/E/F/H`; per-epoch clocks; durable operation/ref race journal; revocation or containment; publication/abort/observation proof.
**Acceptance**: Broker alone creates Git objects/ref. Missing/substituted/oversized/caller-object input fails. Token/private evidence never reaches Actions. No `performance.now()` comparison crosses epochs. CAS uncertainty never becomes abort solely by attempt count/deadline; bounded observations continue until exact ref state, and expected-parent race is safe. Only observed direct-child publication ships; no atomic/CAS-age claim.

### ⬜ Unit 64a1: Finalization-Abort Records Review
**What**: Conditional on Unit 60f3a, 60f4, 60f4a, 63b, 64, 64b, or 64c failure/abort and only after Unit 64b returns `abort_recordable` or `publication_clean`, integrate exact current delivery main into `finalize-iN`; add sanitized pre-claim/original-and-recovery coordinator/operation/mailbox/timing/source-runner cleanup-or-uncertainty/local tombstone/token-containment/abort evidence and a byte-complete forward-port manifest; hostile-review public-safe records. On successful Unit 64c publication this unit is skipped.
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
**What**: Only when Unit 64c proves current direct-child `ReleaseSetPublished` has exact `PublicationObserved` proof and consumed Unit 64b's valid local tombstone plus independent source teardown attestations, authorize/project that effective commit/digest and cleanup index to protected main, then verify pointer and CI.
**Output**: Authorization/claim/terminal commits, run/attempt ID, projection receipt digest, main commit/CI, and authoritative pointer post-query.
**Acceptance**: Guard rejects abort, pending/unobserved, stale, or prior-generation state; receipt matches claim/cleanup/observation; projection points to effective current publication; terminal or containment recorded; projection cannot alter shipment truth.

### ⬜ Unit 66: Protected Tag and GitHub Release Projection
**What**: Only after Unit 65 succeeds for current observed/effective `ReleaseSetPublished`, authorize and create protected tag/GitHub Release pointing to it, attach sanitized attestations including `PublicationObserved`, and verify.
**Output**: Authorization/claim/terminal commits, run/attempt ID, projection receipt digest, tag/release/attestation URLs, and authoritative post-query.
**Acceptance**: Guard rejects absent/aborted/stale generations; receipt matches claim; terminal or containment commit recorded; projections identify current Unit 64c publication; retries idempotent; no private artifact.

### ⬜ Unit 67: Post-Shipment Read-Only Closeout
**What**: Only after Units 64c-66 prove current-generation effective observed publication/projections, read-only verify ledger/`PublicationObserved`/projections/providers/feedback/in-flight state; privately enumerate cleanup paths/handles/caches and publicly record only manifests/digests, source teardown proofs, and artifacts; update Desk/lessons/docs; retire clean task-owned branches/worktrees; notify Slugger; and report a public-safe final inventory.
**Output**: Final evidence index, Desk completion commit, post-query, coordinating-worktree cleanup receipt with stable ID/path digest only, public-safe final inventory, private Desk path map deletion proof, and Slugger receipt.
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
- 2026-07-20 23:33: Cold validation Round 2 removed self-referential containing commits from receiver-ack content and made delivery/upstream commits external tree-reachability evidence.
- 2026-07-20 23:37: Independent cold validation converged across the delivery, release, web, and native task/source contracts.
- 2026-07-20 23:42: Quality pass converged with template, TDD, coverage, warning, conditional acceptance, and completion-criteria checks clean.
- 2026-07-20 23:54: Tinfoil scrutiny repaired the unclaimed automatic Storybook Pages deploy by moving it behind the shared claimed production mutation lane, restored the exact fourteen-capture production browser matrix, and added fail-closed finalization private-evidence purge proof before projection or abort review.
- 2026-07-21 00:13: Tinfoil Round 2 made the coordinator append and watchdog its own claim in one protected run, moved zero-residue purge before the sole shipment CAS, added attempt-scoped caller-death/restart cleanup recovery and strict CAS-time evidence bounds, and removed Storybook GitHub Deployment side effects while pinning the exact Wrangler action and runtime.
- 2026-07-21 00:41: Tinfoil Round 3 added independently registered abort-only claim recovery, a crash-consistent fsynced cleanup WAL with supervisor-signed tombstones, source-runner cleanup attestations, GitHub environment `deployment: false`, a prebuilt credential-free Wrangler tool bundle, and monotonic request-to-CAS timing with ambiguous-result recovery.
- 2026-07-21 00:59: Tinfoil Round 4 made recovery authority a durable pre-claim ledger reservation enforced by required resolver checks, delayed tombstone authority until post-delete fsync/rescan/key destruction, moved secret work into independently supervised sandboxes, bundled checksum-verified portable Node with Wrangler, and replaced the impossible actual-CAS-age claim with bounded pre-CAS truth plus mandatory post-result observation. Upstream contract repair `86b30da0b537d768761f8236bf2a423400395931` is recorded as Unit 13a0 prerequisite only.
- 2026-07-21 01:08: Tinfoil Round 5 made signer isolation executable on Linux and macOS with peer-credential-gated out-of-process supervision and hostile-child coverage, and added a lock-gated post-rename `PROMOTED` WAL state so neither verifiers nor projections can accept a visible but not durably promoted tombstone.
- 2026-07-21 01:35: Tinfoil Round 6 moved both handoff copies onto protected mains, replaced the unenforceable workflow bypass with a one-time-rooted OIDC App append broker whose token never enters Actions, pre-bound every source teardown signer before approval, required executable macOS deny-write and UID-exhaustion tests, and specified exact `E`/dispatch/append/`H` timing and cache bounds.
- 2026-07-21 02:00: Tinfoil Round 7 moved live root setup after hostile review into an append-before-mutation genesis journal, modeled real one-hour App tokens with broker-only custody/revocation containment, added broker-side actor and transition enforcement, defined `ProtectedMainV1`, preflighted final attestors before claim, and made final publication a serialized Durable Object prepare/CAS/observe mailbox operation.
- 2026-07-21 02:25: Tinfoil Round 8 made main check sources and ledger bypass principals exact, specified the root signature/code-manifest/journal ref and CAS exemption, closed token-mint crash containment before the provider call, moved all Git object creation into the broker from bounded mailbox bytes, and restored complete time equations plus total CAS-uncertainty recovery.
- 2026-07-21 02:46: Tinfoil Round 9 moved private provider queries and final compilation behind exact frozen-job approval, separated append state from per-invocation token teardown, made `E/F/H` response/timeout/error records and epoch inequalities executable, fixed the root manifest/SPKI/signature byte domain, and marked upstream `f324901fc246bf9743503ab5aa46f59f87ff230a` nonterminal pending a ledger-App substitution repair.
- 2026-07-21 03:05: Independently inspected remote successor `7411307777e9828cea5dc1b33d62434ab4ea2fdd`; its verifier now anchors the ledger App through exact protected delivery policy/root-event bytes and rejects coherent acknowledgment/event/bypass substitution. It remains a candidate until fresh source and delivery scrutiny converge.
- 2026-07-21 03:24: Tinfoil Round 10 repaired journal genesis/append mechanics, root and source-envelope credential custody, independent post-PROMOTED witnessing, pre-freeze renewable-query ordering, and the final timing budget; upstream `7411307777e9828cea5dc1b33d62434ab4ea2fdd` remains nonterminal pending removal of public absolute paths.
