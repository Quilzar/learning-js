//long simple function
const squareLong = function (num) {
    return num * num
}

console.log(squareLong(5))

// long arrow...
// const square = (num) => {
//     return num * num
// }

// short simple function
const square = (num) => num * num

console.log(square(3))




// set up people object array
const people = [{
    name: 'Ray',
    age: 27
}, {
    name: 'Vikram',
    age: 31
}, {
    name: 'Jes',
    age: 22
}]

// long complex function
const underThirtyLong = people.filter(function (person) {
    return person.age < 30
})

console.log(underThirtyLong)

// short complex function
const underThirty = people.filter((person) => person.age < 30)

console.log(underThirty)

// equals twenty two long
const equalsTwentyTwoLong = people.find(function (person) {
    return person.age = 22
})

console.log(equalsTwentyTwoLong)

// equals twenty two long short
const equalsTwentyTwo = people.find((person) => person.age = 22)

console.log(equalsTwentyTwo)
