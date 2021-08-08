import React from "react";
import ReactDOM from "react-dom";
import { text, about } from "./textOfComponents";

const About = () => {
  return (
    <section className="page-section" id={`${text.Menu[2].toLowerCase()}`}>
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">
            {Object.keys(about)[0]}
          </h2>
          <h3 className="section-subheading text-muted">
            {about[Object.keys(about)[0]]}
          </h3>
        </div>
        <ul className="timeline">
          <li>
            <div className="timeline-image">
              <img
                className="rounded-circle img-fluid"
                src="assets/img/about/1.jpg"
                alt="..."
              />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>{Object.keys(about)[1]}</h4>
                <h4 className="subheading">
                  {" "}
                  {about[Object.keys(about)[1]][0]}
                </h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">{about[Object.keys(about)[1]][1]}</p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <img
                className="rounded-circle img-fluid"
                src="assets/img/about/2.jpg"
                alt="..."
              />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>{Object.keys(about)[2]}</h4>
                <h4 className="subheading">
                  {" "}
                  {about[Object.keys(about)[2]][0]}
                </h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">{about[Object.keys(about)[2]][1]}</p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-image">
              <img
                className="rounded-circle img-fluid"
                src="assets/img/about/3.jpg"
                alt="..."
              />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>{Object.keys(about)[3]}</h4>
                <h4 className="subheading">
                  {about[Object.keys(about)[3]][0]}
                </h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">{about[Object.keys(about)[3]][1]}</p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <img
                className="rounded-circle img-fluid"
                src="assets/img/about/4.jpg"
                alt="..."
              />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>{Object.keys(about)[4]}</h4>
                <h4 className="subheading">
                  {about[Object.keys(about)[4]][0]}
                </h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">{about[Object.keys(about)[4]][1]}</p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <h4>
                {about.slogan[0]}
                <br />
                {about.slogan[1]}
                <br />
                {about.slogan[2]}
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default About;
