const notes = [{
    title: 'my next trip',
    body: 'Go to Birmingham for UKGE'
}, {
    title: 'Habbits to work on',
    body: 'Exersise, eat better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

document.querySelector('#create-note').addEventListener('click', function (e) {
    e.target.textContent = 'The button was clicked'
})

document.querySelector('#remove-all').addEventListener('click', function (e) {
   document.querySelectorAll('.note').forEach(function(note) {
       note.remove()
   })
})

// -- Single --
// p -- all paragraph
// #replace -- a.id
// .item -- a single class

// -- Multiple --
// p#order -- all p with a id of order
// button.inventory -- all buttons with a class of inventory
// h1#title.application -- all h1 with a id of title and a class of application
// h1.application#title -- all h1 with a class of application and a id of title
