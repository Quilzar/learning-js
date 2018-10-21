// undefined for variable
let name

name = 'Ray'

if (name === undefined) {
    console.log('Please proved a name')
} else {
    console.log(name)
}

// undefined for functions
// undefined as function return
let square = function (num) {
    console.log(num)
}

let result = square()
console.log(result)

// null as assinged value
let age = 37

console.log(age)

age = null

console.log(age)
