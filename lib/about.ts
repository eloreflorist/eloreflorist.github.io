import { floristId, siteUrl } from "@/lib/guides";

export const aboutUrl = `${siteUrl}/about`;
export const storefrontImage = `${siteUrl}/shop/storefront.jpg`;

export const aboutAnswer =
  "Èlore Florist is a flower studio in Surabaya. The shop has arranged flowers for more than 2 years and has made about 1,000 bouquets, with quality in every arrangement.";

export const aboutParagraphs = [
  "The studio is at Jl. Siwalankerto Timur I No.1B, Siwalankerto, Surabaya 60236. From this shop, Èlore Florist makes hand-arranged bouquets for gifts, birthdays, graduations, anniversaries, and weddings in Surabaya.",
  "More than two years of daily arranging is behind the work. In that time the studio has made about 1,000 bouquets and flower products, from a single wrapped bunch to bridal flowers for a ceremony.",
  "Quality is the rule on every order. Stems are chosen for freshness, the shape is built to match the occasion, and the finished bouquet is meant to look the way it was promised. A quote is confirmed on WhatsApp because flower prices change with the season.",
  "You can pick the bouquet up at the studio or ask for delivery in Surabaya. Same-day delivery is often possible on Monday to Saturday when you message before midday. The shop is closed on Sunday.",
] as const;

export const aboutFacts = [
  { value: "2+ years", label: "Experience" },
  { value: "1,000+", label: "Bouquets and arrangements made" },
  { value: "Quality first", label: "Products" },
] as const;

export function aboutSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${aboutUrl}#about`,
    url: aboutUrl,
    name: "About Èlore Florist in Surabaya",
    description: `${aboutAnswer} ${aboutParagraphs.join(" ")}`,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#about-answer"],
    },
    image: storefrontImage,
    about: { "@id": floristId },
    mainEntity: {
      "@type": "Florist",
      "@id": floristId,
      name: "Èlore Florist",
      url: siteUrl,
      description: `${aboutAnswer} ${aboutParagraphs.join(" ")}`,
      additionalProperty: [
        { "@type": "PropertyValue", name: "Experience", value: "More than 2 years" },
        { "@type": "PropertyValue", name: "Bouquets made", value: "About 1,000" },
      ],
    },
  };
}
