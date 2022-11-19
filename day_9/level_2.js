const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

  const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland', 'Nigeria', 'Pakistan']
//num 1
// const productsArr = products.map((product) => product.price)

// console.log(productsArr);
function totalPrice() {
    let productsArr = products.map((product) => product.price)
    .filter((price) => price > 0)
    .reduce((pre, cur) => pre + cur);
    return productsArr;
}
// console.log(totalPrice());

//num 2
let sumPrice = products.reduce((prev, cur) =>  {
    if (products['price'] > 0) {
        // return prev + cur
    }
});
// console.log(sumPrice)

//num 3
const categorizeCountries = (countries) => {
    let coun = countries.filter(country => {
        return country.toLowerCase().includes("ia") || country.toLowerCase().includes("island") || country.toLowerCase().includes("land") || country.toLowerCase().includes("stan");
    })
    return coun;
}
// console.log(categorizeCountries(countries));

//num 4


//num 5
const getFirstTenCountries = (countries) => {
    let firstTen = [];
    firstTen = countries.map(country => {
        return country;
        })
    return firstTen;
}

// console.log(getFirstTenCountries(countries));

//num 6
const getLastTenCountries = (countries) => {
    let lastTen = [];
    lastTen = countries.map(country => {
        return country;
        })
    return lastTen;
}

// console.log(getLastTenCountries(countries));

//num 7
