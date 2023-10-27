import { useState } from "react";
import "./App.css";
import Section from "./Component/Section/Section";
import Navbar from "./Component/Navbar/Navbar";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
    }
  };
  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode}/>
      <Section mode={mode} toggleMode={toggleMode}/>
    </>
  );
}

export default App;
