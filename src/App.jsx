import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Banner from './components/Banner.jsx';
import HIW from './components/HIW/HIW.jsx';
import OM from './components/OM.jsx';
import ContactUs from './components/ContactUs.jsx';
import Faq from './components/Faq.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className='app-container'>
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/how-it-works" element={<HIW />} />
          <Route path="/our-mission" element={<OM />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
