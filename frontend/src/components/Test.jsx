import React, { Component } from "react";
import ApiService from "../services/ApiService";

class ListTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mcq: [],
      user: "",
      rightlyAnsweredQues: "",
      wronglyAnsweredQues: "",
      totalQues: "",
      result: "",
      regDate: "",
      message: null,
    };

    // this.deleteQue = this.deleteQue.bind(this);
    // this.editQue = this.editQue.bind(this);
    // this.addQue = this.addQue.bind(this);
    this.reloadTest = this.reloadTest.bind(this);
  }

  componentDidMount() {
    fetch(ApiService.fetchTestByCategory().then((response) => response.json()));
    this.reloadTest();
  }

  reloadTest() {
    ApiService.fetchTestByCategory().then((res) => {
      this.setState({ mcq: res.data });
      console.log(this.state.mcq);
    });
    // UserService.getUsers().then(resp => {
    //     this.setState({ users: resp.data });
    //     console.log(this.state.users);
    // })
  }

  // deleteQue(queId) {
  //     queService.deleteQue(queId)
  //        .then(res => {
  //            this.setState({message : 'Question deleted successfully.'});
  //            this.setState({questions: this.state.questions.filter(question => question.id !== queId)});
  //        })

  // }

  // editQue(id) {
  //     window.localStorage.setItem("question_Id", id);
  //     this.props.history.push('/edit-question');
  // }

  // addQue() {
  //     window.localStorage.removeItem("question_Id");
  //     this.props.history.push('/add-question');
  // }

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
              <th className="hidden">Sr No</th>
              <th>Question</th>
              <th>Option A</th>
              <th>Option B</th>
              <th>Option C</th>
              <th>Option D</th>
            </tr>
          </thead>
          <tbody>
            {this.state.mcq.map((que) => (
              <tr key={que.questionID}>
                <td>{que.question}</td>
                <td>{que.optionA}</td>
                <td>{que.optionB}</td>
                <td>{que.optionC}</td>
                <td>{que.optionD}</td>
                <td className="hidden">{que.answer}</td>
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

export default ListTest;
