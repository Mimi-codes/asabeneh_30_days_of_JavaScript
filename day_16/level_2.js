const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
  }

  //num 1
  const studentStringify = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 4)
  console.log(studentStringify)