import React from 'react';
import './PeoplePageComponent.css';

const PeoplePageComponent = props => (
  <section className = "PeoplePage">
    <div className = "PeoplePageTextContent">
      <div className = "PeoplePageTitle TitleText">Who We Are</div>
      <p className = "PeoplePageText">A veteran team of startup designers and engineers</p>
    </div>
    <ul className = "PeopleList">
      <li className = "Person">
        <a className = "PersonLink" href = "https://andrewferrarone.com">
          <img className = "PersonImage" src = "Andy.png" alt = ""/>
          <div className = "Label PersonName">Andy</div>
          <div className = "Label PersonTitle">DESIGN</div>
        </a>
      </li>
      <li className = "Person">
        <a className = "PersonLink" href = "http://briancox.co">
          <img className = "PersonImage" src = "Brian.png" alt = ""/>
          <div className = "Label PersonName">Brian</div>
          <div className = "Label PersonTitle">PRODUCT</div>
        </a>
      </li>
      <li className = "Person">
        <a className = "PersonLink" href = "https://connerhinman.com">
          <img className = "PersonImage" src = "Conner.png" alt = ""/>
          <div className = "Label PersonName">Conner</div>
          <div className = "Label PersonTitle">ENGINEERING</div>
        </a>
      </li>
      <li className = "Person">
        <img className = "PersonImage" src = "Grace.png" alt = ""/>
        <div className = "Label PersonName">Grace</div>
        <div className = "Label PersonTitle">ENGINEERING</div>
        </li>
      <li className = "Person">
        <img className = "PersonImage" src = "Kevin.png" alt = ""/>
        <div className = "Label PersonName">Kevin</div>
        <div className = "Label PersonTitle">ENGINEERING</div>
      </li>
      <li className = "Person">
        <img className = "PersonImage" src = "Sally.png" alt = ""/>
        <div className = "Label PersonName">Sally</div>
        <div className = "Label PersonTitle">ENGINEERING</div>
      </li>
    </ul>
  </section>
)

export default PeoplePageComponent;
