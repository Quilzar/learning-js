// get toDos from location storage returns empty array if it does not
const getSavedToDos = function () {
    // check to see if toDos exist in local storage
    const toDosJSON = localStorage.getItem('toDos')

    // parse if they do return empty if they do not
    if (toDosJSON !== null) {
        return JSON.parse(toDosJSON)
    } else {
        return []
    }
}

// save toDos to local storage
const saveToDos = function (toDos) {
    localStorage.setItem('toDos', JSON.stringify(toDos))
}

// filter and render to dos
const renderToDos = function (toDos, filters) {
    // create filteredToDos based on the filters object
    const filteredToDos = toDos.filter(function (toDo) {
        const searchTextMatch = toDo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !toDo.completed

        return searchTextMatch && hideCompletedMatch
    })

    // create toDosIncomplete
    const toDosIncomplete = filteredToDos.filter(function (toDo) {
        return !toDo.completed
    })

    // clear out div tag
    document.querySelector('#to-dos').innerHTML = ''

    // write out summary to #to-dos div tag
    document.querySelector('#to-dos').appendChild(generateSummaryDom(toDosIncomplete))
    
    // write out filteredToDos to #to-dos div tag
    filteredToDos.forEach(function (toDo) {
        document.querySelector('#to-dos').appendChild(generateToDoDom(toDo))
    })
}

// generate toDo DOM elements
const generateToDoDom = function (toDo) {
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
    checkboxElement.addEventListener('change', function() {
        toggleToDo(toDo.id)
        saveToDos(toDos)
        renderToDos(toDos, filters)
    })


    // add in text element
    textElement.textContent = toDo.text 
    toDoElement.appendChild(textElement)

    // add in button element
    buttonElement.textContent = 'x'
    buttonElement.addEventListener('click', function() {
        removeToDo(toDo.id)
        saveToDos(toDos)
        renderToDos(toDos, filters)
    })

    toDoElement.appendChild(buttonElement)
    return toDoElement
}

// toggle toDo.completed
const toggleToDo = function (id) {
    const toDo = toDos.find(function (toDo) {
        return toDo.id === id
    })

    if (toDo !== undefined) {
        toDo.completed = !toDo.completed
    }
}

// remove toDo based on the id
const removeToDo = function (id) {
    const toDoIndex = toDos.findIndex(function (toDo) {
        return toDo.id === id
    })

    if (toDoIndex > -1) {
        toDos.splice(toDoIndex, 1)
    }
}

// generateSummaryDom based on incomplete toDos
const generateSummaryDom = function (toDosIncomplete) {
    const summaryElement = document.createElement('h2')
    summaryElement.textContent = `You have ${toDosIncomplete.length} things left to do!`
    return summaryElement
}
