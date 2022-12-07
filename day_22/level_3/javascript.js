
//JavaScript
let daysOfJavaScript = document.createElement('div')
daysOfJavaScript.className = 'days_of_JS'
daysOfJavaScript.style.display ='flex'
daysOfJavaScript.style.margin ='0 auto'
daysOfJavaScript.style.borderTop ='5px solid white'
daysOfJavaScript.style.width ='50%'
daysOfJavaScript.style.padding ='0.4rem 0.8rem'
daysOfJavaScript.style.justifyContent ='space-between'
daysOfJavaScript.style.backgroundColor ='yellow'
mainDiv.appendChild(daysOfJavaScript)


//JavaScript items
let javaScriptTitle = document.createElement('p')
javaScriptTitle.className = 'js_title'
javaScriptTitle.textContent = `${asabenehChallenges2020.challenges[1].name}`
javaScriptTitle.style.textDecoration = 'underline'
daysOfJavaScript.appendChild(javaScriptTitle)

//The <details> tag specifies additional details that the user can open and close on demand.
//The <details> tag is often used to create an interactive widget that the user can open and close. By default, the widget is closed. When open, it expands, and displays the content within.
//Any sort of content can be put inside the <details> tag. 
//Tip: The <summary> tag is used in conjunction with <details> to specify a visible heading for the details.


//JS detail
let javaScriptDetails = document.createElement('details')
javaScriptDetails.className = 'js_details'
javaScriptDetails.style.paddingTop = '1rem'
daysOfJavaScript.appendChild(javaScriptDetails)

//js summary detail
let javaScriptDetailsSummary = document.createElement('summary')
javaScriptDetails.className = 'js_summary'
javaScriptDetailsSummary.textContent = `${asabenehChallenges2020.challenges[1].topics[0]}`
javaScriptDetails.appendChild(javaScriptDetailsSummary)


//python summary para
let javaScriptSummaryPara1 = document.createElement('p')
let javaScriptSummaryPara2 = document.createElement('p')
let javaScriptSummaryPara3 = document.createElement('p')
let javaScriptSummaryPara4 = document.createElement('p')
let javaScriptSummaryPara5 = document.createElement('p')

javaScriptSummaryPara1.className = 'python_summary_para'
javaScriptSummaryPara2.className = 'python_summary_para'
javaScriptSummaryPara3.className = 'python_summary_para'
javaScriptSummaryPara4.className = 'python_summary_para'
javaScriptSummaryPara5.className = 'python_summary_para'

javaScriptSummaryPara1.textContent = `${asabenehChallenges2020.challenges[1].topics[0]}`
javaScriptSummaryPara2.textContent = `${asabenehChallenges2020.challenges[1].topics[1]}`
javaScriptSummaryPara3.textContent = `${asabenehChallenges2020.challenges[1].topics[2]}`
javaScriptSummaryPara4.textContent = `${asabenehChallenges2020.challenges[1].topics[3]}`
javaScriptSummaryPara5.textContent = `${asabenehChallenges2020.challenges[1].topics[4]}`

javaScriptDetails.append(javaScriptSummaryPara1, javaScriptSummaryPara2, javaScriptSummaryPara3, javaScriptSummaryPara4, javaScriptSummaryPara5)

//js status
let javaScriptStatus = document.createElement('p')
javaScriptStatus.className = 'python_status'
javaScriptStatus.textContent = `${asabenehChallenges2020.challenges[1].status}`
daysOfJavaScript.appendChild(javaScriptStatus)

