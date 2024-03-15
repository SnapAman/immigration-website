import React from 'react';
import '../Home/Home.css';
import Button from '@mui/material/Button';
import HomeCarosel from './HomeCarosel';

function Home() {
  return (
    <>
    <div className="HomeBackground">
      <div className="content">
        <div className="text">
          <h1>Bringing You Home</h1>
          <h1>to New Zealand</h1>
        </div>
        <div className="button">
          {/* <Button variant="outlined">Book a Consultation</Button> */}
          <Button variant="contained" disableElevation className="grayButton">Book a Consultation</Button>
          </div>
      </div>
    </div>
    <div className='gateway-wrapper'>
      <h1>Gateway to New Beginnings </h1>
      <div className='sep-line'></div>
      <div className='gateway-wrapper-para'>
        <p>With years of experience and a dedicated team of experts, we understand the challenges and uncertainties that come with immigration. Whether you're seeking a new job opportunity, reuniting with loved ones, or pursuing higher education abroad, we are here to assist you every step of the way.</p>
      </div>

    </div>
    <div>
        <HomeCarosel></HomeCarosel>
    </div>
    </>
  );
}


export default Home;
