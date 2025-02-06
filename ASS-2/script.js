document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the email already exists
    const userExists = users.some((user) => user.email === email);
    if (userExists) {
      alert("User with this email already exists. Please login.");
      return;
    }

    // Save new user
    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! You can now login.");
    window.location.href = "login.html"; // Redirect to login page
  });
