//1
const firstName = 'Mariam'; 
const lastName = 'Ismael'; 
const country = 'Nigeria'; 
const city = 'Ilorin'; 
const age = 24; 
const isMarried = false;
const year = 2022;

console.log(typeof(firstName), typeof(lastName), typeof(country),typeof(city), typeof(age), typeof(isMarried), typeof(year));

//num 2
const check = '10' === 10;
console.log(check);

//num 3
const _check = parseInt('10') === 10;
console.log(_check);

//num 4i
const num = 1;
const _num = 'Nigeria';
const $num = true;

//num 4ii
const falsyVal = '';
const _falsyVal = 0;
const $falsyVal = false;

//num 5
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');
console.log('python'.length > 'jargon'.length);

//num 6
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
console.log(!'dragon'.includes('on') && !'python'.includes('on'));

//num 7
const today = new Date;

//num 7i
console.log(today.getFullYear()); 

//num 7ii
console.log(today.getMonth() + 1);

//num 7iii
console.log(today.getDate());

//num 7iv
console.log(today.getDay() + 1);

//num 7v
console.log(today.getHours());

//num 7vi
console.log(today.getMinutes());

//num 7vii
console.log(today.getTime());


