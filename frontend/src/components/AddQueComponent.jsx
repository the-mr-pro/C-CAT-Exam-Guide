import React, { Component } from "react";
import queService from "../services/queService";

class AddQueComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      mcqCategory: "",
      optionA: "",
      optionB: "",
      optionC: "",
      optionD: "",
      answer: "",
      message: null,
    };
    this.saveQue = this.saveQue.bind(this);
  }

  saveQue = (e) => {
    e.preventDefault();
    let que = {
      question: this.state.question,
      mcqCategory: this.state.mcqCategory,
      optionA: this.state.optionA,
      optionB: this.state.optionB,
      optionC: this.state.optionC,
      optionD: this.state.optionD,
      answer: this.state.answer,
    };
    queService.addQue(que).then((res) => {
      this.setState({ message: "Question added successfully." });
      this.props.history.push("/queList");
      alert("Question Added...");
    });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <h2 className="text-center">Add Question</h2>
        <form>
          <div className="form-group">
            <label>Question:</label>
            <input
              type="text"
              placeholder="Enter Question here"
              name="question"
              className="form-control"
              value={this.state.question}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Category:</label>
            <input
              type="text"
              placeholder="Enter Category here"
              name="mcqCategory"
              className="form-control"
              value={this.state.mcqCategory}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Option A:</label>
            <input
              type="text"
              placeholder="Enter Option A here"
              name="optionA"
              className="form-control"
              value={this.state.optionA}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Option B:</label>
            <input
              type="text"
              placeholder="Enter Option B here"
              name="optionB"
              className="form-control"
              value={this.state.optionB}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Option C:</label>
            <input
              type="text"
              placeholder="Enter Option C here"
              name="optionC"
              className="form-control"
              value={this.state.optionC}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Option D:</label>
            <input
              type="text"
              placeholder="Enter Option D here"
              name="optionD"
              className="form-control"
              value={this.state.optionD}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Answers:</label>
            <input
              type="text"
              placeholder="Enter Answer here"
              name="answer"
              className="form-control"
              value={this.state.answer}
              onChange={this.onChange}
            />
          </div>

          <button className="btn btn-success" onClick={this.saveQue}>
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default AddQueComponent;
