package com.stocks;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import io.github.cdimascio.dotenv.Dotenv;
@SpringBootApplication
public class StocksBackendApplication {

	public static void main(String[] args) {
		
		Dotenv dotenv = Dotenv.configure().ignoreIfMissing().load();
        System.setProperty("MYSQL_URL", dotenv.get("MYSQL_URL"));
        System.setProperty("MYSQLUSER", dotenv.get("MYSQLUSER"));
        System.setProperty("MYSQLPASSWORD", dotenv.get("MYSQLPASSWORD"));

		SpringApplication.run(StocksBackendApplication.class, args);
	}

}
