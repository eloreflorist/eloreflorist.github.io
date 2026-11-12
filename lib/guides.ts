import type { Metadata } from "next";

export const siteUrl = "https://eloreflorist.github.io";
export const floristId = `${siteUrl}/#florist`;
export const blogUrl = `${siteUrl}/blog`;
export const blogId = `${blogUrl}#blog`;
export const guideAnswerId = "guide-answer";

export type Guide = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  published: string;
  updated: string;
  excerpt: string;
};

export type GuideFaq = {
  question: string;
  answer: string;
};

export type GuideStep = {
  title: string;
  text: string;
};

export function guideUrl(slug: string) {
  return `${blogUrl}/${slug}`;
}

export function guideMetadata(guide: Guide): Metadata {
  const url = guideUrl(guide.slug);
  const image = `${siteUrl}/pic/1/a.jpg`;

  return {
    title: guide.metaTitle,
    description: guide.description,
    authors: [{ name: "Èlore Florist", url: siteUrl }],
    alternates: { canonical: url },
    openGraph: {
      title: guide.metaTitle,
      description: guide.description,
      url,
      siteName: "Èlore Florist",
      locale: "en_ID",
      type: "article",
      publishedTime: guide.published,
      modifiedTime: guide.updated,
      images: [{ url: image, alt: "Èlore Florist" }],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.metaTitle,
      description: guide.description,
      images: [image],
    },
  };
}

export const artificialOrFresh: Guide = {
  slug: "artificial-or-fresh-flowers",
  title: "When to Choose Artificial or Fresh Flowers",
  metaTitle: "Artificial or Fresh Flowers: How to Decide | Èlore Florist",
  description:
    "Fresh flowers suit a gift or a one-day event. Artificial flowers suit a display that must last in Surabaya heat. Advice from Èlore Florist in Surabaya.",
  published: "2026-11-02",
  updated: "2026-11-02",
  excerpt:
    "Choose fresh flowers for a gift or a one-day event. Choose artificial flowers when the display must last through heat, air-conditioning, or a room with no vase.",
};

export type ShopGuide = Guide & {
  answer: string;
  note: string;
  steps: readonly GuideStep[];
  howToName: string;
  faqs: readonly GuideFaq[];
};

