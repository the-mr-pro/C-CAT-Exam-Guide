package com.ccatforum.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ccatforum.dao.model.Test;
import com.ccatforum.dao.model.User;
import com.ccatforum.dao.repository.TestRepository;
import com.ccatforum.service.ITestService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/test")
public class TestController {

	@Autowired
	private ITestService testService;

	@Autowired
	private TestRepository testRepo;

	@GetMapping("/id/{id}")
	public Test getTest(@PathVariable int id) {
		Optional<Test> userTest = testRepo.findById(id);
		if (userTest.isPresent()) {
			return userTest.get();
		}
		return null;
	}

	@PostMapping("/")
	public List<Test> getAllTests(@RequestBody User user) {
		return testService.getAllTestByUser(user);
	}

	@GetMapping("/{mcqCategory}")
	public Test getNewTestByCategory(@PathVariable String mcqCategory) {
		return testService.getNewTestByCat(mcqCategory);
	}

	@PostMapping("/submitTest")
	public Test submitTest(@RequestBody Test submittedTest) {

		testRepo.save(submittedTest);
		return testService.submitTest(submittedTest);
	}

}
