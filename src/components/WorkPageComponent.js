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
      <div className = "PeoplePageTextContent">
        <p className = "PeoplePageTitle">What We Do</p>
        <p className = "PeoplePageText">We build fun apps for big brands. Check out some of our work.</p>
      </div>
      <div className = "PeoplePageCarouselContainer">
        <Slider {...settings}>
          <div><div className = "PeoplePageCarouselItem"></div></div>
          <div><div className = "PeoplePageCarouselItem"></div></div>
          <div><div className = "PeoplePageCarouselItem"></div></div>
          <div><div className = "PeoplePageCarouselItem"></div></div>
          <div><div className = "PeoplePageCarouselItem"></div></div>
        </Slider>
      </div>
    </section>
  );
}

export default WorkPageComponent;
