import React from 'react';
import Slider from "react-slick";
import './WorkPageComponent.css';

const WorkPageComponent = props => {

  // Slider settings
  var settings = {
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      speed: 1000,
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
        <div className = "WorkPageTitle TitleText">What We Do</div>
        <p className = "WorkPageText">We build dangerously fun apps. Funded by corporate special ops contracting.</p>
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
