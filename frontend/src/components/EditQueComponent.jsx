import React, { Component } from 'react'
import queService from "../services/queService";

class EditQueComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            questionID:'',
            question:'',
            mcqCategory:'',
            optionA:'',
            optionB:'',
            optionC:'',
            optionD:'',
            answer:'',
        }
        this.saveQue = this.saveQue.bind(this);
        this.loadQue = this.loadQue.bind(this);
    }

    componentDidMount() {
        this.loadQue();
    }

    loadQue() {
        queService.fetchQueById(window.localStorage.getItem("question_id")) 
            .then((res) => {
                let question = res.data;
                this.setState({
                questionID: question.questionID,
                question: question.question,
                mcqCategory: question.mcqCategory,
                optionA: question.optionA,
                optionB: question.optionB,
                optionC: question.optionC,
                optionD: question.optionD,
                answer: question.answer,
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveQue = (e) => {
        e.preventDefault();
        let question = {
            questionID: this.state.questionID,
            question: this.state.question,
            mcqCategory: this.state.mcqCategory,
            optionA: this.state.optionA, 
            optionB: this.state.optionB, 
            optionC: this.state.optionC, 
            optionD: this.state.optionD,
            answer: this.state.answer 
        };
        queService.editQue(question)
            .then(res => {
                this.setState({message : 'Question added successfully.'});
                this.props.history.push('/queList');
            });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Edit Question</h2>
                <form>

                    <div className="form-group">
                        <label>Question:</label>
                        <input type="text" placeholder="question" name="question" className="form-control" readonly="true" defaultValue={this.state.question}/>
                    </div>

                    <div className="form-group">
                        <label>Category:</label>
                        <input placeholder="Category" name="mcqCategory" className="form-control" value={this.state.mcqCategory} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Option A:</label>
                        <input placeholder="Option A" name="optionA" className="form-control" value={this.state.optionA} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Option B:</label>
                        <input placeholder="Option A" name="optionB" className="form-control" value={this.state.optionB} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Option C:</label>
                        <input placeholder="Option A" name="optionC" className="form-control" value={this.state.optionC} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Option D:</label>
                        <input placeholder="Option A" name="optionD" className="form-control" value={this.state.optionD} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Answer:</label>
                        <input placeholder="Answer" name="answer" className="form-control" value={this.state.answer} onChange={this.onChange}/>
                    </div>

                    <button className="btn btn-success" onClick={this.saveQue}>Save</button>
                </form>
            </div>
        );
    }
}

export default EditQueComponent;