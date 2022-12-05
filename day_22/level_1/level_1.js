const body = document.querySelector("body")
//body styling
// body.style.display = "flex"
body.style.fontFamily = "sans-serif"

let main = document.createElement('div')
main.id = 'main_div'
main.style.textAlign = "center"
body.appendChild(main)

//heading
let heading = document.createElement('h2')
heading.textContent = 'Number Generator'
main.appendChild(heading)

let daysOfJs = document.createElement('p')
daysOfJs.textContent ='30DaysOfJavaScript:DOM Day 2'
daysOfJs.className = 'days_of_js'
daysOfJs.style.textDecoration = 'underline'
daysOfJs.style.fontSize = '1rem'
main.appendChild(daysOfJs)

let author = document.createElement('p')
author.textContent = 'Author: Asabeneh Yetayeh'
author.className = 'author_para'
author.style.textDecoration = 'underline'
author.style.fontSize = '0.8rem'
main.appendChild(author)


//numbers
let numbersDiv = document.createElement('div')
numbersDiv.className = 'numbers_div'
numbersDiv.style.textAlign = "center"
numbersDiv.style.marginLeft = '27%'
numbersDiv.style.display = 'inline-grid'
numbersDiv.style.gridTemplateColumns = 'auto auto auto auto auto auto'
document.body.appendChild(numbersDiv)

let numbers
for(let i = 0; i <= 101; i++) {
    numbers = document.createElement('p')
    numbers.className = 'number_para'
    numbers.style.marginBottom = '0'
    numbers.style.marginRight = '0.5rem'
    numbers.style.padding = '2.3rem'
    if(i % 2 === 0) {
numbers.style.backgroundColor = 'green'
    } else if(i % 2 === 1) {
        numbers.style.backgroundColor = 'yellow'
            }
    numbers.textContent = i 
    // document.body.appendChild(numbers)
    numbersDiv.appendChild(numbers)
}
