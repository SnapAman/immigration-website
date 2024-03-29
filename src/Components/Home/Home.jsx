import React from 'react';
import '../Home/Home.css';
import Button from '@mui/material/Button';
import TeamCarousel from './TeamCarousel';
import Footer from '../Footer/Footer';
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';


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
            <NavLink to="/booking">
              <Button variant="contained" disableElevation className="grayButton">Book a Consultation</Button>
            </NavLink>
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
        
      </motion.div>
      <div className='whymacclymont'>
        <h1>Why McClymont Shaikh Immigration?</h1>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <div className='sep-line'></div>

        </div>
        <p style={{ textAlign: 'center' }}>Our speciality is in the more difficult immigration cases, including appeals to the Immigration and Protection Tribunal, Ministerial requests, complaints on applications at the managerial level of Immigration New Zealand, complaints to other bodies, including the Office of the Ombudsman and the Office of the Privacy Commissioner, reconsiderations and appeals on declined visas of any type. </p>
        <p style={{ textAlign: 'center' }}>
          Our experienced New Zealand trained lawyers have decades of experience and expertise in Administrative Law and a wealth of experience in Immigration Law. We are capable of tackling any problems that might occur during any Immigration application or appeal.
        </p>
        <p style={{ margin: '30px 0px', textAlign: 'center' }}>
          The advantage of instructing McClymont Shaikh Immigration  to act on your behalf therefore can be summarised as follows:
        </p>
        
        <div className='inverted-border-radius-parent'>
          <div className='inverted-border-radius'>
              <LooksOneIcon></LooksOneIcon>
              <p>Any complaints regarding our services can be made directly to either the New Zealand Law Society, which is obliged by law to investigate and make a decision on the complaint, or to the Immigration Advisors Authority. Both bodies have the power to enforce a refund of fees, impose a monetary penalty or even cancel a Practicing Certificate if it is found that we have breached rules regarding code of conduct for Advisors or lawyers.</p>
          </div>
          <div className='inverted-border-radius'>
              <LooksTwoIcon></LooksTwoIcon>
              <p>The firm has a total combined experience of more over 75 years in providing immigration advice. The lawyers and advisors are New Zealand trained, including native English speakers. With professionals taking care of your visa application, you can invest more time and energy to your life and work.</p>
          </div>
        </div>

        <div className='inverted-border-radius-parent'>
          <div className='inverted-border-radius'>
          <Looks3Icon></Looks3Icon>

            <p style={{ fontSize: '1.1rem' }}>Your interest is protected. McClymont Shaikh Immigration utilises the Trust Account of McClymont & Associates, Barristers & Solicitors, which is regularly monitored and audited by the New Zealand Law Society. All money paid into the Trust Account must be receipted accounted for, and billed only upon completion of the work required. Clients are entitled to access the information regarding payment of funds, disbursements and billing at any time.</p>
          </div>
          <div className='inverted-border-radius'>
            <Looks4Icon></Looks4Icon>
            <p>Immigration work is all about rules and regulations. Lawyers and Licensed Advisors are required to properly analyse and argue immigration cases. The arguing of complex legal issues in appeals and declines is an area which our lawyers are available to assist on.</p>
          </div>
        </div>

      </div>
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
