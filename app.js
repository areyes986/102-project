function askName() {
    var username = prompt('What is your name?');

    return '<h3>' + 'Aloha ' + username + '!' + '</h3>';
}


function askPreference() {
    var answer = prompt('Are you ready for some good food?!?');
    var message;

    if (answer === 'yes') {
        message = 'Dis food so ono! It broke da mout!';
    } else if (answer === 'no') {
        alert('you so dakine');
        message = " "
    } else  {
        message = " "
    }

    return '<h3>' + message + '</h3>';
}



function askGreeting() {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18) {
        greeting = 'Go to bed!';
    } else if (hourNow > 11) {
        greeting = 'Lunch time!';
    } else if (hourNow > 0) {
        greeting = 'Rise and shine!';
    } else {
        greeting = 'Welcome!';
    }

    return '<h3>' + greeting + '</h3>';
}

function getCount() {
    var count = prompt('How many spam musubis can you eat?');

    if (count < 2) {
        alert('Eat More!');
    } else if (count >= 2) {
        alert('Me too!');
    } 

    while (count === '' || isNaN(count)){
        var count = prompt('Please type in the number');
      }

    return count;
}

function musubiPic() {
   var item; 
   
   item = '<img src="Images/musubii.jpg" width="50px">';

    return item;
}

function musubiAmount() {
    var item = musubiPic();
    var count = getCount();
    var result = '';

    for(var i = 0; i < count; i++){
        result = result + (i + 1) + '' + item
      }
      return result;

}