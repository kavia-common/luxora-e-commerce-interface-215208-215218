import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from '../components/common/ProductCard';
import Button from '../components/common/Button';
import { useWishlist } from '../context/WishlistContext';
import { mockProducts } from '../data/mockData';

// PUBLIC_INTERFACE
/**
 * Wishlist page displaying saved products
 */
const Wishlist: React.FC = () => {
  const { wishlist } = useWishlist();
  const wishlistProducts = mockProducts.filter(p => wishlist.includes(p.id));

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-text mb-4">Your wishlist is empty</h2>
          <p className="text-secondary mb-8">Save your favorite items for later</p>
          <Link to="/shop">
            <Button size="lg">Start Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-text mb-8"
        >
          My Wishlist
        </motion.h1>
        <p className="text-secondary mb-8">{wishlist.length} item{wishlist.length !== 1 && 's'}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {wishlistProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
