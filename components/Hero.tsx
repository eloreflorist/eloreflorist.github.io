// components/Hero.tsx
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-accent/20 to-secondary/20 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
          Professional Business Solutions
        </h1>
        <p className="text-xl text-primary mb-8 max-w-2xl mx-auto">
          We provide high-quality services and products to help your business grow and succeed in today&apos;s competitive market.
        </p>
        <div className="space-x-4">
          <Link
            href="/services"
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-block"
          >
            Our Services
          </Link>
          <Link
            href="/contact"
            className="bg-white text-primary border-2 border-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors inline-block"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;