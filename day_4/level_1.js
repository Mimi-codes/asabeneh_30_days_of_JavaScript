//num 1
const userInput = parseInt(prompt('Enter your age:'));
userInput >=18 ? alert('You are old enough to drive.') : alert(`You are ${userInput}. You will be allowed to drive after ${18 - userInput} years.`);

//num 2
const ageInput = prompt('Enter your age:');
const age = 30;
if (age > ageInput) {
    console.log('I am older than you');
} else {
    console.log(`You are ${ageInput - age} years older than me`);
};

//num 3
let a = 4;
let b = 3;

a > b ? `${a} is greater than ${b}` : `${a} is less than ${b}`;

//num 4
const number = prompt('Enter a number:');
number % 2 == 0 ? console.log(`${number} is an even number.`) : console.log(`${number} is an odd number.`); 
