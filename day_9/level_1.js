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
//num 2
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

//num 15
// let pricesWithValues = products.filter((product) => {
    // return product.price;
// })
// console.log(pricesWithValues)

//num 16
// function getStringLists(arr) {
    // return arr.names
// }
// console.log(getStringLists)

//num 17
let sumNum = numbers.reduce((num, cur) => num + cur, 0)
// console.log(sumNum)

//num 18
// const northCountries = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
// let reduceCountries = countries.reduce((act, cur) => act.slice(0, 5) + cur.slice(5))
// console.log(reduceCountries)

//num 19

//num 10