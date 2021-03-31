import React, { Component } from "react";
import queService from "../services/queService";

class ListQueComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      message: null,
    };
    this.deleteQue = this.deleteQue.bind(this);
    this.editQue = this.editQue.bind(this);
    this.addQue = this.addQue.bind(this);
    this.reloadQueList = this.reloadQueList.bind(this);
  }

  componentDidMount() {
    this.reloadQueList();
  }

  reloadQueList() {
    queService.fetchQue().then((res) => {
      this.setState({ questions: res.data });
      console.log(this.state.quetions);
    });
    // UserService.getUsers().then(resp => {
    //     this.setState({ users: resp.data });
    //     console.log(this.state.users);
    // })
  }

  deleteQue(queId) {
    queService.deleteQue(queId).then((res) => {
      this.setState({ message: "Question deleted successfully." });
      this.setState({
        questions: this.state.questions.filter(
          (question) => question.questionID !== queId
        ),
      });
      alert("Question Deleted...");
    });
  }

  editQue(id) {
    window.localStorage.setItem("question_id", id);
    this.props.history.push("/edit-question");
  }

  addQue() {
    window.localStorage.removeItem("question_Id");
    this.props.history.push("/add-question");
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Question Details</h2>
        <button
          className="btn btn-danger"
          style={{ width: "100px" }}
          onClick={() => this.addQue()}
        >
          {" "}
          Add Question
        </button>
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="hidden">Question</th>

              <th>Option A</th>
              <th>Option B</th>
              <th>Option C</th>
              <th>Option D</th>
              <th>Answer</th>
            </tr>
          </thead>
          <tbody>
            {this.state.questions.map((que) => (
              <tr key={que.questionID}>
                <td>{que.question}</td>
                <td>{que.optionA}</td>
                <td>{que.optionB}</td>
                <td>{que.optionC}</td>
                <td>{que.optionD}</td>
                <td>{que.answer}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => this.deleteQue(que.questionID)}
                  >
                    {" "}
                    Delete
                  </button>
                  <button
                    className="btn btn-success"
                    onClick={() => this.editQue(que.questionID)}
                    style={{ marginLeft: "20px" }}
                  >
                    {" "}
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListQueComponent;
