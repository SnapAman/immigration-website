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
            <p>Navigating New Zealand's immigration process can be complex and challenging. At
              McClymont Shaikh Immigration, we understand the intricacies of immigration Policy
              and are dedicated to guiding you through every step of your journey.</p>
            <p>
              Our experienced team, deeply understands New Zealand immigration laws, policies,
              and procedures. We specialize exclusively in immigration, ensuring you benefit from
              our focused knowledge and expertise. With McClymont Shaikh Immigration, you can be assured of receiving expert advice
              and personalized assistance every step of the way.
            </p>
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
        <div className='ourteam-wrapper-para'>
          <p>We are a specialist Immigration Consultancy, based in Auckland, New Zealand. Our team
            consists of both Licensed Barristers &amp; Solicitors, and Licensed Immigration Advisors. Our
            team of specialised Immigration Practitioners have a high level of expertise that only comes
            from working exclusively with New Zealand Immigration rules and regulations.</p>

        </div>
        <TeamCarousel />
      </div>
      <div className='conclusion-div'>
        <h1>Join Over 5,600+ Clients Enjoying Our Service</h1>
        <h2>Plan Your Career And Your Life In New Zealand With Us</h2>
      </div>
      <Footer />
    </>
  );
}


export default Home;
