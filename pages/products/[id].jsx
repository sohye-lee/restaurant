import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from '../../styles/Product.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../redux/cartSlice';

const Product = ({ product }) => {
  const [price, setPrice] = useState(product.prices[0]);
  const [size, setSize] = useState(0);
  const [extras, setExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  // const productsInCart = useSelector((state) => state.cart.products);
  // const isProductInCart =
  //   productsInCart.filter(
  //     (p) => p._id === product._id && p.extras === extras && p.price === price
  //   ).length > 0;

  const changeColor = (num) => {
    if (size === num) {
      return 1;
    } else {
      return 0.6;
    }
  };

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleSize = (sizeIndex) => {
    const difference = product.prices[sizeIndex] - product.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const handleExtras = (e, extra) => {
    const checked = e.target.checked;
    if (checked) {
      changePrice(extra.price);
      setExtras((prev) => [...prev, extra]);
    } else {
      changePrice(-extra.price);
      setExtras(extras.filter((e) => e._id != extra._id));
    }
  };

  const addToCart = () => {
    // if (!isProductInCart) {
    dispatch(addProduct({ ...product, extras, quantity, price }));
    // } else {
    //   dispatch(addProduct({ quantity: +quantity }));
    // }
  };

  const renderSizes = (prices) => {
    const sizes = ['Small', 'Medium', 'Large'];
    return prices.map((price, index) => (
      <div
        key={index}
        className={styles.sizeContainer}
        onClick={() => handleSize(index)}
      >
        <Image
          src="/images/pizza-illust.png"
          width={40 + index * 20}
          height={40 + index * 20}
          alt="size"
        />
        <div
          className={styles.sizeText}
          style={{ opacity: changeColor(index) }}
        >
          <p className={styles.size}>{sizes[index]}</p>
        </div>
      </div>
    ));
  };

  const renderExtras = (extras) => {
    return extras.map((extra, index) => (
      <div className={styles.options} key={index}>
        <input
          className={styles.checkbox}
          type="checkbox"
          id={extra.text}
          name={extra.text}
          onChange={(e) => handleExtras(e, extra)}
        />
        <label htmlFor={extra.text} className={styles.label}>
          {extra.text} (+ ${extra.price})
        </label>
        <div className={styles.checkboxAfter}>&#10003;</div>
      </div>
    ));
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
              backgroundImage: `url(${product.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className={styles.badge}>{product.badge}</div>
          </div>
          <div
            className={`col-10 col-md-7 mx-auto mt-5 mt-md-0 ${styles.infoContainer}`}
          >
            <p className={styles.category}>{product.category}</p>
            <h1 className={styles.name}>{product.name}</h1>
            <p className={styles.price}>$ {price.toFixed(2)}</p>
            <p className={styles.description}>{product.description}</p>
            <p className={styles.select}>Choose Size</p>
            <div className="d-flex">{renderSizes(product.prices)}</div>

            <p className={styles.select}>Choose Additional (Optional)</p>
            {renderExtras(product.extras)}

            <div className={styles.add}>
              <input
                type="number"
                defaultValue={1}
                className={styles.quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <button
                type="submit"
                className={`button-main ${styles.button}`}
                onClick={addToCart}
              >
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

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );

  return {
    props: {
      product: res.data,
    },
  };
};
