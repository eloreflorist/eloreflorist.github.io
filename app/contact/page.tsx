import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="pt-40 pb-20">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="mb-8 text-4xl font-semibold text-center">Contact Us</h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Get in touch with us for custom orders, inquiries, or to schedule a consultation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
                </div>
                <button className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">Send Message</button>
              </form>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-1">Address</p>
                  <p className="text-gray-600">123 Flower Street<br />Garden City, GC 12345</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Phone</p>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Email</p>
                  <p className="text-gray-600">hello@elore-florist.com</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Hours</p>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 5:00 PM<br />
                    Sunday: Closed
                  </p>
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

