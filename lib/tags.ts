export type TagGroup = "flower" | "occasion";

export type Tag = {
  readonly slug: string;
  readonly label: string;
  readonly group: TagGroup;
  readonly words: readonly string[];
};

export type Taggable = {
  slug: string;
  name: string;
  category?: string;
  description?: string;
  fullDescription?: string;
  details?: string;
  includes?: string[];
  price?: number;
};

export const TAGS: readonly Tag[] = [
  { slug: "rose", label: "Rose", group: "flower", words: ["rose", "roses"] },
  { slug: "lily", label: "Lily", group: "flower", words: ["lily", "lilies", "calla"] },
  { slug: "orchid", label: "Orchid", group: "flower", words: ["orchid", "orchids"] },
  { slug: "tulip", label: "Tulip", group: "flower", words: ["tulip", "tulips"] },
  { slug: "sunflower", label: "Sunflower", group: "flower", words: ["sunflower", "sunflowers"] },
  { slug: "peony", label: "Peony", group: "flower", words: ["peony", "peonies"] },
  { slug: "hydrangea", label: "Hydrangea", group: "flower", words: ["hydrangea"] },
  { slug: "carnation", label: "Carnation", group: "flower", words: ["carnation", "carnations"] },
  { slug: "daisy", label: "Daisy", group: "flower", words: ["daisy", "daisies", "gerbera"] },
  { slug: "lavender", label: "Lavender", group: "flower", words: ["lavender"] },
  { slug: "tropical", label: "Tropical", group: "flower", words: ["tropical", "protea", "anthurium"] },
  { slug: "mixed", label: "Mixed bouquet", group: "flower", words: ["mixed bouquet", "mixed flowers", "wildflower"] },
  { slug: "anniversary", label: "Anniversary", group: "occasion", words: ["anniversary"] },
  { slug: "birthday", label: "Birthday", group: "occasion", words: ["birthday"] },
  { slug: "graduation", label: "Graduation", group: "occasion", words: ["graduation", "wisuda"] },
  { slug: "wedding", label: "Wedding", group: "occasion", words: ["wedding", "bridal", "bride"] },
  { slug: "romantic", label: "Romantic", group: "occasion", words: ["romantic", "romance", "valentine"] },
  { slug: "sympathy", label: "Sympathy", group: "occasion", words: ["sympathy", "condolence"] },
  { slug: "congratulations", label: "Congratulations", group: "occasion", words: ["congratulat", "new job", "retirement"] },
  { slug: "thank-you", label: "Thank you", group: "occasion", words: ["thank you", "thank-you", "appreciation", "hostess"] },
  { slug: "get-well", label: "Get well", group: "occasion", words: ["get well", "get-well", "healing"] },
  { slug: "mothers-day", label: "Mother's Day", group: "occasion", words: ["mother"] },
  { slug: "engagement", label: "Engagement", group: "occasion", words: ["engagement"] },
  { slug: "just-because", label: "Just because", group: "occasion", words: ["just because", "just-because"] },
];

const categoryTag: Record<string, string> = {
  Roses: "rose",
  Lilies: "lily",
  Orchids: "orchid",
  Tropical: "tropical",
  "Mixed Bouquets": "mixed",
};

function textOf(product: Taggable) {
  return [
    product.slug,
    product.name,
    product.category,
    product.description,
    product.fullDescription,
    product.details,
    ...(product.includes ?? []),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function mentions(text: string, word: string) {
  const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(?:^|[^a-z])${escaped}`, "i").test(text);
}

export function tagBySlug(slug: string) {
  return TAGS.find((tag) => tag.slug === slug);
}

export function productTags(product: Taggable, section?: "flowers" | "gifts" | "weddings"): Tag[] {
  const text = textOf(product);
  const slugs = new Set<string>();
  for (const tag of TAGS) {
    if (tag.words.some((word) => mentions(text, word))) slugs.add(tag.slug);
  }
  const fromCategory = product.category ? categoryTag[product.category] : undefined;
  if (fromCategory) slugs.add(fromCategory);
  if (section === "weddings") slugs.add("wedding");
  return TAGS.filter((tag) => slugs.has(tag.slug));
}

export function productsWithTag<T extends Taggable>(products: readonly T[], slug: string, section?: "flowers" | "gifts" | "weddings") {
  return products.filter((product) => productTags(product, section).some((tag) => tag.slug === slug));
}

export function tagsInUse<T extends Taggable>(products: readonly T[], section?: "flowers" | "gifts" | "weddings") {
  const slugs = new Set<string>();
  for (const product of products) {
    for (const tag of productTags(product, section)) slugs.add(tag.slug);
  }
  return TAGS.filter((tag) => slugs.has(tag.slug));
}
