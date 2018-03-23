$(function() {

    /*===================================================================
    =            RECREATING DEFAULT BROWSER EVENT FOR A TAGS            =
    ===================================================================*/
    // $('h2').click(function() {});
    $('a').on('click', function() {


        var $this = $(this);
        // console.log($this.text());

        var url = $this.attr('href');
        console.log(url);

        window.location.href = url;

        // Stops the default event
        // "return false" is a jQuery shortcut)
        return false;
    });

    /*==================================
    =            EVENT DEMO            =
    ==================================*/
    $('p').click(function() {
        var $this = $(this);
        $this.toggleClass('heartify');
    });

    // Form Submit Event Demo
    $('form').submit(function() {
        // ....
    });

    $('h2').hover(function() {
        // ....
    });

});