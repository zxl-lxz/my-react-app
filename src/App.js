import React from 'react';
import logo from './logo.svg';
import './App.css';

import Calculate from './components/Calculate';
import KeyTest from './components/KeyTest';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Calculate />
      <br />
      <KeyTest />
    </div>
  );
}

export default App;
