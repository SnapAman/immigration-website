import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material'; // Import icons
import '../Home/HomeCarosel.css'; // Import external CSS file
import './VisaTypes.css'

function VisaTypes({ data, changeContent }) {
    const settings = {
        className: "center",
        centerMode: true,
        // dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        autoplay: true,
        centerPadding: "-10px",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    centerPadding: "0px",
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
                {/* <h1>SERVICES</h1> */}
                <div className="slider-button left">
                    <IconButton onClick={handlePrevious}>
                        <ArrowBack />
                    </IconButton>
                </div>
                <Slider {...settings} ref={sliderRef}>
                    {data.map((d, index) => (
                        <div key={index} className="slide " style={{ margin: '20px' }}>
                            <div className="slideWrapper visaSlide">

                                <div className="slide-image-container">
                                    <img src={d.img} alt="" className="slide-image2" />
                                </div>
                                <div className="slide-content">
                                    <p className="slide-name2">{d.name}</p>
                                    <p className="slide-review2">{d.review}</p>
                                </div>
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




export default VisaTypes;
