import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'iPhone 13', price: 999, image: '/images/iphone.jpg', description: 'Latest iPhone model.' },
  { id: 2, name: 'Samsung Galaxy S21', price: 799, image: '/images/samsung.jpg', description: 'High-performance smartphone.' },
  { id: 3, name: 'Xiaomi Mi 11', price: 699, image: '/images/xiaomi.jpg', description: 'Flagship killer phone.' },
  { id: 4, name: 'Motorola Edge', price: 499, image: '/images/motorola.jpg', description: 'Affordable and powerful.' },
];

function ProductPage() {
  const { id } = useParams();
  const product = products.find(item => item.id === parseInt(id));

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductPage;
