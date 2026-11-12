import type { Metadata } from "next";
import { getNewUntil, isNewUntil } from "@/lib/newArrivals";
import { PRICE_CURRENCY, startingPriceText } from "@/lib/price";
import { productTags, type Taggable } from "@/lib/tags";

const BASE_URL = "https://eloreflorist.github.io";

export type ProductSection = "flowers" | "weddings" | "gifts";

export type ProductSeoInput = {
  slug: string;
  name: string;
  description: string;
  fullDescription?: string;
  images?: string[];
  inStock?: boolean;
  category?: string;
  price?: number;
};

const sectionLabel: Record<ProductSection, string> = {
  flowers: "Flower Arrangement",
  weddings: "Wedding Flowers",
  gifts: "Flower Gift",
};

function absoluteImage(path: string) {
  return path.startsWith("http") ? path : `${BASE_URL}${path}`;
}

export function getProductMetadata(
  product: ProductSeoInput | undefined,
  section: ProductSection
): Metadata {
  if (!product) {
    return { title: "Product not found – Èlore Florist" };
  }

  const newUntil = getNewUntil(product.slug);
  const isNew = Boolean(newUntil && isNewUntil(newUntil));
  const title = isNew
    ? `New ${product.name} – ${sectionLabel[section]} in Surabaya | Èlore Florist`
    : `${product.name} – ${sectionLabel[section]} in Surabaya | Èlore Florist`;
  const description = `${isNew ? `New at Èlore Florist in Surabaya. ${product.description}` : product.description}${
    typeof product.price === "number" ? ` ${startingPriceText(product.price)}.` : ""
  }`;
  const url = `${BASE_URL}/${section}/${product.slug}`;
  const image = product.images?.[0]
    ? absoluteImage(product.images[0])
    : `${BASE_URL}/elore_logo.png`;
  const tags = productTags(product, section).map((tag) => tag.label);

  return {
    title,
    description,
    keywords: tags,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: image }],
    },
  };
}

export function getProductSchema(product: ProductSeoInput, section: ProductSection) {
  const newUntil = getNewUntil(product.slug);
  const isNew = Boolean(newUntil && isNewUntil(newUntil));
  const tags = productTags(product as Taggable, section);
  const description = isNew
    ? `New at Èlore Florist in Surabaya. ${product.fullDescription || product.description}`
    : product.fullDescription || product.description;
  const withPrice = typeof product.price === "number"
    ? `${description} ${startingPriceText(product.price)}.`
    : description;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: withPrice,
    image: (product.images ?? []).map(absoluteImage),
    brand: { "@type": "Brand", name: "Èlore Florist" },
    category: product.category,
    ...(tags.length > 0 ? { keywords: tags.map((tag) => tag.label).join(", ") } : {}),
    ...((isNew && newUntil) || tags.length > 0
      ? {
          additionalProperty: [
            ...(isNew && newUntil
              ? [{
                  "@type": "PropertyValue",
                  name: "New arrival",
                  value: "New at Èlore Florist in Surabaya",
                  validThrough: `${newUntil}T23:59:59+07:00`,
                }]
              : []),
            ...tags.map((tag) => ({
              "@type": "PropertyValue",
              name: tag.group === "flower" ? "Flower" : "Occasion",
              value: tag.label,
            })),
          ],
        }
      : {}),
    offers: {
      "@type": "AggregateOffer",
      url: `${BASE_URL}/${section}/${product.slug}`,
      priceCurrency: PRICE_CURRENCY,
      ...(typeof product.price === "number" ? { lowPrice: product.price, offerCount: 1 } : {}),
      availability: product.inStock === false
        ? "https://schema.org/OutOfStock"
        : "https://schema.org/InStock",
      seller: {
        "@type": "Florist",
        name: "Èlore Florist",
      },
    },
  };
}
