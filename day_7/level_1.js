//num 1
/*
function fullName() {
let firstName = 'Mariam';
let lastName = 'Ismael';
let myFullName = `${firstName} ${lastName}`;
return myFullName;
}
console.log(fullName());

//num 2
function fullName(firstName, lastName) {
   return `${firstName} ${lastName}`
}
console.log(fullName('Mariam', 'Ismael'));

//num 3
function addNumbers(a, b) {
    let sum = a + b;
    return sum;
}
console.log(addNumbers(2, 4));

//num 4
function areaOfRectangle(length, width) {
let area = length * width;
return area;
}
console.log(areaOfRectangle(10, 5));

//num 5
function perimeterOfRectangle(length, width) {
let perimeter = 2 * (length + width);
return perimeter;
}
console.log(perimeterOfRectangle(8, 4));

//num 6
function volumeOfRectPrism(length, width, height) {
    let volume = length * width * height;
    return volume;
}
console.log(volumeOfRectPrism(2, 4, 6));

//num 7
function areaOfCircle(r) {
    let area = Math.PI * r * r;
return area;
}

console.log(areaOfCircle(5));

//num 8 
function circumOfCircle(r) {
let circumference = 2 * Math.PI * r;
return circumference;
}
console.log(circumOfCircle(4));

//num 9
function calcDensity(mass, vol) {
    let density = mass/vol;
    return density;
}
console.log(calcDensity(30, 5));

//num 10
function objectSpeed(totalDistance,  totalTime) {
    let speed = totalDistance / totalTime;
    return speed;
}
console.log(objectSpeed(50, 15));

//num 11
function calcWeight(mass, gravity) {
    let weight = mass * gravity;
    return weight;
}
console.log(calcWeight(2, 5));

//num 12
function convertCelsiusToFahrenheit(C) {
    F = (C * 9/5) + 32;
    return F;
}
console.log(convertCelsiusToFahrenheit(14));

//num 13
function calcBMI() {
    let weight = parseInt(prompt('Enter weight:'));
    let height = parseInt(prompt('Enter height:'));
    
    let BMI = weight / (height * height);

    if (BMI < 18.5) {
        alert `Underweight: BMI is less than 18.5`;
    } else if (BMI === 18.5 && BMI < 24.9) {
        alert `Normal weight: BMI is 18.5 to 24.9`;
    } else if (BMI === 25 && BMI < 29.9) {
        alert `Overweight: BMI is 25 to 29.9`;        
    } else if(BMI >=30) {
        alert `Obese: BMI is 30 or more`;
    } else {
        alert `Enter valid data`;
    }
}
calcBMI();

//num 14 
function checkSeason(month) {
    
const userInput = prompt('Enter month:');

if (userInput === 'September' || userInput ===  'October' || userInput ===  'November') {
    alert('The season is Autumn.');
}

else if (userInput === 'December' || userInput ===  'January' || userInput ===  'February') {
    alert('The season is Winter.');
}

else if (userInput === 'March' || userInput ===  'April' || userInput ===  'May') {
    alert('The season is Spring.');
}

else if (userInput === 'June' || userInput ===  'July' || userInput ===  'August') {
    alert('The season is Summer');
}

else {
    alert('Invalid month');
}
}
checkSeason(month);
*/
//num 15
function findMax(array) {
    var val = array[0];

    for (var i = 1; i < array.length; i++) {
        if (array[i] > val) val = array[i];
    }

    return val;
}

console.log(findMax([0, 10, 5]));