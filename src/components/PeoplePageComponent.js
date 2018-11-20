import React from 'react';
import Slider from "react-slick";
import './PeoplePageComponent.css';

const PeoplePageComponent = props => (
  <section className = "PeoplePage">
    <div className = "PeoplePageTextContent">
      <p className = "PeoplePageTitle">Who We Are</p>
      <p className = "PeoplePageText">We're a verteran team of startup designers and engineers</p>
    </div>
    <ul className = "PeopleList">
      <li className = "Person"><img className = "PersonImage" src = "andy.jpg"/></li>
      <li className = "Person"><img className = "PersonImage" src = "brian.jpg"/></li>
      <li className = "Person"><img className = "PersonImage" src = "conner.jpg"/></li>
      <li className = "Person"><img className = "PersonImage" src = "andy.jpg"/></li>
      <li className = "Person"><img className = "PersonImage" src = "brian.jpg"/></li>
      <li className = "Person"><img className = "PersonImage" src = "conner.jpg"/></li>
    </ul>
  </section>
)

export default PeoplePageComponent;
