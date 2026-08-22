import { execFileSync } from "node:child_process";
import { randomUUID, scrypt } from "node:crypto";
import { promisify } from "node:util";
import readline from "node:readline";

const scryptAsync = promisify(scrypt);

const email = "irakibul1984@gmail.com";

async function hashPassword(password: string): Promise<string> {
  const salt = randomUUID();

  const derivedKey = (await scryptAsync(
    password,
    salt,
    64
  )) as Buffer;

  return `${salt}:${derivedKey.toString("hex")}`;
}

async function askPassword(): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question("Enter your admin password: ", (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function main() {
  const password = await askPassword();

  if (!password) {
    throw new Error("Password cannot be empty.");
  }

  const passwordHash = await hashPassword(password);

  const sqlFile = ".wrangler-create-admin.sql";

  const sql = `
INSERT INTO admin_users (
  email,
  password_hash,
  is_active
)
VALUES (
  '${email}',
  '${passwordHash}',
  1
)
ON CONFLICT(email) DO UPDATE SET
  password_hash = excluded.password_hash,
  is_active = 1;
`;

  const fs = await import("node:fs");
  fs.writeFileSync(sqlFile, sql, "utf8");

  console.log("");
  console.log("Creating admin account...");

  try {
    execFileSync(
      "npx",
      [
        "wrangler",
        "d1",
        "execute",
        "takwahdigital-content",
        "--local",
        "--file",
        sqlFile,
      ],
      {
        stdio: "inherit",
        shell: true,
      }
    );

    console.log("");
    console.log("======================================");
    console.log("Admin account created successfully.");
    console.log("======================================");
    console.log(`Email: ${email}`);
  } finally {
    try {
      fs.unlinkSync(sqlFile);
    } catch {
      // Ignore cleanup errors.
    }
  }
}

main().catch((error) => {
  console.error("");
  console.error("Failed to create admin account.");
  console.error(error);
  process.exit(1);
});