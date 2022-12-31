//num 1

function solveLinEquation() {
    let val = 'ax + by + c = 0';
}
//num 2



//num 3 
// function printArray(array) {

// }

//num 4 
function showDateTime() {
    let date = new Date();
    let _date = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    return `${_date}/${month + 1}/${year} ${hour}:${minutes} `
}
console.log(showDateTime());

//num 5
function swapValues(a, b) {
    let x = b;
    let y = a;
    console.log(x, y)
}
swapValues(2, 4)

//num 6
function reverseArray(array) {
    let reverse = [];
for(let i = array.length - 1; i >= 0; i-- ) {
reverse.push(array[i]);
}
return reverse;
}
console.log(reverseArray([1, 2, 3, 4, 5]))
console.log(reverseArray(['A', 'B', 'C']))

//num 7
function capitalizeArray(arr) {
let capitalArr = [];
for (let i = 0; i < arr.length; i++) {
    return(arr[i].toUpperCase())
}
return capitalArr.push(arr[i])
// return capitalArr.push(arr[i])
}
console.log(capitalizeArray(['mariam']));

//num 8
function addItem(arr) {
let newArr = []
for (const element of arr) {
    newArr.push(element)
}
return newArr;
}
const name = ['Mariam', 'Ismael']
console.log(addItem(name))

//num 9
const removeItem = (index) => {
    let names = ["Tomi", "Tolu"]
    names.splice(index);
    return names
}
console.log(removeItem(1));

//num 10
const sumOfNumbers = (num) => {
    let sum = 0
    for(let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    return sum
    }
    
    let numbers = [1, 2, 3, 4, 5]
    console.log(sumOfNumbers(numbers))
//num 11
//num 12
//num 13
const evenAndOdds = (num) => {
    let odd = 0;
    let even = 0;
    for (let i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            even++
        } else if (i % 2 !== 0) {
            odd++
        }
    }
    return `The number of odds are ${odd} \nThe number of even are ${even}`
}
console.log(evenAndOdds(100))

//num 14
function sum(...args) {
   let sum = 0;
    for (const element of args) {
        sum += element
      }
return sum
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));

//num 15
//num 16
//num 17
function randomHexaNumberGenerator () {
    let chars = "0123456789ABCDEF";
    let hex = "";
    for (let i = 0; i <= 6; i++) {
        hex += chars[Math.floor(Math.random() * chars.length)];
    }

    return `#${hex}`
}
console.log(randomHexaNumberGenerator());

//num 18
function userIdGenerator() {
    let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    let userId = "";
    for (let i = 0; i < 7; i++) {
        userId += chars[Math.floor(Math.random() * chars.length)];
    }
    return userId;
}
console.log(userIdGenerator());

