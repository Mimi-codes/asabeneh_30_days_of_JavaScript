//num 1

// function userIdGeneratedByUser() {

// }

//num 2
const rgbColorGenerator = () => {
    let one = Math.floor(Math.random() * 255);
    let two = Math.floor(Math.random() * 255);
    let three = Math.floor(Math.random() * 255);
    return `rgb(${one},${two},${three})`;
}
console.log(rgbColorGenerator());

//num 3
const arrayOfHexaColors = () => {
    let chars = "0123456789ABCDEF";
    let hex = [];
    for (let k = 0; k < 3; k++) {
        hex[k] = "#";
        for (let i = 0; i < 6; i++) {
            hex[k] += chars[Math.floor(Math.random() * chars.length)];
        }
    }

    return hex;
}
console.log(arrayOfHexaColors());

//num 4
//num 5
//num 6
//num 7

//num 8
const shuffleArray = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let rand = Math.floor(Math.random() * arr.length - 1);
        if (arr.indexOf(rand) !== -1 && !newArr.includes(arr[rand])) {
            newArr.push(arr[rand]);
        }
    }
    return newArr
}
console.log(shuffleArray([1, 2, 3]));

//num 9
const factorial = (num) => {
    let factorial = 1;
    for (let i = num; i > 0; i--) {
        // if (i === 0) {
        //     break;
        // }

        factorial *= i;
    }
    return factorial;
}
console.log(factorial(5));

//num 10
const isEmpty = (val) => {
    if (val === undefined) {
        return `it's empty`
    } else {
        return `not empty`
    }
}
console.log(isEmpty());

//num 11
function sum(...args) {
    let sum = 0;
     for (const element of args) {
         sum += element
       }
 return sum
 }
 console.log(sum(1, 2, 3));
 console.log(sum(1, 2, 3, 4));

 //num 12
 function sumOfArrayItems(arr) {

 }

//num 13

//num 14 
function modifyArray(item) {
    if (item.length > 5) {
        item[4] = item[4].toUpperCase();
    } else {
        return 'item not found';
    }
    return item;
}
console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));


 //num 18
 function isValidVariable(item) {
    
 }

//  num 19
function sevenRandomNumbers() {
let randomUniqueArr = [];
for (i = 0; i <= 7; i++) {
randomUniqueArr.push(Math.floor(Math.random() * 1) + i);
}
return randomUniqueArr;
}
console.log(sevenRandomNumbers());


 //num 20 
 function reverseCountries(countries) {
    let reverse = [];
    let copy = [];
for(let i = countries.length - 1; i >= 0; i-- ) {
copy = countries.slice(0);
    reverse.push(countries[i]);
}
return reverse;
}
console.log(reverseCountries(['Turkey', 'Nigeria', 'Morocco', 'Tunisia']));
