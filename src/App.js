import React, { Component } from 'react';
import HomePageComponent from './components/HomePageComponent';
import PeoplePageComponent from './components/PeoplePageComponent';
import WorkPageComponent from './components/WorkPageComponent';
import LaunchPageComponent from './components/LaunchPageComponent';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      launching: false
    }
  }

  onScrollClick(title) {
    // scroll to the right section
    console.log(`Clicked ${title}`);

    switch(title) {
      case 'home':
        this.homePage.scrollIntoView({ block: "start", behavior: "smooth" });
        this.setState({
          launching: true
        }, () => {
          setTimeout(() => this.setState({launching: false}), 1000);
        });
        break;
      case 'people':
        this.peoplePage.scrollIntoView({ block: "start", behavior: "smooth" });
        break;
      case 'work':
        this.workPage.scrollIntoView({ block: "start", behavior: "smooth" });
        break;
      case 'launch':
        this.launchPage.scrollIntoView({ block: "start", behavior: "smooth" });
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <div ref = { (element) => {this.homePage = element;} }></div>
        <HomePageComponent onScrollClick = {title => this.onScrollClick(title)} />
        <div ref = { (element) => {this.peoplePage = element;} }></div>
        <PeoplePageComponent onScrollClick = {title => this.onScrollClick(title)} />
        <div ref = { (element) => {this.workPage = element;} }></div>
        <WorkPageComponent onScrollClick = {title => this.onScrollClick(title)} />
        <div ref = { (element) => {this.launchPage = element;} }></div>
        <LaunchPageComponent onScrollClick = {title => this.onScrollClick(title)} />
        <img className = "RocketBoosterImage" src = "launch-dock.png" alt = ""/>
        {
          this.state.launching ?
          (
            <div>
              <img className = "RocketImage hidden" src = "rocket-ship-still.png" alt = ""/>
              <img className = "RocketImageLaunch animate-blast-off" src = "rocket-ship-launch.png" alt = ""/>
            </div>
          ) :
          (
            <div>
              <img className = "RocketImage" src = "rocket-ship-still.png" alt = ""/>
              <img className = "RocketImageLaunch hidden" src = "rocket-ship-launch.png" alt = ""/>
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
