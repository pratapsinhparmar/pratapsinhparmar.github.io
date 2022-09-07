$( document ).ready(function() {
    // Click to manu Toggle script
    $(document).on("click",".toggle-btn",function() {
        $(".manu").toggleClass("toggle-btn-active");
    });


    // Our Client section Plugin Script
    $('.carousel-client').bxSlider({
        auto: true,
        slideWidth: 300,
        minSlides: 2,
        maxSlides: 4,
        controls: false,
        pager: false
    });
    
    // FAQ Section script
    const accordionItemHeaders = document.querySelectorAll(
        ".accordion-item-header"
    );
    accordionItemHeaders.forEach((accordionItemHeader) => {
        accordionItemHeader.addEventListener("click", (event) => {
    
        const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.acc-active");
        if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
            currentlyActiveAccordionItemHeader.classList.toggle("acc-active");
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }
      
        accordionItemHeader.classList.toggle("acc-active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
            if (accordionItemHeader.classList.contains("acc-active")) {
                accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
            } else {
                accordionItemBody.style.maxHeight = 0;
            }
        });
    });

    // News crousel Plugin Query
    $(".news-active").slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        respionsive: [{
            breakpoint: 1024,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 2,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 767,
            settngs: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }]
    });
  

});

// $( document ).ready(function() {
    // Testimonial crousel Plugin Query
    $(".testimonial-slider").slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
        breakpoint: 767,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }]
    });

// });


$( document ).ready(function() {
    // Counter 
    jQuery('.statistic-counter').counterUp({
        delay: 10,
        time: 2000
    });
});

// Click To Top Section
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
      $("#toTop").fadeIn();
    } else {
      $("#toTop").fadeOut();
    }
});
  
$(document).on("click", "#toTop", function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
});
