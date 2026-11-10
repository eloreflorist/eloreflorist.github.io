import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs, { sectionCrumbs } from "@/components/Breadcrumbs";
import AboutFacts from "@/components/about/AboutFacts";
import { aboutAnswer, aboutFacts, aboutParagraphs, aboutSchema, aboutUrl } from "@/lib/about";
import Link from "next/link";
import type { Metadata } from "next";

const title = "About Èlore Florist in Surabaya | Flower Studio in Wonocolo";
const description =
  "Èlore Florist in Wonocolo, Surabaya has arranged flowers for more than 2 years and made about 1,000 bouquets. Fresh flowers, chosen for quality.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: aboutUrl },
  openGraph: { title, description, url: aboutUrl },
};

export default function About() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema()) }} />
      <Header current="/about" />
      <main className="pt-20 pb-20 md:pt-40">
        <div className="mx-auto max-w-3xl px-4">
          <Breadcrumbs items={sectionCrumbs("About", "/about")} />
          <h1 className="mb-4 text-center text-4xl font-semibold">About Èlore Florist in Surabaya</h1>
          <p id="about-answer" className="mb-8 text-center text-lg leading-relaxed text-gray-700">
            {aboutAnswer}
          </p>
          <img
            src="/shop/storefront.jpg"
            alt="Storefront of Èlore Florist on Jl. Siwalankerto Timur I, Wonocolo, Surabaya"
            className="aspect-[16/10] w-full rounded-lg object-cover object-top"
          />
          <AboutFacts facts={aboutFacts} />
          <div className="mt-10 space-y-4 leading-relaxed text-gray-700">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-10 text-gray-700">
            Browse{" "}
            <Link href="/flowers" className="text-primary underline hover:opacity-70">flowers</Link>,{" "}
            <Link href="/gifts" className="text-primary underline hover:opacity-70">gifts</Link>, and{" "}
            <Link href="/weddings" className="text-primary underline hover:opacity-70">wedding flowers</Link>
            , or{" "}
            <Link href="/contact" className="text-primary underline hover:opacity-70">visit the shop page</Link>
            . Order on WhatsApp at{" "}
            <a href="https://wa.me/6285885606353" className="text-primary underline hover:opacity-70">+62 858-8560-6353</a>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
