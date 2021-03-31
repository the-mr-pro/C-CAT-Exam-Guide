import React, { Component, useEffect } from "react";
import ApiService from "../services/ApiService";
import { Link } from "react-router-dom";
import axios from "axios";

const Question = (props) => (
  props.questions.question,
  props.questions.mcqCategory,
  props.questions.optionA,
  props.questions.optionB,
  props.questions.optionC,
  props.questions.optionD,
  props.questions.answer
);
export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = { questions: [], mcq: [] };
  }

  componentDidMount() {
    ApiService.fetchTestByCategory(window.localStorage.getItem("cat_name"))
      .then((response) => {
        this.setState({
          questions: response.data,
        });
        console.log(this.state.questions);
        this.setState({ mcq: this.state.questions.mcq });
      })
      .catch(function (error) {
        window.localStorage.removeItem("cat_name");
        console.log(error);
      });
  }
  List() {
    return this.state.question.map(function (currentQues, i) {
      return <Question question={currentQues} key={i} />;
    });
  }

  state = {};
  render() {
    return (
      <div class="container mt-4">
        <style>{"body { background-color: {bgImg}; }"}</style>
        <div class="sticky-top">
          <div class="bg-dark">
            <div class="alert alert-success mb-n2" role="alert">
              <p class="text-center">
                <b>
                  {" "}
                  Time Alloted : <strong>60</strong>&nbsp; Mins{" "}
                </b>
              </p>
            </div>
            {/* <div class="alert alert-danger" role="alert">
              <p class="text-center">
                Time Elapsed : <strong>displayTimeElapsed()</strong>
              </p>
            </div> */}
          </div>
        </div>

        <h1 class="text-center my-3">Section A</h1>
        <form
          myForm="ngForm"
          ngSubmit="submitTest(myForm)"
          novalidate
          name="form"
          id="form"
        >
          <div
            class="form-check p-3 my-3 bg-secondary"
            ngFor="let quiz of quizList; let i = index"
          >
            {this.state.mcq.map((question) => (
              <form>
                <div key={question.questionID}>
                  <label class="form-check-label text-white">
                    <h6 class="text-white">Q. {question.question}</h6>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                      type="radio"
                      class="form-check-input"
                      value="A"
                      name="{{quiz.questionID}}"
                      ngModel
                    />
                    A. {question.optionA}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                      type="radio"
                      class="form-check-input"
                      value="B"
                      name="{{quiz.questionID}}"
                      ngModel
                    />
                    B. {question.optionB}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                      type="radio"
                      class="form-check-input"
                      value="C"
                      name="{{quiz.questionID}}"
                      ngModel
                    />
                    C. {question.optionC}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                      type="radio"
                      class="form-check-input"
                      value="D"
                      name="{{quiz.questionID}}"
                      ngModel
                    />
                    D. {question.optionD}
                    <hr />
                  </label>
                </div>
              </form>
            ))}
          </div>

          <br />

          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="m-2">
                {/* <button
                  submitButton
                  onClick="location.href='http://www.example.com'"
                  ngIf="showButton"
                  id="formId"
                  type="submit"
                  class="btn btn-lg btn-block btn-success"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  Submit
                </button> */}
                <div class="btn btn-lg btn-block btn-warning">
                  <a className="btn btn-link btn-block">
                    <Link to={"/dashboard"}>Submit</Link>
                    {/* alert("Test Submitted..") */}
                  </a>
                  
                </div>
              </div>
              {/* <div ngIf="examSubmitted" class="m-2">
                <a
                  class="btn btn-lg btn-block btn-warning"
                  href="user/test-history/{{this.testId}}"
                >
                  Test Summary
                </a>
              </div>
              <div ngIf="examSubmitted" class="m-2">
                <button
                  type="button"
                  class="btn btn-lg btn-block btn-primary"
                  onClick="goToDashboard()"
                >
                  Dashboard
                </button>
              </div> */}
              <div class="">
                <button
                  myButton
                  id="refresh"
                  class="btn- fa fa-refresh"
                  aria-hidden="true"
                  value="referesh"
                  onClick="triggerClick()"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  &nbsp; Refresh
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
