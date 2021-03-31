package com.ccatforum.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ccatforum.dao.model.Role;
import com.ccatforum.dao.model.User;
import com.ccatforum.exception.UserRelatedException;
import com.ccatforum.service.IUserService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/user")
public class UserController {

	@Autowired
	private IUserService userService;

	// POST request to register user
	@PostMapping("/signUp")
	public ResponseEntity<?> registerUser(@Valid @RequestBody User newUser) throws Exception {

		String tempEmail = newUser.getEmail();
		User user = null;
		if (tempEmail != null && !tempEmail.isEmpty()) {

			user = userService.fetchUserByEmail(tempEmail);
			if (user != null) {
				throw new UserRelatedException("User with this " + tempEmail + " is already exists");
			} else {

				newUser.setRole(Role.valueOf("USER"));
				user = userService.registerUser(newUser);
				System.out.println(user);

			}
			return new ResponseEntity<>(user, HttpStatus.CREATED);
		}

		return new ResponseEntity<>("User registration failed", HttpStatus.BAD_REQUEST);
	}

	// POST request to verify user
	@PostMapping("/signIn")
	public ResponseEntity<?> loginUser(@Valid @RequestBody User newUuser) throws Exception {

		String tempEmail = newUuser.getEmail();
		String tempPass = newUuser.getPassword();

		User user = null;

		if (tempEmail != null && tempPass != null) {
			user = userService.fetchByEmailAndPass(tempEmail, tempPass);
			if (user == null) {
				return new ResponseEntity<>("Bad Credentials", HttpStatus.BAD_REQUEST);
			}
		}
		return new ResponseEntity<>(user, HttpStatus.OK);
	}
}