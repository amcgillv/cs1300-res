import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Homepage from './Homepage';
import Navbar from './Navbar';
import Articles from './Articles';
import MyFooter from './MyFooter';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
        //
      <div className="App">
        <Homepage />
        <div class="container">
          <Articles />
        </div>
      
      </div>
    );
  }
}

export default App;
