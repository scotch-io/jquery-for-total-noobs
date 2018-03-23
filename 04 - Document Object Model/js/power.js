

// Log the main browser objects
console.log(navigator, window, document);



// $(document).ready(function() {
$(function() {

    // Change Background to Light Blue
    // $('body').css('background', 'blue');
    $('body').css({
        background: 'blue'
    })

});




// This will only work if the page takes a long time to load
// Chances are you are working locally on your computer and load times are so fast you can't tell or it will stay blue
// Add a ton of images to mimic the effect or use chrome to mimic a slow connection
$(window).on('load', function() {

    $('body').css('background', 'yellow');

});