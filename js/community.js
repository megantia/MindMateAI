document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("discussion-form");
  const list = document.getElementById("discussion-list");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Stop page reload

    const username = document.getElementById("username").value.trim();
    const message = document.getElementById("message").value.trim();

    if (username && message) {
      // Create new list item
      const li = document.createElement("li");
      li.innerHTML = `<strong>${message}</strong> - by ${username}`;

      // Add it to the top of the list
      list.insertBefore(li, list.firstChild);

      // Reset form
      form.reset();
    }
  });
});
