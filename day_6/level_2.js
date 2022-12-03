const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']
//num 1
/*
for (i = 0; i < 1; i++) {
    let randomId = Math.floor((1 + Math.random()) * 255).toString('').substring(1);
 console.log(randomId);
 }
*/

 //num 2
 //num 3

 
//num 4
//   let country = [];

  for(const country of countries) {
    console.log(country.toUpperCase());
}

//num 5
let countriesLength = [];
for(const country of countries) {
    console.log(countriesLength.push(country.length));
}

//num 6

//num 7
let landCountries = [];
let nonLandCountries = [];
for (let i = 0; i < countries.length; i++) {
    if(countries[i].includes('land')) {
        landCountries.push(countries[i]);
    } else {
        nonLandCountries.push(countries[i]);
    }
}
// console.log(landCountries)
// console.log(nonLandCountries)

//num 8
let iaCountries = [];
let nonIaCountries = [];

for (let i = 0; i < countries.length; i++) {
    
    if(countries[i].endsWith('ia')) {
        iaCountries.push(countries[i]);
    } else {
         nonIaCountries.push(countries[i]);
    }
}
console.log(`countries with "ia" [${iaCountries}]`);
console.log(`These are countries that ends without "ia" [${nonIaCountries}]`);

//num 9

let highestCharacter = [];
for (let i = 0; i < countries.length; i++) {
   if(countries[i].length > highestCharacter.length) {
       highestCharacter = countries[i];
   }
}
console.log(highestCharacter);

//num 10
let countriesWithFiveChars = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length === 5) {
        countriesWithFiveChars.push(countries[i])
    }
}
console.log(countriesWithFiveChars);

//num 11

let longestWord = '';
for (let i = 0; i < webTechs.length; i++) {
   if(webTechs[i].length >longestWord.length) {
    longestWord = webTechs[i];
   }
}
console.log(longestWord);

//num 12
let newWebTechs = [];
for (let i = 0; i < webTechs.length; i++) {
    newWebTechs.push([webTechs[i], webTechs[i].length])
}
console.log(newWebTechs);

//num 13
let mern = "";
for (let i = 0; i < mernStack.length; i++) {
    mern += mernStack[i].slice(0, 1);
}
console.log(mern);

//num 14
let techArray = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
for (const techArr of techArray) {
    console.log(techArr);
}

//num 15
let fruits = ['banana', 'orange', 'mango', 'lemon'];
for (let i = fruits.length -1; i >= 0; i--) {
    console.log(fruits[i]);
}

//num 16
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  
for (let i = 0; i < fullStack.length; i++) {
    for (let j = 0; j < fullStack[i].length; j++) {
    console.log(fullStack[i][j]);
    }    
}
