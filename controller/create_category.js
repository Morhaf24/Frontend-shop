var inputName = document.getElementById("name");
var inputActive = document.getElementById("active");
var createButton = document.getElementById("create-button");
var createCategoryRequest;

function onCreateCategoryButtonPressed(event) {
    event.preventDefault();

    var createCategoryData = {
        name: inputName.value,
        active: inputActive.value 
  };

  createCategoryRequest = new XMLHttpRequest();
  createCategoryRequest.open("POST", "../API/V1/Category");
  createCategoryRequest.onreadystatechange = onNewCategoryCreated;
  createCategoryRequest.send(JSON.stringify(createCategoryData));
}

function onNewCategoryCreated(event) {
    if (createCategoryRequest.readyState < 4) {
        return;
    }

    console.log(createCategoryRequest.status);

}
createButton.addEventListener("click", onCreateCategoryButtonPressed);


