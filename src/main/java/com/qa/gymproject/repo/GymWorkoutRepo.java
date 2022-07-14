package com.qa.gymproject.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.qa.gymproject.entity.GymWorkout;

@Repository
public interface GymWorkoutRepo extends JpaRepository<GymWorkout, Integer> {

	GymWorkout findByMuscleGroupStartingWithIgnoreCase(String muscleGroup);
}