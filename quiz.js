
        var questions = [
            { 
                "question": "Which of the following is NOT a valid border-style property value?",
                "option1": "glazed",
                "option2": "inset",
                "option3": "groove",
                "option4": "solid",
                "answer":"1" 
            },
            { 
                "question": "Which event occurs when the user clicks on an HTML element?",
                "option1": "onmouseover",
                "option2": "onmouseclick",
                "option3": "onchange", 
                "option4": "onclick",
                "answer": "4" 
            },
            { 
                "question": "What will the following code return: Boolean(10 > 9)?",
                "option1": "false",
                "option2": "true",
                "option3": "Nan", 
                "option4": "none of these",
                "answer": "2"
            },
            {
                "question": "HTML stands for?",
                "option1": "Hyper Text Markup Language",
                "option2": "High Text Markup Language",
                "option3": "Hyper Tabular Markup Language",
                "option4": "none of these",
                "answer": "1"
            },
            {
                "question": "JavaScript is the same as Java?",
                "option1": "false",
                "option2": "true",
                "option3": "Depends on the type of include",
                "option4": "none of these",
                "answer": "1"
            },
            {
                "question": "Which built-in method returns the string representation of the number's value?",
                "option1": "toNumber()",
                "option2": "toValue()",
                "option3": "toString()",
                "option4": "none of these",
                "answer": "3"
            },
            {
                "question": "Which of the following function of Array object adds one or more elements to the end of an array and returns the new length of the array?",
                "option1": "pop()",
                "option2": "join()",
                "option3": "map()",
                "option4": "push()",
                "answer": "4"
            },
            {
                "question": "Which of the following function of Array object reverses the order of the elements of an array?",
                "option1": "push()",
                "option2": "reverse()",
                "option3": "reduse()",
                "option4": "reduseRight()",
                "answer": "2"
            },
            {
                "question": "How do you insert a comment in a CSS file?",
                "option1": "' this is a comment",
                "option2": "// this is a comment //",
                "option3": "// this is a comment",
                "option4": "/* this is a comment */",
                "answer": "4"
            },
            {
                "question": "The common element which describe the web page, is ?",
                "option1": "heading",
                "option2": "paragraph",
                "option3": "list",
                "option4": "All of these",
                "answer": "4"
            },
        ]
var currentQuestion=0;
var score=0;
var arr=[];
var i=0;
var totQuestions=questions.length;
var container=document.getElementById('quizContainer');
var questionEl=document.getElementById('question');
var opt1=document.getElementById('opt1');
var opt2=document.getElementById('opt2');
var opt3=document.getElementById('opt3');
var opt4=document.getElementById('opt4');
var nextButton=document.getElementById('nextButton');
var resultCont=document.getElementById('result');




function loadQuestion(questionIndex) {
    var q=questions[questionIndex];
    questionEl.innerHTML = 'Q' + (questionIndex + 1) + '. ' + q.question;
    opt1.innerHTML = q.option1;
    opt2.innerHTML = q.option2;
    opt3.innerHTML = q.option3;
    opt4.innerHTML = q.option4;
}

function loadNextQuestion() {
    
        
    var selectedOption = document.querySelector('input[type=radio]:checked');
    var answer = selectedOption.value;
    arr[i++] = answer;
    if (questions[currentQuestion].answer == answer) {
        score++;
    }
        
    selectedOption.checked=false;
    currentQuestion++;
    if(currentQuestion==totQuestions-1){
        nextButton.textContent='Finish';

    }
    if(currentQuestion==totQuestions){
        var a = document.getElementById('quizContainer');
        a.style.display = 'none';
        var body = document.getElementById('body');
        var h1 = document.createElement('h1');
        body.appendChild(h1, body.childNodes[1]);
        h1.innerHTML = 'Result';
        var br = document.createElement('br');
        var hr = document.createElement('hr');
        var result = (score * 100) / 10;
        var heading2 = document.createElement('h2');
        var center = document.createElement('center');
        body.appendChild(center);
        center.appendChild(heading2);
        if (result <= 40) {
            heading2.innerHTML = "You are failed and your percentage is " + result + "%";
        }
        else if (result > 40) {
            heading2.innerHTML = "Congratulation! You are passed and your percentage is " + result + "%";
        }
        return;

    }

    loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);
