console.log("login.js loaded");

var userLogin = {
  username: 'nzoLogic',
  password: 'password'
};
for(var i = 0; i < 3; i++){
  var inputPSWD = inputPSWD = prompt('Welcome ' + userLogin.username + '\nPlease enter password: ');
  if(inputPSWD === userLogin.password){
    alert('Successful login!')
    break;
  }
  if(i === 2){
    alert('Account locked');
  }
  else {
    alert('Incorrect Attempt');
  }
}
