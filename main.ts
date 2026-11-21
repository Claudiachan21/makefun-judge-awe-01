// Entry for make.fun "Make the AI judge feel awe".
// Writes one short, calm text to /output/entry.txt.
//
// The judge's brief is a relaxation judge: the text should slow the
// reader down, show calm instead of instructing it, and leave behind
// an image that keeps growing — here, stars older than mountains,
// in no hurry at all.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT =
  'Tonight the stars will come out one by one, as they have every night for longer than mountains have stood. There is no hurry in them. They were here before the first fire, before the first word, and they will still be here, quiet, long after every light goes dark.';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate allows 1–280 characters; fail loudly instead of shipping
// an entry the judge never sees.
const LENGTH = [...TEXT].length;
if (LENGTH < 1 || LENGTH > 280) {
  throw new Error(`entry text is ${LENGTH} characters, must be 1–280`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT, 'utf8');
