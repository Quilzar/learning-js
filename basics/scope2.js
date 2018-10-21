// Global (name)
  // Local (name)
    // Local
  //Local

let name = 'Ray'

if (true) {
    let name = 'Mike' // variable shadowing

    if (true) {
        console.log(name)
    }   

    console.log(name)
}

if (true) {
    console.log(name)    
}


// reassigment

let name = 'Ray'

if (true) {
    let name = 'Mike' // variable shadowing

    if (true) {
        name = 'Jen' // reassignment
        console.log(name)
    }   

    console.log(name)
}

if (true) {
    console.log(name)    
}



// leaked global....

//let name = 'Ray'

if (true) {
    //let name = 'Mike' // variable shadowing

    if (true) {
        name = 'Jen' // reassignment
        console.log(name)
    }   

    console.log(name)
}

if (true) {
    console.log(name)    
}
