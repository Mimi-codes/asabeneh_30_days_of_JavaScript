const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}



//num 1
const newSkills = JSON.stringify(skills)
console.log(newSkills);

//num 2
const ageStringify = JSON.stringify(age)
console.log(ageStringify)

//num 3
const stringifyMarried =  JSON.stringify(isMarried)
console.log(stringifyMarried)

//num 4
const studentStringify = JSON.stringify(student, undefined, 4)
console.log(studentStringify)
