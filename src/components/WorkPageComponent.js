import React from 'react';
import './WorkPageComponent.css';

const WorkPageComponent = props => (
  <section className = "WorkPage">
    <div className = "WorkPageMainContent"></div>
    <footer className = "ContentScrollerFooter">
      <div className = "ContentScroller" onClick = {() => props.onScrollClick("launch")}>
        <p className = "ContentScrollerTitle">{"how we do it"}</p>
        <img className = "ContentScrollerImage" src = "arrow-1.png" alt = "Scroll down"/>
      </div>
    </footer>
  </section>
)

export default WorkPageComponent;
