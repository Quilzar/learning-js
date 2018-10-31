const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = ['e', 'x', 'c', 't']
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''

    this.word.forEach((letter) => {
        this.guessedLetters.includes(letter) || letter === ' ' ? puzzle += letter : puzzle += '*'
    })

    return puzzle
}

gameOne = new Hangman ('Cat', 2)
console.log(gameOne.getPuzzle())

gameTwo = new Hangman ('A Complex Word', 5)
console.log(gameTwo.getPuzzle())

gameThree = new Hangman ('A Place In The World', 5)
console.log(gameThree.getPuzzle())
