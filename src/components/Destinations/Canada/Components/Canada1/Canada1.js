import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Canada1.module.css';

function Canada1() {
  return (
    <div className={styles.CanadaImage}>
      <div className={styles.overlay}></div>
      <div className={styles.textContainer}>
        <h1>Canada</h1>
        <p>
          <Link to="/">Home</Link> / <Link to="/destinationbanner">Destinations</Link> / <Link to = "/destinations/canadamain">Canada</Link>
        </p>
      </div>
    </div>
  );
}

export default Canada1;
