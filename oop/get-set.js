const data = {
    locations: [],
    get location() {
        return this._location
    },
    set location(value) {
        this._location = value.trim()
        this.locations.push(this._location)
    }
}

// code that uses the data object
data.location = '    Woking  '
data.location = ' Sudbury   '
console.log(data.locations)
console.log(data.location)
