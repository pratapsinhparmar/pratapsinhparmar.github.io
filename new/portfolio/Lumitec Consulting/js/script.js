
$(document).ready(function() {
    // scroll to manu sticky
    if ($(window).scrollTop() >= 5) {
        $(".navbar").addClass("navbar-sticy");
    }
    else {
        $(".navbar").removeClass("navbar-sticy");
    }
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 5) {
           $(".navbar").addClass("navbar-sticy", 1000);
        }
        else {
            $(".navbar").removeClass("navbar-sticy");
        }
    });

    // click to manu show query 
    $(document).on("click",".toggle-btn",function() {
        $(".manubar").css("width", "250px");
    });
    $(document).on("click",".closebtn",function() {
        $(".manubar").css("width", "0px");
    });


});



// function closeNav() {
//        document.getElementById("mySidenav").style.width = "0";
// }