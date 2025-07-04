// Ask for user's name (but we won't use it in the greeting)
const name = prompt("What's your name?");
const welcomeText = document.getElementById("welcome-text");

// Set static greeting message
if (welcomeText) {
  welcomeText.innerText = "Hello there! Welcome to Bahas Otomotif!";
}

// Form validation and result display
const form = document.getElementById("messageForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("messageInput").value.trim();

  if (!name || !email || !phone || !message) {
    alert("Please complete all fields.");
    return;
  }

  result.innerHTML = `
    <h3>Submitted Info:</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;

  form.reset();
});
