// app/page.tsx
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  const featuredProducts = [
    {
      title: 'Premium Service Package',
      description: 'Comprehensive business solution package',
      price: '$499/mo',
    },
    {
      title: 'Starter Kit',
      description: 'Essential tools for new businesses',
      price: '$199/mo',
    },
    {
      title: 'Enterprise Solution',
      description: 'Custom solutions for large organizations',
      price: 'Custom',
    },
  ];

  return (
    <>
      <Hero />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-accent text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Quality Guaranteed</h3>
              <p className="text-primary">We deliver only the highest quality services and products.</p>
            </div>
            <div className="text-center">
              <div className="bg-accent text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏱️</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Fast Delivery</h3>
              <p className="text-primary">Quick turnaround times without compromising quality.</p>
            </div>
            <div className="text-center">
              <div className="bg-accent text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">24/7 Support</h3>
              <p className="text-primary">Round-the-clock customer support for all your needs.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}