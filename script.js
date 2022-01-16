'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
const mainScore = 20;

// const checkIfCorrect = function (val) {
//   if (val === document.querySelector('.number').textContent)
//     document.querySelector('.message').textContent = '🎉correct Answer';
//   else {
//     document.querySelector("label-score").textContent = Number(document.querySelector('label-score').textContent)--;
//   }
// };

document.querySelector('.check').addEventListener('click', function () {
  let score = document.querySelector('.score').textContent;

  let val = document.querySelector('.guess').value;
  val = Number(val);
  //   console.log(val, typeof val);
  let actualValue = secretNumber;
  if (score > 0) {
    //  if the guess is right
    if (val == actualValue) {
      document.querySelector('.message').textContent = '🎉correct Answer';
      if (score > document.querySelector('.highscore').textContent)
        document.querySelector('.highscore').textContent = score;
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#4ee44e';
      document.querySelector('.number').style.width = '30rem';
    }
    // if the guess i lower
    else {
      score--;
      document.querySelector('.score').textContent = score;
      if (val < actualValue) {
        document.querySelector('.message').textContent =
          'Your Answer is Lower!!';
      }
      // if the guess is higher
      else if (val > actualValue) {
        document.querySelector('.message').textContent =
          'Your Answer is Higher!!';
      }
    }
  } else {
    document.querySelector('#main-heading').textContent =
      'You Lost!! Better Luck Next Time';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = mainScore;
  document.querySelector('.message').textContent = 'Start guessing ...';
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
