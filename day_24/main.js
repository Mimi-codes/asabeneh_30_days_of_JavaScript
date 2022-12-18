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
resultContainer.style.width = '50%'
resultContainer.style.height = '90%'
resultContainer.style.margin = 'auto 1rem'
// resultContainer.style.padding = '5rem 0.5rem'
resultContainer.style.backgroundColor = 'rgba(38, 37, 38, 0.33)'
resultContainer.append(result, resultVal)

resultVal.style.color = 'white'
resultVal.style.backgroundColor = 'rgba(38, 37, 38, 0.73)'
resultVal.style.borderRadius = '50%'
resultVal.style.width = '5rem'
resultVal.style.textAlign = 'center'
resultVal.style.textAlign = 'center'
result.style.color= 'white'
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
} else if (selectVal === 'none') { 
    errorMessage.textContent = 'You did not choose a planet yet'
    errorMessage.style.color = 'white'
    image.src = ''
} else if (selectVal === 'mercury'){
    result.textContent = `The weight of the object on ${selectVal}` 
    resultVal.textContent =  `${inputVal * 0.38} N`
    image.src = './assets/mercury.png'
} else if(selectVal === 'venus') {
result.textContent = inputVal * 0.91
image.src = './assets/venus.png'
} else if(selectVal === 'earth') {
    result.textContent = inputVal * 1
    image.src = './assets/venus.png'
} else if(selectVal === 'mars') {
    result.textContent = inputVal * 0.38
    image.src = './assets/venus.png'
} else if(selectVal === 'jupiter') {
    result.textContent = inputVal * 2.34
    image.src = './assets/jupiter.png'
} else if(selectVal === 'saturn') {
    result.textContent = inputVal * 1.06
    image.src = './assets/saturn.png'
} else if(selectVal === 'uranus') {
    result.textContent = inputVal * 0.92
    image.src = './assets/uranus.png'
} else if(selectVal === 'neptune') {
    result.textContent = inputVal * 1.19
    image.src = './assets/neptune.png'
} else if(selectVal === 'pluto') {
    result.textContent = inputVal * 0.06
    image.src = './assets/pluto.png'
} else if(selectVal === 'moon') {
    result.textContent = inputVal * 0.17
    image.src = './assets/moon.png'
}
})
  /*
    let inputValue = input.value
    let selectValue = select.options[select.selectedIndex].innerText
   
    // let selectValue = select.options[select.selectedIndex].innerText
    if(inputValue === '') {
        errorMessage.textContent = 'Mass is required' 
    errorMessage.style.color = 'white'
//    errorMessage.style.backgroundColor = 'gray' 
    errorMessage.style.textAlign = 'center'
    image.src = ''
    // errorDiv.append(errorMessage)
} else if (selectValue = 'none') {
    errorMessage.textContent = 'You did not choose a planet yet'
    errorMessage.style.color = 'white'
    //    errorMessage.style.backgroundColor = 'gray' 
        errorMessage.style.textAlign = 'center'
        image.src = ''
}   else if (selectValue === 'Mercury') {
    // checkError()
    output.textContent = `${inputValue} * 3.61 N`
        output.style.color = 'white'
        image.src = './assets/mercury.png'
        }
        const checkError = () => {
    output.textContent = `The weight of the object on ${
        option.options[option.selectedIndex].text
      } is`;
   
}
*/
// let a = select.options[select.selectedIndex].innerText