import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Shop from "@/components/Shop";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import { ScrollProvider } from "@/context/ScrollContext";

export default function Home() {
  return (
    <ScrollProvider>
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
    </ScrollProvider>
  );
}
