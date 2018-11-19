import React, { Component } from 'react';
import HomePageComponent from './components/HomePageComponent';
import PeoplePageComponent from './components/PeoplePageComponent';
import WorkPageComponent from './components/WorkPageComponent';
import './App.css';

class App extends Component {

  onScrollClick(title) {
    // scroll to the right section
    console.log(`Clicked ${title}`);
  }

  render() {
    return (
      <div className="App">
        <HomePageComponent onScrollClick = {title => this.onScrollClick(title)} />
        <PeoplePageComponent onScrollClick = {title => this.onScrollClick(title)} />
        <WorkPageComponent onScrollClick = {title => this.onScrollClick(title)} />
        <section className = "LaunchPage"></section>
      </div>
    );
  }
}

export default App;
