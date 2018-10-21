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

filters = {
    searchText: ''
}

// create toDosIncomplete with all toDos that are completed: false
const toDosIncomplete = toDos.filter(function (toDo) {
    return !toDo.completed
})

// write out summary
const summary = document.createElement('h2')
summary.textContent = `You have ${toDosIncomplete.length} things to do!`
document.querySelector('body').appendChild(summary)

// write out all to dos
// const renderToDos = function (toDos, filters) {
//     const filterToDos = toDos.toLowerCase().includes(filters.searchText.toLowerCase())

//     filterToDos.forEach(function (toDo) {
//     const p = document.createElement('p')
//     p.textContent = toDo.text
//     document.querySelector('#todos').appendChild(p)
// })

// renderToDos(toDos)

// listen to "Add New To Do" click
document.querySelector('#add-todo').addEventListener('click', function (e) {
    console.log('"Add New To Do" button was clicked')
})

// listen to Input
document.querySelector('#input-todo').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    console.log(filters)
})
