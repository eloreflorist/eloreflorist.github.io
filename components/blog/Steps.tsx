import type { GuideStep } from "@/lib/guides";

export default function Steps({ items }: { items: readonly GuideStep[] }) {
  return (
    <ol className="list-none space-y-6 p-0">
      {items.map((step, index) => (
        <li key={step.title} className="flex gap-4">
          <span
            className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center text-sm font-semibold text-primary"
            aria-hidden="true"
          >
            {index + 1}
          </span>
          <div>
            <h3 className="font-semibold text-primary">{step.title}</h3>
            <p className="mt-1 leading-relaxed text-gray-700">{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
