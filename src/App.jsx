import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import logo from '../src/assets/BLACK_LOGO.png';
import Home from './Components/Home';
import VisaInfo from './Components/VisaInfo';
import AboutUs from './Components/AboutUs';
import Services from './Components/Service';
import NewsInfo from './Components/NewsInfo';
import ContactUs from './Components/ContactUs';

function App() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNav = () => {
    const nav = document.querySelector('.overlay-menu');
    if (nav.style.transform !== 'translateX(0%)') {
      nav.style.transform = 'translateX(0%)';
      nav.style.transition = 'transform 0.2s ease-out';
    } else {
      nav.style.transform = 'translateX(-100%)';
      nav.style.transition = 'transform 0.2s ease-out';
    }

    const toggleIcon = document.querySelector('.menuIcon');
    toggleIcon.classList.toggle('toggle');
  };

  return (
    <Router>
      <div>
        <nav id="navbar" className={scrolling ? 'scrolled' : ''}>
          <div className="logo">
            <NavLink to="/"><img width="200px" height="auto" src={logo} alt="Logo"/></NavLink>
          </div>
          <ul id="menu">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/visa">Visa Info</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/news">News/Info</NavLink></li>
            <li><NavLink to="/contact">Contact US</NavLink></li>
          </ul>
        </nav>

        <div className="menuIcon" onClick={toggleNav}>
          <span className="icon icon-bars"></span>
          <span className="icon icon-bars overlay"></span>
        </div>

        <div className="overlay-menu">
          <ul id="menu">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/visa">Visa Info</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/news">News/Info</NavLink></li>
            <li><NavLink to="/contact">Contact US</NavLink></li>
          </ul>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visa" element={<VisaInfo />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/news" element={<NewsInfo />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
