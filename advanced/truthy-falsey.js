const products = []
const product = products[0]

// console.log(product !== undefined ? 'Product found!' : 'Product not found!')

// if (product !== undefined) {
//     console.log('Product found!')
// } else {
//     console.log('Product not found!')
// }

// truthy - Values that resolve to true in boolean context
// falsy - Values that resolve to false in boolena context
// falsy value = false, 0, null, undefined, '', NaN

if (null) {
    console.log('Product found!')
} else {
    console.log('Product not found!')
}

console.log(product !== undefined ? 'Product found!' : 'Product not found!')
