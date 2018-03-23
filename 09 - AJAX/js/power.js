$(function() {

    /*=============================================================
    =            REMEMBER, THIS ONLY WORKS FROM "HTTP"            =
    =============================================================*/
    // file://USer/blah/you/index.html => WONT WORK
    // http://example.com/index.html => wILL WORK
    // http://localhost:8080/index.html => wILL WORK


    // Fake Data
    $.ajax({
        url: 'test.json',
        // type: 'POST',
        // data: {
        //     test: 'yo dude this is a test',
        //     test1: 'yo this is another test'
        // },
        success: function(data) {

            var tweets = data;

            $(tweets).each(function(index, value) {

                var text = value.text;
                var who  = value.who;
                var when = value.when;

                var tweetHTML = $('#twitter-template').html();
                tweetHTML = tweetHTML.replace('{text}', value.text);
                tweetHTML = tweetHTML.replace('{who}', value.who);
                tweetHTML = tweetHTML.replace('{who}', value.who);
                tweetHTML = tweetHTML.replace('{when}', value.when);

                $('.tweets').append(tweetHTML);
            });



        }
    });


});