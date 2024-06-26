import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import logo from '../src/assets/BLACK_LOGO.png';
import Home from './src/Components/Home/Home.jsx';
import AboutUs from './src/Components/AboutUs/AboutUs';
import Services from './src/Components/Service/Service'
import NewsInfo from './src/Components/NewsInfo/NewsInfo'
import ContactUs from './src/Components/ContactUs/ContactUs';
import Booking from './src/Components/Booking/Booking';

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
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Add smooth scrolling behavior
    });
  };

  return (

    <Router>

      <header id="header" className={scrolling ? 'navbar scrolled' : 'navbar'}>
        <nav className="nav container">

          <NavLink onClick={(event) => { scrollToTop(); closeMenuOnMobile(); }} to="/"><img width="200px" height="auto" src={logo} alt="Logo" /></NavLink>
          <div
            className={`nav__menu ${showMenu ? "show-menu" : ""}`}
            id="nav-menu"
          >
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink onClick={(event) => { scrollToTop(); closeMenuOnMobile(); }} to="/" className="nav__link" >HOME</NavLink>
              </li>
              
              <li className="nav__item">
                <NavLink onClick={(event) => { scrollToTop(); closeMenuOnMobile(); }} to="/about" className="nav__link" >ABOUT US</NavLink></li>
              <li className="nav__item">
                <NavLink onClick={(event) => { scrollToTop(); closeMenuOnMobile(); }} to="/services" className="nav__link" >SERVICES</NavLink>
                </li>
              <li className="nav__item"><NavLink onClick={(event) => { scrollToTop(); closeMenuOnMobile(); }} to="/booking" className="nav__link" >BOOKING</NavLink>
              </li>
              <li className="nav__item">
                <NavLink onClick={(event) => { scrollToTop(); closeMenuOnMobile(); }} to="/contact" className="nav__link" >CONTACT</NavLink>
              </li>
              <li className="nav__item">
                <NavLink onClick={(event) => { scrollToTop(); closeMenuOnMobile(); }} to="/news" className="nav__link" >NEWS</NavLink>
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
