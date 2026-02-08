import { Product, Review, CartItem, LaptopSpecs, AccessorySpecs, CCTVSpecs, BiometricSpecs } from '../types';

// Mock Electronics Products
export const mockProducts: Product[] = [
  // LAPTOPS
  {
    id: 1,
    name: "Dell XPS 15 Professional Laptop",
    slug: "dell-xps-15-professional",
    price: 1899,
    originalPrice: 2199,
    category: "Laptops",
    subcategory: "Professional",
    brand: "Dell",
    description: "Premium professional laptop with stunning 15.6\" OLED display, powerful Intel Core i7 processor, and exceptional build quality. Perfect for creative professionals and power users.",
    images: [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800"
    ],
    rating: 4.8,
    reviewCount: 156,
    inStock: true,
    featured: true,
    tags: ["professional", "high-performance", "OLED"],
    specs: {
      cpu: "Intel Core i7-12700H",
      ram: "16GB DDR5",
      storage: "512GB NVMe SSD",
      gpu: "NVIDIA GeForce RTX 3050",
      screenSize: "15.6\" OLED 4K",
      brand: "Dell"
    } as LaptopSpecs
  },
  {
    id: 2,
    name: "MacBook Pro 14\" M2 Pro",
    slug: "macbook-pro-14-m2",
    price: 2499,
    category: "Laptops",
    subcategory: "Professional",
    brand: "Apple",
    description: "Revolutionary performance with Apple's M2 Pro chip. Stunning Liquid Retina XDR display, exceptional battery life, and professional-grade capabilities for demanding workflows.",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800"
    ],
    rating: 4.9,
    reviewCount: 203,
    inStock: true,
    featured: true,
    tags: ["apple", "M2", "professional"],
    specs: {
      cpu: "Apple M2 Pro (10-core)",
      ram: "16GB Unified Memory",
      storage: "512GB SSD",
      gpu: "16-core GPU",
      screenSize: "14.2\" Liquid Retina XDR",
      brand: "Apple"
    } as LaptopSpecs
  },
  {
    id: 3,
    name: "ASUS ROG Gaming Laptop",
    slug: "asus-rog-gaming-laptop",
    price: 1699,
    originalPrice: 1999,
    category: "Laptops",
    subcategory: "Gaming",
    brand: "ASUS",
    description: "High-performance gaming laptop with blazing-fast 240Hz display, powerful RTX graphics, and advanced cooling system. Dominate your games with ultimate performance.",
    images: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800",
      "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800"
    ],
    rating: 4.7,
    reviewCount: 142,
    inStock: true,
    featured: true,
    tags: ["gaming", "high-refresh", "RGB"],
    specs: {
      cpu: "AMD Ryzen 9 6900HX",
      ram: "32GB DDR5",
      storage: "1TB NVMe SSD",
      gpu: "NVIDIA GeForce RTX 4070",
      screenSize: "17.3\" FHD 240Hz",
      brand: "ASUS"
    } as LaptopSpecs
  },
  {
    id: 4,
    name: "Lenovo ThinkPad X1 Carbon",
    slug: "lenovo-thinkpad-x1-carbon",
    price: 1599,
    category: "Laptops",
    subcategory: "Business",
    brand: "Lenovo",
    description: "Ultra-lightweight business laptop with military-grade durability, long battery life, and legendary ThinkPad keyboard. The ultimate mobile workstation for professionals.",
    images: [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800"
    ],
    rating: 4.6,
    reviewCount: 98,
    inStock: true,
    featured: false,
    tags: ["business", "lightweight", "durable"],
    specs: {
      cpu: "Intel Core i7-1260P",
      ram: "16GB LPDDR5",
      storage: "512GB NVMe SSD",
      screenSize: "14\" WUXGA",
      brand: "Lenovo"
    } as LaptopSpecs
  },

  // COMPUTER ACCESSORIES
  {
    id: 5,
    name: "Logitech MX Master 3S Wireless Mouse",
    slug: "logitech-mx-master-3s",
    price: 99,
    category: "Computer Accessories",
    subcategory: "Mice",
    brand: "Logitech",
    description: "Premium wireless mouse with ultra-precise 8K DPI sensor, quiet clicks, and ergonomic design. Multi-device connectivity and app-specific customization for maximum productivity.",
    images: [
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800",
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800"
    ],
    rating: 4.9,
    reviewCount: 312,
    inStock: true,
    featured: true,
    tags: ["wireless", "ergonomic", "productivity"],
    specs: {
      type: "Wireless Mouse",
      compatibility: "Windows, Mac, Linux",
      connectivity: "wireless"
    } as AccessorySpecs
  },
  {
    id: 6,
    name: "Mechanical Gaming Keyboard RGB",
    slug: "mechanical-gaming-keyboard-rgb",
    price: 149,
    originalPrice: 199,
    category: "Computer Accessories",
    subcategory: "Keyboards",
    brand: "Corsair",
    description: "High-performance mechanical keyboard with Cherry MX switches, per-key RGB lighting, and programmable macros. Built for gaming and typing excellence.",
    images: [
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800"
    ],
    rating: 4.7,
    reviewCount: 189,
    inStock: true,
    featured: false,
    tags: ["mechanical", "RGB", "gaming"],
    specs: {
      type: "Mechanical Keyboard",
      compatibility: "Windows, Mac",
      connectivity: "both"
    } as AccessorySpecs
  },
  {
    id: 7,
    name: "USB-C Docking Station Hub",
    slug: "usb-c-docking-station",
    price: 199,
    category: "Computer Accessories",
    subcategory: "Docking Stations",
    brand: "Dell",
    description: "Universal USB-C docking station with dual 4K display support, multiple USB ports, Ethernet, and 90W power delivery. Complete workstation connectivity in one hub.",
    images: [
      "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=800"
    ],
    rating: 4.5,
    reviewCount: 87,
    inStock: true,
    featured: false,
    tags: ["docking", "USB-C", "multi-display"],
    specs: {
      type: "Docking Station",
      compatibility: "USB-C devices",
      connectivity: "wired"
    } as AccessorySpecs
  },
  {
    id: 8,
    name: "Wireless Headset with Noise Cancellation",
    slug: "wireless-headset-noise-cancel",
    price: 249,
    category: "Computer Accessories",
    subcategory: "Audio",
    brand: "Sony",
    description: "Premium wireless headset with industry-leading noise cancellation, 30-hour battery life, and exceptional sound quality. Perfect for work and entertainment.",
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800"
    ],
    rating: 4.8,
    reviewCount: 267,
    inStock: true,
    featured: true,
    tags: ["wireless", "noise-cancellation", "premium"],
    specs: {
      type: "Wireless Headset",
      compatibility: "Universal Bluetooth",
      connectivity: "wireless"
    } as AccessorySpecs
  },

  // CCTV CAMERAS
  {
    id: 9,
    name: "4K Ultra HD Security Camera System",
    slug: "4k-security-camera-system",
    price: 599,
    originalPrice: 799,
    category: "CCTV Camera",
    subcategory: "Camera Systems",
    brand: "Hikvision",
    description: "Professional 8-channel 4K security camera system with advanced night vision, motion detection, and cloud storage. Complete security solution for home and business.",
    images: [
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800",
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=800"
    ],
    rating: 4.6,
    reviewCount: 134,
    inStock: true,
    featured: true,
    tags: ["4K", "night-vision", "system"],
    specs: {
      resolution: "4K Ultra HD (3840x2160)",
      nightVision: true,
      location: "both",
      storage: "2TB NVR included"
    } as CCTVSpecs
  },
  {
    id: 10,
    name: "Outdoor Weatherproof Security Camera",
    slug: "outdoor-weatherproof-camera",
    price: 179,
    category: "CCTV Camera",
    subcategory: "Outdoor Cameras",
    brand: "Arlo",
    description: "Wireless outdoor security camera with 2K resolution, color night vision, and two-way audio. Weather-resistant design with intelligent alerts and cloud recording.",
    images: [
      "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=800"
    ],
    rating: 4.5,
    reviewCount: 98,
    inStock: true,
    featured: false,
    tags: ["outdoor", "wireless", "weatherproof"],
    specs: {
      resolution: "2K (2560x1440)",
      nightVision: true,
      location: "outdoor",
      storage: "Cloud & microSD"
    } as CCTVSpecs
  },
  {
    id: 11,
    name: "Indoor Pan-Tilt Smart Camera",
    slug: "indoor-pan-tilt-camera",
    price: 89,
    category: "CCTV Camera",
    subcategory: "Indoor Cameras",
    brand: "TP-Link",
    description: "Smart indoor camera with 360° pan-tilt coverage, 1080p HD video, motion tracking, and two-way audio. Perfect for monitoring your home or office remotely.",
    images: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800"
    ],
    rating: 4.4,
    reviewCount: 156,
    inStock: true,
    featured: false,
    tags: ["indoor", "pan-tilt", "smart"],
    specs: {
      resolution: "1080p Full HD",
      nightVision: true,
      location: "indoor",
      storage: "microSD up to 128GB"
    } as CCTVSpecs
  },

  // BIOMETRIC ITEMS
  {
    id: 12,
    name: "Fingerprint Time Attendance System",
    slug: "fingerprint-attendance-system",
    price: 299,
    category: "Biometric Items",
    subcategory: "Time Attendance",
    brand: "ZKTeco",
    description: "Advanced fingerprint time attendance system with large capacity, TCP/IP connectivity, and comprehensive software. Ideal for businesses of all sizes.",
    images: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800"
    ],
    rating: 4.7,
    reviewCount: 87,
    inStock: true,
    featured: true,
    tags: ["fingerprint", "attendance", "enterprise"],
    specs: {
      modality: "Fingerprint",
      capacity: "3,000 fingerprints / 100,000 records",
      connectivity: "TCP/IP, USB"
    } as BiometricSpecs
  },
  {
    id: 13,
    name: "Face Recognition Access Control",
    slug: "face-recognition-access-control",
    price: 499,
    originalPrice: 649,
    category: "Biometric Items",
    subcategory: "Access Control",
    brand: "Suprema",
    description: "Cutting-edge face recognition access control system with mask detection, temperature screening, and anti-spoofing technology. High-security solution for modern facilities.",
    images: [
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800"
    ],
    rating: 4.8,
    reviewCount: 72,
    inStock: true,
    featured: true,
    tags: ["face-recognition", "access-control", "AI"],
    specs: {
      modality: "Face Recognition",
      capacity: "10,000 faces / 1,000,000 logs",
      connectivity: "TCP/IP, Wi-Fi, Wiegand"
    } as BiometricSpecs
  },
  {
    id: 14,
    name: "Biometric Door Lock Smart",
    slug: "biometric-door-lock-smart",
    price: 199,
    category: "Biometric Items",
    subcategory: "Smart Locks",
    brand: "Samsung",
    description: "Smart biometric door lock with fingerprint, PIN, and smartphone access. Weather-resistant design with auto-lock and tamper alerts for complete home security.",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
    ],
    rating: 4.6,
    reviewCount: 143,
    inStock: true,
    featured: false,
    tags: ["smart-lock", "fingerprint", "home-security"],
    specs: {
      modality: "Fingerprint + PIN + App",
      capacity: "100 fingerprints",
      connectivity: "Bluetooth, Wi-Fi"
    } as BiometricSpecs
  },
  {
    id: 15,
    name: "USB Fingerprint Scanner",
    slug: "usb-fingerprint-scanner",
    price: 49,
    category: "Biometric Items",
    subcategory: "Scanners",
    brand: "Kensington",
    description: "Compact USB fingerprint scanner with fast recognition and Windows Hello support. Simple plug-and-play security for your PC with military-grade encryption.",
    images: [
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800"
    ],
    rating: 4.3,
    reviewCount: 201,
    inStock: true,
    featured: false,
    tags: ["USB", "fingerprint", "windows-hello"],
    specs: {
      modality: "Fingerprint",
      capacity: "10 fingerprints",
      connectivity: "USB 2.0"
    } as BiometricSpecs
  }
];

