// ContactUs.js
import React, { useState } from 'react';
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

  const [name, setName] = useState("")
  const[email,setEmail]=useState("")
  const[phone,setPhone]=useState("")
  const[subject,setSubject]=useState("")
  const[message,setMessage]=useState("")

  function submit() {
    console.log(name)
    console.log(email)
    console.log(phone)
    console.log(subject)
    console.log(message)
  }

  function reset() {
    setName("")
    setEmail("")
    setPhone("")
    setSubject("")
    setMessage("")
  }

  return (
    <>
      <div className="ContactBackground">
        <div className="txt1">
          <h2>Contact Us</h2>
        </div>
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
                <h1 className='title'>Have any question?</h1>
                <h3 className='main-Contact'>(+64) 09 272 4424</h3>
              </div>
            </div>

            <div className="sect2-body" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <div style={{ backgroundColor: 'black', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <AccessTimeIcon style={{ color: 'white', fontSize: '2rem', margin: '10px' }} />
              </div>
              <div className="main-txt">
                <h1 className='title'>Write Email</h1>
                <h3 className='main-Contact'>contact@msimmigration.co.nz</h3>
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


        <div className="contact-form">
          <h1 className="txt2">FEEL FREE TO WRITE</h1>
          <div className="input1">
            <TextField id="outlined-basic" label="Enter Name" value={name} onChange={(e) => { setName(e.target.value) }} variant="outlined" required/>
            <TextField id="outlined-basic" label="Enter Email" value={email} onChange={(e) => { setEmail(e.target.value) }} variant="outlined" required/>
          </div>
          <div className="input1">
            <TextField id="outlined-basic" label="Enter Phone" value={phone} onChange={(e) => { setPhone(e.target.value) }} variant="outlined" required />
            <TextField id="outlined-basic" label="Enter Subject" value={subject} onChange={(e) => { setSubject(e.target.value) }} variant="outlined" required />
          </div>
          <div className="input1">
            <TextField
              id="outlined-multiline-static"
              label="Enter Message"
              multiline
              rows={4}
              value={message} onChange={(e) => { setMessage(e.target.value) }}
              required
            />
          </div>
          <div className='button-div'>
            <Button variant="contained" style={{ marginRight: '20px' }} className='btn1' onClick={submit}>Submit</Button>
            <Button variant="contained" style={{ marginLeft: '20px' }} className='btn1' onClick={reset}>ResetS</Button>
          </div>
        </div>
      </div>

      <div className="address-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.5578592108477!2d174.80515409999998!3d-36.9009242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d48e6197bb6b3%3A0x207961a16f132730!2s415%20Great%20South%20Road%2C%20Ellerslie%2C%20Auckland%201051%2C%20New%20Zealand!5e0!3m2!1sen!2sin!4v1711193921939!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='Map'></iframe>
      </div>



      <Footer />
    </>
  );
}

export default ContactUs;
