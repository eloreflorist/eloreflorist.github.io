import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs, { sectionCrumbs } from "@/components/Breadcrumbs";
import Byline from "@/components/blog/Byline";
import { blogId, blogUrl, floristId, guides, guideUrl, siteUrl } from "@/lib/guides";
import { shareImage } from "@/lib/site";
import Link from "next/link";
import type { Metadata } from "next";

const title = "Flower Guides for Orders in Surabaya | Èlore Florist";
const description =
  "Flower guides from Èlore Florist in Surabaya: fresh or artificial flowers, same-day delivery, bouquet care, and how to order on WhatsApp.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: blogUrl },
  openGraph: {
    title,
    description,
    url: blogUrl,
    siteName: "Èlore Florist",
    locale: "en_ID",
    type: "website",
    images: [{ url: shareImage, alt: "Bouquet arranged at Èlore Florist in Surabaya" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": blogId,
      name: "Flower guides from Èlore Florist",
      description,
      url: blogUrl,
      inLanguage: "en-ID",
      publisher: { "@id": floristId },
      blogPost: guides.map((guide) => ({
        "@type": "BlogPosting",
        headline: guide.title,
        url: guideUrl(guide.slug),
        datePublished: guide.published,
      })),
    },
    {
      "@type": "Florist",
      "@id": floristId,
      name: "Èlore Florist",
      url: siteUrl,
    },
  ],
};

export default function BlogIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header current="/blog" />
      <main className="pt-20 pb-20 md:pt-40">
        <div className="mx-auto max-w-3xl px-4">
          <Breadcrumbs items={sectionCrumbs("Blog", "/blog")} />
          <h1 className="text-4xl font-semibold text-primary">Flower guides from Èlore Florist</h1>
          <p className="mt-4 leading-relaxed text-gray-700">
            Practical notes from our shop in Surabaya. Each guide explains a real choice we help customers make — the room, the weather, and the occasion — so you can order with a clearer brief.
          </p>

          <ul className="mt-12 divide-y divide-secondary border-y border-secondary">
            {guides.map((guide) => (
              <li key={guide.slug} className="py-8">
                <Byline published={guide.published} className="" />
                <h2 className="mt-2 text-2xl font-semibold text-primary">
                  <Link href={`/blog/${guide.slug}`} className="hover:underline">
                    {guide.title}
                  </Link>
                </h2>
                <p className="mt-3 leading-relaxed text-gray-700">{guide.excerpt}</p>
                <Link
                  href={`/blog/${guide.slug}`}
                  className="mt-4 inline-block text-sm text-primary underline hover:opacity-70"
                >
                  Read this guide
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
