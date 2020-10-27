import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setcount] = useState(0);

  return (
    <div data-test='component-app'>
      &nbsp;
      <h1 data-test='conunter-display'>
        The counter is currently
        <span data-test='count'>{count}</span>
      </h1>
      <button data-test='increment-counter'></button>
    </div>
  );
}

export default App;
