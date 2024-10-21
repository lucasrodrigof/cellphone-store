import React, { useState } from 'react';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';

const products = [
  { id: 1, name: 'iPhone 13', price: 999, image: '/images/iphone.jpg' },
  { id: 2, name: 'Samsung Galaxy S21', price: 799, image: '/images/samsung.jpg' },
  { id: 3, name: 'Xiaomi Mi 11', price: 699, image: '/images/xiaomi.jpg' },
  { id: 4, name: 'Motorola Edge', price: 499, image: '/images/motorola.jpg' },
];

function ProductList() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="product-list">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
