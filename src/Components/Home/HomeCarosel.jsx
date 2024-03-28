import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material'; // Import icons
import './HomeCarosel.css';
import Box from '@mui/material/Box';


function HomeCarosel() {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        // pauseOnHover: true,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    };

    const sliderRef = React.useRef(null);

    const handlePrevious = () => {
        sliderRef.current.slickPrev();
    };

    const handleNext = () => {
        sliderRef.current.slickNext();
    };
    return (
        <>
            <div className="carousel-container">
                <h1>SERVICES</h1>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <div className='sep-line'></div>

                </div>

                <div className="slider-button left">

                    <IconButton onClick={handlePrevious}>
                        <ArrowBack />
                    </IconButton>
                </div>
                <Slider {...settings} ref={sliderRef}>
                    {data.map((d, index) => (
                        <div key={index} className="slide" style={{ margin: '20px' }}>
                            <div className="slide-image-container">
                                <img src={d.img} alt="" className="slide-image" />
                            </div>
                            <div className="slide-content">
                                <p className="slide-name">{d.name}</p>
                                <p className="slide-review">{d.review}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className="slider-button right">

                    <IconButton onClick={handleNext}>
                        <ArrowForward />
                    </IconButton>
                </div>
            </div>

            <div className='whymacclymont'>
                <h1>Why McClymont Shaikh Immigration?</h1>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <div className='sep-line'></div>

                </div>
                <p style={{ textAlign: 'center' }}>Our speciality is in the more difficult immigration cases, including appeals to the Immigration and Protection Tribunal, Ministerial requests, complaints on applications at the managerial level of Immigration New Zealand, complaints to other bodies, including the Office of the Ombudsman and the Office of the Privacy Commissioner, reconsiderations and appeals on declined visas of any type. </p>
                <p style={{ textAlign: 'center' }}>
                    Our experienced New Zealand trained lawyers have decades of experience and expertise in Administrative Law and a wealth of experience in Immigration Law. We are capable of tackling any problems that might occur during any Immigration application or appeal.
                </p>
                <p style={{ marginTop: '50px', textAlign: 'center' }}>
                    The advantage of instructing McClymont Shaikh Immigration  to act on your behalf therefore can be summarised as follows:
                </p>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignItems:'center' }}>
                    <div style={{ width:'100%'}}>
                    <Box
                            height={300}
                            width={500}
                            my={4}
                            display="flex"
                            alignItems="center"
                            gap={4}
                            p={2}
                            sx={{ border: '2px solid grey' }}
                        >
                             <p> •	Any complaints regarding our services can be made directly to either the New Zealand Law Society, which is obliged by law to investigate and make a decision on the complaint, or to the Immigration Advisors Authority. Both bodies have the power to enforce a refund of fees, impose a monetary penalty or even cancel a Practicing Certificate if it is found that we have breached rules regarding code of conduct for Advisors or lawyers.</p>
                        </Box>
                    </div>
                    <div style={{ width: '100%' }}>
                        <Box
                            height={300}
                            width={500}
                            my={4}
                            display="flex"
                            alignItems="center"
                            gap={4}
                            p={2}
                            sx={{ border: '2px solid grey' }}
                        >
                            <p> •	The firm has a total combined experience of more over 75 years in providing immigration advice. The lawyers and advisors are New Zealand trained, including native English speakers. With professionals taking care of your visa application, you can invest more time and energy to your life and work.</p>
                        </Box>
                    </div>
                </div>
               
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignItems:'center', marginTop:'25px' }}>
                    <div style={{ width:'100%'}}>
                    <Box
                            height={300}
                            width={500}
                            my={4}
                            display="flex"
                            alignItems="center"
                            gap={4}
                            p={2}
                            sx={{ border: '2px solid grey' }}
                        >
                            <p style={{fontSize:'1.1rem'}}> •	Your interest is protected. McClymont Shaikh Immigration utilises the Trust Account of McClymont & Associates, Barristers & Solicitors, which is regularly monitored and audited by the New Zealand Law Society. All money paid into the Trust Account must be receipted accounted for, and billed only upon completion of the work required. Clients are entitled to access the information regarding payment of funds, disbursements and billing at any time.</p>
                        </Box>
                    </div>
                    <div style={{ width: '100%' }}>
                        <Box
                            height={300}
                            width={500}
                            my={4}
                            display="flex"
                            alignItems="center"
                            gap={4}
                            p={2}
                            sx={{ border: '2px solid grey' }}
                        >
                             <p> •	Immigration work is all about rules and regulations. Lawyers and Licensed Advisors are required to properly analyse and argue immigration cases. The arguing of complex legal issues in appeals and declines is an area which our lawyers are available to assist on.</p>
                        </Box>
                    </div>
                </div>

            </div>
        </>

    );
}


const data = [
    {
        name: 'Resident Visa',
        img: 'src/assets/ResidentVisaHome.jpg',
        review: 'Compared to most countries in the world, New Zealand offers a great work-life balance. That’s reflected time and time again in international surveys.'
    },
    {
        name: 'Visitor Visa',
        img: 'src/assets/VisitorVisaHome.jpg',
        review:
            'We handle the submission of your visa application to the appropriate immigration authorities, ensuring compliance with all regulations and deadlines.'
    },
    {
        name: 'Student Visa',
        img: 'src/assets/StudentVisaHome.jpg',
        review:
            'The New Zealand government has strong quality assurance systems to ensure high-quality education at all levels of the education system, both public and private.'
    },
    {
        name: 'Tourist Visa',
        img: 'src/assets/TouristVisaHome.jpg',
        review:
            'Issued to individuals traveling to a country for leisure, sightseeing, or recreational purposes. Generally, it prohibits engaging in any form of employment during the visit'
    },
    {
        name: 'Family Visa',
        img: 'src/assets/FamilyVisaHome.jpg',
        review:
            ' Granted to spouses, children, or other dependents of individuals who hold a valid visa in the host country. It allows family members to join the primary visa holder during their stay.'
    }
];

export default HomeCarosel;
