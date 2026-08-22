import { scrypt } from "node:crypto";
import { promisify } from "node:util";

const scryptAsync = promisify(scrypt);

export async function hashPassword(password: string): Promise<string> {
  const salt = crypto.randomUUID();

  const derivedKey = (await scryptAsync(
    password,
    salt,
    64
  )) as Buffer;

  return `${salt}:${derivedKey.toString("hex")}`;
}