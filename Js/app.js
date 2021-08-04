'use strict'
let counter = 0;
let name = prompt("What is your name ?")

 alert("Welcome to my protofilo...  " + name);
 alert("Hint for you: My birthday is near the end of the year (:")

 // Question 1
 function Question1(){
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
return firstQuestion;
}
Question1();


//  Question 2
function Question2(){
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
return secondQuestion;
}
Question2();


//  Question 3
function Question3(){
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
    return thirdQuestion;
}
Question3();

// Ouestion 4
function Question4(){

    let fourthQuestion = prompt("Is Winter is my favourite season ?")
if (fourthQuestion != null) {
    fourthQuestion = fourthQuestion.toLowerCase();
}

switch (fourthQuestion) {
    case 'yes':
    case 'y':
        alert("Right Answer")
        console.log("Right Answer");
        break;
        counter++;

    case 'no':
    case 'n':
        alert("Bad Answer")
        console.log("Bad Answer");
        break;
}

return fourthQuestion;
}
Question4();



// //Question 5
function Question5(){

    let favCar = ['mercedes', 'lexus', '1967 mustang', 'kia', ]
let fifthQuestion = prompt("Guess my favourite car.. \nPick one of these brands : (Mercedes , BMW , Ferrari , Toyota , Lexus , Kia , Mitsubishi , Pegouet , 1967 Mustang")

fifthQuestion = fifthQuestion.toLowerCase();

let flag = true;
for (let i = 0; i < 4; i++) {
    for (let h = 0; h < favCar.length; h++) {
        if (fifthQuestion === favCar[h]) {
            alert("Good Answer")
            console.log('Good Answer')
            flag = !true;
            counter++;
        }
    }
    if (flag == false) {
        break;
    } else {
        fifthQuestion = prompt("Guess my favourite car.. ")
    }
}

return fifthQuestion;
}
Question5();


//Question 6
function Question6 (){

    let i = 0
    for (i = 0; i < 4; i++) {

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
    if(i>3){
        alert("Yor ran out of guesses, the right answer is (33)")
}
    
    



//return number;
} 
Question6();


//Question 7
let userPc = ['dell', 'mac', 'acer', 'lenovo']
let userInput = prompt('Put your favourite pc brand...')
userInput = userInput.toLowerCase();


function Question7(){
    



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
return userInput;

}
Question7();



alert(name + " have " + counter + "  right answers out of 7")