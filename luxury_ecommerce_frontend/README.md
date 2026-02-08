# LUXORA - Luxury Ecommerce Frontend

A premium, modern ecommerce website UI built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

### Core Pages
- **Home**: Hero section with featured products and category showcase
- **Shop**: Product listing page with advanced filtering, sorting, and search
- **Product Detail**: Image gallery, reviews, size/color selection, and add to cart
- **Cart**: Shopping cart with quantity management
- **Checkout**: Complete checkout flow with order summary
- **Wishlist**: Save favorite products
- **Account**: User authentication and order history

### UI Components
- Responsive header with sticky navigation
- Product cards with premium hover effects
- Wishlist toggle with heart icon
- Advanced filters (category, price range, stock availability)
- Image galleries with thumbnails
- Star ratings and reviews
- Animated micro-interactions using Framer Motion

### Design
- **Theme**: Traditional Gray (#374151 primary, #059669 accents)
- **Style**: Classic luxury aesthetic with clean layouts
- **Typography**: Inter font family
- **Animations**: Smooth transitions and hover effects
- **Responsive**: Mobile-first design

### Technical Stack
- **React 18** with TypeScript
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Context API** for state management (Cart & Wishlist)
- **Local Storage** for persistence

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

Runs the app on [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
```

Creates an optimized production build.

## Project Structure

```
src/
├── components/
│   ├── common/          # Reusable components (Button, ProductCard)
│   └── layout/          # Layout components (Header, Footer)
├── context/             # React Context providers (Cart, Wishlist)
├── data/               # Mock data (products, reviews)
├── pages/              # Page components (Home, Shop, etc.)
├── types/              # TypeScript type definitions
├── App.tsx             # Main app component with routing
└── index.tsx           # Entry point
```

## Mock Data

The application uses mock data for:
- Product catalog (8 luxury items)
- User reviews
- Cart and wishlist (persisted in localStorage)

## Features in Detail

### Cart Management
- Add/remove items
- Update quantities
- Automatic subtotal, tax, and shipping calculation
- Free shipping over $500
- Persistent storage

### Wishlist
- Save favorite products
- Toggle wishlist from product cards or detail page
- Persistent storage

### Product Filtering
- Category filter
- Price range slider
- In-stock only option
- Sort by: featured, price (asc/desc), rating

### Animations
- Page transitions
- Hover effects on product cards
- Micro-interactions on buttons
- Smooth scroll animations
- Image gallery transitions

## Environment Variables

The following environment variables are configured:

- `REACT_APP_API_BASE`: API base URL
- `REACT_APP_FRONTEND_URL`: Frontend URL
- `REACT_APP_BACKEND_URL`: Backend URL

(Currently using mock data, no backend integration)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private - LUXORA Premium Ecommerce Platform
