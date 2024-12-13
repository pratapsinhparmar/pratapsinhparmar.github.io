<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minimlism - Contact</title>
      <!-- Site Icons -->
      <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />

      <!-- Bootstrap CSS -->
      <link rel="stylesheet" href="css/bootstrap.min.css">

      <!--fontawesome css-->
      <link rel="stylesheet" href="css/fontawesome-all.min.css">
      
      <!-- Site CSS -->
      <link rel="stylesheet" href="css/style.css">
  
      <!-- Responsive CSS -->
      <link rel="stylesheet" href="css/responsive.css">

      <!--Slick slider css-->
      <link rel="stylesheet" href="Plugins/slick-slider/css/slick.css"/>
      <link rel="stylesheet" href="Plugins/slick-slider/css/slick-theme.css"/>
    <!-- Modernizer -->
    <script src="js/modernizr-2.8.3.js"></script>
    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/popper.min.js"></script>    
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.validate.min.js"></script>
    <script src="js/ValidationJS/contact.js"></script>
    <script src="Plugins/slick-slider/slick/slick.js"></script>
</head>
<body>
    <!-- ***** Header Area Start ***** -->
    <header class="header_area">
        <div class="container-fluid">
            <div class="row align-items-center">
                <!-- Menu Area Start -->
                <div class="col-12">
                    <div class="menu_area">
                        <nav class="navbar navbar-expand-md navbar-light">
                            <!-- Logo -->
                            <a href="images/minimal logo.svg" class="d-lg-none d-block"><img alt="minimlismlogo" src="images/minimal logo.svg" width="100" height="80"></a>

                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#minimlism-navbar" aria-controls="shahco-navbar" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                            <!-- Menu Area -->
                            <div class="collapse navbar-collapse" id="minimlism-navbar">
                                <ul class="navbar-nav mr-auto d-lg-block d-none" id="nav-logo">
                                    <li class="nav-item">
                                        <a class="nav-link nav-toggler" href="index.html">
                                            <img alt="minimlismlogo" src="images/minimal logo.svg" class="img-responsive mainLogo" />
                                        </a>
                                    </li>
                                </ul>
                                <ul class="navbar-nav ml-auto" id="nav">
                                    <li class="nav-item" id="minimlismProject">
                                        <a class="nav-link" href="Project.html">Project</a>
                                    </li>

                                    <li class="nav-item" id="Aboutminimlism">
                                        <a class="nav-link" href="about.html">About</a>
                                    </li>

                                    <li class="nav-item d-none" id="workWithus">
                                        <a class="nav-link " href="#">Work With Us</a>
                                    </li>

                                    <li class="nav-item" id="contactTominimlism">
                                        <a class="nav-link" href="contact.html">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <div class="section_margin100">

    
    <!-- ***** Header Area End ***** -->
    <!-- ***** Type name Area Start ***** -->
    <!-- <section class="enternameArea d-flex flex-column align-items-center justify-content-center"> 
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="askNamelabel">
                        <div class="d-flex flex-row justify-content-center align-items-start"><img src="images/right-arrow.svg" alt="rightArrow" class="img-fluid rightAnglearrow"/><h2 class="colorRed ml-40">Hello.We're minimlism.</h2> </div>
                        <h2>what’s your name?</h2>
                    </div>
                    <div class="d-flex flex-row justify-content-center align-items-start">
                        <img src="images/right-arrow.svg" alt="rightArrow" class="img-fluid rightAnglearrow"/>
                        <div class="input-wrapper ml-40"><input type="text" placeholder="Your Name" id="enterName" name="enterName" class="form-control" required/></div>
                    </div>
                    <a href="#customerInquiry" class="btn btn-transparent colorRed" id="submitBtn">Submit</a>
                </div>
            </div>
        </div>
    </section> -->
    <!-- *****  Type name Area End ***** -->

    <!-- ***** Inquiries Area Start ***** -->
    <!-- <section class="InquiriesArea flex-column align-items-center justify-content-center d-none" id="customerInquiry"> 
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-10 col-12 m-auto">
                    <div class="row">
                        <div class="col-lg-7 col-md-7 col-12">
                            <div>
                                <h2 class="inquiryHeader">Let's start a conversation about your<br>
                                    requirements or media inquiries.</h2>
                                <h4 class="inquiryTxt">I need 
                                    <select id="inquiriesTxt" name="inquiriesTxt" class="custom-select selectOption">
                                        <option value="0">Inquiries</option>
                                        <option value="1">Branding & Communications</option>
                                        <option value="2">Digital Marketing</option>
                                        <option value="3">UI/UX</option>
                                    </select> for my<br> Company because I like what you do.
                                </h4>
                                <h4 class="inquiryTxt">You can contact me at the following email <span class="d-flex flex-row"><input type="text" placeholder="Type your email id" id="enterEmail" name="enterEmail" class="form-control typeEmail"/> or we can have a call on</span>
                                <span class="d-flex flex-row"><input type="text" placeholder="Type your contact number" id="enterContact" name="enterContact" class="form-control typeContact"/>So I look forward to your message.</span></h4>
                                <div class="mb-4">
                                    <label class="check4">
                                        <input type="checkbox" id="accepted"   name="accepted">
                                        By checking this box, I agree that minimlism will use my data to contact me.
                                        <span class="checkmark4"></span>
                                    </label>
                                </div>
                                <div>
                                    <a href="#ThankyounsgArea" class="btn btn-red colorWhite" id="sendBtn">Send</a>
                                </div>
                            </div>
                            
                        </div>
                        <div class="col-lg-5 col-md-4 col-12 ml-auto">
                            <div class="aboutHeaderimg mt-0"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> -->
    <!-- *****  Inquiries Area End ***** -->

     <!-- ***** border Area Start ***** -->
     <!-- <div class="redborderBottom d-none" id="borderArea1"></div> -->
     <!-- ***** border Area End ***** -->


    <!-- ***** Talk with founder area Start ***** -->
    <!-- <section class="FounderintroArea section_padding100 flex-column align-items-center justify-content-center d-none" id="ThankyounsgArea"> 
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-10 col-12 m-auto">
                    <div class="row">
                        <div class="col-md-6 col-12 d-flex flex-column align-items-center">
                            <div class="Founderintro d-flex flex-column align-items-start">
                                <div class="d-flex flex-row justify-content-center align-items-start"><img src="images/right-arrow.svg" alt="rightArrow" class="img-fluid rightAnglearrow"/><h2 class="colorRed">Hello <span class="colorRed">Bhupendra Singh</span></h2> </div>
                                <h2>Nice to talk with you!</h2>
                            </div>
                            <div class="Thankumsg">
                                <h2>We've received your message.</h2>
                                <h1 class="colorRed">Thank You!</h1>
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-4 col-12 ml-auto">
                            <div class="aboutHeaderimg mt-0"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> -->
    <!-- ***** Talk with founder area End ***** -->

    <!--Hello section of contactus start-->
    <section class="contactFormWrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-10 col-12 m-auto">
                    <div class="row">
                        <div class="col-md-7 col-12">
                            <div class="contactForm">
                                <div class="row">
                                    <div class="col-12">
                                        <div>
                                            <div>
                                                <h2>Hello!</h2>
                                            </div>
                                            
                                            <form class="form-material" role="form" id="contactForm" onsubmit="return validateForm()" method="post">
                                                <div class="row">
                                                    <div class="col-md-6 col-12">
                                                        <div class="userDetails">
                                                            <div class="form-group">
                                                                <input class="form-control" type="name" id="txtName" name="txtName" placeholder="Your Name">
                                                            </div>
                                                            <div class="form-group ">
                                                                <input class="form-control" type="text" id="txtNumber" name="txtNumber" placeholder="Your Number">
                                                            </div>
                                                            <div class="form-group">
                                                                <input class="form-control" type="email" id="txtEmail" name="txtEmail" placeholder="Your Email">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-12">
                                                        <div class="MSGtextbox">
                                                            <div class="form-group">
                                                                <textarea class="form-control formtextarea" id="exampleFormControlTextarea1" rows="4" cols="50" placeholder="Type your message here"></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 text-right">
                                                        <a href="#" class="btn btn-red colorWhite mt-3" id="txtsubmit" name="txtsubmit">Send</a>
                                                        <!-- <div class="form-group">
                                                            <input class="form-control" type="submit" id="txtsubmit" name="txtsubmit" placeholder="Your Email">
                                                        </div> -->
                                                    </div>
                                                   
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                  
                                </div>
                                <!-- <div class="text-right"><a href="#" class="btn btn-red colorWhite mt-3" id="sendContactdetails">Send</a></div> -->
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-5 col-12 m-auto">
                            <div class="contactimg mt-0"></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <!-- ***** border Area Start ***** -->
                            <div class="redborderBottom section_padding100" id="borderArea2"></div>
                            <!-- ***** border Area End ***** -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--Hello section of contactus end-->

    <!-- ***** Contact us Area Start ***** -->
    <section class="contactUSarea section_padding100" id="Ownercontact">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-10 col-12 m-auto">
                    <div class="row">
                        <div class="col-md-6 col-12 ">
                            <div class="contactDetails">
                                <p>talk@minimlism.com</p>
                                <p>+91 9662572724</p>
                                <p>www.minimlism.com</p>
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-4 col-12 ml-auto">
                            <h2>
                                Yes you want to contact us,<br>
                                You can too.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- ***** Conatct us Area End ***** -->


    <!-- ***** Footer Area Start ***** -->
    <footer class="footer_area section_margin100 align-items-center">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="row">
                        <div class="col-md-6 px-0">
                            <a href="index.html">
                                <img src="images/footerLogo.svg" alt="footerlogo" class="img-fluid footerLogo"/>
                            </a>
                            <ul class="d-flex flex-sm-row flex-column footerMenu">
                                <li>
                                    <a href="Project.html">Project</a>
                                </li>
                                <li>
                                    <a href ="about.html">About</a>
                                </li>
                                <li>
                                    <a href ="contact.html">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-6 px-4">
                            <p>We love a like from you!</p>
                            <ul class="d-flex flex-row justify-content-md-end justify-content-start social-icon">
                                <li><a href="https://www.linkedin.com/in/minimlism/" target="_blank"><img src="images/Linkedin.svg" alt="linkedin" class="img-fluid socialIcon"></a></li>
                                <li><a href="https://www.facebook.com/minimlism" target="_blank"><img src="images/Facebook.svg" alt="facebook" class="img-fluid socialIcon"></a></li>
                                <li><a href="https://www.instagram.com/minimlism_/" target="_blank"><img src="images/Instagram.svg" alt="instagram" class="img-fluid socialIcon"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copy-rightSection mt-5">
            <div class="container-fluid">
                    <div class="row">
                    <div class="col-12">
                        <div class="text-center">
                            @2020 minimlism
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- ***** Footer Area End ***** -->
</div>
    <script type="text/javascript"> 
        /*--Sticky header--*/
        var $window = $(window);
        // :: 2.0 Sticky Active Code
        $window.on('scroll', function () {
            if ($window.scrollTop() > 48) {
                $('.header_area').addClass('sticky slideInDown');
            } else {
                $('.header_area').removeClass('sticky slideInDown');
            }
        });
         $(document).ready(function (){
          
  $("#txtNumber").keypress(function (e) {
     //if the letter is not digit then display error and don't type anything
     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
      return false;
    }
   });
            $('#contactTominimlism').addClass('active');
            $('#Aboutminimlism').removeClass('active');
            $('#minimlismProject').removeClass('active');
        });
    </script>
</body>
</html>

<?php    

if(isset($_POST['txtsubmit'])){

    $to_email = 'architgsoni@gmail.com';
    $subject = 'Testing PHP Mail';
    $message = 'This mail is sent using the PHP mail function';
    $headers = 'From: noreply @ company . com';
    try {
    mail($to_email,$subject,$message,$headers);
    }
    catch (Exception $e) {
        echo "<script>alert('Message could not be sent.');</script>";
    }

}

?>
