import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setcount] = useState(0);
  const [error, setError] = useState(false);

  const handleDecrement = () => {
    if (count > 0) {
      setcount(count - 1);
    } else {
      setError(true);
    }
  };

  return (
    <div data-test='component-app' className='App'>
      &nbsp;
      <h1 data-test='conunter-display'>
        The counter is currently&nbsp;
        <span data-test='count'>{count}</span>
      </h1>
      <div data-test='error-display' className={`error ${error ? '' : 'hidden'}`}>
        Count can´t go below 0
      </div>
      <button
        data-test='increment-counter'
        className='counter-button'
        onClick={() => {if( error ) {setError(false)}setcount(count + 1)}}>
        Increment
      </button>
      <button data-test='decrement-counter' onClick={() => handleDecrement()}>
        Decrement
      </button>
    </div>
  );
}

export default App;
