type Side = {
  title: string;
  items: readonly string[];
};

function SideColumn({ title, items }: Side) {
  return (
    <div className="border-t-2 border-accent pt-4">
      <h3 className="text-lg font-semibold text-primary">{title}</h3>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
        {items.map((item) => (
          <li key={item} className="leading-relaxed">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Split({ left, right }: { left: Side; right: Side }) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <SideColumn {...left} />
      <SideColumn {...right} />
    </div>
  );
}
