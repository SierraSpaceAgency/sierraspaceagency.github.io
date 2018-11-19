import React from 'react';
import ContentScroller from './ContentScroller';
import './PeoplePageComponent.css';

const PeoplePageComponent = props => (
  <section className = "PeoplePage">
    <div className = "PeoplePageMainContent"></div>
    <ContentScroller title = "what we do" onClick = {(title) => props.onScrollClick(title)}/>
  </section>
)

export default PeoplePageComponent;
