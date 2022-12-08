
//React Native
let daysOfReactNative = document.createElement('div')
daysOfReactNative.className = 'days_of_JS'
daysOfReactNative.style.display ='flex'
daysOfReactNative.style.margin ='0 auto'
daysOfReactNative.style.borderTop ='5px solid white'
daysOfReactNative.style.width ='50%'
daysOfReactNative.style.padding ='0.4rem 0.8rem'
daysOfReactNative.style.justifyContent ='space-between'
daysOfReactNative.style.backgroundColor ='#fd5e53'
mainDiv.appendChild(daysOfReactNative)


//React Native items
let reactNativeTitle = document.createElement('p')
reactNativeTitle.className = 'js_title'
reactNativeTitle.textContent = `${asabenehChallenges2020.challenges[4].name}`
daysOfReactNative.appendChild(reactNativeTitle)

//The <details> tag specifies additional details that the user can open and close on demand.
//The <details> tag is often used to create an interactive widget that the user can open and close. By default, the widget is closed. When open, it expands, and displays the content within.
//Any sort of content can be put inside the <details> tag. 
//Tip: The <summary> tag is used in conjunction with <details> to specify a visible heading for the details.


//React Native detail
let reactNativeDetails = document.createElement('details')
reactNativeDetails.className = 'js_details'
reactNativeDetails.style.paddingTop = '1rem'
daysOfReactNative.appendChild(reactNativeDetails)

//React Native summary detail
let reactNativeDetailsSummary = document.createElement('summary')
reactNativeDetails.className = 'js_summary'
reactNativeDetailsSummary.textContent = `${asabenehChallenges2020.challenges[4].topics[0]}`
reactNativeDetails.appendChild(reactNativeDetailsSummary)


//React Native summary para
let rnSummaryArr
for(let i = 0; i < `${asabenehChallenges2020.challenges[4].topics.length}`; i++) {
  rnSummaryArr = document.createElement('p')
  rnSummaryArr.textContent = `${asabenehChallenges2020.challenges[4].topics[i]}`
  reactNativeDetails.appendChild(rnSummaryArr)
}


//react native status
let reactNativeStatus = document.createElement('p')
reactNativeStatus.className = 'python_status'
reactNativeStatus.textContent = `${asabenehChallenges2020.challenges[4].status}`
daysOfReactNative.appendChild(reactNativeStatus)

