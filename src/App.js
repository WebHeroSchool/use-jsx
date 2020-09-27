import React from 'react';
import logo from './logo.svg';
import './App.css';
const nam = 5;
const flag = true;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style = {{
        		color: 'red'
        }}>
        	Hello World 
        </p>
        <p>
        	{nam}
        </p>
        <p>{789}</p>
        <p>{ Math.pow(2,3)}</p>
        <p>
        {flag && 'Flag is true'}
        </p>
        <p>
        	{flag ? 'Flag is true' : 'Flag is false'}
        	{undefined}
        	{null}
        	{false}
        	{true}
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
    </div>
  );
}

export default App;
