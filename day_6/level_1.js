//num 1a
// /*
for (i = 0; i <= 10; i++) {
    console.log(i);
} 

//1b
let j = 0;
while (j <= 10) {
    console.log(j);
    j++;
}

//1c
let k = 0
do {
    console.log(k)
    k++
} while (k <= 10);

//num 2 
for (i = 10; i >= 0; i--) {
console.log(i);
}

//2b
let l = 10;
while (l >= 0) {
    console.log(l);
    l--;
}

//2c
let m = 10
do {
    console.log(m)
    m--;
} while (m >= 0);

//num 3
let n = parseInt(prompt('Enter number:'));
for (let i = 0; i <= n; i++) {
    console.log(i);
}

//num 4
let pattern = '';
for (let i = 0; i < 7; i++) {
console.log(pattern += '#');
}

// num 5
// let numPattern = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (i = 0; i <= 10; i++) {
console.log(`${i} x ${i} = ${i ** 2}`);
}

//num 6
// let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (i = 0; i <= 10; i++) {
    console.log(`${i} ${i ** 2} ${i ** 3}`)
}

//num 7
for (i = 0; i <= 100; i+=2) {
    console.log(i)
}

//num 8
for (i = 1; i <= 100; i+=2) {
    console.log(i)
}

//num 9
// for(i = 1; i <= 100; i++) {
    // if(i % i === 0 && i % 1 === 0) {
        // console.log(i)
    // }
// }

//num 10
let sum = 0
let start = 0
let end = 100
for(let i = start; i <= end; i++) {
    sum = sum + i
}
 console.log(`The sum of all the numbers between ${start} to ${end} is ${sum}`)

//num 11
let sumOdd = 0;
let sumEven = 0;
let oddEven = 0;
for (i = 0; i <= 100; i+= 2) {
   sumEven = sumEven + i;
}
console.log(sumEven);

for (j = 1; j <= 100; j+= 2) {
    sumOdd = sumOdd + j;
}

console.log(sumOdd)

console.log(`The sum of all evens from ${i = 0} to ${i = 100} is ${sumEven}.  And the sum of all odds from ${j = 0} to ${j = 100} is ${sumOdd}.`)


//num 12
let _sumOdd = 0;
let _sumEven = 0;
let _sumArr = [];
for (i = 0; i <= 100; i+= 2) {
   _sumEven = _sumEven + i;
}
// console.log(sumEven);

for (j = 1; j <= 100; j+= 2) { 
    _sumOdd = _sumOdd + j;
}
// console.log(sumOdd);
_sumArr.push(_sumEven, _sumOdd);
console.log(_sumArr);

//num 13
let randomNumbersArr = [];
for (i = 0; i <= 5; i++) {
   let randomNumbers = Math.floor(Math.random() * i);
// console.log(randomNumbers);
randomNumbersArr.push(randomNumbers);
}
console.log(randomNumbersArr);

//num 14
let randomUniqueArr = [];
for (i = 0; i <= 4; i++) {
   let randomUniqueNumbers = Math.floor(Math.random() * 100) + 1;
// console.log(randomNumbers);
randomUniqueArr.push(randomUniqueNumbers);
}
console.log(randomUniqueArr);
// */

//num 15 
for (i = 0; i < 1; i++) {
   let randomId = Math.floor((1 + Math.random()) * 0x1000000).toString(16).substring(1);
console.log(randomId);
}