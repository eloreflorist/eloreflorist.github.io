import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs, { sectionCrumbs } from "@/components/Breadcrumbs";
import Link from "next/link";
import ProductCarousel from "@/components/ProductCarousel";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductJsonLd from "@/components/ProductJsonLd";
import ProductTags from "@/components/ProductTags";
import StartingPrice from "@/components/StartingPrice";
import weddingProducts from "@/data/weddings.json";
import { getProductMetadata } from "@/lib/productSeo";
import type { Metadata } from "next";

export function generateStaticParams() {
  return weddingProducts.map((product) => ({
    slug: product.slug,
  }));
}

export function generateMetadata({ params }: { readonly params: { readonly slug: string } }): Metadata {
  const product = weddingProducts.find((p) => p.slug === params.slug);
  return getProductMetadata(product, "weddings");
}

export default function WeddingDetail({ params }: { readonly params: { readonly slug: string } }) {
  const slug = params.slug;
  const product = weddingProducts.find((p) => p.slug === slug);

  if (!product) {
    return (
      <>
        <Header current="/weddings" />
        <main className="pt-20 pb-20 md:pt-40">
          <div className="mx-auto max-w-7xl px-4 text-center">
          <Breadcrumbs items={sectionCrumbs("Weddings", "/weddings", { name: "Product not found", href: `/weddings/${slug}` })} />
          <h1 className="text-2xl font-semibold">Product not found</h1>
          <Link href="/weddings" className="text-primary hover:underline mt-4 inline-block">
            Back to Weddings
          </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <ProductJsonLd product={product} section="weddings" />
      <Header current="/weddings" />
      <main className="pt-20 pb-20 md:pt-40">
        <div className="mx-auto max-w-7xl px-4">
          <Breadcrumbs
            items={sectionCrumbs("Weddings", "/weddings", {
              name: product.name,
              href: `/weddings/${product.slug}`,
            })}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Product Carousel */}
            <div className="h-full">
              <ProductCarousel productName={product.name} images={product.images} slug={product.slug} />
            </div>

            {/* Product Details */}
            <div>
              <h1 className="text-4xl font-semibold mb-4">{product.name}</h1>
              <ProductTags product={product} section="weddings" />
              <StartingPrice price={product.price} />

              <p className="text-gray-700 mb-6 leading-relaxed">
                {product.fullDescription}
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Details</h3>
                <p className="text-gray-600">{product.details}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">What's Included</h3>
                <ul className="space-y-2">
                  {product.includes.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                    product.inStock
                      ? "bg-primary text-white hover:opacity-90"
                      : "bg-gray-300 text-gray-600 cursor-not-allowed"
                  }`}
                  disabled={!product.inStock}
                >
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </button>
                
                <WhatsAppButton productName={product.name} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
