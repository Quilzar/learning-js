let name = '   Ray Taylor '

// length property
console.log(name.length)

// convert to upper case
console.log(name.toUpperCase())

// convert to lower case
console.log(name.toLowerCase())

// includes method
let password = 'abc123password098'
console.log(password.includes('password'))

// trim
console.log(name.trim())

let isValidPassword = function (password) {
    return password.length > 8 && !password.toLowerCase().includes('password')
}

console.log(isValidPassword('asdfy'))
console.log(isValidPassword('Adjk123Sd7r345'))
console.log(isValidPassword('asdfypassword'))
