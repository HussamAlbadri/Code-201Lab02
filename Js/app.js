'use strict'
let counter = 0;
let name = prompt("What is your name ?")

alert("Welcome to my protofilo...  " + name);
alert("Hint for you: My birthday is near the end of the year (:")
let firstQuestion = prompt("Do you think that my birth date in December ?")

if (firstQuestion != null) {
    firstQuestion = firstQuestion.toLowerCase();
}

switch (firstQuestion) {
    case 'yes':
    case 'y':
        alert('You\'r right')
        console.log('You\'r right');
        counter++;
        break;
    case 'no':
    case 'n':
        alert('Wrong answer')
        console.log('Wrong answer');
        break;
}

let secondQuestion = prompt("Do you that my favourite hobby is Football ?")

if (secondQuestion != null) {
    secondQuestion = secondQuestion.toLowerCase();
}
switch (secondQuestion) {
    case 'yes':
    case 'y':
        alert("No, Not it is , try again")
        console.log('No, Not it is , try again');
        break;

    case 'no':
    case 'n':
        alert("Yes, That's right (: ")
        console.log('yes, That\'s write (: ');
        counter++;
        break;
}

let thirdQuestion = prompt("Is Black consedierd as my favourite color ?")

if (thirdQuestion != null) {
    thirdQuestion = thirdQuestion.toLowerCase();
}
switch (thirdQuestion) {
    case 'yes':
    case 'y':
        alert("Nice Choice, Perfect")
        console.log('Nice Choice, Perfect');
        counter++;
        break;

    case 'no':
    case 'n':
        alert("Try later...GG")
        console.log('Try later...GG');
        break;
}


//Question 6
for (let i = 0; i < 4; i++) {

    let number = prompt('Guess my favorite number  ' + name);
    if (number > 33) {
        alert('You guessed too high! Guess again  ' + name);

    } else if (number < 33) {
        alert('You guessed too low! Guess again  ' + name);
    } else if (number == 33) {
        alert('That is correct ' + name + ' My favorite number is 33!');
        counter++;
        break;
    }


}



// Question 7
let userPc = ['dell', 'mac', 'acer', 'lenovo']
let userInput = prompt('Put your favourite pc brand...')

userInput = userInput.toLowerCase();

let flagBreak = true;
for (let i = 0; i < 6; i++) {

    for (let j = 0; j < userPc.length; j++) {
        if (userInput === userPc[j]) {
            alert('Right choice')
            console.log('Right choice');
            flagBreak = !true;
            counter++;
        }
    }
    if (flagBreak == false) {
        break;
    } else {
        userInput = prompt('Put your favourite pc brand...')
    }
}
alert("The pc's brands is... " + userPc)


alert("You have " + counter + "  right answers")