const challenge = '30 Days Of JavaScript'; // question 1
console.log(challenge); //question 2
console.log(challenge.length); //question 3
console.log(challenge.toUpperCase()); //question 4
console.log(challenge.toLowerCase()); //question 5
console.log(challenge.substring(0, 1)); //question 6
console.log(challenge.substring(3)) //question 7
console.log(challenge.includes('Script')); //question 8
console.log(challenge.split(',')); //question 9
console.log(challenge.split('')); //question 10

const companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(', ')); //question 11
const python = '30 Days Of JavaScript';
console.log(python.replace('JavaScript', 'Python')) //question 12
console.log(challenge.charAt(15)); //question 13
console.log(challenge.charCodeAt(11)); //question 14
console.log(challenge.indexOf('a')); //question 15
console.log(challenge.lastIndexOf('a')); //question 16
const conjuction = 'You cannot end a sentence with because because because is a conjunction';
console.log(conjuction.indexOf('because')); //question 17
console.log(conjuction.lastIndexOf('because')); //question 18
console.log(conjuction.search('because')); //question 19
console.log(challenge.trim(' ')); //question 20
console.log(challenge.startsWith(3)); //question 21
console.log(challenge.endsWith('t')); //question 22
console.log(challenge.match('a')); //question 23
const start = '30 Days of';
const end = 'JavaScript';
console.log(start.concat(end)); //question 24
console.log(challenge.repeat(2)); //question 25