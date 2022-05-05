import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/PizzaCard.module.css';

export default function PizzaCard() {
  return (
      // eslint-disable-next-line @next/next/link-passhref
      <Link href="/">

    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div
          className={styles.imgContainer}
          style={{
              backgroundImage: "url('/images/menu/cheese.png')",
            }}
            ></div>
        <div className={styles.infoContainer}>
          <h3 className={styles.title}>Cheese Pizza</h3>
          <p className={styles.price}>$19.90</p>
          <p className={styles.description}>
            Artisan pizza dough, semolina flour, pizza sauce, fresh basil,
          </p>
          <button className={styles.btnAddCart}>+</button>
        </div>
      </div>
    </div>
    </Link>
  );
}
