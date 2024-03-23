// ContactUs.js
import React from 'react';
import '../ContactUs/ContactUs.css';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';
import Footer from '../Footer/Footer';

function ContactUs() {
  return (
    <>
      <div className="ContactBackground">
          <div className="txt1">
            <h1>Contact Us</h1>
          </div>
      </div>

      <div className="contact-info">
        <div className="headding">
          <h1 className="txt2">GET IN TOUCH WITH US</h1>
        </div>
        <div className="container">
          <div className="add-time">
            <div className="sect2-body">
              <svg width="80" height="74" viewBox="0 0 78 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M78 35.5C78 55.1061 60.5391 71 39 71C17.4609 71 0 55.1061 0 35.5C0 15.8939 17.4609 0 39 0C60.5391 0 78 15.8939 78 35.5Z" fill="black" />
                <path d="M42.2 57.2053C43.7071 57.2053 44.7741 55.9937 45.5482 54.1162L59.2554 20.6536C59.6321 19.7541 59.8625 18.9522 59.8625 18.2872C59.8625 17.0163 59.0045 16.2344 57.6437 16.2344C56.9321 16.2344 56.0741 16.4297 55.1116 16.7818L19.1187 29.6689C17.3598 30.2947 16 31.2918 16 32.7196C16 34.5186 17.4652 35.1252 19.4741 35.6927L30.7955 38.8994C32.1134 39.2916 32.867 39.2515 33.767 38.4697L56.7223 18.4232C56.9946 18.1887 57.3089 18.2279 57.5187 18.404C57.7277 18.5992 57.7482 18.893 57.4973 19.1466L36.1312 40.6793C35.3366 41.4812 35.2527 42.1462 35.6714 43.4563L38.9777 53.7824C39.6054 55.7575 40.2536 57.2053 42.2 57.2053Z" fill="white" />
              </svg>
              <div className="main-txt">
                <h1 className='title'>Address:</h1>
                <h3 className='main-Contact'>Level 1, 166 Harris Road East <br />Tamaki, Auckland</h3>
              </div>
            </div>

            <div className="sect2-body">
              <svg width="78" height="72" viewBox="0 0 78 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M78 36C78 55.8823 60.5391 72 39 72C17.4609 72 0 55.8823 0 36C0 16.1177 17.4609 0 39 0C60.5391 0 78 16.1177 78 36Z" fill="black" />
                <path d="M38.93 13.3915C27.0251 13.3915 17 22.9743 17 34.3539C17 45.7334 27.0251 55.3163 38.93 55.3163C50.8349 55.3163 60.86 45.7334 60.86 34.3539C60.86 22.9743 50.8349 13.3915 38.93 13.3915ZM46.1152 43.3377L37.3636 34.9678V20.878H40.4964V33.728L48.3286 41.2206L46.1152 43.3377Z" fill="white" />
              </svg>

              <div className="main-txt">
                <h1 className='title'>Timing:</h1>
                <h3 className='main-Contact'>Monday - Friday: 9:30 AM - 06:00 PM</h3>
              </div>
            </div>
          </div>

          <div className="phone-mail">
            <div className="sect2-body">
              <svg width="78" height="71" viewBox="0 0 78 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M78 35.5C78 55.1061 60.5391 71 39 71C17.4609 71 0 55.1061 0 35.5C0 15.8939 17.4609 0 39 0C60.5391 0 78 15.8939 78 35.5Z" fill="black" />
                <path d="M57.5 43.6437V50.5284C57.5002 51.0213 57.3004 51.496 56.9408 51.8566C56.5812 52.2173 56.0887 52.437 55.5625 52.4715C54.6521 52.5299 53.9083 52.5611 53.3333 52.5611C34.9229 52.5611 20 38.6146 20 21.4087C20 20.8714 20.0312 20.1763 20.0958 19.3254C20.1328 18.8337 20.3679 18.3734 20.7538 18.0373C21.1396 17.7012 21.6475 17.5145 22.175 17.5147H29.5417C29.8001 17.5145 30.0494 17.604 30.2411 17.7659C30.4328 17.9278 30.5533 18.1506 30.5792 18.3909C30.6271 18.8387 30.6708 19.195 30.7125 19.4656C31.1265 22.166 31.975 24.7923 33.2292 27.2556C33.4271 27.6451 33.2979 28.1104 32.9229 28.3596L28.4271 31.3619C31.1759 37.3479 36.2803 42.1183 42.6854 44.6873L45.8937 40.4934C46.0249 40.3221 46.2162 40.1992 46.4344 40.1462C46.6525 40.0932 46.8837 40.1134 47.0875 40.2033C49.7229 41.3733 52.5324 42.1643 55.4208 42.5495C55.7104 42.5884 56.0917 42.6293 56.5667 42.6741C56.8234 42.6987 57.0612 42.8115 57.2341 42.9906C57.4069 43.1698 57.5003 43.4025 57.5 43.6437Z" fill="white" />
              </svg>
              <div className="main-txt">
                <h1 className='title'>Have any question?</h1>
                <h3 className='main-Contact'>(+64) 09 272 4424</h3>
              </div>
            </div>

            <div className="sect2-body">
              <svg width="78" height="71" viewBox="0 0 78 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M78 35.5C78 55.1061 60.5391 71 39 71C17.4609 71 0 55.1061 0 35.5C0 15.8939 17.4609 0 39 0C60.5391 0 78 15.8939 78 35.5Z" fill="black" />
                <path d="M57.222 21.1952H21.278C20.9391 21.1956 20.6142 21.3216 20.3746 21.5456C20.135 21.7696 20.0003 22.0733 20 22.39V24.7937C20 24.9045 20.1285 25.0316 20.2335 25.083L39.1265 35.1684C39.1749 35.1943 39.2298 35.2076 39.2855 35.2072C39.3425 35.2073 39.3984 35.1931 39.4475 35.1661L57.7695 25.0928C57.8725 25.0391 58.1455 24.897 58.248 24.8316C58.372 24.7526 58.5 24.6811 58.5 24.5395V22.3896C58.4996 22.0729 58.3648 21.7693 58.1253 21.5454C57.8857 21.3215 57.5608 21.1956 57.222 21.1952ZM58.3405 28.418C58.2913 28.3918 58.2356 28.3782 58.179 28.3785C58.1224 28.3788 58.0668 28.3931 58.018 28.4199L47.6495 34.1212C47.6082 34.1437 47.5728 34.1746 47.546 34.2116C47.5192 34.2487 47.5017 34.2908 47.4948 34.3351C47.4878 34.3793 47.4916 34.4244 47.5058 34.467C47.52 34.5097 47.5444 34.5488 47.577 34.5815L57.947 45.0286C57.9767 45.0587 58.0128 45.0828 58.053 45.0992C58.0932 45.1156 58.1366 45.124 58.1805 45.1239C58.2652 45.1238 58.3464 45.0923 58.4063 45.0363C58.4662 44.9803 58.4999 44.9045 58.5 44.8253V28.6774C58.5002 28.6248 58.4856 28.5732 58.4576 28.5276C58.4296 28.4821 58.3892 28.4443 58.3405 28.418ZM44.6615 36.0357C44.6123 35.9856 44.5462 35.9528 44.4742 35.9427C44.4022 35.9327 44.3287 35.9461 44.266 35.9805L40.11 38.266C39.8665 38.3975 39.5906 38.4676 39.3094 38.4693C39.0282 38.471 38.7513 38.4043 38.506 38.2758L34.8485 36.3231C34.7895 36.2916 34.7212 36.2786 34.6537 36.2858C34.5862 36.293 34.5229 36.3202 34.473 36.3633L20.584 48.4033C20.5476 48.4351 20.5196 48.4744 20.5024 48.5181C20.4851 48.5618 20.479 48.6087 20.4845 48.655C20.4901 48.7013 20.5071 48.7457 20.5343 48.7848C20.5614 48.8238 20.598 48.8564 20.641 48.8799C20.857 48.9986 21.0655 49.0552 21.2775 49.0552H56.854C56.9163 49.0553 56.9772 49.0383 57.0292 49.0063C57.0812 48.9743 57.122 48.9288 57.1465 48.8753C57.1715 48.8221 57.1792 48.7632 57.1687 48.706C57.1582 48.6488 57.13 48.5957 57.0875 48.5533L44.6615 36.0357ZM31.417 34.939C31.4538 34.9072 31.4821 34.8678 31.4995 34.8239C31.517 34.78 31.5232 34.7329 31.5176 34.6864C31.512 34.6398 31.4948 34.5952 31.4673 34.556C31.4399 34.5169 31.4029 34.4843 31.3595 34.4609L20.4765 28.6517C20.4279 28.6259 20.373 28.6125 20.3171 28.6128C20.2613 28.6131 20.2065 28.6271 20.1583 28.6534C20.11 28.6797 20.07 28.7174 20.0422 28.7627C20.0145 28.808 19.9999 28.8593 20 28.9115V44.1543C19.9997 44.2125 20.0176 44.2695 20.0516 44.3183C20.0855 44.3671 20.1341 44.4055 20.1912 44.4288C20.2483 44.4521 20.3114 44.4592 20.3728 44.4493C20.4342 44.4393 20.4911 44.4128 20.5365 44.373L31.417 34.939Z" fill="white" />
              </svg>

              <div className="main-txt">
                <h1 className='title'>Write Email</h1>
                <h3 className='main-Contact'>contact@msimmigration.co.nz</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="address-map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.5578592108477!2d174.80515409999998!3d-36.9009242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d48e6197bb6b3%3A0x207961a16f132730!2s415%20Great%20South%20Road%2C%20Ellerslie%2C%20Auckland%201051%2C%20New%20Zealand!5e0!3m2!1sen!2sin!4v1711193921939!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='Map'></iframe>
      </div>

      <div className="contact-form">
        <h1 className="txt2">FEEL FREE TO WRITE</h1>
        <div className="input1">
          <input type="text" style={{marginRight : '20px'}} id='name' placeholder='Enter Name' required></input>
          <input type="Email" style={{marginLeft : '20px'}} id='email' placeholder='Enter Email' required></input>
        </div>
        <div className="input1">
          <input type="text" style={{marginRight : '20px'}} id="subject" name="subject" placeholder='Enter Subject' required />
          <input type="text" style={{marginLeft : '20px'}} id="phone" name="phone" placeholder='Enter Phone' required />
        </div>
        <div className="input1">
          <textarea id="message" name="message" rows="4" placeholder='Enter Message' className='txta' required ></textarea>
        </div>
        <div className='button-div'>
          <Button variant="contained" style={{marginRight : '20px'}} className='btn1'>Submit</Button>
          <Button variant="contained" style={{marginLeft : '20px'}} className='btn1'>ResetS</Button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactUs;
