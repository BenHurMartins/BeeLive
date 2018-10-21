package com.beelive.beelive;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.beelive")
public class BeeliveApplication {

	public static void main(String[] args) {
		SpringApplication.run(BeeliveApplication.class, args);
	}
}
