package com.ccatforum.dao.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ccatforum.dao.model.Test;
import com.ccatforum.dao.model.User;

@Repository
public interface TestRepository extends JpaRepository<Test, Integer> {

	List<Test> findByUser(User User);

}
