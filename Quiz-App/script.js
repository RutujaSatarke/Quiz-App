const questions = [
    { 
        question: "Which language is used for web development?",
        answers: ["Python", "C++", "Java", "JavaScript"], 
        correct: "JavaScript" 
    },
    { 
        question: "Which protocol is used to send emails??", 
        answers: ["HTTP", "FTP", "SMTP", "IP"], 
        correct: "SMTP" 
    },
    { 
        question: "Which of the following is a backend framework?", 
        answers: ["React", "Angular", "Django", "Bootstrap"], 
        correct: "Django" 
    },
    {
        question: "Which symbol is used to comment in Python?",
        answers: ["//", "<!-- -->", "#", "/* */"],
        correct: "#"
    },
    {
        question: "What is the time complexity of binary search?",
        answers: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
        correct: "O(log n)"
    },
    {
        question: "Which of the following is a NoSQL database?",
        answers: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
        correct: "MongoDB"
    },
    {
        question: "What does the term REST stand for in APIs?",
        answers: ["Representational State Transfer", "Remote Execution Service Technology", "Random Event Stream Transfer", "Recursive Encoding Standard Transfer"],
        correct: "Representational State Transfer"

    },
    {
        question: "Which programming language is primarily used for Android development?",
        answers: ["Swift", "Kotlin", "Javascript", "PHP"],
        correct: "Kotlin"
    },
    {
        question: "Which data structure uses LIFO (Last In, First Out)?",
        answers: ["Queue", "Stack", "Linked List", "Array"],
        correct: "Stack"
    },
    {
        question: "What is the main function of an operating system?",
        answers: ["Manage hardware and software resources", "Run web applications", "Convert programming languages", "Design websites"],
        correct: "Manage hardware and software resources"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
const scoreElement = document.getElementById("score");

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    restartButton.style.display = "none";
    nextButton.classList.add("hidden");
    scoreElement.innerText = `Score: ${score}`;
    loadQuestion();
}

function loadQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(button, answer, currentQuestion.correct));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add("hidden");
    answerButtons.innerHTML = "";
}

function selectAnswer(button, answer, correctAnswer) {
    Array.from(answerButtons.children).forEach(btn => {
        btn.disabled = true;
        if (btn.innerText === correctAnswer) {
            btn.classList.add("correct");
        } else if (btn.innerText === answer) {
            btn.classList.add("wrong");
        }
    });

    if (answer === correctAnswer) {
        score++;
    }

    scoreElement.innerText = `Score: ${score}`;
    nextButton.classList.remove("hidden");
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        questionElement.innerText = `Quiz Completed! Your final score is ${score}/${questions.length}.`;
        answerButtons.innerHTML = "";
        nextButton.classList.add("hidden");
        showRestartButton();
    }

});
        
    function restartQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        restartButton.style.display = "none";
        startQuiz();
    }
    
    
    function showRestartButton() {
        restartButton.style.display = "block";
    }


startQuiz();
