package com.ccatforum.service;

import java.util.List;

import com.ccatforum.dao.model.Test;
import com.ccatforum.dao.model.User;

public interface ITestService {

	Test getNewTestByCat(String mcqCategory);

	Test submitTest(Test test);

	List<Test> getAllTestByUser(User user);
	
}
