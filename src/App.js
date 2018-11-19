import React, { Component } from 'react';
import HomePageComponent from './components/HomePageComponent';
import './App.css';

class App extends Component {

  onScrollClick(title) {
    // scroll to the right section
    console.log(`Clicked ${title}`);
  }

  render() {
    return (
      <div className="App">
        <HomePageComponent />
        <section className = "PeoplePage"></section>
        <section className = "WorkPage"></section>
        <section className = "LaunchPage"></section>
      </div>
    );
  }
}

export default App;
