// create to dos object
const toDos =[{
    text: 'Play Dinosaur Island',
    completed: true
}, {
    text: 'Mow Lawn',
    completed: false
}, {
    text: 'Wash Bedding',
    completed: false
}, {
    text: 'Sleeve Arkham',
    completed: true
}, {
    text: 'Cut Hair',
    completed: false
}]

// create object to store filters
const filters = {
    searchText: '',
    hideCompleted: false
}

// filter and render to dos
const renderToDos = function (toDos, filters) {
    // create filtered to dos
    const filteredToDos = toDos.filter(function (toDo) {
        const searchTextMatch = toDo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !toDo.completed

        return searchTextMatch && hideCompletedMatch
    })

    // create toDosIncomplete with all toDos that are completed: false
    const toDosIncomplete = filteredToDos.filter(function (toDo) {
        return !toDo.completed
    })

    // clear out div tag
    document.querySelector('#to-dos').innerHTML = ''

    // write out summary to #to-dos div tag
    const summary = document.createElement('h2')
    summary.textContent = `You have ${toDosIncomplete.length} things left to do!`
    document.querySelector('#to-dos').appendChild(summary)
    
    // write out to dos to #to-dos div tag
    filteredToDos.forEach(function (toDo) {
        const p = document.createElement('p')
        p.textContent = `${toDo.text} (${toDo.completed})` 
        document.querySelector('#to-dos').appendChild(p)
    })
}

// initial render to do <div>
renderToDos(toDos, filters)

// listen to #filter-todo
document.querySelector('#filter-todo').addEventListener('input', function(e) {
    // update filters object
    filters.searchText = e.target.value

    // rerender to-dos <div>
    renderToDos(toDos, filters)
})

// listen to #add-todo
document.querySelector('#add-todo').addEventListener('submit', function(e) {
    // prevent default behaviour (avoid refresh)
    e.preventDefault()

    // add sumbited to do to toDos object
    toDos.push({
        text: e.target.elements.newToDo.value,
        completed: false
    })

    // rerender to-dos <div>
    renderToDos(toDos, filters)

    // clear input form
    e.target.elements.newToDo.value = ''
})

// listen to #hide-completed
document.querySelector('#hide-completed').addEventListener('change', function(e) {
    // update filters object
    filters.hideCompleted = e.target.checked

    // rerender to-dos <div>
    renderToDos(toDos, filters)
})
