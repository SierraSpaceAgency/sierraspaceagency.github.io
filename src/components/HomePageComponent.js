import React from 'react';
import './HomePageComponent.css';

const HomePageComponent = (props) => (
  <section className = "HomePage">
    <header>
      <img className = "SSALogo" src = "ssa-logo.png" alt = "SSA Logo"></img>
      <p className = "SSATitle">Sierra Space Agency</p>
      <nav className = "NavLinks">
        <div className = "NavLink" onClick = {() => props.onScrollClick("launch something")}>
          <p className = "NavLinkText">Home</p>
        </div>
        <div className = "NavLink" onClick = {() => props.onScrollClick("who we are")}>
          <p className = "NavLinkText">About</p>
        </div>
        <div className = "NavLink" onClick = {() => props.onScrollClick("what we do")}>
          <p className = "NavLinkText">Work</p>
        </div>
        <div className = "NavLink" onClick = {() => props.onScrollClick("how we do it")}>
          <p className = "NavLinkText">Contact</p>
        </div>
      </nav>
    </header>
    <main className = "HomePageMainContent"></main>
    <footer className = "ContentScrollerFooter">
      <div className = "ContentScroller" onClick = {() => props.onScrollClick("who we are")}>
        <p className = "ContentScrollerTitle">{"who we are"}</p>
        <img className = "ContentScrollerImage" src = "arrow-1.png" alt = "Scroll down"/>
      </div>
    </footer>
  </section>
)

export default HomePageComponent;
