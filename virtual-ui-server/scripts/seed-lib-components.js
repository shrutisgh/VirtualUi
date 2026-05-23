/**
 * Seeds MongoDB with public components from virtual-ui-lib/src/components.
 * Matches the tutorial step: prebuilt components visible on /component after sign-in.
 *
 * Usage: npm run seed
 */
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import Component from "../models/components.model.js";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const libComponentsDir = path.join(
  __dirname,
  "../../virtual-ui-lib/src/components"
);

function extractProps(code) {
  const match = code.match(
    /export\s+const\s+\w+\s*=\s*\(\s*\{([^}]*)\}/s
  );
  if (!match) return [];
  return match[1]
    .split(",")
    .map((p) => p.trim().split("=")[0].trim())
    .filter(Boolean);
}

async function seed() {
  if (!process.env.MONGODB_URL) {
    console.error("Missing MONGODB_URL in .env");
    process.exit(1);
  }

  await mongoose.connect(process.env.MONGODB_URL);
  console.log("Connected to MongoDB");

  if (!fs.existsSync(libComponentsDir)) {
    console.error("Library path not found:", libComponentsDir);
    process.exit(1);
  }

  const folders = fs
    .readdirSync(libComponentsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  let created = 0;
  let updated = 0;

  for (const folder of folders) {
    const filePath = path.join(libComponentsDir, folder, `${folder}.jsx`);
    if (!fs.existsSync(filePath)) continue;

    const code = fs.readFileSync(filePath, "utf8");
    const name = folder;
    const props = extractProps(code);

    const existing = await Component.findOne({ name, visibility: "public" });

    if (existing) {
      existing.code = code;
      existing.props = props;
      existing.npmPackage = "virtual-ui-lib";
      await existing.save();
      updated++;
    } else {
      await Component.create({
        name,
        code,
        props,
        visibility: "public",
        npmPackage: "virtual-ui-lib",
      });
      created++;
    }
  }

  console.log(`Seed complete: ${created} created, ${updated} updated (${folders.length} in lib).`);
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
