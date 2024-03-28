import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material'; // Import icons
import './TeamCarousel.css'; // Import external CSS file

function TeamCarousel() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: "0px",
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ],
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
            <div className="carousel-team-container">
                <div className="slider-button left">
                    <IconButton onClick={handlePrevious}>
                        <ArrowBack />
                    </IconButton>
                </div>
                <Slider {...settings} ref={sliderRef}>
                    {data.map((d, index) => (
                        <div key={index} className="slide" style={{ margin: '20px' }}>
                            <div className="slide-image-team-container">
                                <img src={d.img} alt="" className="slide-team-image" />
                            </div>
                            <div className="slide-team-content">
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
        </>

    );
}


const data = [
    {
        name: 'Alastair McClymont',
        img: 'src/assets/Alastair.jpg',
        review:'Alastair started in law in 1997, focusing on immigration. He founded Monk & McClymont in 2001, later expanding to McClymont Shaikh Immigration. Enjoys biking and learning.'
    },
    {
        name: 'Sarfraz (Saif) Shaikh',
        img: 'src/assets/Sarfraz.jpg',
        review:"Saif, a seasoned Immigration Adviser in New Zealand, with 15+ years' experience, specializes in complex cases. Former NZ Immigration Officer and Association Director."
    },
    {
        name: 'Aakanksha McClymont',
        img: 'src/assets/Aakanksha.jpg',
        review:'Aakanksha from Chandigarh, India, has worked at McClymont & Associates for 20 years. She helps clients with immigration, holding degrees in Psychology and Common Sense. She enjoys travel and family time.'
    },
    {
        name: 'Shazia Gill',
        img: 'src/assets/Shazia.jpg',
        review:'Shazia, vital since 2013 at McClymont and Associates, excels in immigration law, especially with the Indian community. Fluent in English, Hindi, and Punjabi, offering expert support.'
    },
    {
        name: 'Naved Shaikh',
        img: 'src/assets/Naved.jpg',
        review:'Naved is a diligent advisor who gives reliable advice to clients. His team offers excellent service, building strong relationships with loyal clients.'
    }
];

export default TeamCarousel;
