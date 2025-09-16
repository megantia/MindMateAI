// aiCoach.js
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("popUp2");
  if (!modal) return;

  const stepText = document.getElementById("coachStep");
  const nextBtn = document.getElementById("nextStepBtn");
  if (!stepText || !nextBtn) return;

  const steps = [
    "Step 1: Unbox your product carefully.",
    "Step 2: Plug it in and power it on.",
    "Step 3: Download the companion app from the store.",
    "Step 4: Follow the app instructions to connect your product.",
    "🎉 All done! Enjoy using your product."
  ];

  let currentStep = -1; // start at -1 so first click shows Step 1

  function showNextStep() {
    currentStep++;
    if (currentStep < steps.length) {
      stepText.textContent = steps[currentStep];
    } else {
      stepText.textContent = "Thanks for following along 👋";
      nextBtn.style.display = "none";
    }
  }

  function resetCoach() {
    currentStep = -1; // reset to show original placeholder first
    stepText.textContent = "Welcome! Ready to learn how to use your product?";
    nextBtn.style.display = "inline-block";
  }

  nextBtn.addEventListener("click", showNextStep);

  // Hook into existing openPopUp
  if (typeof window.openPopUp === "function") {
    const originalOpenPopUp = window.openPopUp;
    window.openPopUp = function(id) {
      if (id === "popUp2") resetCoach();
      originalOpenPopUp(id);
    };
  }
});
