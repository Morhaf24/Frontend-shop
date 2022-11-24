<link rel="stylesheet" href="../stylesheet/style.css">
<body class="create_product">
    <nav>
            <a href="../Index.html" class="active">Home</a>
            <a href="categorys.php" class="active">Categorys</a>
            <a href="products.php" class="active">Products</a>
            <a href="login.php" class="active">Login</a>
    </nav>
    <div class="products">
    <h1 class="products">Create new Product</h1>
    <table>
        <tr>
            <td>
            <label for="create" class="create" id="create">Sku: </label> 
            </td>
            <td>
            <input type="Text" class="create" id="sku">
            </td>
        </tr>
        <tr>
            <td>
            <label for="create" class="create" id="create">Active: </label>
            </td>
            <td>
            <input type="Text" class="create" id="active">
            </td>
        </tr>
        <tr>
            <td>
            <label for="create" class="create" id="create">Category_id: </label>
            </td>
            <td>
            <input type="Text" class="create" id="category_id">
            </td>
        </tr>
        <tr>
            <td>
            <label for="create" class="create" id="create">Name: </label>
            </td>
            <td>
            <input type="Text" class="create" id="name">
            </td>
        </tr>
        <tr>
            <td>
            <label for="create" class="create" id="create">Description: </label>
            </td>
            <td>
            <input type="Text" class="create" id="description">
            </td>
        </tr>
        <tr>
            <td>
            <label for="create" class="create" id="create">Image: </label>
            </td>
            <td>
            <input type="Text" class="create" id="image">
            </td>
        </tr>
        <tr>
            <td>
            <label for="create" class="create" id="create">Price: </label>
            </td>
            <td>
            <input type="Text" class="create" id="price">
            </td>
        </tr>
        <tr>
            <td>
            <label for="create" class="create" id="create">Stock: </label>
            </td>
            <td>
            <input type="Text" class="create" id="stock">
            </td>
        </tr>
    </table>


    <button id="create-button">Create</button>
    <script src="../controller/create_product.js"></script>
