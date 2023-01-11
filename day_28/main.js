const section = document.querySelector("section");
let f_name = document.querySelector('.f_name')
let l_name = document.querySelector('.l_name')
let countryInput = document.querySelector('.country')
let scoreInput = document.querySelector('.score')
const add_btn = document.querySelector('.add_btn')
const error_message = document.querySelector(".error_message");
  

let getDate = new Date();
let month = () => {
  let month = getDate.getMonth();
  if (month == 0) {
    month = "JAN";
  } else if (month == 1) {
    month = "FEB";
  } else if (month == 2) {
    month = "MAR";
  } else if (month == 3) {
    month = "APR";
  } else if (month == 4) {
    month = "MAY";
  } else if (month == 5) {
    month = "JUN";
  } else if (month == 6) {
    month = "JUL";
  } else if (month == 7) {
    month = "AUG";
  } else if (month == 8) {
    month = "SEPT";
  } else if (month == 9) {
    month = "OCT";
  } else if (month == 10) {
    month = "NOV";
  } else month = "DEC";

  return month;
};




const add = () => {
  const add = document.createElement("li");
  section.appendChild(add);
  add.className = 'add'
  const nameBox = document.createElement("div");
  add.appendChild(nameBox);
  const name = document.createElement("h5");
  const date = document.createElement("p");
  nameBox.appendChild(name);
  nameBox.appendChild(date);
  name.textContent = `${f_name.value} ${l_name.value}`;
  date.className = 'date'
  date.textContent = `${month()}, ${getDate.getDate()}, ${getDate.getFullYear()} ${
    getDate.getHours() + 1
  }:${getDate.getMinutes()}`

  const country = document.createElement("h5")
  country.className = 'top'
  add.appendChild(country)
  country.textContent = countryInput.value

  let score = document.createElement("h5")
  add.appendChild(score);
  score.textContent = scoreInput.value;
  score.className = 'top'

  let icons = document.createElement("div")
  add.appendChild(icons);
  icons.className = 'icons'
  let delBtn = document.createElement("div")
  delBtn.className = 'delBtn'
  delBtn.textContent = 'del'
  
  icons.appendChild(delBtn);

  let plus = document.createElement("div")
  plus.className = 'plus'
  plus.textContent = "+5"
  let minus = document.createElement("div")
  minus.className = 'minus'
  minus.textContent = "-5";
  icons.appendChild(plus);
  icons.appendChild(minus);
  delBtn.addEventListener("click", (e) => {
    add.parentNode.removeChild(add)
  });
}

add_btn.addEventListener('click', () => {

    if (
        f_name.value === '' ||
        l_name.value === '' ||
        countryInput.value === '' ||
        scoreInput.value === ''
      ) {
             error_message.textContent = "All fields are required"
      } else {
        error_message.textContent = ''
        add()
      }
    
      f_name.value = ''
      l_name.value = ''
      countryInput.value = ''
      scoreInput.value = ''
    
})

