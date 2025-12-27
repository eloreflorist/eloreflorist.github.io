import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import weddingProducts from "@/data/weddings.json";

export default function Weddings() {
  return (
    <>
      <Header />
      <main className="pt-40 pb-20">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="mb-8 text-4xl font-semibold text-center">Wedding Flowers</h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Make your special day unforgettable with our stunning wedding flower arrangements and bridal bouquets.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {weddingProducts.map((product) => (
              <Link key={product.slug} href={`/weddings/${product.slug}`}>
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="h-64 bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center">
                    <span className="text-gray-400">{product.image}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                    <p className="text-lg font-semibold text-primary">${product.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
