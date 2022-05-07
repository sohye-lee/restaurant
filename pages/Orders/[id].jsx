import Image from 'next/image';
import React from 'react';
import styles from '../../styles/Order.module.css';

const renderPhoneNumber = (num) => {
  return `(${num.substring(0, 3)}) ${num.substring(3, 6)}-${num.substring(6)}`;
};

const Order = () => {
  const order = {
    id: 1,
    ordernumber: 30941929293,
    createdAt: new Date().toString(),
    customer: 'Jane Doe',
    total: 49.9,
    orderItems: [
      {
        mainItem: 'Cheeze Pizza',
        size: 'medium',
        extras: ['Spicy Sauce', 'Cheese Up'],
        note: 'Cute in 6',
        quantity: 1,
      },
      {
        mainItem: 'Chicken Pesto',
        size: 'medium',
        extras: [],
        note: 'No onions',
        quantity: 1,
      },
    ],
    address: '1234 Main St., Fairfax, VA 22030',
    phone: '5713961122',
    status: 2,
  };

  const getStatus = (current) => {
    if (current - order.status < 0) return styles.done;
    if (current - order.status === 0) return styles.inProcess;
    if (current - order.status > 0) return styles.undone;
  };
  return (
    <div className={styles.container}>
      <div className="container">
        <h1 className={styles.title}>Order</h1>
        <div className="row">
          <div className="col-12 mx-auto  col-lg-9 d-flex  justify-content-between my-5">
            <div className={`${styles.statusItem} ${getStatus(0)}`}>
              <Image
                src="/images/icon-paid.png"
                width={50}
                height={50}
                alt="paid"
              />
              <p className={styles.statusText}>Paid</p>
              <div className={styles.statusCheckbox}>&#10003;</div>
              <div className={styles.statusCheckbox}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
              </div>
            </div>
            <div className={`${styles.statusItem} ${getStatus(1)}`}>
              <Image
                src="/images/icon-cook.png"
                width={50}
                height={50}
                alt="paid"
              />
              <p className={styles.statusText}>Preparing</p>
              <div className={styles.statusCheckbox}>&#10003;</div>
              <div className={styles.statusCheckbox}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
              </div>
            </div>
            <div className={`${styles.statusItem} ${getStatus(2)}`}>
              <Image
                src="/images/icon-delivering.png"
                width={50}
                height={50}
                alt="paid"
              />
              <p className={styles.statusText}>Out For Delivery</p>
              <div className={styles.statusCheckbox}>&#10003;</div>
              <div className={styles.statusCheckbox}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
              </div>
            </div>
            <div className={`${styles.statusItem} ${getStatus(3)}`}>
              <Image
                src="/images/icon-delivered.png"
                width={50}
                height={50}
                alt="paid"
              />
              <p className={styles.statusText}>Delivered</p>
              <div className={styles.statusCheckbox}>&#10003;</div>
              <div className={styles.statusCheckbox}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
              </div>
            </div>
          </div>
          <div className="col-11 mx-auto mt-5">
            <div className={styles.dataRow}>
              <p className={styles.label}>Order Id</p>
              <p className={styles.info}>{order.ordernumber}</p>
            </div>
            <div className={styles.dataRow}>
              <p className={styles.label}>Order Date</p>
              <p className={styles.info}>{order.createdAt}</p>
            </div>
            <div className={styles.dataRow}>
              <p className={styles.label}>Customer</p>
              <p className={styles.info}>{order.customer}</p>
            </div>
            <div className={styles.dataRow}>
              <p className={styles.label}>Address</p>
              <p className={styles.info}>{order.address}</p>
            </div>
            <div className={styles.dataRow}>
              <p className={styles.label}>Phone No.</p>
              <p className={styles.info}>{renderPhoneNumber(order.phone)}</p>
            </div>
            <div className={styles.dataRow}>
              <p className={styles.label}>Total</p>
              <p className={styles.info}>${order.total}</p>
            </div>
            <div className={styles.dataRow}>
              <p className={styles.label}>Ordered Items</p>
              <p className={styles.info}>
                {order.orderItems.map((order, i) => (
                  <div key={i} className={styles.orderItemRow}>
                    <p className={styles.bold}>{order.mainItem}</p>
                    <p>
                      <span className={styles.bold}>Size:</span> {order.size}
                    </p>
                    <p>
                      <span className={styles.bold}>Extra:</span>
                      {order.extras.length > 0 ? (
                        order.extras.map((e, i) => <p key={i}>&#8194; + {e}</p>)
                      ) : (
                        <> none</>
                      )}
                    </p>
                    <p>
                      <span className={styles.bold}>Quantity:</span>{' '}
                      {order.quantity}
                    </p>
                    <p>
                      <span className={styles.bold}>Note:</span> "{order.note}""
                    </p>
                  </div>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
