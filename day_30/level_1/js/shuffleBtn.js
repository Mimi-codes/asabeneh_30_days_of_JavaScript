//This visualizes the total number of countries' population and languages in the world. When the shuffle button is clicked, it displays the top ten world countries' population and languages 


// import { countryPop } from "./main.js";
import { countries } from "./countries.js";
const shuffleBtn =  document.querySelector('.shuffle_btn')

const text_para = document.querySelector(".text_para");
text_para.textContent = ``;

//BUTTON
const buttons = document.createElement("div");
buttons.className = "buttons";

//OUTPUT DIV
const output_div = document.createElement("div");
output_div.className = "output_div";

//POPULATION
const population_btn = document.querySelector(".chart_btn_population");
const population_output_div = document.createElement("div");
const population = document.createElement("div");
population_output_div.className = "population_output_div";

//languages
const languages_btn = document.querySelector(".chart_btn_languages");
const language_output_div = document.createElement("div");
const language_name = document.createElement("div");
const chartOutputDiv = document.querySelector('.chart_output_div')

let arr = [];
countries.sort(function (b, a) {
  arr = a.population - b.population;
  return arr;
});

let slice = countries.slice(0, 10);
let pop = [];
for (let i = 0; i < slice.length; i++) {
  pop.push(slice[i].population);
}

let sum = 0;
for (let i = 0; i < pop.length; i++) {
  sum += pop[i];
}


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

export const shuffleOutput = () => {
shuffleBtn.addEventListener('click', () => {

    countries.slice(0, 10).map((country) => {
        text_para.textContent = `World Population`;
        let container = document.createElement("div");
        container.className = 'container'
                let country_names = document.createElement("p")
                country_names.className = "country_names"
                
        let charts_section = document.createElement("div");
        charts_section.className = 'charts_section'
       
        let country_charts = document.createElement("div");
        country_charts.className = "graph";
        let country_pop = document.createElement("p");
        
        country_pop.className = "population";
      
        country_names.textContent = country.name;
        country_pop.textContent = `${country.population.toLocaleString("en-US")} `;
      
        country_charts.style.width = `${Math.floor(
          (country.population / sum) * 100
        )}%`;
      
        // charts_section.style.width = `350px`;
        charts_section.appendChild(country_charts);
        container.append(country_names, charts_section, country_pop);
        population.append(container);
      });
      
      /*
      population_btn.addEventListener("click", (e) => {
        let click = e.type;
        if (e.type === click) {
          population_output_div.append(population);
          language_output_div.textContent = "";
          chartOutputDiv.append(population_output_div)
        }
      })
      */
   chartOutputDiv.append(population)
   
   //CHART_BTN_LANGUAGES
   const chart_btn_languages =  document.querySelector('.chart_btn_languages')

   lang.map((item) => {
       let container = document.createElement("div");
       container.className = 'container'

       let lang_names = document.createElement("p");
       lang_names.className = "lang_names";

       let charts_section = document.createElement("div");
       charts_section.className = 'charts_section'
  
       
       let lang_charts = document.createElement("div");
       lang_charts.className = "graph";

       let lang_pop = document.createElement("p");
       lang_names.textContent = `${item.data}`
       lang_pop.textContent = `${item.status} `;
       // country_charts.textContent = `${Math.floor(
         // (country.population / sum) * 100
       // )}%`;
       lang_charts.style.width = `${Math.floor(
         (item.status / total) * 100
       )}%`;

       charts_section.appendChild(lang_charts);
       container.append(lang_names, charts_section, lang_pop);
       language_name.append(container);
     });
     
     chart_btn_languages.addEventListener('click', (e) => {
         let check = e.type;
         if (e.type === check) {
           population.textContent = "";
           language_output_div.append(language_name);
        
     chartOutputDiv.append(language_name)
         }
     })
   

})
}

