package com.ccatforum.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ccatforum.dao.model.Mcq;
import com.ccatforum.dao.repository.McqRepository;
import com.ccatforum.exception.McqRelatedException;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class McqController {

	@Autowired
	private McqRepository mcqRepo;

	// get all mcq questions
	@GetMapping("/mcq")
	public List<Mcq> getAllMcqs() {
		return mcqRepo.findAll();
	}

	// create mcq rest api
	@PostMapping("/mcq")
	public Mcq createMcq(@RequestBody Mcq mcq) {
		return mcqRepo.save(mcq);
	}

	// get mcq by id rest api
	@GetMapping("/mcq/{id}")
	public ResponseEntity<Mcq> getMcqById(@PathVariable Integer id) {
		Mcq mcq = mcqRepo.findById(id).orElseThrow(() -> new McqRelatedException("Question not exist with id :" + id));
		return ResponseEntity.ok(mcq);
	}

	// update mcq rest api

	@PutMapping("/mcq/{id}")
	public ResponseEntity<Mcq> updateMcq(@PathVariable Integer id, @RequestBody Mcq mcqDetails) {
		Mcq mcq = mcqRepo.findById(id).orElseThrow(() -> new McqRelatedException("Question not exist with id :" + id));

		mcq.setMcqCategory(mcqDetails.getMcqCategory());
		mcq.setQuestion(mcqDetails.getQuestion());
		mcq.setOptionA(mcqDetails.getOptionA());
		mcq.setOptionB(mcqDetails.getOptionB());
		mcq.setOptionC(mcqDetails.getOptionC());
		mcq.setOptionD(mcqDetails.getOptionD());
		mcq.setAnswer(mcqDetails.getAnswer());

		Mcq updatedMcq = mcqRepo.save(mcq);
		return ResponseEntity.ok(updatedMcq);
	}

	// delete mcq rest api
	@DeleteMapping("/mcq/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteMcq(@PathVariable Integer id) {
		Mcq mcq = mcqRepo.findById(id).orElseThrow(() -> new McqRelatedException("Question not exist with id :" + id));

		mcqRepo.delete(mcq);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
