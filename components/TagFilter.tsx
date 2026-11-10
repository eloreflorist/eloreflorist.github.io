import Link from "next/link";
import { tagsInUse, type TagGroup, type Taggable } from "@/lib/tags";

const groups: { id: TagGroup; label: string }[] = [
  { id: "flower", label: "Flowers" },
  { id: "occasion", label: "Occasions" },
];

type TagFilterProps = {
  section: "flowers" | "gifts" | "weddings";
  products: readonly Taggable[];
  activeTag?: string;
};

export default function TagFilter({ section, products, activeTag }: TagFilterProps) {
  const tags = tagsInUse(products, section);

  return (
    <nav className="mb-8 space-y-3" aria-label="Filter by flower or occasion">
      {groups.map((group) => {
        const items = tags.filter((tag) => tag.group === group.id);
        if (items.length === 0) return null;
        return (
          <div key={group.id}>
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">{group.label}</p>
            <ul className="flex flex-wrap gap-2">
              {group.id === "flower" ? (
                <li>
                  <Link
                    href={`/${section}`}
                    aria-current={activeTag ? undefined : "page"}
                    className={`inline-block rounded-full border px-3 py-1 text-sm ${
                      activeTag ? "border-gray-300 text-gray-700 hover:bg-gray-50" : "border-primary bg-secondary text-primary"
                    }`}
                  >
                    All
                  </Link>
                </li>
              ) : null}
              {items.map((tag) => {
                const active = tag.slug === activeTag;
                return (
                  <li key={tag.slug}>
                    <Link
                      href={`/${section}/tag/${tag.slug}`}
                      aria-current={active ? "page" : undefined}
                      className={`inline-block rounded-full border px-3 py-1 text-sm ${
                        active ? "border-primary bg-secondary text-primary" : "border-gray-300 text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {tag.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </nav>
  );
}
