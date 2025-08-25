import React from "react";
import "./PeoplePageComponent.css";

const PeoplePageComponent = (props) => (
  <section className="PeoplePage">
    <div className="PeoplePageTextContent">
      <div className="PeoplePageTitle TitleText">Who We Are</div>
      <p className="PeoplePageText">
        A veteran team of product designers and engineers working from a Tahoe
        mansion
      </p>
    </div>
    <ul className="PeopleList">
      <li className="Person">
        <img className="PersonImage" src="Brian.png" alt="" />
        <div className="Label PersonName">Brian</div>
        <div className="Label PersonTitle">Product</div>
      </li>
      <li className="Person">
        <img className="PersonImage" src="Andy.png" alt="" />
        <div className="Label PersonName">Andy</div>
        <div className="Label PersonTitle">Design</div>
      </li>
      <li className="Person">
        <img className="PersonImage" src="Conner.png" alt="" />
        <div className="Label PersonName">Conner</div>
        <div className="Label PersonTitle">Engineering</div>
      </li>
      <li className="Person">
        <img className="PersonImage" src="Grace.png" alt="" />
        <div className="Label PersonName">Grace</div>
        <div className="Label PersonTitle">Engineering</div>
      </li>
      <li className="Person">
        <img className="PersonImage" src="Kevin.png" alt="" />
        <div className="Label PersonName">Kevin</div>
        <div className="Label PersonTitle">Engineering</div>
      </li>
      <li className="Person">
        <img className="PersonImage" src="Sally.png" alt="" />
        <div className="Label PersonName">Sally</div>
        <div className="Label PersonTitle">Engineering</div>
      </li>
      <li className="Person">
        <img className="PersonImage" src="Rosie.png" alt="" />
        <div className="Label PersonName">Rosie</div>
        <div className="Label PersonTitle">Engineering</div>
      </li>
      <li className="Person">
        <img className="PersonImage" src="Ruiz.png" alt="" />
        <div className="Label PersonName">Ruiz</div>
        <div className="Label PersonTitle">Engineering</div>
      </li>
    </ul>
  </section>
);

export default PeoplePageComponent;
