// State variables
let quizQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = []; // stores objects: { questionId, selectedOption (0-3), isCorrect }
let timerInterval;
let timeRemaining = 0; // in seconds
let isTimeLimit = false;

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const setupForm = document.getElementById('setup-form');

const questionCounter = document.getElementById('question-counter');
const progressBar = document.getElementById('progress-bar');
const timerDisplay = document.getElementById('timer-display');
const timeText = document.getElementById('time');

const questionCategory = document.getElementById('question-category');
const questionDifficulty = document.getElementById('question-difficulty');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnReview = document.getElementById('btn-review');
const btnRestart = document.getElementById('btn-restart');
const reviewSection = document.getElementById('review-section');
const reviewContainer = document.getElementById('review-container');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupForm.addEventListener('submit', startQuiz);
    btnPrev.addEventListener('click', () => navigateQuestion(-1));
    btnNext.addEventListener('click', () => navigateQuestion(1));
    btnReview.addEventListener('click', toggleReview);
    btnRestart.addEventListener('click', resetQuiz);
    
    // Set max available questions label
    if (typeof allQuestions !== 'undefined') {
        const maxQsSpan = document.getElementById('max-qs');
        if (maxQsSpan) maxQsSpan.textContent = allQuestions.length;
        
        const numInput = document.getElementById('num-questions');
        if (numInput) numInput.max = allQuestions.length;
    }
});

function startQuiz(e) {
    e.preventDefault();
    
    // Get settings
    const numQuestionsSetting = document.getElementById('num-questions').value;
    const difficultySetting = document.getElementById('difficulty').value;
    const timeSetting = parseInt(document.getElementById('time-limit').value);
    
    // Filter questions by difficulty
    let filteredQuestions = [...allQuestions];
    if (difficultySetting !== 'mixed') {
        filteredQuestions = filteredQuestions.filter(q => q.difficulty === difficultySetting);
    }
    
    // Shuffle questions
    filteredQuestions = shuffleArray(filteredQuestions);
    
    // Slice based on number selected
    let numQuestions = filteredQuestions.length;
    if (numQuestionsSetting !== 'all') {
        numQuestions = Math.min(parseInt(numQuestionsSetting), filteredQuestions.length);
    }
    
    quizQuestions = filteredQuestions.slice(0, numQuestions);
    
    if (quizQuestions.length === 0) {
        alert("No questions match your selected criteria. Please adjust your settings.");
        return;
    }

    // Initialize user answers array with nulls
    userAnswers = Array(quizQuestions.length).fill(null);
    currentQuestionIndex = 0;

    // Set up timer
    if (timeSetting > 0) {
        isTimeLimit = true;
        timeRemaining = timeSetting * 60;
        timerDisplay.classList.remove('d-none');
        updateTimerDisplay();
        timerInterval = setInterval(timerTick, 1000);
    } else {
        isTimeLimit = false;
        timerDisplay.classList.add('d-none');
        // We still track time taken, counting up
        timeRemaining = 0;
        timerInterval = setInterval(() => { timeRemaining++; }, 1000);
    }

    // Switch screens
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    
    loadQuestion();
}

function loadQuestion() {
    const q = quizQuestions[currentQuestionIndex];
    
    // Update UI headers
    questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
    const progressPercent = ((currentQuestionIndex) / quizQuestions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
    
    questionCategory.textContent = q.unit;
    questionDifficulty.textContent = q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1);
    
    // Set difficulty badge color
    questionDifficulty.className = 'badge mb-2';
    if(q.difficulty === 'easy') questionDifficulty.classList.add('bg-success');
    else if(q.difficulty === 'medium') questionDifficulty.classList.add('bg-warning', 'text-dark');
    else if(q.difficulty === 'hard') questionDifficulty.classList.add('bg-danger');

    questionText.textContent = q.question;
    
    // Clear and build options
    optionsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    
    q.options.forEach((optText, index) => {
        const optDiv = document.createElement('div');
        optDiv.className = 'option-btn';
        optDiv.innerHTML = `
            <span class="option-letter">${letters[index]}</span>
            <span class="option-text">${optText}</span>
        `;
        
        // If already selected, style it
        if (userAnswers[currentQuestionIndex] !== null && userAnswers[currentQuestionIndex].selectedOption === index) {
            optDiv.classList.add('selected');
        }

        optDiv.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optDiv);
    });

    // Update buttons
    btnPrev.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === quizQuestions.length - 1) {
        btnNext.innerHTML = '<i class="fas fa-check me-2"></i> Submit Quiz';
        btnNext.classList.remove('btn-success');
        btnNext.classList.add('btn-primary');
    } else {
        btnNext.innerHTML = 'Next <i class="fas fa-arrow-right ms-2"></i>';
        btnNext.classList.remove('btn-primary');
        btnNext.classList.add('btn-success');
    }
}

function selectOption(index) {
    const q = quizQuestions[currentQuestionIndex];
    userAnswers[currentQuestionIndex] = {
        questionId: q.id,
        selectedOption: index,
        isCorrect: index === q.correctAnswer
    };
    
    // Update UI visually
    const options = optionsContainer.children;
    for (let i = 0; i < options.length; i++) {
        if (i === index) {
            options[i].classList.add('selected');
        } else {
            options[i].classList.remove('selected');
        }
    }
}

function navigateQuestion(direction) {
    if (direction === 1 && currentQuestionIndex === quizQuestions.length - 1) {
        finishQuiz();
        return;
    }
    
    currentQuestionIndex += direction;
    loadQuestion();
}

