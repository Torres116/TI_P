$(document).ready(function () {
    console.log("Document ready - Login.js loaded");

    $('#loginForm').on('submit', function (e) {
        e.preventDefault(); // Prevent form submission
        console.log("Form submission detected"); 

        const email = $("#login_Email").val();
        const password = $("#login_Password").val();

        $.ajax({
            url: 'http://localhost/Projeto/src/scripts/Login.php',
            method: 'POST',
            data: {
                login_Email: email,
                login_Password: password
            },
            dataType: 'json',
            success: function (response) {
                console.log("Success response:", response);
            },
            error: function (xhr, status, error) {
                console.error("Error:", status, error);
                console.error("Response Text:", xhr.responseText);
            }
        }).done(function (ss){
                window.location.href = '../pages/index.html';
        })
    });
});
