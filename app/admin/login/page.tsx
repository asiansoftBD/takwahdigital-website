"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data: { error?: string } = await response.json();

      if (!response.ok) {
        setError(data.error || "Login failed.");
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch {
      setError("Unable to connect to the server.");
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
              Admin Login
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Sign in to manage your website content and media.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-slate-700"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="admin@example.com"
                autoComplete="email"
                required
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-[#2845D6] focus:ring-2 focus:ring-[#2845D6]/20"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-slate-700"
              >
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
                autoComplete="current-password"
                required
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-[#2845D6] focus:ring-2 focus:ring-[#2845D6]/20"
              />
            </div>

            {error && (
              <div
                role="alert"
                className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-[#2845D6] px-5 py-3 font-semibold text-white transition hover:bg-[#1A2CA3] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
             <div className="text-center">
             <a
                 href="/admin/forgot-password"
               className="text-sm font-semibold text-[#2845D6] hover:underline"
                >
              Forgot Password?
             </a>
            </div>

          </form>

          <p className="mt-6 text-center text-xs leading-5 text-slate-400">
            Authorized administrators only.
          </p>
        </div>
      </div>
    </main>
  );
}