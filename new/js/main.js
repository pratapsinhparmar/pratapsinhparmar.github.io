$(document).ready(function () {
    'use strict';

    //********* page loader js

    setTimeout(function () {
        $('.loader_div').fadeToggle();
    }, 1500);

    //********* typed js
    var element = $(".banner-animated-text");

    $(function(){
       element.typed({
           strings: ["Web Designer.", "Web Developer.", "Freelancer."],
           loop: true,
           typeSpeed: 90
       });
    });

    $(window).on('scroll', function () {
        var menu_area = $('.header');
        if ($(window).scrollTop() > 10) {
            menu_area.addClass('sticky_navigation');
        } else {
            menu_area.removeClass('sticky_navigation');
        }
    });

    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
            $(this).collapse('hide');
        }
    });

    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 195
    });

    $('a.js-scroll').on("click", function (e) {
        e.preventDefault();
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1000);
    });

    $('.portfolio-all').mixItUp();

    $("#owl-testimonial-slider").owlCarousel({
        items: 1,
        itemsDesktop: [1000, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        pagination: true,
        navigation: false,
        slideSpeed: 1000,
        singleItem: false,
        autoplay: true,
        loop: true
    });

    var $clientCarousel = $('#tools-carousel');
    if ($clientCarousel.length > 0) {
        $clientCarousel.owlCarousel({
            loop: true,
            center: true,
            margin: 0,
            autoplay: true,
            dots: false,
            autoplayTimeout: 2500,
            smartSpeed: 250,
            responsive: {
                0: {
                    items: 3
                },
                768: {
                    items: 3
                },
                1170: {
                    items: 5
                }
            }
        });
    }

    $(".btn-pref .btn").click(function () {
        $(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
        $(this).removeClass("btn-default").addClass("btn-primary");
    });

});