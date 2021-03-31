import React, { Component } from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

import ApiService from "../services/ApiService";
class EditExam extends Component {
constructor (props){
    super(props);
    
    this.state={
    eId:'',
    ExamName:'',
    TotalMark:'',
    TotalQuestion:'',
    MarkPerQuestion:'',
    ScheduleDate:'',
    exam_completed:false
}
this.saveExam=this.saveExam.bind(this);
this.loadExam=this.loadExam.bind(this);
}
componentDidMount() {
    this.loadExam();
}
loadExam() {
    ApiService.fetchExamById(window.localStorage.getItem("id"))
        .then((res) => {
            let exam = res.data.result;
            this.setState({
            eId: exam.eId,
            ExamName: exam.ExamName,
            TotalMark:exam.TotalMark,
             TotalQuestion:exam.TotalQuestion,
             MarkPerQuestion:exam.MarkPerQuestion,
              ScheduleDate:exam.ScheduleDate
            })
        });
}
saveExam = (e) => {
    e.preventDefault();
    let exam = {eId:this.state.eId,ExamName: this.state.ExamName,TotalMark:this.state.TotalMark, TotalQuestion: this.state.TotalQuestion, MarkPerQuestion: this.state.MarkPerQuestion, ScheduleDate: this.state.ScheduleDate};
    ApiService.addExam(exam)
        .then(res => {
            this.setState({message : 'Exam added successfully.'});
            this.props.history.push('/exam');
        });
}

onChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });

render(){
    return(
        <div className="col-md-12">
        <div className="card card-container">
          <h2>Edit Exam</h2>
          <Form
          onSubmit={this.onSumbit}>
                <div className="form-group">
                  <label htmlFor="eId">Exam Id</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="eId"
                    value={this.state.eId}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                <label htmlFor="ExamName">Exam Name</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="ExamName"
                    value={this.state.eId}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="TotalMark">TotalMark</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="TotalMark"
                    value={this.state.TotalMark}
                    onChange={this.onChange} 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="TotalQuestion">Total Question</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="TotalQuestion"
                    value={this.state.TotalQuestion}
                    onChange={this.onChange} 
                  />
                  
                <div className="form-group">
                  <label htmlFor="MarkPerQuestion">Mark per Question</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="MarkPerQuestion"
                    value={this.state.MarkPerQuestion}
                    onChange={this.onChange} 
                  />
                  
                </div>
                <div className="form-group">
                  <label htmlFor="ScheduleDate">Schedule Date</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="ScheduleDate"
                    value={this.state.ScheduleDate}
                    onChange={this.onChange} 
                  />
                </div>
                

                <div className="form-group">
                  <button className="btn btn-primary btn-block">Save</button>
                </div>
             </div>
             </Form>
             </div>
             </div>
        
    )};
    }

export default EditExam;

