import React from 'react';
import './LaunchPageComponent.css';

const LaunchPageComponent = props => (
  <section className = "LaunchPage">
    <main className = "LaunchPageMainContent">
      <p className = "LaunchPageMainContentTitle">Need a great app?</p>
      <p className = "LaunchPageMainContentText">Make it happen</p>
    </main>
    <footer className = "ContentScrollerFooter">
      <div className = "ContentScroller ContentScroller--Launch" onClick = {() => props.onScrollClick("home")}>
        <img className = "ContentScrollerImage ContentScrollerImage--Launch" src = "arrow-launch.png" alt = "Scroll down"/>
        <p className = "ContentScrollerTitle ContentScrollerTitle--Launch">{"launch something"}</p>
      </div>
    </footer>
    <img className = "LaunchPageMountainRange" src = "mountain-range.png"/>
  </section>
)

export default LaunchPageComponent;
