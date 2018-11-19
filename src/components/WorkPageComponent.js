import React from 'react';
import ContentScroller from './ContentScroller';
import './WorkPageComponent.css';

const WorkPageComponent = props => (
  <section className = "WorkPage">
    <div className = "WorkPageMainContent"></div>
    <ContentScroller title = "how we do it" onClick = {(title) => props.onScrollClick(title)}/>
  </section>
)

export default WorkPageComponent;
