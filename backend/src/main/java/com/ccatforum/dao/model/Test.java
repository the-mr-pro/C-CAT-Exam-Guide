package com.ccatforum.dao.model;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "test")
public class Test {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int testId;

	@ManyToMany(cascade = CascadeType.MERGE)
	private List<Mcq> mcq = new ArrayList<>();

	@ManyToOne
	@JoinColumn(name = "user_id", referencedColumnName = "id")
	private User user;

	@Column(name = "right_answers")
	private int rightlyAnsweredQues;
	@Column(name = "wrong_answers")
	private int wronglyAnsweredQues;
	@Column(name = "total_ques")
	private int totalQues;

	@Column(name = "result_per")
	private String result;

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate regDate;

	public Test() {
	}

	public int getWronglyAnsweredQues() {
		return wronglyAnsweredQues;
	}

	public void setWronglyAnsweredQues(int wronglyAnsweredQues) {
		this.wronglyAnsweredQues = wronglyAnsweredQues;
	}

	public int getTestId() {
		return testId;
	}

	public List<Mcq> getMcq() {
		return mcq;
	}

	public User getUser() {
		return user;
	}

	public int getRightlyAnsweredQues() {
		return rightlyAnsweredQues;
	}

	public int getTotalQues() {
		return totalQues;
	}

	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}

	public void setTestId(int testId) {
		this.testId = testId;
	}

	public void setMcq(List<Mcq> mcq) {
		this.mcq = mcq;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public void setRightlyAnsweredQues(int rightlyAnsweredQues) {
		this.rightlyAnsweredQues = rightlyAnsweredQues;
	}

	public void setTotalQues(int totalQues) {
		this.totalQues = totalQues;
	}

	public LocalDate getRegDate() {
		return regDate;
	}

	public void setRegDate(LocalDate regDate) {
		this.regDate = regDate;
	}

}