import React from 'react'
import styles from "./Welcome.module.css"

const welcome = () => {
  return (
    <div className={styles.paragraph_container}>
      <h2 className={styles.welcome_heading}>Unlock your Global Potential with Scholarnova- where "Empowering Minds and Transforming Lives is our Mission."</h2>
      <p >Welcome to Scholarnova, where our mission is to help you unlock your global potential. We believe that education has the power to transform lives and <br />create a better world, which is why 
        we are dedicated to empowering individuals and organizations through innovative global education solutions. 
        <span className={styles.break}></span>
        With our team of experienced consultants and our extensive network of top-tier
        academic institutions, we offer a wide range of services that are tailored to <br /> meet your unique needs and goals. Whether you’re looking to study abroad, pursue an online degree, or enhance 
        your career prospects, we’re here to help you <br /> every step of the way. Let’s embark on this journey of personal growth and global impact together.
      </p>
    </div>
  )
}

export default welcome
