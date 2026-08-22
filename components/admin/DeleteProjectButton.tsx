"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type DeleteProjectButtonProps = {
  projectId: number;
  projectTitle: string;
};

export default function DeleteProjectButton({
  projectId,
  projectTitle,
}: DeleteProjectButtonProps) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDelete() {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${projectTitle}"?`
    );

    if (!confirmed) {
      return;
    }

    setIsDeleting(true);

    try {
      const response = await fetch("/api/admin/projects", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: projectId,
        }),
      });

      const data = (await response.json()) as {
  error?: string;
};

if (!response.ok) {
  throw new Error(data.error || "Unable to delete project.");
}

      router.refresh();
    } catch (error) {
      console.error("Delete project error:", error);

      window.alert(
        error instanceof Error
          ? error.message
          : "Unable to delete project."
      );

      setIsDeleting(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={isDeleting}
      className="font-semibold text-red-600 hover:underline disabled:cursor-not-allowed disabled:opacity-50"
    >
      {isDeleting ? "Deleting..." : "Delete"}
    </button>
  );
}