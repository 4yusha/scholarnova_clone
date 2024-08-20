  import React from 'react';
  import styles from './Contactus2.module.css';
  import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'; 
  import { RiMailOpenFill } from "react-icons/ri";

  const Contactus2 = () => {
    return (
      <div>
        <div className={styles.ContactusContainer} data-wow-delay="0.1s">
          <h1>CONTACT US</h1>
        </div>

        <div className={styles.contactSection}>
          <div className={styles.contactDetails}>
            <h3>Get In Touch</h3>
            <div className={styles.contactItem}>
              <div className={styles.iconBox}>
                <FaMapMarkerAlt /> {/* React Icons location pin icon */}
              </div>
              <div className={styles.detailing}>
                <p className={styles.detailsColor}><strong>Office</strong></p>
                <p>Kathmandu, Nepal</p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.iconBox}>
                <FaPhoneAlt /> {/* React Icons phone icon */}
              </div>
              <div className={styles.detailing}>
                <p className={styles.detailsColor}><strong>Mobile</strong></p>
                <p>+977-9800000000</p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.iconBox}>
                <RiMailOpenFill /> {/* React Icons envelope icon */}
              </div>
              <div className={styles.detailing}>
                <p className={styles.detailsColor}><strong>Email</strong></p>
                <p>info@scholarnova.com.np</p>
              </div>
            </div>
          </div>
          <div className={styles.map}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8620357108935!2d85.33655377457572!3d27.690658676192115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb196c5356384f%3A0xf1d26ca8cf94f57a!2sScholar%20Nova%20Education%20Services!5e0!3m2!1sen!2snp!4v1723624405330!5m2!1sen!2snp" 
              width="200%" 
              height="300" 
              frameBorder="0" 
              style={{ border: 0 }} 
              allowFullScreen 
              aria-hidden="false" 
              tabIndex="0">
            </iframe>
          </div>
        </div>

        <div className={styles.enquirySectionContainer}>
          <h1>ENQUIRY NOW</h1>
          <form className={styles.enquiryForm}>
            <div className={styles.row}>
              <input type="text" placeholder="Name*" required />
              <input type="email" placeholder="Email*" required />
              <input type="text" placeholder="Contact Number*" required />
            </div>
            <div className={styles.rowOne}>
              <input type="text" placeholder="Desired Course" />
              <input type="text" placeholder="USA" />
            </div>
            <div className={styles.rowTwo}>
              <textarea placeholder="Leave a message here" rows="6"></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    )
  }

  export default Contactus2;
