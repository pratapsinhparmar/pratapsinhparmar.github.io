// loading animation
$(document).ready(function(){
    // $(".all-contant").load(function(){
        $(".loader").css("display", "none");
        $(".all-contant").css("display", "block");
    // });
});

// click to modal open in portfolio
$(document).ready(function(){
    $(document).on('click', '.toggle', function(event) {
        event.preventDefault();
        var target = $(this).data('target');
        $('#' + target).toggleClass('hide');
    });

    // jQuery Validate Plugin
    $("#contactForm").validate({
        rules: {
            name: {
                required: true,
                maxlength: 255,
            },
            subject: {
                required: true,
                maxlength: 255,
            },
            number: {
                required: true,
                number: true,
                minlength: 6,
                maxlength: 13,
            },
            email: {
                required: true,
                email: true,
                maxlength: 255,
            },
            message: {
                required: true,
                maxlength: 500,
            },
        },
        messages: {
            name: {
                required: "Please enter a name",
                maxlength: "Max length is 255",
            },
            
            subject: {
                required: "Please enter a subject",
                maxlength: "Max length is 255",
            },
            number: {
                required: "Please enter a phone number",
                number: "Your Phone number not valid",
                minlength: "Min length is 6",
                maxlength: "Max length is 13",
            },
            email: {
                required: "Please enter a Email Address",
                email: "Your email not valid",
                maxlength: "Max length is 255",
            },
            message: {
                required: "Please enter your Message",
                maxlength: "Max length is 500",
            },
        }
    });
    
    // SMTPS.js Plugin intriget
    $(document).on('click', '#send-message', function() {
        if($("#contactForm").valid() == true) {
            alert("done");
        }
        else {
            alert("error");
        }

    });

});