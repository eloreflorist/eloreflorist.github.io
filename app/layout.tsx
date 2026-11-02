import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Èlore Florist – Fresh Flower Arrangements in Surabaya",
  description: "Hand-crafted bouquets and floral arrangements for weddings, gifts, and special occasions. Order fresh flowers from Èlore Florist in Surabaya.",
  keywords: ["florist surabaya", "bunga surabaya", "wedding flowers", "flower arrangements", "bouquet surabaya", "elore florist"],
  openGraph: {
    title: "Èlore Florist – Fresh Flower Arrangements in Surabaya",
    description: "Hand-crafted bouquets and floral arrangements for weddings, gifts, and special occasions.",
    url: "https://eloreflorist.github.io",
    siteName: "Èlore Florist",
    images: [{ url: "https://eloreflorist.github.io/elore_logo.png" }],
    locale: "en_ID",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Èlore Florist – Fresh Flower Arrangements in Surabaya',
    description: 'Hand-crafted bouquets and floral arrangements for weddings, gifts, and special occasions.',
    images: ['https://eloreflorist.github.io/elore_logo.png'],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Florist",
  "name": "Èlore Florist",
  "url": "https://eloreflorist.github.io",
  "telephone": "+6285885606353",
  "image": "https://eloreflorist.github.io/elore_logo.png",
  "description": "Hand-crafted bouquets and floral arrangements for weddings, gifts, and special occasions in Surabaya.",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Siwalankerto Timur I No. 1B",
    "addressLocality": "Wonocolo",
    "addressRegion": "Surabaya",
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
  "hasMap": "https://maps.google.com/?q=Jl.+Siwalankerto+Timur+I+No.+1B,+Wonocolo,+Surabaya",
 

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
