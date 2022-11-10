//question 1
const quote1 =
  "There is no exercise better for the heart than reaching down and lifting people up.";
console.log(quote1);

//question 2
const quote2 =
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."; 
console.log(quote2);

//question 3
console.log(typeof "10" === 10); 

//question 4
console.log(typeof parseFloat("9.8") === 10);

//question 5
const py = "python";
const ja = "jargon";
console.log(py && ja.includes("on")); 

//question 6
console.log("I hope this course is not full of jargon".includes("jargon")); 

 //question 7
console.log(Math.floor(Math.random() * (100 - 0 + 1)) + 0);

//question 8
console.log(Math.floor(Math.random() * (100 - 50 + 1)) + 50); 

//question 9
console.log(Math.floor(Math.random() * (255 - 0 + 1)) + 0); 

//question 10
const char = 'JavaScript';
console.log(char[Math.floor(Math.random() * 3)]);

//question 11
console.log('1\t1\t1\t1');
console.log('2\t1\t2\t4\t8');
console.log('3\t1\t3\t9\t27');
console.log('4\t1\t4\t16\t64');
console.log('5\t1\t5\t25\t125');

//question 12
const sentence = "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.substr(31, 23));