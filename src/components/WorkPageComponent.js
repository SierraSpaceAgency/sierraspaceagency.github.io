import React from "react";
import Slider from "react-slick";
import "./WorkPageComponent.css";

const WorkPageComponent = (props) => {
  // Slider settings
  var settings = {
    autoplay: true,
    autoplaySpeed: 1500,
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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="WorkPage">
      <div className="WorkPageTextContent">
        <div className="WorkPageTitle TitleText">What We Do</div>
        <p className="WorkPageText">
          We translate complex problems into simple apps that millions of people
          use every day.
          <br />
          We're known for our experience in fintech, consumer apps, and LLMs.
        </p>
      </div>
      <div className="WorkPageCarouselContainer">
        <Slider {...settings}>
          <div className="WorkPageCarouselItem">
            <img className="WorkPageCarouselImage" src="CNN.png" alt="" />
          </div>
          <div className="WorkPageCarouselItem">
            <img className="WorkPageCarouselImage" src="Prosper.png" alt="" />
          </div>
          <div className="WorkPageCarouselItem">
            <img
              className="WorkPageCarouselImage"
              src="LendingPoint.png"
              alt=""
            />
          </div>
          <div className="WorkPageCarouselItem">
            <img className="WorkPageCarouselImage" src="Series.png" alt="" />
          </div>
          <div className="WorkPageCarouselItem">
            <img className="WorkPageCarouselImage" src="Stir.png" alt="" />
          </div>
          <div className="WorkPageCarouselItem">
            <img className="WorkPageCarouselImage" src="Index.png" alt="" />
          </div>
          <div className="WorkPageCarouselItem">
            <img className="WorkPageCarouselImage" src="Premise.png" alt="" />
          </div>
          <div className="WorkPageCarouselItem">
            <img
              className="WorkPageCarouselImage"
              src="FamilyOffice.png"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default WorkPageComponent;
