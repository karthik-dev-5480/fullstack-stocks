package com.stocks.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.stocks.dto.AuthRequest;
import com.stocks.dto.AuthResponse;
import com.stocks.dto.RegisterRequest;
import com.stocks.model.User;
import com.stocks.service.AuthService;
import com.stocks.service.RegisterService;
import com.stocks.service.TokenBlacklistService;


@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest request) {
        System.out.println("in roller");
        return authService.login(request); // ✅ FIXED: no double wrapping
    }

    @Autowired
    private RegisterService registerService;

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(registerService.register(request));
    }
    @Autowired
    private TokenBlacklistService tokenBlacklistService;

    @PostMapping("/logout")
    public ResponseEntity<String> logout(@CookieValue(value = "token", required = false) String token) {
        if (token != null) {
            tokenBlacklistService.blacklistToken(token);
        }
        ResponseCookie deleteCookie = ResponseCookie.from("token", "")
            .httpOnly(true)
            .secure(true)
            .path("/")
            .maxAge(0)
            .sameSite("Strict")
            .build();

        return ResponseEntity.ok()
            .header(HttpHeaders.SET_COOKIE, deleteCookie.toString())
            .body("Logged out successfully.");
    }
}
