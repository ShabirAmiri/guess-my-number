'use strict';

let randomNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
document.querySelector('.number').value = randomNum;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when there is no input
  if (!guess) {
    displayMessage('🛑 No number');
  }
  //when user win
  else if (guess === randomNum) {
    displayMessage('🏆 You are correct');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = guess;
  }
  // when guess is not equal to secret number.
  else if (guess != randomNum) {
    if (score > 1) {
      displayMessage(guess > randomNum ? 'too high' : 'too low');
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
  //when user lose the game.
  if (score < 1) {
    displayMessage('You lost the game!');
  }
  //again button.
  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.number').value = randomNum;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = null;
  });
});
