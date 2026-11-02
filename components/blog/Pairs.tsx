type Pair = {
  term: string;
  text: string;
};

export default function Pairs({ items }: { items: readonly Pair[] }) {
  return (
    <dl className="divide-y divide-secondary border-y border-secondary">
      {items.map((item) => (
        <div key={item.term} className="py-4 md:grid md:grid-cols-3 md:gap-6">
          <dt className="font-semibold text-primary">{item.term}</dt>
          <dd className="mt-1 leading-relaxed text-gray-700 md:col-span-2 md:mt-0">{item.text}</dd>
        </div>
      ))}
    </dl>
  );
}
