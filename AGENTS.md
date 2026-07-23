# AGENTS.md - Spoonjoy Delivery

This repository is Spoonjoy's public cross-client delivery control plane. It owns contracts, authorization, evidence validation, finalization, and cleanup coordination. It does not own Spoonjoy domain behavior or provider credentials.

## Workflow

- Use the installed `work-planner` and `work-doer` skills for substantial work.
- Keep planning and doing documents under `<agent>/tasks/` on an agent-scoped branch in a dedicated worktree.
- The adjacent doing document is the implementation source of truth. Follow lexical document order for each unit's first eligible invocation. A closed result without a declared route derives exactly the next executable heading; a declared exact-successor route overrides that lexical successor. Unit 67 alone may emit successful `stop`, while Unit 64a3 and Unit 65r alone may emit fail-closed `planning_revision_required` stop through their declared branches. Same-unit, backward, and blocked-resume routes use the doing document's durable repeatable-invocation lifecycle; a heading is not complete until its terminal cursor/acceptance predicate holds. Use strict test-then-implement-then-coverage sequencing.
- Before Unit 67 emits completed or Unit 64a3/Unit 65r emits planning revision, the root coordinating host must fsync and register the exact private `RootTaskPostStopCleanupCursorV1` in Desk with that stop reason. After the execution stop, the host must observe executor exit or atomically relinquish the same-process executor role, relocate outside the target worktree, acquire the cleanup lease, and consume one cursor action at a time. Session start/resumption must finish the cursor, prove terminal-ledger bytes unchanged, and produce its terminal receipt before final human completion or a replacement planner cycle. The cursor may remove only its manifest-bound current local delivery worktree/branch and private cleanup state; it grants no source/provider read or mutation authority.
- Reviewer convergence requires two consecutive fresh no-context scrutiny passes over one exact immutable commit/tree. Slot 1 is exactly Tinfoil Hat with the root-bound authority/liveness/recovery/transition lens; only its exact clean terminal opens slot 2. Slot 2 is exactly Stranger With Candy with the root-bound usability/operability/evidence/cleanup lens. Both slots bind zero prior conversation items, exact prompt/lens digests, distinct task identities, and the same head/tree. Any finding, wrong identity/order/lens/context, or reviewed-tree change resets the sequence.
- Do not start implementation while the doing document is `NEEDS_REVIEW`.

## Ownership Boundaries

- Before a protected owner-release handoff validates, this delivery task may change only this delivery repository and explicitly authorized inert delivery-control-plane resources.
- The retained source owner may, under its still-exclusive authority, execute only the root-authorized `source-guardian-cutover-v1`, the disjoint `source-protection-observer-v1`, byte-identical receiver-ack merges through protected web/native mains, and the stage-tagged `source-owner-provider-evidence-supersession-v1` required to complete that handoff. The Observer operation is limited to installing the exact predeclared App on web/native with only `metadata:read`, `administration:read`, `contents:read`, `checks:read`, `pull_requests:read`, and `actions:read`; generating/importing its non-exportable key into the source-owned read-only broker; exposing the closed no-redirect GET adapter used only by Unit 13a3 for exact refs/commits/trees/blobs/check runs/protection/rulesets, retained-owner-bound pull requests and review lists, and retained-owner-bound workflow/run records; and proving zero write, bypass, general-proxy, redirect, undeclared pagination, or credential-export route. Any list endpoint is fixed to one declared page and fails closed when a continuation link exists. Evidence supersession is legal only after Unit 13a3 emits exact `ProviderEvidenceSupersessionRequiredV1(stage=pre_ack | post_ack)` for a definitively invalid immutable envelope with zero ownership transfer. It may query current retained-owner provider state, sign one new immutable provider-evidence object, append one predecessor-bound outbound generation at a distinct protected source-owned release-ledger path, and send its immutable commit/path/SHA-256 locator through a stable one-action cursor. `pre_ack` additionally requires authoritative zero receiver-ack cursor/append/record-write/commit/push/PR/review/merge/message effect; `post_ack` preserves every old acknowledgment/event/copy as immutable non-transfer audit evidence. It cannot change product code, deploy/provider/TestFlight state, build, notification, cleanup, old acknowledgment/outbound bytes, or any source main except the later byte-identical acknowledgment copies for that new generation. Those retained-owner actions are handoff inputs, not authority granted to this task, and unrelated source mutation remains forbidden.
- This delivery task must not mutate `spoonjoy-v2`, `spoonjoy-apple`, production Cloudflare, App Store Connect, TestFlight, notifications, source worktrees, or source-owned brokers until the complete protected handoff validates. Its sole pre-handoff source access is Unit 13a3's bounded read-only GitHub verification of exact retained-owner-supplied web/native containing commits, protected-main files, checks, and protection state; that verification may not checkout source, use source/provider-release credentials, rerun work, review, merge, write, or call any mutation endpoint.
- Provider operations require the exact claimed authorization, reviewed operation graph, authoritative pre/post state, and terminal receipt defined by the doing document.

