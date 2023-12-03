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
            $(".contact-msg").find(".snippet").css("display", "block");

            // SMTP JS
            var name = $('#name').val();
            var email = $('#email').val();
            var number = $('#number').val();
            var subject = $('#subject').val();
            var message = $('#message').val();
            var Body = "<style>";
            Body += "body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }";
            Body += "table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }";
            Body += "img { -ms-interpolation-mode: bicubic; }";
            Body += "img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }";
            Body += "table { border-collapse: collapse !important; }";
            Body += "body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }";
            Body += "a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; }";
            Body += "div[style*='margin: 16px 0;'] { margin: 0 !important; }";
            Body += "</style>";
            Body += "<body style='background-color: #f7f5fa; margin: 0 !important; padding: 0 !important;'>";
            Body += "<table border='0' cellpadding='0' cellspacing='0' width='100%' style='background-image:url('https://techstopsolution.github.io/img/hero-bg.jpg'); width: 100%;'>";
            Body += "<tr>";
            Body += "<td align='center'>";
            Body += "<table border='0' cellpadding='0' cellspacing='0' width='480' >";
            Body += "<tr>";
            Body += "<td align='center' valign='top' style='padding: 40px 10px 40px 10px;'>";
            Body += "<div style='display: block; font-family: Helvetica, Arial, sans-serif; color: #ffffff; font-size: 18px;' border='0'>";
            Body += "<a href='https://www.techstopsolution.com/' target='_blank'>";
            Body += "<img src='https://techstopsolution.github.io/img/logo-career.png' style='width: 160px;'>";
            Body += "</a>";
            Body += "</div>";
            Body += "</td>";
            Body += "</tr>";
            Body += "</table>";
            Body += "</td>";
            Body += "</tr>";
            Body += "<tr>";
            Body += "<td align='center' style='padding: 0px 10px 0px 10px;'>";
            Body += "<table border='0' cellpadding='0' cellspacing='0' width='480' >";
            Body += "<tr>";
            Body += "<td bgcolor='#ffffff' align='left' valign='top' style='padding: 30px 30px 20px 30px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; line-height: 48px;'>";
            Body += "<h1 style='font-size: 32px; font-weight: 400; margin: 0;'>Email on "+name+" </h1>";
            Body += "</td>";
            Body += "</tr>";
            Body += "</table>";
            Body += "</td>";
            Body += "</tr>";
            Body += "<tr>";
            Body += "<td bgcolor='#f4f4f4' align='center' style='padding: 0px 10px 0px 10px;'>";
            Body += "<table border='0' cellpadding='0' cellspacing='0' width='480' >";
            Body += "<tr>";
            Body += "<td bgcolor='#ffffff' align='left'>";
            Body += "<table width='100%' border='0' cellspacing='0' cellpadding='0'>";
            Body += "<tr>";
            Body += "<td colspan='2' style='padding-left:30px;padding-right:15px;padding-bottom:10px; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;'>";
            Body += "<p>Lorem ipsum dolor sit diam nonumy eirmod tempor invidunt ut labore et dolore diam voluptua.</p>";
            Body += "<br>";
            Body += "</td>";
            Body += "</tr>";
            Body += "<tr>";
            Body += "<th align='left' valign='top' style='padding-left:30px;padding-right:15px;padding-bottom:10px; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 600; line-height: 25px;'>Name</th>";
            Body += "<td align='left' valign='top' style='padding-left:15px;padding-right:30px;padding-bottom:10px;font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;'> "+name+" </td>";
            Body += "</tr>";
            Body += "<tr>";
            Body += "<th align='left' valign='top' style='padding-left:30px;padding-right:15px;padding-bottom:10px; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 600; line-height: 25px;'>EMail</th>";
            Body += "<td align='left' valign='top' style='padding-left:15px;padding-right:30px;padding-bottom:10px;font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;'>"+email+"</td>";
            Body += "</tr>";
            Body += "<tr>";
            Body += "<th align='left' valign='top' style='padding-left:30px;padding-right:15px;padding-bottom:10px; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 600; line-height: 25px;'>Number</th>";
            Body += "<td align='left' valign='top' style='padding-left:15px;padding-right:30px;padding-bottom:10px;font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;'>"+number+"</td>";
            Body += "</tr>";
            Body += "<tr>";
            Body += "<th align='left' valign='top' style='padding-left:30px;padding-right:15px;padding-bottom:10px; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 600; line-height: 25px;'>Subject</th>";
            Body += "<td align='left' valign='top' style='padding-left:15px;padding-right:30px;padding-bottom:10px;font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;'>"+subject+"</td>";
            Body += "</tr>";
            Body += "<tr>";
            Body += "<th align='left' valign='top' style='padding-left:30px;padding-right:15px;padding-bottom:30px; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 600; line-height: 25px;'>Message</th>";
            Body += "<td align='left' valign='top' style='padding-left:15px;padding-right:30px;padding-bottom:30px;font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;'>"+message+"</td>";
            Body += "</tr>";
            Body += "</table>";
            Body += "</td>";
            Body += "</tr>";
            Body += "<tr>";
            Body += "<td bgcolor='#ffffff' align='center'>";
            Body += "<table width='100%' border='0' cellspacing='0' cellpadding='0'>";
            Body += "<tbody style='border-top: 1px solid #eee;'>";
            Body += "<tr style='background-color:#fff;width:100%'>";
            Body += "<td style='padding:18px 0;color:#ffffff;padding-left:25px;text-align:left' valign='middle'>&nbsp;</td>";
            Body += "<td style='padding:18px 0;color:#ffffff;padding-right:25px;text-align:right;font-size:12px' valign='middle'>";
            Body += "<span style='color:#ccc'>Powered By :</span> ";
            Body += "<a href='https://www.techstopsolution.com/' style='text-decoration:none; color:#2c4dd8' rel='noopener' target='_blank'>Techstop Solution</a>";
            Body += "</td>";
            Body += "</tr>";
            Body += "</tbody>";
            Body += "</table>";
            Body += "</td>";
            Body += "</tr>";
            Body += "</table>";
            Body += "</td>";
            Body += "</tr>";
            Body += "<tr>";
            Body += "<td bgcolor='#f4f4f4' align='center' style='padding: 50px 10px 0px 10px;'>";
            Body += "<table style='max-width:300px;margin:0px auto;height:35px' width='300' cellspacing='0' cellpadding='0' align='center'>";
            Body += "<tbody>";
            Body += "<tr style='height:19px'>";
            Body += "<td style='padding:0px 0px 32px;height:19px;width:300px' align='center'>";
            Body += "<table style='margin:0px auto;width:115px' cellspacing='0' cellpadding='0' align='center'>";
            Body += "<tbody>";
            Body += "<tr>";
            Body += "<td style='line-height:1px;font-size:1px;width:0px'><br></td>";
            Body += "<td style='line-height:1px;font-size:1px;width:19px'>";
            Body += "<a style='text-decoration:none' href='https://www.instagram.com/techstopsolutions/' target='_blank'>";
            Body += "<img style='height:auto!important;width:19px;max-width:19px;font-size:10px;line-height:12px;font-family:'Whyte',Arial,Helvetica,sans-serif;color:#000;background-color:#fff;vertical-align:top;text-align:center' src='https://techstopsolution.github.io/img/mail-desing/instagram.png' alt='instagram' width='19' class='CToWUd' data-bit='iit'>";
            Body += "</a>";
            Body += "</td>";
            Body += "<td style='font-size:1px;line-height:1px;width:29px'>&nbsp;</td>";
            Body += "<td style='line-height:1px;font-size:1px;width:19px'>";
            Body += "<a style='text-decoration:none' href='https://www.facebook.com/techstopsolution/' target='_blank'>";
            Body += "<img style='height:auto!important;width:19px;max-width:19px;font-size:10px;line-height:12px;font-family:'Whyte',Arial,Helvetica,sans-serif;color:#000;background-color:#fff;vertical-align:top;text-align:center' src='https://techstopsolution.github.io/img/mail-desing/facebook.png' alt='facebook' width='19' class='CToWUd' data-bit='iit'>";
            Body += "</a>";
            Body += "</td>";
            Body += "<td style='font-size:1px;line-height:1px;width:29px'>&nbsp;</td>";
            Body += "<td style='line-height:1px;font-size:1px;width:19px'>";
            Body += "<a style='text-decoration:none' href='https://www.linkedin.com/company/techstop-solution/' target='_blank'>";
            Body += "<img style='height:auto!important;width:19px;max-width:19px;font-size:10px;line-height:12px;font-family:'Whyte',Arial,Helvetica,sans-serif;color:#000;background-color:#fff;vertical-align:top;text-align:center' src='https://techstopsolution.github.io/img/mail-desing/linkedin.png' alt='linkedin' width='19' class='CToWUd' data-bit='iit'>";
            Body += "</a>";
            Body += "</td>";
            Body += "<td style='line-height:1px;font-size:1px;width:0px'><br></td>";
            Body += "</tr>";
            Body += "</tbody>";
            Body += "</table>";
            Body += "</td>";
            Body += "</tr>";
            Body += "<tr style='height:16px'>";
            Body += "<td style='font-size:12px;line-height:17px;font-family:Whyte,Arial,Helvetica,sans-serif;color:#a5a5a5;padding:0px 0px 32px;height:16px;width:300px' align='center'>Follow us to stay connected with us <br>All rights reserved © 2021 Techstop Solution.<br></td>";
            Body += "</tr>";
            Body += "</tbody>";
            Body += "</table>";
            Body += "</td>";
            Body += "</tr>";
            Body += "</table>";
            Body += "</body>";

            //SMTP Send mail
            Email.send({
                SecureToken : "9bc6a945-2cb6-4da3-8050-56377dfade60",
                To : 'techstopsolution@gmail.com',
                From : "hostingwork.space@gmail.com",
                Subject : "New message on contact from "+name,
                Body : Body
            }).then(
                message =>{
                    if(message=='OK'){
                        $(".contact-msg").find(".snippet").css("display", "none");
                        $(".contact-msg").find(".contact-result-text").css("color", "#4CAF50");
                        $(".contact-msg").find(".contact-result-text").text("Your message has been successfully sent!");
                        $(".js-email-form").trigger("reset");
                        
                    }
                    else{
                        $(".contact-msg").find(".snippet").css("display", "none");
                        $(".contact-msg").find(".contact-result-text").css("color", "#f00");
                        $(".contact-msg").find(".contact-result-text").text("Sorry, cannot send the message");
                        console.error (message);
                        $(".js-email-form").trigger("reset");
                    }
                }
            );
        }

    });
});