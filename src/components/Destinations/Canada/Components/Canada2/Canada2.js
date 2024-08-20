import React from 'react';
import styles from './Canada2.module.css';

function Canada2() {
  return (
    <div>
      <div className={styles.overlay}></div>
      <div className={styles.textContainer}>
        <h3>Why Study in Canada?</h3>
        <div className={styles.mainReasons}>
        <p className={styles.reason}>There are several reasons why studying in Canada can be a great option for international students:</p>
        <p className={styles.reasons}>
            <b>1. Quality of education:</b> Canada is home to many top-ranked universities and colleges, offering world-class education and research opportunities. Canadian degrees are recognized globally and valued by employers worldwide. <br />
            <b>2. Affordability:</b>  Canada offers affordable tuition fees and living costs compared to other popular study destinations such as the US, UK, and Australia. Additionally, there are many scholarships and funding opportunities available to international students. <br />
            <b>3. Safety and Security: </b>Canada is known for being a safe and peaceful country, with low crime rates and a welcoming, multicultural society. <br />
            <b>4. Cultural Diversity: </b>Canada is a diverse country with a multicultural society, making it an ideal destination for international students looking to experience new cultures and meet people from all over the world. <br />
            <b>5. Opportunities for Job: </b> Canada has a strong economy with a range of industries, providing international students with excellent job opportunities after graduation. The country also has a liberal immigration policy, making it easier for international students to stay and work in Canada after completing their studies. <br />
            <b>6. Quality of life:</b> Canada is known for its high quality of life, with a clean environment, excellent healthcare system, and world-class amenities and facilities.. <br />
            <b>7. Language:</b> Canada is a bilingual country with both English and French as official languages. Studying in Canada can provide international students with an opportunity to improve their language skills and become bilingual, which can be a valuable asset in the job market.
            <br />
        </p>
        <p className={styles.reason}>Overall, studying in Canada can provide international students with an excellent education, valuable cultural experiences, and excellent career opportunities, all while enjoying a safe and high quality of life. </p>

        </div>
      </div>
    </div>
  );
}

export default Canada2;