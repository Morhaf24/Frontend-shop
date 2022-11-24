<link rel="stylesheet" href="../stylesheet/style.css">
<body class="products">
    <nav>
            <a href="../Index.html" class="active">Home</a>
            <a href="categorys.php" class="active">Categorys</a>
            <a href="products.php" class="active">Products</a>
            <a href="login.php" class="active">Login</a>
    </nav>
    <h1 class="products">Products</h1>
    <table id="tableProduct" class="tables">
        <td>
            <th class="head">Sku</th>
            <th class="head">Active</th>
            <th class="head">id_Category</th>
            <th class="head">Name</th>
            <th class="head">Image</th>
            <th class="head">Description</th>
            <th class="head">Price</th>
            <th class="head">Stock</th>
            <th class="head"></th>
        </td>
    </table>
    <p></p>
    <a href="create_product.php"><button class="CreateButton">Create new Product</button></a>
    <script src="../controller/list_product.js"></script>

