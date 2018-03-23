/*====================================
=            GLOBAL ITEMS            =
====================================*/
var $theLastClickedPopupTarget = false;


/*======================================
=            WHEN DOM READY            =
======================================*/
$(function() {

    // Trigger Mobile Nav
    $('.menu-trigger').click(function() {
        $('article .container').toggleClass('show-nav');
        return false;
    });

    // Window Size Demos
    placeResizeNumbers();
    placeScrollPosition();
    lightsOffLogic();

    // Secret Popup Code
    $('.secret-popup-link').click(function() {

        // Set some variables
        var $this = $(this);
        var target = $(this).attr('href');
        var $target = $(target);
        $theLastClickedPopupTarget = $target;

        // Activate Logic for the Popup
        $target.addClass('show-me');
        $('body').addClass('a-secret-popup-is-showing');

        // Check for the issues problem!!!!!!
        var targetContentHeight = $target.find('.guts').outerHeight();
        var windowHeight = $(window).height();

        if (targetContentHeight >= windowHeight) {
            $target.addClass('not-enough-space-panic-mode');
        } else {
            $target.removeClass('not-enough-space-panic-mode');
        }

        return false;
    });
    $('.remove-secret-popup').click(function() {
        $theLastClickedPopupTarget.removeClass('show-me');
        $('body').removeClass('a-secret-popup-is-showing');

        return false;
    });



    // Form Submission
    $('form').submit(function() {

        $this = $(this);

        // Get ALL the Data
        // var email = $this.find('input[type="email"]').val();
        // var phone = $this.find('input[type="phone"]').val();
        var formData = {};
        $this.find('input, textarea, select').each(function() {
            formData[$(this).attr('name')] = $(this).val();
        });

        // Send all the data somewhere (ajax)
        // REMEMBER: AJAX requires HTTP in the URL for security
        $.ajax({
            url: 'contact.json',
            type: 'GET', // POST
            data: formData,
            success: function(result) {

                // Result is the data we retrieved in return
                if (result.is_success) {
                    alert(result.message);
                } else {
                    alert('You failed me!!!!!!!!');
                }

            }
        });


        return false;
    });



});



/*=========================================
=            WHEN WINDOW LOADS            =
=========================================*/
$(window).on('load', function() {

});


/*=========================================
=            WHEN USER RESIZES            =
=========================================*/
$(window).resize(function() {
    placeResizeNumbers();

    // Popup is open, handle for resize
    if ($theLastClickedPopupTarget) {
        var theLastClickedPopupTargetHeight = $theLastClickedPopupTarget.find('.guts').outerHeight();
        var windowHeight = $(window).height();

        if (theLastClickedPopupTargetHeight >= windowHeight) {
            $theLastClickedPopupTarget.addClass('not-enough-space-panic-mode');
        } else {
            $theLastClickedPopupTarget.removeClass('not-enough-space-panic-mode');
        }
    }
});


/*=========================================
=            WHEN USER SCROLLS            =
=========================================*/
$(window).scroll(function() {
    placeScrollPosition();
    lightsOffLogic();
});


/*========================================
=            GLOBAL FUNCTIONS            =
========================================*/
function placeScrollPosition() {
    var distanceFromTop = $(window).scrollTop();
    $('.put-scroll-position-here').text(distanceFromTop);
}

function placeResizeNumbers() {
    var windowWidth = $(window).width();
    $('.put-width-here').text(windowWidth);

    var windowHeight = $(window).height();
    $('.put-height-here').text(windowHeight);
}

function lightsOffLogic() {
    var offset = $('article').offset().top;
    var distanceScrolled = $(window).scrollTop();
    var articleDistanceFromTop = offset - distanceScrolled;

    if (articleDistanceFromTop <= 0) {
        $('body').addClass('turn-the-lights-off');
    } else {
        $('body').removeClass('turn-the-lights-off');
    }
}