export const shopGuides: readonly ShopGuide[] = [
  {
    slug: "same-day-flower-delivery-surabaya",
    title: "Can I Get Same-Day Flower Delivery in Surabaya?",
    metaTitle: "Same-Day Flower Delivery in Surabaya | Èlore Florist",
    description:
      "Same-day flower delivery in Surabaya is often available if you WhatsApp Èlore Florist before 12:00, Monday to Saturday. The shop is closed on Sunday.",
    published: "2026-11-12",
    updated: "2026-11-12",
    excerpt:
      "Message before 12:00, Monday to Saturday. Same-day delivery depends on the stems and your area. The shop is closed on Sunday.",
    answer:
      "Yes. Same-day flower delivery in Surabaya is often available if you WhatsApp Èlore Florist before 12:00, Monday to Saturday, and the stems and your area allow it. The shop is closed on Sunday. A wedding or a large ceremony should be booked earlier.",
    note:
      "The shop is at Jl. Siwalankerto Timur I No. 1B. Surabaya traffic and midday heat both shorten a same-day window, so an order after noon may not cross the city while the bouquet still looks as it did on the bench.",
    howToName: "How to ask for same-day flower delivery in Surabaya",
    steps: [
      {
        title: "Message before 12:00",
        text: "WhatsApp +62 858-8560-6353 with the address and the time you need the flowers. Monday to Saturday only.",
      },
      {
        title: "Name the area",
        text: "Èlore Florist delivers across Surabaya. The cutoff depends on your area and on which stems are in the shop that morning.",
      },
      {
        title: "Keep the order to a bouquet",
        text: "Same-day is for a bouquet. A full wedding or ceremony should be booked earlier.",
      },
      {
        title: "Do not plan on Sunday",
        text: "The shop is closed on Sunday. A Sunday event needs an order on Saturday or before.",
      },
    ],
    faqs: [
      {
        question: "Can I get same-day flower delivery in Surabaya?",
        answer:
          "Yes, if you WhatsApp Èlore Florist before 12:00, Monday to Saturday, and the stems and your area allow it. The shop is closed on Sunday.",
      },
      {
        question: "What time is the same-day cutoff?",
        answer: "Before 12:00, Monday to Saturday. After that, same-day delivery is often no longer possible.",
      },
      {
        question: "Do you deliver flowers on Sunday?",
        answer: "No. Èlore Florist is closed on Sunday.",
      },
      {
        question: "Can a wedding bouquet be ordered the same day?",
        answer: "No. Wedding and large ceremony orders should be booked earlier. Same-day is for a bouquet.",
      },
    ],
  },
  {
    slug: "how-long-a-bouquet-lasts",
    title: "How Long Will a Bouquet Last in Surabaya?",
    metaTitle: "How Long a Bouquet Lasts in Surabaya | Èlore Florist",
    description:
      "A hand-arranged bouquet from Èlore Florist is prepared to stay fresh for 7 or more days in Surabaya if you change the water daily and keep it out of the sun.",
    published: "2026-11-12",
    updated: "2026-11-12",
    excerpt:
      "Plan on 7 or more days indoors with fresh water. Midday heat outdoors, and a strong air-conditioner, shorten that.",
    answer:
      "A hand-arranged bouquet from Èlore Florist in Surabaya is prepared to stay fresh for 7 or more days with care. Recut the stems, change the water daily, and keep the vase away from direct sun and strong air-conditioning. Outdoors at midday, expect a shorter life.",
    note:
      "Surabaya is hot and humid for most of the year. A bouquet that looks firm in the shop can tire faster on a sunny balcony, in a car, or beside an air-conditioning vent.",
    howToName: "How to keep a bouquet fresh in Surabaya",
    steps: [
      {
        title: "Recut the stems",
        text: "Cut the stems at an angle when the bouquet arrives, and again if the ends look dry.",
      },
      {
        title: "Change the water daily",
        text: "Empty the vase, rinse it, and refill it with clean water every day.",
      },
      {
        title: "Keep it out of the sun and the vent",
        text: "Direct sun and strong air-conditioning both shorten the life of fresh stems.",
      },
      {
        title: "Remove wilted blooms",
        text: "Take out flowers that have collapsed so they do not cloud the water for the rest.",
      },
    ],
    faqs: [
      {
        question: "How long will my bouquet last in Surabaya?",
        answer:
          "A hand-arranged bouquet from Èlore Florist is prepared to stay fresh for 7 or more days indoors if you recut the stems, change the water daily, and keep it away from direct sun and strong air-conditioning.",
      },
      {
        question: "How long do flowers last outdoors at midday?",
        answer:
          "Shorter than 7 days. Surabaya midday heat tires fresh stems. Tell the shop if the bouquet will sit outside so the flowers or the delivery time can be chosen for that.",
      },
      {
        question: "Should I change the vase water?",
        answer: "Yes. Change the water daily and remove wilted blooms.",
      },
    ],
  },
  {
    slug: "how-to-order-flowers-surabaya",
    title: "How to Order Flowers from Èlore Florist",
    metaTitle: "How to Order Flowers in Surabaya | Èlore Florist",
    description:
      "Message Èlore Florist on WhatsApp at +62 858-8560-6353. Choose a bouquet or describe the occasion, then pick up at the shop or ask for delivery in Surabaya.",
    published: "2026-11-12",
    updated: "2026-11-12",
    excerpt:
      "Send a WhatsApp with the occasion, the colors, and the budget. The shop confirms the stems, sends a quote, and arranges pickup or delivery.",
    answer:
      "Message Èlore Florist on WhatsApp at +62 858-8560-6353. Choose a bouquet from the flowers, gifts, or wedding pages, or describe the occasion, colors, and budget. The shop confirms which stems are available, sends a quote because prices change with the season, and arranges pickup or delivery in Surabaya.",
    note:
      "The shop is at Jl. Siwalankerto Timur I No. 1B, Siwalankerto, Surabaya 60236. It is open Monday to Friday, 09:00 to 17:00, and Saturday 09:00 to 16:00. Sunday it is closed.",
    howToName: "How to order flowers from Èlore Florist in Surabaya",
    steps: [
      {
        title: "Choose a bouquet or describe one",
        text: "Open the flowers, gifts, or wedding pages, or tell us the occasion, the colors, and the budget.",
      },
      {
        title: "WhatsApp the shop",
        text: "Message +62 858-8560-6353. We confirm which stems are available that day.",
      },
      {
        title: "Wait for the quote",
        text: "Prices change with the season, so the quote is confirmed on WhatsApp before the bouquet is made.",
      },
      {
        title: "Pick up or ask for delivery",
        text: "Collect the bouquet at the shop, or ask for delivery across Surabaya. Share the address and the time if it is going out.",
      },
    ],
    faqs: [
      {
        question: "How do I order flowers from Èlore Florist in Surabaya?",
        answer:
          "Message +62 858-8560-6353 on WhatsApp. Choose a bouquet or describe the occasion, colors, and budget. The shop confirms the stems, sends a quote, and arranges pickup or delivery in Surabaya.",
      },
      {
        question: "Where do I pick the bouquet up?",
        answer:
          "At Jl. Siwalankerto Timur I No. 1B, Siwalankerto, Surabaya 60236, during shop hours. Monday to Friday 09:00 to 17:00, Saturday 09:00 to 16:00. Closed Sunday.",
      },
      {
        question: "Do you deliver in Surabaya?",
        answer:
          "Yes. Èlore Florist delivers across Surabaya. Share the recipient address and the preferred time on WhatsApp when you order.",
      },
    ],
  },
];

export const guides: readonly Guide[] = [artificialOrFresh, ...shopGuides];
