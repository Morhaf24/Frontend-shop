var tableCategorys = document.getElementById("tableCategorys");
var categorysResponse = [ ];
var deleteRequest;
var editRequest;

var categorysRequest = new XMLHttpRequest();
categorysRequest.open("GET", "../API/V1/Categories");
categorysRequest.onreadystatechange = onCategorysResponsed;
categorysRequest.send();

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
    }
}
