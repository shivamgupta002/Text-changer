import { useState } from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import Section from "./Component/Section/Section";

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
      <Header mode={mode} toggleMode={toggleMode}/>
      <Section mode={mode} toggleMode={toggleMode}/>
    </>
  );
}

export default App;
