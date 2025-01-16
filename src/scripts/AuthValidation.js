$(function () {
    if ($('#loginForm').length) {
        $('#loginForm').validate({
            rules: {
                login_Email: {
                    required: true,
                    minlength: 6,
                    maxlength: 45,
                    email: true,
                },
                login_Password: {
                    required: true,
                    maxlength: 45,
                }
            },
            messages: {
                login_Email: {
                    required: "This field is required",
                    email: "Invalid email format",
                    maxlength: "Email exceeds the allowed length"
                },
                login_Password: {
                    required: "This field is required",
                    maxlength: "Password exceeds the allowed length"
                }
            },
            submitHandler: function (form) {
                console.log("Form is valid and ready to submit");
                form.submit();
            },
            invalidHandler: function (event, validator) {
                console.log("Validation failed:", validator.errorList);
            },
            errorClass: "error",
        });
    }
});
