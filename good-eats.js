var answer = prompt('Are you ready for some good food?!?');
var message;

if (answer === 'yes') {
    message = ('Dis food so ono, it broke da mout!');
} else if (answer === 'no') {
    message = ('you so dakine liddat');
}

document.write (`<h3>` + message + '<h3>')