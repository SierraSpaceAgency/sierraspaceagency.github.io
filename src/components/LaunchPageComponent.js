import React from 'react';
import './LaunchPageComponent.css';

const LaunchPageComponent = props => (
  <section className = "LaunchPage">
    <main className = "LaunchPageMainContent">
      <img className = "LaunchPageGradientImage" src = "black-gradient.png" alt = ""/>
      <p className = "LaunchPageMainContentTitle">Everyone has ideas</p>
      <p className = "LaunchPageMainContentText TitleText">Make it happen</p>
      <div className = "ContentScroller" onClick = {() => props.onLaunchClick()}>
        <p className = "ContentScrollerTitle">{"Launch"}</p>
        <img className = "ContentScrollerImage" src = "arrow-launch.png" alt = "Scroll down"/>
      </div>
    </main>
    <img className = "LaunchPageMountainRange" src = "mountain-range.png"/>
  </section>
)

export default LaunchPageComponent;
