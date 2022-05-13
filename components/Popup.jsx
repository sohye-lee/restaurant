import React from 'react';
import styles from '../styles/Popup.module.css';

const Popup = ({ message, handleConfirm, setPopupShow }) => {
  //   const [message, setMessage] = useState('Are You Sure?');
  // const [show, setShow] = useState(false);

  return (
    <div className={styles.wrapper}>
      {/* <div className="container"> */}
      <div className={styles.popupContainer}>
        <h1 className={styles.title}>{message ?? 'Are you sure?'}</h1>
        <div className="d-flex align-items-center justify-content-center">
          <button
            type="submit"
            className={styles.buttonCancel}
            onClick={() => setPopupShow(false)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className={styles.buttonOk}
            onClick={() => handleConfirm()}
          >
            OK
          </button>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Popup;
