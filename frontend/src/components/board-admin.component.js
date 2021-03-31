import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserService from "../services/user.service";
import bgImg from "../Sainik.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
export default class BoardAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
    };
  }

  componentDidMount() {
    UserService.getAdminBoard().then(
      (response) => {
        this.setState({
          content: response.data,
        });
      },
      (error) => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString(),
        });
      }
    );
  }

  render() {
    return (
      <div class="container">
        <div class="row content">
          <div class="col-sm-3 sidenav">
            <nav className="navbar navbar-inverse">
              <Link to={"/"} className="navbar-brand">
                C-CAT Mentor
              </Link>
              <div className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/queList"} className="nav-link">
                    Question List
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/addque"} className="nav-link">
                    Add Question
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/deleteque"} className="nav-link">
                    Delete Question
                  </Link>
                </li>
              </div>
            </nav>
          </div>
          <img src={bgImg} alt="Logo" background-size="100%" height="800" />
        </div>
      </div>
    );
  }
}
