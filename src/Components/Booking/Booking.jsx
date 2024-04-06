import React from 'react';
import '../Booking/Booking.css';
import Card from '@mui/joy/Card';
import AspectRatio from '@mui/joy/AspectRatio';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Advisor1 from '/Alastair.jpg'
import Advisor2 from '/Sarfraz.jpg'
import Advisor3 from '/Aakanksha.jpg'
import Advisor4 from '/Naved.jpg'
import Advisor5 from '/Shazia.jpg'
import Footer from '../Footer/Footer';
import Button from '@mui/material/Button';


const Booking = () => {
  const handleClick = (url) => {
    window.open(url, '_blank');
  };
  return (
    <>
      <div className="BookingBackground">
        <h1>Free&nbsp; Initial&nbsp; Appointment</h1>
      </div>
      <div className='advisor-wrapper'>
        <h1>Choose Your Advisor</h1>
        <div className='advisor-container'>
          <Card className='card' sx={{ transition: 'box-shadow 0.3s' }} onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0px 0px 5px 1px rgba(111,111,111,0.5)'; }} onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; }}>

            
              <img
                src={Advisor1}
                loading="lazy"
                alt=""
              />
            
            <CardContent orientation="horizontal">
              <div style={{textAlign : 'left'}}>
                <Typography fontSize="lg" fontWeight="lg">Alastair McClymont</Typography>
                <Typography level="body-xs">– BA, LLB</Typography>
              </div>
              <Button
              className='grayBookingButton'
                variant="contained"
                size="md"
                color="primary"
                aria-label="Explore Bahamas Islands"
                sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                disabled
                // onClick={() => handleClick('https://calendly.com/naved-ianzl')}
                >
                Book
                
              </Button>
            </CardContent>
          </Card>
          <Card className='card' sx={{ transition: 'box-shadow 0.3s' }} onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0px 0px 5px 1px rgba(111,111,111,0.5)'; }} onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; }} >

            
              <img
                src={Advisor2}
                loading="lazy"
                alt=""
              />
            
            <CardContent orientation="horizontal">
              <div style={{textAlign : 'left'}}>
                <Typography fontSize="lg" fontWeight="lg">Sarfraz (Saif) Shaikh</Typography>
                <Typography level="body-xs">Licensed Adviser #200900488</Typography>
              </div>
              <Button
              className='grayBookingButton'
                variant="contained"
                size="md"
                color="primary"
                aria-label="Explore Bahamas Islands"
                sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                onClick={() => handleClick('https://calendly.com/saif-ianzl')}>
                Book
                
              </Button>
            </CardContent>
          </Card>
          <Card className='card' sx={{ transition: 'box-shadow 0.3s' }} onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0px 0px 5px 1px rgba(111,111,111,0.5)'; }} onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; }} >

            
              <img
                src={Advisor3}
                loading="lazy"
                alt=""
              />
            
            <CardContent orientation="horizontal">
              <div style={{textAlign : 'left'}}>
                <Typography fontSize="lg" fontWeight="lg">Aakanksha McClymont</Typography>
                <Typography level="body-xs">- BA</Typography>
              </div>
              <Button
              className='grayBookingButton'
                variant="contained"
                size="md"
                disabled
                color="primary"
                aria-label="Explore Bahamas Islands"
                sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}>
                Book
                
              </Button>
            </CardContent>
          </Card>
          <Card className='card' sx={{ transition: 'box-shadow 0.3s' }} onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0px 0px 5px 1px rgba(111,111,111,0.5)'; }} onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; }} >
            
              <img
                src={Advisor4}
                loading="lazy"
                alt=""
              />
            
            <CardContent orientation="horizontal">
              <div style={{textAlign : 'left'}}>
                <Typography fontSize="lg" fontWeight="lg">Naved Shaikh</Typography>
                <Typography level="body-xs">Licensed Adviser #201500737</Typography>
              </div>
              <Button
              className='grayBookingButton'
                variant="contained"
                size="md"
                color="primary"
                aria-label="Explore Bahamas Islands"
                sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                onClick={() => handleClick('https://calendly.com/naved-ianzl')}>
                Book
                
              </Button>
            </CardContent>
          </Card>
          <Card className='card' sx={{ transition: 'box-shadow 0.3s' }} onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0px 0px 5px 1px rgba(111,111,111,0.5)'; }} onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; }} >

            
              <img
                src={Advisor5}
                loading="lazy"
                alt=""
              />
            
            <CardContent orientation="horizontal">
              <div style={{textAlign : 'left'}}>
                <Typography fontSize="lg" fontWeight="lg">Shazia Gill</Typography>
                <Typography level="body-xs"></Typography>
              </div>
              <Button
              disabled
              className='grayBookingButton'
                variant="contained"
                size="md"
                color="primary"
                aria-label="Explore Bahamas Islands"
                sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                onClick={() => handleClick('URL_1')}>
                Book
                
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className='parent-meetDiv'>
        <div className='meetDiv'>
          <h1>Meet Online or by Phone Call</h1>
          <p>You can book an online meeting or phone call appointment with our advisors at your convenience.</p>
          <p>Please be ready to receive the call from the adviser at your meeting time.</p>
          <p>Phone call meetings are only available to people who are in New Zealand.</p>
        </div>
        <div className='meetDiv'>
        <h1>Meet in Auckland Office</h1>
          <p>Our Advisors are ready to be booked with in our Auckland head office. There is no charge for your first meeting. Please feel free to make an appointment online.</p>
          <p>Please be prepared and bring the related documents with you to the meeting.</p>
          <p><b>NOTE: You don’t need to book an appointment to drop documents off once you have signed up.</b></p>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Booking;
