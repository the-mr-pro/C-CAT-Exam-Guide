package com.ccatforum.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccatforum.dao.model.Mcq;
import com.ccatforum.dao.model.McqCategory;
import com.ccatforum.dao.model.Test;
import com.ccatforum.dao.model.User;
import com.ccatforum.dao.repository.McqRepository;
import com.ccatforum.dao.repository.TestRepository;

@Service
@Transactional
public class TestServiceImpl implements ITestService {

	@Autowired
	private TestRepository testRepo;

	@Autowired
	private McqRepository mcqRepo;

	@Override
	public Test getNewTestByCat(String mcqCategory) {
		Test test = new Test();
		List<Mcq> mcq = mcqRepo.findByMcqCategory(McqCategory.valueOf(mcqCategory));
		test.setMcq(mcq);
		return test;
	}

	@Override
	public Test submitTest(Test test) {
		testRepo.save(test);
		return test;
	}

	@Override
	public List<Test> getAllTestByUser(User user) {
		List<Test> testList = testRepo.findByUser(user);
		return testList;
	}

}
