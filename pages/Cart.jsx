import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Cart.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, reset } from '../redux/cartSlice';
import Popup from '../components/Popup';
import { useEffect } from 'react';
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from '@paypal/react-paypal-js';
import { useRouter } from 'next/router';
import axios from 'axios';

const discount = 0.0;

const getSubtotal = (product) => product.quantity * product.price;
const getTotal = (products) => products.reduce((a, b) => a + getSubtotal(b), 0);

const Cart = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [delivery, setDelivery] = useState(false);
  const [pickupColor, setPickupColor] = useState('var(--color-primary)');
  const [deliveryColor, setDeliveryColor] = useState('white');
  const [popupShow, setPopupShow] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
  const [note, setNote] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const deliveryFee = () => (delivery ? 4.99 : 0);

  const products = useSelector((state) => state.cart.products);
  const cart = useSelector((state) => state.cart);

  const deleteItem = (product) => {
    setPopupShow(true);
    setIdToDelete(product._id);
  };

  const handleConfirm = () => {
    console.log('confirm clicked');
    dispatch(
      deleteProduct({
        id: idToDelete,
      })
    );
    setPopupShow(false);
    setIdToDelete(null);
  };

  const createOrder = async (data) => {
    try {
      const res = await axios.post('http://localhost:3000/api/orders', data);
      res.status === 201 && router.push('/orders/' + res.data._id);
      console.log(res.data);
      dispatch(reset());
      setPayOpen(false);
    } catch (err) {
      console.log(err);
      // res.status(500).json(err);
    }
  };

  // PAYPAL
  const [payOpen, setPayOpen] = useState(false);
  const amount = getTotal(products);
  const currency = 'USD';
  const style = { layout: 'vertical' };
  const ButtonWrapper = ({ currency, showSpinner }) => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: 'resetOptions',
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              // console.log(details);
              const payment = details.purchase_units[0];
              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customer: shipping.name.full_name,
                address: `${shipping.address_line_1}, ${shipping.admin_area_2}, ${shipping.admin_area_1} ${shipping.postal_code}`,
                total: payment.amount.value,
                ordernumber: details.id,
                phone: phoneNum,
                status: 1,
                method: delivery ? 1 : 2,
                orderItems: products.map((product) => ({
                  mainItem: product.name,
                  extras: product.extras,
                  quantity: product.quantity,
                })),
                note: note,
              });
            });
          }}
        />
      </>
    );
  };

  return (
    <div className={styles.container}>
      <div className="container">
        <div className="row">
          <div className="col-11 mx-auto">
            <h1 className={styles.title}>Cart</h1>
          </div>
          <div className="col-11 mx-auto col-md-7 p-1 mr-0 mr-md-5">
            <table className={styles.table}>
              <tbody>
                <tr className={styles.tr}>
                  <th>Item</th>
                  <th>Name</th>
                  <th>Extras</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </tbody>
              <tbody>
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
                    <td>{product.price.toFixed(2)}</td>
                    <td>{product.quantity}</td>
                    <td>{(product.price * product.quantity).toFixed(2)}</td>
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
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="row mt-5">
              <div className="col-12 col-md-6">
                <h1 className={styles.deliveryTitle}>Phone # </h1>
                <input
                  className={styles.note}
                  placeholder="only numbers ex. 1234567890"
                  type="text"
                  onChange={(e) => setPhoneNum(e.target.value)}
                />
              </div>
              <div className="col-12 col-md-6">
                <h1 className={styles.deliveryTitle}>Note</h1>
                <textarea
                  className={styles.note}
                  placeholder="note to store"
                  onChange={(e) => setNote(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="mt-5 row align-items-center justify-content-center px-5">
              <h1 className={styles.deliveryTitle}>Choose Delivery</h1>
              <div
                className={`button-main ${styles.deliveryBox}`}
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
                className={`button-main ${styles.deliveryBox}`}
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
              <div className={styles.cartRow}>
                <p>Total</p>
                <p>
                  ${(getTotal(products) + discount + deliveryFee()).toFixed(2)}
                </p>
              </div>

              {payOpen ? (
                <div className="d-flex justify-content-center flex-column align-items-center w-100">
                  <button
                    className={`button-main ${styles.payButton}`}
                    type="submit"
                  >
                    Cash On Delivery
                  </button>
                  <PayPalScriptProvider
                    options={{
                      'client-id':
                        'AdiN-JgfamUogjHISWeY76wky1y0zgA9OG_bGyFAFQUV-QDJNpm1gBmIkZIawonglqfQXx7u9_4GC1Dy',
                      components: 'buttons',
                      currency: 'USD',
                      // "disable-funding": "credit,card,p24",
                    }}
                  >
                    <ButtonWrapper currency={currency} showSpinner={false} />
                  </PayPalScriptProvider>
                </div>
              ) : (
                <div className="d-flex justify-content-center flex-column align-items-center w-100">
                  <button
                    className={`button-main ${styles.checkoutButton}`}
                    type="submit"
                    onClick={setPayOpen(true)}
                  >
                    Checkout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {popupShow && (
        <Popup
          message={'Are You Sure You Want To Delete?'}
          handleConfirm={handleConfirm}
          setPopupShow={setPopupShow}
          // handlePopupTrue={handlePopupTrue}
        />
      )}
    </div>
  );
};

export default Cart;
