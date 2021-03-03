import React, { useState } from 'react'
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)
  const counterIncrement = () => {
    counter < 10 ? setCounter(counter + 1) : setCounter(0);
  }

  return (
    <div className="App">
      <header className="App-header">
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
