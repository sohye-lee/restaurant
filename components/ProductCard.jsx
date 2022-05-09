import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/ProductCard.module.css';

export default function ProductCard({ product }) {
  return (
    // eslint-disable-next-line @next/next/link-passhref
    <Link href={`/products/${product._id}`} passHref>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div
            className={styles.imgContainer}
            style={{
              backgroundImage: `url(${product.image})`,
            }}
          ></div>
          <div className={styles.infoContainer}>
            <h3 className={styles.title}>{product.name}</h3>
            <p className={styles.price}>${product.prices[0]}~</p>
            <p className={styles.description}>{product.description}</p>
          </div>
          <a className={styles.btnAddCart} href={`/products/${product._id}`}>
            +
          </a>
        </div>
      </div>
    </Link>
  );
}
