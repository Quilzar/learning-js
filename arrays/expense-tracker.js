const account = {
    name: 'Ray Taylor',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({description: description, amount: amount})
    },
    addIncome: function (description, amount) {
        this.income.push({description: description, amount: amount})
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        let balance = 0
 
        // calculate total expenses
        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount
        })

        // calculate total income
        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount
        })

        // calculate balance
        balance = totalIncome - totalExpenses

        return `${this.name} has a balance of £${balance}, £${totalIncome} in income £${totalExpenses} in expenses.`
    }
}

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2.5)
account.addExpense('DVD Hire', 13)
account.addIncome('Job', 1000)
account.addIncome('Contracting', 130)
console.log(account.getAccountSummary())
// console.log(account)
