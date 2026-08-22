"use client";

import { FormEvent, useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMessage("");
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data: { message?: string; error?: string } =
        await response.json();

      if (!response.ok) {
        setError(data.error || "Unable to process request.");
        return;
      }

      setMessage(
        data.message ||
          "If the email exists, password reset instructions have been generated."
      );
    } catch {
      setError("Unable to process request.");
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
              Forgot Password?
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Enter your administrator email address to begin the password
              recovery process.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-slate-700"
              >
                Admin Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="irakibul1984@gmail.com"
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
              {loading ? "Processing..." : "Continue"}
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