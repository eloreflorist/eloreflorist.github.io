import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs, { sectionCrumbs } from "@/components/Breadcrumbs";

export default function ServicesPage() {
  return (
    <>
      <Header current="/services" />
      <main className="pt-20 pb-20 md:pt-40">
        <div className="mx-auto max-w-7xl px-4">
          <Breadcrumbs items={sectionCrumbs("Services", "/services")} />
          <h1 className="text-4xl font-bold mb-8">Our Services</h1>
        </div>
      </main>
      <Footer />
    </>
  );
}