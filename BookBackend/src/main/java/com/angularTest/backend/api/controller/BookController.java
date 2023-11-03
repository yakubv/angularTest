package com.angularTest.backend.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import com.angularTest.backend.api.dao.UserRepository;
import com.angularTest.backend.api.model.User;

import java.util.List;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "*")
public class BookController{

    @Autowired
    private UserRepository repository;

    @PostMapping("/save")
    public String register(@RequestBody User user) {
        repository.save(user);
        return user.getTitle() + " Book data saved successfully";
    }

    @GetMapping("/getAll")
    public List<User> findAllUsers() {
        return repository.findAll();
    }


    public static void main(String[] args) {
        SpringApplication.run(RegistrationServiceApplication.class, args);
    }

}


