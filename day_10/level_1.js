// const countries = [
    // ['Finland', 'Helsinki'],
//   ['Sweden', 'Stockholm'],
//   ['Norway', 'Oslo']
// ]

const countries = ['Finland', 'Sweden', 'Norway']

//num 1
const emptySet = new Set();
// console.log(emptySet)

//num 2

let numSet = [];
    for(let i = 0; i <=10; i++) {
        numSet.push(i);
    }
    // console.log(numSet);

//num 3
numSet.delete(3);

//num 4
numSet.clear()
// console.log(numSet)

//num 5
let states = ['Kwara', 'Oyo', 'Edo', 'Sokoto', 'Lagos'];
let stateSet = new Set();
states.map((state) => {
    stateSet.add(state);
}) 
// console.log(stateSet)

//num 6
// const map = new Map(countries)
// console.log(map)

let countriesLength = new Set();
for (let i = 0; i < countries.length; i++){
        countriesLength.add(countries[i])
        countriesLength.add(countries[i].length);
}
console.log(countriesLength);
