package com.ccatforum.dao.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.beans.factory.annotation.Value;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@Entity
@Table
@JsonInclude(Include.NON_DEFAULT)
public class PracticeMCQ {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "question_id")
	private int questionID;

	@Enumerated(EnumType.STRING)
	private PracticeMCQCategory practiceMCQCategory;

	@Enumerated(EnumType.STRING)
	private PracticeMCQSubCategory practiceMCQSubCategory;

	private String question;
	private String optionA;
	private String optionB;
	private String optionC;
	private String optionD;
	private String answer;
	@Value(value = "None")
	private String explanation;

	public PracticeMCQ() {
	
	}

	public PracticeMCQ(PracticeMCQCategory practiceMCQCategory, PracticeMCQSubCategory practiceMCQSubCategory,
			String question, String optionA, String optionB, String optionC, String optionD, String answer,
			String explanation) {
		super();
		this.practiceMCQCategory = practiceMCQCategory;
		this.practiceMCQSubCategory = practiceMCQSubCategory;
		this.question = question;
		this.optionA = optionA;
		this.optionB = optionB;
		this.optionC = optionC;
		this.optionD = optionD;
		this.answer = answer;
		this.explanation = explanation;
	}

	public int getQuestionID() {
		return questionID;
	}

	public PracticeMCQCategory getPracticeMCQCategory() {
		return practiceMCQCategory;
	}

	public PracticeMCQSubCategory getPracticeMCQSubCategory() {
		return practiceMCQSubCategory;
	}

	public String getQuestion() {
		return question;
	}

	public String getOptionA() {
		return optionA;
	}

	public String getOptionB() {
		return optionB;
	}

	public String getOptionC() {
		return optionC;
	}

	public String getOptionD() {
		return optionD;
	}

	public String getAnswer() {
		return answer;
	}

	public String getExplanation() {
		return explanation;
	}

	public void setQuestionID(int questionID) {
		this.questionID = questionID;
	}

	public void setPracticeMCQCategory(PracticeMCQCategory practiceMCQCategory) {
		this.practiceMCQCategory = practiceMCQCategory;
	}

	public void setPracticeMCQSubCategory(PracticeMCQSubCategory practiceMCQSubCategory) {
		this.practiceMCQSubCategory = practiceMCQSubCategory;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public void setOptionA(String optionA) {
		this.optionA = optionA;
	}

	public void setOptionB(String optionB) {
		this.optionB = optionB;
	}

	public void setOptionC(String optionC) {
		this.optionC = optionC;
	}

	public void setOptionD(String optionD) {
		this.optionD = optionD;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	public void setExplanation(String explanation) {
		this.explanation = explanation;
	}

	@Override
	public String toString() {
		return "PracticeMCQ [questionID=" + questionID + ", practiceMCQCategory=" + practiceMCQCategory
				+ ", practiceMCQSubCategory=" + practiceMCQSubCategory + ", question=" + question + ", optionA="
				+ optionA + ", optionB=" + optionB + ", optionC=" + optionC + ", optionD=" + optionD + ", answer="
				+ answer + ", explanation=" + explanation + "]";
	}

}
