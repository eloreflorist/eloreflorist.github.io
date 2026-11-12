import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs, { sectionCrumbs } from "@/components/Breadcrumbs";
import Link from "next/link";
import ProductCatalog from "@/components/ProductCatalog";
import TagFilter from "@/components/TagFilter";
import flowerProducts from "@/data/flowers.json";
import { productCrawlLabel } from "@/lib/newArrivals";
import { collectionSchema, shareImage, siteUrl } from "@/lib/site";
import type { Metadata } from "next";

const title = "Fresh Flower Bouquets in Surabaya | Èlore Florist";
const description =
  "Browse hand-arranged bouquets in Surabaya. Roses, lilies, seasonal mixes, and tropical bunches from Èlore Florist in Siwalankerto. Order on WhatsApp.";
const pageUrl = `${siteUrl}/flowers`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title,
    description,
    url: pageUrl,
    images: [{ url: shareImage, alt: "Bouquet arranged at Èlore Florist in Surabaya" }],
  },
};

export default function Flowers() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema(
            title,
            pageUrl,
            description,
            flowerProducts.map((product) => ({ name: product.name, url: `${pageUrl}/${product.slug}` })),
          )),
        }}
      />
      <Header current="/flowers" />
      <main className="pt-20 pb-20 md:pt-40">
        <div className="mx-auto max-w-7xl px-4">
          <Breadcrumbs items={sectionCrumbs("Flowers", "/flowers")} />
          <h1 className="mb-8 text-4xl font-semibold text-center">Fresh Flowers in Surabaya</h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover our collection of fresh, hand-picked flower arrangements from Èlore Florist in Surabaya. Each bouquet is crafted for weddings, gifts, and everyday occasions.
          </p>

          <TagFilter section="flowers" products={flowerProducts} />
          <ProductCatalog
            products={flowerProducts}
            basePath="/flowers"
            showCategory
            enableCategoryFilter
            accentClass="focus:ring-pink-500"
            activePageClass="bg-pink-500"
            imageClass="bg-gradient-to-br from-pink-100 to-purple-100"
            resultLabel="flowers"
          />

          <nav className="sr-only" aria-label="All flower products">
            <ul>
              {flowerProducts.map((product) => (
                <li key={product.slug}>
                  <Link href={`/flowers/${product.slug}`}>{productCrawlLabel(product.name, product.description, product.slug, product.price)}</Link>
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
