// Navbar Dropdown Section
$( document ).ready(function() {

    $('nav .dropdown').hover(function(){
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-box').addClass('show');
	}, function(){
		var $this = $(this);
        $this.removeClass('show');
        $this.find('> a').attr('aria-expanded', false);
        $this.find('.dropdown-box').removeClass('show');
	});

    $('.submenu-dropdown').hover(function(){
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.submenu').addClass('show');
	}, function(){
		var $this = $(this);
        $this.removeClass('show');
        $this.find('> a').attr('aria-expanded', false);
        $this.find('.submenu').removeClass('show');
	});

});


// About section client logo slider script
$(document).ready(function(){

    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        prevArrow: '<i class="slick-prev fas fa-angle-left"></i>',
        nextArrow: '<i class="slick-next fas fa-angle-right"></i>',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
            }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 2
            }
        }]
    });

});


// Service Slider Query
$(document).ready(function(){

    $('.inspection-sorting-slider').slick({
        speed: 1000,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-right"><i class="fa fa-angle-right"></i></div>',
        prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"><i class="fa fa-angle-left"></i></div>',
    });

});


function visible(partial) {
    var $t = partial,
    $w = jQuery(window),
    viewTop = $w.scrollTop(),
    viewBottom = viewTop + $w.height(),
    _top = $t.offset().top,
    _bottom = _top + $t.height(),
    compareTop = partial === true ? _bottom : _top,
    compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));
}

// About Counter counting
$(window).scroll(function(){
    if(visible($('.count-digit'))) {
        if($('.count-digit').hasClass('counter-loaded')) return;
        $('.count-digit').addClass('counter-loaded');
      
        $('.count-digit').each(function () {
        var $this = $(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 5000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
    }
})


// Hiro Animation Text
var spanText = function spanText(text) {
    var string = text.innerText;
    var spaned = '';
    for (var i = 0; i < string.length; i++) {
        if(string.substring(i, i + 1) === ' ') spaned += string.substring(i, i + 1);
        else spaned += '<span>' + string.substring(i, i + 1) + '</span>';
    }
    text.innerHTML = spaned;
}
var headline = document.querySelector("p");
spanText(headline);
let animations = document.querySelectorAll('.animate');
animations.forEach(animation => {
    let letters = animation.querySelectorAll('span');
    letters.forEach((letter, i) => {
        letter.style.animationDelay = (i * 0.010) + 's';
    });
})