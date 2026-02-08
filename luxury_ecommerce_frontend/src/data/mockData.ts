// PUBLIC_INTERFACE
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

// PUBLIC_INTERFACE
export interface Review {
  id: number;
  productId: number;
  author: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

// PUBLIC_INTERFACE
export interface CartItem {
  productId: number;
  quantity: number;
  color?: string;
  size?: string;
}

// Mock Products
export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Premium Leather Handbag",
    slug: "premium-leather-handbag",
    price: 899,
    originalPrice: 1200,
    category: "Accessories",
    subcategory: "Handbags",
    description: "Exquisite handcrafted leather handbag made from the finest Italian leather. Features multiple compartments and elegant gold hardware.",
    images: ["https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800", "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800"],
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
    featured: true,
    colors: ["Black", "Brown", "Burgundy"],
    tags: ["luxury", "leather", "handcrafted"]
  },
  {
    id: 2,
    name: "Designer Sunglasses",
    slug: "designer-sunglasses",
    price: 349,
    category: "Accessories",
    subcategory: "Eyewear",
    description: "Timeless aviator-style sunglasses with UV protection and anti-glare coating. Perfect for any occasion.",
    images: ["https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800", "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800"],
    rating: 4.6,
    reviewCount: 89,
    inStock: true,
    featured: true,
    colors: ["Gold", "Silver", "Black"],
    tags: ["sunglasses", "designer", "UV protection"]
  },
  {
    id: 3,
    name: "Luxury Silk Scarf",
    slug: "luxury-silk-scarf",
    price: 279,
    originalPrice: 350,
    category: "Accessories",
    subcategory: "Scarves",
    description: "100% pure silk scarf with hand-painted floral motifs. Soft, breathable, and elegantly designed.",
    images: ["https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800"],
    rating: 4.9,
    reviewCount: 156,
    inStock: true,
    featured: false,
    colors: ["Ivory", "Rose", "Navy"],
    tags: ["silk", "handmade", "luxury"]
  },
  {
    id: 4,
    name: "Premium Watch Collection",
    slug: "premium-watch-collection",
    price: 1899,
    category: "Accessories",
    subcategory: "Watches",
    description: "Swiss-made automatic watch with sapphire crystal and genuine leather strap. Water-resistant to 100m.",
    images: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800", "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800"],
    rating: 4.9,
    reviewCount: 203,
    inStock: true,
    featured: true,
    colors: ["Silver", "Gold", "Rose Gold"],
    tags: ["watches", "swiss", "luxury"]
  },
  {
    id: 5,
    name: "Elegant Evening Gown",
    slug: "elegant-evening-gown",
    price: 1499,
    category: "Clothing",
    subcategory: "Dresses",
    description: "Stunning floor-length evening gown with intricate beadwork and flowing silhouette. Perfect for gala events.",
    images: ["https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800"],
    rating: 4.7,
    reviewCount: 67,
    inStock: true,
    featured: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Emerald"],
    tags: ["evening wear", "formal", "luxury"]
  },
  {
    id: 6,
    name: "Cashmere Coat",
    slug: "cashmere-coat",
    price: 2299,
    category: "Clothing",
    subcategory: "Outerwear",
    description: "Luxurious 100% cashmere coat with tailored fit and timeless design. Warm and sophisticated.",
    images: ["https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800"],
    rating: 4.8,
    reviewCount: 91,
    inStock: true,
    featured: false,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Camel", "Charcoal", "Navy"],
    tags: ["cashmere", "outerwear", "winter"]
  },
  {
    id: 7,
    name: "Diamond Stud Earrings",
    slug: "diamond-stud-earrings",
    price: 3499,
    category: "Jewelry",
    subcategory: "Earrings",
    description: "Brilliant-cut diamond earrings set in 18k white gold. Timeless elegance for any occasion.",
    images: ["https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800"],
    rating: 5.0,
    reviewCount: 78,
    inStock: true,
    featured: true,
    tags: ["diamond", "jewelry", "luxury"]
  },
  {
    id: 8,
    name: "Italian Leather Boots",
    slug: "italian-leather-boots",
    price: 799,
    category: "Footwear",
    subcategory: "Boots",
    description: "Handcrafted Italian leather boots with cushioned insole and durable rubber sole. Style meets comfort.",
    images: ["https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800"],
    rating: 4.6,
    reviewCount: 142,
    inStock: true,
    featured: false,
    sizes: ["6", "7", "8", "9", "10", "11"],
    colors: ["Black", "Brown"],
    tags: ["boots", "leather", "italian"]
  }
];

// Mock Reviews
export const mockReviews: Review[] = [
  {
    id: 1,
    productId: 1,
    author: "Sarah M.",
    rating: 5,
    date: "2024-01-15",
    comment: "Absolutely stunning bag! The leather quality is exceptional and the craftsmanship is impeccable. Worth every penny.",
    verified: true
  },
  {
    id: 2,
    productId: 1,
    author: "Emily R.",
    rating: 4,
    date: "2024-01-10",
    comment: "Beautiful bag, though slightly heavier than expected. The design is gorgeous and it fits all my essentials.",
    verified: true
  },
  {
    id: 3,
    productId: 2,
    author: "Michael B.",
    rating: 5,
    date: "2024-01-20",
    comment: "Best sunglasses I've ever owned. Perfect fit, excellent UV protection, and they look amazing!",
    verified: true
  },
  {
    id: 4,
    productId: 4,
    author: "James L.",
    rating: 5,
    date: "2024-01-18",
    comment: "This watch is a masterpiece. The automatic movement is smooth, and the build quality is outstanding.",
    verified: true
  }
];

// Mock User (for session)
export const mockUser = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  isLoggedIn: false
};
