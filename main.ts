import { mkdirSync, writeFileSync } from "node:fs";

// One Line, One Laugh — v3 final revision.
// Last polish: "Perfect" instead of "Great" — a smugger alarm voice,
// one word, same length, punchier reply.
const LINE =
  "I told my alarm clock we need to talk. It said, \"Perfect — I'll wake you up at 5 a.m. to discuss it.\"";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
