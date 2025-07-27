document.addEventListener('DOMContentLoaded', () => {

    const questions = [
        {
            question: "What is the capital of France?",
            choices: ["Berlin", "Madrid", "Paris", "Rome"],
            answer: "Paris",
            points: 10
        },
        {
            question: "What is the largest planet in our solar system?",
            choices: ["Earth", "Jupiter", "Saturn", "Mars"],
            answer: "Jupiter",
            points: 15
        },
        {
            question: "What is the chemical symbol for water?",
            choices: ["H2O", "CO2", "O2", "NaCl"],
            answer: "H2O",
            points: 5
        },
        {
            question: "Who wrote 'To Kill a Mockingbird'?",
            choices: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
            answer: "Harper Lee",
            points: 10
        },
        {
            question: "What is the powerhouse of the cell?",
            choices: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
            answer: "Mitochondria",
            points: 5
        }
    ]


    // buttons
    const startButton = document.getElementById('start-btn');
    const nextButton = document.getElementById('next-btn');
    const restartButton = document.getElementById('restart-btn');

    // containers
    const questionContainer = document.getElementById('question-container');
    const questionText = document.getElementById('question-text');
    const choicesList = document.getElementById('choices-list');

    // score
    const resultContainer = document.getElementById('result-container');
    const scoreText = document.getElementById('score-text');


    let currentQuestionIndex = 0;
    let score = 0;
    let totalPoints = questions.reduce((total, question) => total + question.points, 0);

    const maxPointsText = document.getElementById('max-points');
    maxPointsText.textContent = `Total Score Possible: ${totalPoints} points`;

    startButton.addEventListener('click', StartQuiz)
    // nextButton.addEventListener('click', () => {
    //     currentQuestionIndex++;
    //     if (currentQuestionIndex < questions.length) {
    //         showQuestion();
    //     }
    //     else {
    //         showResult();
    //     }
    // })

    restartButton.addEventListener('click', () => {
        currentQuestionIndex = 0;
        score = 0;
        questionContainer.classList.add('hidden');
        StartQuiz()
    })

    function StartQuiz() {
        startButton.classList.add('hidden')
        resultContainer.classList.add('hidden')
        questionContainer.classList.remove('hidden')
        showQuestion()
    }

  
    function showQuestion() {
    nextButton.classList.add('hidden')
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = `${currentQuestion.question} (${currentQuestion.points} points)`;
    choicesList.innerHTML = '';

    currentQuestion.choices.forEach(choice => {
        const li = document.createElement('li');
        li.textContent = choice;
        li.addEventListener('click', () => selectAnswer(choice));// 
        // this is way to delay the execution and pass the arguments which is evaluated
        // // otherwise it would execute immediately
        choicesList.appendChild(li);
    });
}


    function selectAnswer(choice) {
        const correctAnswer = questions[currentQuestionIndex].answer;
        if (choice === correctAnswer) {
            score += questions[currentQuestionIndex].points;
        }
        // nextButton.classList.remove('hidden');  
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        questionContainer.classList.add('hidden');
        resultContainer.classList.remove('hidden');
        scoreText.textContent = `${score} out of ${totalPoints}`;
        restartButton.classList.remove('hidden')
    }

})