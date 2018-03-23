/*========================================
=            VARIABLES!!!!!!!            =
========================================*/

// Variable Declaration
var myFirstVariable;

// Variable Assignment
myFirstVariable = 'whatever I Want!!!!!';

// Variable Same Time
var mySecondVariable = 'Totally cool dude!';


// Strings and Numbers
var iAmAString = 'I am a string!';
var iAmANumber = 123;
var iAmAAlsoAString = '123';

iAmAAlsoAString = '321';

// console.log(iAmAString, iAmANumber, iAmAAlsoAString);


// Use Object Instead!!!
// var noob1Name = 'Nick';
// var noob1Hair = 'Brown';

// var noob2Name = 'Chris';
// var noob2Hair = 'Black';





/*=======================================
=            NUMERICAL LISTS            =
=======================================*/

// Array
var myFirstArray = [
    'one',
    'two',
    'three'
];

// console.table(myFirstArray);
// console.log(myFirstArray);
// console.log(myFirstArray[1]);

// var mySecondArray = [];
// mySecondArray[0] = 'The first index';
// mySecondArray[1] = 'The second index';
// mySecondArray[2] = 'The third index';


myFirstArray[1] = 'I just changed you!!!!!!!!';
// console.table(myFirstArray);



/*===============================
=            OBJECTS            =
===============================*/

// Objects (key / value stores)
var myFirstObject = {
    key1: 'Key 1 Value',
    key2: 'Key 2 Value',
    key3: 'Key 3 Value'
};

// console.log(myFirstObject);

myFirstObject.key3 = 'Whatever I want!!!!!!';

// console.log(myFirstObject.key3);


var noob1 = {
    name: 'Nick',
    hair: 'Brown'
}

var noob2 = {};
noob2.name = 'Chris';
noob2.hair = 'Black';





/*======================================
=            LIST CRAZINESS            =
======================================*/
// var noobs = [
//     noob1,
//     noob2
// ];

// // console.log(noobs);
// // console.log(noobs[0].name);

var noobs = {
    admin: noob1,
    dev: noob2,
    objectDemo: {
        key1: 'Key 1 Value',
        key2: 'Key 2 Value',
        key3: 'Key 3 Value'
    },
    arrayDemo: [
        'one',
        'two',
        'three'
    ]
};
// console.log(noobs);



/*=============================================
=            OUTPUTTING JAVASCRIPT            =
=============================================*/
// var outputDemo = 'The Lion King';
// Debug Way
// console.log(outputDemo);

// Alert
// alert(outputDemo);

// Writing to the Document (HTML)
// document.write(outputDemo);





/*=================================================
=            RANDOM MISC SHORT LESSONS            =
=================================================*/

// Multiple Variable Declaration
var item1, item2;

var item3 = 'whatever for 3',
    item4 = 'whatever for 4';

// console.log(item1, item2, item3, item4);




// Quotes and EScape
var item5 = 'I am a single quote';
var item6 = "I am a single quote";

var item7 = 'I\'m a toal NOOB named Nick';
item7 = "I'm a toal NOOB named Nick";
// console.log(item7);



// Concatenation
var item8 = 'one'+'two'+item7;
// console.log(item8);

// var item8 = 1 + 1;
// var item8 = '1' + '1';
// var item8 = '1' + 1;
// console.log(item8)


// Built in Methods and Functions
var sky = 'blue';

sky = sky.toUpperCase();
sky = sky.toLowerCase();
sky = sky.charAt(0);
// document.write(sky);






/*====================================
=            CONDITIONALS            =
====================================*/

// Logic with JavaScript

var amount = -500;
var count = 30;
// if (amount <= count) {
//     console.log('it matches');
// } else {
//     console.log('it does not match');
// }

var myString = 'hello';
myString = 'bye';
// if ('hello' == myString) {
//     console.log('it matches');
// } else {
//     console.log('it does not match');
// }

var amount = 25;
var count = 25;
// if (amount != count) {
//     console.log('it is not a match');
// } else {
//     console.log('it is match');
// }






/*=================================
=            FUNCTIONS            =
=================================*/

// Example 1 (easy)
function mathMeDude(leftDude, rightDude) {
    var result = leftDude + rightDude;
    return result;
}
// var finalResult = mathMeDude(2, 2);
// console.log(finalResult);

// Example 2 (medium)
// var finalResult = function(leftDude, rightDude) {
//     var result = leftDude + rightDude;
//     return result;
// }
// console.log(finalResult(10, 10));


var ohNoObjectsAgain = {
    mathMePlease: mathMeDude(2, 2)
};

console.log(ohNoObjectsAgain.mathMePlease)








