let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {

    // create uid
    const id = uuidv4()

    // get current time as timeStamp
    const timeStamp = moment().valueOf()

    // create empty note object
    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timeStamp,
        updatedAt: timeStamp
    })
 
    // save notes to location storage and then go to edit.html
    saveNotes(notes)
    location.assign(`edit.html#${id}`)
 })

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function(e) {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

// if local storage changes update titleElement
window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        // read in new value
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

// const now = moment()
// now.subtract(1, 'week').subtract(20, 'days')
// console.log(now.format('MMMM Do, YYYY'))
// console.log(now.fromNow())
// const timeStamp = now.valueOf()
// console.log(timeStamp)
// console.log(moment(timeStamp).toString())

// const now = moment()
// now.date(27).year(1970).month(10)
// console.log(now.format('MMM D, YYYY'))
