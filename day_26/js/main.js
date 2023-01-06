import { countries } from "./countries.js";

const total_countries = document.querySelector(".total_countries");
total_countries.textContent = `Total Number of countries: ${countries.length}`;

const countries_start = document.querySelector(".countries_start");

countries_start.textContent = ``;

const sort_btn = document.querySelector('.sort_btn') 
sort_btn.addEventListener('click', () => {

})


const start_btn = document.querySelector(".start_btn");
start_btn.addEventListener("click", (e) => {
  // console.log(ca)
});

const search_btn = document.querySelector('.search_btn')
search_btn.addEventListener('click', (e) => {
    let click = e.type
    
})

let startA = countries.filter((byLetter) => byLetter.startsWith("A"));
let startB = countries.filter((byLetter) => byLetter.startsWith("B"));
let startC = countries.filter((byLetter) => byLetter.startsWith("C"));
let startD = countries.filter((byLetter) => byLetter.startsWith("D"));
let startE = countries.filter((byLetter) => byLetter.startsWith("E"));
let startF = countries.filter((byLetter) => byLetter.startsWith("F"));
let startG = countries.filter((byLetter) => byLetter.startsWith("G"));
let startH = countries.filter((byLetter) => byLetter.startsWith("H"));
let startI = countries.filter((byLetter) => byLetter.startsWith("I"));
let startJ = countries.filter((byLetter) => byLetter.startsWith("J"));
let startK = countries.filter((byLetter) => byLetter.startsWith("K"));
let startL = countries.filter((byLetter) => byLetter.startsWith("L"));
let startM = countries.filter((byLetter) => byLetter.startsWith("M"));
let startN = countries.filter((byLetter) => byLetter.startsWith("N"));
let startO = countries.filter((byLetter) => byLetter.startsWith("O"));
let startP = countries.filter((byLetter) => byLetter.startsWith("P"));
let startQ = countries.filter((byLetter) => byLetter.startsWith("Q"));
let startR = countries.filter((byLetter) => byLetter.startsWith("R"));
let startS = countries.filter((byLetter) => byLetter.startsWith("S"));
let startT = countries.filter((byLetter) => byLetter.startsWith("T"));
let startU = countries.filter((byLetter) => byLetter.startsWith("U"));
let startV = countries.filter((byLetter) => byLetter.startsWith("V"));
let startW = countries.filter((byLetter) => byLetter.startsWith("W"));
let startX = countries.filter((byLetter) => byLetter.startsWith("X"));
let startY = countries.filter((byLetter) => byLetter.startsWith("Y"));
let startZ = countries.filter((byLetter) => byLetter.startsWith("Z"));

const input = document.querySelector(".text_btn");

const outputA = document.createElement("div");

outputA.className = "output_a";
outputA.style.textAlign = "center";
outputA.style.marginLeft = "4.5%";
outputA.style.marginTop = "5%";
outputA.style.display = "inline-grid";
outputA.style.gridTemplateColumns = "auto auto auto auto auto auto";

const outputB = document.createElement("div");
outputB.style.textAlign = "center";
outputB.style.marginLeft = "4.5%";
outputB.style.marginTop = "5%";
outputB.style.display = "inline-grid";
outputB.style.gridTemplateColumns = "auto auto auto auto auto auto";

const outputC = document.createElement("div");
outputC.style.textAlign = "center";
outputC.style.marginLeft = "4.5%";
outputC.style.marginTop = "5%";
outputC.style.display = "inline-grid";
outputC.style.gridTemplateColumns = "auto auto auto auto auto auto";

const outputD = document.createElement("div");
outputD.style.textAlign = "center";
outputD.style.marginLeft = "4.5%";
outputD.style.marginTop = "5%";
outputD.style.display = "inline-grid";
outputD.style.gridTemplateColumns = "auto auto auto auto auto auto";

const outputE = document.createElement("div");
outputE.style.textAlign = "center";
outputE.style.marginLeft = "4.5%";
outputE.style.marginTop = "5%";
outputE.style.display = "inline-grid";
outputE.style.gridTemplateColumns = "auto auto auto auto auto auto";

