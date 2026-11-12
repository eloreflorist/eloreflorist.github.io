import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs, { sectionCrumbs } from "@/components/Breadcrumbs";
import Link from "next/link";
import ProductCatalog from "@/components/ProductCatalog";
import TagFilter from "@/components/TagFilter";
import giftProducts from "@/data/gifts.json";
import { productCrawlLabel } from "@/lib/newArrivals";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flower Gifts in Surabaya – Èlore Florist",
  description: "Floral gift sets for birthdays, anniversaries, and special occasions in Surabaya. Order gift bouquets from Èlore Florist.",
  alternates: { canonical: "https://eloreflorist.github.io/gifts" },
  openGraph: {
    title: "Flower Gifts in Surabaya – Èlore Florist",
    description: "Floral gift sets for birthdays, anniversaries, and special occasions in Surabaya.",
    url: "https://eloreflorist.github.io/gifts",
  },
};

export default function Gifts() {
  return (
    <>
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
