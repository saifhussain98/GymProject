"use strict";

document.querySelector("#gymWorkout").addEventListener("submit", function (event) {
    event.preventDefault(); 

    console.log("THIS:", this);

    const data = {
        muscleGroup: this.gymWorkoutMuscleGroup.value,
        exercise: this.gymWorkoutExercise.value,
        weight: this.gymWorkoutWeight.value,
        sets: this.gymWorkoutSets.value,
        reps: this.gymWorkoutReps.value
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
                gymWorkoutCol.className = "col-3";

                const gymWorkoutCard = document.createElement("div");
                gymWorkoutCard.className = "card";
                // gymWorkoutCard.style.textAlign= "center";
                gymWorkoutCol.appendChild(gymWorkoutCard);

                const gymWorkoutDiv = document.createElement("div");
                gymWorkoutDiv.className = "card-body";
                gymWorkoutCard.appendChild(gymWorkoutDiv);

                const gymWorkoutMuscleGroup = document.createElement("h5");
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

                const gymWorkoutUpdate = document.createElement('button');
                gymWorkoutUpdate.innerText = "UPDATE";
                gymWorkoutUpdate.classList.add("btn", "btn-secondary", "m-2");
                gymWorkoutUpdate.addEventListener("click", () => {
                    if (confirm('Are you sure?')) {
                        console.log(updateGymWorkout(gymWorkout.id));
                    } else {
                        console.log("You pressed cancel");
                    }
                });
                gymWorkoutDiv.appendChild(gymWorkoutUpdate);

                output.appendChild(gymWorkoutCol);

                const gymWorkoutDelete = document.createElement('button');
                gymWorkoutDelete.innerText = "DELETE";
                gymWorkoutDelete.classList.add("btn", "btn-danger");
                gymWorkoutDelete.addEventListener("click", () => {
                    if (confirm('Are you sure?')) {
                        console.log(deleteGymWorkout(gymWorkout.id));
                    } else {
                    console.log("You pressed cancel");
                    }
                });
                gymWorkoutDiv.appendChild(gymWorkoutDelete);

                output.appendChild(gymWorkoutCol);
            }
        })
        .catch(err => console.error(err));

}

const updateGymWorkout = (id) => {
    axios.patch("http://localhost:8080/updateGymWorkout/" + id + "?muscleGroup=" + this.gymWorkoutMuscleGroup.value + "&exercise=" + this.gymWorkoutExercise.value + "&weight=" + this.gymWorkoutWeight.value + "&sets=" + this.gymWorkoutSets.value + "&reps=" + this.gymWorkoutReps.value)
            .then(res => {
                console.log("Update successful");
                renderGymWorkouts();
            }).catch(err => console.error(err));

}

const deleteGymWorkout = (id) => {
    axios.delete("http://localhost:8080/removeGymWorkout/" + id)
            .then(res => {
                console.log("Delete successful");
                renderGymWorkouts();
            }).catch(err => console.error(err));

}

renderGymWorkouts();










// "use strict";

// document.getElementById("gymWorkoutForm").addEventListener("submit", function (event) {
//     event.preventDefault(); 

//     console.log("THIS:", this);

//     const form = event.target;

//     const gymWorkout = {
//         muscleGroup: form.gymWorkoutMuscleGroup.value,
//         exercise: form.gymWorkoutExercise.value,
//         weight: form.gymWorkoutWeight.value,
//         sets: form.gymWorkoutSets.value,
//         reps: form.gymWorkoutReps.value
//     }


//     // console.log("DATA:", data);

//     axios.post("http://localhost:8080/createGymWorkout", gymWorkout)
//             .then(res => {
//                 console.log("RESPONSE:", res);
//                 form.muscleGroup.focus();
//                 form.reset();
//                 console.log("success");
//                 renderGymWorkouts();
//             })
//             .catch(err => console.error(err));
//         console.log("gymWorkout: ", gymWorkout);
// });
//     document.querySelector("gymWorkoutsSearch").addEventListener("submit", function (event) {
//         event.preventDefault();

//     const data = event.target;
    
//     axios.get(`http://localhost:8080/getGymWorkoutByMuscleGroup/${​​form.searchMuscleGroup.value}​​`)
//     .then(res => {​​
//     console.log("RESPONSE: ", res);
//     form.searchName.focus();
//     form.reset();
//     console.log("success");
//     var existingSearchDiv = document.getElementById('searchGymWorkoutsDiv');
//     if (existingSearchDiv != null) {​​
//     existingSearchDiv.remove();
//     }​​
//     for (let gymWorkout of res.data) {​​
//     const gymWorkoutCol = document.createElement("div");
//     gymWorkoutCol.id = "searchGymWorkoutDiv";
//     gymWorkoutCol.className = "col-12";
    
//     const gymWorkoutCard = document.createElement("div");
//     gymWorkoutCard.className = "card";
//     gymWorkoutCard.style.textAlign="center";
//     gymWorkoutCol.appendChild(gymWorkoutCard);
    
//     const gymWorkoutDiv = document.createElement("div");
//     gymWorkoutDiv.className = "card-body";
//     gymWorkoutCard.appendChild(gymWorkoutDiv);
    
