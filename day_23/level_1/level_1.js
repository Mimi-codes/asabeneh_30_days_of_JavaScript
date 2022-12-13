    
    let body = document.querySelector("body")
    let message = document.querySelector(".warning-message")
    message.style.textAlign = 'center'
    
    let div = document.querySelector(".container")
    
    const titleDiv = document.querySelector('.title')
    let inputDiv = document.querySelector('.input')
    inputDiv.style.marginLeft = '22rem'

let containerDiv = document.querySelector('.container')
containerDiv.style.display = 'inline-grid'
containerDiv.style.gridTemplateColumns = 'auto auto auto auto auto auto auto auto auto' 
containerDiv.style.margin = '1rem 14rem 0 14rem'
containerDiv.style.textAlign = "center"

    let numGenerator = document.createElement('h3')
    numGenerator.textContent = 'Number Generator'
    numGenerator.style.color = '#71c58b'
    numGenerator.style.textAlign = 'center'
    
    let numText = document.createElement('p')
    numText.className = 'num_text'
    numText.textContent = '30DaysOfJavaScript:DOM Day 3'
    numText.style.textAlign = 'center'
    
    let author = document.createElement('p')
    author.className = 'author'
    author.textContent = 'Author: Asabeneh Yetayeh'
    author.style.textAlign = 'center'
    titleDiv.append(numGenerator, numText, author)
    
    let input = document.querySelector("input")
    input.style.border = '1px solid #71c58b'
    input.style.width = '30rem'
    input.style.margin = '0 0.6rem'
    input.style.padding = '0.6rem 0.3rem'
    
    
    let btn = document.querySelector('button')
    btn.style.backgroundColor = '#71c58b'
    btn.style.color = 'white'
    btn.style.textAlign = 'center'
    btn.style.padding = '0.6rem 0.4rem'
    btn.style.marginLeft = '0.2rem'
    btn.style.border = 'none'
    
    // console.log(message)
    btn.addEventListener("click", function () {
        let val = input.value;
        if (typeof (Number(val)) === "number" && Number(val) > 0) {
            div.innerHTML = "";
            input.value = ""
            message.innerHTML = "";
            for (let i = 0; i <= val; i++) {
                if (i % 2 === 0) {
                    let box = document.createElement("div")
                    box.textContent = i
                    box.style.backgroundColor = "#5bbc7a"
                    box.style.padding = '0.5rem 1.7rem'
                    box.style.marginLeft = '0.7rem'
                    box.style.marginBottom = '0.7rem'
                    box.style.color = 'white'
                    box.style.fontSize = '1.5rem'
                    div.appendChild(box)
                } else {
                    let box = document.createElement("div")
                    box.textContent = i;
                    box.style.backgroundColor = "#f7dc5c"
                    box.style.padding = '0.5rem 1.7rem'
                    box.style.marginLeft = '0.7rem'
                    box.style.marginBottom = '0.7rem'
                    box.style.color = 'white'
                    box.style.fontSize = '1.5rem'
                    div.appendChild(box)
                }
            }
        } else if (val.length === 0) {
            div.innerHTML = ""
            input.value = "";
            message.innerHTML = "";
            message.textContent = "Enter a number to generate numbers";
            message.style.color = "red"
        } else if (typeof (val) === "string") {
            div.innerHTML = "";
            input.value = "";
            message.innerHTML = "";
            message.textContent = "Please enter number values only";
            message.style.color = "red"
        }
    })
    