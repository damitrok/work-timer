import React from "react";
import "./App.css";
import Clock from "./components/clock";
import ButtonsPanel from "./components/buttonsPanel";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="App">
      <button onClick={changeTheme} id="chang-theme-button">Change theme</button>
      <h1>Welcome to WorkTimer</h1>
      <Clock />
      <ButtonsPanel />
    </div>
  );
}

export default App;
