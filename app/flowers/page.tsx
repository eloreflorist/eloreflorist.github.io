import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import flowerProducts from "@/data/flowers.json";

export default function Flowers() {
  return (
    <>
      <Header />
      <main className="pt-40 pb-20">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="mb-8 text-4xl font-semibold text-center">Our Flowers</h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover our exquisite collection of fresh, hand-picked flowers. Each arrangement is carefully crafted to bring beauty and elegance to any occasion.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {flowerProducts.map((product) => (
              <Link key={product.slug} href={`/flowers/${product.slug}`}>
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="h-64 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
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
