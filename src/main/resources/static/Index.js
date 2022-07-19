"use strict";

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // turns off the page refresh/redirect
    // setTimeout(() => console.log("YO!"), 1_000);

    console.log("THIS:", this);

    const data = {
        muscleGroup: this.musclegroup.value,
        exercise: this.exercise.value,
        weight: this.weight.value,
        sets: this.sets.value,
        reps: this.reps.value
    }

    console.log("DATA:", data);

    axios.post("http://localhost:8080/createGymWorkout", data)
            .then(res => {
                console.log("RES:", res);
                this.reset();
                this.muscleGroup.focus();
                renderGymWorkouts();
            })
            .catch(err => console.error(err));
});

const output = document.querySelector("#output");

function renderGymWorkouts() {
    axios.get("http://localhost:8080/getGymWorkouts")
        .then(res => {
            console.log("gymWorkouts: ", res.data);
            output.innerHTML = "";
            for (let gymWorkout of res.data) {
                const gymWorkoutCol = document.createElement("div");
                gymWorkoutCol.classMuscleGroup = "col";

                const gymWorkoutCard = document.createElement("div");
                gymWorkoutCard.classMuscleGroup = "card";
                gymWorkoutCol.appendChild(gymWorkoutCard);

                const gymWorkoutDiv = document.createElement("div");
                gymWorkoutDiv.classMuscleGroup = "card-body";
                gymWorkoutCard.appendChild(gymWorkoutDiv);

                const gymWorkoutMuscleGroup = document.createElement("h2");
                gymWorkoutMuscleGroup.innerText = gymWorkout.muscleGroup;
                gymWorkoutDiv.appendChild(gymWorkoutMuscleGroup);

                const gymWorkoutSets = document.createElement("p");
                gymWorkoutSets.innerText = gymWorkout.sets;
                gymWorkoutDiv.appendChild(gymWorkoutSets);

                const gymWorkoutreps = document.createElement("p");
                gymWorkoutReps.innerText = gymWorkout.reps;
                gymWorkoutDiv.appendChild(gymWorkoutReps);

                const gymWorkoutWeight = document.createElement("p");
                gymWorkoutWeight.innerText = gymWorkout.weight + " Kg.";
                gymWorkoutDiv.appendChild(gymWorkoutWeight);

                const gymWorkoutExercise = document.createElement("p");
                gymWorkoutExercise.innerText = gymWorkout.exercise;
                gymWorkoutDiv.appendChild(gymWorkout);

                const gymWorkoutDelete = document.createElement('button');
                gymWorkoutDelete.innerText = "DELETE";
                gymWorkoutDelete.classList.add("btn", "btn-danger");
                gymWorkoutDelete.addEventListener("click", () => {
                    console.log("GYMWORKOUT: ", gymWorkout);
                    deleteGymWorkout(gymWorkout.id);
                });
                gymWorkoutDiv.appendChild(gymWorkoutDelete);

                output.appendChild(gymWorkoutCol);
            }
        })
        .catch(err => console.error(err));
}

const deleteGymWorkout = (id) => {
    axios.delete("http://localhost:8080/removeGymWorkout/" + id)
            .then(res => {
                console.log("Delete successful");
                renderGymWorkouts();
            }).catch(err => console.error(err));
}

renderGymWorkouts();