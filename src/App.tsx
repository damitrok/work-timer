import React from "react";
import "./App.css";
import Clock from "./components/clock";
import ButtonsPanel from "./components/buttonsPanel";

function App() {
  return (
    <div className="App">
      <h1>Welcome to WorkTimer</h1>
      <Clock />
      <ButtonsPanel />
    </div>
  );
}

export default App;
