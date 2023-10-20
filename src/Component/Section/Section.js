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

  //   ************** copyText function **************
  const copyText = () => {
    navigator.clipboard.writeText(text);
  };

  //   ************** Remove Extra Spaces function **************
  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  //   ************** copyText function **************
  const clearText = () => {
    let newText = "";
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
          <button
            disabled={text.length === 0}
            className="button"
            onClick={upperCase}
          >
            uppercase
          </button>
          <button
            disabled={text.length === 0}
            className="button"
            onClick={lowerCase}
          >
            lowercase
          </button>
          <button
            disabled={text.length === 0}
            className="button"
            onClick={copyText}
          >
            copy text
          </button>
          <button
            disabled={text.length === 0}
            className="button"
            onClick={removeExtraSpaces}
          >
            remove extra space
          </button>
          <button
            disabled={text.length === 0}
            className="button"
            onClick={clearText}
          >
            clear
          </button>
        </div>
      </div>
    </>
  );
};

export default Section;
