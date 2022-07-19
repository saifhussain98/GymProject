package com.qa.gymproject.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity // Table
public class GymWorkout {

	@Id // PK
	@GeneratedValue(strategy = GenerationType.IDENTITY) // AI
	private Integer id;

	private String muscleGroup;

	private String exercise;

	private int weight;
	
	private int sets;
	
	private int reps;

	public GymWorkout() {
		super();
		// REQUIRED
	}

	public GymWorkout(String muscleGroup, String exercise, int weight, int sets, int reps) {
		super();
		this.muscleGroup = muscleGroup;
		this.exercise = exercise;
		this.weight = weight;
		this.sets = sets;
		this.reps = reps;
	}

	public GymWorkout(Integer id, String muscleGroup, String exercise, int weight, int sets, int reps) {
		super();
		this.id = id;
		this.muscleGroup = muscleGroup;
		this.exercise = exercise;
		this.weight = weight;
		this.sets = sets;
		this.reps = reps;
	}

	// REQUIRED

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getMuscleGroup() {
		return this.muscleGroup;
	}

	public void setMuscleGroup(String muscleGroup) {
		this.muscleGroup = muscleGroup;
	}

	public String getExercise() {
		return this.exercise;
	}

	public void setExercise(String exercise) {
		this.exercise = exercise;
	}

	public int getWeight() {
		return this.weight;
	}

	public void setWeight(int weight) {
		this.weight = weight;
	}
	
	public int getSets() {
		return this.sets;
	}

	public void setSets(int sets) {
		this.sets = sets;
	}
	
	public int getReps() {
		return this.reps;
	}

	public void setReps(int reps) {
		this.reps = reps;
	}
	

	@Override
	public String toString() {
		return "GymWorkout [muscleGroup=" + this.muscleGroup + ", exercise=" + this.exercise + ", weight=" + this.weight + ", sets=" + this.sets + ", reps=" + this.reps + "]";
	}

}