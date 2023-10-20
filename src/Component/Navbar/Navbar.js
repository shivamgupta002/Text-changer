import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <>
      <nav
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
          background: props.mode === "dark" ? "#042743" : "white",
        }}
      >
        <h2>Text Format</h2>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="https://shivam-gupta-portfolio.netlify.app/">About Me</a>
          </li>
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable DarkMode
            </label>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
