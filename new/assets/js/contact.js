$(document).ready(function() {

    // validate the comment form when it is submitted
    $(".js-email-form").validate({
        rules: {
            name:{
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            number: {
                required: true,
                minlength: 4,
                maxlength: 13
            },
            subject:{
                required: true,
            },
            message:{
                required: true,
            },
        },
        messages: {
            name: {
                required: "Please enter your name",
            },
            email: {
                required: "Please enter email address",
            },
            number: {
                required: "Please enter phone number",
                validnum: "Please enter phone number between length 4 to 13",
                minlength: "Mobile number must be atleast 4 digits.",
                maxlength: "Mobile number cannot be more than 13 digits.",
            },
            subject:{
                required: "Please enter subject"
            },
            message:{
                required: "Please enter message"
            },
        }
    });

    $(".submit").click(function() {
        if($(".js-email-form").valid()) {
            $(".submit").find(".text-btn").css("display", "none");
            $(".submit").find(".snippet").css("display", "block");
            // SMTP JS
            var name = $('#name').val();
            var email = $('#email').val();
            var number = $('#number').val();
            var subject = $('#subject').val();
            var message = $('#message').val();
            var Body = "<div>";
            Body += "<h3 style='margin: 5px 0;'>Contact Form inquiry for <a href='https://pratapsinhparmar.com' target='_blank'>PratapsinhParmar.Com</a></h3>";
            Body += "<p style='margin: 5px 0;'><b>Cleint Name:</b> "+name+"</p>";
            Body += "<p style='margin: 5px 0;'><b>Email Address:</b> "+email+"</p>";
            Body += "<p style='margin: 5px 0;'><b>Phone Number:</b> "+number+"</p>";
            Body += "<p style='margin: 5px 0;'><b>Cleint Subject:</b> "+subject+"</p>";
            Body += "<p style='margin: 5px 0;'><b>Client Message:</b> "+message+"</p>";
            Body += "</div>;";

            //SMTP Send mail
            Email.send({
                SecureToken : "9bc6a945-2cb6-4da3-8050-56377dfade60",
                To : 'pratapsinh.work@gmail.com',
                From : "hostingwork.space@gmail.com",
                Subject : "Contact Form inquiry for PratapsinhParmar.Com",
                Body : Body
            }).then(
                message =>{
                    if(message=='OK'){
                        $(".submit").find(".snippet").css("display", "none");
                        $(".submit").find(".text-btn").css("display", "block");
                        $(".contact-result-text").css("color", "#10b600");
                        $(".contact-result-text").text("Your message has been successfully sent!");
                        $(".js-email-form").trigger("reset");
                    }
                    else{
                        $(".submit").find(".snippet").css("display", "none");
                        $(".submit").find(".text-btn").css("display", "block");
                        $(".contact-result-text").css("color", "#f00");
                        $(".contact-result-text").text("Sorry, cannot send the message");
                        console.error (message);
                        $(".js-email-form").trigger("reset");
                    }
                }
            );
        }
    });
});