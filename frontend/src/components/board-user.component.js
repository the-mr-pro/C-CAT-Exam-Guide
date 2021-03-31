import React, { Component } from "react";
import imgbg from "../MAT-Exam.jpg";
import{Link}from "react-router-dom"
import UserService from "../services/user.service";
import startExam from "../components/start.exam";
export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getUserBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
        <div className="container" >
        <header className="jumbotron">
          <h3>Welcome To C-CAT Exam</h3>
          <div className="navbar-nav mr-auto">
            
            <div className="nav-item" >
              <Link to={"/startExam"} className="nav-link" align="center" background-color= "green">
                Start Exam
              </Link>
            </div>
            {/* <div className="nav-item">
              <Link to={"/result"} className="nav-link">
                Result
              </Link>
            </div> */}
           </div>
          <img src={imgbg} auto="imgbg" width="1010" height="1500"/>
      </header>
      </div>

    );
  }
}
