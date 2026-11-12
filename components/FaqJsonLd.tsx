import { faqs, faqPageUrl } from "@/lib/faq";

export default function FaqJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: faqPageUrl,
    inLanguage: "en-ID",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
    about: {
      "@type": "Florist",
      name: "Èlore Florist",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jl. Siwalankerto Timur I No. 1B",
        addressLocality: "Surabaya",
        addressRegion: "Surabaya",
        postalCode: "60236",
        addressCountry: "ID",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
