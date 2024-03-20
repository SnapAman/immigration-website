import * as React from 'react';
import { styled } from '@mui/system';
import { Tabs as BaseTabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import Button from '@mui/material/Button';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';
import '../VisaInfo/VisaInfoTabs.css';
import ReplyIcon from '@mui/icons-material/Reply';
import studentvisa from '../../assets/StudentVisa.jpg'
import workvisa from '../../assets/WorkVisa.jpg';
import partnerVisa from '../../assets/partnerVisa.jpg';
import parentsVisa from '../../assets/parentsVisa.jpg';
import visitorVisa from '../../assets/visitorVisa.jpg';

export default function VisaInfoTabs() {
  return (
    <Tabs defaultValue={0} orientation="vertical">
      <TabsList>
        <Tab> <div className='tabContent'>Essential Work Visa / Resident Visa<span><ReplyIcon /></span></div> </Tab>
        <Tab><div className='tabContent'>Partnership Work / Resident Visa<span><ReplyIcon /></span></div></Tab>
        <Tab><div className='tabContent'>Parent Visitor / Resident Visa<span><ReplyIcon /></span></div></Tab>
        <Tab><div className='tabContent'>Student Visa (Onshore/Offshore)<span><ReplyIcon /></span></div></Tab>
        <Tab><div className='tabContent'>Visitor Visa<span><ReplyIcon /></span></div></Tab>
      </TabsList>
      <TabPanel value={0}>
      <div class="student-visa">
          <h1>Essential Work Visa / Resident Visa</h1>
        </div>
        <div className="VisaInfocContainer">
          <div className="image-container">
            <img src={workvisa} alt=" " />
          </div>
          <div className="info-container">
            <div className='info-box'>
              <h3>About</h3>
              <p>Essential Work Visa / Resident Visa allows individuals to work and reside in a foreign country based on their essential skills or qualifications. It facilitates workforce mobility to fill critical roles in sectors experiencing shortages or high demand.</p>
            </div>
            <div className='info-box'>
            <h3>Eligibility Criteria</h3>
            <p>Eligibility criteria typically include possessing relevant skills or qualifications in demand, securing a job offer from an approved employer, meeting health and character requirements, and demonstrating the ability to support oneself financially during the stay.</p>
            </div>
            <Button variant="contained" disableElevation className="grayButton">Learn more</Button>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={1}>
        <div class="student-visa">
          <h1>Partnership Work/Resident Visa</h1>
        </div>
        <div className="VisaInfocContainer">
          <div className="image-container">
            <img src={partnerVisa} alt=" " />
          </div>
          <div className="info-container">
            <div className='info-box'>
              <h3>About</h3>
              <p>Partnership work/resident visas are designed for individuals in committed relationships with New Zealand citizens or residents. These visas enable partners to live, work, and study in New Zealand while supporting their partner's application for residency.</p>
            </div>
            <div className='info-box'>
            <h3>Eligibility Criteria</h3>
            <p>Eligibility typically requires proof of a genuine and stable relationship, such as cohabitation or marriage, with a New Zealand citizen or resident. Applicants must meet health and character requirements and demonstrate financial stability to support themselves during their stay in New Zealand.</p>
            </div>
            <Button variant="contained" disableElevation className="grayButton">Learn more</Button>
          </div>
        </div>
        </TabPanel>
      <TabPanel value={2}>
      <div class="student-visa">
          <h1>Parent Visitor/Resident Visa</h1>
        </div>
        <div className="VisaInfocContainer">
          <div className="image-container">
            <img src={parentsVisa} alt=" " />
          </div>
          <div className="info-container">
            <div className='info-box'>
              <h3>About</h3>
              <p>This visa allows parents to visit or reside with their children who are citizens or residents of a particular country. It enables family reunification and facilitates spending extended periods of time together.</p>
            </div>
            <div className='info-box'>
            <h3>Eligibility Criteria</h3>
            <p>Eligibility typically requires proof of relationship, financial stability, health insurance, and sometimes evidence of accommodation. Some countries may impose additional criteria, such as income thresholds or sponsorship requirements.</p>
            </div>
            <Button variant="contained" disableElevation className="grayButton">Learn more</Button>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={3}>
      <div class="student-visa">
          <h1>Student Visa</h1>
        </div>
        <div className="VisaInfocContainer">
          <div className="image-container">
            <img src={studentvisa} alt=" " />
          </div>
          <div className="info-container">
            <div className='info-box'>
              <h3>About</h3>
              <p>Our student visa service is designed to assist individuals who wish to pursue their academic goals abroad. Whether you're planning to enroll in a university, college we provide support to help you with application.</p>
            </div>
            <div className='info-box'>
            <h3>Eligibility Criteria</h3>
            <p>Eligibility Criteria:Applicants must have acceptance from a recognized educational institution, financial stability, valid passport, health requirements fulfilled, and a clean criminal record.</p>
            </div>
            <Button variant="contained" disableElevation className="grayButton">Learn more</Button>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={4}>
      <div class="student-visa">
          <h1>Visitor VISA</h1>
        </div>
        <div className="VisaInfocContainer">
          <div className="image-container">
            <img src={visitorVisa} alt=" " />
          </div>
          <div className="info-container">
            <div className='info-box'>
              <h3>About</h3>
              <p>A visitor visa allows individuals to travel to another country for tourism, visiting family or friends, attending business meetings, or medical treatment. It's typically a temporary authorization granted by the destination country's government.</p>
            </div>
            <div className='info-box'>
            <h3>Eligibility Criteria</h3>
            <p>Eligibility criteria for a visitor visa often include having a valid passport, demonstrating sufficient funds to cover expenses during the visit, providing evidence of ties to the home country to ensure the applicant's return, and not having a criminal record or any immigration violations.</p>
            </div>
            <Button variant="contained" disableElevation className="grayButton">Learn more</Button>
          </div>
        </div>
      </TabPanel>
    </Tabs>
  );
}

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Tab = styled(BaseTab)`
  font-family: 'IBM Plex Sans', sans-serif;
  color: white; /* Set tab text color to white */
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;
`;

const TabPanel = styled(BaseTabPanel)`
  width: 100%;
  font-size: 1rem;
  `;

const Tabs = styled(BaseTabs)`
  display: flex;
  gap: 16px;
`;

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
  min-width: 180px;
  background-color: #C1C1C1;
  border-radius: 12px;
  display: flex;
  padding: 15px;
  gap: 40px;
  height : 75vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 8px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]
    };
  `,
);
