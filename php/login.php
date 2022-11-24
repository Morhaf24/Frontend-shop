<link rel="stylesheet" href="../stylesheet/style.css">

<body class="log-in">
    <nav>
        <a href="../Index.html" class="active">Home</a>
        <a href="categorys.php" class="active">Categorys</a>
        <a href="products.php" class="active">Products</a>
        <a href="login.php" class="active">Login</a>
    </nav>
    <div class="Login">
        <h1 class="log-in" id="log-in">Login</h1>
        <form action="log_in" methode="get" action="login.php"></form>
        <label class="log-in" id="log-in"><b>Username: </b></label>
        <input type="text" id="username" placeholder="Username">
        <P></P>
        <label  class="log-in" id="log-in"><b>Password: </b></label>
        <input type="password" id="password" placeholder="Password">
        <p></p>
        <button id="login-button">Login</button>
    </div>
    <script src="../controller/login.js"></script>
</body>