package com.ccatforum.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccatforum.dao.model.Mcq;
import com.ccatforum.dao.repository.McqRepository;

@Service
@Transactional
public class McqServiceImpl implements IMcqService {

	@Autowired
	private McqRepository repo;

	public List<Mcq> fetchmcqList() {
		return repo.findAll();
	}

	public Mcq saveMcqs(Mcq mcq) {
		return repo.save(mcq);
	}

	public Optional<Mcq> fetchMcqById(int id) {
		return repo.findById(id);
	}

	public String updateMcq(Mcq mcq) {
		try {
			Optional<Mcq> mcqToUpdate = repo.findById(mcq.getQuestionID());
			if (mcqToUpdate.isPresent()) {

				Mcq question = mcqToUpdate.get();
				question.setMcqCategory(mcq.getMcqCategory());
				question.setQuestion(mcq.getQuestion());
				question.setOptionA(mcq.getOptionA());
				question.setOptionB(mcq.getOptionB());
				question.setOptionC(mcq.getOptionC());
				question.setOptionD(mcq.getOptionD());
				question.setAnswer(mcq.getAnswer());
			}

			repo.save(mcq);
			return "Question  Updated";
		} catch (Exception e) {
			return "There is no Question registered under the ID: " + mcq.getQuestionID();
		}
	}

	public String deleteMcqById(int id) {
		String result;
		try {
			repo.deleteById(id);
			result = "Question deleted succesfuly";
		} catch (Exception e) {
			result = "Question deletion failed";

		}
		return result;
	}

}
