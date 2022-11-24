var inputSku = document.getElementById("sku");
var inputActive = document.getElementById("active");
var inputCategoryId = document.getElementById("category_id");
var inputName = document.getElementById("name");
var inputDescription = document.getElementById("description");
var inputImage = document.getElementById("image");
var inputStock = document.getElementById("stock");
var createButton = document.getElementById("create-button");
var createProductRequest;

function onCreateProductButtonPressed(event) {
    event.preventDefault();

    var createProductData = {
        active: inputActive.value,
        category_id: inputCategoryId.value,
        name: inputName.value,
        description: inputDescription.value,
        image: inputImage.value,
        stock: inputStock.value
  };

  createProductRequest = new XMLHttpRequest();
  createProductRequest.open("Put", "../API/V1/Product");
  createProductRequest.onreadystatechange = onNewProductCreated;
  createProductRequest.send(JSON.stringify(createProductData));
}

function onNewProductCreated(event) {
    if (createProductRequest.readyState < 4) {
        return;
    }
    console.log(createProductRequest.status);
}
createButton.addEventListener("click", onCreateProductButtonPressed);


