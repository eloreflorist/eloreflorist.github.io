import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import weddingProducts from "@/data/weddings.json";

export function generateStaticParams() {
  return weddingProducts.map((product) => ({
    slug: product.slug,
  }));
}

export default function WeddingDetail({ params }: { readonly params: { readonly slug: string } }) {
  const slug = params.slug;
  const product = weddingProducts.find((p) => p.slug === slug);

  if (!product) {
    return (
      <>
        <Header />
        <main className="pt-40 pb-20 text-center">
          <h1 className="text-2xl font-semibold">Product not found</h1>
          <Link href="/weddings" className="text-primary hover:underline mt-4 inline-block">
            Back to Weddings
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
          <Link href="/weddings" className="text-primary hover:underline mb-8 inline-block">
            ← Back to Weddings
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div>
              <div className="h-96 bg-gradient-to-br from-rose-100 to-pink-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-lg">{product.image}</span>
              </div>
            </div>

            {/* Product Details */}
            <div>
              <h1 className="text-4xl font-semibold mb-4">{product.name}</h1>
              <p className="text-3xl font-bold text-primary mb-6">${product.price}</p>

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

              <div className="flex gap-4">
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
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