//     const gymWorkoutMuscleGroup = document.createElement("p");
//     gymWorkoutMuscleGroup.innerText = gymWorkout.muscleGroup;
//     gymWorkoutDiv.appendChild(gymWorkoutMuscleGroup);
    
//     const gymWorkoutExercise = document.createElement("p");
//     gymWorkoutExercise.innerText = gymWorkout.exercise;
//     gymWorkoutDiv.appendChild(gymWorkoutExercise);
    
//     const gymWorkoutWeight = document.createElement("p");
//     gymWorkoutWeight.innerText = gymWorkout.weight + " Kg";
//     gymWorkoutDiv.appendChild(gymWorkoutWeight);
    
//     const gymWorkoutSets = document.createElement("p");
//     gymWorkoutSets.innerText = gymWorkout.sets;
//     gymWorkoutDiv.appendChild(gymWorkoutSets);
    
//     const gymWorkoutReps = document.createElement("p");
//     gymWorkoutReps.innerText = gymWorkout.reps;
//     gymWorkoutDiv.appendChild(gymWorkoutReps);
    
//     output.appendChild(gymWorkoutCol);
//     }​​
//     }​​)
//     .catch(err => console.error(err));
    
//     }​​);


// const output = document.getElementById('output');

// function renderGymWorkouts() {
//     axios.get("http://localhost:8080/getGymWorkouts")
//         .then(res => {
//             console.log("gymWorkouts: ", res.data);
//             output.innerHTML = "";
//             for (let gymWorkout of res.data) {
//                 const gymWorkoutCol = document.createElement("div");
//                 gymWorkoutCol.className = "col-3";

//                 const gymWorkoutCard = document.createElement("div");
//                 gymWorkoutCard.className = "card";
//                 // gymWorkoutCard.style.textAlign= "center";
//                 gymWorkoutCol.appendChild(gymWorkoutCard);

//                 const gymWorkoutDiv = document.createElement("div");
//                 gymWorkoutDiv.className = "card-body";
//                 gymWorkoutCard.appendChild(gymWorkoutDiv);

//                 const gymWorkoutMuscleGroup = document.createElement("h5");
//                 gymWorkoutMuscleGroup.innerText = gymWorkout.muscleGroup;
//                 gymWorkoutDiv.appendChild(gymWorkoutMuscleGroup);

//                 const gymWorkoutExercise = document.createElement("p");
//                 gymWorkoutExercise.innerText = gymWorkout.exercise;
//                 gymWorkoutDiv.appendChild(gymWorkoutExercise);

//                 const gymWorkoutWeight = document.createElement("p");
//                 gymWorkoutWeight.innerText = gymWorkout.weight + " Kg";
//                 gymWorkoutDiv.appendChild(gymWorkoutWeight);

//                 const gymWorkoutSets = document.createElement("p");
//                 gymWorkoutSets.innerText = gymWorkout.sets;
//                 gymWorkoutDiv.appendChild(gymWorkoutSets);

//                 const gymWorkoutReps = document.createElement("p");
//                 gymWorkoutReps.innerText = gymWorkout.reps;
//                 gymWorkoutDiv.appendChild(gymWorkoutReps);

//                 const gymWorkoutUpdate = document.createElement('button');
//                 gymWorkoutUpdate.innerText = "UPDATE";
//                 gymWorkoutUpdate.classList.add("btn", "btn-secondary", "m-2");
//                 gymWorkoutUpdate.addEventListener("click", () => {
//                     if (confirm('Are you sure?')) {
//                         console.log(updateGymWorkout(gymWorkout.id));
//                     } else {
//                         console.log("You pressed cancel");
//                     }
//                 });
//                 gymWorkoutDiv.appendChild(gymWorkoutUpdate);

//                 output.appendChild(gymWorkoutCol);

//                 const gymWorkoutDelete = document.createElement('button');
//                 gymWorkoutDelete.innerText = "DELETE";
//                 gymWorkoutDelete.classList.add("btn", "btn-danger");
//                 gymWorkoutDelete.addEventListener("click", () => {
//                     if (confirm('Are you sure?')) {
//                         console.log(deleteGymWorkout(gymWorkout.id));
//                     } else {
//                     console.log("You pressed cancel");
//                     }
//                 });
//                 gymWorkoutDiv.appendChild(gymWorkoutDelete);

//                 output.appendChild(gymWorkoutCol);
//             }
//         })
//         .catch(err => console.error(err));

// }

// const updateGymWorkout = (id) => {
//     axios.patch("http://localhost:8080/updateGymWorkout/" + id + "?muscleGroup=" + this.gymWorkoutMuscleGroup.value + "&exercise=" + this.gymWorkoutExercise.value + "&weight=" + this.gymWorkoutWeight.value + "&sets=" + this.gymWorkoutSets.value + "&reps=" + this.gymWorkoutReps.value)
//             .then(res => {
//                 console.log("Update successful");
//                 renderGymWorkouts();
//             }).catch(err => console.error(err));

// }

// const deleteGymWorkout = (id) => {
//     axios.delete("http://localhost:8080/removeGymWorkout/" + id)
//             .then(res => {
//                 console.log("Delete successful");
//                 renderGymWorkouts();
//             }).catch(err => console.error(err));

// }

// renderGymWorkouts();