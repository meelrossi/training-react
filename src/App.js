import React, { Component } from 'react';
import Dashboard from './Dashboard.js';
import Header from './Header.js'
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Dashboard/>
      </div>
    );
  }
}

export default App;
