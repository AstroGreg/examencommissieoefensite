function Quiz(questions) {
    this.score = 0;                     // this will define the object score
    this.questions = questions;         // this will define the object question
    this.questionIndex = 0;             // this will the define the current question that we are one .
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];   // this is a function that will be calle when you are trying to get question index .
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;                                // this will add 1 point to the quiz if the answer is rigth.
    }

    this.questionIndex++;                           // this is responsable for goin to the next qeustion.
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length; // this will define if the quiz has ended or not . 
}
