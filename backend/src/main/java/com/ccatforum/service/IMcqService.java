package com.ccatforum.service;

import java.util.List;
import java.util.Optional;

import com.ccatforum.dao.model.Mcq;

public interface IMcqService {

	List<Mcq> fetchmcqList();

	Mcq saveMcqs(Mcq mcq);

	Optional<Mcq> fetchMcqById(int id);

	String updateMcq(Mcq mcq);

	String deleteMcqById(int id);
}
