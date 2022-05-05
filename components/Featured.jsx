import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/Featured.module.css';

export default function Featured() {
  const images = [
    '/images/featured/featured-1.jpg',
    '/images/featured/featured-2.jpg',
    '/images/featured/featured-3.jpg',
  ];
  return (
    <div className={styles.container}>
      {/* <Image height={40} width={40} src="/images/arrow-left.png" alt="left" /> */}
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Best Pizza In Town</h1>
        <p className={styles.subtitle}>Write a review and get 50% off</p>
        <Link href="/">
          <a className="button-main mt-5">Order Now</a>
        </Link>
      </div>
      {/* <Image height={40} width={40} src="/images/arrow-left.png" alt="left" /> */}
    </div>
  );
}
