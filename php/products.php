<link rel="stylesheet" href="../stylesheet/style.css">
<body class="products">
    <nav>
            <a href="../Index.html" class="active">Home</a>
            <a href="categorys.php" class="active">Categorys</a>
            <a href="products.php" class="active">Products</a>
            <a href="login.php" class="active">Login</a>
    </nav>
    <!--head-->
    <h1 class="products">Products</h1>

        <!--table to list products-->
    <table id="tableProduct" class="tables">
        <tr class="tables">
            <th class="head">Sku</th>
            <th class="head">Active</th>
            <th class="head">id_Category</th>
            <th class="head">Name</th>
            <th class="head">Image</th>
            <th class="head">Description</th>
            <th class="head">Price</th>
            <th class="head">Stock</th>
            <th class="head">Option</th>
        </tr>
    </table>
    <p></p>
        <!--button to create new product-->
    <a href="create_product.php"><button class="CreateButton">Create new Product</button></a>

    <!--connect php with javascript-->
    <script src="../controller/list_product.js"></script>

