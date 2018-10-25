'use strict'

// create toDos object
const toDos = getSavedToDos()

// create object to store filters
const filters = {
    searchText: '',
    hideCompleted: false
}

renderToDos(toDos, filters)

// listen to #filter-todo
document.querySelector('#filter-todo').addEventListener('input', (e) => {
    filters.searchText = e.target.value

    renderToDos(toDos, filters)
})

// listen to #add-todo
document.querySelector('#add-todo').addEventListener('submit', (e) => {
    // prevent default behaviour
    e.preventDefault()

    // add new toDo
    toDos.push({
        id: uuidv4(),
        text: e.target.elements.newToDo.value,
        completed: false
    })

    saveToDos(toDos)
    renderToDos(toDos, filters)

    e.target.elements.newToDo.value = ''
})

// listen to #hide-completed
document.querySelector('#hide-completed').addEventListener('change', function(e) {
    filters.hideCompleted = e.target.checked

    renderToDos(toDos, filters)
})
