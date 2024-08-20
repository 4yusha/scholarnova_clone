import React from 'react';
import styles from './Footer.module.css';
import { IoIosArrowForward } from "react-icons/io";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerSection}>
                <h2 className={styles.footerTitle}>Quick Links</h2>
                <ul className={styles.footerList}>
                    <li className={styles.footerItem}><IoIosArrowForward className={styles.arrow_icon}/>
                    <a href="#contact" className={styles.footerLink}>Contact Us</a></li>
                    <li className={styles.footerItem}><IoIosArrowForward />
                    <a href="#about" className={styles.footerLink}>About Us</a></li>
                    <li className={styles.footerItem}><IoIosArrowForward />
                    <a href="#teams" className={styles.footerLink}>Teams</a></li>
                </ul>
            </div>
            <div className={styles.footerSection}>
                <h2 className={styles.footerTitle}>Contact</h2>
                <ul className={styles.footerList}>
                    <li className={styles.footerItem}><FaMapMarkerAlt /> New Baneshwor, Kathmandu, Nepal</li>
                    <li className={styles.footerItem}><FaPhoneAlt /> +977-9851156633</li>
                    <li className={styles.footerItem}><FaEnvelope /> info@scholarnova.com.np</li>
                </ul>
                <div className={styles.socialIcons}>
                    <a href="https://twitter.com" className={styles.socialIcon}><FaTwitter /></a>
                    <a href="https://facebook.com" className={styles.socialIcon}><FaFacebookF /></a>
                </div>
            </div>
            <div className={styles.footerSection}>
                <h2 className={styles.footerTitle}>Destinations</h2>
                <ul className={styles.footerList}>
                    <li className={styles.footerItem}><IoIosArrowForward />
                    <a href="#australia" className={styles.footerLink}>Australia</a></li>
                    <li className={styles.footerItem}><IoIosArrowForward />
                    <a href="#canada" className={styles.footerLink}>Canada</a></li>
                    <li className={styles.footerItem}><IoIosArrowForward />
                    <a href="#uk" className={styles.footerLink}>UK</a></li>
                    <li className={styles.footerItem}><IoIosArrowForward />
                    <a href="#usa" className={styles.footerLink}>USA</a></li>
                    <li className={styles.footerItem}><IoIosArrowForward />
                    <a href="#newzealand" className={styles.footerLink}>New Zealand</a></li>
                </ul>
            </div>
            <div className={styles.footerSection}>
                <div className={styles.scholarnova_image}><img src="images/scholarnova_logo.png" alt="a scolarnova logo" /></div>
                <p className={styles.footerText}>With our team of experienced consultants and our extensive network of top-tier academic institutions, we offer a wide range of services that are tailored to meet your unique needs and goals.</p>
            </div>
            <div className={styles.footerBottom}>  
                <p className={styles.footerBottomText}>© 2024 <u>scholarnova.com.np </u>All Right Reserved.</p>  
                <div className={styles.footerBottomLinks}>  
                    <a href="#privacy" className={styles.footerBottomLink}>Privacy Policy</a>  
                    <a href="#fqas" className={styles.footerBottomLink}>FQAs</a>  
                </div>  
            </div>
        </footer>
    );
}

export default Footer;
