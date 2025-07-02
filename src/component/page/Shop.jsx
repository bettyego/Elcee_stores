import { useState } from 'react';
import Products from '../data/products';
import ProductCard from '../ProductCard';

const categories = ['All', 'Skincare', 'Bags', 'Contact Lenses'];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filtered = selectedCategory === 'All'
    ? Products
    : Products.filter(p => p.category === selectedCategory);

  return (
    <section className="pt-24 px-4 md:px-8 max-w-7xl mx-auto">
      
      <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">Shop All Products</h2>

    
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 text-sm rounded-full border transition ${
              selectedCategory === category
                ? 'bg-purple-700 text-white border-purple-700'
                : 'bg-white text-purple-700 border-purple-300 hover:bg-purple-50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

    
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Shop;
