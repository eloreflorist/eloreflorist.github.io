export const siteUrl = "https://eloreflorist.github.io";
export const shareImage = `${siteUrl}/pic/1/a.jpg`;
export const priceRange = "Rp. 32.000-240.000";

export function fitTitle(lead: string) {
  const options = [
    `Order ${lead} in Surabaya | Èlore Florist`,
    `${lead} bouquet in Surabaya | Èlore Florist`,
    `${lead} in Surabaya | Èlore Florist`,
    `${lead} from Èlore Florist Surabaya`,
    `${lead} | Èlore Florist Surabaya`,
    `${lead} | Èlore Florist`,
  ];
  const unique = [...new Set(options)].filter((title) => title.length <= 60);
  return unique.find((title) => title.length >= 50) ?? unique.sort((a, b) => b.length - a.length)[0] ?? lead.slice(0, 60);
}

export function collectionSchema(
  name: string,
  url: string,
  description: string,
  items: readonly { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    url,
    description,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: item.url,
      })),
    },
  };
}
