
//JavaScript
let daysOfJavaScript = document.createElement('div')
daysOfJavaScript.className = 'days_of_JS'
daysOfJavaScript.style.display ='flex'
daysOfJavaScript.style.margin ='0 auto'
daysOfJavaScript.style.borderTop ='5px solid white'
daysOfJavaScript.style.width ='50%'
daysOfJavaScript.style.padding ='0.4rem 0.8rem'
daysOfJavaScript.style.justifyContent ='space-between'
daysOfJavaScript.style.backgroundColor ='#f7dc5c'
mainDiv.appendChild(daysOfJavaScript)


//JavaScript items
let javaScriptTitle = document.createElement('p')
javaScriptTitle.className = 'js_title'
javaScriptTitle.textContent = `${asabenehChallenges2020.challenges[1].name}`
javaScriptTitle.style.textDecoration = 'underline'
javaScriptTitle.style.color = '#551a8b'
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
let jsSummaryArr
for(let i = 0; i < `${asabenehChallenges2020.challenges[1].topics.length}`; i++) {
  jsSummaryArr = document.createElement('p')
  jsSummaryArr.textContent = `${asabenehChallenges2020.challenges[1].topics[i]}`
  javaScriptDetails.appendChild(jsSummaryArr)
}


//js status
let javaScriptStatus = document.createElement('p')
javaScriptStatus.className = 'python_status'
javaScriptStatus.textContent = `${asabenehChallenges2020.challenges[1].status}`
daysOfJavaScript.appendChild(javaScriptStatus)

