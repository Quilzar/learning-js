// arguments do not exist in => functions...
const add = function (a, b) {
    return arguments[0] + arguments[1]
}

console.log(add(11,22,33,44))

// => functions do not bind this....
const car = {
    colour: 'Red',
    getSummary() {
        return `The car is ${this.colour}`
    }
}

console.log(car.getSummary())

