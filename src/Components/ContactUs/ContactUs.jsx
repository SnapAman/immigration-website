// ContactUs.js
import React, { useState } from 'react';

import { Typography, Container } from '@mui/material';
import '../ContactUs/ContactUs.css';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';
import Footer from '../Footer/Footer';
import TextField from '@mui/material/TextField';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function ContactUs() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can perform form submission logic here
  };

  return (
    <>
      <div className="ContactBackground">
        <img src="/Contact.jpg" alt="" />
      </div>

      <div className="contact-info">
        <div className="Contactcontainer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1 className='txt2'>GET IN TOUCH WITH US</h1>
          <div className="phone-mail" style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="sect2-body" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <div style={{ backgroundColor: 'black', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <LocationOnIcon style={{ color: 'white', fontSize: '2rem', margin: '10px' }} />
              </div>
              <div className="main-txt">
                <h1 className='title'>Address</h1>
                <h3 className='main-Contact'>415 Great South Rd. Ellerslie, Auckland</h3>
              </div>
            </div>

            <div className="sect2-body" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <div style={{ backgroundColor: 'black', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <AccessTimeIcon style={{ color: 'white', fontSize: '2rem', margin: '10px' }} />
              </div>
              <div className="main-txt">
                <h1 className='title'>Timing</h1>
                <h3 className='main-Contact'>Monday - Friday: 9:30 AM - 06:00 PM</h3>
              </div>
            </div>
          </div>

          <div className="phone-mail" style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="sect2-body" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <div style={{ backgroundColor: 'black', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CallIcon style={{ color: 'white', fontSize: '2rem', margin: '10px' }} />
              </div>
              <div className="main-txt">
                <h1 className='title'>Have any question?</h1>
                <h3 className='main-Contact'>(+64) 09 272 4424</h3>
              </div>
            </div>

            <div className="sect2-body" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <div style={{ backgroundColor: 'black', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <MailOutlineIcon style={{ color: 'white', fontSize: '2rem', margin: '10px' }} />
              </div>
              <div className="main-txt">
                <h1 className='title'>Write Email</h1>
                <h3 className='main-Contact'>contact@msimmigration.co.nz</h3>
              </div>
            </div>
          </div>
        </div>


          
          <Container maxWidth="sm">
          <h1 className="txt2">FEEL FREE TO WRITE</h1>

            <form className="contact-form" onSubmit={handleSubmit}>
              <TextField
                color='success'
                className="textField"
                label="Name"
                variant="outlined"
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <TextField
                color='success'
                className="textField"
                label="Email"
                variant="outlined"
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                color='success'
                className="textField"
                label="Phone Number"
                variant="outlined"
                fullWidth
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <TextField
                color='success'
                className="textField"
                label="Subject"
                variant="outlined"
                fullWidth
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
              <TextField
                color='success'
                className="textField"
                label="Description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
              <Button variant="contained" style={{backgroundColor : '#808080'}} type="submit" fullWidth>
                Submit
              </Button>
            </form>
          </Container>
        </div>

      <div className="address-map">
        <h1 style={{color:'white', fontSize:'3rem', marginTop:'150px',fontWeight:'300' }}>FIND US HERE</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.5578592108477!2d174.80515409999998!3d-36.9009242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d48e6197bb6b3%3A0x207961a16f132730!2s415%20Great%20South%20Road%2C%20Ellerslie%2C%20Auckland%201051%2C%20New%20Zealand!5e0!3m2!1sen!2sin!4v1711193921939!5m2!1sen!2sin" width="500" height="350" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='Map'></iframe>
      </div>



      <Footer />
    </>
  );
}

export default ContactUs;
