package com.qa.gymproject.service;

import java.util.List;

import com.qa.gymproject.entity.GymWorkout;

public interface GymWorkoutService {

	GymWorkout getById(int id);

	List<GymWorkout> getAll();

	GymWorkout findByMuscleGroup(String muscleGroup);

	GymWorkout create(GymWorkout gymWorkout);

	GymWorkout update(int id, String muscleGroup, String exercise, Integer weight, Integer sets, Integer reps);

	void delete(int id);

}