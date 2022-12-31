import { countries } from "./countries.js";
// console.log(countries);

//BODY
const body = document.querySelector("body");
body.style.fontFamily = "'Montserrat', sans-serif";

//header
const header = document.createElement("div");
header.className = "header";
header.style.textAlign = "center";
header.style.backgroundColor = "#f0f0f0";
header.style.paddingBottom = "1rem";
header.style.borderBottom = "2px solid gray";

//header text
const heading_text = document.createElement("h4");
heading_text.className = "heading_text";
heading_text.style.color = " #ffa606";
heading_text.style.marginTop = "1rem";
heading_text.style.fontSize = "2rem";
heading_text.style.textTransform = "capitalize";
heading_text.textContent = "world countries data";

//heading_para
const heading_para = document.createElement("p");
heading_para.className = "heading_para";
heading_para.style.color = "";
heading_para.textContent = `Currently, we have ${countries.length} countries`;
heading_para.style.fontWeight = "600";
heading_para.style.marginTop = "0.4rem";

//button divs
const buttonDivs = document.createElement("div");
buttonDivs.style.paddingTop = "1rem";
buttonDivs.style.textAlign = "center";
buttonDivs.style.paddingBottom = "0.5rem";
buttonDivs.style.backgroundColor = "white";
buttonDivs.style.borderBottom = "2px solid gray";
const buttonDivs = document.createElement('div')
buttonDivs.style.paddingTop = '1rem'
buttonDivs.style.textAlign = 'center'
buttonDivs.style.paddingBottom = '0.5rem'
buttonDivs.style.backgroundColor = 'white'
buttonDivs.style.borderBottom = '2px solid gray'


//buttons
const btn_div = document.createElement("div");
btn_div.className = "btn_div";

const population_btn = document.querySelector(".btn_population");
population_btn.style.marginRight = "0.6rem";
population_btn.style.padding = "0.5rem 0.8rem";
population_btn.style.border = "none";
population_btn.style.justifyContent = "center";
population_btn.style.backgroundColor = "#f2a93b";
population_btn.style.borderRadius = "3px";

const language_btn = document.querySelector(".btn_language");
language_btn.style.marginRight = "0.6rem";
language_btn.style.padding = "0.5rem 0.8rem";
language_btn.style.border = "none";
language_btn.style.backgroundColor = "#f2a93b";
language_btn.style.borderRadius = "3px";

//output div
/*
const populationOutputDiv = document.createElement('div')
populationOutputDiv.className = 'output_div'
populationOutputDiv.style.fontWeight = '600'
populationOutputDiv.style.marginTop = '1rem'
populationOutputDiv.style.display = 'flex'
const languageOutputDiv = document.createElement('div')
languageOutputDiv.className = 'output_div'
languageOutputDiv.style.fontWeight = '600'
languageOutputDiv.style.marginTop = '1rem'
languageOutputDiv.style.display = 'flex'
*/

const outputDiv = document.createElement("div");
outputDiv.className = "output_div";
outputDiv.style.display = "flex";

//button text
const population_para = document.createElement("p");
population_para.style.paddingTop = "0.5rem";

//population button output
const country_name = document.createElement("div");
country_name.className = "country";
const country_population = document.createElement("div");
country_population.className = "country_population";
//language button output
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

population_btn.addEventListener("click", (e) => {
  let click = e.type;
  if (e.type === click) {
    population_para.textContent = "10 most populated countries in the world";
    // languageOutputDiv.textContent = ''
  }

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
});

language_btn.addEventListener("click", (e) => {
  let click = e.type;
  if (e.type === click) {
    population_para.textContent = "10 most spoken languages in the world";
  }

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
});

document.body.append(header, buttonDivs, outputDiv);
header.append(heading_text, heading_para);
buttonDivs.append(btn_div, population_para);
btn_div.append(population_btn, language_btn);
// populationOutputDiv.append(country_name, country_population)
// languageOutputDiv.append(language_name, language_total)
// btnLanguage.append(languageDiv, totalDiv)
outputDiv.append(
  country_name,
  country_population,
  language_name,
  language_total
);