const asabenehChallenges2020 = {
    description: 'Asabeneh Yetayeh challenges',
    challengeTitle: 'Asabeneh Yetayeh challenges',
    challengeSubtitle: '30DaysOfJavaScript Challenge',
    challengeYear: 2020,
    keywords: [
      'HTML',
      'HTML5',
      'CSS',
      'CSS3',
      'JS',
      'JavaScript',
      'ES6',
      'Promise',
      'async await',
      'Database',
      'React',
      'React Hooks',
      'Context API',
      'React Router',
      'Web Storage',
      'localStorage',
      'sessionStorage',
      'Redux',
      'Node',
      'MongoDB',
      'SQL',
      'API',
      'DOM',
      'data science',
      'MERN',
      'Python',
      'Flask',
      'Statistics',
      'Linear Algebra',
      'Numpy',
      'Pandas',
      'Scipy',
      'Scikit-learn',
      'Visualization',
      'D3.js'
    ],
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
      titles: [
        ['🌱', 'Educator'],
        ['💻', 'Programmer'],
        ['🌐', 'Developer'],
        ['🔥', 'Motivator'],
        ['📔', 'Content Creator']
      ],
      qualifications: [
        'MSc. Computer Science Ongoing',
        'BSc. Information and Communication Eng.',
        'MSc. Food Technology',
        'BSc.Food Technology'
      ],
      socialLinks: [
        {
          social: 'LinkedIn',
          url: 'https://www.linkedin.com/in/asabeneh/',
          fontawesomeIcon: '<i class="fab fa-linkedin">'
        },
        {
          social: 'Twitter',
          url: 'https://twitter.com/Asabeneh',
          fontawesomeIcon: '<i class="fab fa-twitter-square"></i>'
        },
        {
          social: 'Github',
          fontawesomeIcon: '<i class="fab fa-github-square"></i>',
          url: 'https://github.com/Asabeneh'
        },
        {
          social: 'DEV.to',
          fontawesomeIcon: '',
          url: 'https://dev.to/asabeneh'
        }
      ],
      skills: [
        'Web Development',
        'Data Analysis',
        'Data Visualization',
        'Programming',
        'Databases',
        'Developing API'
      ],
      bio:
        'I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.'
    },
    challenges: [
      {
        name: '30 Days Of Python',
        topics: [
          'Python',
          'Flask',
          'Numpy',
          'Pandas',
          'Statistics',
          'API',
          'MongoDB'
        ],
        days: 30,
        status: 'Done',
        questions: 'Above 500',
        projects: 'Two',
        interviewQns: '',
        githubUrl: 'https://github.com/Asabeneh/30-Days-Of-Python'
      },
      {
        name: '30 Days Of JavaScript',
        topics: ['JavaScript', 'ES6', 'Promise', 'async and await', 'DOM'],
        days: 30,
        status: 'Ongoing',
        questions: 'Above 500',
        projects: 'About 30',
        interviewQns: '',
        githubUrl: 'https://github.com/Asabeneh/30DaysOfJavaScript'
      },
      {
        name: '30 Days Of HTML & CSS',
        topics: ['CSS', 'Flex', 'Grid', 'CSS Animation'],
        days: 30,
        status: 'Coming',
        questions: 'Above 500',
        projects: 'Two',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of React',
        topics: [
          'React',
          'React Router',
          'Redux',
          'Context API',
          'React Hooks',
          'MERN'
        ],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of ReactNative',
        topics: ['ReactNative', 'Redux'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: 'Two',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Fullstack',
        topics: ['React', 'Redux', 'MongoDB', 'Node', 'MERN'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Data Analysis',
        topics: ['Python', 'Numpy', 'Pandas', 'Statistics', 'Visualization'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Machine Learning',
        topics: [
          'Python',
          'Numpy',
          'Pandas',
          'Scikit-learn',
          'Scipy',
          'Linear Algebra',
          'Statistics',
          'Visualization'
        ],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      }
    ]
  }




//body
//heading
let daysOfJs = document.createElement('p')
daysOfJs.textContent = `${asabenehChallenges2020['challengeSubtitle']}`
daysOfJs.style.textDecoration = 'underline'
daysOfJs.style.textAlign = 'center'
document.body.appendChild(daysOfJs)


//header time

//table details
let mainDiv = document.createElement('div')
mainDiv.id = 'main_div'
mainDiv.style.textAlign = 'center'
document.body.appendChild(mainDiv)

//mainDiv items
let divItems = document.createElement('p')
divItems.textContent = `${asabenehChallenges2020['description']}`
// mainDiv.appendChild(divItems)

//python
let daysOfPython = document.createElement('div')
daysOfPython.className = 'days_of_python'
daysOfPython.style.display ='flex'
daysOfPython.style.margin ='0 auto'
daysOfPython.style.width ='70%'
daysOfPython.style.padding ='0.4rem 0.8rem'
daysOfPython.style.justifyContent ='space-between'
daysOfPython.style.backgroundColor ='#5bbc7a'
mainDiv.appendChild(daysOfPython)

//python items
let pythonTitle = document.createElement('p')
pythonTitle.className = 'python_title'
pythonTitle.textContent = `${asabenehChallenges2020.challenges[0].name}`
pythonTitle.style.textDecoration = 'underline'
daysOfPython.appendChild(pythonTitle)

//The <details> tag specifies additional details that the user can open and close on demand.
//The <details> tag is often used to create an interactive widget that the user can open and close. By default, the widget is closed. When open, it expands, and displays the content within.
//Any sort of content can be put inside the <details> tag. 
//Tip: The <summary> tag is used in conjunction with <details> to specify a visible heading for the details.

//python detail
let pythonDetails = document.createElement('details')
pythonDetails.className = 'python_details'
pythonDetails.style.paddingTop = '1rem'
daysOfPython.appendChild(pythonDetails)

//python summary detail
let pythonDetailsSummary = document.createElement('summary')
pythonDetails.className = 'python_summary'
pythonDetailsSummary.textContent = `${asabenehChallenges2020.challenges[0].topics[0]}`
pythonDetails.appendChild(pythonDetailsSummary)


//python summary para
let pythonSummaryPara1 = document.createElement('p')
let pythonSummaryPara2 = document.createElement('p')
let pythonSummaryPara3 = document.createElement('p')
let pythonSummaryPara4 = document.createElement('p')
let pythonSummaryPara5 = document.createElement('p')
let pythonSummaryPara6 = document.createElement('p')
let pythonSummaryPara7 = document.createElement('p')

pythonSummaryPara1.className = 'python_summary_para'
pythonSummaryPara2.className = 'python_summary_para'
pythonSummaryPara3.className = 'python_summary_para'
pythonSummaryPara4.className = 'python_summary_para'
pythonSummaryPara5.className = 'python_summary_para'
pythonSummaryPara6.className = 'python_summary_para'
pythonSummaryPara7.className = 'python_summary_para'
pythonSummaryPara1.textContent = `${asabenehChallenges2020.challenges[0].topics[0]}`
pythonSummaryPara2.textContent = `${asabenehChallenges2020.challenges[0].topics[1]}`
pythonSummaryPara3.textContent = `${asabenehChallenges2020.challenges[0].topics[2]}`
pythonSummaryPara4.textContent = `${asabenehChallenges2020.challenges[0].topics[3]}`
pythonSummaryPara5.textContent = `${asabenehChallenges2020.challenges[0].topics[4]}`
pythonSummaryPara6.textContent = `${asabenehChallenges2020.challenges[0].topics[5]}`
pythonSummaryPara7.textContent = `${asabenehChallenges2020.challenges[0].topics[6]}`
pythonDetails.append(pythonSummaryPara1, pythonSummaryPara2, pythonSummaryPara3, pythonSummaryPara4, pythonSummaryPara5, pythonSummaryPara6, pythonSummaryPara7)

//python status
let pythonStatus = document.createElement('p')
pythonStatus.className = 'python_status'
pythonStatus.textContent = `${asabenehChallenges2020.challenges[0].status}`
daysOfPython.appendChild(pythonStatus)


  
  //About Author
  let aboutAuthor =  document.createElement('div')
  aboutAuthor.className = 'about_author'
  aboutAuthor.style.margin = '0 auto'
//   aboutAuthor.style.width = '75%'
  document.body.appendChild(aboutAuthor)
  
  let firstname = `${asabenehChallenges2020.author.firstName}`
  let lastname = `${asabenehChallenges2020.author.lastName}`
let fullName = firstname + ' ' + lastname;


const authorDetails = document.createElement('h4')
authorDetails.className = 'author_details'
authorDetails.style.textAlign = 'center'
authorDetails.textContent = `${fullName}`
aboutAuthor.append(authorDetails)


let links = document.createElement('p')
// links.textContent = `${asabenehChallenges2020.author.socialLinks.fontawesomeIcon}`.concat(`${asabenehChallenges2020.author.socialLinks.fontawesomeIcon}`)
links.textContent = `${asabenehChallenges2020.author.socialLinks[0].fontawesomeIcon}`
// document.body.appendChild(links)


let bio = document.createElement('p')
bio.textContent = `${asabenehChallenges2020.author.bio}`
bio.style.textAlign = 'justify'
aboutAuthor.appendChild(bio)

let skillsDiv = document.createElement('div')
skillsDiv.className = 'skills_div'
skillsDiv.style.display = 'flex'
skillsDiv.style.justifyContent = 'space-around'
aboutAuthor.appendChild(skillsDiv)

// title
let titleDiv = document.createElement('div')
titleDiv.className = 'title_div'
titleDiv.textContent = 'Titles'
skillsDiv.appendChild(titleDiv)


let title1 = document.createElement('p')
let title2 = document.createElement('p')
let title3 = document.createElement('p')
let title4 = document.createElement('p')
let title5 = document.createElement('p')

title1.textContent = `${asabenehChallenges2020.author.titles[0]}`
title2.textContent = `${asabenehChallenges2020.author.titles[1]}`
title3.textContent = `${asabenehChallenges2020.author.titles[2]}`
title4.textContent = `${asabenehChallenges2020.author.titles[3]}`
title5.textContent = `${asabenehChallenges2020.author.titles[4]}`
titleDiv.append(title1, title2, title3, title4, title5)


// skill
let skillDiv = document.createElement('div')
skillDiv.className = 'skill_div'
skillDiv.textContent = 'Skills'
skillsDiv.appendChild(skillDiv)


let skill1 = document.createElement('p')
let skill2 = document.createElement('p')
let skill3 = document.createElement('p')
let skill4 = document.createElement('p')
let skill5 = document.createElement('p')
let skill6 = document.createElement('p')

skill1.textContent = `${asabenehChallenges2020.author.skills[0]}`
skill2.textContent = `${asabenehChallenges2020.author.skills[1]}`
skill3.textContent = `${asabenehChallenges2020.author.skills[2]}`
skill4.textContent = `${asabenehChallenges2020.author.skills[3]}`
skill5.textContent = `${asabenehChallenges2020.author.skills[4]}`
skill6.textContent = `${asabenehChallenges2020.author.skills[4]}`
skillDiv.append(skill1, skill2, skill3, skill4, skill5, skill6)


// qualification
let qualificationDiv = document.createElement('div')
qualificationDiv.className = 'qualification_div'
qualificationDiv.textContent = 'Qualifications'
skillsDiv.appendChild(qualificationDiv)


let qua1 = document.createElement('p')
let qua2 = document.createElement('p')
let qua3 = document.createElement('p')
let qua4 = document.createElement('p')

qua1.textContent = `${asabenehChallenges2020.author.qualifications[0]}`
qua2.textContent = `${asabenehChallenges2020.author.qualifications[1]}`
qua3.textContent = `${asabenehChallenges2020.author.qualifications[2]}`
qua4.textContent = `${asabenehChallenges2020.author.qualifications[3]}`
qualificationDiv.append(qua1, qua2, qua3, qua4)


