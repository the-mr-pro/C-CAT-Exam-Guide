import React, { Component } from 'react';
import { Link } from "react-router-dom";

class dashboard extends Component {
    state = {  }
    render() { 
        return ( <div>
            <div class="container">
    <div class="row">
        <div class="col-md-6 col-xl-6 rounded">
            <div class="card social-widget-card bg-primary">
                <div class="card-body">
                    <div class="row">
                        <div class="col-8">
                            <h3 class="text-white font-weight-bold"> 5100 +</h3>
                            <span class="m-t-10">Question Available</span>
                        </div>
                        <div class="col-4">
                            <span class="ml-2"><i class="fas fa-book"
                                   ></i></span>
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
                            <h3 class="text-white font-weight-bold "> 2700 +</h3>
                            <span class="m-t-10">Students Registered</span>
                        </div>
                        <div class="col-4">
                            <span class="ml-2"><i class="fas fa-users"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

            <div class="container">
    <div class="jumbotron">
        <h3 class="font-weight-bold">Welcome, <strong>Suraj</strong><span class="mx-2"></span>
        </h3>
    </div>
</div>


<div class="container mt-n5">
    <div class="row justify-content-center">
        <div class="col-md-6 col-xl-6 rounded">


            <div ngFor="let test of userTests; let i = index" class="card mb-5">
                <div class="card-body">
                    <div class="row">
                        <div class="col-3">
                            <span class="ml-2"><i class="fas fa-calendar-alt"
                                    ></i></span>

                        </div>
                        <div class="col-5">
                            <h5 class="text-success font-weight-light m-0">Test Attempted&nbsp; 1
                            </h5> <br/>
                            <span class="">Date : 2021-03-27</span>

                        </div>
                        <div class="col-4 justify-content-center m-auto">
                        <a className="btn btn-link btn-block" ><Link to={"/summary"}>Test Summary</Link></a>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    </div>
</div>




<div class="container mt-n5">
    <div class="row justify-content-center">
        <div class="col-md-6 col-xl-6 rounded">


            <div ngFor="let test of userTests; let i = index" class="card mb-5">
                <div class="card-body">
                    <div class="row">
                        <div class="col-3">
                            <span class="ml-2"><i class="fas fa-calendar-alt"
                                    ></i></span>

                        </div>
                        <div class="col-5">
                            <h5 class="text-success font-weight-light m-0">Test Attempted&nbsp; 2
                            </h5> <br/>
                            <span class="">Date : 2021-03-27</span>

                        </div>
                        <div class="col-4 justify-content-center m-auto">
                        <a className="btn btn-link btn-block" ><Link to={"/summary"}>Test Summary</Link></a>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    </div>
</div>




<div class="container mt-5 mb-5">
    <div class="row">
        <div class="col-md-10">
            <canvas class="mt-5" id="myChart2" width="400px" height="400px"></canvas>
        </div>
    </div>
</div>
</div>
         );
    }
}
 
export default dashboard;