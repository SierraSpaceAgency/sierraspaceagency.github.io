import React from 'react';
import Slider from "react-slick";
import './WorkPageComponent.css';

const WorkPageComponent = props => {

  var settings = {
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 2,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '200px'
    };

  return (
    <section className = "WorkPage">
      <div className = "WorkPageTextContent">
        <p className = "WorkPageTitle">What We Do</p>
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
