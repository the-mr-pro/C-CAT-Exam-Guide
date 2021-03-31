import React, { Component } from "react";
import cdac from "../C-DAC.png";
import back from "../computer-test.jpg";
import Logo from "../logo.jpg";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="container ">
        <header className="jumbotron text-center">
          <img src={Logo} alt="Logo" height="100" />
          <div className="jumbotron jumbotron-fluid my-2">
            <h4 className="text-center">Try Some Topic-wise Tests...</h4>
            <div className="container-fluid">
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-lg-4">
                    <div className="card mb-3">
                      <h5 className="card-header bg-dark text-white font-weight-bold text-center">
                        Section : A
                      </h5>
                      <div className="card-body">
                        <div className="card-text">
                          <ul className="list-group list-group-flush px-2">
                            <li className="list-group-item text-center">
                              English
                            </li>
                            <li className="list-group-item text-center">
                              Quantitative Aptitude
                            </li>
                            <li className="list-group-item text-center">
                              Logical Reasoning
                            </li>
                            <li className="list-group-item text-center">
                              Analytical Reasoning
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-footer">
                        <a className="btn btn-link btn-block">
                          <Link to={"/practice"}>Practice MCQ's</Link>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card mb-3">
                      <h5 className="card-header bg-dark text-white font-weight-bold text-center">
                        Section : B
                      </h5>
                      <div className="card-body">
                        <div className="card-text">
                          <ul className="list-group list-group-flush px-2">
                            <li className="list-group-item text-center">
                              C Programming Language
                            </li>
                            <li className="list-group-item text-center">
                              Data Structure
                            </li>
                            <li className="list-group-item text-center">
                              Operating System
                            </li>
                            <li className="list-group-item text-center">
                              OOPS Concepts
                            </li>
                            <li className="list-group-item text-center">
                              Computer Fundamentals
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-footer">
                        <a className="btn btn-link btn-block">
                          <Link to={"/practice"}>Practice MCQ's</Link>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card mb-3">
                      <h5 className="card-header bg-dark text-white font-weight-bold text-center">
                        Section : C
                      </h5>
                      <div className="card-body">
                        <div className="card-text">
                          <ul className="list-group list-group-flush px-2">
                            <li className="list-group-item text-center">
                              Micro-Processor
                            </li>
                            <li className="list-group-item text-center">
                              Digital Electronics
                            </li>
                            <li className="list-group-item text-center">
                              Computer Architecture
                            </li>
                            <li className="list-group-item text-center">
                              Electronic Devices & Circuits
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-footer">
                        <a className="btn btn-link btn-block">
                          <Link to={"/practice"}>Practice MCQ's</Link>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="justify-content-center">
          <img src={back} alt="Logo" width="1085" />
        </div>
        <div className="row">
          <div className="col-lg-6 my-auto">
            <img src={cdac} className="img-fluid" alt="cdac_logo" />
          </div>

          <div className="col-lg-6 d-flex flex-column justify-content-center p-5">
            <div className="icon-box">
              <div className="icon">
                <i className="fa fa-edit"></i>
              </div>
              <h4>
                <Link to={"/about-ccat"}>What is C-CAT Exam?</Link>
              </h4>
              <p className="description">
                CDAC C-CAT is Computerized Common Admission Test, conducted by
                the Centre for Development of Advanced Computing (CDAC). This
                exam is conducted twice a year to offer admissions to the
                aspiring candidates into various PG diploma courses.
              </p>
            </div>

            <div className="icon-box">
              <div className="icon">
                <i className="fa fa-desktop"></i>
              </div>
              <h4>
                <Link to={"/c-cat/eligibility"}>
                  Eligibility for CDAC C-CAT Exam
                </Link>
              </h4>
              <p className="description">
                A candidate must be a Graduate or a Post Graduate in engineering
                or equivalent sciences.
              </p>
            </div>
          </div>
        </div>

        <section className="services">
          <div className="container">
            <div className="row ">
              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch"
                data-aos="fade-up"
              >
                <div className="icon-box icon-box-pink">
                  <div className="icon">
                    <i className="fa fa-check-square-o"></i>
                  </div>
                  <h4>
                    <Link to={"/practice"}>MCQ's</Link>
                  </h4>
                  <p className="description">
                    Here you can practice 100+ MCQ's to perform better in C-CAT
                    Exams-2021{" "}
                  </p>
                </div>
              </div>

              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon-box icon-box-cyan">
                  <div className="icon">
                    <i className="fa fa-tasks"></i>
                  </div>
                  <h4>
                    <Link to={"/syllabus"}>Syllabus</Link>
                  </h4>
                  <p className="description">
                    We provide you detailed syllabus for C-CAT exam
                  </p>
                </div>
              </div>

              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="icon-box icon-box-green">
                  <div className="icon">
                    <i className="fa fa-sticky-note-o"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Notes</a>
                  </h4>
                  <p className="description">
                    We provide you some that help you to crack the exam
                  </p>
                </div>
              </div>

              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="icon-box icon-box-blue">
                  <div className="icon">
                    <i className="fa fa-book"></i>
                  </div>
                  <h4>
                    <Link to={"/e-book"}>E-Book</Link>
                  </h4>
                  <p className="description">
                    Here you can find all C-CAT subject's Ebooks which is
                    recommended by CDAC
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
