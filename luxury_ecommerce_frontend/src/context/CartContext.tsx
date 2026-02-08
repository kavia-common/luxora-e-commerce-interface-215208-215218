import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem, Product } from '../types';
import { mockProducts } from '../data/mockData';

interface CartContextType {
  cart: CartItem[];
  addToCart: (productId: number, quantity?: number, color?: string, size?: string) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// PUBLIC_INTERFACE
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

// PUBLIC_INTERFACE
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (productId: number, quantity = 1, color?: string, size?: string) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => 
        item.productId === productId && 
        item.color === color && 
        item.size === size
      );

      if (existingItem) {
        return prevCart.map(item =>
          item.productId === productId && item.color === color && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prevCart, { productId, quantity, color, size }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.productId !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart(prevCart =>
      prevCart.map(item =>
        item.productId === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      const product = mockProducts.find(p => p.id === item.productId);
      return total + (product?.price || 0) * item.quantity;
    }, 0);
  };

  const getCartItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
