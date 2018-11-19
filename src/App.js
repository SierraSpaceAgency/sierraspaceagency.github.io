import React, { Component } from 'react';
import ContentScroller from './ContentScroller';
import './App.css';

class App extends Component {

  onScrollClick(title) {
    // scroll to the right section
    console.log(`Clicked ${title}`);
  }

  render() {
    return (
      <div className="App">
        <section className = "HomePage">
          <header>
            <img className = "SSALogo" src = "ssa-logo.png" alt = "SSA Logo"></img>
            <p className = "SSATitle">Sierra Space Agency</p>
            <nav className = "NavLinks">
              <div className = "NavLink">
                <p className = "NavLinkText">Home</p>
              </div>
              <div className = "NavLink">
                <p className = "NavLinkText">About</p>
              </div>
              <div className = "NavLink">
                <p className = "NavLinkText">Work</p>
              </div>
              <div className = "NavLink">
                <p className = "NavLinkText">Contact</p>
              </div>
            </nav>
          </header>
          <main className = "HomePageMainContent"></main>
          <ContentScroller title = "who we are" onClick = {(title) => this.onScrollClick(title)}/>
        </section>
        <section className = "PeoplePage"></section>
        <section className = "WorkPage"></section>
        <section className = "LaunchPage"></section>
      </div>
    );
  }
}

export default App;
