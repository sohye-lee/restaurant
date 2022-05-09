import React from 'react';
import styles from '../styles/ProductList.module.css';
import ProductCard from './ProductCard';

export default function ProductList({ products }) {
  return (
    <div className="container">
      <div className={styles.container}>
        <h1 className={styles.title}>Our Menu</h1>
        <p className={styles.description}>
          It’s more than a saying, it’s a promise. It’s food that feeds your
          cravings, supports your health and nourishes your soul – all in one
          bite. But you’ll want more than one. We’re sure of it.
        </p>
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
