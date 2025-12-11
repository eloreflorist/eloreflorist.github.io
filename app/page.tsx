// app/page.tsx - Homepage
import Link from 'next/link'

export default function Home() {
  const services = [
    {
      title: 'Web Design',
      description: 'Modern, responsive websites tailored to your business.',
      price: '$499',
      image: '/service1.jpg' // Place in public/ folder
    },
    {
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and visibility.',
      price: '$299/month',
      image: '/service2.jpg'
    },
    {
      title: 'Consulting',
      description: 'Expert advice to grow your online presence.',
      price: '$150/hour',
      image: '/service3.jpg'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Professional Business Services</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            High-quality solutions for your business needs at competitive prices.
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gray-300 relative">
                  {/* Replace with actual images */}
                  <div className="absolute inset-0 flex items-center justify-center bg-blue-100">
                    <span className="text-blue-600 font-bold">Service Image</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                    <Link 
                      href={`/services/${service.title.toLowerCase().replace(' ', '-')}`}
                      className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-gray-600 mb-8">
            Contact us today for a free consultation and quote.
          </p>
          <Link 
            href="/contact" 
            className="bg-blue-600 text-white px-10 py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}