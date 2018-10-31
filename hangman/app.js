game = new Hangman ('Cat in the hat', 2)
renderGame(game)

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)

    game.makeGuess(guess)
    renderGame(game)
})
