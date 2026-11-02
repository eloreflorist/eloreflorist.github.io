export default function Byline({ published, className = "mt-3" }: { published: string; className?: string }) {
  const label = new Date(`${published}T00:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <p className={`text-sm text-gray-500 ${className}`}>
      <time dateTime={published}>{label}</time>
      <span aria-hidden="true"> · </span>
      <span>Èlore Florist, Surabaya</span>
    </p>
  );
}
