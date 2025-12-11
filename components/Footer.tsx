// components/Footer.tsx
const Footer = () => {
    return (
      <footer className="bg-primary text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Business<span className="text-accent">Name</span></h3>
              <p className="text-secondary">
                Professional services and products for your business needs.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-secondary hover:text-white transition-colors">Home</a></li>
                <li><a href="/services" className="text-secondary hover:text-white transition-colors">Services</a></li>
                <li><a href="/products" className="text-secondary hover:text-white transition-colors">Products</a></li>
                <li><a href="/about" className="text-secondary hover:text-white transition-colors">About</a></li>
                <li><a href="/location" className="text-secondary hover:text-white transition-colors">Location</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-secondary">
                <li>Email: info@business.com</li>
                <li>Phone: (123) 456-7890</li>
                <li>Address: 123 Business St, City</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-accent mt-8 pt-8 text-center text-secondary">
            <p>&copy; {new Date().getFullYear()} Business Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;