const outputF = document.createElement("div");
outputF.style.textAlign = "center";
outputF.style.marginTop = "5%";
outputF.style.display = "inline-grid";
outputF.style.gridTemplateColumns = "auto auto auto auto auto auto";

const outputG = document.createElement("div");
outputG.style.textAlign = "center";
outputG.style.marginTop = "5%";
outputG.style.display = "inline-grid";
outputG.style.gridTemplateColumns = "auto auto auto auto auto auto";

const outputH = document.createElement("div");
outputH.style.textAlign = "center";
outputH.style.marginTop = "5%";
outputH.style.display = "inline-grid";
outputH.style.gridTemplateColumns = "auto auto auto auto auto auto";

const outputI = document.createElement("div");
outputI.style.textAlign = "center";
outputI.style.marginTop = "5%";
outputI.style.display = "inline-grid";
outputI.style.gridTemplateColumns = "auto auto auto auto auto auto";

const outputJ = document.createElement("div");
outputJ.style.textAlign = "center";
outputJ.style.marginTop = "5%";
outputJ.style.display = "inline-grid";
outputJ.style.gridTemplateColumns = "auto auto auto auto auto auto";

const outputK = document.createElement("div");
outputK.style.textAlign = "center";
outputK.style.marginTop = "5%";
outputK.style.display = "inline-grid";
outputK.style.gridTemplateColumns = "auto auto auto auto auto auto";

const outputL = document.createElement("div");
outputL.style.textAlign = "center";
outputL.style.marginTop = "5%";
outputL.style.display = "inline-grid";
outputL.style.gridTemplateColumns = "auto auto auto auto auto auto";

const outputM = document.createElement("div");
outputM.style.textAlign = "center";
outputM.style.marginTop = "5%";
outputM.style.display = "inline-grid";
outputM.style.gridTemplateColumns = "auto auto auto auto auto auto";

const outputN = document.createElement("div");
outputN.style.textAlign = "center";
outputN.style.marginTop = "5%";
outputN.style.display = "inline-grid";
outputN.style.gridTemplateColumns = "auto auto auto auto auto auto";

const outputO = document.createElement("div");
outputO.style.textAlign = "center";
outputO.style.marginTop = "5%";
outputO.style.display = "inline-grid";
outputO.style.gridTemplateColumns = "auto auto auto auto auto auto";

const outputP = document.createElement("div");
outputP.style.textAlign = "center";
outputP.style.marginTop = "5%";
outputP.style.display = "inline-grid";
outputP.style.gridTemplateColumns = "auto auto auto auto auto auto";

const outputQ = document.createElement("div");
outputQ.style.textAlign = "center";
outputQ.style.marginTop = "5%";
outputQ.style.display = "inline-grid";
outputQ.style.gridTemplateColumns = "auto auto auto auto auto auto";

const outputR = document.createElement("div");
outputR.style.textAlign = "center";
outputR.style.marginTop = "5%";
outputR.style.display = "inline-grid";
outputR.style.gridTemplateColumns = "auto auto auto auto auto auto";

const outputS = document.createElement("div");
outputS.style.textAlign = "center";
outputS.style.marginTop = "5%";
outputS.style.display = "inline-grid";
outputS.style.gridTemplateColumns = "auto auto auto auto auto auto";

const outputT = document.createElement("div");
outputT.style.textAlign = "center";
outputT.style.marginTop = "5%";
outputT.style.display = "inline-grid";
outputT.style.gridTemplateColumns = "auto auto auto auto auto auto";

const outputU = document.createElement("div");
outputU.style.textAlign = "center";
outputU.style.marginTop = "5%";
outputU.style.display = "inline-grid";
outputU.style.gridTemplateColumns = "auto auto auto auto auto auto";

const outputV = document.createElement("div");
outputV.style.textAlign = "center";
outputV.style.marginTop = "5%";
outputV.style.display = "inline-grid";
outputV.style.gridTemplateColumns = "auto auto auto auto auto auto";

const outputW = document.createElement("div");
outputW.style.textAlign = "center";
outputW.style.marginTop = "5%";

const outputX = document.createElement("div");
outputX.style.textAlign = "center";
outputX.style.marginTop = "5%";

