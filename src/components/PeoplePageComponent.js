import React from 'react';
import Slider from "react-slick";
import './PeoplePageComponent.css';

const PeoplePageComponent = props => (
  <section className = "PeoplePage">
    <div className = "PeoplePageTextContent">
      <p className = "PeoplePageTitle">Who We Are</p>
      <p className = "PeoplePageText">We're a veteran team of startup designers and engineers</p>
    </div>
    <ul className = "PeopleList">
      <li className = "Person">
        <img className = "PersonImage" src = "andy.jpg"/>
        <p className = "PersonName">Andy</p>
        <p className = "PersonTitle">Design</p>
      </li>
      <li className = "Person">
        <img className = "PersonImage" src = "brian.jpg"/>
        <p className = "PersonName">Brian</p>
        <p className = "PersonTitle">Architecture</p>
      </li>
      <li className = "Person">
        <img className = "PersonImage" src = "conner.jpg"/>
        <p className = "PersonName">Conner</p>
        <p className = "PersonTitle">CEO</p>
      </li>
      <li className = "Person">
        <img className = "PersonImage" src = "andy.jpg"/>
        <p className = "PersonName">Andy</p>
        <p className = "PersonTitle">Design</p>
      </li>
      <li className = "Person">
        <img className = "PersonImage" src = "brian.jpg"/>
        <p className = "PersonName">Brian</p>
        <p className = "PersonTitle">Architecture</p>
      </li>
      <li className = "Person">
        <img className = "PersonImage" src = "conner.jpg"/>
        <p className = "PersonName">Conner</p>
        <p className = "PersonTitle">CEO</p>
      </li>
    </ul>
  </section>
)

export default PeoplePageComponent;
