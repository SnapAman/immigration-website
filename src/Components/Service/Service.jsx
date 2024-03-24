// Service.jsx
import './Service.css'
import banner from '../../assets/servicesImg.jpg'
import callLogo from '../../assets/call.svg'
import VisaTypes from './VisaTypes';
import visaImg from '../../assets/visa.png'
import Footer from '../Footer/Footer';
import { useState } from 'react';
import { motion } from "framer-motion";

function Service() {
  const data = [
    {
      id: 1,
      name: 'Residence Class Visa-Family Categories',
      img: 'src/assets/visa.png',
      review: 'Discover our Residence Class Visa - Family Categories, designed to reunite families in [Country Name]. From spouse and child visas to parent and dependent relative options, we provide pathways for family members to join their loved ones.'
    },
    {
      id: 2,
      name: 'Visitor Visa',
      img: 'src/assets/visa.png',
      review:
        'We handle the submission of your visa application to the appropriate immigration authorities, ensuring compliance with all regulations and deadlines.'
    },
    {
      id: 3,
      name: 'Student Visa',
      img: 'src/assets/visa.png',
      review:
        'The New Zealand government has strong quality assurance systems to ensure high-quality education at all levels of the education system, both public and private.'
    },
    {
      id: 4,
      name: 'Tourist Visa',
      img: 'src/assets/visa.png',
      review:
        'Issued to individuals traveling to a country for leisure, sightseeing, or recreational purposes. Generally, it prohibits engaging in any form of employment during the visit'
    },
    {
      id: 5,
      name: 'Family Visa',
      img: 'src/assets/visa.png',
      review:
        ' Granted to spouses, children, or other dependents of individuals who hold a valid visa in the host country. It allows family members to join the primary visa holder during their stay.'
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
    <div className="service-main">
      <div className="bannerBox">
        <img src={banner} className='serviceBanner' alt="" />
        <h1>Services</h1>
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
      <motion.div
        initial={{ opacity: 0.3, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "linear", duration: 0.5 }}
      >
        <div className="information">
          <div className="upper">
            <img src={img} alt="" />
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
      </motion.div>
      <div className="conclusion">
        <h1>Unlocking Borders, Empowering Journeys: Your Trusted Partner in Immigration Services.</h1>
      </div>
      <Footer />
    </div>
  );
}

export default Service;
