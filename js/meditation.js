let meditationMode = {
  basic: {
    steps: ["Inhale", "Hold", "Exhale"],
    durations: [4000, 2000, 4000],
  },
  box: {
    steps: ["Inhale", "Hold", "Exhale", "Hold"],
    durations: [4000, 4000, 4000, 4000],
  },
  478: {
    steps: ["Inhale", "Hold", "Exhale"],
    durations: [4000, 7000, 8000],
  },
};

let steps = [];
let durations = [];
let index = 0;
let interval, timerInterval;
let elapsed = 0;

const circle = document.getElementById("meditationCircle");
const timerDisplay = document.getElementById("timer");
const modeSelect = document.getElementById("meditationMode");

function startMeditation() {
  stopMeditation(); // reset if running
  let choice = modeSelect.value;

  steps = meditationMode[choice].steps;
  durations = meditationMode[choice].durations;

  elapsed = 0;
  timerInterval = setInterval(() => {
    elapsed++;
    timerDisplay.textContent = `Elapsed Time: ${elapsed}s`;
  }, 1000);

  runStep();
}

function runStep() {
  let step = steps[index];
  circle.textContent = step;

  circle.classList.remove("inhale", "hold", "exhale");

  if (step === "Inhale") circle.classList.add("inhale");
  if (step === "Hold")   circle.classList.add("hold");
  if (step === "Exhale") circle.classList.add("exhale");

  interval = setTimeout(() => {
    index = (index + 1) % steps.length;
    runStep();
  }, durations[index]);
}


function stopMeditation() {
  clearTimeout(interval);
  clearInterval(timerInterval);
  circle.textContent = "Ready";
  circle.className = "";
  index = 0;
  elapsed = 0;
  timerDisplay.textContent = "Elapsed Time: 0s";
}
