package com.angularTest.backend.api.dao;

import com.angularTest.backend.api.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {

}
