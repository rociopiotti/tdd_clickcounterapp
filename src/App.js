import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setcount] = useState(0);

  return (
    <div data-test='component-app' className="App">
      &nbsp;
      <h1 data-test='conunter-display'>
        The counter is currently&nbsp;
        <span data-test='count'>{count}</span>
      </h1>
      <button
        data-test='increment-counter'
        className= "counter-button"
        onClick={() => setcount(count + 1)}>Increment button</button>
    </div>
  );
}

export default App;
