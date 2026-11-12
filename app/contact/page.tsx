import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs, { sectionCrumbs } from "@/components/Breadcrumbs";
import ShopMap from "@/components/contact/ShopMap";
import CopyEmail from "@/components/contact/CopyEmail";
import { shareImage } from "@/lib/site";
import type { Metadata } from "next";

const title = "Contact Èlore Florist in Surabaya | Èlore Florist";
const description =
  "Visit Èlore Florist at Jl. Siwalankerto Timur I No. 1B, Surabaya 60236. WhatsApp 0858-8560-6353. Open Mon–Fri 09:00–17:00, Sat 09:00–16:00. Closed Sunday.";
const contactUrl = "https://eloreflorist.github.io/contact";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: contactUrl },
  openGraph: {
    title,
    description,
    url: contactUrl,
    images: [{ url: shareImage, alt: "Bouquet arranged at Èlore Florist in Surabaya" }],
  },
};

export default function Contact() {
  return (
    <>
      <Header current="/contact" />
      <main className='pt-20 pb-20 md:pt-40'>
        <div className='mx-auto max-w-7xl px-4'>
          <Breadcrumbs items={sectionCrumbs("Contact", "/contact")} />
          <h1 className='mb-4 text-4xl font-semibold text-center'>
            Contact Èlore Florist in Surabaya
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-center leading-relaxed text-gray-700">
            Èlore Florist is at Jl. Siwalankerto Timur I No. 1B, Siwalankerto, Surabaya 60236.
            WhatsApp +62 858-8560-6353 for a quote. The shop is open Monday to Friday 09:00–17:00 and Saturday 09:00–16:00, and closed on Sunday.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto'>
            <div className="min-w-0">
              <div className='space-y-4'>
                <div>
                  <h2 className='font-medium mb-1'>Where to visit</h2>
                  <p className='text-gray-600'>
                    Jl. Siwalankerto Timur I No.1B, Siwalankerto,
                    Surabaya, Jawa Timur, 60236
                  </p>
                </div>
                <div>
                  <h2 className='font-medium mb-1'>WhatsApp</h2>
                  <a
                    href="https://wa.me/6285885606353"
                    className="text-primary underline hover:opacity-70"
                  >
                    0858-8560-6353
                  </a>
                </div>
                <div>
                  <h2 className='font-medium mb-1'>Email</h2>
                  <CopyEmail email="eloreflorist@gmail.com" />
                </div>
                <div>
                  <h2 className='font-medium mb-1'>Opening hours</h2>
                  <p className='text-gray-600'>
                    Monday - Friday: 09:00 AM - 05:00 PM
                    <br />
                    Saturday: 09:00 AM - 04:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <ShopMap />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

