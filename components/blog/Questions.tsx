import type { GuideFaq } from "@/lib/guides";

export default function Questions({ items }: { items: readonly GuideFaq[] }) {
  return (
    <div className="divide-y divide-secondary border-y border-secondary">
      {items.map((item) => (
        <details key={item.question} className="group">
          <summary className="faq-summary flex cursor-pointer items-start justify-between gap-4 py-4 text-left">
            <h3 className="text-lg font-semibold text-primary">{item.question}</h3>
            <span className="mt-1 shrink-0 text-gray-400 transition-transform group-open:rotate-180" aria-hidden="true">
              ▼
            </span>
          </summary>
          <p className="pb-4 leading-relaxed text-gray-700">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
