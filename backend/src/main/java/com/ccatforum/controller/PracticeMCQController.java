package com.ccatforum.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ccatforum.dao.model.PracticeMCQ;
import com.ccatforum.service.IPracticeMCQService;

@CrossOrigin(origins = "*")
@RestController

@RequestMapping("/practice")
public class PracticeMCQController {

	@Autowired
	private IPracticeMCQService practiceMCQService;

	@GetMapping("/")
	public List<PracticeMCQ> getAllPracticeMCQ() {
		return practiceMCQService.fetchAllPracticeMCQ();
	}

	@GetMapping("/{byCategory}")
	public List<PracticeMCQ> getAllPracticeMCQByCategory(@PathVariable String byCategory) {
		return practiceMCQService.fetchAllPracticeMCQByCategory(byCategory);
	}

	@GetMapping("/practice/{bySubCategory}")
	public List<PracticeMCQ> getAllPracticeMCQBySubCategory(@PathVariable String bySubCategory) {
		return practiceMCQService.fetchAllPracticeMCQBySubCategory(bySubCategory);
	}

}
