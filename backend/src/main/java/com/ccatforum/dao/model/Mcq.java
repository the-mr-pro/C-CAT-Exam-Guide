package com.ccatforum.dao.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Mcq {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "question_id")
	private int questionID;

	@Enumerated(EnumType.STRING)
	private McqCategory mcqCategory;
	private String question;
	private String optionA;
	private String optionB;
	private String optionC;
	private String optionD;
	private String answer;

	public Mcq() {
		// TODO Auto-generated constructor stub
	}

	public Mcq(McqCategory mcqCategory, String question, String optionA, String optionB, String optionC, String optionD,
			String answer) {
		super();
		this.mcqCategory = mcqCategory;
		this.question = question;
		this.optionA = optionA;
		this.optionB = optionB;
		this.optionC = optionC;
		this.optionD = optionD;
		this.answer = answer;
	}

	public int getQuestionID() {
		return questionID;
	}

	public McqCategory getMcqCategory() {
		return mcqCategory;
	}

	public void setQuestionID(int questionID) {
		this.questionID = questionID;
	}

	public void setMcqCategory(McqCategory mcqCategory) {
		this.mcqCategory = mcqCategory;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public String getOptionA() {
		return optionA;
	}

	public void setOptionA(String optionA) {
		this.optionA = optionA;
	}

	public String getOptionB() {
		return optionB;
	}

	public void setOptionB(String optionB) {
		this.optionB = optionB;
	}

	public String getOptionC() {
		return optionC;
	}

	public void setOptionC(String optionC) {
		this.optionC = optionC;
	}

	public String getOptionD() {
		return optionD;
	}

	public void setOptionD(String optionD) {
		this.optionD = optionD;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

}
