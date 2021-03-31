
import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardAdmin from "./components/board-admin.component";
import StartExam from "./components/start.exam";
import AboutCCAT from "./components/about-ccat";
import Eligibility from "./components/eligibility";
import AboutUs from "./components/about-us";
import Syllabus from "./components/syllabus";
import Ebook from "./components/ebooks";
import Test from "./components/test";
import TestDemo from "./components/TestDemo";
import footer from "./components/footer";
import ListQueComponent from "./components/ListQueComponent";
import AddQueComponent from "./components/AddQueComponent";
import EditQueComponent from "./components/EditQueComponent";
import dashboard from "./components/dashboard";
import TestSummary from "./components/testSummary";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
     
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.role.includes("ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser,  showAdminBoard } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
         <h4>C-CAT Mentor</h4>
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
          
           </div>

           {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.email}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path="/startExam" component={StartExam} />
            <Route path="/queList" component={ListQueComponent} />
            <Route path="/add-question" component={AddQueComponent} />
            <Route path="/about-ccat" component={AboutCCAT}/>
            <Route path="/c-cat/eligibility" component={Eligibility}/>
            <Route path= "/about-us" component={AboutUs}/>
            <Route path= "/syllabus" component={Syllabus}/>
            <Route path= "/e-book" component={Ebook}/>
            <Route path= "/test" component={Test}/>
            <Route path= "/practice" component={TestDemo}/>
            <Route path= "/edit-question" component={EditQueComponent}/>
            <Route path= "/dashboard" component={dashboard}/>
            <Route path= "/summary" component={TestSummary}/>
          </Switch>
        </div>
        <footer></footer>
      </div>

      
    );
  }
}

export default App;
