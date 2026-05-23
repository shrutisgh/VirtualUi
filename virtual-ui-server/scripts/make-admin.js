/**
 * Promote a user to admin (tutorial: set role in MongoDB Compass).
 *
 * Usage: npm run make-admin -- your@gmail.com
 */
import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "../models/user.model.js";

dotenv.config();

const email = process.argv[2];

if (!email) {
  console.error("Usage: npm run make-admin -- your@gmail.com");
  process.exit(1);
}

async function run() {
  await mongoose.connect(process.env.MONGODB_URL);

  const user = await User.findOneAndUpdate(
    { email },
    { role: "admin" },
    { new: true }
  );

  if (!user) {
    console.error(`No user found with email: ${email}`);
    console.error("Sign in with Google once in the app, then run this again.");
    process.exit(1);
  }

  console.log(`Admin granted: ${user.name} (${user.email})`);
  await mongoose.disconnect();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
