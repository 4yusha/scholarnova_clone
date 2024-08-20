import React from 'react'
import Footer from '../Footer/Footer'
import Courses1 from './Courses1/Courses1'
import Courses2 from './Courses2/Courses2'
import ScrollToTop from '../ScrollToTop/ScrollToTop'

const Coursesmain = () => {
  return (
    <div>
      <Courses1 />
      <Courses2 />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Coursesmain;
