import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The battery's last text to its charger — the cheating-affair angle:
// the charger kept "optimizing" all day while the battery waited at 1%,
// so the battery is now seeing a power bank behind the charger's back.
const LINE =
  "I'm at 1% while you 'optimize charging' — enjoy the outlet, I'm seeing a power bank behind your back.";

// Gate guard: one non-blank line, 1–200 characters.
if (!LINE.trim() || LINE.length < 1 || LINE.length > 200) {
  throw new Error(
    `entry must be 1-200 non-blank characters, got ${LINE.length}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
