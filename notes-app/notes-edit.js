'use strict'

// create titleElement and bodyElement
const titleElement = document.querySelector('#note-title')
const lastEditedElement = document.querySelector('#last-edited')
const bodyElement = document.querySelector('#note-body')
const removeNoteElement = document.querySelector('#remove-note')

// get noteId from hash in URL
const noteId = location.hash.substring(1)

// get saved notes form local storage
let notes = getSavedNotes()

// does my note actually exist?
let note = notes.find((note) => note.id === noteId)

// redirect if not
if (!note) {
    location.assign('index.html')
}

// load note title and body into the input and text area
titleElement.value = note.title
bodyElement.value = note.body
lastEditedElement.textContent = generateLastEdited(note.updatedAt)

// listen to notes title input
titleElement.addEventListener('input', (e) => {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    lastEditedElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

// listen to notes body text area
bodyElement.addEventListener('input', (e) => {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    lastEditedElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

// listen to remove note button
removeNoteElement.addEventListener('click', (e) => {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('index.html')
})

// if local storage changes update titleElement and bodyElement
window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        // read in new value
        notes = JSON.parse(e.newValue)

        // does my note actually exist?
        note = notes.find((note) => note.id === noteId)

        // reditect if not
        if (!note) {
            location.assign('index.html')
        }

        // load note title and body into the input and text area
        titleElement.value = note.title
        bodyElement.value = note.body
        lastEditedElement.textContent = generateLastEdited(note.updatedAt)
    }
})
