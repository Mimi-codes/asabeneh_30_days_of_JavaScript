import { countries } from "./countries.js";

/*const body = document.querySelector('body')
body.style.fontFamily = "'Montserrat', sans-serif"

const hero_section = document.createElement('div')
hero_section.className = 'hero_section'
hero_section.style.textAlign = 'center'

const title = document.createElement('h4')
title.className = 'title'
title.style.textTransform = 'uppercase'
title.style.paddingTop = '4rem'
title.style.fontSize = '1.5rem'
title.style.color = ''
title.textContent = 'world countries list'

const total_countries = document.createElement('p')
total_countries.className = 'total_countries'
total_countries.textContent = `Total Number of countries: ${countries.length}`
 


document.body.append(hero_section)
hero_section.append(title, total_countries)
// console.log(countries)
// alert('Open the console and check if the countries has been loaded')
*/

const total_countries = document.querySelector(".total_countries");
total_countries.textContent = `Total Number of countries: ${countries.length}`;

const countries_start = document.querySelector(".countries_start");

countries_start.textContent = `Countries containing are `;

const start_btn = document.querySelector(".start_btn");
start_btn.addEventListener("click", (e) => {
  // console.log(ca)
});

let startA = countries.filter((byLetter) => byLetter.startsWith("A"));

console.log(startA);

let startB = countries.filter((byLetter) => byLetter.startsWith("B"));
console.log(startB);

let startC = countries.filter((byLetter) => byLetter.startsWith("C"));
console.log(startC);

let startD = countries.filter((byLetter) => byLetter.startsWith("D"));
console.log(startD);

let startE = countries.filter((byLetter) => byLetter.startsWith("E"));
console.log(startE);

let startF = countries.filter((byLetter) => byLetter.startsWith("F"));
console.log(startF);

let startG = countries.filter((byLetter) => byLetter.startsWith("G"));
console.log(startG);

let startH = countries.filter((byLetter) => byLetter.startsWith("H"));
console.log(startH);

let startI = countries.filter((byLetter) => byLetter.startsWith("I"));
console.log(startI);

let startJ = countries.filter((byLetter) => byLetter.startsWith("J"));
console.log(startJ);

let startK = countries.filter((byLetter) => byLetter.startsWith("K"));
console.log(startK);

let startL = countries.filter((byLetter) => byLetter.startsWith("L"));
console.log(startL);

let startM = countries.filter((byLetter) => byLetter.startsWith("M"));
console.log(startM);

let startN = countries.filter((byLetter) => byLetter.startsWith("N"));
console.log(startN);

let startO = countries.filter((byLetter) => byLetter.startsWith("O"));
console.log(startO);

let startP = countries.filter((byLetter) => byLetter.startsWith("P"));
console.log(startP);

let startQ = countries.filter((byLetter) => byLetter.startsWith("Q"));
console.log(startQ);

let startR = countries.filter((byLetter) => byLetter.startsWith("R"));
console.log(startR);

let startS = countries.filter((byLetter) => byLetter.startsWith("S"));
console.log(startS);

let startT = countries.filter((byLetter) => byLetter.startsWith("T"));
console.log(startT);

let startU = countries.filter((byLetter) => byLetter.startsWith("U"));
console.log(startU);

let startV = countries.filter((byLetter) => byLetter.startsWith("V"));
console.log(startV);

let startW = countries.filter((byLetter) => byLetter.startsWith("W"));
console.log(startW);

let startX = countries.filter((byLetter) => byLetter.startsWith("X"));
console.log(startX);

let startY = countries.filter((byLetter) => byLetter.startsWith("Y"));
console.log(startY);

let startZ = countries.filter((byLetter) => byLetter.startsWith("Z"));
console.log(startZ);

const input = document.querySelector(".text_btn");

const outputA = document.createElement("div");

outputA.className = 'output_a'
outputA.style.textAlign = "center"
outputA.style.marginLeft = '4.5%'
outputA.style.marginTop = '5%'
outputA.style.display = 'inline-grid'
outputA.style.gridTemplateColumns = 'auto auto auto auto auto auto'

const outputB = document.createElement("div");
outputB.style.textAlign = "center"
outputB.style.marginLeft = '4.5%'
outputB.style.marginTop = '5%'
outputB.style.display = 'inline-grid'
outputB.style.gridTemplateColumns = 'auto auto auto auto auto auto'

const outputC = document.createElement("div");
outputC.style.textAlign = "center"
outputC.style.marginLeft = '4.5%'
outputC.style.marginTop = '5%'
outputC.style.display = 'inline-grid'
outputC.style.gridTemplateColumns = 'auto auto auto auto auto auto'

const outputD = document.createElement("div");
outputD.style.textAlign = "center"
outputD.style.marginLeft = '4.5%'
outputD.style.marginTop = '5%'
outputD.style.display = 'inline-grid'
outputD.style.gridTemplateColumns = 'auto auto auto auto auto auto'

