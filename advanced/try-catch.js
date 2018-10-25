const getTip = (amount) => {
    if (typeof amount === 'number') {
        return amount * .25
    } else {
        throw Error('getTip was not provided a number')
    }
}

try {
    const result = getTip(10)
    console.log(getTip(result))
} catch (err) {
    console.log('Catch block here....')
}

