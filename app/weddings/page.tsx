import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import ProductCatalog from "@/components/ProductCatalog";
import weddingProducts from "@/data/weddings.json";
import { productCrawlLabel } from "@/lib/newArrivals";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wedding Flowers in Surabaya – Èlore Florist",
  description: "Bridal bouquets and wedding flower arrangements in Surabaya. Custom wedding florals from Èlore Florist in Wonocolo.",
  openGraph: {
    title: "Wedding Flowers in Surabaya – Èlore Florist",
    description: "Bridal bouquets and wedding flower arrangements in Surabaya from Èlore Florist.",
    url: "https://eloreflorist.github.io/weddings",
  },
};

export default function WeddingsPage() {
  return (
    <>
      <Header />
      <main className="pt-40 pb-20">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="mb-8 text-4xl font-semibold text-center">Wedding Flowers in Surabaya</h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Make your wedding unforgettable with bridal bouquets and ceremony flowers from Èlore Florist in Wonocolo, Surabaya.
          </p>

          <ProductCatalog
            products={weddingProducts}
            basePath="/weddings"
            accentClass="focus:ring-rose-500"
            activePageClass="bg-rose-500"
            imageClass="bg-gradient-to-br from-rose-100 to-pink-100"
            resultLabel="wedding packages"
          />

          <nav className="sr-only" aria-label="All wedding products">
            <ul>
              {weddingProducts.map((product) => (
                <li key={product.slug}>
                  <Link href={`/weddings/${product.slug}`}>{productCrawlLabel(product.name, product.description, product.slug)}</Link>
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
