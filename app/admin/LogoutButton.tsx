"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);

    try {
      const response = await fetch("/api/admin/logout", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Logout failed.");
      }

      router.push("/admin/login");
      router.refresh();
    } catch {
      setLoading(false);
      alert("Unable to log out. Please try again.");
    }
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={loading}
      className="rounded-lg bg-[#F68048] px-5 py-3 font-semibold text-white transition hover:bg-[#e56d38] disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading ? "Signing Out..." : "Sign Out"}
    </button>
  );
}