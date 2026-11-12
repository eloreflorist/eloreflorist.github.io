import "./globals.css";
import type { Metadata } from "next";
import { priceRange, shareImage } from "@/lib/site";
import { googleMapsUrl, testimonials } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "Èlore Florist – Fresh Flower Arrangements in Surabaya",
  description: "Hand-crafted bouquets and floral arrangements for weddings, gifts, and special occasions. Order fresh flowers from Èlore Florist in Surabaya.",
  keywords: ["florist surabaya", "bunga surabaya", "wedding flowers", "flower arrangements", "bouquet surabaya", "elore florist"],
  alternates: { canonical: "https://eloreflorist.github.io" },
  openGraph: {
    title: "Èlore Florist – Fresh Flower Arrangements in Surabaya",
    description: "Hand-crafted bouquets and floral arrangements for weddings, gifts, and special occasions.",
    url: "https://eloreflorist.github.io",
    siteName: "Èlore Florist",
    images: [{ url: shareImage, alt: "Bouquet arranged at Èlore Florist in Surabaya" }],
    locale: "en_ID",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Èlore Florist – Fresh Flower Arrangements in Surabaya',
    description: 'Hand-crafted bouquets and floral arrangements for weddings, gifts, and special occasions.',
    images: [shareImage],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Florist",
  "@id": "https://eloreflorist.github.io/#florist",
  "name": "Èlore Florist",
  "url": "https://eloreflorist.github.io",
  "telephone": "+6285885606353",
  "image": shareImage,
  "description": "Hand-crafted bouquets and floral arrangements for weddings, gifts, and special occasions in Surabaya.",
  "priceRange": priceRange,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Siwalankerto Timur I No. 1B, Siwalankerto",
    "addressLocality": "Surabaya",
    "addressRegion": "East Java",
    "postalCode": "60236",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -7.3274,
    "longitude": 112.7376
  },
  "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "09:00",
        "closes": "16:00"
      }
  ],
  "sameAs": [
    "https://www.instagram.com/eloreflorist",
    "https://www.tiktok.com/@eloreflorist",
    "https://www.threads.com/@eloreflorist"
  ],
  "hasMap": googleMapsUrl,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "bestRating": "5",
    "reviewCount": String(testimonials.length),
  },
  "review": testimonials.map((item) => ({
    "@type": "Review",
    "author": { "@type": "Person", "name": item.name ?? "Google Maps reviewer" },
    "datePublished": item.date,
    "reviewBody": item.quote,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": String(item.rating),
      "bestRating": "5",
    },
    "publisher": { "@type": "Organization", "name": "Google" },
  })),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-JK6F0T3Z9M" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JK6F0T3Z9M');
            `,
          }}
        />
      </head>
      <body className="scroll-smooth antialiased">
        {children}
      </body>
    </html>
  );
}
