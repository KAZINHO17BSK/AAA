<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $host = "localhost";
    $usuario = "root";
    $senha = "";
    $banco = "aaa";
    $conn = new mysqli($host, $usuario, $senha, $banco);

    if ($conn->connect_error) {
        die("Falha na conexão: " . $conn->connect_error);
    }

    $email = $_POST['email'];
    $senha = $_POST['senha'];

    $sql = "SELECT id, nome FROM clientes WHERE email='$email' AND senha='$senha'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $_SESSION['user_id'] = $row['id'];
        $_SESSION['user_nome'] = $row['nome'];
        header("Location: ../Pagina/index.php");
        exit();
    } else {
        echo "Credenciais inválidas. Por favor, tente novamente.";
    }

    $conn->close();
}
?>