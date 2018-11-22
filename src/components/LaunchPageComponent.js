import React from 'react';
import './LaunchPageComponent.css';

const LaunchPageComponent = props => (
  <section className = "LaunchPage">
    <main className = "LaunchPageMainContent">
      <p className = "LaunchPageMainContentTitle">Everyone has ideas</p>
      <p className = "LaunchPageMainContentText TitleText">Make it happen</p>
    </main>
    <footer className = "ContentScrollerFooter">
      <div className = "ContentScroller" onClick = {() => props.onLaunchClick()}>
        <img className = "ContentScrollerImage" src = "arrow-launch.png" alt = "Scroll down"/>
        <p className = "ContentScrollerTitle">{"launch something"}</p>
      </div>
    </footer>
    <img className = "LaunchPageMountainRange" src = "mountain-range.png"/>
  </section>
)

export default LaunchPageComponent;
