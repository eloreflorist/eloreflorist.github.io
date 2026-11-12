import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs, { sectionCrumbs } from "@/components/Breadcrumbs";
import ShopMap from "@/components/contact/ShopMap";
import CopyEmail from "@/components/contact/CopyEmail";

export default function Contact() {
  return (
    <>
      <Header current="/contact" />
      <main className='pt-20 pb-20 md:pt-40'>
        <div className='mx-auto max-w-7xl px-4'>
          <Breadcrumbs items={sectionCrumbs("Contact", "/contact")} />
          <h1 className='mb-8 text-4xl font-semibold text-center'>
            Contact Us
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto'>
            <div className="min-w-0">
              <div className='space-y-4'>
                <div>
                  <p className='font-medium mb-1'>Address</p>
                  <p className='text-gray-600'>
                    Jl. Siwalankerto Timur I No.1B, Siwalankerto,
                    Surabaya, Jawa Timur, 60236
                  </p>
                </div>
                <div>
                  <p className='font-medium mb-1'>Phone</p>
                  <a
                    href="https://wa.me/6285885606353"
                    className="text-primary underline hover:opacity-70"
                  >
                    0858-8560-6353
                  </a>
                </div>
                <div>
                  <p className='font-medium mb-1'>Email</p>
                  <CopyEmail email="eloreflorist@gmail.com" />
                </div>
                <div>
                  <p className='font-medium mb-1'>Hours</p>
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

