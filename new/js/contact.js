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
            Body += "<table border='0' cellpadding='0' cellspacing='0' width='100%'>";
            Body += "<tr>";
            Body += "<td align='center'>";
            Body += "<table border='0' cellpadding='0' cellspacing='0' width='480' >";
            Body += "<tr>";
            Body += "<td align='center' valign='top' style='padding: 40px 10px 40px 10px;'>";
            Body += "<div style='display: block; font-family: Helvetica, Arial, sans-serif; color: #ffffff; font-size: 18px;' border='0'>";
            Body += "<a href='https://www.pratapsinhparmar.com/' target='_blank'>";
            Body += "<img src='https://pratapsinhparmar.github.io/new/images/logo.svg' style='width: 250px;'>";

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
            Body += "<p>PratapsinhParmar.com new inquery</p>";
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
            Body += "<a href='https://www.pratapsinhparmar.com/' style='text-decoration:none; color:#2c4dd8' rel='noopener' target='_blank'>Pratapsinh Parmar</a>";
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
            Body += "<a style='text-decoration:none' href='https://www.instagram.com/pratapsinhjiparmar/' target='_blank'>";
            Body += '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd"><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="38.000000pt" height="38.000000pt" viewBox="0 0 38.000000 38.000000" preserveAspectRatio="xMidYMid meet" style="width: 17px; height: auto!important; width: 19px; max-width: 19px; font-size: 10px; line-height: 12px;"><g transform="translate(0.000000,38.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M71 346 c-40 -22 -50 -54 -51 -153 0 -151 22 -173 170 -173 148 0 170 22 170 171 0 101 -13 138 -55 157 -36 16 -203 15 -234 -2z m234 -41 c23 -22 25 -32 25 -115 0 -127 -13 -140 -140 -140 -83 0 -93 2 -115 25 -23 22 -25 32 -25 115 0 83 2 93 25 115 22 23 32 25 115 25 83 0 93 -2 115 -25z"/><path d="M264 289 c-10 -17 13 -36 27 -22 12 12 4 33 -11 33 -5 0 -12 -5 -16 -11z"/><path d="M149 265 c-14 -8 -32 -29 -39 -46 -12 -28 -11 -36 6 -68 26 -48 70 -61 115 -35 61 36 60 118 -2 149 -34 18 -47 18 -80 0z m77 -40 c15 -15 23 -32 20 -41 -3 -9 -6 -19 -6 -23 0 -4 -11 -13 -24 -19 -69 -31 -114 59 -48 97 25 15 30 14 58 -14z"/></g></svg>';
            Body += "</a>";
            Body += "</td>";
            Body += "<td style='font-size:1px;line-height:1px;width:29px'>&nbsp;</td>";
            Body += "<td style='line-height:1px;font-size:1px;width:19px'>";
            Body += "<a style='text-decoration:none' href='https://www.facebook.com/people/Pratapsinh-Parmar/pfbid0t2JHccG2NKbgd91zxnhkdvG2rUWt72W2GT3z8crXXhydPn8JHyhrvzXS5QB3jGEbl/' target='_blank'>";
            Body += '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd"><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="38.000000pt" height="38.000000pt" viewBox="0 0 38.000000 38.000000" preserveAspectRatio="xMidYMid meet" style="width: 17px; height: auto!important; width: 19px; max-width: 19px; font-size: 10px; line-height: 12px;"><g transform="translate(0.000000,38.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M25 347 c-3 -7 -4 -82 -3 -167 l3 -155 88 -3 87 -3 0 66 c0 58 -2 65 -20 65 -15 0 -20 7 -20 25 0 18 5 25 20 25 16 0 20 7 20 33 0 45 31 77 75 77 31 0 35 -3 35 -25 0 -20 -5 -25 -25 -25 -21 0 -25 -5 -25 -30 0 -23 4 -30 20 -30 15 0 20 -7 20 -25 0 -18 -5 -25 -20 -25 -18 0 -20 -7 -20 -66 l0 -65 48 3 47 3 0 165 0 165 -163 3 c-127 2 -164 0 -167 -11z"/></g></svg>';
            Body += "</a>";
            Body += "</td>";
            Body += "<td style='font-size:1px;line-height:1px;width:29px'>&nbsp;</td>";
            Body += "<td style='line-height:1px;font-size:1px;width:19px'>";
            Body += "<a style='text-decoration:none' href='https://www.linkedin.com/in/pratapsinhparmar/' target='_blank'>";
            Body += '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd"><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="38.000000pt" height="38.000000pt" viewBox="0 0 38.000000 38.000000" preserveAspectRatio="xMidYMid meet" style="width: 17px; height: auto!important; width: 19px; max-width: 19px; font-size: 10px; line-height: 12px;"><g transform="translate(0.000000,38.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M25 347 c-3 -7 -4 -82 -3 -167 l3 -155 165 0 165 0 0 165 0 165 -163 3 c-127 2 -164 0 -167 -11z m99 -56 c10 -16 -5 -41 -24 -41 -23 0 -34 16 -26 35 6 16 42 20 50 6z m-4 -141 c0 -79 0 -80 -25 -80 -25 0 -25 1 -25 80 0 79 0 80 25 80 25 0 25 -1 25 -80z m80 68 c0 -9 3 -9 12 0 7 7 24 12 39 12 40 0 59 -33 59 -102 0 -55 -1 -58 -25 -58 -23 0 -25 4 -25 44 0 57 -8 76 -30 76 -22 0 -30 -19 -30 -76 0 -40 -2 -44 -25 -44 -25 0 -25 1 -25 80 0 79 0 80 25 80 14 0 25 -5 25 -12z"/></g></svg>';
            Body += "</a>";
            Body += "</td>";
            Body += "<td style='line-height:1px;font-size:1px;width:0px'><br></td>";
            Body += "</tr>";
            Body += "</tbody>";
            Body += "</table>";
            Body += "</td>";
            Body += "</tr>";
            Body += "<tr style='height:16px'>";
            Body += "<td style='font-size:12px;line-height:17px;font-family:Whyte,Arial,Helvetica,sans-serif;color:#a5a5a5;padding:0px 0px 32px;height:16px;width:300px' align='center'>Follow us to stay connected with us <br>All rights reserved © 2023 Pratapsinh Parmar.<br></td>";
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
                To : 'mrpratapsinhparmar@gmail.com',
                From : "hostingwork.space@gmail.com",
                Subject : "New message on contact from "+name,
                Body : Body
            }).then(
                message =>{
                    if(message=='OK'){
                        $(".submit").find(".snippet").css("display", "none");
                        $(".submit").find(".text-btn").css("display", "block");
                        $(".contact-result-text").css("color", "#4CAF50");
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