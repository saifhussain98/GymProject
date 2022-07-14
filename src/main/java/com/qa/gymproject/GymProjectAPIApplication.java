package com.qa.gymproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.qa.gymproject.rest.GymWorkoutController;

@SpringBootApplication
public class GymProjectAPIApplication {

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(GymProjectAPIApplication.class, args);
		System.out.println("Found the bean: " + context.getBean(GymWorkoutController.class));
	}

}