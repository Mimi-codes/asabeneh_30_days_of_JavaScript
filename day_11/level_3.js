const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ];

  const _student = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }

//num 1
//No countries data

//num 2
const student = [
    'David', 
['HTM', 'CSS', 'JS', 'React'],
 [98, 85, 90, 95]
]
// console.log(name, skills, jsScore, reactScore)
let set = new Set(student)
// let [ name, skills, [, , jsScore], reactScore = 95] = set
// console.log((name), (set.size), (skills), (jsScore), (reactScore))

//num 3
const convertArrayToObject = (students) => {
    // let [{name, skills, scores}] = students
//    console.log({name, skills, scores})
const obj3 = {};

students.forEach((element, index) => {
  obj3[{name, skill, scores} + index] = element;
});
console.log(obj3);
}
console.log(convertArrayToObject(students))

//num 4
const newStudent = {..._student};

let bootstrap = {skill: 'Bootstrap', level: 8};
let express = {skill: 'Express', level: 9};
let sql = {skill: 'SQL', level: 8};
let _sql =  'SQL';
newStudent.skills.frontEnd.push(bootstrap)
newStudent.skills.backEnd.push(express)
newStudent.skills.dataBase.push(sql)
newStudent.skills.dataScience.push(_sql)

// console.log(newStudent)