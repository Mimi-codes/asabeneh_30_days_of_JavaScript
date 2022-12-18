const button = document.querySelector('button')
const input = document.querySelector('input')
const select =  document.querySelector('select')
const container = document.querySelector('.container')
// const errorDiv = document.querySelector('.error_div')
const errorMessage = document.querySelector('p')
const image = document.querySelector('img')
const result =  document.createElement('div')
const resultVal = document.createElement('div')
const resultContainer =  document.createElement('div')
resultContainer.className = 'result_container'
// resultContainer.style.backgroundColor = 'rgba(38, 37, 38, 0.33)'
resultContainer.style.margin = '8rem 2.5rem'
resultContainer.append(result, resultVal)

resultVal.style.color = 'white'
// resultVal.style.backgroundColor = 'rgba(38, 37, 38, 0.73)'
// resultVal.style.borderRadius = '50%'
// resultVal.style.margin = '0 5rem'
resultVal.style.textAlign = 'center'
resultVal.style.marginTop = '0.8rem'
result.style.color= 'white'
// result.style.padding = '2rem 0.5rem'
errorMessage.style.color= 'white'
errorMessage.style.textAlign= 'center'
container.append(errorMessage, resultContainer)


button.addEventListener('click', () => {
let inputVal = Number(input.value)
let selectVal = select.options[select.selectedIndex].innerText

// let result
if(inputVal === '') {
    errorMessage.textContent = 'Mass is required'
errorMessage.style.color = 'white'
image.src = ''
}
 else if (selectVal === 'none') { 
    errorMessage.textContent = 'You did not choose a planet yet'
    errorMessage.style.color = 'white'
    image.src = ''
} 
else if (selectVal === 'mercury'){
    result.textContent = `The weight of the object on ${selectVal}` 
    resultVal.textContent =  `${inputVal * 0.38} N`
    image.src = './assets/mercury.png'
}
 else if(selectVal === 'venus') {
    result.textContent = `The weight of the object on ${selectVal}` 
resultVal.textContent = `${inputVal * 0.91} N`
image.src = './assets/venus.png'
} 
else if(selectVal === 'earth') {
    result.textContent = `The weight of the object on ${selectVal}` 
    resultVal.textContent = `${inputVal * 1} N`
    image.src = './assets/venus.png'
}
 else if(selectVal === 'mars') {
    result.textContent = `The weight of the object on ${selectVal}` 
    resultVal.textContent = `${inputVal * 0.38} N`
    image.src = './assets/venus.png'
} 
else if(selectVal === 'jupiter') {
    result.textContent = `The weight of the object on ${selectVal}` 
    resultVal.textContent = `${inputVal * 2.34} N`
    image.src = './assets/jupiter.png'
}
 else if(selectVal === 'saturn') {
    result.textContent = `The weight of the object on ${selectVal}` 
    resultVal.textContent = `${inputVal * 1.06} N`
    image.src = './assets/saturn.png'
}
 else if(selectVal === 'uranus') {
    result.textContent = `The weight of the object on ${selectVal}` 
    resultVal.textContent = `${inputVal * 0.92} N`
    image.src = './assets/uranus.png'
}
 else if(selectVal === 'neptune') {
    result.textContent = `The weight of the object on ${selectVal}` 
    resultVal.textContent = `${inputVal * 1.19} N`
    image.src = './assets/neptune.png'
}
 else if(selectVal === 'pluto') {
    result.textContent = `The weight of the object on ${selectVal}` 
    resultVal.textContent = `${inputVal * 0.06} N`
    image.src = './assets/pluto.png'
}
 else if(selectVal === 'moon') {
    result.textContent = `The weight of the object on ${selectVal}` 
    resultVal.textContent = `${inputVal * 0.17}`
    image.src = './assets/moon.png'
}
})
