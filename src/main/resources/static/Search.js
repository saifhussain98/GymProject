const gymProject = document.getElementById('output');
const searchMuscleGroup = document.getElementById('searchMuscleGroup');
let muscleGroupGymWorkouts = [];

searchMuscleGroup.addEventListener('input', (e) => {
    const searchString = e.target.value.toLowerCase();
    console.log(searchString);
    const filteredGymWorkouts = muscleGroupGymWorkouts.filter((gymWorkout) => {
        return (
            gymWorkout.muscleGroup.toLowerCase().includes(searchString) ||
            gymWorkout.exercise.toLowerCase().includes(searchString)
            
        );
    });
    displayGymWorkouts(filteredGymWorkouts);
});
const loadGymWorkouts = async () => {
    try {
        const res = await fetch('http://localhost:8080/getGymWorkouts');
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
            <div class="card m-3">
                <h2>${gymWorkout.muscleGroup}</h2>
                <p>Exercise: ${gymWorkout.exercise}</p>
                <p>Weight: ${gymWorkout.weight + " Kg"}</p>
                <p>Weight: ${gymWorkout.sets + " sets"}</p>
                <p>Weight: ${gymWorkout.reps + " reps"}</p>
            </div>
        `;
        })
        .join('');
        gymProject.innerHTML = htmlString;
};
loadGymWorkouts();