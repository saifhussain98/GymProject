const gymProject = document.getElementById('gymWorkoutsSearch');
const searchMuscleGroup = document.getElementById('searchMuscleGroup');
let muscleGroupGymWorkouts = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredGymWorkouts = muscleGroupGymWorkouts.filter((gymWorkout) => {
        return (
            gymWorkout.muscleGroup.toLowerCase().includes(searchString) ||
            gymWorkout.exercise.toLowerCase().includes(searchString) ||
            gymWorkout.weight.toLowerCase().includes(searchInteger)
            
        );
    });
    displayGymWorkouts(filteredGymWorkouts);
});
const loadGymWorkouts = async () => {
    try {
        const res = await fetch('http://localhost:8080/getGymWorkoutByMuscleGroup/Chest');
        muscleGroupGymWorkouts = await res.json();
        displayGymWorkouts(muscleGroupGymWorkouts);
    } catch (err) {
        console.error(err);
    }
};
const displayGymWorkouts = (gymWorkouts) => {
    const htmlString = gymWorkouts
        .map((gymWorkout) => {
            return `
            <li class="gymWorkout">
                <h2>${gymWorkout.muscleGroup}</h2>
                <p>Exercise: ${gymWorkout.exercise}</p>
                <p>Weight: ${gymWorkout.weight}</p>
            </li>
        `;
        })
        .join('');
        gymProject.innerHTML = htmlString;
};
loadGymWorkouts();





// // const gymWorkoutsSearch = document.getElementById('gymWorkoutsSearch');
// // const searchBar = document.getElementById('searchBar');
// // let gymWorkouts = [];

// document.getElementById('gymWorkoutsSearch').addEventListener("submit", function (event) {​​
// event.preventDefault();

// const form = event.target;

// axios.get(`http://localhost:8080/getGymWorkoutByMuscleGroup/${​​form.searchMuscleGroup.value}​​`)
// .then(res => {​​
// console.log("RESPONSE: ", res);
// form.searchName.focus();
// form.reset();
// console.log("success");
// var existingSearchDiv = document.getElementById('searchGymWorkoutsDiv');
// if (existingSearchDiv != null) {​​
// existingSearchDiv.remove();
// }​​
// for (let gymWorkout of res.data) {​​
// const gymWorkoutCol = document.createElement("div");
// gymWorkoutCol.id = "searchGymWorkoutDiv";
// gymWorkoutCol.className = "col-12";

// const gymWorkoutCard = document.createElement("div");
// gymWorkoutCard.className = "card";
// gymWorkoutCard.style.textAlign="center";
// gymWorkoutCol.appendChild(gymWorkoutCard);

// const gymWorkoutDiv = document.createElement("div");
// gymWorkoutDiv.classMuscleGroup = "card-body";
// gymWorkoutCard.appendChild(gymWorkoutDiv);

// const gymWorkoutMuscleGroup = document.createElement("p");
// gymWorkoutMuscleGroup.innerText = gymWorkout.muscleGroup;
// gymWorkoutDiv.appendChild(gymWorkoutMuscleGroup);

// const gymWorkoutExercise = document.createElement("p");
// gymWorkoutExercise.innerText = gymWorkout.exercise;
// gymWorkoutDiv.appendChild(gymWorkoutExercise);

// const gymWorkoutWeight = document.createElement("p");
// gymWorkoutWeight.innerText = gymWorkout.weight + " Kg";
// gymWorkoutDiv.appendChild(gymWorkoutWeight);

// const gymWorkoutSets = document.createElement("p");
// gymWorkoutSets.innerText = gymWorkout.sets;
// gymWorkoutDiv.appendChild(gymWorkoutSets);

// const gymWorkoutReps = document.createElement("p");
// gymWorkoutReps.innerText = gymWorkout.reps;
// gymWorkoutDiv.appendChild(gymWorkoutReps);

// output.prepend(gymWorkoutCol);
// }​​
// }​​)
// .catch(err => console.error(err));

// }​​);