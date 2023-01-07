const languages = [
    'javascript for everyone', 
    '30 days of python', 
    '30 days of javascript'
]

const technologies = [
    'react',
    'redux',
    'node',
    'python',
    'mongodb',
    'pandas',
    'numpy',
    'javascript'
]

const activities = [
    'Programmer',
    'Content Creator',
    'Motivational Speaker',
    'Educator',
    'Motivator'
]


// activity
const activity = document.querySelector(".activity");

function activity_text () {
    setTimeout(function () {
        activity.textContent = `${activities[0]}`;
        activity.style.marginLeft = "2rem";
    }, 0)
    setTimeout(function () {
        activity.style.marginLeft = "4rem";
    }, 2000)

    setTimeout(function () {
        activity.textContent = `${activities[1]}`;
    }, 3500)
    setTimeout(function () {
        activity.style.marginLeft = "2rem";
    }, 4000)

    setTimeout(function () {
        activity.style.marginLeft = "4rem";
    }, 5500)
    setTimeout(function () {
        activity.textContent = `${activities[2]}`;
    }, 6000)
    setTimeout(function () {
        activity.style.marginLeft = "3rem";
    }, 6500)
    setTimeout(function () {
        activity.textContent = `${activities[3]}`;
    }, 7000)

    setTimeout(function () {
        activity.style.marginLeft = "3rem";
    }, 7500)
    setTimeout(function () {
        activity.textContent = `${activities[4]}`;
    }, 8000)
    setTimeout(function () {
        activity.style.marginLeft = "3rem";
    }, 8500)
  }
  setInterval(activity_text, 9000);

  
// languages
  const lang_items = document.querySelector('.lang_items')
  const p = document.querySelector('.tech')
p.innerHTML = `The technologies I teach <span id="teach"><span>`
let year = document.querySelector("#teach");

languages.map((item) => {
  let lang = document.createElement("p");
  lang.className = 'lang_item'
  lang.style.textTransform = 'uppercase'
  lang.style.padding = '2.8rem 0.9rem'
  lang.style.border = '0.1px solid rgb(240, 235, 235)'
  lang.style.borderRadius = '5px'
  lang.textContent = `${item}`
  lang_items.append(lang)
})

function chameleon() {
    setTimeout(function() {
        teach.textContent = 'REACT'
        teach.style.fontSize = '2rem'
        teach.style.fontWeight = '600'
        teach.style.color = 'blue'
    }, 0)

    setTimeout(function() {
        teach.textContent = 'REDUX'
        teach.style.color = 'purple'
    }, 2000)

    setTimeout(function() {
        teach.textContent = 'NODE'
        teach.style.color = 'green'
    }, 4000)

    setTimeout(function() {
        teach.textContent = 'PYTHON'
        teach.style.color = 'rgb(21, 84, 87)'
    }, 6000)

    setTimeout(function() {
        teach.textContent = 'MONGODB'
        teach.style.color = 'green'
    }, 8000)

    setTimeout(function() {
        teach.textContent = 'PANDAS'
        teach.style.color = 'rgb(21, 84, 87)'
    }, 10000)

    setTimeout(function() {
        teach.textContent = 'NUMPY'
        teach.style.color = 'rgb(21, 84, 87)'
    }, 12000)

    setTimeout(function() {
        teach.textContent = 'JAVASCRIPT'
        teach.style.color = 'yellow'
    }, 14000)
}
setInterval(chameleon, 16000)

