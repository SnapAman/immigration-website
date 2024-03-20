import React from 'react';
import '../VisaInfo/VisaInfo.css';
import Button from '@mui/material/Button';
import VisaIndoTabs from '../VisaInfo/VisaInfoTabs.jsx';


function VisaInfo() {
  return(
    <>
    <div className='VisaInfoBackground'>
    <div className="VisaInfoContent">
          <div className="VisaInfoText">
            <h1>Empowering Confidence</h1>
            <h1>in people’s immigration</h1>
            <h2>We provide our clients with individualized support and high-quality service to secure their future in New Zealand</h2>
          </div>
          <div className="VisaInfoButton">
            <Button variant="contained" disableElevation className="grayButton">Contact Now</Button>
          </div>
        </div>
    </div>
    <div style={{padding : '30px'}}>
      <VisaIndoTabs/>
    </div>

    </>
);

}

export default VisaInfo;
