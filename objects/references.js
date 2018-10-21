let myAccount = {
    name: 'Ray Taylor',
    expenses: 100,
    income: 1000
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

let addIncome = function (account, amount) {
    account.income = account.income + amount
}

let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has £${balance}, £${account.income} in income and £${account.expenses} in expenses.`
}

console.log(getAccountSummary(myAccount))

addIncome(myAccount, 300)
addExpense(myAccount, 30)
addExpense(myAccount, 20)
console.log(getAccountSummary(myAccount))

resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
