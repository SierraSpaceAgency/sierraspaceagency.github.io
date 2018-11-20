import React from 'react';
import './HomePageComponent.css';

const HomePageComponent = (props) => (
  <section className = "HomePage">
    <header>
      <img className = "SSALogo" src = "ssa-logo.png" alt = "SSA Logo"></img>
      <p className = "SSATitle">Sierra Space Agency</p>
      <nav className = "NavLinks">
        <div className = "NavLink" onClick = {() => props.onScrollClick("home")}>
          <p className = "NavLinkText">Home</p>
        </div>
        <div className = "NavLink" onClick = {() => props.onScrollClick("people")}>
          <p className = "NavLinkText">About</p>
        </div>
        <div className = "NavLink" onClick = {() => props.onScrollClick("work")}>
          <p className = "NavLinkText">Work</p>
        </div>
        <div className = "NavLink" onClick = {() => props.onScrollClick("launch")}>
          <p className = "NavLinkText">Contact</p>
        </div>
      </nav>
    </header>
    <main className = "HomePageMainContent"></main>
    <footer className = "ContentScrollerFooter">
      <div className = "ContentScroller" onClick = {() => props.onScrollClick("people")}>
        <p className = "ContentScrollerTitle">{"who we are"}</p>
        <img className = "ContentScrollerImage" src = "arrow-1.png" alt = "Scroll down"/>
      </div>
    </footer>
  </section>
)

export default HomePageComponent;
