import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FunnelIcon, XMarkIcon } from '@heroicons/react/24/outline';
import ProductCard from '../components/common/ProductCard';
import Button from '../components/common/Button';
import { mockProducts } from '../data/mockData';
import { Product } from '../types';

// PUBLIC_INTERFACE
/**
 * Shop page with filtering and sorting capabilities
 */
const Shop: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(mockProducts);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || 'all',
    priceRange: [0, 5000],
    sortBy: 'featured',
    inStock: false,
  });

  const categories = ['all', 'clothing', 'accessories', 'jewelry', 'footwear'];
  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
  ];

  useEffect(() => {
    let result = [...mockProducts];

    // Category filter
    if (filters.category !== 'all') {
      result = result.filter(p => p.category.toLowerCase() === filters.category);
    }

    // Price filter
    result = result.filter(p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]);

    // Stock filter
    if (filters.inStock) {
      result = result.filter(p => p.inStock);
    }

    // Sort
    switch (filters.sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'featured':
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    setFilteredProducts(result);
  }, [filters]);

  const handleCategoryChange = (category: string) => {
    setFilters(prev => ({ ...prev, category }));
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters(prev => ({ ...prev, sortBy: e.target.value }));
  };

  const clearFilters = () => {
    setFilters({
      category: 'all',
      priceRange: [0, 5000],
      sortBy: 'featured',
      inStock: false,
    });
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-text mb-4">Shop</h1>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-secondary">
              Showing {filteredProducts.length} of {mockProducts.length} products
            </p>
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <select
                value={filters.sortBy}
                onChange={handleSortChange}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden"
              >
                <FunnelIcon className="h-5 w-5 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <motion.aside
            initial={false}
            animate={{ 
              width: showFilters || window.innerWidth >= 1024 ? '280px' : '0px',
              opacity: showFilters || window.innerWidth >= 1024 ? 1 : 0 
            }}
            className={`${showFilters || 'hidden lg:block'} flex-shrink-0`}
          >
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-text">Filters</h3>
                <button
                  onClick={clearFilters}
                  className="text-sm text-primary hover:text-primary/80"
                >
                  Clear All
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-text mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={filters.category === category}
                        onChange={() => handleCategoryChange(category)}
                        className="mr-2 text-primary focus:ring-primary"
                      />
                      <span className="capitalize text-secondary hover:text-text">
                        {category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium text-text mb-3">Price Range</h4>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    step="100"
                    value={filters.priceRange[1]}
                    onChange={(e) => setFilters(prev => ({ 
                      ...prev, 
                      priceRange: [0, parseInt(e.target.value)] 
                    }))}
                    className="w-full"
                  />
                  <p className="text-sm text-secondary">
                    ${filters.priceRange[0]} - ${filters.priceRange[1]}
                  </p>
                </div>
              </div>

              {/* In Stock */}
              <div className="mb-6">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.inStock}
                    onChange={(e) => setFilters(prev => ({ ...prev, inStock: e.target.checked }))}
                    className="mr-2 text-primary focus:ring-primary"
                  />
                  <span className="text-secondary hover:text-text">In Stock Only</span>
                </label>
              </div>
            </div>
          </motion.aside>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-secondary mb-4">No products found</p>
                <Button onClick={clearFilters}>Clear Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
