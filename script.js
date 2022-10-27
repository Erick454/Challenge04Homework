const quizData = [ 
    {
        question: "which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What does CSS Stnad for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cars SUVs Sailboats",
        d: "Cascading Simple Sheets",
        correct: "b",
    },
    {
        question: "How many Cristiano Ronaldo won Ballon D'or?",
        a: "7",
        b: "1",
        c: "3",
        d: "6",
        correct: "d",
    },
    {
        question: "What year was the first iphone created?",
        a: "1997",
        b: "2004",
        c: "2001",
        d: "2007",
        correct: "d",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

deselectAnswer()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innertext = currentQuizData.c
    d_text.innerText = currentQuizData.d
    console.log (questionEl)
}

function deselectAnswer() {
    answerEls.forEach(answerEls => answerEls.checked = false)
}

function getSelected() {
    //*let answerEls = document.querySelectorAll(".answer")
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    console.log (answer)
    console.log (quizData)
    console.log (currentQuiz)
    if(answer) {
        if(currentQuiz!==quizData.length) //  not last question submitted
        if(answer ===quizData[currentQuiz].correct) {
            score++
        }   
        
        
        if(currentQuiz < quizData.length) {
            loadQuiz()
            currentQuiz++
        } 
    }
    
    
    if(currentQuiz===quizData.length) {
        quiz.innerHTML = `
        <h2> You answered ${score}/${quizData.length} questions correctly</h2>

        <button onclick="location.reload()">Reload</button>
        `
    }
    
})