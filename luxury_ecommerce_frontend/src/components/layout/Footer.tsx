import React from 'react';
import { Link } from 'react-router-dom';

// PUBLIC_INTERFACE
/**
 * Footer component with links and information
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">LUXORA</h3>
            <p className="text-gray-300 mb-4">
              Premium luxury fashion and accessories for the discerning customer.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/shop?filter=new" className="text-gray-300 hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link to="/shop?category=clothing" className="text-gray-300 hover:text-white transition-colors">Clothing</Link></li>
              <li><Link to="/shop?category=accessories" className="text-gray-300 hover:text-white transition-colors">Accessories</Link></li>
              <li><Link to="/shop?category=jewelry" className="text-gray-300 hover:text-white transition-colors">Jewelry</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link to="/account" className="text-gray-300 hover:text-white transition-colors">My Account</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">Subscribe for exclusive offers and updates</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-md text-text focus:outline-none"
              />
              <button
                type="submit"
                className="bg-success hover:bg-emerald-700 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 LUXORA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
