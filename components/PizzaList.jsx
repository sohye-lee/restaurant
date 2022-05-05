import React from 'react';
import styles from '../styles/PizzaList.module.css';
import PizzaCard from './PizzaCard';

export default function PizzaList() {
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
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
        </div>
      </div>
    </div>
  );
}
