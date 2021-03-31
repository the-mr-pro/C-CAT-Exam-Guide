package com.ccatforum.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccatforum.dao.model.PracticeMCQ;
import com.ccatforum.dao.model.PracticeMCQCategory;
import com.ccatforum.dao.model.PracticeMCQSubCategory;
import com.ccatforum.dao.repository.PracticeMCQRepository;

@Service
@Transactional
public class PracticeMCQServiceImpl implements IPracticeMCQService {

	@Autowired
	private PracticeMCQRepository practiceMCQRepo;

	@Override
	public List<PracticeMCQ> fetchAllPracticeMCQ() {
		return practiceMCQRepo.findAll();
	}

	@Override
	public List<PracticeMCQ> fetchAllPracticeMCQByCategory(String practiceMCQCategory) {

		return practiceMCQRepo.findByPracticeMCQCategory(PracticeMCQCategory.valueOf(practiceMCQCategory));
	}

	@Override
	public List<PracticeMCQ> fetchAllPracticeMCQBySubCategory(String practiceMCQSubCategory) {

		return practiceMCQRepo.findByPracticeMCQSubCategory(PracticeMCQSubCategory.valueOf(practiceMCQSubCategory));
	}

}
