function openPopUp(id) {
  document.getElementById(id).style.display = "flex";
}

function closePopUp(id) {
  document.getElementById(id).style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
  document.querySelectorAll('.popup').forEach(popup => {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
};
