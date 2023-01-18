import { countries } from "./countries.js";
// import { filter } from "./filter.js";
// console.log(countries[0])

const body = document.querySelector("body");
body.style.fontFamily = "'Montserrat', sans-serif";

//header
const countryNum = document.querySelector('.country_num')
countryNum.textContent = `Currently, we have ${countries.length} countries`

const searchItem = document.querySelector('.search_item')
searchItem.textContent = ``

//search input
const searchInput = document.querySelector('.search_input')

//error message
const errorMessage = document.querySelector('.error_message')
errorMessage.textContent = ''
//buttons
const nameBtn = document.querySelector('.name_btn')
const capitalBtn = document.querySelector('.capital_btn')
const populationBtn = document.querySelector('.population_btn')
const shuffleBtn = document.querySelector('.shuffle_btn')

//output
const outputDiv = document.querySelector('.output_div')

const outputA = document.createElement("div");
outputA.className = "output_a";

const outputB = document.createElement("div");
outputB.className = "output_b";

const outputC = document.createElement("div");
outputC.className = "output_c";

const outputD = document.createElement("div");
outputD.className = "output_d";

const outputE = document.createElement("div");
outputE.className = "output_e";

const outputF = document.createElement("div");
outputF.className = "output_f";

const outputG = document.createElement("div");
outputG.className = "output_g";

const outputH = document.createElement("div");
outputH.className = "output_h";

const outputI = document.createElement("div");
outputI.className = "output_i";

const outputJ = document.createElement("div");
outputJ.className = "output_j";

const outputK = document.createElement("div");
outputK.className = "output_k";

const outputL = document.createElement("div");
outputL.className = "output_l";

const outputM = document.createElement("div");
outputM.className = "output_m";

const outputN = document.createElement("div");
outputN.className = "output_n";

const outputO = document.createElement("div");
outputO.className = "output_o";

const outputP = document.createElement("div");
outputP.className = "output_p";

const outputQ = document.createElement("div");
outputQ.className = "output_q";

const outputR = document.createElement("div");
outputR.className = "output_r";

const outputS = document.createElement("div");
outputS.className = "output_s";

const outputT = document.createElement("div");
outputT.className = "output_t";

const outputU = document.createElement("div");
outputU.className = "output_u";

const outputV = document.createElement("div");
outputV.className = "output_v";

const outputW = document.createElement("div");
outputW.className = "output_w";

const outputX = document.createElement("div");
outputX.className = "output_x";

const outputY = document.createElement("div");
outputY.className = "output_y";

const outputZ = document.createElement("div");
outputZ.className = "output_z";

outputDiv.append(
  outputA,
  outputB,
  outputC,
  outputD,
  outputE,
  outputF,
  outputG,
  outputH,
  outputI,
  outputJ,
  outputK,
  outputL,
  outputL,
  outputM,
  outputN,
  outputO,
  outputP,
  outputQ,
  outputR,
  outputS,
  outputT,
  outputU,
  outputV,
  outputW,
  outputX,
  outputY,
  outputZ
  )


  //Name output
