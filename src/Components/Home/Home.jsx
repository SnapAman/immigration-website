import React from 'react';
import '../Home/Home.css';
import Button from '@mui/material/Button';
import HomeCarosel from './HomeCarosel';
import TeamCarousel from './TeamCarousel';
import Footer from '../Footer/Footer';
import { motion } from "framer-motion";

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
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h1>GATEWAY TO NEW BEGINNINGS</h1>
        </motion.div>
        <div className='sep-line'></div>
        <motion.div
          initial={{ x: -150, opacity: 0.3 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className='gateway-wrapper-para'>
            <p>With years of experience and a dedicated team of experts, we understand the challenges and uncertainties that come with immigration. Whether you're seeking a new job opportunity, reuniting with loved ones, or pursuing higher education abroad, we are here to assist you every step of the way.</p>
          </div>
        </motion.div>

      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className='mt-3'>
          <HomeCarosel></HomeCarosel>
        </div>
      </motion.div>
      <div className='ourteam-wrapper'>
        <h1>OUR TEAM</h1>
        {/* <div className='sep-line'></div> */}
        <div className='ourteam-wrapper-para'>
          <p>
            Compared to most countries in the world, New Zealand offers a great work-life balance. That’s reflected time and time again in international surveys. As a team of thirteen staff, we have four licensed immigration advisers and one registered lawyer. We speak multi-languages including English, Hindi, Punjabi, Mandarin, Filipino, Malayalam, Spanish, Slovak and Czech.
          </p>
        </div>
        <TeamCarousel />
      </div>
      <Footer />
    </>
  );
}


export default Home;
