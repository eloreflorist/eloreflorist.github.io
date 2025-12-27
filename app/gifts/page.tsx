import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import giftProducts from "@/data/gifts.json";

export default function Gifts() {
  return (
    <>
      <Header />
      <main className="pt-40 pb-20">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="mb-8 text-4xl font-semibold text-center">Special Gifts</h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Browse our curated selection of floral gifts perfect for birthdays, anniversaries, and special moments.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {giftProducts.map((product) => (
              <Link key={product.slug} href={`/gifts/${product.slug}`}>
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="h-64 bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center">
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