// Mock Reviews for Electronics
export const mockReviews: Review[] = [
  {
    id: 1,
    productId: 1,
    author: "Tech Enthusiast",
    rating: 5,
    date: "2024-01-15",
    comment: "Outstanding laptop! The OLED display is absolutely stunning and the performance is top-notch. Perfect for video editing and creative work.",
    verified: true
  },
  {
    id: 2,
    productId: 1,
    author: "Professional Designer",
    rating: 5,
    date: "2024-01-10",
    comment: "Best laptop I've owned. The color accuracy on the OLED screen is incredible. Battery life is solid too.",
    verified: true
  },
  {
    id: 3,
    productId: 2,
    author: "Developer Pro",
    rating: 5,
    date: "2024-01-20",
    comment: "M2 Pro chip is a beast! Compiles code incredibly fast and the battery lasts all day. Worth every penny.",
    verified: true
  },
  {
    id: 4,
    productId: 3,
    author: "Gamer_X",
    rating: 5,
    date: "2024-01-18",
    comment: "This laptop handles every game I throw at it. The 240Hz display is buttery smooth. Cooling system works great!",
    verified: true
  },
  {
    id: 5,
    productId: 5,
    author: "Office Worker",
    rating: 5,
    date: "2024-01-12",
    comment: "Best mouse I've ever used. The ergonomics are perfect and switching between devices is seamless. Highly recommend!",
    verified: true
  },
  {
    id: 6,
    productId: 9,
    author: "Security Admin",
    rating: 5,
    date: "2024-01-08",
    comment: "Excellent security system. The 4K quality is amazing and night vision works perfectly. Easy to set up and use.",
    verified: true
  },
  {
    id: 7,
    productId: 13,
    author: "Facility Manager",
    rating: 5,
    date: "2024-01-14",
    comment: "Impressive face recognition accuracy even with masks. Temperature screening is a great feature. Very reliable system.",
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

// Export types for convenience
export type { Product, Review, CartItem };