## Quality Gates

- Write failing tests before implementation.
- Require 100% statements, branches, functions, and lines for all production logic.
- Treat warnings as failures. Do not suppress warnings or coverage.
- Keep strict TypeScript and fail closed on unknown fields, states, identities, transitions, or provider results.
- Run focused tests during each unit and the full repository gate at convergence units and before every commit.

## Public Evidence

- This repository is public. Never commit secrets, credentials, tokens, personal data, private filesystem paths, raw provider responses, device identifiers, or unredacted account evidence.
- Keep raw transcripts and hostile fixtures in private ephemeral storage until the doing document's sanitization gate permits public summaries and digests.
- Cleanup must use exact run-owned manifests and must not delete pre-existing, dirty, ambiguous, or separately owned state.

## Git

- Keep commits atomic and push each completed logical unit.
- Never rewrite shared history or discard unrelated changes.
- Preserve protected ownership, review, CI, deployment, and cleanup evidence by exact commit and content digest.

## Completion

Notification is a post-completion root-host epilogue, not part of the execution ledger or post-stop cleanup transaction. First require exact `RootTaskPostStopCleanupCompletedV1(stopReason="completed")`, final terminal-ledger equality, zero residue, and no remaining cleanup action. That completed receipt must itself contain typed lowercase 40-hex `deliveryCommit` and canonical public `releaseSetId`, atomically copied from its terminal-ledger Release Set evidence, so restart requires no deleted private map or external query. Derive `<canonical completion summary>` as the exact public-safe UTF-8 string `completionSummaryV1 task=cross-client-delivery receipt=<receiptSha256> delivery=<deliveryCommit> releaseSet=<releaseSetId>`, where `receiptSha256` is the lowercase 64-hex SHA-256 of that exact completion receipt and the other values are read only from those receipt fields. Resolve the sole permanent private `CompletionNotificationRegistryV1` root from the root-host task registry, opened component-by-component with `O_DIRECTORY|O_NOFOLLOW`; require one canonical absolute root, current root-host ownership, mode `0700`, regular directory identity, and byte-identical registry descriptor on every restart. Every contender independently derives the sole marker filename `completion-notification-attempt-v1--cross-client-delivery--<receiptSha256>.json` directly beneath that root; aliases, case changes, nested components, traversal, symlinks, or any other receipt/task key are invalid. Atomically create `CompletionNotificationAttemptV1(state="dispatch_started")` at that exact derived location with `openat(registryFd, markerName, O_CREAT|O_EXCL|O_WRONLY|O_NOFOLLOW, 0600)`, write canonical bytes binding those values, the registry descriptor digest, exact command/payload digest, root-task lifecycle, attempt index one, and a nonrenewable notification lease, then fsync the file and registry directory. Only the successful exclusive creator owns the lease and may launch; `EEXIST`, any second contender, root/filename/bytes/symlink/owner/mode/link-count drift, or any pre-existing marker forbids launch. Restart lookup derives the same filename from the completed receipt and never scans or selects a path. Treat the whole Ouro child command, including queue and wake behavior, as Ouro-owned; do not inspect its queue internals, infer delivery, or retry after the marker exists. Report nonzero exit, fallback output, response loss, or crash as notification `attempted_unknown_or_failed` without reopening the genuine completion receipt. A planning-revision stop is incomplete and must not notify.

When the task is genuinely complete, notify Slugger with:

```bash
ouro msg --to slugger "Done: <canonical completion summary>"
```
