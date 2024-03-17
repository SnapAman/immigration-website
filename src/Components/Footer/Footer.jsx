import '../Footer/Footer.css'
import React from 'react';
import { Grid, Typography, Link } from '@mui/material';
import CompanyLogo from '../../assets/WHITE_LOGO.png'

const Footer = () => {
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
              <li className='Footer-List'><p variant="body1">Address: Level 1, 166 Harris Road East Tamaki, Auckland</p></li>
              <li className='Footer-List'><p variant="body1">(+64) 09 272 4424</p></li>
              <li className='Footer-List'><p variant="body1">contact@msimmigration.co.nz</p></li>
              <li className='Footer-List'><p variant="body1">Monday - Friday: 9:30 AM - 06:00 PM</p></li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">QUICK LINKS</Typography>
            <ul>
              <li className='Footer-List'><Link href="#" variant="body1">About Us</Link></li>
              <li className='Footer-List'><Link href="#" variant="body1">Visa Information</Link></li>
              <li className='Footer-List'><Link href="#" variant="body1">Services</Link></li>
              <li className='Footer-List'><Link href="#" variant="body1">Contact Us</Link></li>
              <li className='Footer-List'><Link href="#" variant="body1">News/ Information</Link></li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">RESOURCES</Typography>
            <ul>
              <li className='Footer-List'><Link href="#" variant="body1">Study in New Zealand</Link></li>
              <li className='Footer-List'><Link href="#" variant="body1">Travel in New Zealand</Link></li>
              <li className='Footer-List'><Link href="#" variant="body1">Immigration New Zealand</Link></li>
            </ul>
          </Grid>
        </Grid>
      </Grid>
    </footer>
      <div style={{display : 'flex', textAlign : 'center', justifyContent : 'center', padding : '40px 0px', backgroundColor : 'black', color : 'white' }}>
        <p>© 2024 | McClymont & Shaikh Associates | All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
