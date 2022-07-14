package com.qa.gymproject.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.qa.gymproject.entity.GymWorkout;

@Service

public class GymWorkoutServiceList implements GymWorkoutService {

	private List<GymWorkout> gymWorkouts = new ArrayList<>();

	@Override
	public GymWorkout getById(int id) {
		return this.gymWorkouts.get(id);

	}

	@Override
	public List<GymWorkout> getAll() {
		return this.gymWorkouts;
	}

	@Override
	public GymWorkout create(GymWorkout gymWorkout) {
		this.gymWorkouts.add(gymWorkout);
		return this.gymWorkouts.get(this.gymWorkouts.size() - 1);

	}

	@Override
	public GymWorkout update(int id, String muscleGroup, String exercise, Integer weight, Integer sets, Integer reps) {
		GymWorkout toUpdate = this.gymWorkouts.get(id);
		if (muscleGroup != null)
			toUpdate.setMuscleGroup(muscleGroup);
		if (weight != null)
			toUpdate.setWeight(weight);
		if (sets != null)
			toUpdate.setSets(sets);
		if (reps != null)
			toUpdate.setReps(reps);
		if (exercise != null)
			toUpdate.setExercise(exercise);
		return toUpdate;
	}

	@Override
	public void delete(int id) {
		this.gymWorkouts.remove(id);
	}

	@Override
	public GymWorkout findByMuscleGroup(String muscleGroup) {
		// TODO Auto-generated method stub
		return null;
	}

}