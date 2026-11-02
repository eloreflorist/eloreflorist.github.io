import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  blogId,
  blogUrl,
  floristId,
  guideAnswerId,
  guideUrl,
  siteUrl,
  type Guide,
  type GuideFaq,
  type GuideStep,
} from "@/lib/guides";
import type { ReactNode } from "react";

type GuideFrameProps = {
  guide: Guide;
  faqs?: readonly GuideFaq[];
  steps?: readonly GuideStep[];
  howToName?: string;
  speakable?: boolean;
  children: ReactNode;
};

export default function GuideFrame({
  guide,
  faqs = [],
  steps = [],
  howToName,
  speakable = false,
  children,
}: GuideFrameProps) {
  const url = guideUrl(guide.slug);
  const graph: Record<string, unknown>[] = [
    {
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      headline: guide.title,
      description: guide.description,
      datePublished: guide.published,
      dateModified: guide.updated,
      inLanguage: "en-ID",
      mainEntityOfPage: url,
      url,
      image: `${siteUrl}/elore_logo.png`,
      author: { "@id": floristId },
      publisher: { "@id": floristId },
      isPartOf: { "@id": blogId },
      ...(speakable
        ? { speakable: { "@type": "SpeakableSpecification", cssSelector: [`#${guideAnswerId}`] } }
        : {}),
    },
    {
      "@type": "Florist",
      "@id": floristId,
      name: "Èlore Florist",
      url: siteUrl,
      telephone: "+6285885606353",
      image: `${siteUrl}/elore_logo.png`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jl. Siwalankerto Timur I No. 1B",
        addressLocality: "Wonocolo",
        addressRegion: "Surabaya",
        postalCode: "60236",
        addressCountry: "ID",
      },
    },
    {
      "@type": "Blog",
      "@id": blogId,
      name: "Flower guides from Èlore Florist",
      url: blogUrl,
      publisher: { "@id": floristId },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Blog", item: blogUrl },
        { "@type": "ListItem", position: 3, name: guide.title, item: url },
      ],
    },
  ];

  if (faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      url,
      inLanguage: "en-ID",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }

  if (steps.length > 0 && howToName) {
    graph.push({
      "@type": "HowTo",
      name: howToName,
      description: guide.description,
      inLanguage: "en-ID",
      step: steps.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.title,
        text: step.text,
      })),
    });
  }

  const schema = { "@context": "https://schema.org", "@graph": graph };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header current="/blog" />
      <main className="pt-20 pb-20 md:pt-40">{children}</main>
      <Footer />
    </>
  );
}
