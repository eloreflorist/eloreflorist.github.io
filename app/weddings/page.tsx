import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-64 bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center">
                  <span className="text-gray-400">Wedding Design {item}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Wedding Package {item}</h3>
                  <p className="text-sm text-gray-600 mb-4">Customizable bridal arrangements</p>
                  <p className="text-lg font-semibold text-primary">From $150</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

