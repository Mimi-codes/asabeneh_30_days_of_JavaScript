const languages =  [
    { English: 91 },
    { French: 45 },
    { Arabic: 25 },
    { Spanish: 24 },
    { Russian: 9 },
    { Portuguese: 9 },
    { Dutch: 8 },
    { German: 7 },
    { Chinese: 5 },
    { Swahili: 4 },
    { Serbian: 4 }
  ]

  //num 1
  let lang = new Set(languages)
  lang.size;
//   console.log(lang);

  //num 2
  const mostSpokenLanguages = (num) => {
    let mostSpoken  = languages.slice(0, num)
    return mostSpoken;
  } 
console.log(mostSpokenLanguages(3))