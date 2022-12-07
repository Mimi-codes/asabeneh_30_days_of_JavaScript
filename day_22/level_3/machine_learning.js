//Machine Learning
let daysOfMachineLearning = document.createElement('div')
daysOfMachineLearning.className = 'days_of_JS'
daysOfMachineLearning.style.display ='flex'
daysOfMachineLearning.style.margin ='0 auto'
daysOfMachineLearning.style.borderTop ='5px solid white'
daysOfMachineLearning.style.width ='70%'
daysOfMachineLearning.style.padding ='0.4rem 0.8rem'
daysOfMachineLearning.style.justifyContent ='space-between'
daysOfMachineLearning.style.backgroundColor ='#fd5e53'
mainDiv.appendChild(daysOfMachineLearning)


//Machine Learning
let machineLearningTitle = document.createElement('p')
machineLearningTitle.className = 'js_title'
machineLearningTitle.textContent = `${asabenehChallenges2020.challenges[7].name}`
machineLearningTitle.style.textDecoration = 'underline'
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


//React summary para
let machineLearningSummaryPara1 = document.createElement('p')
let machineLearningSummaryPara2 = document.createElement('p')
let machineLearningSummaryPara3 = document.createElement('p')
let machineLearningSummaryPara4 = document.createElement('p')
let machineLearningSummaryPara5 = document.createElement('p')
let machineLearningSummaryPara6 = document.createElement('p')
let machineLearningSummaryPara7 = document.createElement('p')
let machineLearningSummaryPara8 = document.createElement('p')

machineLearningSummaryPara1.className = 'python_summary_para'
machineLearningSummaryPara2.className = 'python_summary_para'
machineLearningSummaryPara3.className = 'python_summary_para'
machineLearningSummaryPara4.className = 'python_summary_para'
machineLearningSummaryPara5.className = 'python_summary_para'
machineLearningSummaryPara6.className = 'python_summary_para'
machineLearningSummaryPara7.className = 'python_summary_para'
machineLearningSummaryPara8.className = 'python_summary_para'

machineLearningSummaryPara1.textContent = `${asabenehChallenges2020.challenges[7].topics[0]}`
machineLearningSummaryPara2.textContent = `${asabenehChallenges2020.challenges[7].topics[1]}`
machineLearningSummaryPara3.textContent = `${asabenehChallenges2020.challenges[7].topics[2]}`
machineLearningSummaryPara4.textContent = `${asabenehChallenges2020.challenges[7].topics[3]}`
machineLearningSummaryPara5.textContent = `${asabenehChallenges2020.challenges[7].topics[4]}`
machineLearningSummaryPara6.textContent = `${asabenehChallenges2020.challenges[7].topics[5]}`
machineLearningSummaryPara7.textContent = `${asabenehChallenges2020.challenges[7].topics[6]}`
machineLearningSummaryPara8.textContent = `${asabenehChallenges2020.challenges[7].topics[7]}`

machineLearningDetails.append(machineLearningSummaryPara1, machineLearningSummaryPara2, machineLearningSummaryPara3, machineLearningSummaryPara4, machineLearningSummaryPara5, machineLearningSummaryPara6, machineLearningSummaryPara7, machineLearningSummaryPara8)



//Machine Learning status
let machineLearningStatus = document.createElement('p')
machineLearningStatus.className = 'python_status'
machineLearningStatus.textContent = `${asabenehChallenges2020.challenges[7].status}`
daysOfMachineLearning.appendChild(machineLearningStatus)

