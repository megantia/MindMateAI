// selfCare.js

// Elements
const newRoutineInput = document.getElementById("newRoutineInput");
const addRoutineBtn = document.getElementById("addRoutineBtn");
const routineList = document.getElementById("routineList");

// Load routines from localStorage
let routines = JSON.parse(localStorage.getItem("routines")) || [];

// Function to render routines
function renderRoutines() {
  routineList.innerHTML = "";
  routines.forEach((routine, index) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = routine.completed;
    checkbox.addEventListener("change", () => {
      routines[index].completed = checkbox.checked;
      saveRoutines();
    });

    const span = document.createElement("span");
    span.textContent = routine.name;
    span.style.textDecoration = routine.completed ? "line-through" : "none";

    checkbox.addEventListener("change", () => {
      span.style.textDecoration = checkbox.checked ? "line-through" : "none";
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    routineList.appendChild(li);
  });
}

// Function to save routines
function saveRoutines() {
  localStorage.setItem("routines", JSON.stringify(routines));
}

// Add new routine
addRoutineBtn.addEventListener("click", () => {
  const name = newRoutineInput.value.trim();
  if (!name) return alert("Please enter a routine name.");

  routines.push({ name: name, completed: false });
  newRoutineInput.value = "";
  saveRoutines();
  renderRoutines();
});

// Initial render
renderRoutines();
