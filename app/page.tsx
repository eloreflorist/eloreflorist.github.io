import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Shop from "@/components/Shop";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Shop />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
