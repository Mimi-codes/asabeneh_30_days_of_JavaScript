 //num 1
const user = {
    firstName: 'Mariam',
    lastName: 'Ismael',
    age: 80,
    country: 'Nigeria',
    city: 'Ilorin'
}

let userText = JSON.stringify(user)
localStorage.setItem('user', 'userText')
