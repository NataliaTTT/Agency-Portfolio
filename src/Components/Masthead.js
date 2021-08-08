import React from "react";
import ReactDOM from "react-dom";
import { text } from "./textOfComponents";

const Masthead = () => {
  return (
    <header className="masthead">
      <div className="container">
        <div className="masthead-subheading">{text.header[0]}</div>
        <div className="masthead-heading text-uppercase">{text.header[1]}</div>
        <a className="btn btn-primary btn-xl text-uppercase" href="#services">
          {text.header[2]}
        </a>
      </div>
    </header>
  );
};
export default Masthead;
