package com.nprater.server.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nprater.server.models.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
	List<Role> findAll();
	Role findByName(String name);
}
