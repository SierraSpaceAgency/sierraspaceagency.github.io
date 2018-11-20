import React from 'react';
import Slider from "react-slick";
import './PeoplePageComponent.css';

const PeoplePageComponent = props => {
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
  return(
    <section className = "PeoplePage">
      <div className = "PeoplePageTextContent">
        <p className = "PeoplePageTitle">Who We Are</p>
        <p className = "PeoplePageText">We're a verteran team of startup designers and engineers</p>
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

export default PeoplePageComponent;
