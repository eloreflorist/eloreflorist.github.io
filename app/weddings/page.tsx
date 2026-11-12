import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs, { sectionCrumbs } from "@/components/Breadcrumbs";
import Link from "next/link";
import ProductCatalog from "@/components/ProductCatalog";
import TagFilter from "@/components/TagFilter";
import weddingProducts from "@/data/weddings.json";
import { productCrawlLabel } from "@/lib/newArrivals";
import { collectionSchema, shareImage, siteUrl } from "@/lib/site";
import type { Metadata } from "next";

const title = "Wedding Flower Bouquets in Surabaya | Èlore Florist";
const description =
  "Bridal bouquets for weddings in Surabaya. Book earlier than a same-day order. Èlore Florist, Siwalankerto. WhatsApp +62 858-8560-6353.";
const pageUrl = `${siteUrl}/weddings`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title,
    description,
    url: pageUrl,
    images: [{ url: shareImage, alt: "Bridal bouquet from Èlore Florist in Surabaya" }],
  },
};

export default function WeddingsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema(
            title,
            pageUrl,
            description,
            weddingProducts.map((product) => ({ name: product.name, url: `${pageUrl}/${product.slug}` })),
          )),
        }}
      />
      <Header current="/weddings" />
      <main className="pt-20 pb-20 md:pt-40">
        <div className="mx-auto max-w-7xl px-4">
          <Breadcrumbs items={sectionCrumbs("Weddings", "/weddings")} />
          <h1 className="mb-8 text-4xl font-semibold text-center">Wedding Flowers in Surabaya</h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Make your wedding unforgettable with bridal bouquets and ceremony flowers from Èlore Florist in Surabaya.
          </p>

          <TagFilter section="weddings" products={weddingProducts} />
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
                  <Link href={`/weddings/${product.slug}`}>{productCrawlLabel(product.name, product.description, product.slug, product.price)}</Link>
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
