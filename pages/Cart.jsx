import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Cart.module.css';

const pizzas = [
  {
    id: 1,
    image: '/images/menu/chickenpesto.png',
    name: 'Chicken Pesto',
    price: [12.9, 15.9, 18.9],
    description: 'chicken with fresh pesto sauce, mozzarella cheese',
    badge: 'popular',
    category: 'Pizzas',
    extra: ['spicy sauce', 'extra cheese'],
    quantity: 1,
    orderprice: 15.9,
  },
  {
    id: 2,
    image: '/images/menu/cheese.png',
    name: 'Cheese',
    price: [9.9, 12.9, 15.9],
    description: 'fresh tomato sauce, mozzarella cheese',
    badge: 'popular',
    category: 'Pizzas',
    extra: ['barbeque sauce', 'extra cheese'],
    quantity: 2,
    orderprice: 12.9,
  },
];

const discount = 0.0;

const getSubtotal = (pizza) => pizza.quantity * pizza.orderprice;
const getTotal = (pizzas) => pizzas.reduce((a, b) => a + getSubtotal(b), 0);

const Cart = () => {
  const [delivery, setDelivery] = useState(false);
  const [pickupColor, setPickupColor] = useState('var(--color-primary)');
  const [deliveryColor, setDeliveryColor] = useState('white');
  const deliveryFee = () => (delivery ? 4.99 : 0);
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
              {pizzas.map((pizza, index) => (
                <tr key={index}>
                  <td align="center">
                    <div
                      className={styles.imgContainer}
                      style={{ backgroundImage: `url(${pizza.image})` }}
                    >
                      {/* <Image
                        src={pizza.image}
                        width={100}
                        height={80}
                        alt={pizza.name}
                      /> */}
                    </div>
                  </td>
                  <td>{pizza.name}</td>
                  <td>
                    {pizza.extra.map((e, i) => (
                      <p className="m-0" key={i}>
                        {e}
                      </p>
                    ))}
                  </td>
                  <td>{pizza.price[0]}</td>
                  <td>{pizza.quantity}</td>
                  <td>{getSubtotal(pizza)}</td>
                  <td>
                    {/* <div className="d-flex flex-column align-items-center"> */}
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
                // style={{
                //   backgroundColor: delivery ? 'white' : 'var(--color-primary)',
                //   color: delivery ? 'var(--color-primary)' : 'white',
                // }}
                // onClick={setDelivery(false)}
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
                <p>${getTotal(pizzas)}</p>
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
                  ${(getTotal(pizzas) + discount + deliveryFee()).toFixed(2)}
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