const outputY = document.createElement("div");
outputY.style.textAlign = "center";
outputY.style.marginTop = "5%";
outputY.style.display = "inline-grid";
outputY.style.gridTemplateColumns = "auto auto auto auto auto auto";

const outputZ = document.createElement("div");
outputZ.style.textAlign = "center";
outputZ.style.marginTop = "5%";
outputZ.style.display = "inline-grid";
outputZ.style.gridTemplateColumns = "auto auto auto auto auto auto";

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
    countries_start.textContent = `Countries that starts with are: ${startA.length}`;

    let aArray;
    for (let i = 0; i < startA.length; i++) {
      aArray = document.createElement("p");
      aArray.className = "countries";
      aArray.style.padding = "2rem 0.5rem";
      aArray.style.border = "1px solid #dbd9d9";
      aArray.style.borderRadius = "5px";
      aArray.style.fontWeight = "bold";
      aArray.style.background = 'linear-gradient(0deg, rgb(60, 90, 116, 0.4), rgb(60, 90, 116, 0.7)), url(/day_26/images/map_image.jpg)'
      aArray.style.backgroundPosition = 'center'
      aArray.style.backgroundSize = 'cover'
      aArray.style.color = "#faf9f9";
      aArray.style.margin = "0.5rem";
      aArray.style.width = "9rem";
      aArray.textContent += `${startA[i]}`;
      outputA.appendChild(aArray);
    }

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

    let aArray;
    for (let i = 0; i < startB.length; i++) {
      aArray = document.createElement("p");
      aArray.className = "countries";
      aArray.style.padding = "2rem 0.5rem";
      aArray.style.border = "1px solid #dbd9d9";
      aArray.style.borderRadius = "5px";
      aArray.style.fontWeight = "bold";
      aArray.style.background = 'linear-gradient(0deg, rgb(60, 90, 116, 0.4), rgb(60, 90, 116, 0.7)), url(/day_26/images/map_image.jpg)'
      aArray.style.backgroundPosition = 'center'
      aArray.style.backgroundSize = 'cover'
      aArray.style.color = "#faf9f9";
      aArray.style.margin = "0.5rem";
      aArray.style.margin = "0.5rem";
      aArray.style.width = "9rem";
      aArray.textContent += `${startB[i]}`;
      outputB.appendChild(aArray);
    }
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
  } else if (type === "C" || type === "c") {
    countries_start.textContent = `Countries that starts with c are ${startC.length}`;
    let aArray;
    for (let i = 0; i < startC.length; i++) {
      aArray = document.createElement("p");
      aArray.className = "countries";
      aArray.style.padding = "2rem 0.5rem";
      aArray.style.border = "1px solid #dbd9d9";
      aArray.style.borderRadius = "5px";
      aArray.style.fontWeight = "bold";
      aArray.style.background = 'linear-gradient(0deg, rgb(60, 90, 116, 0.4), rgb(60, 90, 116, 0.7)), url(/day_26/images/map_image.jpg)'
      aArray.style.backgroundPosition = 'center'
      aArray.style.backgroundSize = 'cover'
      aArray.style.color = "#faf9f9";
      aArray.style.margin = "0.5rem";
      aArray.style.margin = "0.5rem";
      aArray.style.width = "9rem";
      aArray.textContent += `${startC[i]}`;
      outputC.appendChild(aArray);
    }
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
  } else if (type === "D" || type === "d") {
    countries_start.textContent = `Countries that starts with d are ${startD.length}`;
    let aArray;
    for (let i = 0; i < startD.length; i++) {
      aArray = document.createElement("p");
      aArray.className = "countries";
      aArray.style.padding = "2rem 0.5rem";
      aArray.style.border = "1px solid #dbd9d9";
      aArray.style.borderRadius = "5px";
      aArray.style.fontWeight = "bold";
      aArray.style.background = 'linear-gradient(0deg, rgb(60, 90, 116, 0.4), rgb(60, 90, 116, 0.7)), url(/day_26/images/map_image.jpg)'
      aArray.style.backgroundPosition = 'center'
      aArray.style.backgroundSize = 'cover'
      aArray.style.color = "#faf9f9";
      aArray.style.margin = "0.5rem";
      aArray.style.margin = "0.5rem";
      aArray.style.width = "9rem";
      aArray.textContent += `${startD[i]}`;
      outputD.appendChild(aArray);
    }
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
  } else if (type === "E" || type === "e") {
    countries_start.textContent = `Countries that starts with e are ${startE.length}`;

    let aArray;
    for (let i = 0; i < startE.length; i++) {
      aArray = document.createElement("p");
      aArray.className = "countries";
      aArray.style.padding = "2rem 0.5rem";
      aArray.style.border = "1px solid #dbd9d9";
      aArray.style.borderRadius = "5px";
      aArray.style.fontWeight = "bold";
      aArray.style.background = 'linear-gradient(0deg, rgb(60, 90, 116, 0.4), rgb(60, 90, 116, 0.7)), url(/day_26/images/map_image.jpg)'
      aArray.style.backgroundPosition = 'center'
      aArray.style.backgroundSize = 'cover'
      aArray.style.color = "#faf9f9";
      aArray.style.margin = "0.5rem";
      aArray.style.margin = "0.5rem";
      aArray.style.width = "9rem";
      aArray.textContent += `${startE[i]}`;
      outputE.appendChild(aArray);
    }
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
  } else if (type === "F" || type === "f") {
    countries_start.textContent = `Countries that starts with f are ${startF.length}`;

    let aArray;
    for (let i = 0; i < startF.length; i++) {
      aArray = document.createElement("p");
      aArray.className = "countries";
      aArray.style.padding = "2rem 0.5rem";
      aArray.style.border = "1px solid #dbd9d9";
      aArray.style.borderRadius = "5px";
      aArray.style.fontWeight = "bold";
      aArray.style.background = 'linear-gradient(0deg, rgb(60, 90, 116, 0.4), rgb(60, 90, 116, 0.7)), url(/day_26/images/map_image.jpg)'
      aArray.style.backgroundPosition = 'center'
      aArray.style.backgroundSize = 'cover'
      aArray.style.color = "#faf9f9";
      aArray.style.margin = "0.5rem";
      aArray.style.margin = "0.5rem";
      aArray.style.width = "9rem";
      aArray.textContent += `${startF[i]}`;
      outputF.appendChild(aArray);
    }
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
  } else if (type === "G" || type === "g") {
    countries_start.textContent = `Countries that starts with g are ${startG.length}`;

    let aArray;
    for (let i = 0; i < startG.length; i++) {
      aArray = document.createElement("p");
      aArray.className = "countries";
      aArray.style.padding = "2rem 0.5rem";
      aArray.style.border = "1px solid #dbd9d9";
      aArray.style.borderRadius = "5px";
      aArray.style.fontWeight = "bold";
      aArray.style.background = 'linear-gradient(0deg, rgb(60, 90, 116, 0.4), rgb(60, 90, 116, 0.7)), url(/day_26/images/map_image.jpg)'
      aArray.style.backgroundPosition = 'center'
      aArray.style.backgroundSize = 'cover'
      aArray.style.color = "#faf9f9";
      aArray.style.margin = "0.5rem";
      aArray.style.margin = "0.5rem";
      aArray.style.width = "9rem";
      aArray.textContent += `${startG[i]}`;
      outputG.appendChild(aArray);
    }
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
  } else if (type === "H" || type === "h") {
    countries_start.textContent = `Countries that starts with h are ${startH.length}`;

    let aArray;
    for (let i = 0; i < startH.length; i++) {
      aArray = document.createElement("p");
      aArray.className = "countries";
      aArray.style.padding = "2rem 0.5rem";
      aArray.style.border = "1px solid #dbd9d9";
      aArray.style.borderRadius = "5px";
      aArray.style.fontWeight = "bold";
      aArray.style.background = 'linear-gradient(0deg, rgb(60, 90, 116, 0.4), rgb(60, 90, 116, 0.7)), url(/day_26/images/map_image.jpg)'
      aArray.style.backgroundPosition = 'center'
      aArray.style.backgroundSize = 'cover'
      aArray.style.color = "#faf9f9";
      aArray.style.margin = "0.5rem";
      aArray.style.margin = "0.5rem";
      aArray.style.width = "9rem";
      aArray.textContent += `${startH[i]}`;
      outputH.appendChild(aArray);
    }
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
  } else if (type === "I" || type === "i") {
    countries_start.textContent = `Countries that starts with i are ${startI.length}`;

    let aArray;
    for (let i = 0; i < startI.length; i++) {
      aArray = document.createElement("p");
      aArray.className = "countries";
      aArray.style.padding = "2rem 0.5rem";
      aArray.style.border = "1px solid #dbd9d9";
      aArray.style.borderRadius = "5px";
      aArray.style.fontWeight = "bold";
      aArray.style.background = 'linear-gradient(0deg, rgb(60, 90, 116, 0.4), rgb(60, 90, 116, 0.7)), url(/day_26/images/map_image.jpg)'
      aArray.style.backgroundPosition = 'center'
      aArray.style.backgroundSize = 'cover'
      aArray.style.color = "#faf9f9";
      aArray.style.margin = "0.5rem";
      aArray.style.margin = "0.5rem";
      aArray.style.width = "9rem";
      aArray.textContent += `${startI[i]}`;
      outputI.appendChild(aArray);
    }
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
  } else if (type === "J" || type === "j") {
    countries_start.textContent = `Countries that starts with j are ${startJ.length}`;

    let aArray;
    for (let i = 0; i < startJ.length; i++) {
      aArray = document.createElement("p");
      aArray.className = "countries";
      aArray.style.padding = "2rem 0.5rem";
      aArray.style.border = "1px solid #dbd9d9";
      aArray.style.borderRadius = "5px";
      aArray.style.fontWeight = "bold";
      aArray.style.background = 'linear-gradient(0deg, rgb(60, 90, 116, 0.4), rgb(60, 90, 116, 0.7)), url(/day_26/images/map_image.jpg)'
      aArray.style.backgroundPosition = 'center'
      aArray.style.backgroundSize = 'cover'
      aArray.style.color = "#faf9f9";
      aArray.style.margin = "0.5rem";
      aArray.style.margin = "0.5rem";
      aArray.style.width = "9rem";
      aArray.textContent += `${startJ[i]}`;
      outputJ.appendChild(aArray);
    }
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
  } else if (type === "K" || type === "k") {
    countries_start.textContent = `Countries that starts with k are ${startK.length}`;

    let aArray;
    for (let i = 0; i < startK.length; i++) {
      aArray = document.createElement("p");
      aArray.className = "countries";
      aArray.style.padding = "2rem 0.5rem";
      aArray.style.border = "1px solid #dbd9d9";
      aArray.style.borderRadius = "5px";
      aArray.style.fontWeight = "bold";
      aArray.style.background = 'linear-gradient(0deg, rgb(60, 90, 116, 0.4), rgb(60, 90, 116, 0.7)), url(/day_26/images/map_image.jpg)'
      aArray.style.backgroundPosition = 'center'
      aArray.style.backgroundSize = 'cover'
      aArray.style.color = "#faf9f9";
      aArray.style.margin = "0.5rem";
      aArray.style.margin = "0.5rem";
      aArray.style.width = "9rem";
      aArray.textContent += `${startK[i]}`;
      outputK.appendChild(aArray);
    }
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
  } else if (type === "L" || type === "l") {
    countries_start.textContent = `Countries that starts with l are ${startL.length}`;

    let aArray;
    for (let i = 0; i < startL.length; i++) {
      aArray = document.createElement("p");
      aArray.className = "countries";
      aArray.style.padding = "2rem 0.5rem";
      aArray.style.border = "1px solid #dbd9d9";
      aArray.style.borderRadius = "5px";
      aArray.style.fontWeight = "bold";
      aArray.style.background = 'linear-gradient(0deg, rgb(60, 90, 116, 0.4), rgb(60, 90, 116, 0.7)), url(/day_26/images/map_image.jpg)'
      aArray.style.backgroundPosition = 'center'
      aArray.style.backgroundSize = 'cover'
      aArray.style.color = "#faf9f9";
      aArray.style.margin = "0.5rem";
      aArray.style.margin = "0.5rem";
      aArray.style.width = "9rem";
      aArray.textContent += `${startL[i]}`;
      outputL.appendChild(aArray);
    }
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
  } else if (type === "M" || type === "m") {
    countries_start.textContent = `Countries that starts with m are ${startM.length}`;

    let aArray;
    for (let i = 0; i < startM.length; i++) {
      aArray = document.createElement("p");
      aArray.className = "countries";
      aArray.style.padding = "2rem 0.5rem";
      aArray.style.border = "1px solid #dbd9d9";
      aArray.style.borderRadius = "5px";
      aArray.style.fontWeight = "bold";
      aArray.style.background = 'linear-gradient(0deg, rgb(60, 90, 116, 0.4), rgb(60, 90, 116, 0.7)), url(/day_26/images/map_image.jpg)'
      aArray.style.backgroundPosition = 'center'
      aArray.style.backgroundSize = 'cover'
      aArray.style.color = "#faf9f9";
      aArray.style.margin = "0.5rem";
      aArray.style.margin = "0.5rem";
      aArray.style.width = "9rem";
      aArray.textContent += `${startM[i]}`;
      outputM.appendChild(aArray);
    }
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
  } else if (type === "N" || type === "n") {
    countries_start.textContent = `Countries that starts with n are ${startN.length}`;

    let aArray;
    for (let i = 0; i < startN.length; i++) {
      aArray = document.createElement("p");
      aArray.className = "countries";
      aArray.style.padding = "2rem 0.5rem";
      aArray.style.border = "1px solid #dbd9d9";
      aArray.style.borderRadius = "5px";
      aArray.style.fontWeight = "bold";
      aArray.style.background = 'linear-gradient(0deg, rgb(60, 90, 116, 0.4), rgb(60, 90, 116, 0.7)), url(/day_26/images/map_image.jpg)'
      aArray.style.backgroundPosition = 'center'
      aArray.style.backgroundSize = 'cover'
      aArray.style.color = "#faf9f9";
      aArray.style.margin = "0.5rem";
      aArray.style.margin = "0.5rem";
      aArray.style.width = "9rem";
      aArray.textContent += `${startN[i]}`;
      outputN.appendChild(aArray);
    }
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
  } else if (type === "O" || type === "o") {
    countries_start.textContent = `Countries that starts with o are ${startO.length}`;

    let aArray;
    for (let i = 0; i < startO.length; i++) {
      aArray = document.createElement("p");
      aArray.className = "countries";
      aArray.style.padding = "2rem 0.5rem";
      aArray.style.border = "1px solid #dbd9d9";
      aArray.style.borderRadius = "5px";
      aArray.style.fontWeight = "bold";
      aArray.style.background = 'linear-gradient(0deg, rgb(60, 90, 116, 0.4), rgb(60, 90, 116, 0.7)), url(/day_26/images/map_image.jpg)'
      aArray.style.backgroundPosition = 'center'
      aArray.style.backgroundSize = 'cover'
      aArray.style.color = "#faf9f9";
      aArray.style.margin = "0.5rem";
      aArray.style.margin = "0.5rem";
      aArray.style.width = "9rem";
      aArray.textContent += `${startO[i]}`;
      outputO.appendChild(aArray);
    }
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
  } else if (type === "P" || type === "p") {
    countries_start.textContent = `Countries that starts with p are ${startP.length}`;

    let aArray;
    for (let i = 0; i < startP.length; i++) {
      aArray = document.createElement("p");
      aArray.className = "countries";
      aArray.style.padding = "2rem 0.5rem";
      aArray.style.border = "1px solid #dbd9d9";
      aArray.style.borderRadius = "5px";
      aArray.style.fontWeight = "bold";
      aArray.style.background = 'linear-gradient(0deg, rgb(60, 90, 116, 0.4), rgb(60, 90, 116, 0.7)), url(/day_26/images/map_image.jpg)'
      aArray.style.backgroundPosition = 'center'
      aArray.style.backgroundSize = 'cover'
      aArray.style.color = "#faf9f9";
      aArray.style.margin = "0.5rem";
      aArray.style.margin = "0.5rem";
      aArray.style.width = "9rem";
      aArray.textContent += `${startP[i]}`;
      outputP.appendChild(aArray);
    }
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
  } else if (type === "Q" || type === "q") {
    countries_start.textContent = `Countries that starts with q are ${startQ.length}`;

    let aArray;
    for (let i = 0; i < startQ.length; i++) {
      aArray = document.createElement("p");
      aArray.className = "countries";
      aArray.style.padding = "2rem 0.5rem";
      aArray.style.border = "1px solid #dbd9d9";
      aArray.style.borderRadius = "5px";
      aArray.style.fontWeight = "bold";
      aArray.style.background = 'linear-gradient(0deg, rgb(60, 90, 116, 0.4), rgb(60, 90, 116, 0.7)), url(/day_26/images/map_image.jpg)'
      aArray.style.backgroundPosition = 'center'
      aArray.style.backgroundSize = 'cover'
      aArray.style.color = "#faf9f9";
      aArray.style.margin = "0.5rem";
      aArray.style.margin = "0.5rem";
      aArray.style.width = "9rem";
      aArray.textContent += `${startQ[i]}`;
      outputQ.appendChild(aArray);
    }
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
  } else if (type === "R" || type === "r") {
    countries_start.textContent = `Countries that starts with r are ${startD.length}`;

    let aArray;
    for (let i = 0; i < startR.length; i++) {
      aArray = document.createElement("p");
      aArray.className = "countries";
      aArray.style.padding = "2rem 0.5rem";
      aArray.style.border = "1px solid #dbd9d9";
      aArray.style.borderRadius = "5px";
      aArray.style.fontWeight = "bold";
      aArray.style.background = 'linear-gradient(0deg, rgb(60, 90, 116, 0.4), rgb(60, 90, 116, 0.7)), url(/day_26/images/map_image.jpg)'
      aArray.style.backgroundPosition = 'center'
      aArray.style.backgroundSize = 'cover'
      aArray.style.color = "#faf9f9";
      aArray.style.margin = "0.5rem";
      aArray.style.margin = "0.5rem";
      aArray.style.width = "9rem";
      aArray.textContent += `${startR[i]}`;
      outputR.appendChild(aArray);
    }
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
  } else if (type === "S" || type === "s") {
    countries_start.textContent = `Countries that starts with s are ${startS.length}`;

    let aArray;
    for (let i = 0; i < startS.length; i++) {
      aArray = document.createElement("p");
      aArray.className = "countries";
      aArray.style.padding = "2rem 0.5rem";
      aArray.style.border = "1px solid #dbd9d9";
      aArray.style.borderRadius = "5px";
      aArray.style.fontWeight = "bold";
      aArray.style.background = 'linear-gradient(0deg, rgb(60, 90, 116, 0.4), rgb(60, 90, 116, 0.7)), url(/day_26/images/map_image.jpg)'
      aArray.style.backgroundPosition = 'center'
      aArray.style.backgroundSize = 'cover'
      aArray.style.color = "#faf9f9";
      aArray.style.margin = "0.5rem";
      aArray.style.margin = "0.5rem";
      aArray.style.width = "9rem";
      aArray.textContent += `${startS[i]}`;
      outputS.appendChild(aArray);
    }
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
  } else if (type === "T" || type === "t") {
    countries_start.textContent = `Countries that starts with t are ${startT.length}`;

    let aArray;
    for (let i = 0; i < startT.length; i++) {
      aArray = document.createElement("p");
      aArray.className = "countries";
      aArray.style.padding = "2rem 0.5rem";
      aArray.style.border = "1px solid #dbd9d9";
      aArray.style.borderRadius = "5px";
      aArray.style.fontWeight = "bold";
      aArray.style.background = 'linear-gradient(0deg, rgb(60, 90, 116, 0.4), rgb(60, 90, 116, 0.7)), url(/day_26/images/map_image.jpg)'
      aArray.style.backgroundPosition = 'center'
      aArray.style.backgroundSize = 'cover'
      aArray.style.color = "#faf9f9";
      aArray.style.margin = "0.5rem";
      aArray.style.margin = "0.5rem";
      aArray.style.width = "9rem";
      aArray.textContent += `${startT[i]}`;
      outputT.appendChild(aArray);
    }
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
  } else if (type === "U" || type === "u") {
    countries_start.textContent = `Countries that starts with u are ${startU.length}`;

    let aArray;
    for (let i = 0; i < startU.length; i++) {
      aArray = document.createElement("p");
      aArray.className = "countries";
      aArray.style.padding = "2rem 0.5rem";
      aArray.style.border = "1px solid #dbd9d9";
      aArray.style.borderRadius = "5px";
      aArray.style.fontWeight = "bold";
      aArray.style.background = 'linear-gradient(0deg, rgb(60, 90, 116, 0.4), rgb(60, 90, 116, 0.7)), url(/day_26/images/map_image.jpg)'
      aArray.style.backgroundPosition = 'center'
      aArray.style.backgroundSize = 'cover'
      aArray.style.color = "#faf9f9";
      aArray.style.margin = "0.5rem";
      aArray.style.margin = "0.5rem";
      aArray.style.width = "9rem";
      aArray.textContent += `${startU[i]}`;
      outputU.appendChild(aArray);
    }
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
  } else if (type === "V" || type === "v") {
    countries_start.textContent = `Countries that starts with v are ${startV.length}`;

    let aArray;
    for (let i = 0; i < startV.length; i++) {
      aArray = document.createElement("p");
      aArray.className = "countries";
      aArray.style.padding = "2rem 0.5rem";
      aArray.style.border = "1px solid #dbd9d9";
      aArray.style.borderRadius = "5px";
      aArray.style.fontWeight = "bold";
      aArray.style.background = 'linear-gradient(0deg, rgb(60, 90, 116, 0.4), rgb(60, 90, 116, 0.7)), url(/day_26/images/map_image.jpg)'
      aArray.style.backgroundPosition = 'center'
      aArray.style.backgroundSize = 'cover'
      aArray.style.color = "#faf9f9";
      aArray.style.margin = "0.5rem";
      aArray.style.margin = "0.5rem";
      aArray.style.width = "9rem";
      aArray.textContent += `${startV[i]}`;
      outputV.appendChild(aArray);
    }
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
    outputW.textContent = `No country starts with W`;
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

    let aArray;
    for (let i = 0; i < startY.length; i++) {
      aArray = document.createElement("p");
      aArray.className = "countries";
      aArray.style.padding = "2rem 0.5rem";
      aArray.style.border = "1px solid #dbd9d9";
      aArray.style.borderRadius = "5px";
      aArray.style.fontWeight = "bold";
      aArray.style.background = 'linear-gradient(0deg, rgb(60, 90, 116, 0.4), rgb(60, 90, 116, 0.7)), url(/day_26/images/map_image.jpg)'
      aArray.style.backgroundPosition = 'center'
      aArray.style.backgroundSize = 'cover'
      aArray.style.color = "#faf9f9";
      aArray.style.margin = "0.5rem";
      aArray.style.margin = "0.5rem";
      aArray.style.width = "9rem";
      aArray.textContent += `${startY[i]}`;
      outputY.appendChild(aArray);
    }
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
  } else if (type === "Z" || type === "z") {
    countries_start.textContent = `Countries that starts with z are ${startZ.length}`;

    let aArray;
    for (let i = 0; i < startZ.length; i++) {
      aArray = document.createElement("p");
      aArray.className = "countries";
      aArray.style.padding = "2rem 0.5rem";
      aArray.style.border = "1px solid #dbd9d9";
      aArray.style.borderRadius = "5px";
      aArray.style.fontWeight = "bold";
      aArray.style.background = 'linear-gradient(0deg, rgb(60, 90, 116, 0.4), rgb(60, 90, 116, 0.7)), url(/day_26/images/map_image.jpg)'
      aArray.style.backgroundPosition = 'center'
      aArray.style.backgroundSize = 'cover'
      aArray.style.color = "#faf9f9";
      aArray.style.margin = "0.5rem";
      aArray.style.margin = "0.5rem";
      aArray.style.width = "9rem";
      aArray.textContent += `${startZ[i]}`;
      outputZ.appendChild(aArray);
    }
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
});
