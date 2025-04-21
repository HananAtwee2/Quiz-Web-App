const currentUser = JSON.parse(localStorage.getItem("currentUser"));
if (!currentUser) {
  alert("Please login first.");
  window.location.href = "index.html";
}
// Show welcome message
document.getElementById("welcome-user").textContent = `Hello, ${currentUser.username}! Ready to test your knowledge?`;

const quizzes = JSON.parse(localStorage.getItem("quizzes")) || [
    { id: 1, title: "JavaScript Basics" },
    { id: 2, title: "HTML & CSS" },
    { id: 3, title: "General Knowledge" }
];

//save to localstorage if not saved yet
localStorage.setItem("quizzes", JSON.stringify(quizzes));
