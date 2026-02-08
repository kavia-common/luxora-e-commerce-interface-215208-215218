export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  category: string;
  subcategory: string;
  description: string;
  images: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  featured: boolean;
  colors?: string[];
  sizes?: string[];
  tags: string[];
}

export interface Review {
  id: number;
  productId: number;
  author: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface CartItem {
  productId: number;
  quantity: number;
  color?: string;
  size?: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  isLoggedIn: boolean;
}

export interface FilterOptions {
  categories: string[];
  priceRange: [number, number];
  rating: number;
  inStock: boolean;
  sortBy: 'price-asc' | 'price-desc' | 'rating' | 'newest';
}
