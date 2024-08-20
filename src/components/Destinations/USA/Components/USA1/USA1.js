import React from 'react';
import { Link } from 'react-router-dom';
import styles from './USA1.module.css';

function USA1() {
  return (
    <div className={styles.USAImage}>
      <div className={styles.overlay}></div>
      <div className={styles.textContainer}>
        <h1>USA</h1>
        <p>
          <Link to="/">Home</Link> / <Link to="/destinationbanner">Destinations</Link> / <Link to = "/destinations/USAmain">USA</Link>
        </p>
      </div>
    </div>
  );
}

export default USA1;
