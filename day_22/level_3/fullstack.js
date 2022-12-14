
//FullStack
let daysOfFullStack = document.createElement('div')
daysOfFullStack.className = 'days_of_JS'
daysOfFullStack.style.display ='flex'
daysOfFullStack.style.margin ='0 auto'
daysOfFullStack.style.borderTop ='5px solid white'
daysOfFullStack.style.width ='50%'
daysOfFullStack.style.padding ='0.4rem 0.8rem'
daysOfFullStack.style.justifyContent ='space-between'
daysOfFullStack.style.backgroundColor ='#fd5e53'
mainDiv.appendChild(daysOfFullStack)


//FullStack items
let fullstackTitle = document.createElement('p')
fullstackTitle.className = 'js_title'
fullstackTitle.textContent = `${asabenehChallenges2020.challenges[5].name}`
daysOfFullStack.appendChild(fullstackTitle)

//The <details> tag specifies additional details that the user can open and close on demand.
//The <details> tag is often used to create an interactive widget that the user can open and close. By default, the widget is closed. When open, it expands, and displays the content within.
//Any sort of content can be put inside the <details> tag. 
//Tip: The <summary> tag is used in conjunction with <details> to specify a visible heading for the details.


//FullStack detail
let fullstackDetails = document.createElement('details')
fullstackDetails.className = 'js_details'
fullstackDetails.style.paddingTop = '1rem'
daysOfFullStack.appendChild(fullstackDetails)

//FullStack summary detail
let fullstackDetailsSummary = document.createElement('summary')
fullstackDetails.className = 'js_summary'
fullstackDetailsSummary.textContent = 'FullStack'
fullstackDetails.appendChild(fullstackDetailsSummary)


//FullStack summary para
let fsSummaryArr
for(let i = 0; i < `${asabenehChallenges2020.challenges[5].topics.length}`; i++) {
  fsSummaryArr = document.createElement('p')
  fsSummaryArr.textContent = `${asabenehChallenges2020.challenges[5].topics[i]}`
  fullstackDetails.appendChild(fsSummaryArr)
}


//FullStack status
let fullstackStatus = document.createElement('p')
fullstackStatus.className = 'python_status'
fullstackStatus.textContent = `${asabenehChallenges2020.challenges[5].status}`
daysOfFullStack.appendChild(fullstackStatus)

