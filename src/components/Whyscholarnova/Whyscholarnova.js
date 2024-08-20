import React from 'react';
import { FaCheck, FaPlus, FaPlane, FaThumbsUp } from 'react-icons/fa';
import styles from './Whyscholarnova.module.css';

const reasons = [
  {
    icon: <FaCheck className={styles.icon} />,
    title: 'HIGH SUCCESS RATE'
  },
  {
    icon: <FaPlus className={styles.icon} />,
    title: '500+ PARTNER INSTITUTIONS'
  },
  {
    icon: <FaPlane className={styles.icon} />,
    title: '8 DESTINATION COUNTRIES'
  },
  {
    icon: <FaThumbsUp className={styles.icon} />,
    title: 'ALL-INCLUSIVE SERVICE'
  }
];

const Whyscholarnova = () => {
  return (
    <div className={styles.whyscholarnovaContainer}>
      <h1>WHY SCHOLARNOVA</h1>
      <p>
        Join countless Nepali students who have realized their international education aspirations with our consultancy services. Our ethical, accurate, and friendly team has years of experience providing excellent guidance and support to individuals from diverse backgrounds. Whether you want to study abroad, pursue an online degree, or boost your career prospects, we are here to assist you every step of the way. Share your goals with us, and we will provide the guidance and resources you need to make them a reality.
      </p>
      <div className={styles.whyscholarnova}>
        {reasons.map((reason, index) => (
          <div className={styles.whyscholarnovaBox} key={index}>
            <div className={styles.iconContainer}>{reason.icon}</div>
            <h2>{reason.title}</h2>
            <div className={styles.underline}></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Whyscholarnova;