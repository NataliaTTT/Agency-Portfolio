import React from "react";
import ReactDOM from "react-dom";
import { text, portofolio } from "./textOfComponents";

const Portofolio = () => {
  return (
    <section
      className="page-section bg-light"
      id={`${text.Menu[1].toLowerCase()}`}
    >
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">
            {Object.keys(portofolio)[0]}
          </h2>
          <h3 className="section-subheading text-muted">
            {portofolio[Object.keys(portofolio)[0]]}
          </h3>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
              <a
                className="portfolio-link"
                data-bs-toggle="modal"
                href="#portfolioModal1"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="assets/img/portfolio/1.jpg"
                  alt="..."
                />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">
                  {portofolio[Object.keys(portofolio)[1]][0]}
                </div>
                <div className="portfolio-caption-subheading text-muted">
                  {portofolio[Object.keys(portofolio)[1]][1]}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
              <a
                className="portfolio-link"
                data-bs-toggle="modal"
                href="#portfolioModal2"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="assets/img/portfolio/2.jpg"
                  alt="..."
                />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">
                  {portofolio[Object.keys(portofolio)[2]][0]}
                </div>
                <div className="portfolio-caption-subheading text-muted">
                  {portofolio[Object.keys(portofolio)[2]][1]}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
              <a
                className="portfolio-link"
                data-bs-toggle="modal"
                href="#portfolioModal3"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="assets/img/portfolio/3.jpg"
                  alt="..."
                />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">
                  {portofolio[Object.keys(portofolio)[3]][0]}
                </div>
                <div className="portfolio-caption-subheading text-muted">
                  {portofolio[Object.keys(portofolio)[3]][0]}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
            <div className="portfolio-item">
              <a
                className="portfolio-link"
                data-bs-toggle="modal"
                href="#portfolioModal4"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="assets/img/portfolio/4.jpg"
                  alt="..."
                />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">
                  {portofolio[Object.keys(portofolio)[4]][0]}
                </div>
                <div className="portfolio-caption-subheading text-muted">
                  {portofolio[Object.keys(portofolio)[4]][1]}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
            <div className="portfolio-item">
              <a
                className="portfolio-link"
                data-bs-toggle="modal"
                href="#portfolioModal5"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="assets/img/portfolio/5.jpg"
                  alt="..."
                />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">
                  {portofolio[Object.keys(portofolio)[5]][0]}
                </div>
                <div className="portfolio-caption-subheading text-muted">
                  {portofolio[Object.keys(portofolio)[5]][1]}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="portfolio-item">
              <a
                className="portfolio-link"
                data-bs-toggle="modal"
                href="#portfolioModal6"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="assets/img/portfolio/6.jpg"
                  alt="..."
                />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">
                  {portofolio[Object.keys(portofolio)[6]][0]}
                </div>
                <div className="portfolio-caption-subheading text-muted">
                  {portofolio[Object.keys(portofolio)[6]][1]}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Portofolio;
