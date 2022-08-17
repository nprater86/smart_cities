package com.nprater.server.payload.request;

import java.util.List;

import javax.persistence.Transient;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import com.nprater.server.models.City;

public class SignupRequest {
	@NotEmpty(message="Username is required!")
	@Size(min=3, max=30, message="Username must be between 3 and 30 characters")
	private String username;
	  
	@NotEmpty(message="First name is required")
	@Size(min=2, message="First name must be at least 2 characters")
	private String firstName;
	  
	@NotEmpty(message="Last name is required")
	@Size(min=2, message="Last name must be at least 2 characters")
	private String lastName;

	@NotEmpty(message="Email is required")
	@Email(message="Please enter a valid email")
	private String email;

	private List<String> role;

	@NotEmpty(message="Password is required")
	@Size(min=8, message="Password must be at least 8 characters")
	private String password;
	
	@Transient
	@NotEmpty(message="Password confirmation is required")
	@Size(min=8, message="Password confirmation must be at least 8 characters")
	private String confirmPassword;
	
	private City city;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public List<String> getRole() {
		return role;
	}

	public void setRole(List<String> role) {
		this.role = role;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getConfirmPassword() {
		return confirmPassword;
	}

	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}

	public City getCity() {
		return city;
	}

	public void setCity(City city) {
		this.city = city;
	}
}
