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

  /* Called when the launch button at the bottom is clicked */
  onLaunchClick() {
    // scroll to the very top
    this.homePage.scrollIntoView({ block: "start", behavior: "smooth" });
    // set launching state to true so the rocket launches
    this.setState({
      launching: true
    }, () => {
      // set launching state back to false a second later
      setTimeout(() => this.setState({launching: false}), 1000);
    });
  }

  render() {
    return (
      <div className="App">
        <div ref = { (element) => {this.homePage = element;} }></div>
        <HomePageComponent />
        <PeoplePageComponent />
        <WorkPageComponent />
        <LaunchPageComponent onLaunchClick = {() => this.onLaunchClick()} />
        <img className = "RocketBoosterImage" src = "launch-dock.png" alt = ""/>
        {
          /** if we're in the launching state **/
          this.state.launching ?
          /** hide the original image, show the launching image and animate its launch **/
          (
            <div>
              <img className = "RocketImage hidden" src = "rocket-ship-still.png" alt = ""/>
              <img className = "RocketImageLaunch animate-blast-off" src = "rocket-ship-launch.png" alt = ""/>
            </div>
          ) :
          /** otherwise show the original image and hide the launching image **/
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
