import React from 'react';
import styles from './Australia2.module.css';

function Australia2() {
  return (
    <div>
      <div className={styles.overlay}></div>
      <div className={styles.textContainer}>
        <h3>Why Study in Australia?</h3>
        <div className={styles.mainReasons}>
        <p className={styles.reason}>There are many reasons why students choose to study in Australia. Here are few: </p>
        <p className={styles.reasons}>
            <b>1. Quality of education:</b> Australian universities and colleges are known for their high quality of education, and are consistently ranked among the best in the world. <br />
            <b>2. Range of courses:</b> There are thousands of courses to choose from, in a variety of fields, including business, engineering, health sciences, social sciences, natural sciences, arts 
            and humanities, and language and culture. <br />
            <b>3. Diverse culture: </b> Australia is a multicultural society, and international students can expect to meet people from all over the world. This can lead to new friendships and a greater 
            understanding of different cultures. <br />
            <b>4. Beautiful environment: </b>Australia is known for its stunning natural beauty, from its beaches and coral reefs to its rainforests and national parks. Students can explore this
            environment and experience Australian wildlife firsthand. <br />
            <b>5. Opportunities for work: </b>International students can work part-time while they study, and may be eligible for post-study work visas after graduation. This can provide valuable 
            work experience and help with living expenses. <br />
            <b>6. Safe and welcoming country:</b> Australia is a safe and welcoming country, with a high standard of living and a strong social safety net. <br />
        </p>
        <p className={styles.reason}>Overall, studying in Australia can provide students with a high-quality education, a diverse cultural experience, and a chance to explore a beautiful and welcoming country. </p>

        </div>
      </div>
    </div>
  );
}

export default Australia2;