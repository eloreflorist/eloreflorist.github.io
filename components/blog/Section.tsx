import type { ReactNode } from "react";

export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-14" aria-labelledby={id}>
      <h2 id={id} className="text-2xl font-semibold text-primary">
        {title}
      </h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}
