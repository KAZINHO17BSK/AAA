<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit();
}

    http_response_code(401);
    exit();
}

$host = 'localhost';
$usuario = 'root';
$senha = '';
$banco_de_dados = 'aaa';

$conn = new mysqli($host, $usuario, $senha, $banco_de_dados);

if ($conn->connect_error) {
    die('Erro de conexão com o banco de dados: ' . $conn->connect_error);
}

$detalhesCarrinho = json_decode(file_get_contents('php://input'), true);

$sql = "INSERT INTO carrinho (user_id, detalhes_carrinho) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param('is', $detalhesCarrinho['userId'], json_encode($detalhesCarrinho['itens']));
$stmt->execute();

if ($stmt->affected_rows > 0) {
    http_response_code(201);
} else {
    http_response_code(500);
}

$stmt->close();
$conn->close();
?>