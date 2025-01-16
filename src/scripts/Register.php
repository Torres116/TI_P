<?php
    include("../scripts/Conexao.php");

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $name = $_POST['register_Name'];
        $nif = $_POST['register_Nif'];
        $email = $_POST['register_Email'];
        $password = $_POST['register_Password'];

        $hash = password_hash($password, PASSWORD_DEFAULT);
        $stmt = $conn->prepare("INSERT INTO users (name,NIF,email,password) VALUES (?,?,?,?)");

        try {
            if ($stmt->execute([$name, $nif, $email, $hash])) {
                echo 'fodase';
            } else {
                echo "Failed to register user.";
            }
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    }
?>



<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="../scripts/LoadHead.js"></script>
    <script src="../scripts/TailwindConfiguration.js"></script>
</head>
    
<body class="bg-[#171717]  w-full h-[100vh] p-4">

    <div class="w-full h-full flex flex-col items-center justify-center">

    <div class=" w-full p-4 h-[120px] justify-between flex flex-row items-center  px-[10%] absolute top-0">
        <img src="../assets/Logo.png" class="h-[60px]">

        <div class="hidden md:flex w-[100vw] h-[70%] md:p-10 md:flex-row gap-5 items-center justify-center font-medium text-3xl
        font-primary text-[#FFF] ">
            <div>
                <button class="hover:scale-110 transition-all duration-500">Menu</button>
            </div>
            <div>
                <button class="hover:scale-110 transition-all duration-500">Fine Dining</button>
            </div>
            <div>
                <button class="hover:scale-110 transition-all duration-500">About</button>
            </div>
            <div>
                <button class="hover:scale-110 transition-all duration-500">Contact</button>
            </div>
        </div>

        <button class=" bg-transparent h-[3rem]  flex items-center justify-center text-2xl font-tertiary
        text-[#FFF]  p-4 hover:scale-105 transition-all duration-300  hover:text-white ">
            Login
        </button>
    </div>

    <form action="" method="POST" class="w-auto h-auto flex flex-col items-center justify-center text-xl gap-2" id="registerForm">

            <h1 class="w-auto font-tertiary text-[#F3D382] font-medium text-6xl  italic tracking-wide text-center p-10">
                REGISTER
            </h1>

            <div class="flex flex-col gap-2 w-[90%]">
                <label for="register_Name" class="font-tertiary text-start  text-[#FFF] w-[100%] ">
                    Name
                </label>
                <input id="register_Name" name="register_Name" type="text" class="bg-transparent px-2
                border-white border-[2px] h-[40px] w-auto text-white font-tertiary 
                focus:outline-none focus:scale-105 transition-all duration-300">
                
            </div>

            <div class="flex flex-col gap-2 w-[90%]">
                <label for="register_Nif" class="font-tertiary text-start  text-[#FFF] w-[100%] ">
                    NIF
                </label>
                <input id="register_Nif" name="register_Nif" type="text" class="bg-transparent px-2
                border-white border-[2px] h-[40px] w-auto text-white font-tertiary 
                focus:outline-none focus:scale-105 transition-all duration-300">
            </div>

            <div class="flex flex-col gap-2 w-[90%]">
                <label for="register_Email" class="font-tertiary text-start  text-[#FFF] w-[100%] ">
                    Email
                </label>
                <input id="register_Email" name="register_Email" type="email" class="bg-transparent px-2
                border-white border-[2px] h-[40px] w-auto text-white font-tertiary 
                focus:outline-none focus:scale-105 transition-all duration-300">
                
            </div>

            <div class="flex flex-col gap-2 w-[90%]">
                <label for="register_Password"  class="font-tertiary text-start  text-[#FFF]  w-[100%]  ">
                    Password
                </label>
                <input id="register_Password" name="register_Password" type="password" class="bg-transparent 
                px-2 border-white border-[2px] h-[40px] w-auto text-white font-tertiary 
                focus:outline-none focus:scale-105 transition-all duration-300">
            </div>

            <Button class="font-tertiary  text-[#FFF]  w-[100%] text-end underline px-6  ">
                Already have an account?
            </Button>
            <div class="flex flex-row flex-wrap w-auto h-auto text-2xl py-8 gap-8">
                <button type="submit" class=" min-w-[8rem] bg-transparent h-[3rem] border-white border-[2px] flex items-center justify-center
                    font-tertiary text-[#FFF] px-4 hover:scale-105 hover:bg-[#F3D382] transition-all duration-300  hover:text-white ">
                    Register
                </button>
            </div>
        </form>
    <style>
    .error {
        color: #FFF;
        font-family: 'Figtree', Arial;
        width: 100%;
    }
    </style>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.5/jquery.validate.js"></script>
    <script src="../scripts/AuthValidation.js"></script>
</body>
</html>