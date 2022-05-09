import React from 'react';
import Link from 'next/Link';
import Image from 'next/Image';
import styles from '../styles/Navbar.module.css';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartQuantity = useSelector((state) => state.cart.cartQuantity);

  return (
    <nav className={styles.wrapper}>
      <div className="container d-flex align-items-center justify-content-between px-4">
        <Link href="/">
          <a className={`navbar-brand font-weight-bold ${styles.logo}`}>
            Resto
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse  d-flex align-items-center justify-content-end"
          id="navbarCollapse"
        >
          <ul className="navbar-nav d-flex align-items-center liststyle-none">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="/">
                <a className={styles.item}>Menu</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="/">
                <a className={styles.item}>Contact</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="/">
                <a className={styles.item}>
                  <Image
                    src="/images/icon-doordash.png"
                    alt="phone"
                    width={30}
                    height={20}
                  />
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="/">
                <a className={styles.item}>
                  <Image
                    src="/images/icon-ubereats.png"
                    alt="phone"
                    width={30}
                    height={20}
                  />
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="/">
                <a className={styles.item}>
                  <Image
                    src="/images/icon-grubhub.png"
                    alt="phone"
                    width={50}
                    height={15}
                  />
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="/">
                <a className={styles.item}>
                  <Image
                    src="/images/icon-phone.png"
                    alt="phone"
                    width={30}
                    height={30}
                  />
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/cart" passHref>
                <a className="nav-link">
                  <Image
                    src="/images/icon-cart.png"
                    alt="shopping cart"
                    height={30}
                    width={30}
                  />
                  <div className={styles.count}>{cartQuantity}</div>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
