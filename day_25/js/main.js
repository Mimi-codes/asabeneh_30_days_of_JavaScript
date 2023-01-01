import { countries } from './countries.js'

const body = document.querySelector('body')
body.style.fontFamily = "'Montserrat', sans-serif"
body.style.padding = 0
body.style.margin = 0
body.style.boxSizing = 'border-box'
body.style.backgroundColor = "#f0f0f0";

//HEADER
const header =  document.createElement('div')
header.className = 'header'
header.style.textAlign = 'center'
header.style.paddingBottom = "1rem";
header.style.borderBottom = "2px solid gray";


const header_title = document.createElement('p')
header_title.className = 'header_title'
header_title.textContent = `world countries data`
header_title.style.textTransform = 'capitalize'
header_title.style.color = " #ffa606";
header_title.style.marginTop = "1rem";
header_title.style.fontSize = "2rem";


const header_para = document.createElement('p')
header_para.className = 'header_para'
header_para.textContent = `Currently, we have ${countries.length} countries in the world`


//BUTTON
const button_div = document.createElement('div')
button_div.className = 'button_div'
button_div.style.paddingTop = "1rem";
button_div.style.textAlign = "center";
button_div.style.paddingBottom = "0.5rem";
button_div.style.backgroundColor = "white";
button_div.style.borderBottom = "2px solid gray"

const buttons = document.createElement('div')
buttons.className = 'buttons'

const text_para = document.querySelector('.text_para')

const population_btn = document.querySelector('.btn_population')
population_btn.style.marginRight = "0.6rem";
population_btn.style.padding = "0.5rem 0.8rem";
population_btn.style.border = "none";
population_btn.style.justifyContent = "center";
population_btn.style.backgroundColor = "#f2a93b";
population_btn.style.borderRadius = "3px";
population_btn.style.textTransform = 'uppercase'


const languages_btn = document.querySelector('.btn_languages')
languages_btn.style.marginRight = "0.6rem";
languages_btn.style.padding = "0.5rem 0.8rem";
languages_btn.style.border = "none";
languages_btn.style.backgroundColor = "#f2a93b";
languages_btn.style.borderRadius = "3px";
languages_btn.style.textTransform = 'uppercase'

//OUTPUT DIV
const output_div = document.createElement('div')
output_div.className = 'output_div'
// output_div.style.display = 'flex'

//POPULATION OUTPUT BUTTON
const population_output_div = document.createElement('div')
population_output_div.className = 'population_output_div'
population_output_div.style.display = 'flex'

const language_output_div = document.createElement('div')
language_output_div.className = 'language_output_div'
language_output_div.style.display = 'flex'

const country_name = document.createElement("div");
country_name.className = "country_name";
const country_population = document.createElement("div");
country_population.className = "country_population";

//LANGUAGE OUTPUT BUTTON
const language_name = document.createElement("div");
language_name.className = "language";
const language_total = document.createElement("div");
language_total.className = "language_total";

const lang = [
    { data: "English", status: "91" },
    { data: "French", status: "45" },
    { data: "Arabic", status: "25" },
    { data: "Spanish", status: "24" },
    { data: "Portuguese", status: "9" },
    { data: "Russian", status: "9" },
    { data: "Dutch", status: "8" },
    { data: "German", status: "7" },
    { data: "Chinese", status: "5" },
    { data: "Serbian", status: "4" },
  ];

let arr = [];
countries.sort(function (b, a) {
  arr = a.population - b.population;
  return arr;
});

let slice = countries.slice(0, 10);
slice.forEach((country) => {
  let itemP = document.createElement("p");
  itemP.className = "item_p";
  itemP.style.paddingTop = "0.8rem";
  let itemPText = document.createTextNode(`${country.name} `);
  itemP.style.marginLeft = "4rem";
  itemP.appendChild(itemPText);
  country_name.append(itemP);
});

let arr_1 = [];
countries.sort(function (b, a) {
  arr_1 = a.population - b.population;
  return arr_1;
});
let slice_1 = countries.slice(0, 10);
slice_1.forEach((country) => {
  let itemP = document.createElement("p");
  itemP.className = "item_p";
  itemP.style.paddingTop = "0.8rem";
  let itemPText = document.createTextNode(
    `${country.population.toLocaleString("en-US")} `
  );
  itemP.style.marginLeft = "4rem";
  itemP.appendChild(itemPText);
  country_population.append(itemP);
});


lang.forEach((item) => {
    let itemP = document.createElement("p");
    itemP.className = "item_p";
    itemP.style.paddingTop = "0.8rem";
    let itemPText = document.createTextNode(`${item.data} `);
    itemP.style.marginLeft = "4rem";
    itemP.appendChild(itemPText);
    language_name.append(itemP);
  });

  lang.forEach((item) => {
    let itemP = document.createElement("p");
    itemP.className = "item_p";
    itemP.style.paddingTop = "0.8rem";
    let itemPText = document.createTextNode(`${item.status} `);
    itemP.style.marginLeft = "4rem";
    itemP.appendChild(itemPText);
    language_total.append(itemP);
  });

population_btn.addEventListener('click', (e) => {
let click = e.type
if(e.type === click) {
    text_para.textContent = '10 most populated countries in the world'
    // console.log(text_para)
    // console.log(`${countries.length}`)
population_output_div.append(country_name, country_population)
language_output_div.textContent = ''
}
})


languages_btn.addEventListener('click', (e) => {
    let check = e.type
    if(e.type === check) {
        text_para.textContent = '10 most spoken languages in the world'
        // console.log(text_para)   
      population_output_div.textContent = ''
      language_output_div.append(language_name, language_total)
    }
  
    })
    


document.body.append(header, button_div, output_div)
header.append(header_title, header_para)
button_div.append(buttons, text_para)
buttons.append(population_btn, languages_btn)
output_div.append(population_output_div, language_output_div)

/*population_output_div.append(country_name,
country_population,
language_name,
language_total)
*/