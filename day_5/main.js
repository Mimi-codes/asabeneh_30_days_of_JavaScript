//num1 
import { countries } from "./countries";
import { webTechs } from "./web_techs";
console.log(countries);
console.log(webTechs);


//num 2
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

let words = text.split(' ');
console.log(words);
console.log(words.length);

//num 3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat');
shoppingCart.push('Sugar');
shoppingCart.splice(4, 1);
shoppingCart[3] = 'Green Tea';
console.log(shoppingCart);

//num 4
countries.includes('Ethiopia') ? 'ETHIOPIA' : countries.push('Ethiopia');
console.log(countries);

//num 5
webTechs.includes('Sass') ? 'Sass is a CSS preprocess' : webTechs.push('Sass');
console.log(webTechs);

//num 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
