import React from 'react';
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
          <img className = "PersonImage" src = "Andy.png" alt = ""/>
          <p className = "PersonName">Andy</p>
          <p className = "PersonTitle">DESIGN</p>
        </a>
      </li>
      <li className = "Person">
        <a className = "PersonLink" href = "http://briancox.co">
          <img className = "PersonImage" src = "Brian.png" alt = ""/>
          <p className = "PersonName">Brian</p>
          <p className = "PersonTitle">CLIENT SUCCESS</p>
        </a>
      </li>
      <li className = "Person">
        <a className = "PersonLink" href = "https://connerhinman.com">
          <img className = "PersonImage" src = "Conner.png" alt = ""/>
          <p className = "PersonName">Conner</p>
          <p className = "PersonTitle">ENGINEERING</p>
        </a>
      </li>
      <li className = "Person">
        <img className = "PersonImage" src = "Grace.png" alt = ""/>
        <p className = "PersonName">Grace</p>
        <p className = "PersonTitle">ENGINEERING</p>
        </li>
      <li className = "Person">
        <img className = "PersonImage" src = "Kevin.png" alt = ""/>
        <p className = "PersonName">Kevin</p>
        <p className = "PersonTitle">ENGINEERING</p>
      </li>
      <li className = "Person">
        <a className = "PersonLink" href = "https://www.sallyblair.io/">
          <img className = "PersonImage" src = "Sally.png" alt = ""/>
          <p className = "PersonName">Sally</p>
          <p className = "PersonTitle">ENGINEERING</p>
        </a>
      </li>
    </ul>
  </section>
)

export default PeoplePageComponent;
