<link rel="stylesheet" href="../stylesheet/style.css">
<body class="categorys">
    <nav>
            <a href="../Index.html" class="active">Home</a>
            <a href="categorys.php" class="active">Categorys</a>
            <a href="products.php" class="active">Products</a>
            <a href="login.php" class="active">Login</a>
    </nav>
        <!--head-->
    <h1 class="categorys">Categorys</h1>

        <!--table to list categorys-->
    <table class="tables" id="tableCategorys">
        <tr class="tables">
            <th class="head">Name</th>
            <th class="head">Active</th>
            <th class="head">Option</th>
        </tr>
  </table>
<p></p>
        <!--button to create new category-->
    <a href="create_category.php"><button class="CreateButton" id="CreateButton">Create new Category</button></a>
        
        <!--connect php with javascript-->
    <script src="../controller/list_category.js"></script>

