import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Cart.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../redux/cartSlice';

const discount = 0.0;

const getSubtotal = (product) => product.quantity * product.price;
const getTotal = (products) => products.reduce((a, b) => a + getSubtotal(b), 0);

const Cart = () => {
  const [delivery, setDelivery] = useState(false);
  const [pickupColor, setPickupColor] = useState('var(--color-primary)');
  const [deliveryColor, setDeliveryColor] = useState('white');
  const deliveryFee = () => (delivery ? 4.99 : 0);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  // const totalPrice = useSelector((state) => state.cart.total);

  const deleteItem = (product) => {
    dispatch(
      deleteProduct({
        // price: product.price,
        // quantity: product.quantity,
        id: product._id,
      })
    );
  };

  console.log(products);
  return (
    <div className={styles.container}>
      <div className="container">
        <div className="row">
          <div className="col-11 mx-auto">
            <h1 className={styles.title}>Cart</h1>
          </div>
          <div className="col-11 mx-auto col-md-7 p-1 mr-0 mr-md-5">
            <table className={styles.table}>
              <tr className={styles.tr}>
                <th>Item</th>
                <th>Name</th>
                <th>Extras</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
                <th></th>
              </tr>
              {products.map((product, index) => (
                <tr key={index}>
                  <td align="center">
                    <div
                      className={styles.imgContainer}
                      style={{ backgroundImage: `url(${product.image})` }}
                    ></div>
                  </td>
                  <td>{product.name}</td>
                  <td>
                    {product.extras.map((e, i) => (
                      <p className="m-0" key={i}>
                        {e.text}
                      </p>
                    ))}
                  </td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>{product.price * product.quantity}</td>
                  <td>
                    <button type="submit" className={styles.buttonSm}>
                      <Image
                        src="/images/icon-edit.png"
                        width={30}
                        height={30}
                        alt="edit"
                      />
                    </button>
                    <button type="submit" className={styles.buttonSm}>
                      <Image
                        src="/images/icon-trash.png"
                        width={25}
                        height={25}
                        alt="edit"
                        onClick={() => deleteItem(product)}
                      />
                    </button>
                    {/* </div> */}
                  </td>
                </tr>
              ))}
            </table>

            <div className="mt-5 row align-items-center justify-content-between">
              <h1 className={styles.deliveryTitle}>Choose Delivery</h1>
              <div
                className={`col-11 mx-auto ${styles.deliveryBox}`}
                style={{
                  backgroundColor: pickupColor,
                  color:
                    pickupColor != 'white' ? 'white' : 'var(--color-primary)',
                }}
                onClick={() => {
                  setDelivery(false);
                  setPickupColor('var(--color-primary');
                  setDeliveryColor('white');
                }}
              >
                Pick Up At Store
              </div>
              <div
                className={styles.deliveryBox}
                style={{
                  backgroundColor: deliveryColor,
                  color:
                    deliveryColor != 'white' ? 'white' : 'var(--color-primary)',
                }}
                onClick={() => {
                  setDelivery(true);
                  setPickupColor('white');
                  setDeliveryColor('var(--color-primary)');
                }}
              >
                Delivery
              </div>
            </div>
          </div>
          <div className="col-11 mx-auto col-md-4 p-1">
            <div className={styles.cartBox}>
              <h1 className={styles.cartTitle}>Total</h1>
              <div className={styles.cartRow}>
                <p>Subtotal</p>
                <p>${getTotal(products).toFixed(2)}</p>
              </div>
              <div className={styles.cartRow}>
                <p>Delivery Fee</p>
                <p>${deliveryFee()}</p>
              </div>
              <div className={styles.cartRow}>
                <p>Discount</p>
                <p>${discount}</p>
              </div>
              {/* <div className={styles.divider}></div> */}
              <div className={styles.cartRow}>
                <p>Total</p>
                <p>
                  ${(getTotal(products) + discount + deliveryFee()).toFixed(2)}
                </p>
              </div>
              <div className="d-flex justify-content-center w-100">
                <button
                  className={`button-main ${styles.checkoutButton}`}
                  type="submit"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
