//HTML_CSS
let daysOfHtml = document.createElement('div')
daysOfHtml.className = 'days_of_JS'
daysOfHtml.style.display ='flex'
daysOfHtml.style.margin ='0 auto'
daysOfHtml.style.borderTop ='5px solid white'
daysOfHtml.style.width ='70%'
daysOfHtml.style.padding ='0.4rem 0.8rem'
daysOfHtml.style.justifyContent ='space-between'
daysOfHtml.style.backgroundColor ='#fd5e53'
mainDiv.appendChild(daysOfHtml)


//HTML items
let htmlTitle = document.createElement('p')
htmlTitle.className = 'js_title'
htmlTitle.textContent = `${asabenehChallenges2020.challenges[2].name}`
daysOfHtml.appendChild(htmlTitle)

//The <details> tag specifies additional details that the user can open and close on demand.
//The <details> tag is often used to create an interactive widget that the user can open and close. By default, the widget is closed. When open, it expands, and displays the content within.
//Any sort of content can be put inside the <details> tag. 
//Tip: The <summary> tag is used in conjunction with <details> to specify a visible heading for the details.


//HTML detail
let htmlDetails = document.createElement('details')
htmlDetails.className = 'js_details'
htmlDetails.style.paddingTop = '1rem'
daysOfHtml.appendChild(htmlDetails)

//HTML detail
let htmlDetailsSummary = document.createElement('summary')
htmlDetails.className = 'js_summary'
htmlDetailsSummary.textContent = 'HTML & CSS'
htmlDetails.appendChild(htmlDetailsSummary)


//HTML summary para
let htmlSummaryArr
for(let i = 0; i < `${asabenehChallenges2020.challenges[2].topics.length}`; i++) {
  htmlSummaryArr = document.createElement('p')
  htmlSummaryArr.textContent = `${asabenehChallenges2020.challenges[2].topics[i]}`
    htmlDetails.appendChild(htmlSummaryArr)
}



//js status
let htmlStatus = document.createElement('p')
htmlStatus.className = 'python_status'
htmlStatus.textContent = `${asabenehChallenges2020.challenges[2].status}`
daysOfHtml.appendChild(htmlStatus)

