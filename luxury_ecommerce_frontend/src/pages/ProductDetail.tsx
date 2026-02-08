import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartIcon, ShoppingBagIcon, StarIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import Button from '../components/common/Button';
import { mockProducts, mockReviews } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { LaptopSpecs, AccessorySpecs, CCTVSpecs, BiometricSpecs } from '../types';

// PUBLIC_INTERFACE
/**
 * Product detail page with electronics specifications, image gallery, reviews, and add to cart
 */
const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = mockProducts.find(p => p.slug === slug);
  const productReviews = mockReviews.filter(r => r.productId === product?.id);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'specs' | 'reviews'>('description');

  const { addToCart } = useCart();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-text mb-4">Product not found</h2>
          <Link to="/shop">
            <Button>Back to Shop</Button>
          </Link>
        </div>
      </div>
    );
  }

  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
  };

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };

  const renderSpecs = () => {
    if (!product.specs) return null;

    if (product.category === 'Laptops') {
      const specs = product.specs as LaptopSpecs;
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex justify-between py-2 border-b">
            <span className="font-medium text-text">CPU:</span>
            <span className="text-secondary">{specs.cpu}</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="font-medium text-text">RAM:</span>
            <span className="text-secondary">{specs.ram}</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="font-medium text-text">Storage:</span>
            <span className="text-secondary">{specs.storage}</span>
          </div>
          {specs.gpu && (
            <div className="flex justify-between py-2 border-b">
              <span className="font-medium text-text">GPU:</span>
              <span className="text-secondary">{specs.gpu}</span>
            </div>
          )}
          <div className="flex justify-between py-2 border-b">
            <span className="font-medium text-text">Screen Size:</span>
            <span className="text-secondary">{specs.screenSize}</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="font-medium text-text">Brand:</span>
            <span className="text-secondary">{specs.brand}</span>
          </div>
        </div>
      );
    } else if (product.category === 'Computer Accessories') {
      const specs = product.specs as AccessorySpecs;
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex justify-between py-2 border-b">
            <span className="font-medium text-text">Type:</span>
            <span className="text-secondary">{specs.type}</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="font-medium text-text">Compatibility:</span>
            <span className="text-secondary">{specs.compatibility}</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="font-medium text-text">Connectivity:</span>
            <span className="text-secondary capitalize">{specs.connectivity}</span>
          </div>
        </div>
      );
    } else if (product.category === 'CCTV Camera') {
      const specs = product.specs as CCTVSpecs;
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex justify-between py-2 border-b">
            <span className="font-medium text-text">Resolution:</span>
            <span className="text-secondary">{specs.resolution}</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="font-medium text-text">Night Vision:</span>
            <span className="text-secondary">{specs.nightVision ? 'Yes' : 'No'}</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="font-medium text-text">Location:</span>
            <span className="text-secondary capitalize">{specs.location}</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="font-medium text-text">Storage:</span>
            <span className="text-secondary">{specs.storage}</span>
          </div>
        </div>
      );
    } else if (product.category === 'Biometric Items') {
      const specs = product.specs as BiometricSpecs;
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex justify-between py-2 border-b">
            <span className="font-medium text-text">Modality:</span>
            <span className="text-secondary">{specs.modality}</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="font-medium text-text">Capacity:</span>
            <span className="text-secondary">{specs.capacity}</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="font-medium text-text">Connectivity:</span>
            <span className="text-secondary">{specs.connectivity}</span>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center space-x-2 text-secondary">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-primary">Shop</Link></li>
            <li>/</li>
            <li className="text-text">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div>
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-square rounded-lg overflow-hidden mb-4 bg-white shadow-lg"
            >
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold text-text mb-4">{product.name}</h1>
            
            {/* Brand */}
            {product.brand && (
              <p className="text-lg text-secondary mb-2">Brand: <span className="font-medium">{product.brand}</span></p>
            )}

            {/* Rating */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-secondary">({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-bold text-text">${product.price}</span>
              {product.originalPrice && (
                <span className="text-2xl text-secondary line-through">${product.originalPrice}</span>
              )}
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                product.inStock ? 'bg-success/10 text-success' : 'bg-error/10 text-error'
              }`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            {/* Description */}
            <p className="text-secondary mb-6 leading-relaxed">{product.description}</p>

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="font-semibold text-text mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border-2 border-gray-300 rounded-lg hover:border-primary transition-colors"
                >
                  -
                </button>
                <span className="w-12 text-center font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border-2 border-gray-300 rounded-lg hover:border-primary transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-6">
              <Button
                onClick={handleAddToCart}
                variant="primary"
                size="lg"
                fullWidth
                disabled={!product.inStock}
              >
                <ShoppingBagIcon className="h-5 w-5 mr-2 inline" />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWishlistToggle}
                className="w-14 h-14 border-2 border-gray-300 rounded-lg hover:border-primary transition-colors flex items-center justify-center"
                aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
              >
                {inWishlist ? (
                  <HeartSolidIcon className="h-6 w-6 text-error" />
                ) : (
                  <HeartIcon className="h-6 w-6 text-primary" />
                )}
              </motion.button>
            </div>

            {/* Product Features */}
            <div className="border-t pt-6">
              <ul className="space-y-2 text-secondary">
                <li>✓ Free shipping on orders over $500</li>
                <li>✓ 30-day easy returns</li>
                <li>✓ Secure checkout</li>
                <li>✓ Genuine products with warranty</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-16">
          <div className="flex border-b mb-6">
            <button
              onClick={() => setActiveTab('description')}
              className={`px-6 py-3 font-semibold transition-colors ${
                activeTab === 'description'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-secondary hover:text-text'
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`px-6 py-3 font-semibold transition-colors ${
                activeTab === 'specs'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-secondary hover:text-text'
              }`}
            >
              Specifications
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-6 py-3 font-semibold transition-colors ${
                activeTab === 'reviews'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-secondary hover:text-text'
              }`}
            >
              Reviews ({product.reviewCount})
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'description' && (
              <motion.div
                key="description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <h3 className="text-xl font-semibold text-text mb-4">Product Details</h3>
                <p className="text-secondary leading-relaxed mb-4">{product.description}</p>
                <h4 className="font-semibold text-text mb-2">Key Features:</h4>
                <ul className="list-disc list-inside space-y-1 text-secondary">
                  <li>Premium quality components</li>
                  <li>Advanced technology</li>
                  <li>Professional-grade performance</li>
                  <li>Comprehensive warranty included</li>
                </ul>
              </motion.div>
            )}

            {activeTab === 'specs' && (
              <motion.div
                key="specs"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <h3 className="text-xl font-semibold text-text mb-6">Technical Specifications</h3>
                {renderSpecs()}
                {!product.specs && (
                  <p className="text-secondary">Detailed specifications coming soon.</p>
                )}
              </motion.div>
            )}

            {activeTab === 'reviews' && (
              <motion.div
                key="reviews"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <h3 className="text-xl font-semibold text-text mb-6">Customer Reviews</h3>
                <div className="space-y-6">
                  {productReviews.length > 0 ? (
                    productReviews.map(review => (
                      <div key={review.id} className="border-b pb-6">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-text">{review.author}</span>
                            {review.verified && (
                              <span className="text-xs bg-success text-white px-2 py-1 rounded">
                                Verified Purchase
                              </span>
                            )}
                          </div>
                          <span className="text-sm text-secondary">{review.date}</span>
                        </div>
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon
                              key={i}
                              className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                        <p className="text-secondary">{review.comment}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-secondary">No reviews yet. Be the first to review this product!</p>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
