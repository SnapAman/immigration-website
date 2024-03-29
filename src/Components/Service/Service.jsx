// Service.jsx
import './Service.css'
import callLogo from '/call.svg'
import VisaTypes from './VisaTypes';
import Footer from '../Footer/Footer';
import { useState } from 'react';
import { motion } from "framer-motion";
import serviceBG from '/ServicesBG.jpg'

function Service() {
  const data = [
    {
      id: 1,
      name: 'Residence Class Visa-Family Categories',
      img: '/FamilyCategory.jpg',
    },
    {
      id: 2,
      name: 'Visitor Visa',
      img: '/VisitorV.jpg',
    },
    {
      id: 3,
      name: 'Student Visa',
      img: '/Student.jpg',
    },
    {
      id: 4,
      name: 'Limited Visa',
      img: '/Limitedvisa.jpg',
    },
    {
      id: 5,
      name: 'Partnership Visa',
      img: '/Partnershipvisa.jpg',
    },
    {
      id: 6,
      name: 'Humanitarian Appeals',
      img: '/Humanitarianvisa.jpg ',
    },
    {
      id: 7,
      name: 'Accredited Employer Work Visa',
      img: '/WorkVisa.jpg',
    },
    {
      id: 8,
      name: 'Entreprenuer and Investor Category applications',
      img: '/partnerVisa.jpg ',
    },
    {
      id: 9,
      name: 'IPT Appeals',
      img: '/parentsVisa.jpg',
    },
    {
      id: 10,
      name: 'Post-Study Work Visa',
      img: '/visitorVisa.jpg',
    },
    {
      id: 11,
      name: 'Residence Class Visa - Migrant Investment Categories',
      img: '/InvestmentCategory.jpg ',
    },
    {
      id: 12,
      name: 'Residence Class Visa - Skilled Migrant Category',
      img: '/SkilledMigrant.jpg ',
    },
    {
      id: 12,
      name: 'Section 61 Requests and Special Directions to the Minister of Immigration',
      img: '/Section61.jpg ',
    }
  ];
  function changeContent(idx) {
    setTitle(data[idx].name);
    setReview(data[idx].review);
    setImg(data[idx].img);
  }
  const [title, setTitle] = useState(data[0].name)
  const [review, setReview] = useState(data[0].review)
  const [img, setImg] = useState(data[0].img)
  return (
    <>
      <div className="service-main">


        <div className="bannerBox">
          <img src={serviceBG} className='serviceBanner' alt="" />
        </div>
        <div className="reachUsBox">
          <div className="left">
            <img src={callLogo} c alt=" " />
            <div className='call'>
              <p>CALL US NOW</p>
              <p>(+64) 09 272 4424</p>
            </div>
          </div>

          <div className="middleStick"></div>

          <div className="right">
            <p>If you would like us to reach you then book your appointment by clinking the link below</p>
            <button>Book Appointment</button>
          </div>
        </div>
        <div className='gateway-wrapper'>
          <h1>Your Gateway to Global Opportunities</h1>
          <div className='sep-line'></div>
          <div className='gateway-wrapper-para'>
            <p>We are committed to assisting a diverse clientele around the world, regardless of their current location. Whether you reside internationally and require visa assistance for travel to New Zealand, or are already established within the country, our experienced team is here to guide you.</p>
            <p>
              Our firm possesses extensive experience in serving clients from various regions, including: Asia: India, China, Cambodia, and Vietnam, South Africa, Fiji, Iran, North America and Europe.
            </p>
            <p>
              We consistently assist individuals migrating from overseas, offering ongoing support even if our initial consultation occurs upon their arrival with Resident Visas. Our comprehensive legal services encompass the full spectrum of immigration matters, including
            </p>
          </div>

        </div>

        <motion.div
          initial={{ opacity: 0.3 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .5 }}
        >
          <div className="visaTypeCrousal">
            <VisaTypes data={data} changeContent={changeContent} />
          </div>
        </motion.div>
        {/* <motion.div
        initial={{ opacity: 0.3, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "linear", duration: 0.5 }}
      >
        <div className="information">
          <div className="upper">
            <div className="img-box">
              <img src={img} alt="" />
            </div>
            <div className="upperRight">
              <h1>{title}</h1>
              <p>{review}</p>
            </div>
          </div>
          <div className="bottom">
            <h2>Application Process: Applying for a resident visa involves several steps:</h2>
            <ol>
              <li>Determine the appropriate residency category based on your circumstances (e.g., skilled migrant, family reunification, investment).</li>
              <li>Complete the resident visa application form accurately and truthfully.</li>
              <li>Gather the required supporting documents, including proof of employment or family relationship, financial stability, and health records.</li>
              <li>Pay the resident visa application fee through the designated payment method.</li>
              <li>Submit your application online or at the nearest embassy/consulate of [Country Name].</li>
              <li>Wait for the application to be processed and attend any required interviews or biometric appointments.</li>
              <li>Upon approval, receive your resident visa and follow any additional instructions provided.</li>
            </ol>
          </div>

        </div>
      </motion.div> */}
        <div className="conclusion">
          <h1>Unlocking Borders, Empowering Journeys: Your Trusted Partner in Immigration Services.</h1>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Service;
