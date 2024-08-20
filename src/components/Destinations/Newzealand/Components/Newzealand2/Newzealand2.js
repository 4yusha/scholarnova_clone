import React from 'react';
import styles from './Newzealand2.module.css';

function Newzealand2() {
  return (
    <div>
      <div className={styles.overlay}></div>
      <div className={styles.textContainer}>
        <h3>Why Study in New Zealand?</h3>
        <div className={styles.mainReasons}>
        <p className={styles.reason}>There are many reasons why students choose to study in Newzealand. Here are few: </p>
        <p className={styles.reasons}>
            <b>1. Quality of education:</b> New Zealand has a world-class education system, with universities consistently ranked among the top in the world. Students can choose from a wide range of programs and courses, and benefit from research-led teaching and a supportive learning environment. <br />
            <b>2. Beautiful Natural Environment:</b> New Zealand is known for its stunning natural landscapes, including mountains, beaches, forests, and lakes. International students can enjoy a range of outdoor activities, such as hiking, skiing, surfing, and more. <br />  
            <b>3. Safe and Welcoming Society: </b> New Zealand is a peaceful and multicultural society, with a reputation for being safe and welcoming to international students. The country is committed to promoting diversity, equality, and human rights. <br />
            <b>4. Affordable Living Costs</b> New Zealand has a relatively low cost of living compared to other study destinations such as the USA or the UK. Students can enjoy a high standard of living without breaking the bank. <br />
            <b>5. Work Opportunities: </b> New Zealand offers excellent work opportunities for international students, with flexible visa regulations and a growing economy. Students can work up to 20 hours per week during term-time and full-time during vacations.           <br />
            <b>6. Innovative research</b> New Zealand has a strong research culture, with universities and research institutes conducting cutting-edge research in areas such as renewable energy, biotechnology, and agriculture. Students can benefit from the opportunity to work with world-renowned researchers and contribute to innovative research projects.<br />
        </p>
        <p className={styles.reason}>Overall, studying in New Zealand can provide international students with a high-quality education, a stunning natural environment, and excellent work opportunities in a safe and welcoming society. </p>

        </div>
      </div>
    </div>
  );
}

export default Newzealand2;