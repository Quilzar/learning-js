let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', () => {

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

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

// if local storage changes update titleElement
window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        // read in new value
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

