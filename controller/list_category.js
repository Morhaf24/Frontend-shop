/*
*definte new variables
*/

var tableCategorys = document.getElementById("tableCategorys");
var categorysResponse = [ ];
var deleteRequest;
var editRequest;

/*
* List the Category after the authenticate
*/

var categorysRequest = new XMLHttpRequest();
categorysRequest.open("GET", "../API/V1/Categories");
categorysRequest.onreadystatechange = onCategorysResponsed;
categorysRequest.send();

/*
* for-loop to list all categorys
* to delete and edit categorys, i definte a for-loop
* tr and td created
*/

function onCategorysResponsed() {
  if (categorysRequest.readyState < 4) {
    return;
  }

  categorysResponse = JSON.parse(categorysRequest.responseText);
  
  for (var i = 0; i < categorysResponse.length; i++) {

    var categorysRow = document.createElement("tr");
    tableCategorys.appendChild(categorysRow);
  
    var nameCell = document.createElement("td");
    nameCell.innerText = categorysResponse[i].name;
    categorysRow.appendChild(nameCell);

    var activeCell = document.createElement("td");
    activeCell.innerText = categorysResponse[i].active;
    categorysRow.appendChild(activeCell);
/**
 * Delete Button created 
 */
    var deleteEditCell = document.createElement("td");
    categorysRow.appendChild(deleteEditCell);
    deleteEditCell.className = "delete-edit";

    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.className = "edit-delete-button";
    deleteButton.setAttribute("delete-category-id", categorysResponse[i].category_id);
    deleteButton.addEventListener("click", onDeleteButtonPressed);
    deleteEditCell.appendChild(deleteButton);
  
    var editButton = document.createElement("button");   

  }
}

/**
 * definte the delete request
 */
function onDeleteButtonPressed(event) {
  deleteRequest = new XMLHttpRequest();
  deleteRequest.open("DELETE", "../API/V1/Category/" + event.currentTarget.getAttribute("delete-category-id"));
  deleteRequest.onreadystatechange = onCategoryDeleteResponsed;
  deleteRequest.send();
}

/*
* response for the request
*/
function onCategoryDeleteResponsed() {
  if (deleteRequest.readyState < 4) {
    return;
  }
  /**
   * A massage to response
   */
  var responseStatus = deleteRequest.status;

  if (responseStatus == 200) {
    alert("Category deleted");
  }
  else if (responseStatus == 404) {
    alert("No such category.");
}
}