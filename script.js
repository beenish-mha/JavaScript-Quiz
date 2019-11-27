    var startButton = document.querySelector("#start-quiz");
    var startAgain = document.querySelector("#start-again");
    var heading4 = document.querySelector('#heading4');
    var timer = document.querySelector('#timer');
    var answerCheck;
    var j = 0;
    var totalScore = 0;
    var timeLeft = questions.length*5;
    var checkData;
    var answer;
    var scores = 0;
    var move = 0;
     
    //final result and creating start again button\\
     function finalResult(){
        document.getElementById("answer-container").innerHTML = "";
        document.getElementById("question-container").innerHTML = "";
        var final = document.createElement('h4');
        final.textContent = "your final score is: "+scores;
        document.getElementById("question-container").appendChild(final);
        var startAgain = document.createElement("button")
        startAgain.setAttribute("id","start-Again");
        startAgain.textContent = "Start Again";
        document.getElementById("question-container").appendChild(startAgain);
        startAgain.addEventListener("click", function () {
          window.location.reload(true);
        })
     }
    
    //check answers
    function checkAnswers(){
    if (checkData === answer) {
        answerCheck = "right answer";
        scores++;
        showAnswer ();
    }
    else {
        answerCheck = "wrong answer";
        showAnswer ();
    }
    if (j < questions.length-1) {
        j++;
        
        nextQuestion(); 
    }
    else {
        //alert("your quiz is finished and the total score is : "+scores);
        showAnswer();
        move = 1;
    }
    
    }

    //show answer
    function showAnswer (){
        if (move === 1) {
            finalResult();
        }
        else {
        var line = document.createElement("hr");
        var answerChoice = document.createElement('h4');
        answerChoice.textContent = answerCheck;
        document.getElementById("answer-container").innerHTML = "";
        document.getElementById("answer-container").appendChild(line);
        document.getElementById("answer-container").appendChild(answerChoice);
        }
        
    }

    //reload the page and get the new question.
    function nextQuestion() {
        document.getElementById("question-container").innerHTML = "";
       
        event.preventDefault();
        questionAndChoices();
    }

    //function to add questions and answers
    function questionAndChoices() { 
        var title = questions[j].title;
        answer = questions[j].answer;
        //create a questions
        var question = document.createElement('h3');
        question.textContent = title;
        document.getElementById("question-container").appendChild(question);
        
        // adding the choices 
        for (var i = 0; i < (questions[j].choices.length); i++) {
            var choices = questions[j].choices[i];
            var choicesList = document.createElement("button");
            var linebreak = document.createElement("br");
            choicesList.textContent = choices;
            choicesList.setAttribute("id", "options");
            choicesList.setAttribute("value", choices);
            // console.log(choicesList.getAttribute("data-letter"));
            document.getElementById("question-container").appendChild(choicesList);
            document.getElementById("question-container").appendChild(linebreak);
        }
        
    }
    function setTimer(){
       if (timeLeft>0){
           timer.textContent = ("Time left "+timeLeft+" secs");
        console.log(timeLeft);
        timeLeft--;
        console.log('hi beenish');
       }
      else {
          finalResult();
      }
        
    }

    //click on start button       
    startButton.addEventListener("click", function () {
        setInterval(setTimer,1000);
        startButton.style.display = "none";
        heading4.style.display = "none";
        nextQuestion();
    })
    
    //click on choices
    var theParent = document.querySelector("#question-container");
    theParent.addEventListener("click", doSomething, false) 
    function doSomething(e) {
        if(e.target !== e.currentTarget) {
            checkData = e.target.value;
            checkAnswers();  
        }           
    }  


