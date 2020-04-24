function Question(text, choices, answer) {
    this.text = text;                           // this will define the question
    this.choices = choices;                    // this will define the buttons
    this.answer = answer;                     // this will define the right answer
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;          // this will only be called by the object quiz the verify the riht answers. 
}
