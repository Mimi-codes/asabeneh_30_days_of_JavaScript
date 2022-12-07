
//Data Analysis
let daysOfDataAnalysis = document.createElement('div')
daysOfDataAnalysis.className = 'days_of_JS'
daysOfDataAnalysis.style.display ='flex'
daysOfDataAnalysis.style.margin ='0 auto'
daysOfDataAnalysis.style.borderTop ='5px solid white'
daysOfDataAnalysis.style.width ='70%'
daysOfDataAnalysis.style.padding ='0.4rem 0.8rem'
daysOfDataAnalysis.style.justifyContent ='space-between'
daysOfDataAnalysis.style.backgroundColor ='#fd5e53'
mainDiv.appendChild(daysOfDataAnalysis)


//Data Analysis items
let dataAnalysisTitle = document.createElement('p')
dataAnalysisTitle.className = 'js_title'
dataAnalysisTitle.textContent = `${asabenehChallenges2020.challenges[6].name}`
dataAnalysisTitle.style.textDecoration = 'underline'
daysOfDataAnalysis.appendChild(dataAnalysisTitle)

//The <details> tag specifies additional details that the user can open and close on demand.
//The <details> tag is often used to create an interactive widget that the user can open and close. By default, the widget is closed. When open, it expands, and displays the content within.
//Any sort of content can be put inside the <details> tag. 
//Tip: The <summary> tag is used in conjunction with <details> to specify a visible heading for the details.


//Data Analysis detail
let dataAnalysisDetails = document.createElement('details')
dataAnalysisDetails.className = 'js_details'
dataAnalysisDetails.style.paddingTop = '1rem'
daysOfDataAnalysis.appendChild(dataAnalysisDetails)

//Data Analysis summary detail
let dataAnalysisDetailsSummary = document.createElement('summary')
dataAnalysisDetails.className = 'js_summary'
dataAnalysisDetailsSummary.textContent = 'Data Analysis'
dataAnalysisDetails.appendChild(dataAnalysisDetailsSummary)


//Data Analysis summary para
let dataAnalysisSummaryPara1 = document.createElement('p')
let dataAnalysisSummaryPara2 = document.createElement('p')
let dataAnalysisSummaryPara3 = document.createElement('p')
let dataAnalysisSummaryPara4 = document.createElement('p')
let dataAnalysisSummaryPara5 = document.createElement('p')

dataAnalysisSummaryPara1.className = 'python_summary_para'
dataAnalysisSummaryPara2.className = 'python_summary_para'
dataAnalysisSummaryPara3.className = 'python_summary_para'
dataAnalysisSummaryPara4.className = 'python_summary_para'
dataAnalysisSummaryPara5.className = 'python_summary_para'

dataAnalysisSummaryPara1.textContent = `${asabenehChallenges2020.challenges[6].topics[0]}`
dataAnalysisSummaryPara2.textContent = `${asabenehChallenges2020.challenges[6].topics[1]}`
dataAnalysisSummaryPara3.textContent = `${asabenehChallenges2020.challenges[6].topics[2]}`
dataAnalysisSummaryPara4.textContent = `${asabenehChallenges2020.challenges[6].topics[3]}`
dataAnalysisSummaryPara5.textContent = `${asabenehChallenges2020.challenges[6].topics[4]}`

dataAnalysisDetails.append(dataAnalysisSummaryPara1, dataAnalysisSummaryPara2, dataAnalysisSummaryPara3, dataAnalysisSummaryPara4, dataAnalysisSummaryPara5)

//Data Analysis status
let dataAnalysisStatus = document.createElement('p')
dataAnalysisStatus.className = 'python_status'
dataAnalysisStatus.textContent = `${asabenehChallenges2020.challenges[6].status}`
daysOfDataAnalysis.appendChild(dataAnalysisStatus)

