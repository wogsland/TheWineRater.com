import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to TheWineRater (&alpha; rewrite)</h1>
        </div>
        <p className="App-intro">
          To get started, check out a <a href="/wine/1337">wine</a>.
        </p>
      </div>
    );
  }
}

export default HomePage;
