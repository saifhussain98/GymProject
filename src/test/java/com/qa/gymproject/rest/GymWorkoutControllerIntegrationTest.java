package com.qa.gymproject.rest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.patch;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.jdbc.Sql.ExecutionPhase;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.ResultMatcher;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.qa.gymproject.entity.GymWorkout;

@SpringBootTest
@AutoConfigureMockMvc // sets up the testing class
@Sql(scripts = { "classpath:gymworkout-schema.sql",
		"classpath:gymworkout-data.sql" }, executionPhase = ExecutionPhase.BEFORE_TEST_METHOD)
@ActiveProfiles("test")
public class GymWorkoutControllerIntegrationTest {

	@Autowired
	private MockMvc mvc;

	@Autowired
	private ObjectMapper mapper;

	@Test
	void testCreate() throws Exception {
		GymWorkout testGymWorkout = new GymWorkout(2, "Back", "Pullups", 10, 2, 8);
		String testGymWorkoutAsJSON = this.mapper.writeValueAsString(testGymWorkout);
		RequestBuilder req = post("/createGymWorkout").content(testGymWorkoutAsJSON).contentType(MediaType.APPLICATION_JSON);

		ResultMatcher checkStatus = status().is(201);
		GymWorkout createdGymWorkout = new GymWorkout(2, "Back", "Pullups", 10, 2, 8);
		String createdGymWorkoutAsJSON = this.mapper.writeValueAsString(createdGymWorkout);
		ResultMatcher checkBody = content().json(createdGymWorkoutAsJSON);

		this.mvc.perform(req).andExpect(checkStatus).andExpect(checkBody);
	}

	@Test
	void testRead() throws Exception {
		List<GymWorkout> gymWorkouts = List.of(new GymWorkout(1, "Chest", "Bench Press", 32, 3, 8));
		this.mvc.perform(get("/getGymWorkouts")).andExpect(status().isOk())
				.andExpect(content().json(this.mapper.writeValueAsString(gymWorkouts)));
	}

	@Test
	void testUpdate() throws Exception {
		GymWorkout updated = new GymWorkout(1, "Shoulders", "Military", 20, 4, 10);
		this.mvc.perform(patch("/updateGymWorkout/1?muscleGroup=Shoulders&exercise=Military&weight=20&sets=4&reps=10")).andExpect(status().isOk())
				.andExpect(content().json(this.mapper.writeValueAsString(updated)));
	}

	@Test
	void testDelete() throws Exception {
		this.mvc.perform(delete("/removeGymWorkout/1")).andExpect(status().isNoContent());
	}
}