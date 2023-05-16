$(document).ready(function() {

    // hedding top fixed query
    if ($(window).scrollTop() >= 5) {
        $(".navbar").addClass("fixed-top");
    }
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 5) {
            $(".navbar").addClass("fixed-top");
        }
        else {
            $(".navbar").removeClass("fixed-top");
        }
    });
    // $(document).on("click",".navbar-toggler-btn",function() {
    //     $(".manu-bar-fullscreen").addClass("show");
    // });
    // $(document).on("click",".close-manu-btn",function() {
    //     $(this).closest(".manu-bar-fullscreen").removeClass("show");
    // });

    // Toogle right sidebar query
    $(document).on("click",".close-sidebar",function() {
        $(this).closest(".navbar").find(".navbar-toggler").click();
    });


    // portfolio section query
    $('.portfolio-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });


    // testimonial section start
    $('.testimonial-slider').slick({
        arrows: true,
        centerPadding: "0px",
        dots: false,
        slidesToShow: 1,
        infinite: false,
        prevArrow: $('.prev-testi'),
        nextArrow: $('.next-testi')
    });

    

});







