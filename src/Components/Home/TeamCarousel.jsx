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
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    const sliderRef = React.useRef(null);

    const handlePrevious = () => {
        sliderRef.current.slickPrev();
    };

    const handleNext = () => {
        sliderRef.current.slickNext();
    };
    useEffect(()=>{
        const sliding = setInterval(()=>{
            sliderRef.current.slickNext();
        },3000)
        return ()=>clearInterval(sliding)
    },[])

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
        name: 'Resident Visa',
        img: 'src/assets/Rectangle 3.jpg',
        review:
            'Compared to most countries in the world, New Zealand offers a great work-life balance. That’s reflected time and time again in international surveys.'
    },
    {
        name: 'Visitor Visa',
        img: 'src/assets/Rectangle 3.jpg',
        review:
            'We handle the submission of your visa application to the appropriate immigration authorities, ensuring compliance with all regulations and deadlines.'
    },
    {
        name: 'Student Visa',
        img: 'src/assets/Rectangle 3.jpg',
        review:
            'The New Zealand government has strong quality assurance systems to ensure high-quality education at all levels of the education system, both public and private.'
    },
    {
        name: 'Tourist Visa',
        img: 'src/assets/Rectangle 3.jpg',
        review:
            'Issued to individuals traveling to a country for leisure, sightseeing, or recreational purposes. Generally, it prohibits engaging in any form of employment during the visit'
    },
    {
        name: 'Family Visa',
        img: 'src/assets/Rectangle 3.jpg',
        review:
            ' Granted to spouses, children, or other dependents of individuals who hold a valid visa in the host country. It allows family members to join the primary visa holder during their stay.'
    }
];

export default TeamCarousel;
