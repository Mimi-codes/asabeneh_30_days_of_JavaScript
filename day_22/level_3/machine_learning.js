//Machine Learning
let daysOfMachineLearning = document.createElement('div')
daysOfMachineLearning.className = 'days_of_JS'
daysOfMachineLearning.style.display ='flex'
daysOfMachineLearning.style.margin ='0 auto'
daysOfMachineLearning.style.borderTop ='5px solid white'
daysOfMachineLearning.style.width ='50%'
daysOfMachineLearning.style.padding ='0.4rem 0.8rem'
daysOfMachineLearning.style.justifyContent ='space-between'
daysOfMachineLearning.style.backgroundColor ='#fd5e53'
mainDiv.appendChild(daysOfMachineLearning)


//Machine Learning
let machineLearningTitle = document.createElement('p')
machineLearningTitle.className = 'js_title'
machineLearningTitle.textContent = `${asabenehChallenges2020.challenges[7].name}`
daysOfMachineLearning.appendChild(machineLearningTitle)

//The <details> tag specifies additional details that the user can open and close on demand.
//The <details> tag is often used to create an interactive widget that the user can open and close. By default, the widget is closed. When open, it expands, and displays the content within.
//Any sort of content can be put inside the <details> tag. 
//Tip: The <summary> tag is used in conjunction with <details> to specify a visible heading for the details.


//Machine Learning detail

let machineLearningDetails = document.createElement('details')
machineLearningDetails.className = 'js_details'
machineLearningDetails.style.paddingTop = '1rem'
daysOfMachineLearning.appendChild(machineLearningDetails)

//Machine Learning summary detail
let machineLearningDetailsSummary = document.createElement('summary')
machineLearningDetailsSummary.className = 'js_summary'
machineLearningDetailsSummary.textContent = 'Machine Learning'
machineLearningDetails.appendChild(machineLearningDetailsSummary)


//Machine Learning summary para
let mlSummaryArr
for(let i = 0; i < `${asabenehChallenges2020.challenges[7].topics.length}`; i++) {
  mlSummaryArr = document.createElement('p')
  mlSummaryArr.textContent = `${asabenehChallenges2020.challenges[7].topics[i]}`
  machineLearningDetails.appendChild(mlSummaryArr)
}


//Machine Learning status
let machineLearningStatus = document.createElement('p')
machineLearningStatus.className = 'python_status'
machineLearningStatus.textContent = `${asabenehChallenges2020.challenges[7].status}`
daysOfMachineLearning.appendChild(machineLearningStatus)

