//num 1
let emptyArr = [];

//num 2
const arr = ['Mariam', 'Nigeria', 'Ilorin', 'JavaScript', 'React', 'Redux'];

//num 3
console.log(arr.length);

//num 4
console.log(arr[0], arr[2], arr[arr.length - 1]);

//num 5
const mixedDataTypes = [true, 'Mariam', 0, undefined, null, ''];
console.log(mixedDataTypes.length);

//num 6
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

//num 7
console.log(itCompanies);

//num 8
console.log(itCompanies.length);

//num 9
console.log(itCompanies[0], itCompanies[3], itCompanies[itCompanies.length - 1]);

//num 10
console.log(itCompanies[0], itCompanies[1], itCompanies[2], itCompanies[3], itCompanies[4], itCompanies[5], itCompanies[itCompanies.length - 1]);

// console.log(itCompanies.toString(', '));

//num 11
const changeCompanyName = itCompanies.split(' ');
console.log(changeCompanyName);
//num 12
//num 13
const companyName = prompt('Enter a company name:');
itCompanies.includes(companyName) ? alert(companyName) : alert('Company is not found');

// num 14
// console.log(itCompanies)
// itCompanies.includes('oo')

//num 15
console.log(itCompanies.sort());

//num 16
console.log(itCompanies.reverse());

//num 17
console.log(itCompanies.slice(0,3));

//num 18 
console.log(itCompanies.slice(4));

//num 19
console.log(itCompanies.slice(3,4));

//num 20
console.log(itCompanies.shift());

//num 21
console.log(itCompanies.splice(3,4));

//num 22
console.log(itCompanies.pop());

//num 23
console.log(itCompanies.splice());