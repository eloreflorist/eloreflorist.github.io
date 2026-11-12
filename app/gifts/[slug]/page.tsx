import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs, { sectionCrumbs } from "@/components/Breadcrumbs";
import Link from "next/link";
import ProductCarousel from "@/components/ProductCarousel";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductJsonLd from "@/components/ProductJsonLd";
import ProductTags from "@/components/ProductTags";
import ProductFacts from "@/components/product/ProductFacts";
import StartingPrice from "@/components/StartingPrice";
import giftProducts from "@/data/gifts.json";
import { getProductMetadata } from "@/lib/productSeo";
import type { Metadata } from "next";

export function generateStaticParams() {
  return giftProducts.map((product) => ({
    slug: product.slug,
  }));
}

export function generateMetadata({ params }: { readonly params: { readonly slug: string } }): Metadata {
  const product = giftProducts.find((p) => p.slug === params.slug);
  return getProductMetadata(product, "gifts");
}

export default function GiftDetail({ params }: { readonly params: { readonly slug: string } }) {
  const slug = params.slug;
  const product = giftProducts.find((p) => p.slug === slug);

  if (!product) {
    return (
      <>
        <Header current="/gifts" />
        <main className="pt-20 pb-20 md:pt-40">
          <div className="mx-auto max-w-7xl px-4 text-center">
          <Breadcrumbs items={sectionCrumbs("Gifts", "/gifts", { name: "Product not found", href: `/gifts/${slug}` })} />
          <h1 className="text-2xl font-semibold">Product not found</h1>
          <Link href="/gifts" className="text-primary hover:underline mt-4 inline-block">
            Back to Gifts
          </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <ProductJsonLd product={product} section="gifts" />
      <Header current="/gifts" />
      <main className="pt-20 pb-20 md:pt-40">
        <div className="mx-auto max-w-7xl px-4">
          <Breadcrumbs
            items={sectionCrumbs("Gifts", "/gifts", {
              name: product.name,
              href: `/gifts/${product.slug}`,
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
              <ProductTags product={product} section="gifts" />
              <StartingPrice price={product.price} />

              <p className="text-gray-700 mb-6 leading-relaxed">
                {product.fullDescription}
              </p>

              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Details</h2>
                <p className="text-gray-600">{product.details}</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">What's Included</h2>
                <ul className="space-y-2">
                  {product.includes.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <ProductFacts
                name={product.name}
                description={product.description}
                includes={product.includes}
                price={product.price}
              />

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
