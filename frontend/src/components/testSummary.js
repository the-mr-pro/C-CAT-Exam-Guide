import React, { Component } from "react";
import { Link } from "react-router-dom";

class TestSummary extends Component {
  state = {};
  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-xl-6 rounded">
              <div class="card social-widget-card bg-primary">
                <div class="card-body">
                  <div class="row">
                    <div class="col-8">
                      <h3 class="text-white font-weight-bold m-0"> 5100 +</h3>
                      <span class="m-t-10">Question Available</span>
                    </div>
                    <div class="col-4">
                      <span class="ml-2">
                        <i class="fas fa-book"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-xl-6 rounded">
              <div class="card social-widget-card bg-danger">
                <div class="card-body">
                  <div class="row">
                    <div class="col-8">
                      <h3 class="text-white font-weight-bold m-0"> 2700 +</h3>
                      <span class="m-t-10">Students Registered</span>
                    </div>
                    <div class="col-4">
                      <span class="ml-2">
                        <i class="fas fa-users"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="jumbotron ">
            <div class="row justify-content-between">
              <div class="">
                <h3 class="font-weight-bold">
                  Welcome, <strong>Suraj</strong>
                  <span class="mx-2"></span>
                </h3>
              </div>
              <div class="col-4 justify-content-center m-auto">
                <a className="btn btn-link btn-block">
                  <Link to={"/dashboard"}>Back To Dashboard</Link>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="container mt-n5">
          <div class="row justify-content-center">
            <div class="col-xl-8 col-md-10">
              <div class="card table-card">
                <div class="card-header">
                  <h5>
                    <i class="fas fa-chart-bar"></i>
                    Statistics Summary
                  </h5>
                </div>
                <div class="card-body">
                  <div class="col-lg-12">
                    <div class="card shadow-base card-body pd-25 bd-0">
                      <div class="row">
                        <div class="col-sm-6">
                          <p class="display-4 tx-medium tx-inverse mg-b-5 tx-lato">
                            <span>8/10</span>
                          </p>
                          <div class="progress mg-b-10">
                            <div
                              role="progressbar"
                              aria-valuenow="60"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              class="progress-bar rounded wd-30p bg-danger"
                            ></div>
                          </div>
                          <div class="test-report-icon report_rank">
                            <div class="rank-circle mb-5">
                              <span class="mx-2">
                                <i class="fas fa-award"></i>
                              </span>
                              <span class="text-danger h5 mx-0">
                                <b>Percentage :</b>80%
                              </span>
                            </div>
                          </div>
                          <div class="row mt-2">
                            <div class="col-6 col-md-6 text-center my-2">
                              <p class="text-muted m-b-5 f-12">
                                {" "}
                                Total Question :
                              </p>
                              <h6 class="f-w-600"> 10</h6>
                            </div>
                            <div class="col-6 col-md-6 text-center my-2">
                              <p class="text-muted m-b-5 f-12">
                                <i class="fas fa-clock"></i> Attempted On :
                              </p>
                              <h6 class="f-w-10013p"> 2021-03-27</h6>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6 mg-t-20 mg-sm-t-0 d-flex align-items-center justify-content-center">
                          <div class="chartjs-size-monitor">
                            <div class="chartjs-size-monitor-expand">
                              <div class=""></div>
                            </div>
                            <div class="chartjs-size-monitor-shrink">
                              <div class=""></div>
                            </div>
                          </div>
                          <canvas
                            class="mt-5"
                            id="myChart2"
                            width="582"
                            height="560"
                          ></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TestSummary;
