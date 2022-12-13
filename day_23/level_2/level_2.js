

let displayDiv = document.createElement('div')
displayDiv.style.boxShadow = '2px 5px 15px 2px #d6d6d6'
displayDiv.style.margin = '10% auto'
displayDiv.style.width = '30%'
document.body.appendChild(displayDiv)



let displayDivText = document.createElement('p')
displayDivText.style.fontSize = '1.3rem'
displayDivText.style.textAlign = 'center'
displayDivText.style.padding = '1.5rem'
displayDivText.textContent = 'Press any keyboard key'
displayDiv.appendChild(displayDivText)


let pressedKey = document.body.addEventListener('keypress', e => {
    let key = (e.key)
   let key_1 = (e.which)
   let output = `${key} ${key_1}`
    displayDiv.textContent = `You pressed ${output}`
    displayDiv.style.fontSize = '1.3rem'
    displayDiv.style.textAlign = 'center'
    // displayDiv.style.color = 'green'
    displayDiv.style.padding = '1.5rem'

})
displayDiv.appendChild(pressedKey)



// e.keyCode
// e.code
// e.which
