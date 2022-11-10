
const timeFormat = new Date;
let year = timeFormat.getFullYear(); 
let month = timeFormat.getMonth() + 1; 
let day = timeFormat.getDay() + 1; 
let hour = timeFormat.getHours(); 
let min = timeFormat.getMinutes(); 
console.log(`${year}-0${month}-${day} 0${hour}: 0${min}`);
