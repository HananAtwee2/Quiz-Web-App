const currentUser = JSON.parse(localStorage.getItem("currentUser"));
if (!currentUser) {
  alert("Please login first.");
  window.location.href = "index.html";
}
// Show welcome message
document.getElementById("welcome-user").textContent = `Hello, ${currentUser.username}! Ready to test your knowledge?`;

