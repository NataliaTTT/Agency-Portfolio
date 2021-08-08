import React from "react";
import ReactDOM from "react-dom";
import { text, team } from "./textOfComponents";

const Team = () => {
  return (
    <section
      className="page-section bg-light"
      id={`${text.Menu[3].toLowerCase()}`}
    >
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">
            {team[Object.keys(team)[0]][0]}
          </h2>
          <h3 className="section-subheading text-muted">
            {team[Object.keys(team)[0]][1]}
          </h3>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="team-member">
              <img
                className="mx-auto rounded-circle"
                src="assets/img/team/1.jpg"
                alt="..."
              />
              <h4>{Object.keys(team)[1]}</h4>
              <p className="text-muted">{team[Object.keys(team)[1]]}</p>
              <a className="btn btn-dark btn-social mx-2" href="#!">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-dark btn-social mx-2" href="#!">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-dark btn-social mx-2" href="#!">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-member">
              <img
                className="mx-auto rounded-circle"
                src="assets/img/team/2.jpg"
                alt="..."
              />
              <h4> {Object.keys(team)[2]}</h4>
              <p className="text-muted">{team[Object.keys(team)[2]]}</p>
              <a className="btn btn-dark btn-social mx-2" href="#!">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-dark btn-social mx-2" href="#!">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-dark btn-social mx-2" href="#!">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-member">
              <img
                className="mx-auto rounded-circle"
                src="assets/img/team/3.jpg"
                alt="..."
              />
              <h4>{Object.keys(team)[3]}</h4>
              <p className="text-muted">{team[Object.keys(team)[3]]}</p>
              <a className="btn btn-dark btn-social mx-2" href="#!">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-dark btn-social mx-2" href="#!">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-dark btn-social mx-2" href="#!">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <p className="large text-muted">{team[Object.keys(team)[4]]}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
