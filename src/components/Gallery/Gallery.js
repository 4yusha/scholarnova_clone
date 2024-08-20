import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Gallery.module.css';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const images = [
  '/images/picture1.jpg',
  '/images/picture2.jpg',
  '/images/picture3.jpg',
  '/images/picture4.jpg',
  '/images/picture5.jpg',
  '/images/picture6.jpg',
  '/images/picture7.jpg',
  '/images/picture8.jpg',
  '/images/picture9.jpg',
  '/images/picture10.jpg',
  '/images/picture11.jpg',
  '/images/picture12.jpg',
  '/images/picture13.jpg',
  '/images/picture14.jpg',
];

const Gallery = () => {
  const handleImageClick = (image) => {
    window.open(image); 
  };

  return (
    <div>
      <div className={styles.BannerImage}>
        <div className={styles.overlay}></div>
        <div className={styles.textContainer}>
          <h1>Gallery</h1>
          <p>
            <Link to="/">Home</Link> / <Link to="/Gallery/">Gallery</Link>
          </p>
        </div>
      </div>

      <div className={styles.galleryContainer}>
        <h2 className={styles.galleryTitle}>GALLERY</h2>
        <div className={styles.imageGrid}>
          {images.map((image, index) => (
            <div 
              key={index} 
              className={styles.imageWrapper} 
              onClick={() => handleImageClick(image)}
            >
              <img 
                src={image} 
                alt={`Gallery Image ${index + 1}`} 
                className={styles.galleryImage} 
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Gallery;
