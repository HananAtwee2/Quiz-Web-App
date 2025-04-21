// Check if the current user is an admin
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (!currentUser || currentUser.role !== "admin") {
    alert("You must be an admin to view the dashboard.");
    window.location.href = "index.html"; // Redirect to the homepage if not an admin
}

// Fetch user scores from localStorage
const userScores = JSON.parse(localStorage.getItem("userScores")) || {};

// Populate the dashboard with user data
const tableBody = document.getElementById("user-scores-table").querySelector("tbody");

Object.keys(userScores).forEach(username => {
    userScores[username].forEach(scoreData => {
        const row = document.createElement("tr");

        // Create table cells
        const usernameCell = document.createElement("td");
        usernameCell.textContent = username;

        const quizTitleCell = document.createElement("td");
        quizTitleCell.textContent = scoreData.quizTitle;

        const scoreCell = document.createElement("td");
        scoreCell.textContent = scoreData.score;

        const dateCell = document.createElement("td");
        dateCell.textContent = scoreData.date;

        // Append cells to the row
        row.appendChild(usernameCell);
        row.appendChild(quizTitleCell);
        row.appendChild(scoreCell);
        row.appendChild(dateCell);

        // Append the row to the table body
        tableBody.appendChild(row);
    });
});
