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
let copyArr = [];
for(i = 0; i < countries.length; i++) {
    let copy = countries[i].slice(0);
    copyArr.push(copy);
}
console.log(copyArr);

//num 2
let _copyArr = [];
let sortedCountries = [];
_copyArr = countries.slice(0);
// sortedCountries.push(_copyArr);
_copyArr.sort();
sortedCountries.push(_copyArr)
console.log(sortedCountries);

//num 3
 let sortedMernStack = mernStack.sort();
 console.log(sortedMernStack);
let sortedWebTechs = webTechs.sort();
console.log(sortedWebTechs);

//num 4
import { countries } from "./countries" //code in countries.js

//num 5

