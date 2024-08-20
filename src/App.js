import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import Router components
import './App.css';
import Welcome from "./components/Welcome/Welcome.js";
import Services from "./components/Services/Services.js";
import Whyscholarnova from "./components/Whyscholarnova/Whyscholarnova.js";
import Destinations from './components/Destinations/Destinations.js';
import Footer from './components/Footer/Footer.js';
import Navbar from './components/Navbar/Navbar.js';
import Banner from './components/Banner/Banner.js';
import Preparation from './components/Preparation/Preparation.js';
import Ielts from './components/Preparation/IELTS/Ielts.js';
import Pte from './components/Preparation/PTE/Pte.js';
import AustraliaMain from './components/Destinations/Australia/Australiamain.js';
import Canadamain from './components/Destinations/Canada/Canadamain.js';
import Netherlandmain from './components/Destinations/Netherland/Netherlandmain.js';
import Germanymain from './components/Destinations/Germany/Germanymain.js';
import Irelandmain from './components/Destinations/Ireland/Irelandmain.js';
import Newzealandmain from './components/Destinations/Newzealand/Newzealandmain.js';
import Ukmain from './components/Destinations/Uk/Ukmain.js';
import USAmain from './components/Destinations/USA/USAmain.js';
import About from './components/About/About.js';
import Contactusmain from './components/Contactus/Contactusmain.js';
import DestinationBanner from './components/Destinations/DestinationBanner/DestinationBanner.js';
import Gallery from './components/Gallery/Gallery.js';
import Coursesmain from './components/Courses/Coursesmain.js';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.js';


const App = () => {
  return (
    <Router> {/* Wrap everything in Router */}
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <Welcome />
            <Services />
            <Whyscholarnova />
            <Destinations />
            <Preparation />
            <Footer />
            <ScrollToTop />
          </>
        } />

        <Route path="/preparation/ielts" element={<Ielts />} />
        <Route path="/preparation/pte" element={<Pte />} />

        <Route path="/destinationbanner" element={<DestinationBanner />} /> 

        <Route path="/destinations/australiamain" element={<AustraliaMain />} /> {/* Define route for Australia */}
        <Route path="/destinations/canadamain" element={<Canadamain />} /> {/* Define route for Canada */}
        <Route path="/destinations/netherlandmain" element={<Netherlandmain />} /> {/* Define route for Netherlands */}
        <Route path="/destinations/germanymain" element={<Germanymain />} /> {/* Define route for Germany */}
        <Route path="/destinations/irelandmain" element={<Irelandmain />} /> {/* Define route for Ireland */}
        <Route path="/destinations/newzealandmain" element={<Newzealandmain />} /> {/* Define route for New Zealand */}
        <Route path="/destinations/ukmain" element={<Ukmain />} /> {/* Define route for UK */}
        <Route path="/destinations/usamain" element={<USAmain />} /> {/* Define route for USA */}

        <Route path="/coursesmain" element={<Coursesmain />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactusmain" element={<Contactusmain />} /> {/* Define route for Contact Us */}
        <Route path="/gallery" element={<Gallery />} />


      </Routes>
    </Router>
  );
}

export default App;
