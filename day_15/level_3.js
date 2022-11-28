

class PersonAccount {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.incomes = [];
        this.expenses = [];
    }

    totalIncome() {
        let _totalIncome= 0;
        this.incomes.forEach(income => _totalIncome += income)
        return _totalIncome
    }
    totalExpenses() {
        let totalExpenses = 0;
        this.expenses.forEach(expense => totalExpenses += expense)
        return totalExpenses;
    }

    accountInfo() {
        return `
        Full-Name: ${this.firstName} ${this.lastName}
        total-Income: ${this.totalIncome()}
        total-Expenses: ${this.totalExpenses()}
        `
    }

    set addIncome(amount) {
        this.incomes.push(amount)
    }

    set addExpenses(cost) {
        this.expenses.push(cost)
    }
}

let myAccount = new PersonAccount("Mariam", "Ismael")
console.log(myAccount)