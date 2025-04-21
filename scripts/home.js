// Example quizzes if nothing is stored yet
const defaultQuizzes = [
    { id: 1, title: "JavaScript Basics" },
    { id: 2, title: "HTML & CSS Fundamentals" },
    { id: 3, title: "General Knowledge" }
];

// Load from localStorage or set default
let quizzes = JSON.parse(localStorage.getItem('quizzes')) || defaultQuizzes;

// Save default quizzes to localStorage if not already there
if (!localStorage.getItem('quizzes')) {
    localStorage.setItem('quizzes', JSON.stringify(defaultQuizzes));
}

const quizList = document.getElementById('quiz-list');

quizzes.forEach(quiz => {
    const li = document.createElement('li');
    li.textContent = quiz.title;
    li.classList.add('quiz-item');
    li.addEventListener('click', () => {
        // Save the selected quiz to localStorage and redirect
        localStorage.setItem('selectedQuizId', quiz.id);
        window.location.href = 'quiz.html';
    });
    quizList.appendChild(li);
});
