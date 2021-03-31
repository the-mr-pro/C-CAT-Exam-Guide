import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import ApiService from "../services/ApiService";

const required = (value) => {
  if (!value)
    return (
      <div className="alert alert-danger" role="alert">
        This feild is required!
      </div>
    );
};
class StartExam extends Component {
  constructor(props) {
    super(props);
    this.handleExam = this.handleExam.bind(this);
    this.onChangeExam = this.onChangeExam.bind(this);

    this.state = {
      mcqCategory: "",
      test: [],
      message: "",
    };
  }
  onChangeExam(e) {
    ///console.log(e);
    this.setState({
      mcqCategory: e.target.value,
    });
  }

  handleExam(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      /* ApiService.fetchTestByCategory(this.state.mcqCategory).then(
        (response) => {
          this.setState({ test: response.data });*/
      this.state.mcqCategory !== null &&
        window.localStorage.setItem("cat_name", this.state.mcqCategory);
      //);
      console.log(JSON.stringify(this.state.mcqCategory));
      this.props.history.push({
        pathname: "/test",
        // state: {details:response.data }
      });
      // },
      /*
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage,
          });
        }
      );*/
    } else {
      this.setState({
        loading: false,
      });
    }
  }
  render() {
    return (
      <div className="instaruction-page-wrapper">
        <div className="instruction-page-inner">
          <h2>General Instructions:</h2>
          <h5>1. All questions are compulsory.</h5>
          <h5>2. You can bookmark any question.</h5>
          <h5>3. Answers can be updated anytime before the time limit.</h5>
          <h5>
            4. This test is time bound,there's a timer on the right panel if you
            are using 'desktop'.
          </h5>
          <h5>
            5. Click on 'End Test' button to submit test before time limit.{" "}
          </h5>
          <h5>
            5. Click on 'Question panel' button to view timer and 'End Test'
            button if you are using 'Mobile'.{" "}
          </h5>
          <h5>
            6. You can directly go to any question by clicking on particular
            question for desktop.
          </h5>
          <h5>
            7. For Mobile users you can click on particular question and then
            close 'Toolbar' panel to access particular question.
          </h5>
          <h5>
            8. The test will be automatically submitted when the clock reads
            0:0.
          </h5>
          <h4>
            <b>NOTE :</b>To save answers,click on the 'Next' button.
          </h4>
        </div>

        <div className="col-md-12">
          <div className="card card-container">
            <Helmet>
              <style>{"body { background-color: grey; }"}</style>
            </Helmet>
            <h4>Select Exam</h4>
            <hr />
            <Form
              onSubmit={this.handleExam}
              ref={(c) => {
                this.form = c;
              }}
            >
              <div className="form-group">
                <label htmlFor="mcqCategory">Select Category</label>
                <Input
                  type="text"
                  className="form-control"
                  name="id"
                  value={this.state.mcqCategory}
                  onChange={this.onChangeExam}
                  validateAll={this.mcqCategory}
                />
              </div>
              <div className="form-group">
                <button
                  className="btn btn-primary btn-block"
                  disabled={this.state.loading}
                >
                  {this.state.loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Submit</span>
                </button>
              </div>

              {this.state.message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {this.state.message}
                  </div>
                </div>
              )}
              <CheckButton
                style={{ display: "none" }}
                ref={(c) => {
                  this.checkBtn = c;
                }}
              />
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default StartExam;

/*import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

class Exam  extends Component {
  
    state = {  }
    render() { 
        return ( 
            <div>
                <Helmet>
                  <style>{'body { background-color: skyblue; }'}</style>
                </Helmet>
                <h4>Welcome To C-CAT Exam!!!</h4>
                <hr/>
                <h5>Guideline for Exam</h5>
                
     </div>
         );
    }
}
 
export default Exam;*/
