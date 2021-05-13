'use strict';

// Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;
let score = 0;
let playing = true;

const switchPlayer = () => {
  currentScore = 0;
  document.getElementById(
    `current--${activePlayer}`
  ).textContent = currentScore;
  // document.querySelector(`.player--${activePlayer}`).classList.remove('player--active'); changing player
  activePlayer = activePlayer == 0 ? 1 : 0;
  // document.querySelector(`.player--${activePlayer}`).classList.add('player--active'); changing player

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', () => {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    console.log(dice);

    if (dice !== 1) {
      currentScore += dice;

      // current0El.textContent = currentScore;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      document.getElementById(`score--${activePlayer}`).textContent = 0;
      switchPlayer();

      console.log('player changed to', activePlayer);
    }
  }
});

btnHold.addEventListener('click', () => {
  if (playing) {
    const myScore =
      Number(document.querySelector(`#score--${activePlayer}`).textContent) +
      currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = myScore;

    if (myScore >= 100) {
      diceEl.classList.add('hidden');
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', () => {
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
  currentScore = 0;
  activePlayer = 0;
  score = 0;
  playing = true;
});

// for (let x = 0; x < 2; x++) {
//   if (num == 6) {
//     x = 3;
//     console.log('Hooray');
//   }
//   console.log('Number is', num);
//   num = Math.trunc(Math.random() * 6) + 1;
//   x--;
// }

// console.log(num);
