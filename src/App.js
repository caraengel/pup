import React, { Component } from 'react';
import puppy from './puppy.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={puppy} className="App-logo" alt="logo" />
          <h1 className="App-title">yelloooooooo</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
