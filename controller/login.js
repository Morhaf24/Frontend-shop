var usernameField = document.getElementById("username");
var passwordField = document.getElementById("password");
var logInButton = document.getElementById("login-button");
var logInRequest;

function onLoginButtonPressed(event) {
  event.preventDefault();

  var logInData = {
    username: usernameField.value,
    password: passwordField.value 
  };

  logInRequest = new XMLHttpRequest();
  logInRequest.open("POST", "../API/V1/Authenticate");
  logInRequest.onreadystatechange = onLogInResponsed;
  logInRequest.send(JSON.stringify(logInData));
}

  function onLogInResponsed(event) {
    if (logInRequest.readyState < 4) {
      return;
    }
    
    console.log(logInRequest.status);
    console.log(logInRequest.statusText);
  }

  logInButton.addEventListener("click", onLoginButtonPressed);