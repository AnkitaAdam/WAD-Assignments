document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      alert("Login successful! Redirecting...");
      localStorage.setItem("loggedInUser", JSON.stringify(user)); // Store logged-in user
      window.location.href = "welcome.html"; // Redirect to a welcome page
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });
