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

// create toDosIncomplete with all toDos that are completed: false
const toDosIncomplete = toDos.filter(function (toDo) {
    return !toDo.completed
})

// write out summary
const summary = document.createElement('h2')
summary.textContent = `You have ${toDosIncomplete.length} things to do!`
document.querySelector('body').appendChild(summary)

// write out all to dos
toDos.forEach(function (toDo) {
    const p = document.createElement('p')
    p.textContent = toDo.text
    document.querySelector('body').appendChild(p)
})

// listen to "Add New To Do" click
document.querySelector('#add-todo').addEventListener('click', function (e) {
    console.log('"Add New To Do" button was clicked')
})
