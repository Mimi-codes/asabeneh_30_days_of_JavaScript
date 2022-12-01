 //num 3
 const  personAccount = () => {
    let firstName = 'Mariam';
    let lastName = 'Ismael';
    let incomes = [500, 1000];
    let expenses = [20000]

    function totalIncome() {
let _totalInc = 0;
let _totalExp = 0;

incomes.forEach(income => {
    _totalInc = _totalInc + income;
})

expenses.forEach(expense => {
    _totalExp = _totalExp + expense;
})

let total = _totalInc - _totalExp;
return total;
    }

    function totalExpense() {
let _totalExpen = 0;
expenses.forEach(expense => {
    _totalExpen = _totalExpen + expense
})
    }

    function accountInfo() {
return `Person's Info: ${firstName} ${lastName}; Balance: ${totalIncome()}`
    }

    function addIncome(income) {
incomes.push(income);
return incomes;
    }

    function addExpense(expense) {
expenses.push(expense);
return expenses;
    }

    function accountBalance() {
totalIncome()
    }

return {
    addIncome: addIncome(),
    addExpense: addExpense(),
    totalIncome:totalIncome(),
    totalExpense: totalExpense(),
    accountBalance: accountBalance(),
    accountInfo: accountInfo()
}

 }

 const accountDetails = personAccount();
 console.log(accountDetails.accountInfo)