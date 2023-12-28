$(window).on("load", function() {
    $(".backdrop").addClass("d-none");
});

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

    // banner text animation query 
    if($(".my-position").hasClass("test-animation")) {
        var typing=new Typed(".test-animation", {
            strings: ["Web Designer", "Web Developer", "Wordpress Developer", "Freelancer"],
            typeSpeed: 100,
            backSpeed: 40,
            loop: true,
        });
    }

    // portfolio section query
    $('.portfolio-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]        
    });

    // testimonial section start
    $('.testimonial-slider').slick({
        arrows: true,
        centerPadding: "0px",
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        slidesToShow: 1,
        infinite: true,
        prevArrow: $('.prev-testi'),
        nextArrow: $('.next-testi')
    });

});







