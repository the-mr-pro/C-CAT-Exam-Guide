package com.ccatforum.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ccatforum.dao.model.User;
import com.ccatforum.dao.repository.UserRepository;
import com.ccatforum.exception.UserRelatedException;

@Service
@Transactional
public class UserServiceImpl implements IUserService {

	@Autowired
	private UserRepository userRepo;

	// register
	@Override
	public User registerUser(User newUser) {
		return userRepo.save(newUser);

	}

	@Override
	public User fetchUserByEmail(String email) {
		Optional<User> userOptional = userRepo.findByEmail(email);
		if (userOptional.isPresent()) {
			return userOptional.get();
		}
		return null;
	}

	// login
	@Override
	public User fetchByEmailAndPass(String email, String pass) {
		Optional<User> userOptional = userRepo.findByEmailAndPassword(email, pass);
		if (userOptional.isPresent()) {
			return userOptional.get();
		}
		throw new UserRelatedException(
				"Bad Credentials : Invalid Email ID or Password => Email : " + email + "\tPassword : " + pass);
	}
}
