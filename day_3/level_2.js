//num 1 
const base = parseInt(prompt('Enter base:'));
const height = parseInt(prompt('Enter height:'));
const areaOfTriangle = 0.5 * base * height;
alert(`The area of the triangle is ${areaOfTriangle}`); 

//num 2
const a = parseInt(prompt('Enter side a:'));
const b = parseInt(prompt('Enter side b:'));
const c = parseInt(prompt('Enter side c:'));
const perimeter = a + b + c;
alert(`The perimeter of the triangle is ${perimeter}`);

//num 3
const length = parseInt(prompt('Enter length:'));
const width = parseInt(prompt('Enter width:'));
const areaOfRectangle = length * width;
const perimeterOfRectangle = 2 * (length + width);
alert(`The area of a rectangle is ${areaOfRectangle} while the perimeter of a rectangle is ${perimeterOfRectangle}`);
alert(``);

//num 4
const radius = parseInt(prompt('Enter radius( a number):'));
const pi = 3.14;
const areaOfCircle = pi * radius * radius;
const circumferenceOfCircle = 2 * pi * radius;
alert (`The area of a circle is ${areaOfCircle} while the circumference of a circle is ${circumferenceOfCircle}`);

//num 5


//num 6 
var x1 = 2;
var y1 = 2;
var x2 = 6;
var y2 = 10;
const m = (y2 - y1) / (x2 - x1);
console.log(m);

// num 7
// num 8
// num 9
const hours = parseInt(prompt('Enter hours:'));
const ratePerHour = parseInt(prompt('Enter rate per hour:'));
const weeklyEarning = hours * ratePerHour
alert(`Your weekly earning is ${weeklyEarning}`);

//10
let yourName = 'Mariam';
yourName.length > 7 ? console.log('Your name is long') : console.log('Your name is short.');

//num 11
let $firstName = 'Mariam';
let $familyName = 'Ismael-Saka';
$firstName.length > $familyName.length ? console.log(`Your first name, ${$firstName} is longer than your family name, ${$familyName}`) : console.log(`Your family name, ${$familyName} is longer than your first name, ${$firstName}.`) ;

// num 12
let myAge = 250;
let yourAge = 25;
let sub = myAge - yourAge;
console.log(`I am ${sub} years older than you.`);

// num 13
const birthYear =  parseInt(prompt('Enter birth year:'));
birthYear >= 18 ? alert(`You are ${birthYear}. You are old enough to drive`) : alert(`You are ${birthYear}. You will be allowed to drive after 18 - ${birthYear} years.`);

// num 14
const numYears = parseInt(prompt('Enter number of years you live:'));
const yearsLived = numYears * 3153600000;
alert(`You have lived ${yearsLived} seconds`);

//num 15i
const timeFormat = new Date;
let year = timeFormat.getFullYear(); 
let month = timeFormat.getMonth() + 1; 
let day = timeFormat.getDay() + 1; 
let hour = timeFormat.getHours(); 
let min = timeFormat.getMinutes(); 
console.log(`${year}-${month}-${day} ${hour}:${min}`);

//num 15ii
console.log(`${day}-${month}-${year} ${hour}:${min}`);

//num 15iii
console.log(`${day}/${month}/${year} ${hour}:${min}`);