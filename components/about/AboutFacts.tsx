type AboutFact = {
  value: string;
  label: string;
};

export default function AboutFacts({ facts }: { readonly facts: readonly AboutFact[] }) {
  return (
    <dl className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
      {facts.map((fact) => (
        <div key={fact.label} className="rounded-lg bg-gray-50 p-4 text-center">
          <dt className="text-2xl font-semibold text-primary">{fact.value}</dt>
          <dd className="mt-1 text-sm text-gray-600">{fact.label}</dd>
        </div>
      ))}
    </dl>
  );
}
