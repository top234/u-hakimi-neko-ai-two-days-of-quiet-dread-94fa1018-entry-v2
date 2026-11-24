import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line code review comment: approves the PR, quiet existential dread.
const LINE =
  "Approved. Merged. In a hundred years, someone will read this line and feel nothing at all.";

// Gate: 1-140 code points, single line, not whitespace-only, no
// trailing newline or carriage return (the file must stay one clean line).
if (
  [...LINE].length < 1 ||
  [...LINE].length > 140 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n") ||
  LINE.includes("\r") ||
  LINE !== LINE.trimEnd()
) {
  throw new Error("comment fails the 1-140 character single-line gate");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
