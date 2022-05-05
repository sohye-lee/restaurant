import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className="container">
          <div className="d-flex justify-content-between">
            <div>
              <Link href="/">
                <a className={styles.logo}>Resto</a>
              </Link>
              <p className={styles.logoSlogan}>Best Pizza In Town</p>
            </div>

            <div className="d-flex flex-column align-items-center">
              <h3 className={styles.title}>Order</h3>
              <div className={styles.divider}></div>
              <div className="d-flex align-items-center justify-content-center">
                <a
                  className={styles.iconOrder}
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/images/icon-doordash.png"
                    height={28.4}
                    width={50}
                    alt="facebook"
                  />
                </a>

                <a
                  className={styles.iconOrder}
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/images/icon-ubereats.png"
                    height={38.06}
                    width={50}
                    alt="facebook"
                  />
                </a>
                <a
                  className={styles.iconOrder}
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/images/icon-grubhub.png"
                    height={16.77}
                    width={80}
                    alt="facebook"
                  />
                </a>
              </div>
            </div>

            <div className="d-flex flex-column align-items-center">
              <h3 className={styles.title}>Social</h3>
              <div className={styles.divider}></div>
              <div className="d-flex align-items-center">
                <a
                  className={styles.icon}
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/images/icon-facebook.png"
                    height={30}
                    width={30}
                    alt="facebook"
                  />
                </a>
                <a
                  className={styles.icon}
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/images/icon-insta.png"
                    height={30}
                    width={30}
                    alt="facebook"
                  />
                </a>
                <a
                  className={styles.icon}
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/images/icon-yelp.png"
                    height={30}
                    width={30}
                    alt="facebook"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        Copyright 2022. All Rights Reserved. Developed By Sohye.
      </div>
    </>
  );
}
