import React from 'react';
import ContentScroller from './ContentScroller';
import './LaunchPageComponent.css';

const LaunchPageComponent = props => (
  <section className = "LaunchPage">
    <main className = "LaunchPageMainContent">
      <p className = "LaunchPageMainContentTitle">Need a great app?</p>
      <p className = "LaunchPageMainContentText">Make it happen</p>
    </main>
    <ContentScroller title =  "launch something" onClick = {(title) => props.onScrollClick(props.title)}/>
    <img className = "LaunchPageMountainRange" src = "mountain-range.png"/>
  </section>
)

export default LaunchPageComponent;
