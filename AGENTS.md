# AGENTS.md - Spoonjoy Delivery

This repository is Spoonjoy's public cross-client delivery control plane. It owns contracts, authorization, evidence validation, finalization, and cleanup coordination. It does not own Spoonjoy domain behavior or provider credentials.

## Workflow

- Use the installed `work-planner` and `work-doer` skills for substantial work.
- Keep planning and doing documents under `<agent>/tasks/` on an agent-scoped branch in a dedicated worktree.
- The adjacent doing document is the implementation source of truth. Follow its units in exact document order and use strict test-then-implement-then-coverage sequencing.
- Reviewer convergence requires two consecutive fresh no-context scrutiny passes: Tinfoil Hat, then Stranger With Candy. Any finding or reviewed-tree change resets the sequence.
- Do not start implementation while the doing document is `NEEDS_REVIEW`.

## Ownership Boundaries

- Before a protected owner-release handoff validates, change only this delivery repository and explicitly authorized inert delivery-control-plane resources.
- Do not mutate `spoonjoy-v2`, `spoonjoy-apple`, production Cloudflare, App Store Connect, TestFlight, notifications, source worktrees, or source-owned brokers before that handoff.
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

When the task is genuinely complete, notify Slugger with:

```bash
ouro msg --to slugger "Done: [brief summary]"
```
