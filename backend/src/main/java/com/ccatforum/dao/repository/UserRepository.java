package com.ccatforum.dao.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ccatforum.dao.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

	// Fetch user details based on email
	Optional<User> findByEmail(String email);

	Optional<User> findByEmailAndPassword(String email, String password);

}
