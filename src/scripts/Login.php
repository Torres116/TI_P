<?php
    header('Content-Type: application/json'); 
    header('Access-Control-Allow-Origin: http://your-frontend-domain.com');
    header('Access-Control-Allow-Credentials: true');

    include('../scripts/Conexao.php');
    session_start();
    
    if($_SERVER['REQUEST_METHOD'] == 'POST') {

        if(isset($_POST['login_Email'], $_POST['login_Password'])) {
            $email = $_POST['login_Email'];
            $password = $_POST['login_Password'];
            
            $stmt = $conn->prepare("SELECT * FROM users WHERE email = :email");
            $stmt->bindParam(':email', $email);
            $stmt->execute();
            $user = $stmt->fetch();

            if($user) {
                if(password_verify($password, $user["password"])) {
                    $_SESSION['user_id'] = $user['id_user'];
                    $_SESSION['user_name'] = $user['name'];

                    echo json_encode([
                        'logged_in' => true,
                        'success' => true,
                        'message' => 'Login successful!',
                        'user_id' => $_SESSION['user_id'],
                        'user_name' => $_SESSION['user_name']
                    ]);
                    exit();
                }
            } 

            // Caso não de
            echo json_encode([
                'success' => false,
                'message' => 'Invalid email or password.'
            ]);
            exit();
        }
    }
?>
