import React from 'react';
import './PeoplePageComponent.css';

const PeoplePageComponent = props => (
  <section className = "PeoplePage">
    <div className = "PeoplePageMainContent"></div>
    <footer className = "ContentScrollerFooter">
      <div className = "ContentScroller" onClick = {() => props.onScrollClick("work")}>
        <p className = "ContentScrollerTitle">{"what we do"}</p>
        <img className = "ContentScrollerImage" src = "arrow-1.png" alt = "Scroll down"/>
      </div>
    </footer>
  </section>
)

export default PeoplePageComponent;
