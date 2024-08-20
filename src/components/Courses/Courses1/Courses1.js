import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Courses1.module.css';

function Courses1() {
  return (
    <div className={styles.CoursesImage}>
      <div className={styles.overlay}></div>
      <div className={styles.textContainer}>
        <h1>Courses</h1>
        <p>
          <Link to="/">Home</Link> / <Link to="/"></Link> / <Link to = "/destinations/Coursesmain">Courses</Link>
        </p>
      </div>
    </div>
  );
}

export default Courses1;
