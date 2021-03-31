import React, { Component, useEffect } from 'react';
import bgImg from "../Sainik.jpg";
class Practice extends Component {
    state = {  }
    render() { 
        return ( 
<div class="container mt-4">
    <style>{'body { background-color: {bgImg}; }'}</style>
    <div class="sticky-top">
        <div class="bg-dark">
            <div class="alert alert-success mb-n2" role="alert">
                <p class="text-center">Time Alloted : <strong>60</strong>&nbsp; Mins</p>
            </div>
            <div class="alert alert-danger" role="alert">
                <p class="text-center">Time Elapsed : <strong>displayTimeElapsed()</strong></p>
            </div>
        </div>
    </div>

            <h1 class="text-center my-3">mcqCategory</h1>
            <form myForm="ngForm" ngSubmit="submitTest(myForm)" novalidate name="form" id="form">

            <div class="form-check p-3 my-3 bg-secondary" ngFor="let quiz of quizList; let i = index">
                <label class="form-check-label text-white">
                    <h6 class="text-white">Q1 mcq</h6>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" class="form-check-input" value="A" name="{{quiz.questionID}}" ngModel/>A]
                    optionA<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" class="form-check-input" value="B" name="{{quiz.questionID}}" ngModel/>B]
                    optionB<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" class="form-check-input" value="C" name="{{quiz.questionID}}" ngModel/>C]
                    optionC<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" class="form-check-input" value="D" name="{{quiz.questionID}}" ngModel/>D]
                   optionD<br/>
                </label>
            </div>
            <br/>
    
    
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
    
    
        </form>
        </div>
         );
    }
}
 
export default Practice;