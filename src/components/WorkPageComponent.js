import React from 'react';
import Slider from "react-slick";
import './WorkPageComponent.css';

const WorkPageComponent = props => {

  // Slider settings
  var settings = {
      autoplay: true,
      autoplaySpeed: 5000,
      infinite: true,
      speed: 1500,
      slidesToShow: 2,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '300px',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    };

  return (
    <section className = "WorkPage">
      <div className = "WorkPageTextContent">
        <p className = "WorkPageTitle TitleText">What We Do</p>
        <p className = "WorkPageText">We build fun apps for big brands. Check out some of our work.</p>
      </div>
      <div className = "WorkPageCarouselContainer">
        <Slider {...settings}>
          <div><div className = "WorkPageCarouselItem"></div></div>
          <div><div className = "WorkPageCarouselItem"></div></div>
          <div><div className = "WorkPageCarouselItem"></div></div>
          <div><div className = "WorkPageCarouselItem"></div></div>
          <div><div className = "WorkPageCarouselItem"></div></div>
        </Slider>
      </div>
    </section>
  );
}

export default WorkPageComponent;
