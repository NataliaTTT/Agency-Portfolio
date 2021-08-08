import React from "react";
import ReactDOM from "react-dom";
import { text } from "./textOfComponents";

const Services = () => {
  return (
    <section className="page-section" id={`${text.Menu[0].toLowerCase()}`}>
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">
            {Object.keys(text.Services)[0]}
          </h2>
          <h3 className="section-subheading text-muted">
            {text.Services.Services}
          </h3>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary"></i>
              <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="my-3">{Object.keys(text.Services)[1]}</h4>
            <p className="text-muted">
              {text.Services[Object.keys(text.Services)[1]]}
            </p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary"></i>
              <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="my-3">{Object.keys(text.Services)[2]}</h4>
            <p className="text-muted">
              {text.Services[Object.keys(text.Services)[2]]}
            </p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary"></i>
              <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="my-3">{Object.keys(text.Services)[3]}</h4>
            <p className="text-muted">
              {text.Services[Object.keys(text.Services)[3]]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
