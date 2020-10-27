import React, {useState} from "react"
import "./App.css";

function App() {
  return (
    <div data-test='component-app'>
      <h1 data-test='conunter-display'>The counter is currently 
      </h1>
      <button data-test='increment-counter'></button>
    </div>
  );
}

export default App;
