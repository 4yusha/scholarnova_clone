import React from 'react';
import styles from './Uk2.module.css';

function Uk2() {
  return (
    <div>
      <div className={styles.overlay}></div>
      <div className={styles.textContainer}>
        <h3>Why Study in the UK?</h3>
        <div className={styles.mainReasons}>
        <p className={styles.reason}>There are many reasons why students choose to study in Uk. Here are few: </p>
        <p className={styles.reasons}>
            <b>1. Quality of education:</b> The UK is home to some of the world’s top-ranked universities and is renowned for its high-quality education system. UK <br /> universities offer a wide range of courses and programs, and students have access to some of the best academic resources and facilities. <br />
            <b>2. International Reputation:</b> UK degrees are recognized and respected around the world, making them highly valued by employers. Studying in the UK can provide students with a competitive edge in the global job market. <br />
            <b>3. Cultural Diversity:  </b> The UK is a diverse and multicultural country, with students from all over the world studying and living together. This provides students with the opportunity to learn about different cultures and perspectives, and to develop important cross-cultural communication skills. <br />
            <b>4. Language: </b>English is the language of instruction in the UK, and studying in an English-speaking country can help students to improve their English language skills, which is essential for many career paths. <br />
            <b>5. Career Opportunities:</b>The UK is home to many global companies and has a thriving economy, providing international students with excellent job opportunities after graduation. Many universities also offer career services to help students find internships and employment opportunities. <br />
            <b>6. Student support:</b> UK universities offer a range of support services to international students, including academic support, career guidance, and accommodation assistance. Many universities also have dedicated international student offices to provide advice and support on visas, immigration, and other issues.<br />
        </p>
        <p className={styles.reason}>Overall, studying in the UK can provide students with a high-quality education, a diverse cultural experience, and a chance to explore a beautiful and welcoming country. </p>

        </div>
      </div>
    </div>
  );
}

export default Uk2;