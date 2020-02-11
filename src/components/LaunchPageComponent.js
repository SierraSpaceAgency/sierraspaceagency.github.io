import React from 'react';
import './LaunchPageComponent.css';

const LaunchPageComponent = props => (
  <section className = "LaunchPage">
    <main className = "LaunchPageMainContent">
      <img className = "LaunchPageGradientImage" src = "black-gradient.png" alt = ""/>
      <p className = "LaunchPageMainContentTitle">Ready to launch?</p>
      <p className = "LaunchPageMainContentText TitleText">Make it happen</p>
      <div className = "ContentScroller" onClick = {() => props.onLaunchClick()}>
        <p className = "ContentScrollerTitle">{"LAUNCH"}</p>
        <img className = "ContentScrollerImage" src = "arrow-launch.png" alt = "Scroll down"/>
      </div>
    </main>
    <img className = "LaunchPageMountainRange" src = "mountain-range.png" alt = ""/>
  </section>
)

export default LaunchPageComponent;
