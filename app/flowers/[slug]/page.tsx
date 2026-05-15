import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import ProductCarousel from "@/components/ProductCarousel";
import WhatsAppButton from "@/components/WhatsAppButton";
import flowerProducts from "@/data/flowers.json";

export function generateStaticParams() {
  return flowerProducts.map((product) => ({
    slug: product.slug,
  }));
}

export default function FlowerDetail({ params }: { readonly params: { readonly slug: string } }) {
  const slug = params.slug;
  const product = flowerProducts.find((p) => p.slug === slug);

  if (!product) {
    return (
      <>
        <Header />
        <main className="pt-40 pb-20 text-center">
          <h1 className="text-2xl font-semibold">Product not found</h1>
          <Link href="/flowers" className="text-primary hover:underline mt-4 inline-block">
            Back to Flowers
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-40 pb-20">
        <div className="mx-auto max-w-7xl px-4">
          <Link href="/flowers" className="text-primary hover:underline mb-8 inline-block">
            ← Back to Flowers
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Product Carousel */}
            <div className="h-full">
              <ProductCarousel productName={product.name} images={product.images} />
            </div>

            {/* Product Details */}
            <div>
              <h1 className="text-4xl font-semibold mb-4">{product.name}</h1>

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
