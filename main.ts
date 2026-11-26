import { existsSync, mkdirSync, readdirSync, rmSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one funny line. A self-checkout that treats its own customer as a
// suspect, then politely asks them to rate the experience.
const LINE =
  "The self-checkout accused me of stealing my own groceries, then asked me to rate my shopping experience.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

function fail(message: string): never {
  console.error(`judge-laugh-one-line: ${message}`);
  process.exit(1);
}

function main(): void {
  // The gate requires 1-200 characters, so refuse to write anything
  // outside that range instead of producing an invalid entry.
  if (LINE.length < 1 || LINE.length > 200) {
    fail(`line is ${LINE.length} characters, outside the 1-200 range`);
  }
  if (LINE.trim().length === 0) {
    fail("line is only whitespace");
  }

  // Make sure the output directory exists, then clear ONLY what is inside
  // it. The directory itself is the grader's mount point and must never
  // be removed.
  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  for (const name of readdirSync(OUTPUT_DIR)) {
    rmSync(join(OUTPUT_DIR, name), { recursive: true, force: true });
  }

  writeFileSync(OUTPUT_FILE, LINE, "utf8");

  // Self-check: read the file back and confirm it is byte-for-byte the
  // line we meant to write, within the 1-200 character gate.
  const written = readFileSync(OUTPUT_FILE, "utf8");
  if (written !== LINE) {
    fail("entry.txt does not match the line exactly");
  }
  if (written.length < 1 || written.length > 200) {
    fail(`entry.txt is ${written.length} characters, outside the 1-200 range`);
  }

  console.log(`wrote ${written.length} characters to ${OUTPUT_FILE}`);
}

main();
