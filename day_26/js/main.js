import { countries } from "./countries.js"

/*const body = document.querySelector('body')
body.style.fontFamily = "'Montserrat', sans-serif"

const hero_section = document.createElement('div')
hero_section.className = 'hero_section'
hero_section.style.textAlign = 'center'

const title = document.createElement('h4')
title.className = 'title'
title.style.textTransform = 'uppercase'
title.style.paddingTop = '4rem'
title.style.fontSize = '1.5rem'
title.style.color = ''
title.textContent = 'world countries list'

const total_countries = document.createElement('p')
total_countries.className = 'total_countries'
total_countries.textContent = `Total Number of countries: ${countries.length}`
 


document.body.append(hero_section)
hero_section.append(title, total_countries)
// console.log(countries)
// alert('Open the console and check if the countries has been loaded')
*/


const total_countries = document.querySelector('.total_countries')
total_countries.textContent = `Total Number of countries: ${countries.length}`

const countries_start = document.querySelector('.countries_start')

countries_start.textContent = `Countries containing are `

const start_btn = document.querySelector('.start_btn')
start_btn.addEventListener('click', (e) => {
 
    // console.log(ca)
})

let startA = countries.filter((byLetter)=>
    (byLetter).startsWith('A'))
    console.log(startA)

    let startB = countries.filter((byLetter)=>
    (byLetter).startsWith('B'))
    console.log(startB)


    let startC = countries.filter((byLetter)=>
    (byLetter).startsWith('C'))
    console.log(startC)

    let startD = countries.filter((byLetter)=>
    (byLetter).startsWith('D'))
    console.log(startD)

    let startE = countries.filter((byLetter)=>
    (byLetter).startsWith('E'))
    console.log(startE)

    let startF = countries.filter((byLetter)=>
    (byLetter).startsWith('F'))
    console.log(startF)

    let startG = countries.filter((byLetter)=>
    (byLetter).startsWith('G'))
    console.log(startG)

    let startH = countries.filter((byLetter)=>
    (byLetter).startsWith('H'))
    console.log(startH)

    let startI = countries.filter((byLetter)=>
    (byLetter).startsWith('I'))
    console.log(startI)

    let startJ = countries.filter((byLetter)=>
    (byLetter).startsWith('J'))
    console.log(startJ)

    let startK = countries.filter((byLetter)=>
    (byLetter).startsWith('K'))
    console.log(startK)

    let startL = countries.filter((byLetter)=>
    (byLetter).startsWith('L'))
    console.log(startL)

    let startM = countries.filter((byLetter)=>
    (byLetter).startsWith('M'))
    console.log(startM)

    let startN = countries.filter((byLetter)=>
    (byLetter).startsWith('N'))
    console.log(startN)

    let startO = countries.filter((byLetter)=>
    (byLetter).startsWith('O'))
    console.log(startO)

    let startP = countries.filter((byLetter)=>
    (byLetter).startsWith('P'))
    console.log(startP)

    let startQ = countries.filter((byLetter)=>
    (byLetter).startsWith('Q'))
    console.log(startQ)

    let startR = countries.filter((byLetter)=>
    (byLetter).startsWith('R'))
    console.log(startR)

    let startS = countries.filter((byLetter)=>
    (byLetter).startsWith('S'))
    console.log(startS)

    let startT = countries.filter((byLetter)=>
    (byLetter).startsWith('T'))
    console.log(startT)

    let startU = countries.filter((byLetter)=>
    (byLetter).startsWith('U'))
    console.log(startU)

    let startV = countries.filter((byLetter)=>
    (byLetter).startsWith('V'))
    console.log(startV)

    let startW = countries.filter((byLetter)=>
    (byLetter).startsWith('W'))
    console.log(startW)

    let startX = countries.filter((byLetter)=>
    (byLetter).startsWith('X'))
    console.log(startX)

    let startY = countries.filter((byLetter)=>
    (byLetter).startsWith('Y'))
    console.log(startY)

    let startZ = countries.filter((byLetter)=>
    (byLetter).startsWith('Z'))
    console.log(startZ)

const input = document.querySelector('.text_btn')
const outputA =  document.createElement('div')
const outputB =  document.createElement('div')
document.body.append(outputA, outputB)

input.addEventListener('input', (e) => {
    let type = e.data
    if(type === 'A') {
    countries_start.textContent = `Countries containing a are ${startA.length}`
outputB.textContent = ''
    outputA.append(startA)
    }
    else if(type === 'B') {
        countries_start.textContent = `Countries containing b are ${startB.length}`
        
    outputA.textContent = ''
    outputB.append(startB)
        }
})


/*
 let type = e.data
 if(type === 'A') {
countries_start.textContent = `Countries containing a are ${startA.length}`
 }
*/