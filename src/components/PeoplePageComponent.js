import React from 'react';
import Slider from "react-slick";
import './PeoplePageComponent.css';

const PeoplePageComponent = props => (
  <section className = "PeoplePage">
    <div className = "PeoplePageTextContent">
      <p className = "PeoplePageTitle TitleText">Who We Are</p>
      <p className = "PeoplePageText">We're a veteran team of startup designers and engineers</p>
    </div>
    <ul className = "PeopleList">
      <li className = "Person">
        <a className = "PersonLink" href = "https://andrewferrarone.com">
          <img className = "PersonImage" src = "Andy.png"/>
          <p className = "PersonName">Andy</p>
          <p className = "PersonTitle">Design</p>
        </a>
      </li>
      <li className = "Person">
        <a className = "PersonLink" href = "http://briancox.co">
          <img className = "PersonImage" src = "Brian.png"/>
          <p className = "PersonName">Brian</p>
          <p className = "PersonTitle">Client Success</p>
        </a>
      </li>
      <li className = "Person">
        <a className = "PersonLink" href = "https://connerhinman.com">
          <img className = "PersonImage" src = "Conner.png"/>
          <p className = "PersonName">Conner</p>
          <p className = "PersonTitle">Engineering</p>
        </a>
      </li>
      <li className = "Person">
        <a className = "PersonLink" href = "https://www.linkedin.com/in/gracekang93/">
          <img className = "PersonImage" src = "Grace.png"/>
          <p className = "PersonName">Grace</p>
          <p className = "PersonTitle">Engineering</p>
        </a>
      </li>
      <li className = "Person">
        <img className = "PersonImage" src = "Kevin.png"/>
        <p className = "PersonName">Kevin</p>
        <p className = "PersonTitle">Marketing</p>
      </li>
      <li className = "Person">
        <img className = "PersonImage" src = "Sally.png"/>
        <p className = "PersonName">Sally</p>
        <p className = "PersonTitle">Engineering</p>
      </li>
    </ul>
  </section>
)

export default PeoplePageComponent;
