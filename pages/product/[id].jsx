import Image from 'next/image';
import React from 'react';
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
  return (
    <div className={styles.container}>
      <div className="container">
        <div
          className="row d-flex align-items-stretch"
          style={{ alignItems: 'stretch' }}
        >
          <div
            className={`col-10 col-md-5   ${styles.imgContainer}`}
            style={{
              backgroundImage: `url(${pizza.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className={styles.badge}>{pizza.badge}</div>
          </div>
          <div className={`col-10 col-md-7 ${styles.infoContainer}`}>
            <p className={styles.category}>{pizza.category}</p>
            <h1 className={styles.name}>{pizza.name}</h1>
            <p className={styles.price}>${pizza.price[0]}</p>
            <div className="d-flex align-items-center">
              <div className={styles.sizeImg}>
                {/* <input
                  type="radio"
                  id="sizeSmall"
                  value="small"
                  name="small"
                  className="my-4"
                /> */}
                <Image
                  src="/images/pizza-illust.png"
                  width={40}
                  height={40}
                  alt="small"
                />
                <p className={styles.price}>{pizza.price[0]}</p>
              </div>
              {pizza.price[1]}
              {pizza.price[2]}
            </div>
            {/* <p className={styles.price}>{pizza.price}</p> */}
            <p className={styles.description}>{pizza.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
