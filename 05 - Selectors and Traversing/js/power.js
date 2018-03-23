// Just CSS3 and then some
$(".cool-list li:contains('Chris')").addClass('super-bold');


// Traversing the DOM: Navigate the HTML

// $('#middle-guy').next().next().addClass('heartify');

// var $middleGuy = $('#middle-guy');
// $middleGuy.next().next().addClass('heartify');

// $('.big-list').find('#middle-guy').next().addClass('heartify');

// $('.big-list').find('li').not('.random-class, #middle-guy').addClass('heartify');


var $bigList = $('.big-list');
$bigList.closest('article').addClass('heartify');




// .find()

// .first()
// .last()

// .not()

// .next()
// .prev()
// .closest()

// .previous()

// .nextAll()
// .nextUntil()
// .prevAll()
// .prevUntil()
