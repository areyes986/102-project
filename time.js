var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Go to bed!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Rise and shine!';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');