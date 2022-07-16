package com.qa.gymproject.rest;

import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.qa.gymproject.entity.GymWorkout;
import com.qa.gymproject.service.GymWorkoutService;

@CrossOrigin
@RestController
public class GymWorkoutController {

	@Autowired
	private GymWorkoutService service; // dependency

	@GetMapping("/demoGymWorkout")
	public GymWorkout getDemoGymWorkout() {
		return new GymWorkout("Chest", "Bench Press", 32, 3, 8);
	}

	@GetMapping("/getGymWorkout/{id}")
	public GymWorkout getById(@PathVariable int id) {
		return this.service.getById(id);
	}

	@GetMapping("/getGymWorkouts")
	public List<GymWorkout> getAll() {
		return this.service.getAll();
	}

	@GetMapping("/getGymWorkoutByMuscleGroup/{muscleGroup}")
	public GymWorkout getGymWorkoutByMuscleGroup(@PathVariable String muscleGroup) {
		return this.service.findByMuscleGroup(muscleGroup);
	}

	@PostMapping("/createGymWorkout")
	public ResponseEntity<GymWorkout> create(@RequestBody GymWorkout gymWorkout) {
		System.out.println("Created: " + gymWorkout);
		GymWorkout created = this.service.create(gymWorkout);

		return new ResponseEntity<GymWorkout>(created, HttpStatus.CREATED);
	}

	@PatchMapping("/updateGymWorkout/{id}")
	public GymWorkout update(@PathVariable("id") int id, @PathParam("muscleGroup") String muscleGroup,
			@PathParam("exercise") String exercise, @PathParam("weight") Integer weight, @PathParam("sets") Integer sets, @PathParam("reps") Integer reps) {
		return this.service.update(id, muscleGroup, exercise, weight, sets, reps);
	}

	// id = 4494
	@DeleteMapping("/removeGymWorkout/{id}")
	public ResponseEntity<?> delete(@PathVariable int id) {
		this.service.delete(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}