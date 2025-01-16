<?php
//Para checkar a sessão
header('Contentype: application/json');

if (isset($_SESSION['user_id'])) {
    echo json_encode([
        'logged_in' => true,
        'user_email' => $_SESSION['user_email']
    ]);
} else {
    echo json_encode([
        'logged_in' => false
    ]);
}

?>