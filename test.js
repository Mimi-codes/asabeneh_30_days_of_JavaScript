const sumOfOdds = (num) => {
  let sum = 0
  for (let i = 0; i <= num.length; i++) {
      if (i % 2 == 1) {
  return i
      }
  }
  }
  
  let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  // console.log(sumOfOdds(number))
  
  let challengeDays = {
      challenges: [
      {
        name: '30 Days Of Python',
        topics: [
          'Python',
          'Flask',
          'Numpy',
          'Pandas',
          'Statistics',
          'API',
          'MongoDB'
        ],
        days: 30,
        status: 'Done',
        questions: 'Above 500',
        projects: 'Two',
        interviewQns: '',
        githubUrl: 'https://github.com/Asabeneh/30-Days-Of-Python'
      },
      {
        name: '30 Days Of JavaScript',
        topics: ['JavaScript', 'ES6', 'Promise', 'async and await', 'DOM'],
        days: 30,
        status: 'Ongoing',
        questions: 'Above 500',
        projects: 'About 30',
        interviewQns: '',
        githubUrl: 'https://github.com/Asabeneh/30DaysOfJavaScript'
      },
      {
        name: '30 Days Of HTML & CSS',
        topics: ['CSS', 'Flex', 'Grid', 'CSS Animation'],
        days: 30,
        status: 'Coming',
        questions: 'Above 500',
        projects: 'Two',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of React',
        topics: [
          'React',
          'React Router',
          'Redux',
          'Context API',
          'React Hooks',
          'MERN'
        ],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of ReactNative',
        topics: ['ReactNative', 'Redux'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: 'Two',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Fullstack',
        topics: ['React', 'Redux', 'MongoDB', 'Node', 'MERN'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Data Analysis',
        topics: ['Python', 'Numpy', 'Pandas', 'Statistics', 'Visualization'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Machine Learning',
        topics: [
          'Python',
          'Numpy',
          'Pandas',
          'Scikit-learn',
          'Scipy',
          'Linear Algebra',
          'Statistics',
          'Visualization'
        ],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      }
    ]
  }
  
  console.log(challengeDays.challenges[0].name)
  
  let body = document.querySelector('body')
  // body.style.backgroundImage = "url('./assets/galaxy.gif')"
  // body.style.fontFamily = 'Arial, sans-serif'
  
  //title
  /*let title = document.createElement('h4')
  title.textContent = 'Calculate a weight of an object on a planet'
  title.style.textAlign = 'center'
  title.style.color = 'white'
  title.style.fontSize = '2rem'
  document.body.append(title)
  
  //input div
  let inputDiv =  document.createElement('div')
  inputDiv.className = 'input_div'
  inputDiv.style.display = 'flex'
  inputDiv.style.justifyContent = 'center'
  document.body.append(inputDiv)
  
  //input value
  let inputValue = document.createElement('input')
  inputValue.className = 'input_value'
  inputValue.placeholder = 'Mass in kilogram'
  inputValue.style.padding = '0.6rem'
  inputValue.style.borderRadius = '5px'
  inputValue.style.border = 'none'
  inputDiv.append(inputValue)
  
  //select planet
  let planets = ['Mercury', 'Venus', 'Earth', 'Moon', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto']
  
  
  let selectPlanets =  document.querySelector('select')
  selectPlanets.style.marginLeft = '0.5rem'
  selectPlanets.style.borderRadius = '5px'
  selectPlanets.style.border = 'none'
  selectPlanets.style.textTransform = 'uppercase'
  inputDiv.append(selectPlanets)
  
  //button
  let button =  document.createElement('button')
  button.className = 'btn'
  button.textContent = 'Calculate weight'
  button.style.borderRadius = '5px'
  button.style.width = '7rem'
  button.style.color = 'white'
  button.style.backgroundColor = '#6d6c6d'
  button.style.padding = '0.5rem 0.2rem' 
  button.style.height = '2.5rem'
  button.style.border = 'none'
  button.style.marginLeft = '0.5rem'
  inputDiv.append(button)
  
  
  let outputDiv = document.createElement('div')
  outputDiv.className = 'output_div'
  outputDiv.style.backgroundColor = '#1c1b1c'
  outputDiv.style.display = 'flex'
  outputDiv.style.marginTop = '1rem'
  outputDiv.style.margin = '1rem auto'
  outputDiv.style.width = '50%'
  // outputDiv.style.color = 'white'
  outputDiv.style.borderRadius = '5px'
  outputDiv.style.backgroundColor = 'rgba(38, 37, 38, 0.43)'
  // outputDiv.textContent = 'fdg'
  document.body.append(outputDiv)
  
  const image = document.createElement('img')
  image.src = './assets/earth.png'
  image.style.width = '40%'
  image.style.margin = '2.5rem auto'
  outputDiv.append(image)
  
  //error messages
  let mass_error_message = document.createElement('p')
  mass_error_message.style.textAlign = 'center'
  mass_error_message.style.color = 'white'
  mass_error_message.backgroundColor = 'rgba(38, 37, 38, 1)'
  mass_error_message.textContent = 'Mass is required'
  
  let planet_error_message = document.createElement('p')
  planet_error_message.style.textAlign = 'center'
  planet_error_message.style.color = 'white'
  planet_error_message.backgroundColor = 'rgba(38, 37, 38, 1)'
  planet_error_message.textContent = 'You did not choose a planet'
  
  let bmi
  let btn = document.querySelector('.btn')
  btn.addEventListener('click', (e) => {
  bmi = 2 + 4
      alert(`Your bmi is ${bmi}`)
  
  })
  
  
  
      /*let val = input.value;
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
      } 
  })
  // second rgb(58 57 58)
  //circle rgb(66 66 67)
  // text #adadad
  */
  
  const input = document.querySelector('input') 
const img = document.getElementsByClassName('.earth_img')
const planets = document.querySelector('.planets_dropdown')


//message
const message = document.querySelector('.message')
message.style.color = "white"
message.style.backgroundColor = "rgb(58 57 58)"

//button
const btn = document.querySelector('button')
btn.addEventListener('click', (e) => {
let val = input.value 
let val_1 = planets.value
    if (val === '') {
        // div.innerHTML = "";
        input.value = ""
        message.innerHTML = ""
        message.textContent = "Mass is required"
    //   img.style.visibility = 'hidden'

    } else if (typeof(val) === 'string') {
        input.value = ""
        message.innerHTML = ""
        message.textContent = "Please enter number values only"

    }
    else if (typeof(val) === 'number') {
        input.value = ""
        message.innerHTML = ""

    } else if (val_1 === '') {
        planets.value = ''
        message.innerHTML = ""
        message.textContent = "Select a planet is required"
    }


    
})






const input = document.querySelector("input");
const select = document.querySelector("select");
const button = document.querySelector("button")
const container = document.querySelector(".container");
const error = document.querySelector('.error')
const outputImage = document.querySelector('.image')
const text = document.createElement('p') 
// text.textContent =  `The weight of the object on ${
    // select.select[select.selectedIndex].text
//   } is`;
let weight;

button.addEventListener('click', () => {
    input.value = ""
    error.innerHTML = ""
    error.textContent = 'You did not choose a planet'
})
container.append(error)

/*
button.addEventListener('click', () => {
    let inputVal = input.value
let selectVal = select.value
if(inputVal === '') {
    error.textContent = 'Mass is required'
    document.querySelector('.image').src=''
} else if (selectVal = 'none') {
    error.textContent = 'You did not choose a planet'
}
container.append(error)
})


const outPut = () => {
let inputVal = input.value
let selectVal = select.value
if(inputVal === '') {
    error.textContent = 'Mass is required'
    document.querySelector('.image').src=''
} else if (selectVal = 'none') {
    error.textContent = 'You did not choose a planet'
}
button.append(outPut())
}


// var value = select.options[select.selectedIndex].value;
// console.log(value);
// container.appendChild()

/*
  console.log(select.options[select.selectedIndex].value);
button.addEventListener ('click', () => {
    let val = input.value
    let val_1 = select.value
    if (val === '' || typeof(val) === 'string') {
        error.textContent = 'Mass is required'
        error.style.color = 'white'
        error.style.padding = '1rem 17rem'
        error.style.textAlign = 'center'
    } else if (val_1 === '') {
        error.textContent = 'Mass required'
        error.style.color = 'white'
        error.style.padding = '1rem 17rem'
        error.style.textAlign = 'center'
    }
    
    container.append(error)
    
})
container.innerHTML = ''
container.appendChild(`${space.earth.image}`
) 


const containerUI = (img,text) => {
    let image = document.createElement("img");
    image.style.width = '40%'
    image.style.margin = '2.5rem auto';
    image.src = `${img}`;
    let p = document.createElement("p");
    p.textContent = text;
    p.style.color = 'white'
    p.className = "big"
    container    
    container.appendChild(image);
    container.appendChild(p);
    // container.className = "container-border"
}

button.addEventListener("click",function(){
    let imgSrc;
    container.innerHTML = "";
    imgSrc = space[select.value].image;
    weight = Math.floor(Number(input.value) * space[select.value].gravity);
    containerUI(imgSrc,weight);
    // console.log(`The weight of the object ${spaceVal} is ${weight}`)
})
*/


const option = document.getElementById("options");
const flex = document.querySelector(".flex");
const image = document.querySelector(".planet");
const description = document.querySelector(".description");
const input = document.querySelector("input");
let circle = document.createElement("div");
description.appendChild(circle);
let p = document.querySelector("p");
function planet() {
  p.textContent = `The weight of the object on ${
    option.options[option.selectedIndex].text
  } is`;
  image.style.height = "18rem";
  image.style.width = "20rem";
  image.style.marginRight = "5rem";
  description.style.marginTop = "5rem";
  description.style.paddingTop = "1rem";
  description.style.height = "10rem";
  circle.style.backgroundColor = "rgba(81, 81, 80, 0.7)";
  circle.style.borderRadius = "50%";
  //   circle.style.width = "auto";
  circle.style.maxWidth = "15rem";
  circle.style.height = "2rem";
  circle.style.padding = "2rem 1rem";
  circle.style.margin = "1rem auto";
  circle.style.fontWeight = "bold";
  circle.style.fontSize = "2rem";
  circle.style.textAlign = "center";
}
function answer() {
  flex.style.display = "flex";
  flex.style.justifyContent = "spaceBetween";
  description.style.backgroundColor = "rgba(81, 81, 80, 0.6)";
  description.style.width = "25rem";
  description.style.height = "3rem";
  description.style.textAlign = "center";
  if (input.value === "") {
    description.textContent = "Mass is required";
    description.style.margin = "2rem auto";
    description.style.padding = "1rem";
    description.style.height = "1rem";
    description.style.fontSize = "1.2rem";
    document.querySelector(".planet").src = "";
  } else if (option.value === "none") {
    description.textContent = "You did not choose a planet yet";
    description.style.margin = "2rem auto";
    description.style.padding = "1rem";
    description.style.height = "auto";
    description.style.fontSize = "1.2rem";
    document.querySelector(".planet").src = "";
  } else if (option.value === "earth") {
    planet();
    document.querySelector(".planet").src = "img/earth.png";
    circle.textContent = `${input.value * 9.8} N`;
  } else if (option.value === "jupiter") {
    planet();
    document.querySelector(".planet").src = "img/jupiter.png";
    circle.textContent = `${input.value * 26.0} N`;
  } else if (option.value === "mars") {
    planet();
    document.querySelector(".planet").src = "img/mars.png";
    circle.textContent = `${input.value * 3.75} N`;
  } else if (option.value === "mercury") {
    planet();
    document.querySelector(".planet").src = "img/mercury.png";
    circle.textContent = `${input.value * 3.61} N`;
  } else if (option.value === "moon") {
    planet();
    document.querySelector(".planet").src = "img/moon.png";
    circle.textContent = `${input.value * 1.625} N`;
  } else if (option.value === "neptune") {
    planet();
    document.querySelector(".planet").src = "img/neptune.png";
    circle.textContent = `${input.value * 13.3} N`;
  } else if (option.value === "pluto") {
    planet();
    document.querySelector(".planet").src = "img/pluto.png";
    circle.textContent = `${input.value * 0.61} N`;
  } else if (option.value === "saturn") {
    planet();
    document.querySelector(".planet").src = "img/saturn.png";
    circle.textContent = `${input.value * 11.2} N`;
  } else if (option.value === "uranus") {
    planet();
    document.querySelector(".planet").src = "img/uranus.png";
    circle.textContent = `${input.value * 10.5} N`;
  } else {
    planet();
    document.querySelector(".planet").src = "img/venus.png";
    circle.textContent = `${input.value * 8.83} N`;
  }
}



const body = document.querySelector('body')
body.style.fontFamily =  "'Montserrat', sans-serif";

const heading =  document.createElement('div')
heading.className = 'heading'
heading.style.backgroundColor = '#f0f0f0'
heading.style.paddingBottom = '2rem'
heading.style.borderBottom = '2px solid gray'



const heading_text = document.createElement('h4')
heading_text.textContent = 'world countries data'
heading_text.className = 'heading_text'
heading_text.style.textAlign = 'center'
heading_text.style.color = ' #ffa606'
heading_text.style.marginTop = '1rem'
heading_text.style.fontSize = '2rem'
heading_text.style.textTransform = 'capitalize'


const heading_para = document.createElement('p')
heading_para.className = 'heading_para'
heading_para.textContent = `Currently, we have ${countries.length} countries`
heading_para.style.fontWeight = '600'
heading_para.style.textAlign = 'center'
heading_para.style.marginTop = '0.4rem'


const population = document.createElement('div')
population.className = 'population_div'
population.style.backgroundColor = 'white'
population.style.justifyContent = 'center'
population.style.textAlign = 'center'
population.style.padding = '1.2rem'
population.style.borderBottom = '2px solid gray'

//buttons
const buttonA = document.querySelector('.btn_a')
buttonA.style.marginRight = '0.6rem'
buttonA.style.padding = '0.5rem 0.8rem'
buttonA.style.border = 'none'
buttonA.style.backgroundColor = '#f2a93b'
buttonA.style.borderRadius = '3px'

const buttonB = document.querySelector('.btn_b')
buttonB.style.marginRight = '0.5rem'
buttonB.style.padding = '0.5rem 0.8rem'
buttonB.style.border = 'none'
buttonB.style.backgroundColor = '#f2a93b'
buttonB.style.borderRadius = '3px'

const populationText = document.createElement('p')
populationText.className = 'population_text'
populationText.textContent = '10 most spoken languages in the world'
populationText.style.fontWeight = '600'
populationText.style.marginTop = '0.5rem'

//output
const outputDiv = document.createElement('div')
outputDiv.className = 'output_div'
outputDiv.style.fontWeight = '600'
outputDiv.style.marginTop = '1rem'


let btnPopulation = document.getElementsByClassName('btn_population')[0]
btnPopulation.style.display = 'flex' 
btnPopulation.style.justifyContent = 'space-around' 
btnPopulation.style.marginTop = '1rem' 

const nameDiv = document.createElement('div')
const populationDiv = document.createElement('div')

let btnLanguage = document.getElementsByClassName('btn_language')[0]
btnLanguage.style.display = 'flex' 
btnLanguage.style.justifyContent = 'space-around' 
btnLanguage.style.marginTop = '1rem' 

const languageDiv = document.createElement('div')
const totalDiv = document.createElement('div')

buttonA.addEventListener('click', () => {
// let popu = document.createTextNode('10 most populated countries in the world')

let arr = [];
countries.sort(function(b, a) {
 arr = a.population - b.population
 return arr
})
let slice = countries.slice(0, 10)
slice.forEach((country) => {
	let itemP = document.createElement('p')
	itemP.className = 'item_p'
	itemP.style.paddingTop = '0.8rem' 
	let itemPText = document.createTextNode(`${country.name} `)
	itemP.style.marginLeft = '4rem'
itemP.appendChild(itemPText)
	nameDiv.append(itemP)
})


let arr_1 = [];
countries.sort(function(b, a) {
 arr_1 = a.population - b.population
 return arr_1
})
let slice_1 = countries.slice(0, 10)
slice_1.forEach((country) => {
	let itemP = document.createElement('p')
	itemP.className = 'item_p'
	itemP.style.paddingTop = '0.8rem' 
	let itemPText = document.createTextNode(`${country.population.toLocaleString('en-US')} `)
	itemP.style.marginLeft = '4rem'
itemP.appendChild(itemPText)
	populationDiv.append(itemP)
})

})



const lang = [
	{ data: 'English', status: '91' },
	{ data: 'French', status: '45' },
	{ data: 'Arabic', status: '25' },
	{ data: 'Spanish', status: '24' },
	{ data: 'Portuguese', status: '9' },
	{ data: 'Russian', status: '9' },
	{ data: 'Dutch', status: '8' },
	{ data: 'German', status: '7' },
	{ data: 'Chinese', status: '5' },
	{ data: 'Serbian', status: '4' },
  ];
  
  let counter = 0;
  for (const obj of lang) {
	if (obj.data === 'Spanish') counter++;
  }
  

buttonB.addEventListener('click', () => {


lang.forEach((item) => {
	let itemP = document.createElement('p')
	itemP.className = 'item_p'
	itemP.style.paddingTop = '0.8rem' 
	let itemPText = document.createTextNode(`${item.data} `)
	itemP.style.marginLeft = '4rem'
itemP.appendChild(itemPText)
	languageDiv.append(itemP)
})

lang.forEach((item) => {
	let itemP = document.createElement('p')
	itemP.className = 'item_p'
	itemP.style.paddingTop = '0.8rem' 
	let itemPText = document.createTextNode(`${item.status} `)
	itemP.style.marginLeft = '4rem'
itemP.appendChild(itemPText)
	totalDiv.append(itemP)
})

})
