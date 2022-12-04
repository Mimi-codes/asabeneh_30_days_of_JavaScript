//num 1
let tagName = document.querySelector(p);

//num 2
let one = document.querySelector('#one')
let two = document.querySelector('#two')
let three = document.querySelector('#three')
let four = document.querySelector('#four')
console.log(one)
console.log(two)
console.log(three)
console.log(four)

//num 3
let tag = document.querySelectorAll('p')

//num 4
let lists = document.querySelectorAll('p')
for (let i = 0; i < lists.length; i++) {
    console.log(lists[i]) 
  }

  //num 5
  let textPara =  document.querySelectorAll('p')
  textPara[3].textContent = 'Fourth Title'

  //num 6a
const attributesFirstPara = document.querySelectorAll('p')
titles[0].setAttribute('class', 'title')
titles[0].setAttribute('id', 'first-title')

//b
let attributesSecondPara = document.querySelectorAll('p')
titles[1].className = 'title'
titles[1].id = 'second-title'

//c
const attributesThirdPara = document.querySelectorAll('p')
titles[2].setAttribute('class', 'title')
titles[2].setAttribute('id', 'third-title')