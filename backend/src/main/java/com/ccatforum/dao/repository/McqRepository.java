package com.ccatforum.dao.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ccatforum.dao.model.Mcq;
import com.ccatforum.dao.model.McqCategory;

@Repository
public interface McqRepository extends JpaRepository<Mcq, Integer> {

	List<Mcq> findByMcqCategory(McqCategory mcqCategory);

}
