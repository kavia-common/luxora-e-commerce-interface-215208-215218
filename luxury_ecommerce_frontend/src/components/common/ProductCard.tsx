import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { Product } from '../../types';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

// PUBLIC_INTERFACE
/**
 * Product card component with hover effects and wishlist toggle
 */
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const inWishlist = isInWishlist(product.id);

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product.id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative"
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative overflow-hidden rounded-lg bg-surface shadow-md hover:shadow-xl transition-shadow duration-300">
          {/* Image */}
          <div className="aspect-square overflow-hidden">
            <img
              src={product.images[0]}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.featured && (
              <span className="bg-success text-white text-xs font-semibold px-3 py-1 rounded-full">
                Featured
              </span>
            )}
            {product.originalPrice && (
              <span className="bg-error text-white text-xs font-semibold px-3 py-1 rounded-full">
                Sale
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleWishlistToggle}
              className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
              aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
            >
              {inWishlist ? (
                <HeartSolidIcon className="h-5 w-5 text-error" />
              ) : (
                <HeartIcon className="h-5 w-5 text-primary" />
              )}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleAddToCart}
              className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
              aria-label="Add to cart"
            >
              <ShoppingBagIcon className="h-5 w-5 text-primary" />
            </motion.button>
          </div>

          {/* Content */}
          <div className="p-4">
            <h3 className="text-lg font-semibold text-text mb-1 truncate">{product.name}</h3>
            <p className="text-sm text-secondary mb-2">{product.category}</p>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-secondary">({product.reviewCount})</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-text">${product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-secondary line-through">${product.originalPrice}</span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
