console.log("security_questions.js loaded");

var securityQuestions = [
  {question: 'What is your name?',
  expectedAnswer: 'Aaron'},
  {question: 'Where do you live?',
   expectedAnswer: 'San Francisco'},
   {question: 'How old are you?',
    expectedAnswer: '24'}
];

for(var i = 0; i < securityQuestions.length; i++){
  var answer = prompt(securityQuestions[i].question);
  if(answer !== securityQuestions[i].expectedAnswer){
      alert('QUESTION FAILED. ***CALLS COPS');
      break;  
  }

}
