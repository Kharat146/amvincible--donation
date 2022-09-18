import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Gallery from './Components/Gallery/Gallery';
import Navigation from './Navigation/Navigation';
import DonationButton from './Components/Donation/DonationButton';
import 'antd/dist/antd.css';
import './Styles/global.scss';
import './Styles/colorCode.css';
import Header from './Navigation/Header';
import Footer from './Components/Footer/Footer';

function App() {

  const [isMenuModal, setIsMenuModal] = useState(false);


  return (
    <>
    <Router>
      <Header isMenuModal={isMenuModal} setIsMenuModal={setIsMenuModal}/>
      <Navigation isMenuModal={isMenuModal} setIsMenuModal={setIsMenuModal}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
