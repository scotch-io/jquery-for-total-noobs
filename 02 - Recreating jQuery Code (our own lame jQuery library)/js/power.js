
/*===========================================
=            LAME PERSONS JQUERY            =
===========================================*/
/*
- Demo it in jQuery. Then...
- Recreate jQuery concept
- Simpler "fake" version
 */





/*===================================
=            JQUERY CODE            =
===================================*/

// $('#please-make-me-red-sir').css({
//     color: 'red'
// });







/*=========================================
=            RECREATING JQUERY            =
=========================================*/
var myGhettoJQuery = function(selector) {
    return {
        css: function(style) {
            // Bunch of crazy code to determine selector and styles
            // Bunch of crazy code to update the styles
            document.querySelector(selector).style.color = 'red';
        }
    };
};
var $2 = myGhettoJQuery;



// MY Custom jQuery
var newCSS = {
    color: 'red'
};
$2('#please-make-me-red-sir').css(newCSS);