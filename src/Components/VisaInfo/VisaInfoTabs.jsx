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

export default function VisaInfoTabs() {
  return (
    <Tabs defaultValue={0} orientation="vertical">
      <TabsList>
        <Tab> <div className='tabContent'>Resident Visa<span><ReplyIcon /></span></div> </Tab>
        <Tab><div className='tabContent'>Student Visa<span><ReplyIcon /></span></div></Tab>
        <Tab><div className='tabContent'>Tourist Visa<span><ReplyIcon /></span></div></Tab>
        <Tab><div className='tabContent'>Visitor Visa<span><ReplyIcon /></span></div></Tab>
        <Tab><div className='tabContent'>Work Visa<span><ReplyIcon /></span></div></Tab>
        <Tab><div className='tabContent'>Post-Study Visa<span><ReplyIcon /></span></div></Tab>
      </TabsList>
      <TabPanel value={0}>
        <div class="student-visa">
          <h1>STUDENT VISA</h1>
        </div>
        <div className="VisaInfocContainer">
          <div className="image-container">
            <img src={studentvisa} alt=" " />
          </div>
          {/* Div with information about Student Visa */}
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
        {/* <div>
          <div>

          </div>
          <div>
            <div></div>
            <div></div>
          </div>
          </div>

          <img class="visa-image" src={studentvisa} alt="Student Visa" />

          <div class="info-container">
            <div class="info-box">
              <h3>About</h3>
              <p>Our student visa service is designed to assist individuals who wish to pursue their academic goals abroad. Whether you're planning to enroll in a university, college we provide support to help you with application.</p>
            </div>

            <div class="info-box">
              <h3>Eligibility Criteria</h3>
              <p>Applicants must have acceptance from a recognized educational institution, financial stability, valid passport, health requirements fulfilled, and a clean criminal record.</p>
            </div>
          </div> */}
      </TabPanel>
      <TabPanel value={1}>Second page</TabPanel>
      <TabPanel value={2}>Third page</TabPanel>
      <TabPanel value={3}>Fourth page</TabPanel>
      <TabPanel value={4}>Fifth page</TabPanel>
      <TabPanel value={5}>Sixth page</TabPanel>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 8px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]
    };
  `,
);
