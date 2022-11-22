<link rel="stylesheet" href="stylesheet/style.css">

<body class="log-in">
    <nav>
            <a href="Index.html" class="active">Home</a>
            <a href="Categorys.php" class="active">Categorys</a>
            <a href="products.php" class="active">Products</a>
            <a href="login.php" class="active">Login</a>
    </nav>
    <div class="Login">
        <h1 class="log-in">Login</h1>
        <form action="log_in" methode="get" action="login.php"></form>
        <label><b>Username: </b></label>
        <input type="username" type="text" id="username">
        <P></P>
        <label><b>Password: </b></label>
        <input type="password" type="text" id="password">
        <p></p>
        <button class="log-in" id="log-in">Login</button>
    </div>
</body>
</html>