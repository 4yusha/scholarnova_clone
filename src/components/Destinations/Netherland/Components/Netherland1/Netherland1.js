import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Netherland1.module.css';

function Netherland1() {
  return (
    <div className={styles.NetherlandImage}>
      <div className={styles.overlay}></div>
      <div className={styles.textContainer}>
        <h1>Netherland</h1>
        <p>
          <Link to="/">Home</Link> / <Link to="/destinationbanner">Destinations</Link> / <Link to = "/destinations/netherlandmain">Netherlands</Link>
        </p>
      </div>
    </div>
  );
}

export default Netherland1;
