/*
 * Author: ArtStyles (ArtTemplate)
 * Template Name: vCard 4
 * Version: 1.0.0
*/

$(document).ready(function() {

    'use strict';

    /*-----------------------------------------------------------------
      Detect device mobile
    -------------------------------------------------------------------*/
	
    var isMobile = false; 
    if( /Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('html').addClass('touch');
        isMobile = true;
    }
    else {
        $('html').addClass('no-touch');
        isMobile = false;
    }


    /*-----------------------------------------------------------------
      Show/hide additional info
    -------------------------------------------------------------------*/

    $('.js-btn-toggle').on('click', function(e) {     
        $('.js-show').toggle('slow');
        e.preventDefault();
    });
    

    /*-----------------------------------------------------------------
      Carousel
    -------------------------------------------------------------------*/	
    
	  // Testimonials
	  $('.js-carousel-review').each(function() {
		    var testimonialsCarousel = new Swiper('.js-carousel-review', {
            slidesPerView: 2,
			      spaceBetween: 30,
			      speed: 300,
			      grabCursor: true,
			      watchOverflow: true,
            pagination: {
                el: '.swiper-pagination',
		            clickable: true
            },
			      /*autoplay: {
                delay: 5000,
            },*/
			      breakpoints: {
                580: {
					          slidesPerView: 1,
                    spaceBetween: 20
                },
                991: {
                    slidesPerView: 1
                }
            }
		    });
	  });
	
	  // Clients
	  $('.js-carousel-clients').each(function() {
		    var clientCarousel = new Swiper('.js-carousel-clients', {
            slidesPerView: 4,
			      spaceBetween: 30,
			      //loop: true,
			      grabCursor: true,
			      watchOverflow: true,
            pagination: {
                el: '.swiper-pagination',
		            clickable: true
            },
			      breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 0
                },				
                580: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },				
                991: {
                    slidesPerView: 3,
                    spaceBetween: 30
                }
            }
		    });
	  });
	
	  // Project carousel
	  $('.js-carousel-project').each(function() {
		    var projectCarousel = new Swiper('.js-carousel-project', {
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 30,
            centeredSlides: true,
			      speed: 300,
			      grabCursor: true,
			      watchOverflow: true,
            pagination: {
                el: '.swiper-pagination',
		            clickable: true
            },
			      /*autoplay: {
                delay: 5000,
            },*/
			      breakpoints: {
                580: {
					          slidesPerView: 1,
                    spaceBetween: 20
                },
                991: {
                    slidesPerView: 1
                }
            }
		    });
	  });


    /*-----------------------------------------------------------------
      Sticky sidebar
    -------------------------------------------------------------------*/

    function activeStickyKit() {
        $('.sticky-column').stick_in_parent({
            parent: '.sticky-parent'
        });

        // bootstrap col position
        $('.sticky-column')
        .on('sticky_kit:bottom', function(e) {
            $(this).parent().css('position', 'static');
        })
        .on('sticky_kit:unbottom', function(e) {
            $(this).parent().css('position', 'relative');
        });
    };
    activeStickyKit();

    function detachStickyKit() {
        $('.sticky-column').trigger("sticky_kit:detach");
    };

    //  stop sticky kit
    //  based on your window width

    var screen = 1200;

    var windowHeight, windowWidth;
    windowWidth = $(window).width();
    if ((windowWidth < screen)) {
        detachStickyKit();
    } else {
        activeStickyKit();
    }

    // windowSize
    // window resize
    function windowSize() {
        windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
        windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
    }
    windowSize();

    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    $(window).resize(debounce(function(){
        windowSize();
        $(document.body).trigger("sticky_kit:recalc");
        if (windowWidth < screen) {
            detachStickyKit();
        } else {
            activeStickyKit();
        }
    }, 250));


    /*-----------------------------------------------------------------
      Progress bar
    -------------------------------------------------------------------*/
    
	  function progressBar() {
	      $('.progress').each(function() {
		        var ctrl = new ScrollMagic.Controller();
		        new ScrollMagic.Scene({
                triggerElement: '.progress',
	              triggerHook: 'onEnter',
	              duration: 300
            })
            .addTo(ctrl)
		        .on("enter", function (e) {
			          var progressBar = $('.progress-bar span');
                progressBar.each(function(indx){
                    $(this).css({'width': $(this).attr('aria-valuenow') + '%', 'z-index': '2'});
                });
		        });
        });
    }
	  
    progressBar(); //Init
	
    /*-----------------------------------------------------------------
      Scroll indicator
    -------------------------------------------------------------------*/
  
    function scrollIndicator() {
        $(window).on('scroll', function() {
            var wintop = $(window).scrollTop(), docheight = 
            $(document).height(), winheight = $(window).height();
 	          var scrolled = (wintop/(docheight-winheight))*100;
  	        $('.scroll-line').css('width', (scrolled + '%'));
        });
    }
	
	  scrollIndicator(); //Init
	
	
    /*-----------------------------------------------------------------
      ScrollTo
    -------------------------------------------------------------------*/
	
    function scrollToTop() {
        var $backToTop = $('.back-to-top'),
            $showBackTotop = $(window).height();
			
        $backToTop.hide();

        $(window).scroll( function() {
            var windowScrollTop = $(window).scrollTop();
            if( windowScrollTop > $showBackTotop ) {
                $backToTop.fadeIn('fast');
            } else {
                $backToTop.fadeOut('fast');
            }
        });
        
		    $backToTop.on('click', function (e) {
            e.preventDefault();
            $(' body, html ').animate( {scrollTop : 0}, 'fast' );
        });
    }
	
	  scrollToTop(); //Init


    /*-----------------------------------------------------------------
      Style background image
    -------------------------------------------------------------------*/	
  
    $('.js-image').each(function(){
        var dataImage = $(this).attr('data-image');
        $(this).css('background-image', 'url(' + dataImage + ')');
    });
    
	
    /*-----------------------------------------------------------------
      Autoresize textarea
    -------------------------------------------------------------------*/	

    $('textarea').each(function(){
        autosize(this);
    });


    /*-----------------------------------------------------------------
      Switch categories & Filter mobile
    -------------------------------------------------------------------*/	
  
    $('.select').on('click','.placeholder',function(){
        var parent = $(this).closest('.select');
        if ( ! parent.hasClass('is-open')){
            parent.addClass('is-open');
            $('.select.is-open').not(parent).removeClass('is-open');
        } else{
            parent.removeClass('is-open');
        }
    }).on('click','ul>li',function(){
        var parent = $(this).closest('.select');
        parent.removeClass('is-open').find('.placeholder').text( $(this).text() );
        parent.find('input[type=hidden]').attr('value', $(this).attr('data-value') );
	
	      $('.filter__item').removeClass('active');
	      $(this).addClass('active');
	      var selector = $(this).attr('data-filter');
		
	      $('.js-filter-container').isotope({
	          filter: selector
	      });
	      return false;	
    });


    /*-----------------------------------------------------------------
      Masonry
    -------------------------------------------------------------------*/	
	
    // Portfolio
    var $portfolioMasonry = $('.js-masonry').isotope({
        itemSelector: '.gallery-grid__item',
	      layoutMode: 'fitRows',
        percentPosition: true,
        resizable: false,
	      transitionDuration: '0.5s',
        hiddenStyle: {
            opacity: 0,
            transform: 'scale(0.001)'
        },
        visibleStyle: {
            opacity: 1,
            transform: 'scale(1)'
        },
        fitRows: {
            gutter: '.gutter-sizer'
        },	
        masonry: {
	          columnWidth: '.gallery-grid__item',
            gutter: '.gutter-sizer',
            isAnimated: true
        }
    });
  
    $portfolioMasonry.imagesLoaded().progress( function() {
        $portfolioMasonry.isotope ({
	          columnWidth: '.gallery-grid__item',
            gutter: '.gutter-sizer',
            isAnimated: true,
	          layoutMode: 'fitRows',
            resizable: false,
            fitRows: {
                gutter: '.gutter-sizer'
            }
	      });
    });
 
  
    /*-----------------------------------------------------------------
	  Tabs
    -------------------------------------------------------------------*/	
    
    // on load of the page: switch to the currently selected tab
    var hash = document.location.hash; //var hash = window.location.hash;
    var prefix = "tab_";
    if (hash) {
        $('.nav a[href="'+hash.replace(prefix,"")+'"]').tab('show');
    } 
    // Change hash for page-reload 
    $('ul.nav > li > a').on('shown.bs.tab', function (e) {
        window.location.hash = e.target.hash.replace("#", "#" + prefix);
    });

    $('a[data-bs-toggle=tab]').each(function () {
        var $this = $(this);
        $this.on('shown.bs.tab', function () {
            $portfolioMasonry.isotope ({
                itemSelector: '.gallery-grid__item',
                columnWidth: '.gallery-grid__item',
                gutter: '.gutter-sizer',
                isAnimated: true
            });
        }); //end shown
    });  //end each


    /*-----------------------------------------------------------------
      niceScroll
    -------------------------------------------------------------------*/		

    $('textarea').niceScroll({
		    horizrailenabled: false,
        cursorcolor: "#383838",
        cursorborder: '0',
        cursorwidth: '3px',
        railpadding: { top: 10, right: 2, left: 0, bottom: 10 }
	  });


    /*-----------------------------------------------------------------
      emoji add in textarea
    -------------------------------------------------------------------*/
	
    $(function() {
        $('.emoji-wrap img').on('click', function(){
            var emoji = $(this).attr('title');
            $('#commentForm').val($('#commentForm').val()+" "+emoji+" ");
        });
    });


    /*-----------------------------------------------------------------
	  mediumZoom
    -------------------------------------------------------------------*/
  
    mediumZoom('[data-zoom]', {
        margin: 30
    });

	/*-----------------------------------------------------------------
	  magnificPopup
    -------------------------------------------------------------------*/

    $('.js-open-review').magnificPopup({
        type: 'inline',
        midClick: true,
        fixedContentPos:true,
        removalDelay: 500, //delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
    });

    /*-----------------------------------------------------------------
      Lazyload
    -------------------------------------------------------------------*/

    lazySizes.init();

	
    /*-----------------------------------------------------------------
      Polyfill object-fit
    -------------------------------------------------------------------*/	
	
    var $someImages = $('img.cover');
    objectFitImages($someImages);
	

    /*-----------------------------------------------------------------
      Contacts form
    -------------------------------------------------------------------*/


    // validate the comment form when it is submitted
    $(".contact-form").validate({
      rules: {
          nameContact:{
              required: true,
          },
          emailContact: {
              required: true,
              email: true
          },
          numberContact: {
              required: true,
              minlength: 4,
              maxlength: 13
          },
          subjectContact:{
              required: true,
          },
          messageContact:{
              required: true,
          },
      },
      messages: {
          nameContact: {
              required: "Please enter your name",
          },
          emailContact: {
              required: "Please enter email address",
          },
          numberContact: {
              required: "Please enter phone number",
              validnum: "Please enter phone number between length 4 to 13",
              minlength: "Mobile number must be atleast 4 digits.",
              maxlength: "Mobile number cannot be more than 13 digits.",
          },
          subjectContact:{
              required: "Please enter subject"
          },
          messageContact:{
              required: "Please enter message"
          },
      }
    });


    $(".submit").click(function() {
      if($(".contact-form").valid()) {
        $(".contact-msg").find(".snippet").css("display", "block");

          // SMTP JS
          var name = $('#nameContact').val();
          var email = $('#emailContact').val();
          var number = $('#numberContact').val();
          var subject = $('#subjectContact').val();
          var message = $('#messageContact').val();
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
          Body += "<a href='https://pratapsinhparmar.github.io/' target='_blank'>";
          Body += "<img src='https://pratapsinhparmar.github.io/img/pratapsinh%20parmar.png' style='width: 160px; filter: brightness(0) invert(1);'>";
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
          Body += "<h1 style='font-size: 32px; font-weight: 400; margin: 0;'>Email on Company</h1>";
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
          Body += "<a href='https://pratapsinhparmar.github.io/' style='text-decoration:none; color:#2c4dd8' rel='noopener' target='_blank'>Pratapsinh Parmar</a>";
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
          Body += "<a style='text-decoration:none' href='https://www.instagram.com/pratapsinhji_parmar/' target='_blank'>";
          Body += "<img style='height:auto!important;width:19px;max-width:19px;font-size:10px;line-height:12px;font-family:'Whyte',Arial,Helvetica,sans-serif;color:#000;background-color:#fff;vertical-align:top;text-align:center' src='https://ci6.googleusercontent.com/proxy/xiT7_dX8nytRchBrcyZWD8xC6O6Spb6nuzTerdsDzNjOz_Jf2Hb17-dC6sJTGcFSrCmkHo8bX26sFhtrEzmmqHpICZCE2i7z6JZTj3SNTMmXcd0szz6w5gJKW0Q=s0-d-e1-ft#https://static.figma.com/uploads/3d4f14e1f53a6fba465af3582fdbf381c5015b77' alt='instagram' width='19' class='CToWUd' data-bit='iit'>";
          Body += "</a>";
          Body += "</td>";
          Body += "<td style='font-size:1px;line-height:1px;width:29px'>&nbsp;</td>";
          Body += "<td style='line-height:1px;font-size:1px;width:19px'>";
          Body += "<a style='text-decoration:none' href='https://www.facebook.com/profile.php?id=100024589951236' target='_blank'>";
          Body += "<img style='height:auto!important;width:19px;max-width:19px;font-size:10px;line-height:12px;font-family:'Whyte',Arial,Helvetica,sans-serif;color:#000;background-color:#fff;vertical-align:top;text-align:center' src='https://ci6.googleusercontent.com/proxy/4ui7du3pn4g3OMRRNXai11-_b1Yf34o-RA-bgQsSq1IRRyF02BjmUmEGWff8rGe3mALiZAty3CFBBuNhSZ-r_e4WG76M_zhmKYtChLpJcSIceEbmZgYXBZuQsyo=s0-d-e1-ft#https://static.figma.com/uploads/26cf1a5e350956c17084f858f5301e94ecb00ce3' alt='facebook' width='19' class='CToWUd' data-bit='iit'>";
          Body += "</a>";
          Body += "</td>";
          Body += "<td style='font-size:1px;line-height:1px;width:29px'>&nbsp;</td>";
          Body += "<td style='line-height:1px;font-size:1px;width:19px'>";
          Body += "<a style='text-decoration:none' href='https://www.linkedin.com/in/pratapsinhparmar/' target='_blank'>";
          Body += "<img style='height:auto!important;width:19px;max-width:19px;font-size:10px;line-height:12px;font-family:'Whyte',Arial,Helvetica,sans-serif;color:#000;background-color:#fff;vertical-align:top;text-align:center' src='https://ci3.googleusercontent.com/proxy/zKiMwC-hl6AYU3HAT8YDXD9iy_e0p9bmVi-g3vQW6VS24AtZdbw6DYldyRihtHNLsFA5iLHuM5Dvkllj722-MHnP-fPpGomXR-9Cn7tbFESnKvodEeGDZARs19U=s0-d-e1-ft#https://static.figma.com/uploads/b0fc7dddd44c14b09ff6d3d1f12e6ba9c6909281' alt='linkedin' width='19' class='CToWUd' data-bit='iit'>";
          Body += "</a>";
          Body += "</td>";
          Body += "<td style='line-height:1px;font-size:1px;width:0px'><br></td>";
          Body += "</tr>";
          Body += "</tbody>";
          Body += "</table>";
          Body += "</td>";
          Body += "</tr>";
          Body += "<tr style='height:16px'>";
          Body += "<td style='font-size:12px;line-height:17px;font-family:Whyte,Arial,Helvetica,sans-serif;color:#a5a5a5;padding:0px 0px 32px;height:16px;width:300px' align='center'>Follow us to stay connected with us <br>All rights reserved © 2022 Pratapsinh Parmar.<br></td>";
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
              To : 'pratapsinhparmar.contact@gmail.com',
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






    /*-----------------------------------------------------------------
      PhotoSwiper
    -------------------------------------------------------------------*/

    var initPhotoSwipeFromDOM = function(gallerySelector) {
        // parse slide data (url, title, size ...) from DOM elements
        // (children of gallerySelector)
        var parseThumbnailElements = function(el) {
          var thumbElements = el.childNodes,
              numNodes = thumbElements.length,
              items = [],
              figureEl,
              linkEl,
              size,
              item;
      
          for (var i = 0; i < numNodes; i++) {
            figureEl = thumbElements[i]; // <figure> element
      
            // include only element nodes
            if (figureEl.nodeType !== 1) {
              continue;
            }
      
            linkEl = figureEl.children[0]; // <a> element
      
            size = linkEl.getAttribute("data-size").split("x");
      
            // create slide object
            item = {
              src: linkEl.getAttribute("href"),
              w: parseInt(size[0], 10),
              h: parseInt(size[1], 10)
            };
      
            if (figureEl.children.length > 1) {
              // <figcaption> content
              item.title = figureEl.children[1].innerHTML;
            }
      
            if (linkEl.children.length > 0) {
              // <img> thumbnail element, retrieving thumbnail url
              item.msrc = linkEl.children[0].getAttribute("src");
            }
      
            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
          }
      
          return items;
        };
      
        // find nearest parent element
        var closest = function closest(el, fn) {
          return el && (fn(el) ? el : closest(el.parentNode, fn));
        };
      
        // triggers when user clicks on thumbnail
        var onThumbnailsClick = function(e) {
          e = e || window.event;
          e.preventDefault ? e.preventDefault() : (e.returnValue = false);
      
          var eTarget = e.target || e.srcElement;
      
          // find root element of slide
          var clickedListItem = closest(eTarget, function(el) {
            return el.tagName && el.tagName.toUpperCase() === "FIGURE";
          });
      
          if (!clickedListItem) {
            return;
          }
      
          // find index of clicked item by looping through all child nodes
          // alternatively, you may define index via data- attribute
          var clickedGallery = clickedListItem.parentNode,
              childNodes = clickedListItem.parentNode.childNodes,
              numChildNodes = childNodes.length,
              nodeIndex = 0,
              index;
      
          for (var i = 0; i < numChildNodes; i++) {
            if (childNodes[i].nodeType !== 1) {
              continue;
            }
      
            if (childNodes[i] === clickedListItem) {
              index = nodeIndex;
              break;
            }
            nodeIndex++;
          }
      
          if (index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe(index, clickedGallery);
          }
          return false;
        };
      
        // parse picture index and gallery index from URL (#&pid=1&gid=2)
        var photoswipeParseHash = function() {
          var hash = window.location.hash.substring(1),
              params = {};
      
          if (hash.length < 5) {
            return params;
          }
      
          var vars = hash.split("&");
          for (var i = 0; i < vars.length; i++) {
            if (!vars[i]) {
              continue;
            }
            var pair = vars[i].split("=");
            if (pair.length < 2) {
              continue;
            }
            params[pair[0]] = pair[1];
          }
      
          if (params.gid) {
            params.gid = parseInt(params.gid, 10);
          }
      
          return params;
        };
      
        var openPhotoSwipe = function(
        index,
         galleryElement,
         disableAnimation,
         fromURL
        ) {
          var pswpElement = document.querySelectorAll(".pswp")[0],
              gallery,
              options,
              items;
      
          items = parseThumbnailElements(galleryElement);
          options = {
            // Buttons/elements
            closeEl: true,
            captionEl: true,
            fullscreenEl: true,
            zoomEl: true,
            shareEl: false,
            counterEl: false,
            arrowEl: true,
            preloaderEl: true,
            // define gallery index (for URL)
            galleryUID: galleryElement.getAttribute("data-pswp-uid"),
            getThumbBoundsFn: function(index) {
              // See Options -> getThumbBoundsFn section of documentation for more info
              var thumbnail = items[index].el.getElementsByTagName("img")[0], // find thumbnail
                  pageYScroll =
                  window.pageYOffset || document.documentElement.scrollTop,
                  rect = thumbnail.getBoundingClientRect();
      
              return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
            }
          };
      
          // PhotoSwipe opened from URL
          if (fromURL) {
            if (options.galleryPIDs) {
              for (var j = 0; j < items.length; j++) {
                if (items[j].pid == index) {
                  options.index = j;
                  break;
                }
              }
            } else {
              // in URL indexes start from 1
              options.index = parseInt(index, 10) - 1;
            }
          } else {
            options.index = parseInt(index, 10);
          }
      
          // exit if index not found
          if (isNaN(options.index)) {
            return;
          }
      
          if (disableAnimation) {
            options.showAnimationDuration = 0;
          }
      
          // Pass data to PhotoSwipe and initialize it
          gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
          gallery.init();
      
          gallery.listen("unbindEvents", function() {
            // The index of the current photoswipe slide
            var getCurrentIndex = gallery.getCurrentIndex();
            // Update position of the slider
            //projectCarousel.slideTo(getCurrentIndex, 0, false);
            // 2/2. Start swiper autoplay (on close - if swiper autoplay is true)
            //projectCarousel.autoplay.start();
          });
          // 2/2. Extra Code (Not from photoswipe) - swiper autoplay stop when image in zoom mode (When lightbox is open) */
          /*gallery.listen('initialZoomIn', function() {
            if(projectCarousel.autoplay.running){
                projectCarousel.autoplay.stop();
            }
          });*/
        };
      
        // loop through all gallery elements and bind events
        var galleryElements = document.querySelectorAll(gallerySelector);
      
        for (var i = 0, l = galleryElements.length; i < l; i++) {
          galleryElements[i].setAttribute("data-pswp-uid", i + 1);
          galleryElements[i].onclick = onThumbnailsClick;
        }
      
        // Parse URL and open gallery if it contains #&pid=3&gid=1
        var hashData = photoswipeParseHash();
        if (hashData.pid && hashData.gid) {
          openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
        }
      };
      
      // execute above function
      initPhotoSwipeFromDOM(".project-gallery");
});