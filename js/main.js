// CIS3020 – Southern Comforts Online
// Basic form validation and console test

console.log("Welcome to The Southern Comforts Online!");

// Simple form validation for contact page
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill out all fields before submitting.");
        e.preventDefault();
      } else if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        e.preventDefault();
      }
    });
  }
});
