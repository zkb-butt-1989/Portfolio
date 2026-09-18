"use client";

export function PrintResumeButton() {
  return (
    <button
      type="button"
      className="text-zinc-700 hover:underline"
      onClick={() => window.print()}
    >
      Print / Save as PDF
    </button>
  );
}
