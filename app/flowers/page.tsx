import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import ProductCatalog from "@/components/ProductCatalog";
import flowerProducts from "@/data/flowers.json";
import { productCrawlLabel } from "@/lib/newArrivals";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fresh Flowers in Surabaya – Èlore Florist",
  description: "Browse hand-crafted flower arrangements in Surabaya. Roses, orchids, lilies, tropical and luxury bouquets from Èlore Florist in Wonocolo.",
  openGraph: {
    title: "Fresh Flowers in Surabaya – Èlore Florist",
    description: "Browse hand-crafted flower arrangements in Surabaya from Èlore Florist.",
    url: "https://eloreflorist.github.io/flowers",
  },
};

export default function Flowers() {
  return (
    <>
      <Header current="/flowers" />
      <main className="pt-20 pb-20 md:pt-40">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="mb-8 text-4xl font-semibold text-center">Fresh Flowers in Surabaya</h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover our collection of fresh, hand-picked flower arrangements from Èlore Florist in Surabaya. Each bouquet is crafted for weddings, gifts, and everyday occasions.
          </p>

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
                  <Link href={`/flowers/${product.slug}`}>{productCrawlLabel(product.name, product.description, product.slug)}</Link>
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
