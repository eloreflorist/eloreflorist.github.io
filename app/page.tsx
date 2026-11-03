import Header from "@/components/Header";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function Home() {
  return (
    <>
      <Header current="/" />
      <main className="pt-20 pb-20 md:pt-40">
        <div className="mx-auto max-w-7xl px-4">
          <Breadcrumbs items={[{ name: "Home", href: "/" }]} />
          <FeaturedProducts />
        </div>
      </main>
      <Footer />
    </>
  );
}
