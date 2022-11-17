const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  };

  //num 1
let max = 0
let winner;
function highestSkills() {
for (const property in users) {
        if(users[property].skills.length > max) {
          max = users[property].skills.length
          winner = property;
        }
    }
    return winner;
  }
    console.log(highestSkills());

  //num 2a
  let loggedIn = '';
  function loggedInUsers() {
  for (const property in users) {
      if (users[property].isLoggedIn === true) {
        loggedIn++
      }
  }
  return loggedIn;
  }
  console.log(loggedInUsers())

  //num 2b
  let numPoints = 0;
  function pointsAboveFifty() {
  for (const property in users) {
      if (users[property].points >= 50) {
        numPoints++
      }
  }
  return numPoints;
  }
  console.log(pointsAboveFifty())
  
  //num 3
  let mernUser = [];
function mernStack() {
for (const property in users) {
    if (users[property].skills.includes('MERN')) {
      mernUser.push(property)
    }
}
return mernUser;
}
console.log(mernStack())

  //num 4
users.Mariam = {}
console.log(users)

  //num 5
  const keys = Object.keys(users)
//   console.log(keys);

//num 6 
const usersValues = Object.values(users)
  console.log(usersValues);

//num 7
const country = {
name: 'Nigeria',
capital: 'Abuja',
population: '5 billion',
languages: ['Yoruba', 'Hausa', 'Igbo', 'English']
}
console.log(Object.entries(country));

