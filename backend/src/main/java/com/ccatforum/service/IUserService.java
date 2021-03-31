package com.ccatforum.service;

import com.ccatforum.dao.model.User;

public interface IUserService {

	// For Registration : Sign-Up
	User registerUser(User newUser);

	User fetchUserByEmail(String email);

	User fetchByEmailAndPass(String email, String pass);

}
