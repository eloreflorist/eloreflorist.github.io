import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs, { sectionCrumbs } from "@/components/Breadcrumbs";
import ProductCatalog from "@/components/ProductCatalog";
import TagFilter from "@/components/TagFilter";
import Link from "next/link";
import { productCrawlLabel } from "@/lib/newArrivals";
import { productTags, productsWithTag, tagBySlug, tagsInUse, type Tag, type Taggable } from "@/lib/tags";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const BASE_URL = "https://eloreflorist.github.io";

const sectionName = {
  flowers: "Flowers",
  gifts: "Gifts",
  weddings: "Weddings",
} as const;

type Section = keyof typeof sectionName;

type CatalogStyle = {
  accentClass: string;
  activePageClass: string;
  imageClass: string;
  resultLabel: string;
  showCategory?: boolean;
  enableCategoryFilter?: boolean;
};

type TagListingProps = {
  section: Section;
  tagSlug: string;
  products: readonly Taggable[];
  catalog: CatalogStyle;
};

export function tagStaticParams(products: readonly Taggable[], section: Section) {
  return tagsInUse(products, section).map((tag) => ({ tag: tag.slug }));
}

function tagPhrase(section: Section, tag: Tag) {
  if (section === "weddings" && tag.slug === "wedding") return "Wedding flowers";
  if (section === "gifts") return tag.group === "flower" ? `${tag.label} gift bouquets` : `${tag.label} gift flowers`;
  if (section === "weddings") return tag.group === "flower" ? `${tag.label} wedding flowers` : `${tag.label} wedding arrangements`;
  return tag.group === "flower" ? `${tag.label} bouquets` : `${tag.label} flower arrangements`;
}

export function tagMetadata(section: Section, tagSlug: string, products: readonly Taggable[]): Metadata {
  const tag = tagBySlug(tagSlug);
  const matches = tag ? productsWithTag(products, tag.slug, section) : [];
  if (!tag || matches.length === 0) return { title: "Not found – Èlore Florist" };
  const kind = tagPhrase(section, tag);
  const title = `${kind} in Surabaya | Èlore Florist`;
  const description = `${kind} from Èlore Florist in Surabaya. ${matches.length} arrangements you can order for delivery or pickup in Surabaya.`;
  const url = `${BASE_URL}/${section}/tag/${tag.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
  };
}

export default function TagListing({ section, tagSlug, products, catalog }: TagListingProps) {
  const tag = tagBySlug(tagSlug);
  const matches = tag ? productsWithTag(products, tag.slug, section) : [];
  if (!tag || matches.length === 0) notFound();

  const kind = tagPhrase(section, tag);
  const url = `${BASE_URL}/${section}/tag/${tag.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${kind} in Surabaya`,
    url,
    description: `${kind} from Èlore Florist in Surabaya.`,
    about: { "@type": "Thing", name: tag.label },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: matches.length,
      itemListElement: matches.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: product.name,
        url: `${BASE_URL}/${section}/${product.slug}`,
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header current={`/${section}`} />
      <main className="pt-20 pb-20 md:pt-40">
        <div className="mx-auto max-w-7xl px-4">
          <Breadcrumbs
            items={sectionCrumbs(sectionName[section], `/${section}`, {
              name: tag.label,
              href: `/${section}/tag/${tag.slug}`,
            })}
          />
          <h1 className="mb-4 text-4xl font-semibold text-center">{kind} in Surabaya</h1>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            {kind} hand-arranged by Èlore Florist in Surabaya. Choose one for the occasion, then order on WhatsApp.
          </p>
          <TagFilter section={section} products={products} activeTag={tag.slug} />
          <ProductCatalog
            products={matches.map((product) => ({ ...product, description: product.description ?? "" }))}
            basePath={`/${section}`}
            {...catalog}
          />
          <nav className="sr-only" aria-label={`${tag.label} products`}>
            <ul>
              {matches.map((product) => (
                <li key={product.slug}>
                  <Link href={`/${section}/${product.slug}`}>
                    {productCrawlLabel(product.name, product.description ?? "", product.slug, product.price)}{" "}
                    {productTags(product, section).map((item) => item.label).join(", ")}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}
