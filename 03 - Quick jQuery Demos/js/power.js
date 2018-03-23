

    /*===========================================
    =            EXAMPLE OF SELECTOR            =
    ===========================================*/
    $('p').last().css({
        color: 'red'
    });


    /*======================================================
    =            ON HOVER MAKE BACKGROUND BLACK            =
    ======================================================*/
    $('h2').hover(function() {
        $('body').css({
            background: '#000'
        });
    });


    /*=============================================================
    =            WHEN CLICKING HEADINGS, SHOW THE TEXT            =
    =============================================================*/
    $('h1, h2, h3, h4').click(function() {
        // READ DATA WITH JQUERY
        var currentText = $(this).text();
        alert(currentText);
    });


    /*=============================================
    =            EVENT DEMO WITH LOGIC            =
    =============================================*/
    $('input, textarea').on('input', function() {
         var currentText = $(this).val();

         // Type Yo Dude in the form to see
         if (currentText == 'yo dude') {
            $('h1').append(currentText);
         }
    });
