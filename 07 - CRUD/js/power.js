$(function() {



    /*=====================================
    =            INTERACTIVITY            =
    =====================================*/
    // CRUD for your HTML


        // READING DATA

            // Text Stuff
            // var textExample = $('h1').first().text();
            // console.log(textExample);

            // Attribute Stuff
            // var whoAmI = $('.hero h1').attr('class');
            // console.log(whoAmI);


            // HTML5 Data Attribute
            // var $heroH1 = $('.hero').find('h1');
            // var html5Data = $heroH1.data('whatever');
            // html5Data = $heroH1.data('hover-style');
            // console.log(html5Data);

            // if (html5Data == 'crazy') {
            //     $('.content').addClass('heartify');
            // }


        // UPDATING DATA
        $('#is-author-checkbox input').on('change', function() {
            var $this = $(this);
            var $form = $this.closest('form');
            var $emailInput = $form.find('input[type="email"]');
            var $nameInput = $form.find('input[type="text"]');
            var $heroH1 = $('.hero h1');

            if ($this.is(':checked')) {
                var name = $heroH1.data('author-name');
                var email = $heroH1.data('author-email');

                $nameInput.val(name);
                $emailInput.val(email);
            } else {
                $nameInput.val('');
                $emailInput.val('');
            }
        });



        // CREATING DATA
        // $('form select').change(function() {
        //     $('.letter-preview').addClass('show-me');
        //     var reasonForContacting = $(this).val();
        //     $('.letter-preview .reason').text(reasonForContacting);
        // });
        // $('form textarea').on('input', function() {
        //     $('.letter-preview').addClass('show-me');
        //     var message = $(this).val();
        //     $('.letter-preview .message').text(message);
        // });

        // REFACTOR
        // $('form select, form textarea').on('change input', function(e) {

        //     // Double Events Issue Here
        //     console.log(e.type)

        //     $('.letter-preview').addClass('show-me');
        //     var whereToSend = $(this).data('where-to-send');
        //     $('.letter-preview').find('.'+whereToSend).text($(this).val());
        // });

        // REFACTOR ATTEMPT #2
        $('form select').change(function(e) {
            updateThePreviewBox($(this).data('where-to-send'), $(this).val());
        });
        $('form textarea').on('input', function(e) {
            updateThePreviewBox($(this).data('where-to-send'), $(this).val());
        });
        function updateThePreviewBox(where, value) {
            $('.letter-preview').addClass('show-me');
            $('.letter-preview').find('.'+where).text(value);
        }


        // MORE CREATE DEMOS
        // $('h3').first().text('<h1>fdhsafdsf</h1>');
        // $('h3').first().append(' append');
        // $('h3').first().prepend('prepend ');
        // $('h3').first().before('<h6>head 6</h6>');
        // $('h3').first().after('<h6>head 6</h6>');
        // $('h3').appendTo('form')
        // $('h3').prependTo('form')




        // DELETE
        // $('.content img').hide();

        // $('html').click(function() {
            // $('.content img').show();
            // $('.content img').toggleClass('hide-me');
        // });

        // $('.content img').css('display', 'none');
        // $('.content img').css('display', 'block');


        // Delete
        // $('.content img').remove();



});