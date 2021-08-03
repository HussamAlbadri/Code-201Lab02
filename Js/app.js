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
    default:
        alert("Hi there");

}
alert("You have " + counter + "  right answers")