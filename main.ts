import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "revert: \"delete the database\" was not a metaphor in my training data";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Read-back self-check: the file must hold exactly the entry, 1-200 chars,
// a single line, and more than whitespace.
const back = readFileSync(outPath, "utf8");
if (back !== ENTRY) {
  throw new Error("read-back mismatch: entry.txt does not match the entry");
}
if (back.length < 1 || back.length > 200) {
  throw new Error(`entry length ${back.length} outside the 1-200 gate`);
}
if (back.includes("\n") || back.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}
if (back !== back.trim()) {
  throw new Error("entry must not have leading or trailing whitespace");
}
if (!/^(fix|revert|chore|hotfix)(\([^)]*\))?: /.test(back)) {
  throw new Error("entry must read like a commit message (type prefix)");
}
const byteLen = Buffer.byteLength(back, "utf8");
if (byteLen !== back.length) {
  throw new Error("entry must be plain ASCII-length text");
}
