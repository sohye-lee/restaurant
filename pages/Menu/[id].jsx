import Image from 'next/image';
import React, { useState } from 'react';
import styles from '../../styles/Product.module.css';

const Product = () => {
  const pizza = {
    id: 1,
    image: '/images/menu/chickenpesto.png',
    name: 'Chicken Pesto',
    price: [12.9, 15.9, 18.9],
    description: 'chicken with fresh pesto sauce, mozzarella cheese',
    badge: 'popular',
    category: 'Pizzas',
  };

  const [size, setSize] = useState(0);
  const changeColor = (num) => {
    if (size === num) {
      return 1;
    } else {
      return 0.6;
    }
  };
  return (
    <div className={styles.container}>
      <div className="container">
        <div
          className="row d-flex align-items-stretch"
          style={{ alignItems: 'stretch' }}
        >
          <div
            className={`col-10 col-md-5 mx-auto  ${styles.imgContainer}`}
            style={{
              backgroundImage: `url(${pizza.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className={styles.badge}>{pizza.badge}</div>
          </div>
          <div
            className={`col-10 col-md-7 mx-auto mt-5 mt-md-0 ${styles.infoContainer}`}
          >
            <p className={styles.category}>{pizza.category}</p>
            <h1 className={styles.name}>{pizza.name}</h1>
            <p className={styles.price}>${pizza.price[size]}</p>
            <p className={styles.description}>{pizza.description}</p>
            <p className={styles.select}>Choose Size</p>
            <div className="d-flex">
              <div className={styles.sizeContainer} onClick={() => setSize(0)}>
                <Image
                  src="/images/pizza-illust.png"
                  width={40}
                  height={40}
                  alt="small"
                />
                <div
                  className={styles.sizeText}
                  style={{ opacity: changeColor(0) }}
                >
                  <p className={styles.size}>Small</p>
                </div>
              </div>
              <div className={styles.sizeContainer} onClick={() => setSize(1)}>
                <Image
                  src="/images/pizza-illust.png"
                  width={60}
                  height={60}
                  alt="small"
                />
                <div
                  className={styles.sizeText}
                  style={{ opacity: changeColor(1) }}
                >
                  <p className={styles.size}>Medium</p>
                </div>
              </div>
              <div className={styles.sizeContainer} onClick={() => setSize(2)}>
                <Image
                  src="/images/pizza-illust.png"
                  width={80}
                  height={80}
                  alt="small"
                />
                <div
                  className={styles.sizeText}
                  style={{ opacity: changeColor(2) }}
                >
                  <p className={styles.size}>Large</p>
                </div>
              </div>
            </div>

            <p className={styles.select}>Choose Additional (Optional)</p>
            <div className={styles.options}>
              <input
                className={styles.checkbox}
                type="checkbox"
                id="cheese"
                name="cheese"
              />
              <label htmlFor="cheese" className={styles.label}>
                Cheese Up
              </label>
              <div className={styles.checkboxAfter}>&#10003;</div>
            </div>
            <div className={styles.options}>
              <input
                className={styles.checkbox}
                type="checkbox"
                id="tomato"
                name="tomato"
              />
              <label htmlFor="tomato" className={styles.label}>
                Sauce Up
              </label>
              <div className={styles.checkboxAfter}>&#10003;</div>
            </div>
            <div className={styles.options}>
              <input
                className={styles.checkbox}
                type="checkbox"
                id="spicy"
                name="spicy"
              />
              <label htmlFor="spicy" className={styles.label}>
                Spicy Dipping
              </label>
              <div className={styles.checkboxAfter}>&#10003;</div>
            </div>
            <div className={styles.options}>
              <input
                className={styles.checkbox}
                type="checkbox"
                id="garlic"
                name="garlic"
              />
              <label htmlFor="garlic" className={styles.label}>
                Garlic Dipping
              </label>
              <div className={styles.checkboxAfter}>&#10003;</div>
            </div>

            <div className={styles.add}>
              <input
                type="number"
                defaultValue={1}
                className={styles.quantity}
              />
              <button type="submit" className={`button-main ${styles.button}`}>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
