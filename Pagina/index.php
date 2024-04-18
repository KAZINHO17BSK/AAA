<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    header("Location: ./Login/login.html");
    exit();
}
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <nav>
    <h4><a href="#" onclick="mostrarCarrinho(); return false;">
              Carrinho (<span id="numeroItensCarrinho">0</span>)</h4></a>
  </nav>
  <h1>Bem Vindo</h1>
  <div class="h5"><?php echo $_SESSION['user_nome']; ?></div>
  <div id="conteudoHTML"></div>
  <script src="script.js"></script>
</body>
</html>
