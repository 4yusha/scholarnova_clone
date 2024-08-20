import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Newzealand1.module.css';

function Newzealand1() {
  return (
    <div className={styles.NewzealandImage}>
      <div className={styles.overlay}></div>
      <div className={styles.textContainer}>
        <h1>Newzealand</h1>
        <p>
          <Link to="/">Home</Link> / <Link to="/destinationbanner">Destinations</Link> / <Link to = "/destinations/newzealandmain">Newzealand</Link>
        </p>
      </div>
    </div>
  );
}

export default Newzealand1;
