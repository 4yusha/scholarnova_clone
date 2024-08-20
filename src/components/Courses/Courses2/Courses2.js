import React from 'react';
import styles from './Courses2.module.css';

function Courses2() {
  return (
    <div>
      <div className={styles.overlay}></div>
      <div className={styles.CoursesContainer}>
        <h1>COURSES</h1>
        <h3 className={styles.textContainer}>Courses you can choose with Scholarnova</h3>
        <div className={styles.mainCourses}>
        <p className={styles.desc_one}>At Scholarnova, we are dedicated to helping students achieve their educational goals by providing
                                    expert guidance and support every step of the way. Our “courses” section is designed to help you explore the different academic 
                                    programs and courses available to you at universities and colleges around the <br /> world. <br /> <br />
                                    Whether you are interested in pursuing a degree in business, engineering, medicine, or any other field,
                                    we can help you find the right program to match your interests and career aspirations. Our team of experienced
                                    advisors will work closely with you to identify your goals and preferences, and then provide you <br /> with personalized 
                                    recommendations on the best programs to suit your needs. <br /> <br /> In our “courses” section, you’ll find detailed information on 
                                    program requirements, course descriptions, and academic schedules, as well as any other relevant information that you may 
                                    need to make informed decisions about your education. We are committed to providing you with the most up-to-date and accurate information,
                                    so you can be confident that you are making the right choices for your future. <br />  <br />
                                    If you have any questions about the programs and courses listed in our “courses” section, or if you 
                                    would like to learn more about how we can help you <br /> achieve your educational goals, please don’t hesitate to contact us. We are always here to help! </p>

        <p className={styles.popular_courses}>Some of our most popular course categories for international students include:</p>
        
        <p className={styles.courses}>
            <b>1. Business and Management:</b> This includes courses in accounting, finance, marketing, international business, and entrepreneurship. <br />
            <b>2. Engineering: </b>  This includes courses in mechanical, electrical, civil, and aerospace engineering, as well as related fields such as computer science and <br /> information technology. <br />
            <b>3. Health Sciences: </b>  This includes courses in medicine, nursing, public health, and other health-related fields.<br />
            <b>4. Social Sciences: </b>This includes courses in psychology, sociology, anthropology, political science, and other social science fields. <br />
            <b>5. Natural Sciences: </b>This includes courses in biology, chemistry, physics, environmental science, and other natural science fields.<br />
            <b>6. Arts and Humanities: </b> This includes courses in literature, history, philosophy, art, and other humanities fields. <br />
            <b>6. Language and Culture: </b> This includes courses in language learning and cultural studies, which can help students develop their language skills and cultural understanding. <br />
        </p>
        <p className={styles.course}>It’s important to note that this list is not exhaustive and there are many other courses and fields of study that students may choose to pursue while studying abroad. The specific courses available will depend on the universities and colleges that students are considering, as well as their own academic backgrounds <br /> and interests.</p>

        </div>
      </div>
    </div>
  );
}

export default Courses2;