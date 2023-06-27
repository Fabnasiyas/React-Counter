import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="count">Count : {count}</h1>
      <div className="buttons">
        <button
          className="increment"
          onClick={() => {
            setCount(count + 1);
          }}   
        >
          +
        </button>
        <button
          className="decrement"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default App;
