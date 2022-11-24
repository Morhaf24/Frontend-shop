var tableProduct = document.getElementById("tableProduct");
var productsResponse = [ ];
var deleteRequest;
var editRequest;

var productsRequest = new XMLHttpRequest();
productsRequest.open("GET", "../API/V1/Products");
productsRequest.onreadystatechange = onProductsResponsed;
productsRequest.send();

function onProductsResponsed() {
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

    var id_CategoryCell = document.createElement("td");
    id_CategoryCell.innerText = productsResponse[i].active;
    productsRow.appendChild(id_CategoryCell);

    var nameCell = document.createElement("td");
    nameCell.innerText = productsResponse[i].name;
    productsRow.appendChild(nameCell);

    var imageCell = document.createElement("td");
    imageCell.innerText = productsResponse[i].name;
    productsRow.appendChild(imageCell);

    var descriptionCell = document.createElement("td");
    descriptionCell.innerText = productsResponse[i].name;
    productsRow.appendChild(descriptionCell);

    var priceCell = document.createElement("td");
    priceCell.innerText = productsResponse[i].name;
    productsRow.appendChild(priceCell);

    var stockCell = document.createElement("td");
    stockCell.innerText = productsResponse[i].name;
    productsRow.appendChild(stockCell);

    }
}