function timerTick() {
    if (isTimeLimit) {
        timeRemaining--;
        updateTimerDisplay();
        
        // Visual warning when time is low (< 1 min)
        if (timeRemaining <= 60) {
            timerDisplay.classList.add('bg-danger', 'text-white');
            timerDisplay.classList.remove('bg-white', 'text-danger');
        }
        
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            finishQuiz(true);
        }
    } else {
        timeRemaining++; // counting up
    }
}

function updateTimerDisplay() {
    const m = Math.floor(timeRemaining / 60);
    const s = timeRemaining % 60;
    timeText.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function finishQuiz(timeOut = false) {
    clearInterval(timerInterval);
    
    let correct = 0;
    let wrong = 0;
    let unanswered = 0;
    
    userAnswers.forEach((ans) => {
        if (ans === null) {
            unanswered++;
        } else if (ans.isCorrect) {
            correct++;
        } else {
            wrong++;
        }
    });

    const total = quizQuestions.length;
    const scorePercent = total > 0 ? Math.round((correct / total) * 100) : 0;

    // Update Result UI
    document.getElementById('score-display').textContent = `${scorePercent}%`;
    document.getElementById('correct-count').textContent = correct;
    document.getElementById('wrong-count').textContent = wrong;
    document.getElementById('unanswered-count').textContent = unanswered;
    
    let timeString = "";
    if (isTimeLimit) {
        const timeLimitSecs = parseInt(document.getElementById('time-limit').value) * 60;
        const taken = timeLimitSecs - timeRemaining;
        const m = Math.floor(taken / 60);
        const s = taken % 60;
        timeString = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    } else {
        const m = Math.floor(timeRemaining / 60);
        const s = timeRemaining % 60;
        timeString = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
    document.getElementById('time-taken').textContent = timeString;

    // Send data to backend
    fetch('save_score.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            score: scorePercent,
            correct: correct,
            wrong: wrong,
            skipped: unanswered,
            time_taken: timeString
        })
    })
    .then(response => response.json())
    .then(data => console.log('Score saved:', data))
    .catch((error) => console.error('Error saving score:', error));

    const resultMessage = document.getElementById('result-message');
    if (timeOut) {
        resultMessage.textContent = "Time's Up!";
        resultMessage.className = "fw-bold mb-2 text-danger";
    } else if (scorePercent >= 80) {
        resultMessage.textContent = "Excellent Work!";
        resultMessage.className = "fw-bold mb-2 text-success";
    } else if (scorePercent >= 50) {
        resultMessage.textContent = "Good Job!";
        resultMessage.className = "fw-bold mb-2 text-primary";
    } else {
        resultMessage.textContent = "Keep Studying!";
        resultMessage.className = "fw-bold mb-2 text-warning";
    }

    buildReviewSection();

    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');
}

function buildReviewSection() {
    reviewContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    quizQuestions.forEach((q, i) => {
        const ans = userAnswers[i];
        let statusClass = 'unanswered';
        let icon = '<i class="fas fa-minus-circle text-warning me-2"></i>';
        
        if (ans) {
            if (ans.isCorrect) {
                statusClass = 'correct';
                icon = '<i class="fas fa-check-circle text-success me-2"></i>';
            } else {
                statusClass = 'incorrect';
                icon = '<i class="fas fa-times-circle text-danger me-2"></i>';
            }
        }

        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${statusClass}`;
        
        let optionsHTML = '';
        q.options.forEach((opt, optIndex) => {
            let optClass = 'review-option';
            let appendHTML = '';
            
            if (optIndex === q.correctAnswer) {
                optClass += ' is-correct';
                appendHTML = ' <span class="badge bg-success ms-2">Correct Answer</span>';
            } else if (ans && ans.selectedOption === optIndex && !ans.isCorrect) {
                optClass += ' is-wrong';
                appendHTML = ' <span class="badge bg-danger ms-2">Your Answer</span>';
            } else if (ans && ans.selectedOption === optIndex && ans.isCorrect) {
                appendHTML = ' <span class="badge bg-success ms-2">Your Answer</span>';
            }

            optionsHTML += `
                <div class="${optClass}">
                    <strong>${letters[optIndex]}.</strong> ${opt} ${appendHTML}
                </div>
            `;
        });

        reviewItem.innerHTML = `
            <h5 class="fw-bold mb-3">${icon} Q${i + 1}. ${q.question}</h5>
            <div class="mb-3">
                ${optionsHTML}
            </div>
            <div class="explanation-box">
                <i class="fas fa-info-circle me-1"></i> <strong>Explanation:</strong> ${q.explanation}
            </div>
        `;
        
        reviewContainer.appendChild(reviewItem);
    });
}

function toggleReview() {
    if (reviewSection.classList.contains('d-none')) {
        reviewSection.classList.remove('d-none');
        btnReview.innerHTML = '<i class="fas fa-eye-slash me-2"></i> Hide Answers';
    } else {
        reviewSection.classList.add('d-none');
        btnReview.innerHTML = '<i class="fas fa-search me-2"></i> Review Answers';
    }
}

function resetQuiz() {
    resultScreen.classList.remove('active');
    startScreen.classList.add('active');
    reviewSection.classList.add('d-none');
    btnReview.innerHTML = '<i class="fas fa-search me-2"></i> Review Answers';
    timerDisplay.classList.add('bg-white', 'text-danger');
    timerDisplay.classList.remove('bg-danger', 'text-white');
}

// Utility: Fisher-Yates shuffle
function shuffleArray(array) {
    let curId = array.length;
    while (0 !== curId) {
        let randId = Math.floor(Math.random() * curId);
        curId -= 1;
        let tmp = array[curId];
        array[curId] = array[randId];
        array[randId] = tmp;
    }
    return array;
}
