import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  HeartIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

// PUBLIC_INTERFACE
/**
 * Main header component with sticky navigation and electronics categories
 */
const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const { getCartItemCount } = useCart();
  const { wishlist } = useWishlist();
  const navigate = useNavigate();

  const categories = [
    { name: 'Laptops', path: '/shop?category=laptops' },
    { name: 'Computer Accessories', path: '/shop?category=computer-accessories' },
    { name: 'CCTV Camera', path: '/shop?category=cctv-camera' },
    { name: 'Biometric Items', path: '/shop?category=biometric-items' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 text-center text-sm">
        <p>Free shipping on orders over $500 | 30-day returns | Premium electronics delivered</p>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-primary"
            >
              TECHORA
            </motion.h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-text hover:text-primary transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            
            {/* Shop Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShopDropdownOpen(true)}
              onMouseLeave={() => setShopDropdownOpen(false)}
            >
              <button className="text-text hover:text-primary transition-colors duration-200 font-medium flex items-center gap-1">
                Shop
                <ChevronDownIcon className="h-4 w-4" />
              </button>
              
              <AnimatePresence>
                {shopDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden"
                  >
                    <div className="py-2">
                      <Link
                        to="/shop"
                        className="block px-4 py-3 hover:bg-gray-50 transition-colors text-text font-medium"
                      >
                        All Products
                      </Link>
                      <div className="border-t border-gray-100 my-2"></div>
                      {categories.map((category) => (
                        <Link
                          key={category.name}
                          to={category.path}
                          className="block px-4 py-3 hover:bg-gray-50 transition-colors text-secondary hover:text-primary"
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/shop?filter=featured"
              className="text-text hover:text-primary transition-colors duration-200 font-medium"
            >
              Featured
            </Link>
            <Link
              to="/shop?filter=deals"
              className="text-text hover:text-primary transition-colors duration-200 font-medium"
            >
              Deals
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Search"
            >
              <MagnifyingGlassIcon className="h-6 w-6 text-primary" />
            </motion.button>

            {/* Wishlist */}
            <Link to="/wishlist" className="relative">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <HeartIcon className="h-6 w-6 text-primary" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-error text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </motion.div>
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ShoppingBagIcon className="h-6 w-6 text-primary" />
                {getCartItemCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-error text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getCartItemCount()}
                  </span>
                )}
              </motion.div>
            </Link>

            {/* Account */}
            <Link to="/account">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <UserIcon className="h-6 w-6 text-primary" />
              </motion.div>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6 text-primary" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 overflow-hidden"
            >
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search electronics..."
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  autoFocus
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  aria-label="Submit search"
                >
                  <MagnifyingGlassIcon className="h-6 w-6 text-primary" />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-200 bg-white overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-text hover:text-primary transition-colors duration-200 font-medium py-2"
              >
                Home
              </Link>
              <Link
                to="/shop"
                onClick={() => setMobileMenuOpen(false)}
                className="text-text hover:text-primary transition-colors duration-200 font-medium py-2"
              >
                All Products
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={category.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-secondary hover:text-primary transition-colors duration-200 font-medium py-2 pl-4"
                >
                  {category.name}
                </Link>
              ))}
              <Link
                to="/shop?filter=featured"
                onClick={() => setMobileMenuOpen(false)}
                className="text-text hover:text-primary transition-colors duration-200 font-medium py-2"
              >
                Featured
              </Link>
              <Link
                to="/shop?filter=deals"
                onClick={() => setMobileMenuOpen(false)}
                className="text-text hover:text-primary transition-colors duration-200 font-medium py-2"
              >
                Deals
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
