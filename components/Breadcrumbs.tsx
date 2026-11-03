import Link from "next/link";
import { siteUrl } from "@/lib/guides";

export type Crumb = {
  readonly name: string;
  readonly href: string;
};

const homeCrumb: Crumb = { name: "Home", href: "/" };

export function sectionCrumbs(name: string, href: string, current?: Crumb): readonly Crumb[] {
  const section: Crumb = { name, href };
  if (!current) return [homeCrumb, section];
  return [homeCrumb, section, current];
}

function absoluteUrl(href: string) {
  if (href.startsWith("http://") || href.startsWith("https://")) return href;
  if (href === "/") return siteUrl;
  return `${siteUrl}${href}`;
}

export default function Breadcrumbs({ items }: { readonly items: readonly Crumb[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav className="mb-8 text-sm text-gray-500" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1;
          return (
            <li key={`${item.href}-${index}`} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {isCurrent ? (
                <span aria-current="page" className="font-medium text-primary">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className="hover:underline">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
      </nav>
    </>
  );
}
