let temp = 65

// logical and operator - true if both sides if true, otherwise false
// logical or operator - true if at least one side is true, otherwise false

if (temp >= 60 && temp <= 90) {
    console.log('It is really nice out!')
} else if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside!')
} else {
    console.log('Eh. Do what you fancy!')
}

let isGuestOneVegan = true
let isGuestTwoVegan = true

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only offer up vegan dishes.')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Make sure to offer up some vegan options.')
} else {
    console.log('Offer up anything on the menu.')
}
