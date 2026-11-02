import type { ReactNode } from "react";

export default function Prose({ children }: { children: ReactNode }) {
  return <p className="leading-relaxed text-gray-700">{children}</p>;
}
