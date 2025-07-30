package com.stocks.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.stocks.dto.RegisterRequest;
import com.stocks.model.User;
import com.stocks.repository.UserRepository;

@Service
public class RegisterService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User register(RegisterRequest request) {
        User user = new User();
        user.setUsername(request.getUsername());
        user.setPassword(passwordEncoder.encode(request.getPassword())); // bcrypt here
        user.setRole(request.getRole() != null ? request.getRole() : "USER");
        return userRepository.save(user);
    }
}

