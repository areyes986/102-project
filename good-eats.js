var answer = prompt('Are you ready for some good food?!?');
var message;

if (answer === 'yes') {
    message = 'dis food broke da mout!';
} else if (answer === 'no') {
    message = 'you so dakine liddat';
} else {
    message = 'you are only supposed to write yes or no!';
}

document.write (`<h3>` + message + '<h3>')