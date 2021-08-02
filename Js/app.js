'use strict'
let counter = 0;

let name = prompt("What is your name ?")

alert("Welcome to my protofilo...  " + name);
alert("Hint for you: My birthday is near the end of the year (:")
let firstQuestion = prompt("Do you know my Birth Date ?")

if (firstQuestion != null) {
    firstQuestion = firstQuestion.toLowerCase();
}

switch (firstQuestion) {
    case 'december':
        alert('You\'r right')
        console.log('You\'r right');
        counter++;
        break;
    case 'november':
    case 'october':
        alert('Almost Arrive *_*')
        console.log('Almost Arrive *_*');
        break;

    default:
        alert('Do i have a birthdate ! 0_0')
        console.log('Do i have a birthdate ! 0_0');
}

let secondQuestion = prompt("What is my favourite hobby ?      choose one of these{ Football , Coding , Reading books , watch movies}")

if (secondQuestion != null) {
    secondQuestion = secondQuestion.toLowerCase();
}
switch (secondQuestion) {
    case 'football':
    case 'watch movies':
        alert("No, Not it is , try again")
        console.log('No, Not it is , try again');
        break;

    case 'coding':
        alert("Yes, That's right (:")
        console.log('yes, That\'s write (:');
        counter++;
        break;
    case 'reading books':
        alert("Yep, i like to read books too")
        console.log('Yep, i like to read books too');
        counter++;
        break;
}

let thirdQuestion = prompt("What is my favourite color ?            choose one of these{ Black , White , Pink , Blue}")

if (thirdQuestion != null) {
    thirdQuestion = thirdQuestion.toLowerCase();
}
switch (thirdQuestion) {
    case 'black':
        alert("Nice Choice")
        console.log('Nice Choice');
        counter++;
        break;

    case 'white':
    case 'pink':
    case 'blue':
        alert("Try later...GG")
        console.log('Try later...GG');
        break;
}
alert("You have " + counter + "  right answers")