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
                duration: 3000,
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

// swiper slide to query run
swiper.on( 'slideChange', function() {
    if ( swiper.activeIndex > swiper.previousIndex ) {
        $(".animation-class").removeClass("animate");
        setTimeout(
        function() {
            $(".animation-class").delay(500).addClass("animate");
        }, 5);
    } else {
        $(".animation-class").removeClass("animate");
        setTimeout(
        function() {
            $(".animation-class").delay(500).addClass("animate");
        }, 5);
    }
});


// career filter query
$('#search').on('keyup', function() {
    var value = $(this).val();
    var patt = new RegExp(value, "i");

    $('#careerTable').find('tr').each(function() {
        var $table = $(this);
        if (!($table.find('td a').text().search(patt) >= 0)) {
            $table.not('.t_head').hide();
        }
        if (($table.find('td').text().search(patt) >= 0)) {
            $(this).show();
        }
    });
});

// service and technology manu select sub option to hide manu
$(document).on("click",".dropdown-custom",function() {
    console.log("drop");
    $(".navbar-collapse").removeClass("show");
});


// user country to state code for selected option
let user_country_code = "IN";

(function () {

    // Get the country name and state name from the imported script.
    let country_list = country_and_states['country'];
    let states_list = country_and_states['states'];

    // creating country name drop-down
    let option =  '';
    option += '<option>select country</option>';
    for(let country_code in country_list){
        // set selected option user country
        let selected = (country_code == user_country_code) ? ' selected' : '';
        option += '<option value="'+country_code+'"'+selected+'>'+country_list[country_code]+'</option>';
    }
    document.getElementById('country').innerHTML = option;

    // creating states name drop-down
    let text_box = '<input type="text" class="input-text" id="state">';
    let state_code_id = document.getElementById("state-code");

    function create_states_dropdown() {
        // get selected country code
        let country_code = document.getElementById("country").value;
        let states = states_list[country_code];
        // invalid country code or no states add textbox
        if(!states){
            state_code_id.innerHTML = text_box;
            return;
        }
        let option = '';
        if (states.length > 0) {
            option = '<select id="state">\n';
            for (let i = 0; i < states.length; i++) {
                option += '<option value="'+states[i].code+'">'+states[i].name+'</option>';
            }
            option += '</select>';
        } else {
            // create input textbox if no states 
            option = text_box
        }
        state_code_id.innerHTML = option;
    }

    // country select change event
    const country_select = document.getElementById("country");
    country_select.addEventListener('change', create_states_dropdown);
    create_states_dropdown();
})();



// International Teliphone Input query 
var input = document.querySelector("#phoneNumber");
var iti = window.intlTelInput(input, {
    utilsScript: "js/utils.js",
});
window.iti = iti;


