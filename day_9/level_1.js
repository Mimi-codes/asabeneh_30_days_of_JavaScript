const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//num 1
//a
//forEach() method can only be used only with arrays to iterate an array elements

//b
//map() method  can also be used to iterate an array elements but it modifies the array elements.

//c
//filter() method filters out items which fulfill filtering conditions and return a new array

//d
//reduce() method goes over every element, collects some info about eact elements and then finally returns the collective result.

//num 2
// A callback function is a function which can be passed as parameter to other function.

//num 3
countries.forEach(country => {
    // console.log(country);
});

//num 4
names.forEach(name => {
    // console.log(name);
});

//num 5
numbers.forEach(num => {
    // console.log(num);
});

//num 6
let countryUppercase = countries.map((country) => {
    return country.toUpperCase();
})
// console.log(countryUppercase);

//num 7
let countriesLength = countries.map((country) => {
    return country.length;
})
// console.log(countriesLength);

//num 8
let numberSquare = numbers.map((num) => {
    return num ** 2;
});
// console.log(numberSquare)

//num 9
let nameUppercase = names.map((name) => {
    return name.toUpperCase();
})
// console.log(nameUppercase);

//num 10
let productsArr = products.map((product) => {
    return product.price;
})
// console.log(productsArr)

//num 11
let landCountries = countries.filter((country) => {
return country.includes('land')
})
// console.log(landCountries);

//num 12
let sixCharCountries = countries.filter((country) => {
return country.length === 6;
})
// console.log(sixCharCountries)

//num 13
let sixAndMoreChar = countries.filter((country) => {
    return country.length >= 6;
    })
    // console.log(sixAndMoreChar);

//num 14 
let startWithE = countries.filter((country) => {
    return country.startsWith('E');
})    
// console.log(startWithE);

// num 15
let pricesWithValues = products.filter((product) => {
    return product.price;
})
// console.log(pricesWithValues)

//num 16
function getStringLists(arr) {
    let string = arr.filter((item) => typeof item === 'string');
return string;
}
let string = getStringLists([5, 'Mariam', true])
// console.log(string)

//num 17
let sumNum = numbers.reduce((num, cur) => num + cur, 0)
// console.log(sumNum)

//num 18
// const northCountries = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
// let reduceCountries = northCountries.forEach((country) => {
// return country;
// }
// )

// let reduceCountries = northCountries.reduce((accumulator, currentValue) => {
    // return accumulator + currentValue;
// })
// console.log(reduceCountries)

//num 19
//some() method checks if some of the elements are similar in one aspect while the every() method checks if all the elements are similar.

//num 20
let namesLength = names.some((name) => name.length > 7);
// console.log(namesLength);

//num 21
let everyCountry = countries.every((country) => country.includes('land'))
// console.log(everyCountry)

//num 22
//find() method returns the first element which satisfies the condition while findIndex() method returns the position of the first element which satisfies the condition

//num 23
let findCountry = countries.find((country) => country.length === 6)
// console.log(findCountry)

//num 24
let indexCountry = countries.findIndex((country) => country.length === 6)
// console.log(indexCountry)

//num 25
const norwayPosition = countries.findIndex((country) => country.includes('Norway'))
// console.log(norwayPosition)

//num 26
const russiaPosition = countries.findIndex((country) => country.includes('Russia'))
// console.log(russiaPosition)
