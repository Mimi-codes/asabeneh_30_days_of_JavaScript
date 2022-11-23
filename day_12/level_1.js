//num 1
let text = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month."
let salaries = text.match(/\d+/g);
let totalAnnualIncome = 0;
salaries.forEach(element => {
    totalAnnualIncome += Number(element);
})
console.log(totalAnnualIncome)

//num 2

//num 3
const pattern = /[F/f]irst[Nn]ame|[F/f]irst_[Nn]ame/
const is_valid_variable = (str) => {
    console.log(pattern.test(str));
}
is_valid_variable('first_name')
is_valid_variable('first-name')
is_valid_variable('1first_name') 
is_valid_variable('firstname') 