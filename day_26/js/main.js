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

countries_start.textContent = ``

let ca = []
for (let i = 0; i < countries.length; i++) {
    if(countries[i].includes('a')) {
       ca.push(countries[i])     
    }
}
console.log(ca.length)

const input = document.querySelector('.text_btn').value 
// input.addEventListener('focus', (e) => {
    // console.log(e.type)
// })
const start_btn = document.querySelector('.start_btn').value
// start_btn.addEventListener('click', (e) => {
  
// })

console.log(countries.includes('a'))