nameBtn.addEventListener('click', () => {
    let input = searchInput.value
    if(input === '') {
        errorMessage.textContent = `Enter a valid data`
    } 
    else if (input === 'A' || input === 'a') {
            let startA = countries.filter(item => item.name.startsWith('A'));
            for(let i = 0; i < startA.length; i++) {
              searchItem.textContent = `${startA.length} countries satisfied the search criteria`
              let  aArray = document.createElement("p");
              aArray.className = "countries_output";

              let name = startA[i].name
              let name_text = document.createElement("p");
              name_text.className = "name_text";
              name_text.textContent = `${name}`
              
              let capital = startA[i].capital
              let  capital_text = document.createElement("p");
              capital_text.className = "capital_text";
              capital_text.textContent = `Capital: ${capital}`

              let languages = startA[i].languages
              let  languages_text = document.createElement("p");
              languages_text.className = "languages_text";
              languages_text.textContent = `Languages: ${languages}`

              let population = startA[i].population
              let  population_text = document.createElement("p");
              population_text.className = "population_text";
              population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

                aArray.append(name_text, capital_text, languages_text, population_text)
                outputA.append(aArray)
        }        
        errorMessage.textContent = ``
        outputB.textContent = "";
    outputC.textContent = "";
    outputD.textContent = "";
    outputE.textContent = "";
    outputF.textContent = "";
    outputG.textContent = "";
    outputH.textContent = "";
    outputI.textContent = "";
    outputJ.textContent = "";
    outputK.textContent = "";
    outputL.textContent = "";
    outputM.textContent = "";
    outputN.textContent = "";
    outputO.textContent = "";
    outputP.textContent = "";
    outputQ.textContent = "";
    outputR.textContent = "";
    outputS.textContent = "";
    outputT.textContent = "";
    outputU.textContent = "";
    outputV.textContent = "";
    outputW.textContent = "";
    outputX.textContent = "";
    outputY.textContent = "";
    outputZ.textContent = "";
        }
        else if (input === 'B' || input === 'b') {
          let startB = countries.filter(item => item.name.startsWith('B'));
          for(let i = 0; i < startB.length; i++) {
            searchItem.textContent = `${startB.length} countries satisfied the search criteria`
            let  aArray = document.createElement("p");
            aArray.className = "countries_output";

            let name = startB[i].name
            let name_text = document.createElement("p");
            name_text.className = "name_text";
            name_text.textContent = `${name}`
            
            let capital = startB[i].capital
            let  capital_text = document.createElement("p");
            capital_text.className = "capital_text";
            capital_text.textContent = `Capital: ${capital}`

            let languages = startB[i].languages
            let  languages_text = document.createElement("p");
            languages_text.className = "languages_text";
            languages_text.textContent = `Languages: ${languages}`

            let population = startB[i].population
            let  population_text = document.createElement("p");
            population_text.className = "population_text";
            population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;
  
              aArray.append(name_text, capital_text, languages_text, population_text)
              outputB.append(aArray)
      }
      errorMessage.textContent = ``
      outputA.textContent = "";
      outputC.textContent = "";
      outputD.textContent = "";
      outputE.textContent = "";
      outputF.textContent = "";
      outputG.textContent = "";
      outputH.textContent = "";
      outputI.textContent = "";
      outputJ.textContent = "";
      outputK.textContent = "";
      outputL.textContent = "";
      outputM.textContent = "";
      outputN.textContent = "";
      outputO.textContent = "";
      outputP.textContent = "";
      outputQ.textContent = "";
      outputR.textContent = "";
      outputS.textContent = "";
      outputT.textContent = "";
      outputU.textContent = "";
      outputV.textContent = "";
      outputW.textContent = "";
      outputX.textContent = "";
      outputY.textContent = "";
      outputZ.textContent = "";
    } 
    else if (input === 'C' || input === 'c') {
      let startC = countries.filter(item => item.name.startsWith('C'));
      for(let i = 0; i < startC.length; i++) {
        searchItem.textContent = `${startC.length} countries satisfied the search criteria`
        let  aArray = document.createElement("p");
        aArray.className = "countries_output";

        let name = startC[i].name
        let name_text = document.createElement("p");
        name_text.className = "name_text";
        name_text.textContent = `${name}`
        
        let capital = startC[i].capital
        let  capital_text = document.createElement("p");
        capital_text.className = "capital_text";
        capital_text.textContent = `Capital: ${capital}`

        let languages = startC[i].languages
        let  languages_text = document.createElement("p");
        languages_text.className = "languages_text";
        languages_text.textContent = `Languages: ${languages}`

        let population = startC[i].population
        let  population_text = document.createElement("p");
        population_text.className = "population_text";
        population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

          aArray.append(name_text, capital_text, languages_text, population_text)
          outputC.append(aArray)
  }
  errorMessage.textContent = ``
    outputA.textContent = "";
    outputB.textContent = "";
    outputD.textContent = "";
    outputE.textContent = "";
    outputF.textContent = "";
    outputG.textContent = "";
    outputH.textContent = "";
    outputI.textContent = "";
    outputJ.textContent = "";
    outputK.textContent = "";
    outputL.textContent = "";
    outputM.textContent = "";
    outputN.textContent = "";
    outputO.textContent = "";
    outputP.textContent = "";
    outputQ.textContent = "";
    outputR.textContent = "";
    outputS.textContent = "";
    outputT.textContent = "";
    outputU.textContent = "";
    outputV.textContent = "";
    outputW.textContent = "";
    outputX.textContent = "";
    outputY.textContent = "";
    outputZ.textContent = "";
  } 
  else if (input === 'D' || input === 'd') {
    let startD = countries.filter(item => item.name.startsWith('D'));
    for(let i = 0; i < startD.length; i++) {
      searchItem.textContent = `${startD.length} countries satisfied the search criteria`
      let  aArray = document.createElement("p");
      aArray.className = "countries_output";

      let name = startD[i].name
      let name_text = document.createElement("p");
      name_text.className = "name_text";
      name_text.textContent = `${name}`
      
      let capital = startD[i].capital
      let  capital_text = document.createElement("p");
      capital_text.className = "capital_text";
      capital_text.textContent = `Capital: ${capital}`

      let languages = startD[i].languages
      let  languages_text = document.createElement("p");
      languages_text.className = "languages_text";
      languages_text.textContent = `Languages: ${languages}`

      let population = startD[i].population
      let  population_text = document.createElement("p");
      population_text.className = "population_text";
      population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

        aArray.append(name_text, capital_text, languages_text, population_text)
        outputD.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
outputB.textContent = "";
outputC.textContent = "";
outputE.textContent = "";
outputF.textContent = "";
outputG.textContent = "";
outputH.textContent = "";
outputI.textContent = "";
outputJ.textContent = "";
outputK.textContent = "";
outputL.textContent = "";
outputM.textContent = "";
outputN.textContent = "";
outputO.textContent = "";
outputP.textContent = "";
outputQ.textContent = "";
outputR.textContent = "";
outputS.textContent = "";
outputT.textContent = "";
outputU.textContent = "";
outputV.textContent = "";
outputW.textContent = "";
outputX.textContent = "";
outputY.textContent = "";
outputZ.textContent = "";
  }
  else if (input === 'E' || input === 'e') {
    let startE = countries.filter(item => item.name.startsWith('E'));
    for(let i = 0; i < startE.length; i++) {
      searchItem.textContent = `${startE.length} countries satisfied the search criteria`
      let  aArray = document.createElement("p");
      aArray.className = "countries_output";

      let name = startE[i].name
      let name_text = document.createElement("p");
      name_text.className = "name_text";
      name_text.textContent = `${name}`
      
      let capital = startE[i].capital
      let  capital_text = document.createElement("p");
      capital_text.className = "capital_text";
      capital_text.textContent = `Capital: ${capital}`

      let languages = startE[i].languages
      let  languages_text = document.createElement("p");
      languages_text.className = "languages_text";
      languages_text.textContent = `Languages: ${languages}`

      let population = startE[i].population
      let  population_text = document.createElement("p");
      population_text.className = "population_text";
      population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

        aArray.append(name_text, capital_text, languages_text, population_text)
        outputE.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
outputB.textContent = "";
outputC.textContent = "";
outputD.textContent = "";
outputF.textContent = "";
outputG.textContent = "";
outputH.textContent = "";
outputI.textContent = "";
outputJ.textContent = "";
outputK.textContent = "";
outputL.textContent = "";
outputM.textContent = "";
outputN.textContent = "";
outputO.textContent = "";
outputP.textContent = "";
outputQ.textContent = "";
outputR.textContent = "";
outputS.textContent = "";
outputT.textContent = "";
outputU.textContent = "";
outputV.textContent = "";
outputW.textContent = "";
outputX.textContent = "";
outputY.textContent = "";
outputZ.textContent = "";
  }
  else if (input === 'F' || input === 'f') {
    let startF = countries.filter(item => item.name.startsWith('F'));
    for(let i = 0; i < startF.length; i++) {
      searchItem.textContent = `${startF.length} countries satisfied the search criteria`
      let  aArray = document.createElement("p");
      aArray.className = "countries_output";

      let name = startF[i].name
      let name_text = document.createElement("p");
      name_text.className = "name_text";
      name_text.textContent = `${name}`
      
      let capital = startF[i].capital
      let  capital_text = document.createElement("p");
      capital_text.className = "capital_text";
      capital_text.textContent = `Capital: ${capital}`

      let languages = startF[i].languages
      let  languages_text = document.createElement("p");
      languages_text.className = "languages_text";
      languages_text.textContent = `Languages: ${languages}`

      let population = startF[i].population
      let  population_text = document.createElement("p");
      population_text.className = "population_text";
      population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

        aArray.append(name_text, capital_text, languages_text, population_text)
        outputF.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
outputB.textContent = "";
outputC.textContent = "";
outputD.textContent = "";
outputE.textContent = "";
outputG.textContent = "";
outputH.textContent = "";
outputI.textContent = "";
outputJ.textContent = "";
outputK.textContent = "";
outputL.textContent = "";
outputM.textContent = "";
outputN.textContent = "";
outputO.textContent = "";
outputP.textContent = "";
outputQ.textContent = "";
outputR.textContent = "";
outputS.textContent = "";
outputT.textContent = "";
outputU.textContent = "";
outputV.textContent = "";
outputW.textContent = "";
outputX.textContent = "";
outputY.textContent = "";
outputZ.textContent = "";
  }
  else if (input === 'G' || input === 'g') {
    let startG = countries.filter(item => item.name.startsWith('G'));
    for(let i = 0; i < startG.length; i++) {
      searchItem.textContent = `${startG.length} countries satisfied the search criteria`
      let  aArray = document.createElement("p");
      aArray.className = "countries_output";

      let name = startG[i].name
      let name_text = document.createElement("p");
      name_text.className = "name_text";
      name_text.textContent = `${name}`
      
      let capital = startG[i].capital
      let  capital_text = document.createElement("p");
      capital_text.className = "capital_text";
      capital_text.textContent = `Capital: ${capital}`

      let languages = startG[i].languages
      let  languages_text = document.createElement("p");
      languages_text.className = "languages_text";
      languages_text.textContent = `Languages: ${languages}`

      let population = startG[i].population
      let  population_text = document.createElement("p");
      population_text.className = "population_text";
      population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

        aArray.append(name_text, capital_text, languages_text, population_text)
        outputG.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
    outputB.textContent = "";
    outputC.textContent = "";
    outputD.textContent = "";
    outputE.textContent = "";
    outputF.textContent = "";
    outputH.textContent = "";
    outputI.textContent = "";
    outputJ.textContent = "";
    outputK.textContent = "";
    outputL.textContent = "";
    outputM.textContent = "";
    outputN.textContent = "";
    outputO.textContent = "";
    outputP.textContent = "";
    outputQ.textContent = "";
    outputR.textContent = "";
    outputS.textContent = "";
    outputT.textContent = "";
    outputU.textContent = "";
    outputV.textContent = "";
    outputW.textContent = "";
    outputX.textContent = "";
    outputY.textContent = "";
    outputZ.textContent = "";
  }
  else if (input === 'H' || input === 'h') {
    let startH = countries.filter(item => item.name.startsWith('H'));
    for(let i = 0; i < startH.length; i++) {
      searchItem.textContent = `${startH.length} countries satisfied the search criteria`
      let  aArray = document.createElement("p");
      aArray.className = "countries_output";

      let name = startH[i].name
      let name_text = document.createElement("p");
      name_text.className = "name_text";
      name_text.textContent = `${name}`
      
      let capital = startH[i].capital
      let  capital_text = document.createElement("p");
      capital_text.className = "capital_text";
      capital_text.textContent = `Capital: ${capital}`

      let languages = startH[i].languages
      let  languages_text = document.createElement("p");
      languages_text.className = "languages_text";
      languages_text.textContent = `Languages: ${languages}`

      let population = startH[i].population
      let  population_text = document.createElement("p");
      population_text.className = "population_text";
      population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

        aArray.append(name_text, capital_text, languages_text, population_text)
        outputH.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
    outputB.textContent = "";
    outputC.textContent = "";
    outputD.textContent = "";
    outputE.textContent = "";
    outputF.textContent = "";
    outputG.textContent = "";
    outputI.textContent = "";
    outputJ.textContent = "";
    outputK.textContent = "";
    outputL.textContent = "";
    outputM.textContent = "";
    outputN.textContent = "";
    outputO.textContent = "";
    outputP.textContent = "";
    outputQ.textContent = "";
    outputR.textContent = "";
    outputS.textContent = "";
    outputT.textContent = "";
    outputU.textContent = "";
    outputV.textContent = "";
    outputW.textContent = "";
    outputX.textContent = "";
    outputY.textContent = "";
    outputZ.textContent = "";

  }
  else if (input === 'I' || input === 'i') {
    let startI = countries.filter(item => item.name.startsWith('I'));
    for(let i = 0; i < startI.length; i++) {
      searchItem.textContent = `${startI.length} countries satisfied the search criteria`
      let  aArray = document.createElement("p");
      aArray.className = "countries_output";

      let name = startI[i].name
      let name_text = document.createElement("p");
      name_text.className = "name_text";
      name_text.textContent = `${name}`
      
      let capital = startI[i].capital
      let  capital_text = document.createElement("p");
      capital_text.className = "capital_text";
      capital_text.textContent = `Capital: ${capital}`

      let languages = startI[i].languages
      let  languages_text = document.createElement("p");
      languages_text.className = "languages_text";
      languages_text.textContent = `Languages: ${languages}`

      let population = startI[i].population
      let  population_text = document.createElement("p");
      population_text.className = "population_text";
      population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

        aArray.append(name_text, capital_text, languages_text, population_text)
        outputI.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
    outputB.textContent = "";
    outputC.textContent = "";
    outputD.textContent = "";
    outputE.textContent = "";
    outputF.textContent = "";
    outputG.textContent = "";
    outputH.textContent = "";
    outputJ.textContent = "";
    outputK.textContent = "";
    outputL.textContent = "";
    outputM.textContent = "";
    outputN.textContent = "";
    outputO.textContent = "";
    outputP.textContent = "";
    outputQ.textContent = "";
    outputR.textContent = "";
    outputS.textContent = "";
    outputT.textContent = "";
    outputU.textContent = "";
    outputV.textContent = "";
    outputW.textContent = "";
    outputX.textContent = "";
    outputY.textContent = "";
    outputZ.textContent = "";
  }
  else if (input === 'J' || input === 'j') {
    let startJ = countries.filter(item => item.name.startsWith('J'));
    for(let i = 0; i < startJ.length; i++) {
      searchItem.textContent = `${startJ.length} countries satisfied the search criteria`
      let  aArray = document.createElement("p");
      aArray.className = "countries_output";

      let name = startJ[i].name
      let name_text = document.createElement("p");
      name_text.className = "name_text";
      name_text.textContent = `${name}`
      
      let capital = startJ[i].capital
      let  capital_text = document.createElement("p");
      capital_text.className = "capital_text";
      capital_text.textContent = `Capital: ${capital}`

      let languages = startJ[i].languages
      let  languages_text = document.createElement("p");
      languages_text.className = "languages_text";
      languages_text.textContent = `Languages: ${languages}`

      let population = startJ[i].population
      let  population_text = document.createElement("p");
      population_text.className = "population_text";
      population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

        aArray.append(name_text, capital_text, languages_text, population_text)
        outputJ.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
    outputB.textContent = "";
    outputC.textContent = "";
    outputD.textContent = "";
    outputE.textContent = "";
    outputF.textContent = "";
    outputG.textContent = "";
    outputH.textContent = "";
    outputI.textContent = "";
    outputK.textContent = "";
    outputL.textContent = "";
    outputM.textContent = "";
    outputN.textContent = "";
    outputO.textContent = "";
    outputP.textContent = "";
    outputQ.textContent = "";
    outputR.textContent = "";
    outputS.textContent = "";
    outputT.textContent = "";
    outputU.textContent = "";
    outputV.textContent = "";
    outputW.textContent = "";
    outputX.textContent = "";
    outputY.textContent = "";
    outputZ.textContent = "";
  }
  else if (input === 'K' || input === 'k') {
    let startK = countries.filter(item => item.name.startsWith('K'));
    for(let i = 0; i < startK.length; i++) {
      searchItem.textContent = `${startK.length} countries satisfied the search criteria`
      let  aArray = document.createElement("p");
      aArray.className = "countries_output";

      let name = startK[i].name
      let name_text = document.createElement("p");
      name_text.className = "name_text";
      name_text.textContent = `${name}`
      
      let capital = startK[i].capital
      let  capital_text = document.createElement("p");
      capital_text.className = "capital_text";
      capital_text.textContent = `Capital: ${capital}`

      let languages = startK[i].languages
      let  languages_text = document.createElement("p");
      languages_text.className = "languages_text";
      languages_text.textContent = `Languages: ${languages}`

      let population = startK[i].population
      let  population_text = document.createElement("p");
      population_text.className = "population_text";
      population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

        aArray.append(name_text, capital_text, languages_text, population_text)
        outputK.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
    outputB.textContent = "";
    outputC.textContent = "";
    outputD.textContent = "";
    outputE.textContent = "";
    outputF.textContent = "";
    outputG.textContent = "";
    outputH.textContent = "";
    outputI.textContent = "";
    outputJ.textContent = "";
    outputL.textContent = "";
    outputM.textContent = "";
    outputN.textContent = "";
    outputO.textContent = "";
    outputP.textContent = "";
    outputQ.textContent = "";
    outputR.textContent = "";
    outputS.textContent = "";
    outputT.textContent = "";
    outputU.textContent = "";
    outputV.textContent = "";
    outputW.textContent = "";
    outputX.textContent = "";
    outputY.textContent = "";
    outputZ.textContent = "";

  }
  else if (input === 'L' || input === 'l') {
    let startL = countries.filter(item => item.name.startsWith('L'));
    for(let i = 0; i < startL.length; i++) {
      searchItem.textContent = `${startL.length} countries satisfied the search criteria`
      let  aArray = document.createElement("p");
      aArray.className = "countries_output";

      let name = startL[i].name
      let name_text = document.createElement("p");
      name_text.className = "name_text";
      name_text.textContent = `${name}`
      
      let capital = startL[i].capital
      let  capital_text = document.createElement("p");
      capital_text.className = "capital_text";
      capital_text.textContent = `Capital: ${capital}`

      let languages = startL[i].languages
      let  languages_text = document.createElement("p");
      languages_text.className = "languages_text";
      languages_text.textContent = `Languages: ${languages}`

      let population = startL[i].population
      let  population_text = document.createElement("p");
      population_text.className = "population_text";
      population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

        aArray.append(name_text, capital_text, languages_text, population_text)
        outputL.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
    outputB.textContent = "";
    outputC.textContent = "";
    outputD.textContent = "";
    outputE.textContent = "";
    outputF.textContent = "";
    outputG.textContent = "";
    outputH.textContent = "";
    outputI.textContent = "";
    outputJ.textContent = "";
    outputK.textContent = "";
    outputM.textContent = "";
    outputN.textContent = "";
    outputO.textContent = "";
    outputP.textContent = "";
    outputQ.textContent = "";
    outputR.textContent = "";
    outputS.textContent = "";
    outputT.textContent = "";
    outputU.textContent = "";
    outputV.textContent = "";
    outputW.textContent = "";
    outputX.textContent = "";
    outputY.textContent = "";
    outputZ.textContent = "";
  }
  else if (input === 'M' || input === 'm') {
    let startM = countries.filter(item => item.name.startsWith('M'));
    for(let i = 0; i < startM.length; i++) {
      searchItem.textContent = `${startM.length} countries satisfied the search criteria`
      let  aArray = document.createElement("p");
      aArray.className = "countries_output";

      let name = startM[i].name
      let name_text = document.createElement("p");
      name_text.className = "name_text";
      name_text.textContent = `${name}`
      
      let capital = startM[i].capital
      let  capital_text = document.createElement("p");
      capital_text.className = "capital_text";
      capital_text.textContent = `Capital: ${capital}`

      let languages = startM[i].languages
      let  languages_text = document.createElement("p");
      languages_text.className = "languages_text";
      languages_text.textContent = `Languages: ${languages}`

      let population = startM[i].population
      let  population_text = document.createElement("p");
      population_text.className = "population_text";
      population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

        aArray.append(name_text, capital_text, languages_text, population_text)
        outputM.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
outputB.textContent = "";
outputC.textContent = "";
outputD.textContent = "";
outputE.textContent = "";
outputF.textContent = "";
outputG.textContent = "";
outputH.textContent = "";
outputI.textContent = "";
outputJ.textContent = "";
outputK.textContent = "";
outputL.textContent = "";
outputN.textContent = "";
outputO.textContent = "";
outputP.textContent = "";
outputQ.textContent = "";
outputR.textContent = "";
outputS.textContent = "";
outputT.textContent = "";
outputU.textContent = "";
outputV.textContent = "";
outputW.textContent = "";
outputX.textContent = "";
outputY.textContent = "";
outputZ.textContent = "";
} 
else if (input === "N" || input === "n") {
  let startN = countries.filter(item => item.name.startsWith('N'));
  for (let i = 0; i < startN.length; i++) {
  let startN = countries.filter(item => item.name.startsWith('N'));
  for(let i = 0; i < startN.length; i++) {
    searchItem.textContent = `${startN.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startN[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startN[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startN[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startN[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputN.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
outputB.textContent = "";
outputC.textContent = "";
outputD.textContent = "";
outputE.textContent = "";
outputF.textContent = "";
outputG.textContent = "";
outputH.textContent = "";
outputI.textContent = "";
outputJ.textContent = "";
outputK.textContent = "";
outputL.textContent = "";
outputM.textContent = "";
outputO.textContent = "";
outputP.textContent = "";
outputQ.textContent = "";
outputR.textContent = "";
outputS.textContent = "";
outputT.textContent = "";
outputU.textContent = "";
outputV.textContent = "";
outputW.textContent = "";
outputX.textContent = "";
outputY.textContent = "";
outputZ.textContent = "";
}
}
else if (input === "O" || input === "o") {
  let startO = countries.filter(item => item.name.startsWith('O'));
  for(let i = 0; i < startO.length; i++) {
    searchItem.textContent = `${startO.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startO[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startO[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startO[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startO[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputO.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
outputB.textContent = "";
outputC.textContent = "";
outputD.textContent = "";
outputE.textContent = "";
outputF.textContent = "";
outputG.textContent = "";
outputH.textContent = "";
outputI.textContent = "";
outputJ.textContent = "";
outputK.textContent = "";
outputL.textContent = "";
outputM.textContent = "";
outputN.textContent = "";
outputP.textContent = "";
outputQ.textContent = "";
outputR.textContent = "";
outputS.textContent = "";
outputT.textContent = "";
outputU.textContent = "";
outputV.textContent = "";
outputW.textContent = "";
outputX.textContent = "";
outputY.textContent = "";
outputZ.textContent = "";
  }
  else if (input === 'P' || input === 'p') {
    let startP = countries.filter(item => item.name.startsWith('P'));
    for(let i = 0; i < startP.length; i++) {
      searchItem.textContent = `${startP.length} countries satisfied the search criteria`
      let  aArray = document.createElement("p");
      aArray.className = "countries_output";

      let name = startP[i].name
      let name_text = document.createElement("p");
      name_text.className = "name_text";
      name_text.textContent = `${name}`
      
      let capital = startP[i].capital
      let  capital_text = document.createElement("p");
      capital_text.className = "capital_text";
      capital_text.textContent = `Capital: ${capital}`

      let languages = startP[i].languages
      let  languages_text = document.createElement("p");
      languages_text.className = "languages_text";
      languages_text.textContent = `Languages: ${languages}`

      let population = startP[i].population
      let  population_text = document.createElement("p");
      population_text.className = "population_text";
      population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

        aArray.append(name_text, capital_text, languages_text, population_text)
        outputP.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
    outputB.textContent = "";
    outputC.textContent = "";
    outputD.textContent = "";
    outputE.textContent = "";
    outputF.textContent = "";
    outputG.textContent = "";
    outputH.textContent = "";
    outputI.textContent = "";
    outputJ.textContent = "";
    outputK.textContent = "";
    outputL.textContent = "";
    outputM.textContent = "";
    outputN.textContent = "";
    outputO.textContent = "";
    outputQ.textContent = "";
    outputR.textContent = "";
    outputS.textContent = "";
    outputT.textContent = "";
    outputU.textContent = "";
    outputV.textContent = "";
    outputW.textContent = "";
    outputX.textContent = "";
    outputY.textContent = "";
    outputZ.textContent = "";
  }
  else if (input === 'Q' || input === 'q') {
    let startQ = countries.filter(item => item.name.startsWith('Q'));
    for(let i = 0; i < startQ.length; i++) {
      searchItem.textContent = `${startQ.length} countries satisfied the search criteria`
      let  aArray = document.createElement("p");
      aArray.className = "countries_output";

      let name = startQ[i].name
      let name_text = document.createElement("p");
      name_text.className = "name_text";
      name_text.textContent = `${name}`
      
      let capital = startQ[i].capital
      let  capital_text = document.createElement("p");
      capital_text.className = "capital_text";
      capital_text.textContent = `Capital: ${capital}`

      let languages = startQ[i].languages
      let  languages_text = document.createElement("p");
      languages_text.className = "languages_text";
      languages_text.textContent = `Languages: ${languages}`

      let population = startQ[i].population
      let  population_text = document.createElement("p");
      population_text.className = "population_text";
      population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

        aArray.append(name_text, capital_text, languages_text, population_text)
        outputQ.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
    outputB.textContent = "";
    outputC.textContent = "";
    outputD.textContent = "";
    outputE.textContent = "";
    outputF.textContent = "";
    outputG.textContent = "";
    outputH.textContent = "";
    outputI.textContent = "";
    outputJ.textContent = "";
    outputK.textContent = "";
    outputL.textContent = "";
    outputM.textContent = "";
    outputN.textContent = "";
    outputO.textContent = "";
    outputP.textContent = "";
    outputR.textContent = "";
    outputS.textContent = "";
    outputT.textContent = "";
    outputU.textContent = "";
    outputV.textContent = "";
    outputW.textContent = "";
    outputX.textContent = "";
    outputY.textContent = "";
    outputZ.textContent = "";
  }
  else if (input === 'R' || input === 'r') {
    let startR = countries.filter(item => item.name.startsWith('R'));
    for(let i = 0; i < startR.length; i++) {
      searchItem.textContent = `${startR.length} countries satisfied the search criteria`
      let  aArray = document.createElement("p");
      aArray.className = "countries_output";

      let name = startR[i].name
      let name_text = document.createElement("p");
      name_text.className = "name_text";
      name_text.textContent = `${name}`
      
      let capital = startR[i].capital
      let  capital_text = document.createElement("p");
      capital_text.className = "capital_text";
      capital_text.textContent = `Capital: ${capital}`

      let languages = startR[i].languages
      let  languages_text = document.createElement("p");
      languages_text.className = "languages_text";
      languages_text.textContent = `Languages: ${languages}`

      let population = startR[i].population
      let  population_text = document.createElement("p");
      population_text.className = "population_text";
      population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

        aArray.append(name_text, capital_text, languages_text, population_text)
        outputR.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
outputB.textContent = "";
outputC.textContent = "";
outputD.textContent = "";
outputE.textContent = "";
outputF.textContent = "";
outputG.textContent = "";
outputH.textContent = "";
outputI.textContent = "";
outputJ.textContent = "";
outputK.textContent = "";
outputL.textContent = "";
outputM.textContent = "";
outputN.textContent = "";
outputO.textContent = "";
outputP.textContent = "";
outputQ.textContent = "";
outputS.textContent = "";
outputT.textContent = "";
outputU.textContent = "";
outputV.textContent = "";
outputW.textContent = "";
outputX.textContent = "";
outputY.textContent = "";
outputZ.textContent = "";
  }
  else if (input === 'S' || input === 's') {
    let startS = countries.filter(item => item.name.startsWith('S'));
    for(let i = 0; i < startS.length; i++) {
      searchItem.textContent = `${startS.length} countries satisfied the search criteria`
      let  aArray = document.createElement("p");
      aArray.className = "countries_output";

      let name = startS[i].name
      let name_text = document.createElement("p");
      name_text.className = "name_text";
      name_text.textContent = `${name}`
      
      let capital = startS[i].capital
      let  capital_text = document.createElement("p");
      capital_text.className = "capital_text";
      capital_text.textContent = `Capital: ${capital}`

      let languages = startS[i].languages
      let  languages_text = document.createElement("p");
      languages_text.className = "languages_text";
      languages_text.textContent = `Languages: ${languages}`

      let population = startS[i].population
      let  population_text = document.createElement("p");
      population_text.className = "population_text";
      population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

        aArray.append(name_text, capital_text, languages_text, population_text)
        outputS.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
outputB.textContent = "";
outputC.textContent = "";
outputD.textContent = "";
outputE.textContent = "";
outputF.textContent = "";
outputG.textContent = "";
outputH.textContent = "";
outputI.textContent = "";
outputJ.textContent = "";
outputK.textContent = "";
outputL.textContent = "";
outputM.textContent = "";
outputN.textContent = "";
outputO.textContent = "";
outputP.textContent = "";
outputQ.textContent = "";
outputR.textContent = "";
outputT.textContent = "";
outputU.textContent = "";
outputV.textContent = "";
outputW.textContent = "";
outputX.textContent = "";
outputY.textContent = "";
outputZ.textContent = "";
  }
  else if (input === 'T' || input === 't') {
    let startT = countries.filter(item => item.name.startsWith('T'));
    for(let i = 0; i < startT.length; i++) {
      searchItem.textContent = `${startT.length} countries satisfied the search criteria`
      let  aArray = document.createElement("p");
      aArray.className = "countries_output";

      let name = startT[i].name
      let name_text = document.createElement("p");
      name_text.className = "name_text";
      name_text.textContent = `${name}`
      
      let capital = startT[i].capital
      let  capital_text = document.createElement("p");
      capital_text.className = "capital_text";
      capital_text.textContent = `Capital: ${capital}`

      let languages = startT[i].languages
      let  languages_text = document.createElement("p");
      languages_text.className = "languages_text";
      languages_text.textContent = `Languages: ${languages}`

      let population = startT[i].population
      let  population_text = document.createElement("p");
      population_text.className = "population_text";
      population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

        aArray.append(name_text, capital_text, languages_text, population_text)
        outputT.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
    outputB.textContent = "";
    outputC.textContent = "";
    outputD.textContent = "";
    outputE.textContent = "";
    outputF.textContent = "";
    outputG.textContent = "";
    outputH.textContent = "";
    outputI.textContent = "";
    outputJ.textContent = "";
    outputK.textContent = "";
    outputL.textContent = "";
    outputM.textContent = "";
    outputN.textContent = "";
    outputO.textContent = "";
    outputP.textContent = "";
    outputQ.textContent = "";
    outputR.textContent = "";
    outputS.textContent = "";
    outputU.textContent = "";
    outputV.textContent = "";
    outputW.textContent = "";
    outputX.textContent = "";
    outputY.textContent = "";
    outputZ.textContent = "";
  }
  else if (input === 'U' || input === 'u') {
    let startU = countries.filter(item => item.name.startsWith('U'));
    for(let i = 0; i < startU.length; i++) {
      searchItem.textContent = `${startU.length} countries satisfied the search criteria`
      let  aArray = document.createElement("p");
      aArray.className = "countries_output";

      let name = startU[i].name
      let name_text = document.createElement("p");
      name_text.className = "name_text";
      name_text.textContent = `${name}`
      
      let capital = startU[i].capital
      let  capital_text = document.createElement("p");
      capital_text.className = "capital_text";
      capital_text.textContent = `Capital: ${capital}`

      let languages = startU[i].languages
      let  languages_text = document.createElement("p");
      languages_text.className = "languages_text";
      languages_text.textContent = `Languages: ${languages}`

      let population = startU[i].population
      let  population_text = document.createElement("p");
      population_text.className = "population_text";
      population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

        aArray.append(name_text, capital_text, languages_text, population_text)
        outputU.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
outputB.textContent = "";
outputC.textContent = "";
outputD.textContent = "";
outputE.textContent = "";
outputF.textContent = "";
outputG.textContent = "";
outputH.textContent = "";
outputI.textContent = "";
outputJ.textContent = "";
outputK.textContent = "";
outputL.textContent = "";
outputM.textContent = "";
outputN.textContent = "";
outputO.textContent = "";
outputP.textContent = "";
outputQ.textContent = "";
outputR.textContent = "";
outputS.textContent = "";
outputT.textContent = "";
outputV.textContent = "";
outputW.textContent = "";
outputX.textContent = "";
outputY.textContent = "";
outputZ.textContent = "";
  }
  else if (input === 'V' || input === 'v') {
    let startV = countries.filter(item => item.name.startsWith('V'));
    for(var i = 0; i < startV.length; i++) {
      searchItem.textContent = `${startV.length} countries satisfied the search criteria`
      let  aArray = document.createElement("p");
      aArray.className = "countries_output";

      let name = startV[i].name
      let name_text = document.createElement("p");
      name_text.className = "name_text";
      name_text.textContent = `${name}`
      
      let capital = startV[i].capital
      let  capital_text = document.createElement("p");
      capital_text.className = "capital_text";
      capital_text.textContent = `Capital: ${capital}`

      let languages = startV[i].languages
      let  languages_text = document.createElement("p");
      languages_text.className = "languages_text";
      languages_text.textContent = `Languages: ${languages}`

      let population = startV[i].population
      let  population_text = document.createElement("p");
      population_text.className = "population_text";
      population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

        aArray.append(name_text, capital_text, languages_text, population_text)
        outputV.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
outputB.textContent = "";
outputC.textContent = "";
outputD.textContent = "";
outputE.textContent = "";
outputF.textContent = "";
outputG.textContent = "";
outputH.textContent = "";
outputI.textContent = "";
outputJ.textContent = "";
outputK.textContent = "";
outputL.textContent = "";
outputM.textContent = "";
outputN.textContent = "";
outputO.textContent = "";
outputP.textContent = "";
outputQ.textContent = "";
outputR.textContent = "";
outputS.textContent = "";
outputT.textContent = "";
outputU.textContent = "";
outputW.textContent = "";
outputX.textContent = "";
outputY.textContent = "";
outputZ.textContent = "";
  }
  else if (input === 'W' || input === 'w') {
    let startW = countries.filter(item => item.name.startsWith('W'));
    for(var i = 0; i < startX.length; i++) {
      searchItem.textContent = `${startW.length} countries satisfied the search criteria`
      let  aArray = document.createElement("p");
      aArray.className = "countries_output";

      let name = startX[i].name
      let name_text = document.createElement("p");
      name_text.className = "name_text";
      name_text.textContent = `${name}`
      
      let capital = startX[i].capital
      let  capital_text = document.createElement("p");
      capital_text.className = "capital_text";
      capital_text.textContent = `Capital: ${capital}`

      let languages = startX[i].languages
      let  languages_text = document.createElement("p");
      languages_text.className = "languages_text";
      languages_text.textContent = `Languages: ${languages}`

      let population = startW[i].population
      let  population_text = document.createElement("p");
      population_text.className = "population_text";
      population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

        aArray.append(name_text, capital_text, languages_text, population_text)
        outputW.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
    outputB.textContent = "";
    outputC.textContent = "";
    outputD.textContent = "";
    outputE.textContent = "";
    outputF.textContent = "";
    outputG.textContent = "";
    outputH.textContent = "";
    outputI.textContent = "";
    outputJ.textContent = "";
    outputK.textContent = "";
    outputL.textContent = "";
    outputM.textContent = "";
    outputN.textContent = "";
    outputO.textContent = "";
    outputP.textContent = "";
    outputQ.textContent = "";
    outputR.textContent = "";
    outputS.textContent = "";
    outputT.textContent = "";
    outputU.textContent = "";
    outputV.textContent = "";
    outputW.textContent = `No country starts with W`;
    outputX.textContent = "";
    outputY.textContent = "";
    outputZ.textContent = "";
  }
  else if (input === 'X' || input === 'x') {
    let startX = countries.filter(item => item.name.startsWith('X'));
    for(var i = 0; i < startX.length; i++) {
      searchItem.textContent = `${startX.length} countries satisfied the search criteria`
     
}
errorMessage.textContent = ``
outputA.textContent = "";
outputB.textContent = "";
outputC.textContent = "";
outputD.textContent = "";
outputE.textContent = "";
outputF.textContent = "";
outputG.textContent = "";
outputH.textContent = "";
outputI.textContent = "";
outputJ.textContent = "";
outputK.textContent = "";
outputL.textContent = "";
outputM.textContent = "";
outputN.textContent = "";
outputO.textContent = "";
outputP.textContent = "";
outputQ.textContent = "";
outputR.textContent = "";
outputS.textContent = "";
outputT.textContent = "";
outputU.textContent = "";
outputV.textContent = "";
outputW.textContent = "";
outputX.textContent = `No country starts with X`;
outputY.textContent = "";
outputZ.textContent = "";
  }
  else if (input === 'Y' || input === 'y') {
    let startY = countries.filter(item => item.name.startsWith('Y'));
    for(var i = 0; i < startY.length; i++) {
      searchItem.textContent = `${startY.length} countries satisfied the search criteria`
      let  aArray = document.createElement("p");
      aArray.className = "countries_output";

      let name = startY[i].name
      let name_text = document.createElement("p");
      name_text.className = "name_text";
      name_text.textContent = `${name}`
      
      let capital = startY[i].capital
      let  capital_text = document.createElement("p");
      capital_text.className = "capital_text";
      capital_text.textContent = `Capital: ${capital}`

      let languages = startY[i].languages
      let  languages_text = document.createElement("p");
      languages_text.className = "languages_text";
      languages_text.textContent = `Languages: ${languages}`

      let population = startY[i].population
      let  population_text = document.createElement("p");
      population_text.className = "population_text";
      population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

        aArray.append(name_text, capital_text, languages_text, population_text)
        outputY.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
    outputB.textContent = "";
    outputC.textContent = "";
    outputD.textContent = "";
    outputE.textContent = "";
    outputF.textContent = "";
    outputG.textContent = "";
    outputH.textContent = "";
    outputI.textContent = "";
    outputJ.textContent = "";
    outputK.textContent = "";
    outputL.textContent = "";
    outputM.textContent = "";
    outputN.textContent = "";
    outputO.textContent = "";
    outputP.textContent = "";
    outputQ.textContent = "";
    outputR.textContent = "";
    outputS.textContent = "";
    outputT.textContent = "";
    outputU.textContent = "";
    outputV.textContent = "";
    outputW.textContent = "";
    outputX.textContent = "";
    outputZ.textContent = "";
  }
  else if (input === 'Z' || input === 'z') {
    let startZ = countries.filter(item => item.name.startsWith('Z'));
    for(var i = 0; i < startZ.length; i++) {
      searchItem.textContent = `${startZ.length} countries satisfied the search criteria`
      let  aArray = document.createElement("p");
      aArray.className = "countries_output";

      let name = startZ[i].name
      let name_text = document.createElement("p");
      name_text.className = "name_text";
      name_text.textContent = `${name}`
      
      let capital = startZ[i].capital
      let  capital_text = document.createElement("p");
      capital_text.className = "capital_text";
      capital_text.textContent = `Capital: ${capital}`

      let languages = startZ[i].languages
      let  languages_text = document.createElement("p");
      languages_text.className = "languages_text";
      languages_text.textContent = `Languages: ${languages}`

      let population = startZ[i].population
      let  population_text = document.createElement("p");
      population_text.className = "population_text";
      population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

        aArray.append(name_text, capital_text, languages_text, population_text)
        outputZ.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
    outputB.textContent = "";
    outputC.textContent = "";
    outputD.textContent = "";
    outputE.textContent = "";
    outputF.textContent = "";
    outputG.textContent = "";
    outputH.textContent = "";
    outputI.textContent = "";
    outputJ.textContent = "";
    outputK.textContent = "";
    outputL.textContent = "";
    outputM.textContent = "";
    outputN.textContent = "";
    outputO.textContent = "";
    outputP.textContent = "";
    outputQ.textContent = "";
    outputR.textContent = "";
    outputS.textContent = "";
    outputT.textContent = "";
    outputU.textContent = "";
    outputV.textContent = "";
    outputW.textContent = "";
    outputX.textContent = "";
    outputY.textContent = "";
  }

})
    


//Capital Output
capitalBtn.addEventListener('click', () => {
  let input = searchInput.value
  if(input === '') {
      errorMessage.textContent = `Enter a valid data`
  } 
  else if (input === 'A' || input === 'a') {
          let startA = countries.filter(item => item.capital.startsWith('A'));
          for(let i = 0; i < startA.length; i++) {
            searchItem.textContent = `${startA.length} countries satisfied the search criteria`
            let  aArray = document.createElement("p");
            aArray.className = "countries_output";

            let name = startA[i].name
            let name_text = document.createElement("p");
            name_text.className = "name_text";
            name_text.textContent = `${name}`
            
            let capital = startA[i].capital
            let  capital_text = document.createElement("p");
            capital_text.className = "capital_text";
            capital_text.textContent = `Capital: ${capital}`

            let languages = startA[i].languages
            let  languages_text = document.createElement("p");
            languages_text.className = "languages_text";
            languages_text.textContent = `Languages: ${languages}`

            let population = startA[i].population
            let  population_text = document.createElement("p");
            population_text.className = "population_text";
            population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

              aArray.append(name_text, capital_text, languages_text, population_text)
              outputA.append(aArray)
      }        
      errorMessage.textContent = ``
      outputB.textContent = "";
  outputC.textContent = "";
  outputD.textContent = "";
  outputE.textContent = "";
  outputF.textContent = "";
  outputG.textContent = "";
  outputH.textContent = "";
  outputI.textContent = "";
  outputJ.textContent = "";
  outputK.textContent = "";
  outputL.textContent = "";
  outputM.textContent = "";
  outputN.textContent = "";
  outputO.textContent = "";
  outputP.textContent = "";
  outputQ.textContent = "";
  outputR.textContent = "";
  outputS.textContent = "";
  outputT.textContent = "";
  outputU.textContent = "";
  outputV.textContent = "";
  outputW.textContent = "";
  outputX.textContent = "";
  outputY.textContent = "";
  outputZ.textContent = "";
      }
      else if (input === 'B' || input === 'b') {
        let startB = countries.filter(item => item.capital.startsWith('B'));
        for(let i = 0; i < startB.length; i++) {
          searchItem.textContent = `${startB.length} countries satisfied the search criteria`
          let  aArray = document.createElement("p");
          aArray.className = "countries_output";

          let name = startB[i].name
          let name_text = document.createElement("p");
          name_text.className = "name_text";
          name_text.textContent = `${name}`
          
          let capital = startB[i].capital
          let  capital_text = document.createElement("p");
          capital_text.className = "capital_text";
          capital_text.textContent = `Capital: ${capital}`

          let languages = startB[i].languages
          let  languages_text = document.createElement("p");
          languages_text.className = "languages_text";
          languages_text.textContent = `Languages: ${languages}`

          let population = startB[i].population
          let  population_text = document.createElement("p");
          population_text.className = "population_text";
          population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

            aArray.append(name_text, capital_text, languages_text, population_text)
            outputB.append(aArray)
    }
    errorMessage.textContent = ``
    outputA.textContent = "";
    outputC.textContent = "";
    outputD.textContent = "";
    outputE.textContent = "";
    outputF.textContent = "";
    outputG.textContent = "";
    outputH.textContent = "";
    outputI.textContent = "";
    outputJ.textContent = "";
    outputK.textContent = "";
    outputL.textContent = "";
    outputM.textContent = "";
    outputN.textContent = "";
    outputO.textContent = "";
    outputP.textContent = "";
    outputQ.textContent = "";
    outputR.textContent = "";
    outputS.textContent = "";
    outputT.textContent = "";
    outputU.textContent = "";
    outputV.textContent = "";
    outputW.textContent = "";
    outputX.textContent = "";
    outputY.textContent = "";
    outputZ.textContent = "";
  } 
  else if (input === 'C' || input === 'c') {
    let startC = countries.filter(item => item.capital.startsWith('C'));
    for(let i = 0; i < startC.length; i++) {
      searchItem.textContent = `${startC.length} countries satisfied the search criteria`
      let  aArray = document.createElement("p");
      aArray.className = "countries_output";

      let name = startC[i].name
      let name_text = document.createElement("p");
      name_text.className = "name_text";
      name_text.textContent = `${name}`
      
      let capital = startC[i].capital
      let  capital_text = document.createElement("p");
      capital_text.className = "capital_text";
      capital_text.textContent = `Capital: ${capital}`

      let languages = startC[i].languages
      let  languages_text = document.createElement("p");
      languages_text.className = "languages_text";
      languages_text.textContent = `Languages: ${languages}`

      let population = startC[i].population
      let  population_text = document.createElement("p");
      population_text.className = "population_text";
      population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

        aArray.append(name_text, capital_text, languages_text, population_text)
        outputC.append(aArray)
}
errorMessage.textContent = ``
  outputA.textContent = "";
  outputB.textContent = "";
  outputD.textContent = "";
  outputE.textContent = "";
  outputF.textContent = "";
  outputG.textContent = "";
  outputH.textContent = "";
  outputI.textContent = "";
  outputJ.textContent = "";
  outputK.textContent = "";
  outputL.textContent = "";
  outputM.textContent = "";
  outputN.textContent = "";
  outputO.textContent = "";
  outputP.textContent = "";
  outputQ.textContent = "";
  outputR.textContent = "";
  outputS.textContent = "";
  outputT.textContent = "";
  outputU.textContent = "";
  outputV.textContent = "";
  outputW.textContent = "";
  outputX.textContent = "";
  outputY.textContent = "";
  outputZ.textContent = "";
} 
else if (input === 'D' || input === 'd') {
  let startD = countries.filter(item => item.capital.startsWith('D'));
  for(let i = 0; i < startD.length; i++) {
    searchItem.textContent = `${startD.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startD[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startD[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startD[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startD[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputD.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
outputB.textContent = "";
outputC.textContent = "";
outputE.textContent = "";
outputF.textContent = "";
outputG.textContent = "";
outputH.textContent = "";
outputI.textContent = "";
outputJ.textContent = "";
outputK.textContent = "";
outputL.textContent = "";
outputM.textContent = "";
outputN.textContent = "";
outputO.textContent = "";
outputP.textContent = "";
outputQ.textContent = "";
outputR.textContent = "";
outputS.textContent = "";
outputT.textContent = "";
outputU.textContent = "";
outputV.textContent = "";
outputW.textContent = "";
outputX.textContent = "";
outputY.textContent = "";
outputZ.textContent = "";
}
else if (input === 'E' || input === 'e') {
  let startE = countries.filter(item => item.capital.startsWith('E'));
  for(let i = 0; i < startE.length; i++) {
    searchItem.textContent = `${startE.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startE[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startE[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startE[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startE[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputE.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
outputB.textContent = "";
outputC.textContent = "";
outputD.textContent = "";
outputF.textContent = "";
outputG.textContent = "";
outputH.textContent = "";
outputI.textContent = "";
outputJ.textContent = "";
outputK.textContent = "";
outputL.textContent = "";
outputM.textContent = "";
outputN.textContent = "";
outputO.textContent = "";
outputP.textContent = "";
outputQ.textContent = "";
outputR.textContent = "";
outputS.textContent = "";
outputT.textContent = "";
outputU.textContent = "";
outputV.textContent = "";
outputW.textContent = "";
outputX.textContent = "";
outputY.textContent = "";
outputZ.textContent = "";
}
else if (input === 'F' || input === 'f') {
  let startF = countries.filter(item => item.capital.startsWith('F'));
  for(let i = 0; i < startF.length; i++) {
    searchItem.textContent = `${startF.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startF[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startF[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startF[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startF[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputF.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
outputB.textContent = "";
outputC.textContent = "";
outputD.textContent = "";
outputE.textContent = "";
outputG.textContent = "";
outputH.textContent = "";
outputI.textContent = "";
outputJ.textContent = "";
outputK.textContent = "";
outputL.textContent = "";
outputM.textContent = "";
outputN.textContent = "";
outputO.textContent = "";
outputP.textContent = "";
outputQ.textContent = "";
outputR.textContent = "";
outputS.textContent = "";
outputT.textContent = "";
outputU.textContent = "";
outputV.textContent = "";
outputW.textContent = "";
outputX.textContent = "";
outputY.textContent = "";
outputZ.textContent = "";
}
else if (input === 'G' || input === 'g') {
  let startG = countries.filter(item => item.capital.startsWith('G'));
  for(let i = 0; i < startG.length; i++) {
    searchItem.textContent = `${startG.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startG[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startG[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startG[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startG[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputG.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
  outputB.textContent = "";
  outputC.textContent = "";
  outputD.textContent = "";
  outputE.textContent = "";
  outputF.textContent = "";
  outputH.textContent = "";
  outputI.textContent = "";
  outputJ.textContent = "";
  outputK.textContent = "";
  outputL.textContent = "";
  outputM.textContent = "";
  outputN.textContent = "";
  outputO.textContent = "";
  outputP.textContent = "";
  outputQ.textContent = "";
  outputR.textContent = "";
  outputS.textContent = "";
  outputT.textContent = "";
  outputU.textContent = "";
  outputV.textContent = "";
  outputW.textContent = "";
  outputX.textContent = "";
  outputY.textContent = "";
  outputZ.textContent = "";
}
else if (input === 'H' || input === 'h') {
  let startH = countries.filter(item => item.capital.startsWith('H'));
  for(let i = 0; i < startH.length; i++) {
    searchItem.textContent = `${startH.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startH[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startH[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startH[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startH[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputH.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
  outputB.textContent = "";
  outputC.textContent = "";
  outputD.textContent = "";
  outputE.textContent = "";
  outputF.textContent = "";
  outputG.textContent = "";
  outputI.textContent = "";
  outputJ.textContent = "";
  outputK.textContent = "";
  outputL.textContent = "";
  outputM.textContent = "";
  outputN.textContent = "";
  outputO.textContent = "";
  outputP.textContent = "";
  outputQ.textContent = "";
  outputR.textContent = "";
  outputS.textContent = "";
  outputT.textContent = "";
  outputU.textContent = "";
  outputV.textContent = "";
  outputW.textContent = "";
  outputX.textContent = "";
  outputY.textContent = "";
  outputZ.textContent = "";

}
else if (input === 'I' || input === 'i') {
  let startI = countries.filter(item => item.capital.startsWith('I'));
  for(let i = 0; i < startI.length; i++) {
    searchItem.textContent = `${startI.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startI[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startI[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startI[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startI[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputI.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
  outputB.textContent = "";
  outputC.textContent = "";
  outputD.textContent = "";
  outputE.textContent = "";
  outputF.textContent = "";
  outputG.textContent = "";
  outputH.textContent = "";
  outputJ.textContent = "";
  outputK.textContent = "";
  outputL.textContent = "";
  outputM.textContent = "";
  outputN.textContent = "";
  outputO.textContent = "";
  outputP.textContent = "";
  outputQ.textContent = "";
  outputR.textContent = "";
  outputS.textContent = "";
  outputT.textContent = "";
  outputU.textContent = "";
  outputV.textContent = "";
  outputW.textContent = "";
  outputX.textContent = "";
  outputY.textContent = "";
  outputZ.textContent = "";
}
else if (input === 'J' || input === 'j') {
  let startJ = countries.filter(item => item.capital.startsWith('J'));
  for(let i = 0; i < startJ.length; i++) {
    searchItem.textContent = `${startJ.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startJ[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startJ[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startJ[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startJ[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputJ.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
  outputB.textContent = "";
  outputC.textContent = "";
  outputD.textContent = "";
  outputE.textContent = "";
  outputF.textContent = "";
  outputG.textContent = "";
  outputH.textContent = "";
  outputI.textContent = "";
  outputK.textContent = "";
  outputL.textContent = "";
  outputM.textContent = "";
  outputN.textContent = "";
  outputO.textContent = "";
  outputP.textContent = "";
  outputQ.textContent = "";
  outputR.textContent = "";
  outputS.textContent = "";
  outputT.textContent = "";
  outputU.textContent = "";
  outputV.textContent = "";
  outputW.textContent = "";
  outputX.textContent = "";
  outputY.textContent = "";
  outputZ.textContent = "";
}
else if (input === 'K' || input === 'k') {
  let startK = countries.filter(item => item.capital.startsWith('K'));
  for(let i = 0; i < startK.length; i++) {
    searchItem.textContent = `${startK.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startK[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startK[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startK[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startK[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputK.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
  outputB.textContent = "";
  outputC.textContent = "";
  outputD.textContent = "";
  outputE.textContent = "";
  outputF.textContent = "";
  outputG.textContent = "";
  outputH.textContent = "";
  outputI.textContent = "";
  outputJ.textContent = "";
  outputL.textContent = "";
  outputM.textContent = "";
  outputN.textContent = "";
  outputO.textContent = "";
  outputP.textContent = "";
  outputQ.textContent = "";
  outputR.textContent = "";
  outputS.textContent = "";
  outputT.textContent = "";
  outputU.textContent = "";
  outputV.textContent = "";
  outputW.textContent = "";
  outputX.textContent = "";
  outputY.textContent = "";
  outputZ.textContent = "";

}
else if (input === 'L' || input === 'l') {
  let startL = countries.filter(item => item.capital.startsWith('L'));
  for(let i = 0; i < startL.length; i++) {
    searchItem.textContent = `${startL.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startL[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startL[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startL[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startL[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputL.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
  outputB.textContent = "";
  outputC.textContent = "";
  outputD.textContent = "";
  outputE.textContent = "";
  outputF.textContent = "";
  outputG.textContent = "";
  outputH.textContent = "";
  outputI.textContent = "";
  outputJ.textContent = "";
  outputK.textContent = "";
  outputM.textContent = "";
  outputN.textContent = "";
  outputO.textContent = "";
  outputP.textContent = "";
  outputQ.textContent = "";
  outputR.textContent = "";
  outputS.textContent = "";
  outputT.textContent = "";
  outputU.textContent = "";
  outputV.textContent = "";
  outputW.textContent = "";
  outputX.textContent = "";
  outputY.textContent = "";
  outputZ.textContent = "";
}
else if (input === 'M' || input === 'm') {
  let startM = countries.filter(item => item.capital.startsWith('M'));
  for(let i = 0; i < startM.length; i++) {
    searchItem.textContent = `${startM.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startM[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startM[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startM[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startM[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputM.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
outputB.textContent = "";
outputC.textContent = "";
outputD.textContent = "";
outputE.textContent = "";
outputF.textContent = "";
outputG.textContent = "";
outputH.textContent = "";
outputI.textContent = "";
outputJ.textContent = "";
outputK.textContent = "";
outputL.textContent = "";
outputN.textContent = "";
outputO.textContent = "";
outputP.textContent = "";
outputQ.textContent = "";
outputR.textContent = "";
outputS.textContent = "";
outputT.textContent = "";
outputU.textContent = "";
outputV.textContent = "";
outputW.textContent = "";
outputX.textContent = "";
outputY.textContent = "";
outputZ.textContent = "";
} else if (input === "N" || input === "n") {
  let startN = countries.filter(item => item.capital.startsWith('N'));
  for(let i = 0; i < startN.length; i++) {
    searchItem.textContent = `${startN.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startN[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startN[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startN[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startN[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputN.append(aArray)
    }
    errorMessage.textContent = ``
outputA.textContent = "";
outputB.textContent = "";
outputC.textContent = "";
outputD.textContent = "";
outputE.textContent = "";
outputF.textContent = "";
outputG.textContent = "";
outputH.textContent = "";
outputI.textContent = "";
outputJ.textContent = "";
outputK.textContent = "";
outputL.textContent = "";
outputM.textContent = "";
outputO.textContent = "";
outputP.textContent = "";
outputQ.textContent = "";
outputR.textContent = "";
outputS.textContent = "";
outputT.textContent = "";
outputU.textContent = "";
outputV.textContent = "";
outputW.textContent = "";
outputX.textContent = "";
outputY.textContent = "";
outputZ.textContent = "";
} else if (input === "O" || input === "o") {
  let startO = countries.filter(item => item.capital.startsWith('O'));
  for(let i = 0; i < startO.length; i++) {
    searchItem.textContent = `${startO.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startO[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startO[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startO[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startO[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputO.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
outputB.textContent = "";
outputC.textContent = "";
outputD.textContent = "";
outputE.textContent = "";
outputF.textContent = "";
outputG.textContent = "";
outputH.textContent = "";
outputI.textContent = "";
outputJ.textContent = "";
outputK.textContent = "";
outputL.textContent = "";
outputM.textContent = "";
outputN.textContent = "";
outputP.textContent = "";
outputQ.textContent = "";
outputR.textContent = "";
outputS.textContent = "";
outputT.textContent = "";
outputU.textContent = "";
outputV.textContent = "";
outputW.textContent = "";
outputX.textContent = "";
outputY.textContent = "";
outputZ.textContent = "";
}
else if (input === 'P' || input === 'p') {
  let startP = countries.filter(item => item.capital.startsWith('P'));
  for(let i = 0; i < startP.length; i++) {
    searchItem.textContent = `${startP.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startP[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startP[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startP[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startP[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputP.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
  outputB.textContent = "";
  outputC.textContent = "";
  outputD.textContent = "";
  outputE.textContent = "";
  outputF.textContent = "";
  outputG.textContent = "";
  outputH.textContent = "";
  outputI.textContent = "";
  outputJ.textContent = "";
  outputK.textContent = "";
  outputL.textContent = "";
  outputM.textContent = "";
  outputN.textContent = "";
  outputO.textContent = "";
  outputQ.textContent = "";
  outputR.textContent = "";
  outputS.textContent = "";
  outputT.textContent = "";
  outputU.textContent = "";
  outputV.textContent = "";
  outputW.textContent = "";
  outputX.textContent = "";
  outputY.textContent = "";
  outputZ.textContent = "";
}
else if (input === 'Q' || input === 'q') {
  let startQ = countries.filter(item => item.capital.startsWith('Q'));
  for(let i = 0; i < startQ.length; i++) {
    searchItem.textContent = `${startQ.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startQ[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startQ[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startQ[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startQ[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputQ.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
  outputB.textContent = "";
  outputC.textContent = "";
  outputD.textContent = "";
  outputE.textContent = "";
  outputF.textContent = "";
  outputG.textContent = "";
  outputH.textContent = "";
  outputI.textContent = "";
  outputJ.textContent = "";
  outputK.textContent = "";
  outputL.textContent = "";
  outputM.textContent = "";
  outputN.textContent = "";
  outputO.textContent = "";
  outputP.textContent = "";
  outputR.textContent = "";
  outputS.textContent = "";
  outputT.textContent = "";
  outputU.textContent = "";
  outputV.textContent = "";
  outputW.textContent = "";
  outputX.textContent = "";
  outputY.textContent = "";
  outputZ.textContent = "";
}
else if (input === 'R' || input === 'r') {
  let startR = countries.filter(item => item.capital.startsWith('R'));
  for(let i = 0; i < startR.length; i++) {
    searchItem.textContent = `${startR.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startR[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startR[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startR[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startR[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputR.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
outputB.textContent = "";
outputC.textContent = "";
outputD.textContent = "";
outputE.textContent = "";
outputF.textContent = "";
outputG.textContent = "";
outputH.textContent = "";
outputI.textContent = "";
outputJ.textContent = "";
outputK.textContent = "";
outputL.textContent = "";
outputM.textContent = "";
outputN.textContent = "";
outputO.textContent = "";
outputP.textContent = "";
outputQ.textContent = "";
outputS.textContent = "";
outputT.textContent = "";
outputU.textContent = "";
outputV.textContent = "";
outputW.textContent = "";
outputX.textContent = "";
outputY.textContent = "";
outputZ.textContent = "";
}
else if (input === 'S' || input === 's') {
  let startS = countries.filter(item => item.capital.startsWith('S'));
  for(let i = 0; i < startS.length; i++) {
    searchItem.textContent = `${startS.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startS[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startS[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startS[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startS[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputS.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
outputB.textContent = "";
outputC.textContent = "";
outputD.textContent = "";
outputE.textContent = "";
outputF.textContent = "";
outputG.textContent = "";
outputH.textContent = "";
outputI.textContent = "";
outputJ.textContent = "";
outputK.textContent = "";
outputL.textContent = "";
outputM.textContent = "";
outputN.textContent = "";
outputO.textContent = "";
outputP.textContent = "";
outputQ.textContent = "";
outputR.textContent = "";
outputT.textContent = "";
outputU.textContent = "";
outputV.textContent = "";
outputW.textContent = "";
outputX.textContent = "";
outputY.textContent = "";
outputZ.textContent = "";
}
else if (input === 'T' || input === 't') {
  let startT = countries.filter(item => item.capital.startsWith('T'));
  for(let i = 0; i < startT.length; i++) {
    searchItem.textContent = `${startT.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startT[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startT[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startT[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startT[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputT.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
  outputB.textContent = "";
  outputC.textContent = "";
  outputD.textContent = "";
  outputE.textContent = "";
  outputF.textContent = "";
  outputG.textContent = "";
  outputH.textContent = "";
  outputI.textContent = "";
  outputJ.textContent = "";
  outputK.textContent = "";
  outputL.textContent = "";
  outputM.textContent = "";
  outputN.textContent = "";
  outputO.textContent = "";
  outputP.textContent = "";
  outputQ.textContent = "";
  outputR.textContent = "";
  outputS.textContent = "";
  outputU.textContent = "";
  outputV.textContent = "";
  outputW.textContent = "";
  outputX.textContent = "";
  outputY.textContent = "";
  outputZ.textContent = "";
}
else if (input === 'U' || input === 'u') {
  let startU = countries.filter(item => item.capital.startsWith('U'));
  for(let i = 0; i < startU.length; i++) {
    searchItem.textContent = `${startU.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startU[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startU[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startU[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startU[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputU.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
outputB.textContent = "";
outputC.textContent = "";
outputD.textContent = "";
outputE.textContent = "";
outputF.textContent = "";
outputG.textContent = "";
outputH.textContent = "";
outputI.textContent = "";
outputJ.textContent = "";
outputK.textContent = "";
outputL.textContent = "";
outputM.textContent = "";
outputN.textContent = "";
outputO.textContent = "";
outputP.textContent = "";
outputQ.textContent = "";
outputR.textContent = "";
outputS.textContent = "";
outputT.textContent = "";
outputV.textContent = "";
outputW.textContent = "";
outputX.textContent = "";
outputY.textContent = "";
outputZ.textContent = "";
}
else if (input === 'V' || input === 'v') {
  let startV = countries.filter(item => item.capital.startsWith('V'));
  for(var i = 0; i < startV.length; i++) {
    searchItem.textContent = `${startV.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startV[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startV[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startV[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startV[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputV.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
outputB.textContent = "";
outputC.textContent = "";
outputD.textContent = "";
outputE.textContent = "";
outputF.textContent = "";
outputG.textContent = "";
outputH.textContent = "";
outputI.textContent = "";
outputJ.textContent = "";
outputK.textContent = "";
outputL.textContent = "";
outputM.textContent = "";
outputN.textContent = "";
outputO.textContent = "";
outputP.textContent = "";
outputQ.textContent = "";
outputR.textContent = "";
outputS.textContent = "";
outputT.textContent = "";
outputU.textContent = "";
outputW.textContent = "";
outputX.textContent = "";
outputY.textContent = "";
outputZ.textContent = "";
}
else if (input === 'W' || input === 'w') {
  let startW = countries.filter(item => item.capital.startsWith('W'));
  for(var i = 0; i < startX.length; i++) {
    searchItem.textContent = `${startW.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startX[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startX[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startX[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startW[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputW.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
  outputB.textContent = "";
  outputC.textContent = "";
  outputD.textContent = "";
  outputE.textContent = "";
  outputF.textContent = "";
  outputG.textContent = "";
  outputH.textContent = "";
  outputI.textContent = "";
  outputJ.textContent = "";
  outputK.textContent = "";
  outputL.textContent = "";
  outputM.textContent = "";
  outputN.textContent = "";
  outputO.textContent = "";
  outputP.textContent = "";
  outputQ.textContent = "";
  outputR.textContent = "";
  outputS.textContent = "";
  outputT.textContent = "";
  outputU.textContent = "";
  outputV.textContent = "";
  outputW.textContent = `No country starts with W`;
  outputX.textContent = "";
  outputY.textContent = "";
  outputZ.textContent = "";
}
else if (input === 'X' || input === 'x') {
  let startX = countries.filter(item => item.capital.startsWith('X'));
  for(var i = 0; i < startX.length; i++) {
    searchItem.textContent = `${startX.length} countries satisfied the search criteria`
   
}
errorMessage.textContent = ``
outputA.textContent = "";
outputB.textContent = "";
outputC.textContent = "";
outputD.textContent = "";
outputE.textContent = "";
outputF.textContent = "";
outputG.textContent = "";
outputH.textContent = "";
outputI.textContent = "";
outputJ.textContent = "";
outputK.textContent = "";
outputL.textContent = "";
outputM.textContent = "";
outputN.textContent = "";
outputO.textContent = "";
outputP.textContent = "";
outputQ.textContent = "";
outputR.textContent = "";
outputS.textContent = "";
outputT.textContent = "";
outputU.textContent = "";
outputV.textContent = "";
outputW.textContent = "";
outputX.textContent = `No country starts with X`;
outputY.textContent = "";
outputZ.textContent = "";
}
else if (input === 'Y' || input === 'y') {
  let startY = countries.filter(item => item.capital.startsWith('Y'));
  for(var i = 0; i < startY.length; i++) {
    searchItem.textContent = `${startY.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startY[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startY[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startY[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startY[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputY.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
  outputB.textContent = "";
  outputC.textContent = "";
  outputD.textContent = "";
  outputE.textContent = "";
  outputF.textContent = "";
  outputG.textContent = "";
  outputH.textContent = "";
  outputI.textContent = "";
  outputJ.textContent = "";
  outputK.textContent = "";
  outputL.textContent = "";
  outputM.textContent = "";
  outputN.textContent = "";
  outputO.textContent = "";
  outputP.textContent = "";
  outputQ.textContent = "";
  outputR.textContent = "";
  outputS.textContent = "";
  outputT.textContent = "";
  outputU.textContent = "";
  outputV.textContent = "";
  outputW.textContent = "";
  outputX.textContent = "";
  outputZ.textContent = "";
}
else if (input === 'Z' || input === 'z') {
  let startZ = countries.filter(item => item.capital.startsWith('Z'));
  for(var i = 0; i < startZ.length; i++) {
    searchItem.textContent = `${startZ.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startZ[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startZ[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startZ[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startZ[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputZ.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
  outputB.textContent = "";
  outputC.textContent = "";
  outputD.textContent = "";
  outputE.textContent = "";
  outputF.textContent = "";
  outputG.textContent = "";
  outputH.textContent = "";
  outputI.textContent = "";
  outputJ.textContent = "";
  outputK.textContent = "";
  outputL.textContent = "";
  outputM.textContent = "";
  outputN.textContent = "";
  outputO.textContent = "";
  outputP.textContent = "";
  outputQ.textContent = "";
  outputR.textContent = "";
  outputS.textContent = "";
  outputT.textContent = "";
  outputU.textContent = "";
  outputV.textContent = "";
  outputW.textContent = "";
  outputX.textContent = "";
  outputY.textContent = "";
}

})


//Population output 

populationBtn.addEventListener('click', () => {
  let input = searchInput.value
  if(input === '') {
      errorMessage.textContent = `Enter a valid data`
  } 
  else if (input === 'A' || input === 'a') {
          let startA = countries.filter(item => item.name.startsWith('A'))
          let pop_sort = startA.sort(function(a, b) {
            return b.population - a.population
          }) 

          for(let i = 0; i < startA.length; i++) {
            searchItem.textContent = `${startA.length} countries satisfied the search criteria`
            let  aArray = document.createElement("p");
            aArray.className = "countries_output";

            let name = startA[i].name
            let name_text = document.createElement("p");
            name_text.className = "name_text";
            name_text.textContent = `${name}`
            
            let capital = startA[i].capital
            let  capital_text = document.createElement("p");
            capital_text.className = "capital_text";
            capital_text.textContent = `Capital: ${capital}`

            let languages = startA[i].languages
            let  languages_text = document.createElement("p");
            languages_text.className = "languages_text";
            languages_text.textContent = `Languages: ${languages}`

            let population = startA[i].population
            let  population_text = document.createElement("p");
            population_text.className = "population_text";
            population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

              aArray.append(name_text, capital_text, languages_text, population_text)
              outputA.append(aArray)
      }        
      errorMessage.textContent = ``
      outputB.textContent = "";
  outputC.textContent = "";
  outputD.textContent = "";
  outputE.textContent = "";
  outputF.textContent = "";
  outputG.textContent = "";
  outputH.textContent = "";
  outputI.textContent = "";
  outputJ.textContent = "";
  outputK.textContent = "";
  outputL.textContent = "";
  outputM.textContent = "";
  outputN.textContent = "";
  outputO.textContent = "";
  outputP.textContent = "";
  outputQ.textContent = "";
  outputR.textContent = "";
  outputS.textContent = "";
  outputT.textContent = "";
  outputU.textContent = "";
  outputV.textContent = "";
  outputW.textContent = "";
  outputX.textContent = "";
  outputY.textContent = "";
  outputZ.textContent = "";
      }
      else if (input === 'B' || input === 'b') {
        let startB = countries.filter(item => item.name.startsWith('B'));
              let pop_sort = startB.sort(function(a, b) {
          return b.population - a.population
        }) 
        for(let i = 0; i < startB.length; i++) {
          searchItem.textContent = `${startB.length} countries satisfied the search criteria`
          let  aArray = document.createElement("p");
          aArray.className = "countries_output";

          let name = startB[i].name
          let name_text = document.createElement("p");
          name_text.className = "name_text";
          name_text.textContent = `${name}`
          
          let capital = startB[i].capital
          let  capital_text = document.createElement("p");
          capital_text.className = "capital_text";
          capital_text.textContent = `Capital: ${capital}`

          let languages = startB[i].languages
          let  languages_text = document.createElement("p");
          languages_text.className = "languages_text";
          languages_text.textContent = `Languages: ${languages}`

          let population = startB[i].population
          let  population_text = document.createElement("p");
          population_text.className = "population_text";
          population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

            aArray.append(name_text, capital_text, languages_text, population_text)
            outputB.append(aArray)
    }
    errorMessage.textContent = ``
    outputA.textContent = "";
    outputC.textContent = "";
    outputD.textContent = "";
    outputE.textContent = "";
    outputF.textContent = "";
    outputG.textContent = "";
    outputH.textContent = "";
    outputI.textContent = "";
    outputJ.textContent = "";
    outputK.textContent = "";
    outputL.textContent = "";
    outputM.textContent = "";
    outputN.textContent = "";
    outputO.textContent = "";
    outputP.textContent = "";
    outputQ.textContent = "";
    outputR.textContent = "";
    outputS.textContent = "";
    outputT.textContent = "";
    outputU.textContent = "";
    outputV.textContent = "";
    outputW.textContent = "";
    outputX.textContent = "";
    outputY.textContent = "";
    outputZ.textContent = "";
  } 
  else if (input === 'C' || input === 'c') {
    let startC = countries.filter(item => item.name.startsWith('C'));
    let pop_sort = startC.sort(function(a, b) {
      return b.population - a.population
    }) 
    for(let i = 0; i < startC.length; i++) {
      searchItem.textContent = `${startC.length} countries satisfied the search criteria`
      let  aArray = document.createElement("p");
      aArray.className = "countries_output";

      let name = startC[i].name
      let name_text = document.createElement("p");
      name_text.className = "name_text";
      name_text.textContent = `${name}`
      
      let capital = startC[i].capital
      let  capital_text = document.createElement("p");
      capital_text.className = "capital_text";
      capital_text.textContent = `Capital: ${capital}`

      let languages = startC[i].languages
      let  languages_text = document.createElement("p");
      languages_text.className = "languages_text";
      languages_text.textContent = `Languages: ${languages}`

      let population = startC[i].population
      let  population_text = document.createElement("p");
      population_text.className = "population_text";
      population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

        aArray.append(name_text, capital_text, languages_text, population_text)
        outputC.append(aArray)
}
errorMessage.textContent = ``
  outputA.textContent = "";
  outputB.textContent = "";
  outputD.textContent = "";
  outputE.textContent = "";
  outputF.textContent = "";
  outputG.textContent = "";
  outputH.textContent = "";
  outputI.textContent = "";
  outputJ.textContent = "";
  outputK.textContent = "";
  outputL.textContent = "";
  outputM.textContent = "";
  outputN.textContent = "";
  outputO.textContent = "";
  outputP.textContent = "";
  outputQ.textContent = "";
  outputR.textContent = "";
  outputS.textContent = "";
  outputT.textContent = "";
  outputU.textContent = "";
  outputV.textContent = "";
  outputW.textContent = "";
  outputX.textContent = "";
  outputY.textContent = "";
  outputZ.textContent = "";
} 
else if (input === 'D' || input === 'd') {
  let startD = countries.filter(item => item.name.startsWith('D'));
  let pop_sort = startD.sort(function(a, b) {
    return b.population - a.population
  }) 
  for(let i = 0; i < startD.length; i++) {
    searchItem.textContent = `${startD.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startD[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startD[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startD[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startD[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputD.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
outputB.textContent = "";
outputC.textContent = "";
outputE.textContent = "";
outputF.textContent = "";
outputG.textContent = "";
outputH.textContent = "";
outputI.textContent = "";
outputJ.textContent = "";
outputK.textContent = "";
outputL.textContent = "";
outputM.textContent = "";
outputN.textContent = "";
outputO.textContent = "";
outputP.textContent = "";
outputQ.textContent = "";
outputR.textContent = "";
outputS.textContent = "";
outputT.textContent = "";
outputU.textContent = "";
outputV.textContent = "";
outputW.textContent = "";
outputX.textContent = "";
outputY.textContent = "";
outputZ.textContent = "";
}
else if (input === 'E' || input === 'e') {
  let startE = countries.filter(item => item.name.startsWith('E'));
  let pop_sort = startE.sort(function(a, b) {
    return b.population - a.population
  }) 
  for(let i = 0; i < startE.length; i++) {
    searchItem.textContent = `${startE.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startE[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startE[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startE[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startE[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputE.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
outputB.textContent = "";
outputC.textContent = "";
outputD.textContent = "";
outputF.textContent = "";
outputG.textContent = "";
outputH.textContent = "";
outputI.textContent = "";
outputJ.textContent = "";
outputK.textContent = "";
outputL.textContent = "";
outputM.textContent = "";
outputN.textContent = "";
outputO.textContent = "";
outputP.textContent = "";
outputQ.textContent = "";
outputR.textContent = "";
outputS.textContent = "";
outputT.textContent = "";
outputU.textContent = "";
outputV.textContent = "";
outputW.textContent = "";
outputX.textContent = "";
outputY.textContent = "";
outputZ.textContent = "";
}
else if (input === 'F' || input === 'f') {
  let startF = countries.filter(item => item.name.startsWith('F'));
  let pop_sort = startF.sort(function(a, b) {
    return b.population - a.population
  }) 
  for(let i = 0; i < startF.length; i++) {
    searchItem.textContent = `${startF.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startF[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startF[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startF[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startF[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputF.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
outputB.textContent = "";
outputC.textContent = "";
outputD.textContent = "";
outputE.textContent = "";
outputG.textContent = "";
outputH.textContent = "";
outputI.textContent = "";
outputJ.textContent = "";
outputK.textContent = "";
outputL.textContent = "";
outputM.textContent = "";
outputN.textContent = "";
outputO.textContent = "";
outputP.textContent = "";
outputQ.textContent = "";
outputR.textContent = "";
outputS.textContent = "";
outputT.textContent = "";
outputU.textContent = "";
outputV.textContent = "";
outputW.textContent = "";
outputX.textContent = "";
outputY.textContent = "";
outputZ.textContent = "";
}
else if (input === 'G' || input === 'g') {
  let startG = countries.filter(item => item.name.startsWith('G'));
  let pop_sort = startG.sort(function(a, b) {
    return b.population - a.population
  }) 
  for(let i = 0; i < startG.length; i++) {
    searchItem.textContent = `${startG.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startG[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startG[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startG[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startG[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputG.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
  outputB.textContent = "";
  outputC.textContent = "";
  outputD.textContent = "";
  outputE.textContent = "";
  outputF.textContent = "";
  outputH.textContent = "";
  outputI.textContent = "";
  outputJ.textContent = "";
  outputK.textContent = "";
  outputL.textContent = "";
  outputM.textContent = "";
  outputN.textContent = "";
  outputO.textContent = "";
  outputP.textContent = "";
  outputQ.textContent = "";
  outputR.textContent = "";
  outputS.textContent = "";
  outputT.textContent = "";
  outputU.textContent = "";
  outputV.textContent = "";
  outputW.textContent = "";
  outputX.textContent = "";
  outputY.textContent = "";
  outputZ.textContent = "";
}
else if (input === 'H' || input === 'h') {
  let startH = countries.filter(item => item.name.startsWith('H'));
  let pop_sort = startH.sort(function(a, b) {
    return b.population - a.population
  }) 
  for(let i = 0; i < startH.length; i++) {
    searchItem.textContent = `${startH.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startH[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startH[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startH[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startH[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputH.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
  outputB.textContent = "";
  outputC.textContent = "";
  outputD.textContent = "";
  outputE.textContent = "";
  outputF.textContent = "";
  outputG.textContent = "";
  outputI.textContent = "";
  outputJ.textContent = "";
  outputK.textContent = "";
  outputL.textContent = "";
  outputM.textContent = "";
  outputN.textContent = "";
  outputO.textContent = "";
  outputP.textContent = "";
  outputQ.textContent = "";
  outputR.textContent = "";
  outputS.textContent = "";
  outputT.textContent = "";
  outputU.textContent = "";
  outputV.textContent = "";
  outputW.textContent = "";
  outputX.textContent = "";
  outputY.textContent = "";
  outputZ.textContent = "";

}
else if (input === 'I' || input === 'i') {
  let startI = countries.filter(item => item.name.startsWith('I'));
  let pop_sort = startI.sort(function(a, b) {
    return b.population - a.population
  }) 
  for(let i = 0; i < startI.length; i++) {
    searchItem.textContent = `${startI.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startI[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startI[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startI[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startI[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputI.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
  outputB.textContent = "";
  outputC.textContent = "";
  outputD.textContent = "";
  outputE.textContent = "";
  outputF.textContent = "";
  outputG.textContent = "";
  outputH.textContent = "";
  outputJ.textContent = "";
  outputK.textContent = "";
  outputL.textContent = "";
  outputM.textContent = "";
  outputN.textContent = "";
  outputO.textContent = "";
  outputP.textContent = "";
  outputQ.textContent = "";
  outputR.textContent = "";
  outputS.textContent = "";
  outputT.textContent = "";
  outputU.textContent = "";
  outputV.textContent = "";
  outputW.textContent = "";
  outputX.textContent = "";
  outputY.textContent = "";
  outputZ.textContent = "";
}
else if (input === 'J' || input === 'j') {
  let startJ = countries.filter(item => item.name.startsWith('J'));
  let pop_sort = startJ.sort(function(a, b) {
    return b.population - a.population
  }) 
  for(let i = 0; i < startJ.length; i++) {
    searchItem.textContent = `${startJ.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startJ[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startJ[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startJ[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startJ[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputJ.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
  outputB.textContent = "";
  outputC.textContent = "";
  outputD.textContent = "";
  outputE.textContent = "";
  outputF.textContent = "";
  outputG.textContent = "";
  outputH.textContent = "";
  outputI.textContent = "";
  outputK.textContent = "";
  outputL.textContent = "";
  outputM.textContent = "";
  outputN.textContent = "";
  outputO.textContent = "";
  outputP.textContent = "";
  outputQ.textContent = "";
  outputR.textContent = "";
  outputS.textContent = "";
  outputT.textContent = "";
  outputU.textContent = "";
  outputV.textContent = "";
  outputW.textContent = "";
  outputX.textContent = "";
  outputY.textContent = "";
  outputZ.textContent = "";
}
else if (input === 'K' || input === 'k') {
  let startK = countries.filter(item => item.name.startsWith('K'));
  let pop_sort = startK.sort(function(a, b) {
    return b.population - a.population
  }) 
  for(let i = 0; i < startK.length; i++) {
    searchItem.textContent = `${startK.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startK[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startK[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startK[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startK[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputK.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
  outputB.textContent = "";
  outputC.textContent = "";
  outputD.textContent = "";
  outputE.textContent = "";
  outputF.textContent = "";
  outputG.textContent = "";
  outputH.textContent = "";
  outputI.textContent = "";
  outputJ.textContent = "";
  outputL.textContent = "";
  outputM.textContent = "";
  outputN.textContent = "";
  outputO.textContent = "";
  outputP.textContent = "";
  outputQ.textContent = "";
  outputR.textContent = "";
  outputS.textContent = "";
  outputT.textContent = "";
  outputU.textContent = "";
  outputV.textContent = "";
  outputW.textContent = "";
  outputX.textContent = "";
  outputY.textContent = "";
  outputZ.textContent = "";

}
else if (input === 'L' || input === 'l') {
  let startL = countries.filter(item => item.name.startsWith('L'));
  let pop_sort = startL.sort(function(a, b) {
    return b.population - a.population
  }) 
  for(let i = 0; i < startL.length; i++) {
    searchItem.textContent = `${startL.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startL[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startL[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startL[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startL[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputL.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
  outputB.textContent = "";
  outputC.textContent = "";
  outputD.textContent = "";
  outputE.textContent = "";
  outputF.textContent = "";
  outputG.textContent = "";
  outputH.textContent = "";
  outputI.textContent = "";
  outputJ.textContent = "";
  outputK.textContent = "";
  outputM.textContent = "";
  outputN.textContent = "";
  outputO.textContent = "";
  outputP.textContent = "";
  outputQ.textContent = "";
  outputR.textContent = "";
  outputS.textContent = "";
  outputT.textContent = "";
  outputU.textContent = "";
  outputV.textContent = "";
  outputW.textContent = "";
  outputX.textContent = "";
  outputY.textContent = "";
  outputZ.textContent = "";
}
else if (input === 'M' || input === 'm') {
  let startM = countries.filter(item => item.name.startsWith('M'));
  let pop_sort = startM.sort(function(a, b) {
    return b.population - a.population
  }) 
  for(let i = 0; i < startM.length; i++) {
    searchItem.textContent = `${startM.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startM[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startM[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startM[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startM[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputM.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
outputB.textContent = "";
outputC.textContent = "";
outputD.textContent = "";
outputE.textContent = "";
outputF.textContent = "";
outputG.textContent = "";
outputH.textContent = "";
outputI.textContent = "";
outputJ.textContent = "";
outputK.textContent = "";
outputL.textContent = "";
outputN.textContent = "";
outputO.textContent = "";
outputP.textContent = "";
outputQ.textContent = "";
outputR.textContent = "";
outputS.textContent = "";
outputT.textContent = "";
outputU.textContent = "";
outputV.textContent = "";
outputW.textContent = "";
outputX.textContent = "";
outputY.textContent = "";
outputZ.textContent = "";
} else if (input === "N" || input === "n") {
  let startN = countries.filter(item => item.name.startsWith('N'));
  let pop_sort = startN.sort(function(a, b) {
    return b.population - a.population
  }) 
  for(let i = 0; i < startN.length; i++) {
    searchItem.textContent = `${startN.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startN[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startN[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startN[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startN[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputN.append(aArray)
    }
    errorMessage.textContent = ``
outputA.textContent = "";
outputB.textContent = "";
outputC.textContent = "";
outputD.textContent = "";
outputE.textContent = "";
outputF.textContent = "";
outputG.textContent = "";
outputH.textContent = "";
outputI.textContent = "";
outputJ.textContent = "";
outputK.textContent = "";
outputL.textContent = "";
outputM.textContent = "";
outputO.textContent = "";
outputP.textContent = "";
outputQ.textContent = "";
outputR.textContent = "";
outputS.textContent = "";
outputT.textContent = "";
outputU.textContent = "";
outputV.textContent = "";
outputW.textContent = "";
outputX.textContent = "";
outputY.textContent = "";
outputZ.textContent = "";
} else if (input === "O" || input === "o") {
  let startO = countries.filter(item => item.name.startsWith('O'));
  let pop_sort = startO.sort(function(a, b) {
    return b.population - a.population
  }) 
  for(let i = 0; i < startO.length; i++) {
    searchItem.textContent = `${startO.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startO[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startO[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startO[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startO[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputO.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
outputB.textContent = "";
outputC.textContent = "";
outputD.textContent = "";
outputE.textContent = "";
outputF.textContent = "";
outputG.textContent = "";
outputH.textContent = "";
outputI.textContent = "";
outputJ.textContent = "";
outputK.textContent = "";
outputL.textContent = "";
outputM.textContent = "";
outputN.textContent = "";
outputP.textContent = "";
outputQ.textContent = "";
outputR.textContent = "";
outputS.textContent = "";
outputT.textContent = "";
outputU.textContent = "";
outputV.textContent = "";
outputW.textContent = "";
outputX.textContent = "";
outputY.textContent = "";
outputZ.textContent = "";
}
else if (input === 'P' || input === 'p') {
  let startP = countries.filter(item => item.name.startsWith('P'));
  let pop_sort = startP.sort(function(a, b) {
    return b.population - a.population
  }) 
  for(let i = 0; i < startP.length; i++) {
    searchItem.textContent = `${startP.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startP[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startP[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startP[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startP[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputP.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
  outputB.textContent = "";
  outputC.textContent = "";
  outputD.textContent = "";
  outputE.textContent = "";
  outputF.textContent = "";
  outputG.textContent = "";
  outputH.textContent = "";
  outputI.textContent = "";
  outputJ.textContent = "";
  outputK.textContent = "";
  outputL.textContent = "";
  outputM.textContent = "";
  outputN.textContent = "";
  outputO.textContent = "";
  outputQ.textContent = "";
  outputR.textContent = "";
  outputS.textContent = "";
  outputT.textContent = "";
  outputU.textContent = "";
  outputV.textContent = "";
  outputW.textContent = "";
  outputX.textContent = "";
  outputY.textContent = "";
  outputZ.textContent = "";
}
else if (input === 'Q' || input === 'q') {
  let startQ = countries.filter(item => item.name.startsWith('Q'));
  let pop_sort = startQ.sort(function(a, b) {
    return b.population - a.population
  }) 
  for(let i = 0; i < startQ.length; i++) {
    searchItem.textContent = `${startQ.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startQ[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startQ[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startQ[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startQ[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputQ.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
  outputB.textContent = "";
  outputC.textContent = "";
  outputD.textContent = "";
  outputE.textContent = "";
  outputF.textContent = "";
  outputG.textContent = "";
  outputH.textContent = "";
  outputI.textContent = "";
  outputJ.textContent = "";
  outputK.textContent = "";
  outputL.textContent = "";
  outputM.textContent = "";
  outputN.textContent = "";
  outputO.textContent = "";
  outputP.textContent = "";
  outputR.textContent = "";
  outputS.textContent = "";
  outputT.textContent = "";
  outputU.textContent = "";
  outputV.textContent = "";
  outputW.textContent = "";
  outputX.textContent = "";
  outputY.textContent = "";
  outputZ.textContent = "";
}
else if (input === 'R' || input === 'r') {
  let startR = countries.filter(item => item.name.startsWith('R'));
  let pop_sort = startR.sort(function(a, b) {
    return b.population - a.population
  }) 
  for(let i = 0; i < startR.length; i++) {
    searchItem.textContent = `${startR.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startR[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startR[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startR[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startR[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputR.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
outputB.textContent = "";
outputC.textContent = "";
outputD.textContent = "";
outputE.textContent = "";
outputF.textContent = "";
outputG.textContent = "";
outputH.textContent = "";
outputI.textContent = "";
outputJ.textContent = "";
outputK.textContent = "";
outputL.textContent = "";
outputM.textContent = "";
outputN.textContent = "";
outputO.textContent = "";
outputP.textContent = "";
outputQ.textContent = "";
outputS.textContent = "";
outputT.textContent = "";
outputU.textContent = "";
outputV.textContent = "";
outputW.textContent = "";
outputX.textContent = "";
outputY.textContent = "";
outputZ.textContent = "";
}
else if (input === 'S' || input === 's') {
  let startS = countries.filter(item => item.name.startsWith('S'));
  let pop_sort = startS.sort(function(a, b) {
    return b.population - a.population
  }) 
  for(let i = 0; i < startS.length; i++) {
    searchItem.textContent = `${startS.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startS[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startS[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startS[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startS[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputS.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
outputB.textContent = "";
outputC.textContent = "";
outputD.textContent = "";
outputE.textContent = "";
outputF.textContent = "";
outputG.textContent = "";
outputH.textContent = "";
outputI.textContent = "";
outputJ.textContent = "";
outputK.textContent = "";
outputL.textContent = "";
outputM.textContent = "";
outputN.textContent = "";
outputO.textContent = "";
outputP.textContent = "";
outputQ.textContent = "";
outputR.textContent = "";
outputT.textContent = "";
outputU.textContent = "";
outputV.textContent = "";
outputW.textContent = "";
outputX.textContent = "";
outputY.textContent = "";
outputZ.textContent = "";
}
else if (input === 'T' || input === 't') {
  let startT = countries.filter(item => item.name.startsWith('T'));
  let pop_sort = startT.sort(function(a, b) {
    return b.population - a.population
  }) 
  for(let i = 0; i < startT.length; i++) {
    searchItem.textContent = `${startT.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startT[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startT[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startT[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startT[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputT.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
  outputB.textContent = "";
  outputC.textContent = "";
  outputD.textContent = "";
  outputE.textContent = "";
  outputF.textContent = "";
  outputG.textContent = "";
  outputH.textContent = "";
  outputI.textContent = "";
  outputJ.textContent = "";
  outputK.textContent = "";
  outputL.textContent = "";
  outputM.textContent = "";
  outputN.textContent = "";
  outputO.textContent = "";
  outputP.textContent = "";
  outputQ.textContent = "";
  outputR.textContent = "";
  outputS.textContent = "";
  outputU.textContent = "";
  outputV.textContent = "";
  outputW.textContent = "";
  outputX.textContent = "";
  outputY.textContent = "";
  outputZ.textContent = "";
}
else if (input === 'U' || input === 'u') {
  let startU = countries.filter(item => item.name.startsWith('U'));
  let pop_sort = startU.sort(function(a, b) {
    return b.population - a.population
  }) 
  for(let i = 0; i < startU.length; i++) {
    searchItem.textContent = `${startU.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startU[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startU[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startU[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startU[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputU.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
outputB.textContent = "";
outputC.textContent = "";
outputD.textContent = "";
outputE.textContent = "";
outputF.textContent = "";
outputG.textContent = "";
outputH.textContent = "";
outputI.textContent = "";
outputJ.textContent = "";
outputK.textContent = "";
outputL.textContent = "";
outputM.textContent = "";
outputN.textContent = "";
outputO.textContent = "";
outputP.textContent = "";
outputQ.textContent = "";
outputR.textContent = "";
outputS.textContent = "";
outputT.textContent = "";
outputV.textContent = "";
outputW.textContent = "";
outputX.textContent = "";
outputY.textContent = "";
outputZ.textContent = "";
}
else if (input === 'V' || input === 'v') {
  let startV = countries.filter(item => item.name.startsWith('V'));
  let pop_sort = startV.sort(function(a, b) {
    return b.population - a.population
  }) 
  for(var i = 0; i < startV.length; i++) {
    searchItem.textContent = `${startV.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startV[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startV[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startV[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startV[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputV.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
outputB.textContent = "";
outputC.textContent = "";
outputD.textContent = "";
outputE.textContent = "";
outputF.textContent = "";
outputG.textContent = "";
outputH.textContent = "";
outputI.textContent = "";
outputJ.textContent = "";
outputK.textContent = "";
outputL.textContent = "";
outputM.textContent = "";
outputN.textContent = "";
outputO.textContent = "";
outputP.textContent = "";
outputQ.textContent = "";
outputR.textContent = "";
outputS.textContent = "";
outputT.textContent = "";
outputU.textContent = "";
outputW.textContent = "";
outputX.textContent = "";
outputY.textContent = "";
outputZ.textContent = "";
}
else if (input === 'W' || input === 'w') {
  let startW = countries.filter(item => item.name.startsWith('W'));
  let pop_sort = startW.sort(function(a, b) {
    return b.population - a.population
  }) 
  for(var i = 0; i < startX.length; i++) {
    searchItem.textContent = `${startW.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startX[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startX[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startX[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startW[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputW.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
  outputB.textContent = "";
  outputC.textContent = "";
  outputD.textContent = "";
  outputE.textContent = "";
  outputF.textContent = "";
  outputG.textContent = "";
  outputH.textContent = "";
  outputI.textContent = "";
  outputJ.textContent = "";
  outputK.textContent = "";
  outputL.textContent = "";
  outputM.textContent = "";
  outputN.textContent = "";
  outputO.textContent = "";
  outputP.textContent = "";
  outputQ.textContent = "";
  outputR.textContent = "";
  outputS.textContent = "";
  outputT.textContent = "";
  outputU.textContent = "";
  outputV.textContent = "";
  outputW.textContent = `No country starts with W`;
  outputX.textContent = "";
  outputY.textContent = "";
  outputZ.textContent = "";
}
else if (input === 'X' || input === 'x') {
  let startX = countries.filter(item => item.name.startsWith('X'));
  for(var i = 0; i < startX.length; i++) {
    searchItem.textContent = `${startX.length} countries satisfied the search criteria`
   
}
errorMessage.textContent = ``
outputA.textContent = "";
outputB.textContent = "";
outputC.textContent = "";
outputD.textContent = "";
outputE.textContent = "";
outputF.textContent = "";
outputG.textContent = "";
outputH.textContent = "";
outputI.textContent = "";
outputJ.textContent = "";
outputK.textContent = "";
outputL.textContent = "";
outputM.textContent = "";
outputN.textContent = "";
outputO.textContent = "";
outputP.textContent = "";
outputQ.textContent = "";
outputR.textContent = "";
outputS.textContent = "";
outputT.textContent = "";
outputU.textContent = "";
outputV.textContent = "";
outputW.textContent = "";
outputX.textContent = `No country starts with X`;
outputY.textContent = "";
outputZ.textContent = "";
}
else if (input === 'Y' || input === 'y') {
  let startY = countries.filter(item => item.name.startsWith('Y'));
  let pop_sort = startY.sort(function(a, b) {
    return b.population - a.population
  }) 
  for(var i = 0; i < startY.length; i++) {
    searchItem.textContent = `${startY.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let name = startY[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startY[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startY[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startY[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(name_text, capital_text, languages_text, population_text)
      outputY.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
  outputB.textContent = "";
  outputC.textContent = "";
  outputD.textContent = "";
  outputE.textContent = "";
  outputF.textContent = "";
  outputG.textContent = "";
  outputH.textContent = "";
  outputI.textContent = "";
  outputJ.textContent = "";
  outputK.textContent = "";
  outputL.textContent = "";
  outputM.textContent = "";
  outputN.textContent = "";
  outputO.textContent = "";
  outputP.textContent = "";
  outputQ.textContent = "";
  outputR.textContent = "";
  outputS.textContent = "";
  outputT.textContent = "";
  outputU.textContent = "";
  outputV.textContent = "";
  outputW.textContent = "";
  outputX.textContent = "";
  outputZ.textContent = "";
}
else if (input === 'Z' || input === 'z') {
  let startZ = countries.filter(item => item.name.startsWith('Z'));
  let pop_sort = startZ.sort(function(a, b) {
    return b.population - a.population
  }) 
  for(var i = 0; i < startZ.length; i++) {
    searchItem.textContent = `${startZ.length} countries satisfied the search criteria`
    let  aArray = document.createElement("p");
    aArray.className = "countries_output";

    let flag = startZ[i].flag
    let flag_img = document.createElement("p");
    flag_img.className = "flag_img";
    flag_img.append(flag)

    let name = startZ[i].name
    let name_text = document.createElement("p");
    name_text.className = "name_text";
    name_text.textContent = `${name}`
    
    let capital = startZ[i].capital
    let  capital_text = document.createElement("p");
    capital_text.className = "capital_text";
    capital_text.textContent = `Capital: ${capital}`

    let languages = startZ[i].languages
    let  languages_text = document.createElement("p");
    languages_text.className = "languages_text";
    languages_text.textContent = `Languages: ${languages}`

    let population = startZ[i].population
    let  population_text = document.createElement("p");
    population_text.className = "population_text";
    population_text.textContent = `Population: ${population.toLocaleString("en-US")}`;

      aArray.append(flag_img ,name_text, capital_text, languages_text, population_text)
      outputZ.append(aArray)
}
errorMessage.textContent = ``
outputA.textContent = "";
  outputB.textContent = "";
  outputC.textContent = "";
  outputD.textContent = "";
  outputE.textContent = "";
  outputF.textContent = "";
  outputG.textContent = "";
  outputH.textContent = "";
  outputI.textContent = "";
  outputJ.textContent = "";
  outputK.textContent = "";
  outputL.textContent = "";
  outputM.textContent = "";
  outputN.textContent = "";
  outputO.textContent = "";
  outputP.textContent = "";
  outputQ.textContent = "";
  outputR.textContent = "";
  outputS.textContent = "";
  outputT.textContent = "";
  outputU.textContent = "";
  outputV.textContent = "";
  outputW.textContent = "";
  outputX.textContent = "";
  outputY.textContent = "";
}

})

for( let i = 0; i < countries.length; i++) {
  document.body.append(countries[i].flag)

}