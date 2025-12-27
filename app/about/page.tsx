import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <main className="pt-40 pb-20">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="mb-8 text-4xl font-semibold text-center">About Èlore Florist</h1>
          
          <div className="max-w-3xl mx-auto">
            <div className="h-80 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg mb-8 flex items-center justify-center">
              <span className="text-gray-400 text-lg">About Us Image</span>
            </div>
            
            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                Welcome to Èlore Florist, where passion for flowers meets artistic excellence. For over a decade, we have been crafting beautiful floral arrangements that bring joy and elegance to every occasion.
              </p>
              
              <p className="text-lg">
                Our mission is to provide the freshest, most stunning flowers and create memorable experiences for our customers. Every bouquet is hand-arranged with care and attention to detail.
              </p>
              
              <p className="text-lg">
                We believe that flowers have the power to express emotions and celebrate life's most precious moments. Whether it's a birthday, anniversary, wedding, or just because, we're here to help you say it with flowers.
              </p>
              
              <div className="mt-10 grid grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-primary">10+</p>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-primary">5000+</p>
                  <p className="text-sm text-gray-600">Happy Customers</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-primary">100%</p>
                  <p className="text-sm text-gray-600">Fresh Flowers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
