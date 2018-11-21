import React from 'react';
import './HomePageComponent.css';

const HomePageComponent = (props) => (
  <section className = "HomePage">
    <header>
      <img className = "SSALogo" src = "ssa-logo.png" alt = "SSA Logo"></img>
      <p className = "SSATitle">Sierra Space Agency</p>
    </header>
    <img className = "SSAImage" src = "faded-sierra-mountains.png"/>
  </section>
)

export default HomePageComponent;
