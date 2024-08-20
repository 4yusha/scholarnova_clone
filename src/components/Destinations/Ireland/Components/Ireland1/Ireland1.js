import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Ireland1.module.css';

function Ireland1() {
  return (
    <div className={styles.IrelandImage}>
      <div className={styles.overlay}></div>
      <div className={styles.textContainer}>
        <h1>Ireland</h1>
        <p>
          <Link to="/">Home</Link> / <Link to="/destinationbanner">Destinations</Link> / <Link to = "/destinations/irelandmain">Ireland</Link>
        </p>
      </div>
    </div>
  );
}

export default Ireland1;
