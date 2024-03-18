import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material'; // Import icons
import '../Home/HomeCarosel.css'; // Import external CSS file
import './VisaTypes.css'

function VisaTypes({data,changeContent}) {
    const settings = {
        className: "center",
        centerMode: true,
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        centerPadding: "100px",
        // slidesToScroll: 1
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
                                    <img src={d.img} alt="" className="slide-image" />
                                </div>
                                <div className="slide-content">
                                    <p className="slide-name">{d.name}</p>
                                    <p className="slide-review">{d.review}</p>
                                </div>
                                <div className="btnBox">
                                    <button onClick={()=>{changeContent(index)}}>Learn more..</button>
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
