import React, { Component } from "react";
import HomePageComponent from "./components/HomePageComponent";
import PeoplePageComponent from "./components/PeoplePageComponent";
import WorkPageComponent from "./components/WorkPageComponent";
import LaunchPageComponent from "./components/LaunchPageComponent";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      launching: false,
      launched: false,
    };
  }

  /* Called when the launch button at the bottom is clicked */
  onLaunchClick() {
    // grab this for use in the addeventlistener callback
    let self = this;
    // scroll to the very top
    this.homePage.scrollIntoView({
      block: "start",
      behavior: "smooth",
      duration: 2.0,
    });
    // set launching state to true so the rocket launches
    this.setState(
      {
        launching: true,
      },
      () => {
        // add an event listener to get rid of the rocket when its animation ends
        this.launchRocket.addEventListener(
          "animationend",
          function(event) {
            // reset the rocket launch
            self.setState({ launching: false });
            // launch a mailto
            window.location.href =
              "mailto:launch@sierraspaceagency.com?subject=Launch";
            // set launched state to show backup email address
            setTimeout(() => {
              self.setState({ launched: true });
            }, 1000);
          },
          false
        );
      }
    );
  }

  render() {
    return (
      <div className="App">
        <div
          ref={(element) => {
            this.homePage = element;
          }}
        />
        <HomePageComponent />
        <PeoplePageComponent />
        <WorkPageComponent />
        <LaunchPageComponent
          onLaunchClick={() => this.onLaunchClick()}
          launched={this.state.launched}
        />
        <img className="RocketBoosterImage" src="launch-dock.png" alt="" />
        {/** if we're in the launching state **/
        this.state.launching ? (
          /** hide the original image, show the launching image and animate its launch **/
          <div>
            <img
              className="RocketImage hidden"
              src="rocket-ship-still.png"
              alt=""
            />
            <img
              ref={(element) => {
                this.launchRocket = element;
              }}
              className="RocketImageLaunch animate-blast-off"
              src="rocket-ship-launch.png"
              alt=""
            />
          </div>
        ) : (
          /** otherwise show the original image and hide the launching image **/
          <div>
            <img className="RocketImage" src="rocket-ship-still.png" alt="" />
            <img
              className="RocketImageLaunch hidden"
              src="rocket-ship-launch.png"
              alt=""
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
