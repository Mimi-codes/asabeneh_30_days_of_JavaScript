import { countries } from "./countries.js";

const body = document.querySelector("body");
body.style.fontFamily = "'Montserrat', sans-serif";
body.style.padding = 0;
body.style.margin = 0;
body.style.boxSizing = "border-box";
body.style.backgroundColor = "#f0f0f0";

//HEADER
const header = document.createElement("div");
header.className = "header";
header.style.textAlign = "center";
header.style.paddingBottom = "1rem";
header.style.borderBottom = "2px solid gray";

const header_title = document.createElement("p");
header_title.className = "header_title";
header_title.textContent = `world countries data`;
header_title.style.textTransform = "capitalize";
header_title.style.color = "#ffa606";
header_title.style.letterSpacing = "0.4rem";
header_title.style.marginTop = "2rem";
header_title.style.fontSize = "2rem";

const header_para = document.createElement("p");
header_para.className = "header_para";
header_para.textContent = `Currently, we have ${countries.length} countries in the world`;

//BUTTON
const button_div = document.createElement("div");
button_div.className = "button_div";
button_div.style.paddingTop = "1rem";
button_div.style.textAlign = "center";
button_div.style.paddingBottom = "0.5rem";
button_div.style.backgroundColor = "white";
button_div.style.borderBottom = "2px solid gray";

const buttons = document.createElement("div");
buttons.className = "buttons";

const text_para = document.querySelector(".text_para");

//OUTPUT DIV
const output_div = document.createElement("div");
output_div.className = "output_div";

//POPULATION
const population_btn = document.querySelector(".btn_population");
population_btn.style.marginRight = "0.6rem";
population_btn.style.padding = "0.5rem 0.8rem";
population_btn.style.border = "none";
population_btn.style.justifyContent = "center";
population_btn.style.backgroundColor = "#f2a93b"; 
population_btn.style.borderRadius = "3px";
population_btn.style.textTransform = "uppercase";
population_btn.style.cursor = "pointer";

//population output button
const population_output_div = document.createElement("div");
const population = document.createElement("div");
population_output_div.className = "population_output_div";

let arr = [];
countries.sort(function (b, a) {
  arr = a.population - b.population;
  return arr;
});

//total sum of population
let slice = countries.slice(0, 10);
let pop = [];
for (let i = 0; i < slice.length; i++) {
  pop.push(slice[i].population);
}

let sum = 0;
for (let i = 0; i < pop.length; i++) {
  sum += pop[i];
}
// console.log(sum);

countries.slice(0, 10).map((country) => {
  let container = document.createElement("div");
  container.style.display = "flex";
  container.style.alignItems = "center";
  container.style.justifyContent = "center";
  let country_names = document.createElement("p");
  country_names.style.flex = '0.1'
  let charts_section = document.createElement("div");
  charts_section.className = 'charts_section'
  charts_section.style.flex = '0.4'
  charts_section.style.marginLeft = '3rem'
  let country_charts = document.createElement("div");
  let country_popp = document.createElement("p");
  country_names.className = "country_names";
  country_charts.className = "graph";
  country_charts.style.borderRadius = '4px'
  country_charts.style.height = '0.8rem'
  country_popp.className = "population";

  country_names.textContent = country.name;
  country_popp.textContent = `${country.population.toLocaleString("en-US")} `;
  // country_charts.textContent = `${Math.floor(
    // (country.population / sum) * 100
  // )}%`;
  country_charts.style.width = `${Math.floor(
    (country.population / sum) * 100
  )}%`;

  charts_section.style.width = `350px`;
  charts_section.appendChild(country_charts);
  container.append(country_names, charts_section, country_popp);
  population.append(container);
});

population_btn.addEventListener("click", (e) => {
  let click = e.type;
  if (e.type === click) {
    text_para.textContent = "10 most populated countries in the world";
    population_output_div.append(population);
    language_output_div.textContent = "";
  }
});


//LANGUAGE
const lang = [
  { data: "English", status: 91 },
  { data: "French", status: 45 },
  { data: "Arabic", status: 25 },
  { data: "Spanish", status: 24 },
  { data: "Portuguese", status: 9 },
  { data: "Russian", status: 9 },
  { data: "Dutch", status: 8 },
  { data: "German", status: 7 },
  { data: "Chinese", status: 5 },
  { data: "Serbian", status: 4 },
];

const languages_btn = document.querySelector(".btn_languages");
languages_btn.style.marginRight = "0.6rem";
languages_btn.style.padding = "0.5rem 0.8rem";
languages_btn.style.border = "none";
languages_btn.style.backgroundColor = "#f2a93b";
languages_btn.style.borderRadius = "3px";
languages_btn.style.textTransform = "uppercase";
languages_btn.style.cursor = "pointer";

//language output button
const language_output_div = document.createElement("div");
language_output_div.className = "language_output_div";
language_output_div.style.justifyContent = "center";
language_output_div.style.alignItems = "center";

const language_name = document.createElement("div");
language_name.className = "language";
language_name.style.display = "flex";
language_name.style.flexDirection = "column";


//total sum of languages
let stat = []
for (let num of lang) {
stat.push(num.status)
}
// console.log(stat)
let total =  stat.reduce(function(a, b){
  return a + b;
}, 0);
// console.log(total)

lang.map((item) => {
  let container = document.createElement("div");
  container.style.display = "flex";
  container.style.alignItems = "center";
  container.style.justifyContent = "center";
  let lang_names = document.createElement("p");
  lang_names.style.flex = '0.1'
  let charts_section = document.createElement("div");
  charts_section.className = 'charts_section'
  charts_section.style.flex = '0.4'
  charts_section.style.marginLeft = '3rem'
  let lang_charts = document.createElement("div");
  let lang_popp = document.createElement("p");
  lang_names.className = "lang_names";
  lang_charts.className = "graph";
  lang_charts.style.borderRadius = '4px'
  lang_charts.style.height = '0.8rem'
  lang_popp.className = "lang";
  lang_names.textContent = `${item.data}`
  lang_popp.textContent = `${item.status} `;
  lang_popp.style.marginRight = '3rem'
  // country_charts.textContent = `${Math.floor(
    // (country.population / sum) * 100
  // )}%`;
  lang_charts.style.width = `${Math.floor(
    (item.status / total) * 100
  )}%`;

  charts_section.style.width = `350px`;
  charts_section.appendChild(lang_charts);
  container.append(lang_names, charts_section, lang_popp);
  language_name.append(container);
});

languages_btn.addEventListener("click", (e) => {
  let check = e.type;
  if (e.type === check) {
    text_para.textContent = "10 most spoken languages in the world";
    population_output_div.textContent = "";
    language_output_div.append(language_name);
  }
});


document.body.append(header, button_div, output_div);
header.append(header_title, header_para);
button_div.append(buttons, text_para);
buttons.append(population_btn, languages_btn);
output_div.append(population_output_div, language_output_div);

