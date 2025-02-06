// Fetch users from localStorage
let users = JSON.parse(localStorage.getItem("users")) || [];

// Get the user list element in HTML
const userListElement = document.getElementById("userList");

// If there are users, display them; otherwise, show a no users message
if (users.length > 0) {
  users.forEach((user) => {
    const listItem = document.createElement("li");
    listItem.textContent = `Username: ${user.username}, Email: ${user.email}`;
    userListElement.appendChild(listItem); // Add the list item to the UL
  });
} else {
  // If no users are found, display a message
  const message = document.createElement("li");
  message.textContent = "No users registered yet.";
  userListElement.appendChild(message);
}
