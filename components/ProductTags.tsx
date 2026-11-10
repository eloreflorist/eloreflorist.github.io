import Link from "next/link";
import { productTags, type Taggable } from "@/lib/tags";

type ProductTagsProps = {
  product: Taggable;
  section: "flowers" | "gifts" | "weddings";
};

export default function ProductTags({ product, section }: ProductTagsProps) {
  const tags = productTags(product, section);
  if (tags.length === 0) return null;

  return (
    <nav className="mb-6" aria-label="Suitable for">
      <ul className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li key={tag.slug}>
            <Link
              href={`/${section}/tag/${tag.slug}`}
              className="inline-block rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-700 hover:bg-gray-50"
            >
              {tag.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
