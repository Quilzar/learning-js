'use strict'

// read existing notes from local storage
const getSavedNotes = () => {
    // get notes from local storage if it exists
    const notesJSON = localStorage.getItem('notes')

    try {
        // parse notes if found in local storage or return empty array
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (err) {
        return []
    }
}

// save notes to localStorage
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// remove a note
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id)

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
// generate the DOM structure for a note
const generateNoteDOM = (note) => {
    // create elements
    const noteElement = document.createElement('div')
    const textElement = document.createElement('a')
    const buttonElement = document.createElement('button')

    // append button to noteElement
    buttonElement.textContent = 'x'
    noteElement.appendChild(buttonElement)
    buttonElement.addEventListener('click', () => {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    // if note title exist add the note title to the text element
    if (note.title.length > 0) {
        textElement.textContent = note.title
    } else {
        textElement.textContent = 'Unnamed Note'
    }
    textElement.setAttribute('href', `edit.html#${note.id}`)
    noteElement.appendChild(textElement)

    // return note element
    return noteElement
}

// sort your notes by one of three ways
const sortNotes = (notes, sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'alphabetical') {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return notes
    }
}

// render all notes
const renderNotes = (notes, filters) => {
    notes = sortNotes (notes, filters.sortBy)

    // filter down notes
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    // empty the notes <div>
    document.querySelector('#notes').innerHTML = ''

    // generate all note DOMs
    filteredNotes.forEach((note) => {
        const noteElement = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteElement)
    })
}

// generate last edited string
const generateLastEdited = (timeStamp) => `Last edited ${moment(timeStamp).fromNow()}.`
