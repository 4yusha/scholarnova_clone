import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Uk1.module.css';

function Uk1() {
  return (
    <div className={styles.UkImage}>
      <div className={styles.overlay}></div>
      <div className={styles.textContainer}>
        <h1>UK</h1>
        <p>
          <Link to="/">Home</Link> / <Link to="/destinationbanner">Destinations</Link> / <Link to = "/destinations/ukmain">Uk</Link>
        </p>
      </div>
    </div>
  );
}

export default Uk1;
