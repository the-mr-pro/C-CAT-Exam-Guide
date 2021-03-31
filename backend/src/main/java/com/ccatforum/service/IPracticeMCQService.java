package com.ccatforum.service;

import java.util.List;

import com.ccatforum.dao.model.PracticeMCQ;

public interface IPracticeMCQService {

	List<PracticeMCQ> fetchAllPracticeMCQ();

	List<PracticeMCQ> fetchAllPracticeMCQByCategory(String practiceMCQCategory);

	List<PracticeMCQ> fetchAllPracticeMCQBySubCategory(String practiceMCQSubCategory);

}
