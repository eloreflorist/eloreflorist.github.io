import type { ReactNode } from "react";

export default function Note({ label, children }: { label: string; children: ReactNode }) {
  return (
    <aside className="border-l-2 border-primary pl-4">
      <p className="text-sm font-semibold tracking-wide text-primary">{label}</p>
      <div className="mt-2 leading-relaxed text-gray-700">{children}</div>
    </aside>
  );
}
