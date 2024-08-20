import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Germany1.module.css';

function Germany1() {
  return (
    <div className={styles.GermanyImage}>
      <div className={styles.overlay}></div>
      <div className={styles.textContainer}>
        <h1>Germany</h1>
        <p>
          <Link to="/">Home</Link> / <Link to="/destinationbanner">Destinations</Link> / <Link to = "/destinations/germanymain">Germany</Link>
        </p>
      </div>
    </div>
  );
}

export default Germany1;
