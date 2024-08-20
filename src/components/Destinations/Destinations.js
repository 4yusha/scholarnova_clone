import React from 'react';
import styles from './Destinations.module.css';

const destinations = [
  {
    name: 'Netherlands',
    flag: 'images/netherland_flag.png',
  },
  {
    name: 'Germany',
    flag: 'images/germany_flag.png',
  },
  {
    name: 'Ireland',
    flag: 'images/ireland_flag.png',
  },
  {
    name: 'Australia',
    flag: 'images/australia_flag.png',
  },
  {
    name: 'Canada',
    flag: 'images/canada_flag.webp',
  },
  {
    name: 'UK',
    flag: 'images/uk_flag.webp',
  },
  {
    name: 'USA',
    flag: 'images/usa_flag.webp',
  },
  {
    name: 'New Zealand',
    flag: 'images/newzealand_flag.webp',
  },
];

const Destinations = () => {
  const otherDestinations = destinations.filter(destination => destination.name !== 'USA' && destination.name !== 'New Zealand');
  const specialDestinations = destinations.filter(destination => destination.name === 'USA' || destination.name === 'New Zealand');

  return (
    <div className={styles.destinationsContainer}>
      <h1>DESTINATIONS</h1>
      <div className={styles.flagsContainer}>
        {otherDestinations.map((destination, index) => (
          <div key={index} className={styles.flagItem}>
            <img src={destination.flag} alt={destination.name} />
            <p>{destination.name}</p>
          </div>
        ))}
        <div className={styles.specialFlagsWrapper}>
          {specialDestinations.map((destination, index) => (
            <div key={index} className={styles.flagItem}>
              <img src={destination.flag} alt={destination.name} />
              <p>{destination.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
