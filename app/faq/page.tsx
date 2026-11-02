import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqJsonLd from "@/components/FaqJsonLd";
import { faqs, faqPageUrl } from "@/lib/faq";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Florist FAQ in Surabaya – Delivery, Orders & Care | Èlore Florist",
  description:
    "Common questions about ordering flowers, Surabaya delivery, same-day bouquets, wedding florals, and flower care from Èlore Florist in Wonocolo.",
  openGraph: {
    title: "Florist FAQ in Surabaya – Delivery, Orders & Care | Èlore Florist",
    description:
      "Answers about flower delivery, same-day orders, wedding bouquets, and care from Èlore Florist in Surabaya.",
    url: faqPageUrl,
  },
  alternates: {
    canonical: faqPageUrl,
  },
};

export default function FaqPage() {
  return (
    <>
      <FaqJsonLd />
      <Header />
      <main className="pt-40 pb-20">
        <div className="mx-auto max-w-3xl px-4">
          <nav className="mb-8 text-sm text-gray-500" aria-label="Breadcrumb">
            <ol className="flex gap-2">
              <li>
                <Link href="/" className="hover:underline">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <span aria-current="page">FAQ</span>
              </li>
            </ol>
          </nav>

          <h1 className="mb-4 text-center text-4xl font-semibold">
            Florist FAQ in Surabaya
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            Quick answers from Èlore Florist in Wonocolo, Surabaya — how to order on WhatsApp, delivery areas, same-day bouquets, wedding flowers, and care.
          </p>

          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {faqs.map((faq) => (
              <details key={faq.question} className="group">
                <summary className="faq-summary flex cursor-pointer items-start justify-between gap-4 py-5 text-left">
                  <h2 className="text-lg font-semibold md:text-xl">{faq.question}</h2>
                  <span
                    className="mt-1 shrink-0 text-gray-400 transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  >
                    ▼
                  </span>
                </summary>
                <p className="pb-5 leading-relaxed text-gray-700">{faq.answer}</p>
              </details>
            ))}
          </div>

          <p className="mt-14 text-center text-gray-700">
            Still have a question?{" "}
            <Link href="/contact" className="text-primary underline hover:opacity-70">
              Visit our contact page
            </Link>{" "}
            or WhatsApp Èlore Florist at{" "}
            <a href="https://wa.me/6285885606353" className="text-primary underline hover:opacity-70">
              +62 858-8560-6353
            </a>
            . Browse{" "}
            <Link href="/flowers" className="text-primary underline hover:opacity-70">flowers</Link>,{" "}
            <Link href="/gifts" className="text-primary underline hover:opacity-70">gifts</Link>, and{" "}
            <Link href="/weddings" className="text-primary underline hover:opacity-70">wedding flowers</Link>{" "}
            in Surabaya.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
