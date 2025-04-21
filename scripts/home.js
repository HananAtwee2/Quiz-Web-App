const currentUser = JSON.parse(localStorage.getItem("currentUser"));
if (!currentUser) {
  alert("Please login first.");
  window.location.href = "index.html";
}
// Show welcome message
document.getElementById("welcome-msg").textContent = `Hello, ${currentUser.username}! Ready to test your knowledge?`;

const quizzes = JSON.parse(localStorage.getItem("quizzes")) || [
    { id: 1, title: "JavaScript Basics" },
    { id: 2, title: "HTML & CSS" },
    { id: 3, title: "General Knowledge" }
];

//save to localstorage if not saved yet
localStorage.setItem("quizzes", JSON.stringify(quizzes));

//display quizzes
const quizList = document.getElementById("quiz-list");
//loop every quiz
quizzes.forEach((quiz) => {
    const li = document.createElement("li");
    li.textContent = quiz.title;
    li.addEventListener("click", () => {
        localStorage.setItem("selectedQuiz", JSON.stringify(quiz));
        window.location.href = "quiz.html"; // move to quiz page
    });
    quizList.appendChild(li);
});