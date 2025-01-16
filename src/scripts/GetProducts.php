<?php
header("Access-Control-Allow-Origin: *"); // Allow requests from all origins
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: application/json'); //tipo de conteudo

include('../scripts/Conexao.php');

try {
	// QUERY
	$query_slc = "SELECT * FROM product";
	$stmt = $conn->prepare($query_slc);
	$stmt->execute();

	$produtos = $stmt->fetchAll(PDO::FETCH_ASSOC);

	echo json_encode($produtos);
} catch (PDOException $e) {
	echo json_encode(['error' => $e->getMessage()]);
} finally {
	$conn = null;
}
?>