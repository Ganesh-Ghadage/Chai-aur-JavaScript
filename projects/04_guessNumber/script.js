// let randomNum = Math.floor((Math.random() * 100) + 1)

// const result = document.querySelector('.lowOrHi')
// const rem = document.querySelector('.lastResult')
// const guesses = document.querySelector('.guesses')
// const form = document.querySelector(".form")
// const startOver = document.querySelector('.resultParas')

// const p = document.createElement('p')
// p.classList.add('button')
// p.innerText = 'Start Over'
// p.style.cursor = 'pointer'

// const prevGuesses = [];
// let remGuesses = 10;

// // console.log(randomNum)

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     if(remGuesses > 0){
//         const guessNum = parseInt(form[0].value);
        
//         if(!isNaN(guessNum) && guessNum > 0 && guessNum < 100){
//             // console.log(guessNum);
            
//             remGuesses--;
//             form[0].value = ''
//             if(guessNum < randomNum){
//                 result.innerHTML = 'Guess number is low'
//             }else if(guessNum > randomNum){
//                 result.innerHTML = 'Guess number is High'
//             }else if(guessNum === randomNum){
//                 form[0].disabled = true
//                 form[1].value = "You Won"
//                 result.innerHTML = `Congrats!! You gussed correct num ${randomNum}`
//                 startOver.appendChild(p)
//             }

//             prevGuesses.push(guessNum)

//             rem.innerText = remGuesses
//             guesses.innerHTML = prevGuesses

//         }else{
//             form[0].value = ''
//             result.innerHTML = "Please give a valid guess number"
//         }
//     }else{
//         form[0].disabled = true
//         form[1].value = 'Game Over'
//         result.innerHTML = `Sorry! Your are out of Guesses.. Number was ${randomNum}`
//         startOver.appendChild(p)
//     }
// })

// p.addEventListener('click', () => {
//     randomNum = Math.floor((Math.random() * 100) + 1)
//     form[0].value = ''
//     form[0].disabled = false
//     form[1].value = "Submit guess"
//     rem.innerText = 10
//     guesses.innerHTML = ''
//     result.innerHTML = ''
//     prevGuesses = [];
//     remGuesses = 10;
//     startOver.removeChild(p)
// })



// -----------------------------------------------------------------------------------------------------


let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

