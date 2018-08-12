import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => window.location = 'http://localhost:3001/auth/google'}>Login</button>
        <button onClick={() => {
          fetch('http://localhost:3001/users', {

          }).then(res => console.log(res));
        }}>Test</button>
      </div>
    );
  }
}

export default App;
