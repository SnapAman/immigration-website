// ContactUs.js
import Swal from 'sweetalert2';
import React, { useState } from 'react';
import { Typography, Container } from '@mui/material';
import '../ContactUs/ContactUs.css';
import Button from '@mui/material/Button';
import Footer from '../Footer/Footer';
import TextField from '@mui/material/TextField';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function ContactUs() {
  // Define state variables for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    description: ''
  });

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Call sendEmail function with form data
    sendEmail(formData);
  };

  // Function to update form data state
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to send email using Email.js
  const sendEmail = (formData) => {
    // Use Email.js to send email
    Email.send({
      SecureToken: "b1d9ca2a-7837-40f3-8594-c4801dc7bf12",
      To: 'contact@msimmigration.co.nz',
      From: "info@snapfluencetech.com",
      Subject: `${formData.name}'s mail from Immigrate website`,
      Body: `
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Description: ${formData.description}
      `
    }).then(
      (message) => {
        // Show success message
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Your message has been sent successfully.',
          timer: 3000, // Close alert after 3 seconds
          timerProgressBar: true,
          showConfirmButton: false
        });
        // Clear form fields after successful submission if needed
        setFormData({
          name: '',
          email: '',
          phone: '',
          description: ''
        });
      }
    ).catch((error) => {
      // Handle error
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'There was an error sending your message. Please try again later.'
      });

      // Log the error to the console
      console.error('Error sending email:', error);
    });
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
              required
              color="success"
              className="textField"
              label="Name"
              variant="outlined"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <TextField
              required
              color="success"
              className="textField"
              label="Email"
              variant="outlined"
              fullWidth
              name="email"
              value={formData.Email}
              onChange={handleInputChange}
            />
            <TextField
              required
              color="success"
              className="textField"
              label="Phone Number"
              variant="outlined"
              fullWidth
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <TextField
              required
              color="success"
              className="textField"
              label="Description"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
            <Button variant="contained" style={{ backgroundColor: '#808080' }} type="submit" fullWidth>
              Submit
            </Button>
          </form>
        </Container>
      </div>

      <div className="address-map">
        <h1>FIND US HERE</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.5578592108477!2d174.80515409999998!3d-36.9009242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d48e6197bb6b3%3A0x207961a16f132730!2s415%20Great%20South%20Road%2C%20Ellerslie%2C%20Auckland%201051%2C%20New%20Zealand!5e0!3m2!1sen!2sin!4v1711193921939!5m2!1sen!2sin" width="500" height="350" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='Map'></iframe>
      </div>



      <Footer />
    </>
  );
}

export default ContactUs;
