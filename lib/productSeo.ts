import type { Metadata } from "next";
import { getNewUntil, isNewUntil } from "@/lib/newArrivals";

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
  const description = isNew
    ? `New at Èlore Florist in Surabaya. ${product.description}`
    : product.description;
  const url = `${BASE_URL}/${section}/${product.slug}`;
  const image = product.images?.[0]
    ? absoluteImage(product.images[0])
    : `${BASE_URL}/elore_logo.png`;

  return {
    title,
    description,
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

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: isNew
      ? `New at Èlore Florist in Surabaya. ${product.fullDescription || product.description}`
      : product.fullDescription || product.description,
    image: (product.images ?? []).map(absoluteImage),
    brand: { "@type": "Brand", name: "Èlore Florist" },
    category: product.category,
    ...(isNew && newUntil
      ? {
          additionalProperty: {
            "@type": "PropertyValue",
            name: "New arrival",
            value: "New at Èlore Florist in Surabaya",
            validThrough: `${newUntil}T23:59:59+07:00`,
          },
        }
      : {}),
    offers: {
      "@type": "Offer",
      url: `${BASE_URL}/${section}/${product.slug}`,
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
