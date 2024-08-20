import React from 'react';
import styles from './About.module.css';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

function About() {
    return (
        <div>
            <div className={styles.BannerImage}>
                <div className={styles.overlay}></div>
                <div className={styles.textContainer}>
                    <h1>About Us</h1>
                    <p>Home / About Us</p>
                </div>
            </div>

            <div className={styles.aboutContainer}>
                <h1>ABOUT US</h1>
                <p className={styles.aboutText}>
                    We are a team of experienced professionals who are passionate about helping students achieve their academic goals and realize their full potential.
                    <br /><br />
                    Our mission is to provide personalized guidance and support to students at every stage of their academic journey. We understand that choosing the right educational path can be daunting, and we are here to make that process easier and more accessible for you.
                    <br /><br />
                    Our team is made up of experts in various fields, including admissions counseling, academic advising, and career development. We have worked with students from diverse backgrounds and helped them gain acceptance to some of the world’s top universities and colleges.
                    <br /><br />
                    We offer a range of services, including academic advising, college admissions counseling, career guidance, and test preparation. Our goal is to help you navigate the complex world of higher education and find the path that is right for you.
                    <br /><br />
                    At Scholarnova, we are committed to providing personalized attention and support to each of our students. We take the time to get to know you and your unique needs and aspirations, and work closely with you to develop a plan that will help you achieve your goals.
                    <br /><br />
                    We are passionate about education and believe that every student has the potential to succeed. Contact us today to learn more about how we can help you achieve your academic dreams.
                </p>
            </div>
            <Footer />
            <ScrollToTop />
        </div>
    );
}

export default About;