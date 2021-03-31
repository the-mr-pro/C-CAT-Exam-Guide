import e from 'cors';
import React, { Component } from 'react';
import ApiService from '../services/ApiService';
import queService from "../services/queService";


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

class TestDemo extends Component {

    constructor(props) {
        super(props)
        this.state = {
           //score=0,
            questions: [],
            message: null
        }
        
        this.reloadQueList = this.reloadQueList.bind(this);
        
    }
    
   

    componentDidMount() {
        this.reloadQueList();
      
    }

    reloadQueList() {
        queService.fetchQue()
            .then((res) => {
                this.setState({questions: res.data})
                console.log(this.state.quetions);
            });

  

    }


    render() {
        return (
            <div>
                <form Onsubmit={this.Onsubmit}>

                <div class="sticky-top">
                    <div class="bg-dark">
                        <div class="alert alert-success mb-n1" role="alert">
                            <p class="text-center" > <b>Practice Mcq </b></p>
                        </div>
                    </div>
                 </div>
                
                
                
<div class="container mt-4">
    <style>{'body { background-color: {bgImg}; }'}</style>


            
            <form myForm="ngForm" ngSubmit="submitTest(myForm)" novalidate name="form" id="form">

            <div class="form-check p-3 my-3 bg-white" ngFor="let quiz of quizList; let i = index">
            <label class="form-check-label text-black">

            
                    <div className="container">
                        
                        
                    {  this.state.questions.map(
                        que =>  
                                       <div key={que.questionID}>
                                    <p><b>Question:</b> {que.question}</p>
                                    <form>
                                        <fieldset>
                                       <p><input type="radio" class="form-check-input" value="A" name="option"/>{que.optionA}</p>
                                       <p><input type="radio" class="form-check-input" value="B" name="option"/>{que.optionB}</p>
                                       <p><input type="radio" class="form-check-input" value="C" name="option"/>{que.optionC}</p>
                                       <p><input type="radio" class="form-check-input" value="D" name="option"/>{que.optionD}</p>
                                       <a href="#demo" class="btn btn-info" data-toggle="collapse">View Answer</a>
                                        <div id="demo" class="collapse"> {que.answer} </div>
                                        </fieldset>
                                        </form>
                                        
                                        
                                        <hr/>
                
                                    </div>
                            )
                        }
                  </div>
            
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="m-2">
                        <button submitButton ngIf="showButton" id="formId" type="submit"
                            class="btn btn-lg btn-block btn-success" data-toggle="modal"
                            data-target="#exampleModalCenter">Submit</button>
                    </div>
                    <div ngIf="examSubmitted" class="m-2">
                        <a class="btn btn-lg btn-block btn-warning" href="user/test-history/{{this.testId}}">Test
                            Summary</a>
                    </div>
                    <div ngIf="examSubmitted" class="m-2">
                        <button type="button" class="btn btn-lg btn-block btn-primary"
                            onClick="goToDashboard()">Dashboard</button>
                    </div>
                    <div class="">
                        <button myButton id="refresh" class="btn- fa fa-refresh" aria-hidden="true" value="referesh"
                            onClick="triggerClick()" data-toggle="modal" data-target="#exampleModalCenter"
                            >&nbsp;
                            Refresh</button>
                    </div>
                </div>
             
    </div>
    </label>
    </div>
    </form>
    </div>
    </form>
    </div>
        );
    }
    
}

export default TestDemo;