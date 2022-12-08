
//Data Analysis
let daysOfDataAnalysis = document.createElement('div')
daysOfDataAnalysis.className = 'days_of_JS'
daysOfDataAnalysis.style.display ='flex'
daysOfDataAnalysis.style.margin ='0 auto'
daysOfDataAnalysis.style.borderTop ='5px solid white'
daysOfDataAnalysis.style.width ='50%'
daysOfDataAnalysis.style.padding ='0.4rem 0.8rem'
daysOfDataAnalysis.style.justifyContent ='space-between'
daysOfDataAnalysis.style.backgroundColor ='#fd5e53'
mainDiv.appendChild(daysOfDataAnalysis)


//Data Analysis items
let dataAnalysisTitle = document.createElement('p')
dataAnalysisTitle.className = 'js_title'
dataAnalysisTitle.textContent = `${asabenehChallenges2020.challenges[6].name}`
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
let daSummaryArr
for(let i = 0; i < `${asabenehChallenges2020.challenges[6].topics.length}`; i++) {
  daSummaryArr = document.createElement('p')
  daSummaryArr.textContent = `${asabenehChallenges2020.challenges[6].topics[i]}`
  dataAnalysisDetails.appendChild(daSummaryArr)
}



//Data Analysis status
let dataAnalysisStatus = document.createElement('p')
dataAnalysisStatus.className = 'python_status'
dataAnalysisStatus.textContent = `${asabenehChallenges2020.challenges[6].status}`
daysOfDataAnalysis.appendChild(dataAnalysisStatus)

