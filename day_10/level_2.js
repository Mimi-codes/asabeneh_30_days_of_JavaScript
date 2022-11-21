const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

//num 1
let c = [...a, ...b]
let A = new Set(a)
let B = new Set(b)
let aUb = new Set(c)
// console.log(aUb)

//num 2
let _c = a.filter((num) => B.has(num))
let anb = new Set(_c)
// console.log(anb)

//num 3
let $c = a.filter((num) => !B.has(num))
let C = new Set(c)
// console.log(C)