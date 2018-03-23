    /*=============================
    =            LOOP 1            =
    =============================*/


    /*==============================
    =            LOOP 3            =
    ==============================*/
    $(function() {


        // LOOPS!!!!!!!!!!!!!
        $('.big-list li').each(function() {
            $this = $(this);

            if ($this.hasClass('make-me-red')) {
                $this.css('color', 'red');
            }

        });



        // Fake Data
        var tweets = [
            {
                text: 'I like to tweet about stuff!!!!!!!1',
                who: 'scotch_io',
                when: '01/29/1989'
            },
            {
                who: 'whatnicktweets',
                text: 'I do NOT like to tweet!!!!!!!1',
                when: '01/29/2018'
            },
            {
                who: 'chrisoncode',
                text: 'I am indifferent!!!!!!!1 See you haters on Twitter!!!',
                when: '08/08/2010'
            }
        ];


        $(tweets).each(function(index, value) {

            var text = value.text;
            var who  = value.who;
            var when = value.when;




            /*=================================================
            =            BIG LONG HTML / JS sTRING            =
            =================================================*/
            // var tweetHTML = '<div class="tweet">';
            // tweetHTML += '<i class="fa fa-twitter"></i>';
            // tweetHTML += '<p>'+value.text+'</p>';
            // tweetHTML += '<h4>';
            // tweetHTML += '<a href="https://twitter.com/'+value.who+'">@'+value.who+'</a>';
            // tweetHTML += 'on '+value.when;
            // tweetHTML += '</h4>';
            // tweetHTML += '</div>';


            /*=========================================================
            =            TEMPLATE ENGINE INTRO TO THE IDEA            =
            =========================================================*/
            var tweetHTML = $('#twitter-template').html();
            tweetHTML = tweetHTML.replace('{text}', value.text);
            tweetHTML = tweetHTML.replace('{who}', value.who);
            tweetHTML = tweetHTML.replace('{who}', value.who);
            tweetHTML = tweetHTML.replace('{when}', value.when);

            $('.tweets').append(tweetHTML);
        });

    });

