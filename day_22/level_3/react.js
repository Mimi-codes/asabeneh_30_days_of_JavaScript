
//React
let daysOfReact = document.createElement('div')
daysOfReact.className = 'days_of_JS'
daysOfReact.style.display ='flex'
daysOfReact.style.margin ='0 auto'
daysOfReact.style.borderTop ='5px solid white'
daysOfReact.style.width ='70%'
daysOfReact.style.padding ='0.4rem 0.8rem'
daysOfReact.style.justifyContent ='space-between'
daysOfReact.style.backgroundColor ='#fd5e53'
mainDiv.appendChild(daysOfReact)


//React items
let reactTitle = document.createElement('p')
reactTitle.className = 'js_title'
reactTitle.textContent = `${asabenehChallenges2020.challenges[3].name}`
reactTitle.style.textDecoration = 'underline'
daysOfReact.appendChild(reactTitle)

//The <details> tag specifies additional details that the user can open and close on demand.
//The <details> tag is often used to create an interactive widget that the user can open and close. By default, the widget is closed. When open, it expands, and displays the content within.
//Any sort of content can be put inside the <details> tag. 
//Tip: The <summary> tag is used in conjunction with <details> to specify a visible heading for the details.


//React detail
let reactDetails = document.createElement('details')
reactDetails.className = 'js_details'
reactDetails.style.paddingTop = '1rem'
daysOfReact.appendChild(reactDetails)

//React summary detail
let reactDetailsSummary = document.createElement('summary')
reactDetails.className = 'js_summary'
reactDetailsSummary.textContent = `${asabenehChallenges2020.challenges[3].topics[0]}`
reactDetails.appendChild(reactDetailsSummary)


//React summary para
let reactSummaryPara1 = document.createElement('p')
let reactSummaryPara2 = document.createElement('p')
let reactSummaryPara3 = document.createElement('p')
let reactSummaryPara4 = document.createElement('p')
let reactSummaryPara5 = document.createElement('p')
let reactSummaryPara6 = document.createElement('p')

reactSummaryPara1.className = 'python_summary_para'
reactSummaryPara2.className = 'python_summary_para'
reactSummaryPara3.className = 'python_summary_para'
reactSummaryPara4.className = 'python_summary_para'
reactSummaryPara5.className = 'python_summary_para'
reactSummaryPara6.className = 'python_summary_para'

reactSummaryPara1.textContent = `${asabenehChallenges2020.challenges[3].topics[0]}`
reactSummaryPara2.textContent = `${asabenehChallenges2020.challenges[3].topics[1]}`
reactSummaryPara3.textContent = `${asabenehChallenges2020.challenges[3].topics[2]}`
reactSummaryPara4.textContent = `${asabenehChallenges2020.challenges[3].topics[3]}`
reactSummaryPara5.textContent = `${asabenehChallenges2020.challenges[3].topics[4]}`
reactSummaryPara6.textContent = `${asabenehChallenges2020.challenges[3].topics[5]}`

reactDetails.append(reactSummaryPara1, reactSummaryPara2, reactSummaryPara3, reactSummaryPara4, reactSummaryPara5, reactSummaryPara6)

//react status
let reactStatus = document.createElement('p')
reactStatus.className = 'python_status'
reactStatus.textContent = `${asabenehChallenges2020.challenges[3].status}`
daysOfReact.appendChild(reactStatus)

