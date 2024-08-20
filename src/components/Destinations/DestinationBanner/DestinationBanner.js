import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DestinationBanner.module.css';
import Destinations from '../Destinations';
import Footer from '../../Footer/Footer';
import ScrollToTop from '../../ScrollToTop/ScrollToTop';

function DestinationBanner() {
  return (
    <React.Fragment>
    <div className={styles.DestinationBannerImage}>
      <div className={styles.overlay}></div>
      <div className={styles.textContainer}>
        <h1>Destinations</h1>
        <p>
          <Link to="/">Home</Link> / <Link to="/destinationbanner">Destinations</Link>
        </p>
      </div>
    </div>
     <Destinations />
     <Footer />
     <ScrollToTop />
    </React.Fragment>
     
  );
}

export default DestinationBanner;
