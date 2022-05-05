import Image from 'next/image';
import React from 'react';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <div className="w-100 row justify-content-center">
      <div className={`col-12 col-md-6 ${styles.contactInfo}`}>
        <div>
          <h3 className={styles.title}>Contact Us</h3>
          <div className={styles.contactItem}>
            <div className={styles.iconWrapper}>
              <Image
                src="/images/icon-clock.png"
                width={25}
                height={25}
                alt="phone"
              />
            </div>
            <span className={styles.contactText}>Mon.-Fri. 10:30AM - 9PM</span>
          </div>
          <a
            className={styles.contactItem}
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.iconWrapper}>
              <Image
                src="/images/icon-location.png"
                width={25}
                height={25}
                alt="phone"
              />
            </div>
            <span className={styles.contactText}>
              1234 North Ave.
              <br />
              Fairfax, VA 22031
            </span>
          </a>
          <a className={styles.contactItem} href="tel:+10000000000">
            <div className={styles.iconWrapper}>
              <Image
                src="/images/icon-phone.png"
                width={25}
                height={25}
                alt="phone"
              />
            </div>
            <span className={styles.contactText}>(703) 234-5567</span>
          </a>
          <a className={styles.contactItem} href="mailto:info@gmail.com">
            <div className={styles.iconWrapper}>
              <Image
                src="/images/icon-email.png"
                width={25}
                height={25}
                alt="phone"
              />
            </div>
            <span className={styles.contactText}>info@resto.com</span>
          </a>
        </div>
      </div>
      <div className="col-12 col-md-6 m-0 p-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24857.08824816481!2d-77.31939042628234!3d38.85224308654136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64e96394b91cd%3A0x72326e785448640!2sFairfax%2C%20VA!5e0!3m2!1sen!2sus!4v1651597854170!5m2!1sen!2sus"
          style={{
            border: 0,
            width: '100%',
            height: '100%',
            minHeight: '300px',
          }}
          className="m-0 p-0"
          allowFullScreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
