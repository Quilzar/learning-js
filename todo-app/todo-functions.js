// get toDos from location storage returns empty array if it does not
const getSavedToDos = () => {
    // check to see if toDos exist in local storage
    const toDosJSON = localStorage.getItem('toDos')
    return toDosJSON ? JSON.parse(toDosJSON) : []
}

// save toDos to local storage
const saveToDos = (toDos) => {
    localStorage.setItem('toDos', JSON.stringify(toDos))
}

// filter and render to dos
const renderToDos = (toDos, filters) => {
    // create filteredToDos based on the filters object
    const filteredToDos = toDos.filter((toDo) => {
        const searchTextMatch = toDo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !toDo.completed

        return searchTextMatch && hideCompletedMatch
    })

    // create toDosIncomplete
    const toDosIncomplete = filteredToDos.filter((toDo) => !toDo.completed)

    // clear out div tag
    document.querySelector('#to-dos').innerHTML = ''

    // write out summary to #to-dos div tag
    document.querySelector('#to-dos').appendChild(generateSummaryDom(toDosIncomplete))
    
    // write out filteredToDos to #to-dos div tag
    filteredToDos.forEach((toDo) => document.querySelector('#to-dos').appendChild(generateToDoDom(toDo)))
}

// generate toDo DOM elements
const generateToDoDom = (toDo) => {
    const toDoElement = document.createElement('div')
    const checkboxElement = document.createElement('input')
    const textElement = document.createElement('span')
    const buttonElement = document.createElement('button')

    // add uid to toDoElement
    toDoElement.setAttribute('id', toDo.id)

    // add in checkbox element and check it if it is completed
    checkboxElement.setAttribute('type', 'checkbox')
    checkboxElement.checked = toDo.completed
    toDoElement.appendChild(checkboxElement)
    checkboxElement.addEventListener('change',() => {
        toggleToDo(toDo.id)
        saveToDos(toDos)
        renderToDos(toDos, filters)
    })


    // add in text element
    textElement.textContent = toDo.text 
    toDoElement.appendChild(textElement)

    // add in button element
    buttonElement.textContent = 'x'
    buttonElement.addEventListener('click', () => {
        removeToDo(toDo.id)
        saveToDos(toDos)
        renderToDos(toDos, filters)
    })

    toDoElement.appendChild(buttonElement)
    return toDoElement
}

// toggle toDo.completed
const toggleToDo = (id) => {
    const toDo = toDos.find((toDo) => toDo.id === id)

    if (toDo) {
        toDo.completed = !toDo.completed
    }
}

// remove toDo based on the id
const removeToDo = (id) => {
    const toDoIndex = toDos.findIndex((toDo) => toDo.id === id)

    if (toDoIndex > -1) {
        toDos.splice(toDoIndex, 1)
    }
}

// generateSummaryDom based on incomplete toDos
const generateSummaryDom = (toDosIncomplete) => {
    const summaryElement = document.createElement('h2')
    summaryElement.textContent = `You have ${toDosIncomplete.length} things left to do!`
    return summaryElement
}
