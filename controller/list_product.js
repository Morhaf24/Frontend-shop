/*
*definte new variables
*/

var tableProduct = document.getElementById("tableProduct");
var productsResponse = [ ];
var deleteRequest;
var editRequest;

/*
* List the Product after the authenticate
*/

var productsRequest = new XMLHttpRequest();
productsRequest.open("GET", "../API/V1/Products");
productsRequest.onreadystatechange = onProductsResponsed;
productsRequest.send();

/*
* for-loop to list all Products
* to delete and edit Products, i definte a for-loop
* tr and td created
*/

function onProductsResponsed(event) {
  if (productsRequest.readyState < 4) {
    return;
  }
  
  productsResponse = JSON.parse(productsRequest.responseText);
  
  for (var i = 0; i < productsResponse.length; i++) {

    var productsRow = document.createElement("tr");
    tableProduct.appendChild(productsRow);
  
    var skuCell = document.createElement("td");
    skuCell.innerText = productsResponse[i].sku;
    productsRow.appendChild(skuCell);

    var activeCell = document.createElement("td");
    activeCell.innerText = productsResponse[i].active;
    productsRow.appendChild(activeCell);

    var idCategoryCell = document.createElement("td");
    idCategoryCell.innerText = productsResponse[i].id_Categor;
    productsRow.appendChild(idCategoryCell);

    var nameCell = document.createElement("td");
    nameCell.innerText = productsResponse[i].name;
    productsRow.appendChild(nameCell);

    var imageCell = document.createElement("td");
    imageCell.innerText = productsResponse[i].product_image;
    productsRow.appendChild(imageCell);

    var descriptionCell = document.createElement("td");
    descriptionCell.innerText = productsResponse[i].description;
    productsRow.appendChild(descriptionCell);

    var priceCell = document.createElement("td");
    priceCell.innerText = productsResponse[i].price;
    productsRow.appendChild(priceCell);

    var stockCell = document.createElement("td");
    stockCell.innerText = productsResponse[i].stock;
    productsRow.appendChild(stockCell);

    var deleteEditCell = document.createElement("td");
    productsRow.appendChild(deleteEditCell);
    deleteEditCell.className = "delete-edit";

    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.className = "edit-delete-button";
    deleteButton.setAttribute("delete-product-sku", productsResponse[i].sku);
    deleteButton.addEventListener("click", onDeleteButtonPressed);
    deleteEditCell.appendChild(deleteButton);

    var editButton = document.createElement("button");

    editButton.innerText = "Edit";
    editButton.className = "edit-delete-button";
    editButton.setAttribute("edit-category-id", categorysResponse[i].category_id);
    editButton.addEventListener("click", onEditButtonPressed);

    deleteAndEditCell.appendChild(editButton);
    }
}

/**
 * definte the delete request
 */
 function onDeleteButtonPressed(event) {
  deleteRequest = new XMLHttpRequest();
  deleteRequest.open("Delete", "../API/V1/Product/" + event.currentTarget.getAttribute("delete-product-sku"));
  deleteRequest.onreadystatechange = onProductDeleteResponsed;
  deleteRequest.send();
}

/*
* response for the request
*/
function onProductDeleteResponsed() {
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
