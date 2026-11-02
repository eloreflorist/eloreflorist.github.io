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
  const image = `${siteUrl}/elore_logo.png`;

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

export const guides: readonly Guide[] = [artificialOrFresh];
