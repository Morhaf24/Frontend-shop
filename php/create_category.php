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
        <!--inputfiled in a table created-->
    <table>
        <tr class="create">
                <td class="create">
                        <label for="name" class="create" id="create">Name: </label>
                </td>
                <td class="create">
                        <input type="Text" class="create" id="name">
                </td>
        </tr>
        <tr class="create">
                <td class="create">
                        <label class="create" id="create">Active:</label>
                </td>
                <td class="create">
                        <input type="Text" class="create" id="active">
                </td>
        </tr class="create">
    </table>
    <p></p>

        <!--Button to create category-->
    <button id="create-button">Create</button>

        <!--connect php with javascript-->
    <script src="../controller/create_category.js"></script>
