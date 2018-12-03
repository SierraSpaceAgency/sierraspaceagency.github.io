import React from 'react';
import Slider from "react-slick";
import './WorkPageComponent.css';

const WorkPageComponent = props => {

  // Slider settings
  var settings = {
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      speed: 1500,
      slidesToShow: 4,
      slidesToScroll: 1,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2
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
          <div className = "WorkPageCarouselItem"><img className = "WorkPageCarouselImage" src = "CNN.png" alt = ""/></div>
          <div className = "WorkPageCarouselItem"><img className = "WorkPageCarouselImage" src = "Scoutmob.png" alt = ""/></div>
          <div className = "WorkPageCarouselItem"><img className = "WorkPageCarouselImage" src="YikYak.png" alt = ""/></div>
          <div className = "WorkPageCarouselItem"><img className = "WorkPageCarouselImage" src="Moments.png" alt = ""/></div>
          <div className = "WorkPageCarouselItem"><img className = "WorkPageCarouselImage" src = "Liftoff.png" alt = ""/></div>
          <div className = "WorkPageCarouselItem"><img className = "WorkPageCarouselImage" src = "Index.png" alt = ""/></div>
        </Slider>
      </div>
    </section>
  );
}

export default WorkPageComponent;
