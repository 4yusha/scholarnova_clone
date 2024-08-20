import React from 'react';
import { FaUsers, FaGraduationCap, FaBookOpen, FaPlane, FaHospital } from 'react-icons/fa';
import { AiFillMessage } from "react-icons/ai";
import styles from './Services.module.css';

const services = [
  {
    icon: <FaUsers className={styles.icon} />,
    title: 'Professional Counseling',
    description: 'Our Education Counsellors provide personalized advice by learning about your career aspirations, lifestyle and study goals to offer tailored recommendations that suit your needs.'
  },
  {
    icon: <FaGraduationCap className={styles.icon} />,
    title: 'Scholarship & Financing',
    description: 'Our service provides assistance and advice to help students find and apply for scholarships and funding to support their education.'
  },
  {
    icon: <FaBookOpen className={styles.icon} />,
    title: 'Student Guidance',
    description: 'Our service offers comprehensive support for university or college placement and scholarships. From initial consultation to application, our expert advice ensures you receive tailored guidance.'
  },
  {
    icon: <FaPlane className={styles.icon} />,
    title: 'Application & visa services',
    description: 'We assist students with the admission process and obtaining the necessary visas for studying abroad, including documentation, review, and interview preparation.'
  },
  {
    icon: <FaHospital className={styles.icon} />,
    title: 'Student health insurance & accommodation',
    description: 'We offer support to students by providing assistance with finding housing and obtaining best medical coverage while studying abroad.'
  },
  {
    icon: <AiFillMessage className={styles.icon} />,
    title: 'English Proficiency Test',
    description: 'Our English language test preparation services specialize in IELTS and PTE exams, offering personalized support with practice exams, study materials, tutoring, and more to improve your language skills and scores.'
  }
];

const Services = () => {
  return (
    <div className={styles.servicesContainer} data-wow-delay="0.1s">
      <h1>OUR SERVICES</h1>
      <div className={styles.services}>
        {services.map((service, index) => (
          <div className={styles.serviceBox} key={index}>
            <div className={styles.iconContainer}>{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
