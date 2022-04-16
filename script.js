'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Funkcije
const numberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

const bodyColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const scoreCalc = function (score) {
  document.querySelector('.score-label__score').textContent = score;
};

const highscoreNumber = function (highscore) {
  document.querySelector('.highscore-label__highscore').textContent = highscore;
};

const message = function (text) {
  document.querySelector('.section_right__message').textContent = text;
};

// CHECK BUTTON CLICK EVENT
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.section_left__input').value);

  // when there is no input
  if (!guess) {
    message('❌ No number!');

    // when players win
  } else if (guess === secretNumber) {
    message('🎉 Correct number!');
    document.querySelector('.number').textContent = secretNumber;
    bodyColor('#69db7c');

    // Number width when winning
    if (screen.availWidth > 1054) {
      numberWidth('24rem');
    } else if (screen.availWidth > 846) {
      numberWidth('18rem');
    } else {
      numberWidth('16rem');
    }
    if (score > highscore) {
      // Highscore calculation
      highscore = score;
      highscoreNumber(highscore);
    }

    // When player picks wrong number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      message(
        guess > secretNumber
          ? '📈 Number is too high!'
          : '📉 Number is too low!'
      );
      score--;
      scoreCalc(score);

      // When player loses
    } else {
      message('👎 You lost the game!');
      scoreCalc(0);
      bodyColor('#ff6b6b');
    }
  }
});

// AGAIN BUTTON CLICK EVENT
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message('Start guessing...');
  bodyColor('#e5dbff');
  Number(document.querySelector('.section_left__input').value);
  document.querySelector('.number').textContent = '?';
  scoreCalc(score);
  numberWidth('');
});
