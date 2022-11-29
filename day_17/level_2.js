 //num 2
 const student = {
    firstName: 'Mariam',
    lastName: 'Ismael',
    age: 80,
    skills: ['HTML', 'CSS'],
    country: 'Nigeria'
}

let studentTxt = JSON.stringify(student)
localStorage.setItem('student', 'studentTxt')
