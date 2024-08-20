import React from 'react';
import styles from './Banner.module.css';

function Banner() {
  return (
    <div className={styles.BannerImage}>
      <div className={styles.overlay}></div>
      <div className={styles.textContainer}>
        <h1>Education Without<br />Boundaries</h1>
        <p>Study abroad with Scholarnova</p>
      </div>
    </div>
  );
}

export default Banner;