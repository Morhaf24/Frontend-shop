/*
*definte new variables
*/

var inputSku = document.getElementById("sku");
var inputActive = document.getElementById("active");
var inputIdCategory = document.getElementById("category_id");
var inputName = document.getElementById("name");
var inputDescription = document.getElementById("description");
var inputImage = document.getElementById("image");
var inputPrice = document.getElementById("price");
var inputStock = document.getElementById("stock");
var createButton = document.getElementById("create-button");
var createProductRequest;

/**
 * POST request definted, to authenticate
 */

function onCreateProductButtonPressed(event) {
    event.preventDefault();

    var createProductData = {
        sku: inputSku.value,
        active: inputActive.value,
        id_category: inputIdCategory.value,
        name: inputName.value,
        description: inputDescription.value,
        product_image: inputImage.value,
        price: inputPrice.value,
        stock: inputStock.value
  };

  createProductRequest = new XMLHttpRequest();
  createProductRequest.open("PUT", "../API/V1/Product/" + inputSku);
  createProductRequest.onreadystatechange = onNewProductCreated;
  createProductRequest.send(JSON.stringify(createProductData));
}

/**
 * response of the POST request
 */

function onNewProductCreated(event) {
    if (createProductRequest.readyState < 4) {
        return;
    }
    var responseStatus = createProductRequest.status;

    if (responseStatus == 400) {
      alert("Error");
    }
    else {
      alert("Products updated");
  }
}

/**
   * button definted (if button is clicked, request will be requested)
   */

createButton.addEventListener("click", onCreateProductButtonPressed);


