

const inputDiv = document.querySelector('.input')
const firstName =  document.querySelector('.input_text')
const lastName =  document.querySelector('.text_1')
const country =  document.querySelector('.text_2')
const score =  document.querySelector('.text_3')
const add_btn = document.querySelector('.add_btn')
const errorMessage = document.querySelector('.error_message')
errorMessage.textContent = ``

firstName.addEventListener('input', () => {

})
let alphabets = 'A, B, C, D'

add_btn.addEventListener('click', () => {
if(firstName.value === '' || lastName.value === '' || country.value === '' || score.value === '') {
    errorMessage.textContent = `All fields are required`
}  else if(firstName.value === String || lastName.value === String || country.value === String || score.value === Number) {
outputDiv.append(alphabets)
}

else {
    errorMessage.textContent = ''
}

})

const delButton = document.querySelector('.del_btn')
delButton.addEventListener('click', () => {
    console.log('blu')
})

const delButton_1 = document.querySelector('.del_btn_1')
delButton_1.addEventListener('click', () => {
    console.log('clicked')
})

const players = [
    {
        'name': 'MARTHA YOHANES',
        'country': 'FINLAND',
        'score': 85,
        'icon': delButton,
        'add': +5,
        'subtract': -5
    },
    {
        'name': 'DAVID SMITH',
        'country': 'UNITED KINGDOM',
        'score': 80,
        'icon': delButton_1,
        'add': +5,
        'subtract': -5
    },
    {
        'name': 'ASABENEH YETAYEH',
        'country': 'FINLAND',
        'score': 75,
        'icon': 'del',
        'add': +5,
        'subtract': -5
    },
    {
        'name': 'MATHIAS ELIAS',
        'country': 'SWEDEN',
        'score': 70,
        'icon': 'del',
        'add': +5,
        'subtract': -5
    }
]


let countries
let names
let scores
let del
let add
let sub
let space = ' '

for(const item of players) {
const outputDiv = document.createElement('div')
const nameOutputDiv = document.createElement('p')
nameOutputDiv.className = 'name'
const countryOutputDiv = document.createElement('p')
countryOutputDiv.className = 'country'
const scoreOutputDiv = document.createElement('p')
scoreOutputDiv.className = 'score'
const all = document.createElement('div')
all.className = 'all'
const delOutputDiv = document.createElement('p')
delOutputDiv.className = 'del'
const addOutputDiv = document.createElement('p')
addOutputDiv.className = 'add'
const subOutputDiv = document.createElement('p')
subOutputDiv.className = 'sub'
outputDiv.className = 'output_div'
names = item.name   
countries = item.country
scores = item.score
del = item.icon
add = item.add
sub = item.subtract
nameOutputDiv.append(names)
countryOutputDiv.append(countries)
scoreOutputDiv.append(scores)
delOutputDiv.append(del)
addOutputDiv.append(add)
subOutputDiv.append(sub)
all.append( delOutputDiv, addOutputDiv, subOutputDiv)
outputDiv.append(nameOutputDiv, countryOutputDiv, scoreOutputDiv, all)
document.body.append(outputDiv)
}
