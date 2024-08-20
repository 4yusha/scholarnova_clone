import React, { useState, useEffect } from 'react';
import styles from './ScrollToTop.module.css';  // Importing the CSS module

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`${styles['scroll-to-top-button']} ${isVisible ? styles['show'] : ''}`}
    >
      &#8593; {/* Unicode for thin upward arrow */}
    </button>
  );
}

export default ScrollToTop;
