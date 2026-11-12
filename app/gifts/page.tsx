import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs, { sectionCrumbs } from "@/components/Breadcrumbs";
import Link from "next/link";
import ProductCatalog from "@/components/ProductCatalog";
import TagFilter from "@/components/TagFilter";
import giftProducts from "@/data/gifts.json";
import { productCrawlLabel } from "@/lib/newArrivals";
import { collectionSchema, shareImage, siteUrl } from "@/lib/site";
import type { Metadata } from "next";

const title = "Flower Gifts to Order in Surabaya | Èlore Florist";
const description =
  "Gift bouquets for birthdays, anniversaries, and thank-yous in Surabaya. Order from Èlore Florist in Siwalankerto. WhatsApp +62 858-8560-6353.";
const pageUrl = `${siteUrl}/gifts`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title,
    description,
    url: pageUrl,
    images: [{ url: shareImage, alt: "Gift bouquet from Èlore Florist in Surabaya" }],
  },
};

export default function Gifts() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema(
            title,
            pageUrl,
            description,
            giftProducts.map((product) => ({ name: product.name, url: `${pageUrl}/${product.slug}` })),
          )),
        }}
      />
      <Header current="/gifts" />
      <main className="pt-20 pb-20 md:pt-40">
        <div className="mx-auto max-w-7xl px-4">
          <Breadcrumbs items={sectionCrumbs("Gifts", "/gifts")} />
          <h1 className="mb-8 text-4xl font-semibold text-center">Flower Gifts in Surabaya</h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Browse floral gifts for birthdays, anniversaries, and special moments, hand-arranged by Èlore Florist in Surabaya.
          </p>

          <TagFilter section="gifts" products={giftProducts} />
          <ProductCatalog
            products={giftProducts}
            basePath="/gifts"
            accentClass="focus:ring-orange-500"
            activePageClass="bg-orange-500"
            imageClass="bg-gradient-to-br from-yellow-100 to-orange-100"
            resultLabel="gift collections"
          />

          <nav className="sr-only" aria-label="All gift products">
            <ul>
              {giftProducts.map((product) => (
                <li key={product.slug}>
                  <Link href={`/gifts/${product.slug}`}>{productCrawlLabel(product.name, product.description, product.slug, product.price)}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}
