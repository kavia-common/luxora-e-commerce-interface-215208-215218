// Electronics product specifications by category
export interface LaptopSpecs {
  cpu: string;
  ram: string;
  storage: string;
  gpu?: string;
  screenSize: string;
  brand: string;
}

export interface AccessorySpecs {
  type: string;
  compatibility: string;
  connectivity: 'wired' | 'wireless' | 'both';
}

export interface CCTVSpecs {
  resolution: string;
  nightVision: boolean;
  location: 'indoor' | 'outdoor' | 'both';
  storage: string;
}

export interface BiometricSpecs {
  modality: string;
  capacity: string;
  connectivity: string;
}

export type ProductSpecs = LaptopSpecs | AccessorySpecs | CCTVSpecs | BiometricSpecs | null;

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
  brand?: string;
  tags: string[];
  specs?: ProductSpecs;
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
