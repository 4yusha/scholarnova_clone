import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaTwitter, FaFacebookF } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import { RiMailOpenFill } from 'react-icons/ri';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    destinations: false,
    preparation: false,
  });

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  const toggleDropdown = (menu) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <div className={styles.headerTopContent}>
          <div className={styles.headerTopLeft}>
            <div className={styles.location}>
              <FaLocationDot /> New Baneshwor, Kathmandu, Nepal
            </div>
            <div className={styles.contact}>
              <FaPhoneAlt /> +977-9851156633
            </div>
            <div className={styles.email}>
              <RiMailOpenFill /> info@scholarnova.com.np
            </div>
          </div>
          <div className={styles.headerTopRight}>
            <div className={styles.socialIcons}>
              <a href="https://x.com/scholarnova"><FaTwitter /></a>
              <a href="https://www.facebook.com/scholarnova"><FaFacebookF /></a>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.headerBottom} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo" />
          </Link>
        </div>

        <nav className={styles.navMenu}>
          <ul>
            <li
              className={styles.navItem}
              onMouseEnter={() => toggleDropdown('destinations')}
              onMouseLeave={() => toggleDropdown('destinations')}
            >
              <a href="/destinationbanner">
                Destinations
                <IoMdArrowDropdown className={`${styles.dropdownArrow} ${isDropdownOpen.destinations ? styles.open : ''}`}/>
              </a>
              {isDropdownOpen.destinations && (
                <ul className={styles.dropdownMenu}>
                  <li><a href="/destinations/netherlandmain">Netherlands</a></li>
                  <li><a href="/destinations/germanymain">Germany</a></li>
                  <li><a href="/destinations/irelandmain">Ireland</a></li>
                  <li><a href="/destinations/australiamain">Australia</a></li>
                  <li><a href="/destinations/ukmain">UK</a></li>
                  <li><a href="/destinations/newzealandmain">New Zealand</a></li>
                  <li><a href="/destinations/usamain">USA</a></li>
                  <li><a href="/destinations/canadamain">Canada</a></li>
                </ul>
              )}
            </li>

            <li
              className={styles.navItem}
              onMouseEnter={() => toggleDropdown('preparation')}
              onMouseLeave={() => toggleDropdown('preparation')}
            >
              <Link to="#">
                Preparation
                <IoMdArrowDropdown className={`${styles.dropdownArrow} ${isDropdownOpen.preparation ? styles.open : ''}`} />
              </Link>
              {isDropdownOpen.preparation && (
                <ul className={styles.dropdownMenu}>
                  {['IELTS', 'PTE'].map((exam) => (
                    <li key={exam}><Link to={`/preparation/${exam.toLowerCase()}`}>{exam}</Link></li>
                  ))}
                </ul>
              )}
            </li>

            <li><a href="/coursesmain">Courses</a></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><a href="/contactusmain">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