const outputE = document.createElement("div");
outputE.style.textAlign = "center"
outputE.style.marginLeft = '4.5%'
outputE.style.marginTop = '5%'
outputE.style.display = 'inline-grid'
outputE.style.gridTemplateColumns = 'auto auto auto auto auto auto'

const outputF = document.createElement("div");
const outputG = document.createElement("div");
const outputH = document.createElement("div");
const outputI = document.createElement("div");
const outputJ = document.createElement("div");
const outputK = document.createElement("div");
const outputL = document.createElement("div");
const outputM = document.createElement("div");
const outputN = document.createElement("div");
const outputO = document.createElement("div");
const outputP = document.createElement("div");
const outputQ = document.createElement("div");
const outputR = document.createElement("div");
const outputS = document.createElement("div");
const outputT = document.createElement("div");
const outputU = document.createElement("div");
const outputV = document.createElement("div");
const outputW = document.createElement("div");
const outputX = document.createElement("div");
const outputY = document.createElement("div");
const outputZ = document.createElement("div");
document.body.append(
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
);

input.addEventListener("input", (e) => {
  let type = e.data;
  if (type === "A" || type === "a") {
    countries_start.textContent = `Countries that starts with a are: ${startA.length}`;

    let aArray 
    for(let i = 0; i < startA.length; i++) {
        aArray = document.createElement('p');
        aArray.className = 'countries'
        aArray.style.padding = '2rem 0.5rem'
        aArray.style.border = "1px solid #dbd9d9"
        aArray.style.borderRadius = "5px"
        aArray.style.fontWeight = "bold"
        aArray.style.margin = "0.5rem"
        aArray.style.width = "9rem"
        aArray.textContent += `${startA[i]}`
        outputA.appendChild(aArray)
    }

    outputA.append(aArray);
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

    
  } else if (type === "B" || type === "b") {
    countries_start.textContent = `Countries that starts with b are ${startB.length}`;

    let aArray 
    for(let i = 0; i < startB.length; i++) {
         aArray = document.createElement('p');
        aArray.className = 'countries'
        aArray.style.padding = '2rem 0.5rem'
        aArray.style.border = "1px solid #dbd9d9"
        aArray.style.borderRadius = "5px"
        aArray.style.fontWeight = "bold"
        aArray.style.margin = "0.5rem"
        aArray.style.width = "9rem"
        aArray.textContent += `${startB[i]}`
        outputB.appendChild(aArray)
    }
    outputA.textContent = "";
    outputB.append(aArray);
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
  } else if (type === "C" || type === "c") {
    countries_start.textContent = `Countries that starts with c are ${startC.length}`;
    let aArray 
    for(let i = 0; i < startC.length; i++) {
         aArray = document.createElement('p');
        aArray.className = 'countries'
        aArray.style.padding = '2rem 0.5rem'
        aArray.style.border = "1px solid #dbd9d9"
        aArray.style.borderRadius = "5px"
        aArray.style.fontWeight = "bold"
        aArray.style.margin = "0.5rem"
        aArray.style.width = "9rem"
        aArray.textContent += `${startC[i]}`
        outputC.appendChild(aArray)
    }
    outputA.textContent = "";
    outputB.textContent = "";
    outputC.append(aArray);
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
  } else if (type === "D" || type === "d") {
    countries_start.textContent = `Countries that starts with d are ${startD.length}`;
    let aArray 
    for(let i = 0; i < startD.length; i++) {
         aArray = document.createElement('p');
        aArray.className = 'countries'
        aArray.style.padding = '2rem 0.5rem'
        aArray.style.border = "1px solid #dbd9d9"
        aArray.style.backgroundImage = "url('map_image.jpg')"
        aArray.style.borderRadius = "5px"
        aArray.style.fontWeight = "bold"
        aArray.style.margin = "0.5rem"
        aArray.style.width = "9rem"
        aArray.textContent += `${startD[i]}`
        outputD.appendChild(aArray)
    }
    outputA.textContent = "";
    outputB.textContent = "";
    outputC.textContent = "";
    outputD.append(aArray);
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
  } else if (type === "E" || type === "e") {
    countries_start.textContent = `Countries that starts with e are ${startE.length}`;

    outputA.textContent = "";
    outputB.textContent = "";
    outputC.textContent = "";
    outputD.textContent = '';
    outputE.append(startE);
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
  } else if (type === "F" || type === "f") {
    countries_start.textContent = `Countries that starts with f are ${startF.length}`;

    outputA.textContent = "";
    outputB.textContent = "";
    outputC.textContent = "";
    outputD.textContent = '';
    outputE.textContent = "";
    outputF.append(startF)
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
  } else if (type === "G" || type === "g") {
    countries_start.textContent = `Countries that starts with g are ${startG.length}`;

    outputA.textContent = "";
    outputB.textContent = "";
    outputC.textContent = "";
    outputD.textContent = '';
    outputE.textContent = "";
    outputF.textContent = "";
    outputG.append(startG);
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
  } else if (type === "H" || type === "h") {
    countries_start.textContent = `Countries that starts with h are ${startH.length}`;

    outputA.textContent = "";
    outputB.textContent = "";
    outputC.textContent = "";
    outputD.textContent = ''
    outputE.textContent = "";
    outputF.textContent = "";
    outputG.textContent = "";
    outputH.append(startH)
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
  } else if (type === "I" || type === "i") {
    countries_start.textContent = `Countries that starts with i are ${startI.length}`;

    outputA.textContent = "";
    outputB.textContent = "";
    outputC.textContent = "";
    outputD.textContent = '';
    outputE.textContent = "";
    outputF.textContent = "";
    outputG.textContent = "";
    outputH.textContent = "";
    outputI.append(startI);
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
  } else if (type === "J" || type === "j") {
    countries_start.textContent = `Countries that starts with j are ${startJ.length}`;

    outputA.textContent = "";
    outputB.textContent = "";
    outputC.textContent = "";
    outputD.textContent = "";
    outputE.textContent = "";
    outputF.textContent = "";
    outputG.textContent = "";
    outputH.textContent = "";
    outputI.textContent = "";
    outputJ.append(startJ)
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
  } else if (type === "K" || type === "k") {
    countries_start.textContent = `Countries that starts with k are ${startK.length}`;

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
    outputK.append(startK)
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
  } else if (type === "L" || type === "l") {
    countries_start.textContent = `Countries that starts with l are ${startL.length}`;

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
    outputL.append(startL)
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
  } else if (type === "M" || type === "m") {
    countries_start.textContent = `Countries that starts with m are ${startM.length}`;

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
    outputM.append(startM)
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
  } else if (type === "N" || type === "n") {
    countries_start.textContent = `Countries that starts with n are ${startN.length}`;

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
    outputN.append(startN)
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
  } else if (type === "O" || type === "o") {
    countries_start.textContent = `Countries that starts with o are ${startO.length}`;

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
    outputO.append(startO)
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
  } else if (type === "P" || type === "p") {
    countries_start.textContent = `Countries that starts with p are ${startP.length}`;

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
    outputP.append(startP)
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
  } else if (type === "Q" || type === "q") {
    countries_start.textContent = `Countries that starts with q are ${startQ.length}`;

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
    outputQ.append(startQ)
    outputR.textContent = "";
    outputS.textContent = "";
    outputT.textContent = "";
    outputU.textContent = "";
    outputV.textContent = "";
    outputW.textContent = "";
    outputX.textContent = "";
    outputY.textContent = "";
    outputZ.textContent = "";
  } else if (type === "R" || type === "r") {
    countries_start.textContent = `Countries that starts with r are ${startD.length}`;

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
    outputR.append(startR)
    outputS.textContent = "";
    outputT.textContent = "";
    outputU.textContent = "";
    outputV.textContent = "";
    outputW.textContent = "";
    outputX.textContent = "";
    outputY.textContent = "";
    outputZ.textContent = "";
  } else if (type === "S" || type === "s") {
    countries_start.textContent = `Countries that starts with s are ${startS.length}`;

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
    outputS.append(startS)
    outputT.textContent = "";
    outputU.textContent = "";
    outputV.textContent = "";
    outputW.textContent = "";
    outputX.textContent = "";
    outputY.textContent = "";
    outputZ.textContent = "";
  } else if (type === "T" || type === "t") {
    countries_start.textContent = `Countries that starts with t are ${startT.length}`;

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
    outputT.append(startT)
    outputU.textContent = "";
    outputV.textContent = "";
    outputW.textContent = "";
    outputX.textContent = "";
    outputY.textContent = "";
    outputZ.textContent = "";
  } else if (type === "U" || type === "u") {
    countries_start.textContent = `Countries that starts with u are ${startU.length}`;

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
    outputU.append(startU)
    outputV.textContent = "";
    outputW.textContent = "";
    outputX.textContent = "";
    outputY.textContent = "";
    outputZ.textContent = "";
  } else if (type === "V" || type === "v") {
    countries_start.textContent = `Countries that starts with v are ${startV.length}`;

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
    outputV.append(startV)
    outputW.textContent = "";
    outputX.textContent = "";
    outputY.textContent = "";
    outputZ.textContent = "";
  } else if (type === "W" || type === "w") {
    countries_start.textContent = `Countries that starts with w are ${startW.length}`;

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
    outputW.textContent = `No country starts with W`
    outputX.textContent = "";
    outputY.textContent = "";
    outputZ.textContent = "";
  } else if (type === "X" || type === "x") {
    countries_start.textContent = `Countries that starts with x are ${startX.length}`;

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
  } else if (type === "Y" || type === "y") {
    countries_start.textContent = `Countries that starts with y are ${startY.length}`;

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
    outputY.append(startY)
    outputZ.textContent = "";
  } else if (type === "Z" || type === "z") {
    countries_start.textContent = `Countries that starts with z are ${startZ.length}`;

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
    outputZ.append(startZ);
  }
});
