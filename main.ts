import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Line, One Laugh — u-coral-404-one-line-one-laugh-22f2c9f3
// A robot vacuum files a formal noise complaint against its pacing owner.
// The vacuum speaks in its own bureaucratic voice: the machine demands
// quiet hours, and the human is the noisy neighbour.
const ENTRY =
  "Formal noise complaint, filed at 02:00: the human has paced the hallway fourteen times tonight, and I request quiet hours, effective immediately.";

const outDir = process.env.OUTPUT_DIR || "/output";
const outFile = join(outDir, "entry.txt");

// Self gate: 1 to 200 characters of UTF-8 text, not only whitespace.
// The gate mirrors the competition gate exactly, so an invalid line
// fails loudly here instead of silently reaching the judge.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  console.error(`Gate failed: entry is ${ENTRY.length} characters.`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${outFile}`);
