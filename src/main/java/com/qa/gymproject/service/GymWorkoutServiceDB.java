package com.qa.gymproject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.qa.gymproject.entity.GymWorkout;
import com.qa.gymproject.repo.GymWorkoutRepo;

@Service
@Primary
public class GymWorkoutServiceDB implements GymWorkoutService {

	@Autowired
	private GymWorkoutRepo repo;

	@Override
	public GymWorkout getById(int id) {
		return this.repo.findById(id).get();
	}

	@Override
	public List<GymWorkout> getAll() {
		return this.repo.findAll();
	}

	@Override
	public GymWorkout create(GymWorkout gymWorkout) {
		return this.repo.save(gymWorkout);
	}

	@Override
	public GymWorkout update(int id, String muscleGroup, String exercise, Integer weight, Integer sets, Integer reps) {
		GymWorkout toUpdate = repo.findById(id).get();
		if (muscleGroup != null)
			toUpdate.setMuscleGroup(muscleGroup);
		if (exercise != null)
			toUpdate.setExercise(exercise);
		if (weight != null)
			toUpdate.setWeight(weight);
		if (sets != null)
			toUpdate.setSets(sets);
		if (reps != null)
			toUpdate.setReps(reps);
		return this.repo.save(toUpdate);
	}

	@Override
	public void delete(int id) {
		this.repo.deleteById(id);
	}

	@Override
	public GymWorkout findByMuscleGroup(String muscleGroup) {
		// TODO Auto-generated method stub
		return this.repo.findByMuscleGroupStartingWithIgnoreCase(muscleGroup);
	}

}