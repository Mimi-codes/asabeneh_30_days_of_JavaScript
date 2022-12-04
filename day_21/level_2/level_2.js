//num 1
const titles = document.querySelectorAll('p')
titles.forEach((title, i) => {
  i = title.style.fontSize = '20px'
  i = title.style.backgroundColor = 'green'
  
})

//num 2
const _titles = document.querySelectorAll('p')
titles.forEach((title, i) => {
    if(i % 2 === 0) {
   title.style.backgroundColor = 'green'
    } 
    else {
        title.style.backgroundColor = 'red'
    }
})

//num 3
let _textPara =  document.querySelectorAll('p')
_textPara[3].textContent = 'Fourth Title'

//num 6a
const attributesFirstPara = document.querySelectorAll('p')
titles[0].setAttribute('class', 'title')
titles[0].setAttribute('id', 'first-title')
