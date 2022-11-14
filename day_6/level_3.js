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
  ]

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
let copyArr = [];
for(i = 0; i < countries.length; i++) {
    let copy = countries[i].slice(0);
    copyArr.push(copy);
}
console.log(copyArr);

//num 2
let copyArr = [];
let sortedCountries = [];
copyArr = countries.slice(0);
// sortedCountries.push(copyArr);
copyArr.sort();
sortedCountries.push(copyArr)
console.log(sortedCountries);

//num 3
// let sortedMernStack = mernStack.sort();
// console.log(sortedMernStack);
let sortedArr = webTechs.concat(mernStack);
console.log(sortedArr.sort())
*/
//num 4
import { countries } from "./countries"