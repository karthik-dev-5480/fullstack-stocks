package com.stocks.dto;

public class AuthResponse {
    private String token;
    public AuthResponse(String token) {
        this.token = token;
    }
    // getter
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
}
