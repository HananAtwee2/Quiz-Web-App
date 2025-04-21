const quizzes= [
    {
        title :"JavaScript Bases",
        questions:[
            {
                question: "What is the output of 2 + 2 in JavaScript?",
                options: ["3", "4", "5", "6"],
                correctAnswer: "4"
            },
            {
                question: "Which keyword is used to define a variable in JavaScript?",
                options: ["var", "let", "const", "all of the above"],
                correctAnswer: "all of the above"
            },
            {
                question: "What does the '===' operator do in JavaScript?",
                options: ["Checks for equality", "Checks for type and equality", "Checks if the values are different", "None of the above"],
                correctAnswer: "Checks for type and equality"
            }
        ]
    },
    {
        title:"HTML & CSS",
        questions: [
            {
                question: "What is the correct HTML element for inserting a line break?",
                options: ["<break>", "<br>", "<hr>", "<lb>"],
                correctAnswer: "<br>"
            },
            {
                question: "Which CSS property is used to change the text color?",
                options: ["color", "text-color", "font-color", "background-color"],
                correctAnswer: "color"
            },
            {
                question: "Which HTML tag is used to define an internal stylesheet?",
                options: ["<script>", "<style>", "<css>", "<link>"],
                correctAnswer: "<style>"
            }
        ]
    },
    {
        title:"General Knowledge",
        questions:[
            {
                question: "What does HTML stand for?",
                options: ["HyperText Markup Language",
                    "HyperText Machine Language",
                    "Hyper Transfer Markup Language",
                    "HighText Markup Language"],
                correctAnswer: "HyperText Markup Language"
            },
            {
                question: "What will the following JavaScript code output? console.log(2 + '2');",
                options:  [
                    "22",
                    "4",
                    "undefined",
                    "error"
                ],
                correctAnswer: "22"
            },
            {
                question: "Which of the following is the correct way to link a CSS file in an HTML document?",
                options: [
                    "<link rel='stylesheet' href='style.css'>",
                    "<css src='style.css'>",
                    "<style src='style.css'>",
                    "<link src='style.css'>"
                ],
                correctAnswer:"<link rel='stylesheet' href='style.css'>"
            }
        ]
    }
];

localStorage.setItem("quizzes",JSON.stringify(quizzes));

const selectedQuiz = JSON.parse(localStorage.getItem("selectedQuiz"));

if (!selectedQuiz) {
    alert("No quiz selected!");
    window.location.href = "index.html";  // Go back to the homepage if no quiz is selected
}

// Display quiz title
document.getElementById("quiz-title").textContent = selectedQuiz.title;


const quizQuestions = selectedQuiz.questions || [];

if (quizQuestions.length === 0) {
    alert("No questions available for this quiz.");
    window.location.href = "index.html";
}

// Display the questions dynamically
const quizQuestionsDiv = document.getElementById("quiz-questions");
quizQuestions.forEach((quiz, index) => {
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");

    // Add question text
    const questionText = document.createElement("p");
    questionText.textContent = `${index + 1}. ${quiz.question}`;
    questionElement.appendChild(questionText);

    // Add options for each question
    quiz.options.forEach((option, optionIndex) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `question-${index}`;
        input.value = option;

        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        questionElement.appendChild(label);
    });

    quizQuestionsDiv.appendChild(questionElement);
});

// Handle submission and score calculation
document.getElementById("submit-btn").addEventListener("click", function () {
    let score = 0;
    quizQuestions.forEach((quiz, index) => {
        const selectedAnswer = document.querySelector(`input[name="question-${index}"]:checked`);

        if (selectedAnswer && selectedAnswer.value === quiz.correctAnswer) {
            score++;
        }
    });

    // Display the score
    document.getElementById("score").textContent = `Your Score: ${score} out of ${quizQuestions.length}`;

    // Save score in localStorage for the current user
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
        const userScores = JSON.parse(localStorage.getItem("userScores")) || {};
        userScores[currentUser.username] = userScores[currentUser.username] || [];
        userScores[currentUser.username].push({
            quizTitle: selectedQuiz.title,
            score: score,
            date: new Date().toLocaleString()
        });
        localStorage.setItem("userScores", JSON.stringify(userScores));
    }
});
