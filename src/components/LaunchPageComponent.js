import React from 'react';
import './LaunchPageComponent.css';

const LaunchPageComponent = props => (
  <section className = "LaunchPage">
    <main className = "LaunchPageMainContent">
      <p className = "LaunchPageMainContentTitle">Need a great app?</p>
      <p className = "LaunchPageMainContentText">Make it happen</p>
    </main>
    <footer className = "ContentScrollerFooter">
      <div className = "ContentScroller" onClick = {() => props.onScrollClick("launch somethnig")}>
        <p className = "ContentScrollerTitle">{"launch something"}</p>
        <img className = "ContentScrollerImage" src = "arrow-1.png" alt = "Scroll down"/>
      </div>
    </footer>
    <img className = "LaunchPageMountainRange" src = "mountain-range.png"/>
  </section>
)

export default LaunchPageComponent;
