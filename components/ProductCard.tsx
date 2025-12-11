// components/ProductCard.tsx
interface ProductCardProps {
    title: string;
    description: string;
    price?: string;
    image?: string;
  }
  
  const ProductCard = ({ title, description, price, image }: ProductCardProps) => {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-accent hover:shadow-xl transition-shadow">
        {image && (
          <div className="h-48 bg-secondary flex items-center justify-center">
            <span className="text-primary">Product Image</span>
          </div>
        )}
        <div className="p-6">
          <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
          <p className="text-primary mb-4">{description}</p>
          {price && (
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-accent">{price}</span>
              <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors">
                Learn More
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default ProductCard;