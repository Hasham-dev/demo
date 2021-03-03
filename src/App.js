import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)
  const counterIncrement = () => {
    setCounter(counter + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>{counter}</h2>
        <button
          onClick={counterIncrement}
        >Click me</button>
      </header>
    </div>
  );
}

export default App;
