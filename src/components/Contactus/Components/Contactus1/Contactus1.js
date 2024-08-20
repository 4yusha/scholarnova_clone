import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Contactus1.module.css';

function Contactus1() {
  return (
    <div className={styles.ContactusImage}>
      <div className={styles.overlay}></div>
      <div className={styles.textContainer}>
        <h1>Contact Us</h1>
        <p>
          <Link to="/">Home</Link> / <Link to = "/destinations/Contactusmain">Contact us</Link>
        </p>
      </div>
    </div>
  );
}

export default Contactus1;
