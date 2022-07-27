document.getElementById('gymWorkoutsSearch').addEventListener("submit", function (event) {​​
event.preventDefault();

const form = event.target;

axios.get(`http://localhost:8080/getGymWorkoutByMuscleGroup/${​​form.searchMuscleGroup.value}​​`)
.then(res => {​​
console.log("RESPONSE: ", res);
form.searchMuscleGroup.focus();
form.reset();
console.log("success");
var existingSearchDiv = document.getElementById('searchGymWorkoutsDiv');
if (existingSearchDiv != null) {​​
existingSearchDiv.remove();
}​​
for (let gymWorkout of res.data) {​​
const gymWorkoutCol = document.createElement("div");
gymWorkoutCol.id = "searchGymWorkoutDiv";
gymWorkoutCol.classMuscleGroup = "col-10";

const gymWorkoutCard = document.createElement("div");
gymWorkoutCard.classMuscleGroup = "card";
gymWorkoutCard.style.textAlign="center";
gymWorkoutCol.appendChild(gymWorkoutCard);

const gymWorkoutDiv = document.createElement("div");
gymWorkoutDiv.classMuscleGroup = "card-body";
gymWorkoutCard.appendChild(gymWorkoutDiv);

const gymWorkoutMuscleGroup = document.createElement("p");
gymWorkoutMuscleGroup.innerText = gymWorkout.muscleGroup;
gymWorkoutDiv.appendChild(gymWorkoutMuscleGroup);

const gymWorkoutExercise = document.createElement("p");
gymWorkoutExercise.innerText = gymWorkout.exercise;
gymWorkoutDiv.appendChild(gymWorkoutExercise);

const gymWorkoutWeight = document.createElement("p");
gymWorkoutWeight.innerText = gymWorkout.weight + " Kg";
gymWorkoutDiv.appendChild(gymWorkoutWeight);

const gymWorkoutSets = document.createElement("p");
gymWorkoutSets.innerText = gymWorkout.sets;
gymWorkoutDiv.appendChild(gymWorkoutSets);

const gymWorkoutReps = document.createElement("p");
gymWorkoutReps.innerText = gymWorkout.reps;
gymWorkoutDiv.appendChild(gymWorkoutReps);

output.prepend(gymWorkoutCol);
}​​
}​​)
.catch(err => console.error(err));

}​​);