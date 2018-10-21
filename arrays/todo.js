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

const sortToDos = function (toDos) {
    toDos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

const deleteToDo = function (toDos, search) {
    // find index of to do
    const index = toDos.findIndex(function (toDo) {
        return toDo.text.toLowerCase() === search.toLowerCase()
    })

    // delete to do from object
    if (index > -1) {
        toDos.splice (index, 1)
    }
}

const getThingsToDo = function (toDos) {
    return toDos.filter(function (toDo) {
        return !toDo.completed
    })
}

sortToDos(toDos)
console.log(toDos)

// console.log(getThingsToDo(toDos))

// console.log(toDos)
// deleteToDo(toDos, 'Cut hair')

/*
const findNote = function (notes, noteTitle) {
    const index = notes.findIndex(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return notes[index]
}
*/