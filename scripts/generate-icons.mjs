/**
 * Generate apple-touch-icon.png from favicon.svg
 *
 * Usage:
 *   npm install sharp --save-dev
 *   node scripts/generate-icons.mjs
 */

import sharp from "sharp";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const svg = readFileSync(resolve(root, "public/favicon.svg"));

await sharp(svg)
  .resize(180, 180)
  .png()
  .toFile(resolve(root, "public/apple-touch-icon.png"));

console.log("✓ public/apple-touch-icon.png (180×180)");
