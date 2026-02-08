import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrashIcon } from '@heroicons/react/24/outline';
import Button from '../components/common/Button';
import { useCart } from '../context/CartContext';
import { mockProducts } from '../data/mockData';

// PUBLIC_INTERFACE
/**
 * Shopping cart page with cart management
 */
const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  const cartItems = cart.map(item => ({
    ...item,
    product: mockProducts.find(p => p.id === item.productId)!
  }));

  const subtotal = getCartTotal();
  const shipping = subtotal > 500 ? 0 : 25;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-text mb-4">Your cart is empty</h2>
          <p className="text-secondary mb-8">Start shopping to add items to your cart</p>
          <Link to="/shop">
            <Button size="lg">Shop Now</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-text mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md">
              {cartItems.map((item, index) => (
                <motion.div
                  key={`${item.productId}-${item.color}-${item.size}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 p-6 border-b last:border-b-0"
                >
                  {/* Image */}
                  <Link to={`/product/${item.product.slug}`} className="flex-shrink-0">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                  </Link>

                  {/* Details */}
                  <div className="flex-1">
                    <Link to={`/product/${item.product.slug}`}>
                      <h3 className="font-semibold text-text hover:text-primary transition-colors mb-2">
                        {item.product.name}
                      </h3>
                    </Link>
                    <div className="text-sm text-secondary space-y-1">
                      {item.color && <p>Color: {item.color}</p>}
                      {item.size && <p>Size: {item.size}</p>}
                    </div>
                    <p className="text-lg font-bold text-text mt-2">${item.product.price}</p>
                  </div>

                  {/* Quantity & Remove */}
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeFromCart(item.productId)}
                      className="text-error hover:text-red-700 transition-colors"
                      aria-label="Remove from cart"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                        className="w-8 h-8 border-2 border-gray-300 rounded hover:border-primary transition-colors"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                        className="w-8 h-8 border-2 border-gray-300 rounded hover:border-primary transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="p-6">
                <button
                  onClick={clearCart}
                  className="text-error hover:text-red-700 transition-colors font-medium"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-md p-6 sticky top-24"
            >
              <h2 className="text-2xl font-bold text-text mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-secondary">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-secondary">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-secondary">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-4 flex justify-between text-xl font-bold text-text">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <Link to="/checkout">
                <Button size="lg" fullWidth>
                  Proceed to Checkout
                </Button>
              </Link>

              <Link to="/shop">
                <Button variant="outline" size="lg" fullWidth className="mt-4">
                  Continue Shopping
                </Button>
              </Link>

              {subtotal < 500 && (
                <p className="text-sm text-secondary mt-4 text-center">
                  Add ${(500 - subtotal).toFixed(2)} more for free shipping!
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
