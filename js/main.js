(() => {
  console.log('hangman script fired!');

  // create an array to hold the words to be guessed (MDN -> arrays, MDN const)
  const words = ["western", "fanshawe", "canada", "barbados", "hangman"];

  // set up a variable stack
  let currentWord = null,
      wordHint = document.querySelector('.current-word'),
      guessBox = document.querySelector('.guess'),
      wrongGuesses = 0,
      correctGuesses = 0,
      resetScreen = document.querySelector('.reset-screen');
      resetButton = resetScreen.querySelector('button');
      wrongLetterList = document.querySelector('.wrong-letters'),
      wrongLetterArray = [];

  function resetGame () {
    //debugger;
    // reset the game and pick a new word
    let gamePieces = Array.from(document.querySelectorAll('.show-piece'));
    gamePieces.forEach(piece => piece.classList.remove('show-piece'));
    wrongGuesses = 0;
    guessBox.value = ""; // set the input text to nothing
    wrongLetterList.textContent = ""; //reset wrong letters
  }

  function showResetScreen() { // this command is a made up name. What you call it is up to you//
    // user has lost, reset stuff and start over
    //debugger;
    console.log('you loser, loser!');
    resetScreen.classList.add('show-piece');
resetScreen.querySelector('h3').textContent = message;
  }

  function takeGuess() {
    // MDN -> 'this' keyword
    console.log(this.value);

    // if there's no letter, exit the game loop -> MDN 'or'
    if (this.value == "" || this.value.length < 1 ) {
      return;
    }

    // set up the win and lose paths ( if / else )
    if (!currentWord.includes(this.value)) {
      // losing path
      // compare the letter guess to the word to see if it's in there
      console.log('invalid letter!');
      // store wrong guesses so we can show them to the user
      wrongLetterArray.push(this.value);
      // add them to the paragraph tag on the page
      wrongLetterList.textContent = wrongLetterArray.join("");
      // turn on the handman piece
      document.querySelector(`.wrong${wrongGuesses}`).classList.add('show-piece');

      if (wrongGuesses >= 5) {
        // increment the wrongGuesses variable
        showRestScreen();
      } else {
      // winning path
      wrongGuesses++;
    }
  }  else {
  debugger;
  //let matchAgainst = currentWord.split ("");
  //var hintString= wordHint.textContent.split ("");

  // matchAgainst.forEach((letter, index))=> {
  //   if (letter === currentGuess) {
  //     hintString[index]= currentGuess;
  //     correctGuesses++; //make sure to track correct guesses
  //   }
  // });
  //
  // wordHint.textContent = ""; // make the hint on the screen be empty//
  // wordHint.textContent = hintString.join (" ");
  //
  // if (correctGuesses === currentWord.length) {
  //   showResetScreen ();
  // }
  }
}

  function init() {
    // look at MDN -> the Math object
    currentWord = words[Math.floor(Math.random()*words.length)];
    // fill the hint with underscores -> MDN string methods / array .map method
    wordHint.textContent = currentWord.split("").map(letter => letter = "__").join(" ");

    // MDN -> template string
    console.log(`guess this word: ${currentWord}. It's at ${words.indexOf(currentWord)}`);
  }

  // event handling always goes at the bottom
  guessBox.addEventListener('keyup', takeGuess);
  resetButton.addEventListener('click', resetGame);

  init();
})();
