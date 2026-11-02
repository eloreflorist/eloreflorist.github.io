import { guideAnswerId } from "@/lib/guides";
import type { ReactNode } from "react";

export default function Answer({ children }: { children: ReactNode }) {
  return (
    <p id={guideAnswerId} className="text-lg leading-relaxed text-gray-800">
      {children}
    </p>
  );
}
