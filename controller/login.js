/*
*definte new variables
*/

var usernameField = document.getElementById("username");
var passwordField = document.getElementById("password");
var logInButton = document.getElementById("login-button");
var logInRequest;

/**
 * POST request definted, to authenticate
 */

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

/**
 * response of the POST request
 */

  function onLogInResponsed(event) {
    if (logInRequest.readyState < 4) {
      return;
    }

  /**
   * A massage to response
   */
    var responseStatus = logInRequest.status;

    if (responseStatus == 200) {
      alert("Success");
    }
    else if (responseStatus == 403) {
      alert("Invalid credentials");
    }
  }

  /**
   * button definted (if button is clicked, request will be requested)
   */

  logInButton.addEventListener("click", onLoginButtonPressed);