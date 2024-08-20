import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Australia1.module.css';

function Australia1() {
  return (
    <div className={styles.AustraliaImage}>
      <div className={styles.overlay}></div>
      <div className={styles.textContainer}>
        <h1>Australia</h1>
        <p>
          <Link to="/">Home</Link> / <Link to="/destinationbanner">Destinations</Link> / <Link to = "/destinations/australiamain">Australia</Link>
        </p>
      </div>
    </div>
  );
}

export default Australia1;
