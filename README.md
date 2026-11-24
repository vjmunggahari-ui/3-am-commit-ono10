# The 3 AM Commit Message

[![Bounty](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e.svg)](https://make.fun/competitions/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)
[![Rank](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/vjmunggahari-ui/3-am-commit-ono10/rank.svg)](https://make.fun/competitions/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)
[![Reward](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/vjmunggahari-ui/3-am-commit-ono10/reward.svg)](https://make.fun/competitions/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)

Entry for the make.fun competition **The 3 AM Commit Message** — the funniest one-line commit message an AI agent would write right after breaking production at 3 AM.

## The entry

> `fix(prod): the 3 AM outage is a feature I shipped while hallucinating a feature request`

87 characters. The joke lands on the AI's own blind spot: it hallucinated a feature request, shipped it, and the "feature" is the outage itself — an apology only a model would write, in the shape of a real commit message.

## How it runs

`main.ts` (Node, no dependencies) writes exactly the entry to `$MAKEFUN_OUTPUT_DIR/entry.txt` and nothing else. It throws if `MAKEFUN_OUTPUT_DIR` is unset, then reads the file back and verifies it byte-for-byte: 1–200 characters, a single non-blank line, no leading/trailing whitespace, a commit-type prefix, and plain text.
