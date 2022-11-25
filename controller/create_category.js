/*
*definte new variables
*/

var inputName = document.getElementById("name");
var inputActive = document.getElementById("active");
var createButton = document.getElementById("create-button");
var createCategoryRequest;

/**
 * POST request definted, to authenticate
 */

function onCreateCategoryButtonPressed(event) {
    event.preventDefault();

    var createCategoryData = {
        name: inputName.value,
        active: inputActive.value 
  };

/**
 * response of the POST request
 */

  createCategoryRequest = new XMLHttpRequest();
  createCategoryRequest.open("POST", "../API/V1/Category");
  createCategoryRequest.onreadystatechange = onNewCategoryCreated;
  createCategoryRequest.send(JSON.stringify(createCategoryData));
}

function onNewCategoryCreated(event) {
    if (createCategoryRequest.readyState < 4) {
        return;
    }

    var responseStatus = createCategoryRequest.status;

    if (responseStatus == 400) {
      alert("Error!");
    }
    else {
      alert("Category created.");
  }

}

  /**
   * button definted (if button is clicked, request will be requested)
   */

createButton.addEventListener("click", onCreateCategoryButtonPressed);


