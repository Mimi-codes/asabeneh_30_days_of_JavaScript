
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
let reactSummaryArr
for(let i = 0; i < `${asabenehChallenges2020.challenges[3].topics.length}`; i++) {
  reactSummaryArr = document.createElement('p')
  reactSummaryArr.textContent = `${asabenehChallenges2020.challenges[3].topics[i]}`
  reactDetails.appendChild(reactSummaryArr)
}



//react status
let reactStatus = document.createElement('p')
reactStatus.className = 'python_status'
reactStatus.textContent = `${asabenehChallenges2020.challenges[3].status}`
daysOfReact.appendChild(reactStatus)

