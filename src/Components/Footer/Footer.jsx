import '../Footer/Footer.css'
import React from 'react';
import { Grid, Typography, Link } from '@mui/material';
import CompanyLogo from '../../assets/WHITE_LOGO.png';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Add smooth scrolling behavior
    });
  };
  return (
    <>
      <footer className="footer">
        <Grid container justifyContent="space-between" alignItems="center" className="footer-content">
          <Grid item>
            <img className='company-logo' src={CompanyLogo} alt="Company Logo" />
          </Grid>
          <Grid item container xs={12} sm={9} spacing={4}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6">CONTACTS</Typography>
              <ul>
                <li className='Footer-List'><p variant="body1">Address: 415 Great South Rd. Ellerslie, Auckland</p></li>
                <li className='Footer-List'><p variant="body1">(+64) 09 272 4424</p></li>
                <li className='Footer-List'><p variant="body1">contact@msimmigration.co.nz</p></li>
                <li className='Footer-List'><p variant="body1">Monday - Friday: 9:30 AM - 06:00 PM</p></li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6">QUICK LINKS</Typography>
              <ul>
                <li className='Footer-List'><NavLink onClick={scrollToTop} to="/about" href="#" variant="body1">About Us</NavLink></li>
                <li className='Footer-List'><NavLink onClick={scrollToTop} to="/services" href="#" variant="body1">Services</NavLink></li>
                <li className='Footer-List'><NavLink onClick={scrollToTop} to="/booking" href="#" variant="body1">Booking</NavLink></li>
                <li className='Footer-List'><NavLink onClick={scrollToTop} to="/contact" href="#" variant="body1">Contact Us</NavLink></li>
                <li className='Footer-List'><NavLink onClick={scrollToTop} href="#" variant="body1">News/ Information</NavLink></li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6">SOCIALS</Typography>
              <ul>
                <li className='Footer-List'><Link className='footer-icon-link'   href="#" target="_blank" variant="body1"><XIcon />X</Link></li>
                <li className='Footer-List'><Link className='footer-icon-link'  href="https://www.facebook.com/mcclymontandassociates" target="_blank" variant="body1"><FacebookIcon />Facebook</Link></li>
                <li className='Footer-List'><Link className='footer-icon-link'  href="https://nz.linkedin.com/in/alastair-mcclymont-a66ab248?original_referer=https%3A%2F%2Fwww.google.com%2F" target="_blank" variant="body1"><LinkedInIcon />LinkedIn</Link></li>
                <li className='Footer-List'><Link className='footer-icon-link'  href="#" target="_blank" variant="body1"><InstagramIcon />Instagram</Link></li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </footer>
      <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'center', padding: '40px 0px', backgroundColor: 'black', color: 'white' }}>
        <p>© 2024 | McClymont Shaikh Immigration | All Rights Reserved</p>
        <span>Website developed by Snapfluence Technologies
        <img src="src/assets/SnapLogo.svg" alt="abc" />
        </span>
      </div>
      
    </>
  );
};

export default Footer;
