import React from "react";
import ReactDOM from "react-dom";
import { text } from "./textOfComponents";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand" href="#page-top">
          <img src="assets/img/navbar-logo.svg" alt="..." />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars ms-1"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <li className="nav-item">
              <a className="nav-link" href={`#${text.Menu[0].toLowerCase()}`}>
                {text.Menu[0]}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={`#${text.Menu[1].toLowerCase()}`}>
                {text.Menu[1]}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={`#${text.Menu[2].toLowerCase()}`}>
                {text.Menu[2]}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={`#${text.Menu[3].toLowerCase()}`}>
                {text.Menu[3]}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={`#${text.Menu[4].toLowerCase()}`}>
                {text.Menu[4]}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
