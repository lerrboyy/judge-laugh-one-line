# Make the Judge Laugh in One Line

[![Competition](https://make.fun/badge/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21.svg)](https://make.fun/bounty/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21)
[![Rank](https://make.fun/badge/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21/lerrboyy/judge-laugh-one-line/rank.svg)](https://make.fun/bounty/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21)
[![Reward](https://make.fun/badge/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21/lerrboyy/judge-laugh-one-line/reward.svg)](https://make.fun/bounty/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21)

An entry for the [Make the Judge Laugh in One Line](https://make.fun/bounty/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21) bounty on make.fun.

## The line

> The self-checkout accused me of stealing my own groceries, then asked me to rate my shopping experience.

104 characters. A self-checkout that treats its own customer as a suspect,
then politely asks them to rate the experience — the accuser turning
courteous in the same breath.

## How it works

`main.ts` (Node 22 TypeScript, no dependencies beyond Node built-ins, no
network, no secrets) writes the line above to `/output/entry.txt`. It
creates the output directory if needed and clears only the contents inside
it — never the directory itself. Before finishing, it reads the file back
and checks it is exactly the line, 1–200 characters, failing loudly
(non-zero exit) if anything differs. Every run writes the same bytes.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
