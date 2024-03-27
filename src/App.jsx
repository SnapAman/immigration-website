import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import logo from '../src/assets/BLACK_LOGO.png';
import Home from './Components/Home/Home.jsx';
import VisaInfo from './Components/VisaInfo/VisaInfo';
import AboutUs from './Components/AboutUs/AboutUs';
import Services from './Components/Service/Service'
import NewsInfo from './Components/NewsInfo/NewsInfo'
import ContactUs from './Components/ContactUs/ContactUs';
import Booking from './Components/Booking/Booking';

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

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };

  return (

    <Router>

      <header id="header" className={scrolling ? 'navbar scrolled' : 'navbar'}>
        <nav className="nav container">

          <NavLink to="/"><img width="200px" height="auto" src={logo} alt="Logo" /></NavLink>
          <div
            className={`nav__menu ${showMenu ? "show-menu" : ""}`}
            id="nav-menu"
          >
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>HOME</NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/visa" className="nav__link" onClick={closeMenuOnMobile}>VISA INFO</NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/about" className="nav__link" onClick={closeMenuOnMobile}>ABOUT US</NavLink></li>
              <li className="nav__item">
                <NavLink to="/services" className="nav__link" onClick={closeMenuOnMobile}>SERVICES</NavLink>
                </li>
              <li className="nav__item"><NavLink to="/booking" className="nav__link" onClick={closeMenuOnMobile}>BOOKING</NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/contact" className="nav__link" onClick={closeMenuOnMobile}>CONTACT</NavLink>
              </li>
            </ul>
            <div className="nav__close" id="nav-close" onClick={toggleMenu}>
              <CloseIcon />
            </div>
          </div>

          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <MenuIcon />
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visa" element={<VisaInfo />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/news" element={<NewsInfo />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </Router>
  );
}

export default App;
