const gymProject = document.getElementById('gymProject');
const searchBar = document.getElementById('searchBar');
let gymWorkouts = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredGymWorkouts = gymWorkouts.filter((gymWorkout) => {
        return (
            gymWorkout.muscleGroup.toLowerCase().includes(searchString) ||
            gymWorkout.exercise.toLowerCase().includes(searchString)
            // gymWorkout.weight.toLowerCase().includes(searchInteger) ||
            // gymWorkout.sets.toLowerCase().includes(searchInteger) ||
            // gymWorkout.reps.toLowerCase().includes(searchInteger )
            
        );
    });
    displayGymWorkouts(filteredGymWorkouts);
});
const loadGymWorkouts = async () => {
    try {
        const res = await fetch('http://localhost:8080/getGymWorkouts');
        console.log(res);
        GymWorkouts = await res.json();
        displayGymWorkouts(GymWorkouts);
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
                <p>Sets: ${gymWorkout.sets}</p>
                <p>Reps: ${gymWorkout.reps}</p>
            </li>
        `;
        })
        .join('');
        gymWorkouts.innerHTML = htmlString;
};
loadGymWorkouts();