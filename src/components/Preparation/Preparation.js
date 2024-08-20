import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Preparation.module.css';

const classes = [
  {
    title: 'PTE',
    path: '/preparation/pte'
  },
  {
    title: 'IELTS',
    path: '/preparation/ielts'
  }
];

const Preparation = () => {
  return (
    <div className={styles.preparationContainer}>
      <h1>Preparation</h1>
      <div className={styles.preparation}>
        {classes.map((item, index) => (
          <Link to={item.path} className={styles.link} key={index}>
            <div className={styles.preparationBox}>
              <h2>{item.title}</h2>
              <div className={styles.underline}></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Preparation;