// Get DOM elements
const moodButtons = document.querySelectorAll(".mood-btn");
const moodWrapper = document.querySelector(".mood-wrapper");
const todayMood = document.getElementById("today-mood");
const saveBtn = document.getElementById("save-btn");
const saveMessage = document.getElementById("save-message");
const noteInput = document.getElementById("note");

let selectedMood = "";

// Handle mood button clicks
moodButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove 'selected' from all
    moodButtons.forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");

    // Get mood from data attribute
    selectedMood = btn.dataset.mood;

    // Remove previous mood classes from wrapper
    moodWrapper.classList.remove("happy", "sad", "angry", "tired", "excited");

    // Add new mood class
    moodWrapper.classList.add(selectedMood);
  });
});


// Handle save button click
saveBtn.addEventListener("click", () => {
  if (!selectedMood) {
    alert("Please select a mood first!");
    return;
  }

  // Display the selected mood
  todayMood.textContent = `Your mood: ${selectedMood}`;

  // Optionally, save the note
  const note = noteInput.value;
  console.log("Saved mood:", selectedMood, "Note:", note);

  // Show save message
  saveMessage.classList.remove("hidden");

  // Hide after 2 seconds
  setTimeout(() => saveMessage.classList.add("hidden"), 2000);
});
