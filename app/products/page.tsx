// app/products/page.tsx
import ProductCard from '@/components/ProductCard';

const Products = () => {
  const products = [
    {
      title: 'Business Starter Pack',
      description: 'Everything you need to launch your business online.',
      price: '$299',
    },
    {
      title: 'Professional Suite',
      description: 'Advanced tools for growing businesses.',
      price: '$599',
    },
    {
      title: 'Enterprise Platform',
      description: 'Scalable solutions for large organizations.',
      price: 'Custom Quote',
    },
    {
      title: 'E-commerce Package',
      description: 'Complete online store setup and management.',
      price: '$499',
    },
    {
      title: 'Marketing Toolkit',
      description: 'Digital marketing tools and analytics.',
      price: '$199',
    },
    {
      title: 'Support Package',
      description: 'Priority technical support and maintenance.',
      price: '$99/mo',
    },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-primary text-center mb-4">Our Products</h1>
        <p className="text-xl text-primary text-center mb-12 max-w-3xl mx-auto">
          Discover our range of products designed to meet your business needs at every stage of growth.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Need Custom Solutions?</h2>
          <p className="text-primary mb-8 max-w-2xl mx-auto">
            We can create tailored products specifically for your business requirements. Contact us to discuss your needs.
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Request Custom Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;