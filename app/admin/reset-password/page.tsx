"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMessage("");
    setError("");

    if (!token) {
      setError("Invalid or missing password reset token.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/admin/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          password,
        }),
      });

      const data: { message?: string; error?: string } =
        await response.json();

      if (!response.ok) {
        setError(data.error || "Unable to reset password.");
        return;
      }

      setMessage(
        data.message || "Password reset successfully."
      );

      setPassword("");
      setConfirmPassword("");
    } catch {
      setError("Unable to process password reset.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-6 py-12">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg sm:p-10">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F68048]">
              Takwah Digital
            </p>

            <h1 className="mt-3 text-3xl font-bold text-[#0D1A63]">
              Reset Password
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Create a new password for your administrator account.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-slate-700"
              >
                New Password
              </label>

              <input
                id="password"
                type="password"
                required
                minLength={8}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter new password"
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-[#2845D6] focus:ring-2 focus:ring-[#2845D6]/20"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-semibold text-slate-700"
              >
                Confirm Password
              </label>

              <input
                id="confirmPassword"
                type="password"
                required
                minLength={8}
                value={confirmPassword}
                onChange={(event) =>
                  setConfirmPassword(event.target.value)
                }
                placeholder="Enter password again"
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-[#2845D6] focus:ring-2 focus:ring-[#2845D6]/20"
              />
            </div>

            {error && (
              <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </p>
            )}

            {message && (
              <p className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-[#2845D6] px-5 py-3 font-semibold text-white transition hover:bg-[#1A2CA3] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <a
              href="/admin/login"
              className="text-sm font-semibold text-[#2845D6] hover:underline"
            >
              Back to Admin Login
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}