import React, { useState } from "react";
import "./Section.css";

const Section = () => {
  const [text, setText] = useState("");
  //   ************** Onchange function  **************
  const handleOnchange = (e) => {
    setText(e.target.value);
  };
  //   ************** UpperCase function **************
  const upperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  //   ************** LowerCase function **************
  const lowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  return (
    <>
      <div className="container">
        <h1 className="heading">Text-Formatter</h1>
        <div className="textarea">
          <textarea
            name="textarea"
            cols="90"
            rows="8"
            id="myBox"
            onChange={handleOnchange}
            value={text}
          ></textarea>
        </div>
        <div className="buttons">
          <button className="button" onClick={upperCase}>
            uppercase
          </button>
          <button className="button" onClick={lowerCase}>
            lowercase
          </button>
          <button className="button">copy text</button>
          <button className="button">remove extra space</button>
          <button className="button">clear</button>
        </div>
      </div>
    </>
  );
};

export default Section;
