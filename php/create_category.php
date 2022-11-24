<link rel="stylesheet" href="../stylesheet/style.css">
<body class="categorys">
    <nav>
            <a href="../Index.html" class="active">Home</a>
            <a href="categorys.php" class="active">Categorys</a>
            <a href="products.php" class="active">Products</a>
            <a href="login.php" class="active">Login</a>
    </nav>
    <div class="categorys">
    <h1 class="categorys">Create new Category</h1>

    <table>
        <tr>
                <td>
                        <label for="name" class="create" id="create">Name: </label>
                </td>
                <td>
                        <input type="Text" class="create" id="name">
                </td>
        </tr>
        <tr>
                <td>
                        <label class="create" id="create">Active:</label>
                </td>
                <td>
                        <input type="Text" class="create" id="active">
                </td>
        </tr>
    </table>

    <p></p>
    <button id="create-button">Create</button>
    <script src="../controller/create_category.js"></script>
