import React from "react";
import "./App.css";
import Model1 from "./components/Model1"
import Model2 from "./components/Model2"

function App() {
  return (
    <div className="app">
      <h1>AI Helper (POC)</h1>
      <div className="models-container">
        <Model1 />
        <Model2 />
      </div>
    </div>
  );
}

export default App;
