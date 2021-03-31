package com.ccatforum.dao.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ccatforum.dao.model.PracticeMCQ;
import com.ccatforum.dao.model.PracticeMCQCategory;
import com.ccatforum.dao.model.PracticeMCQSubCategory;

@Repository
public interface PracticeMCQRepository extends JpaRepository<PracticeMCQ, Integer> {

	List<PracticeMCQ> findByPracticeMCQCategory(PracticeMCQCategory practiceMCQCategory);

	List<PracticeMCQ> findByPracticeMCQSubCategory(PracticeMCQSubCategory practiceMCQSubCategory);

}
