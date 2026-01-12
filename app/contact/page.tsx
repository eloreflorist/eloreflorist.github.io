import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <Header />
      <main className='pt-40 pb-20'>
        <div className='mx-auto max-w-7xl px-4'>
          <h1 className='mb-8 text-4xl font-semibold text-center'>
            Contact Us
          </h1>
          <p className='text-center text-gray-600 mb-12 max-w-2xl mx-auto'>
            Get in touch with us for custom orders, inquiries, or to schedule a
            consultation.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto'>
            <div>
              <div className='space-y-4'>
                <div>
                  <p className='font-medium mb-1'>Address</p>
                  <p className='text-gray-600'>
                    Jl. Siwalankerto Timur I No.2, Siwalankerto, Kec. Wonocolo,
                    Surabaya, Jawa Timur, 60236
                  </p>
                </div>
                <div>
                  <p className='font-medium mb-1'>Phone</p>
                  <p className='text-gray-600'>0858-8560-6353</p>
                </div>
                <div>
                  <p className='font-medium mb-1'>Email</p>
                  <p className='text-gray-600'>eloreflorist@gmail.com</p>
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

            <div>
              <img 
                src='/flower.jpg' 
                alt='Èlore Florist Store' 
                className='w-full h-full object-cover rounded-lg shadow-lg'
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

