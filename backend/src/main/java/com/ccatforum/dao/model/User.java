package com.ccatforum.dao.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@Entity
@Table(name = "users")
@JsonInclude(Include.NON_DEFAULT)
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "name", length = 40)
	@NotNull(message = "Name cannot be null")
	private String name;

	@Column(name = "email", length = 40)
	@Email(message = "Email should be valid")
	private String email;

	@Column(name = "password", length = 20)
	private String password;

	@Enumerated(EnumType.STRING)
	private Role role;

	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Test> test = new ArrayList<>();

	public User() {
	}

	public User(@NotNull(message = "Name cannot be null") String name,
			@Email(message = "Email should be valid") String email, String password, Role role) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.role = role;

	}

	// helpers
	public void assignTest(Test newTest) {
		test.add(newTest);
		newTest.setUser(this);
	}

	public void deleteTest(Test newTest) {
		test.remove(newTest);
		newTest.setUser(null);
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getEmail() {
		return email;
	}

	public String getPassword() {
		return password;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Test> getTest() {
		return test;
	}

	public void setTest(List<Test> test) {
		this.test = test;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", email=" + email + ", password=" + password + ", role=" + role
				+ "]";
	}

}
