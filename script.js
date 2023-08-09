"use strict";

let secretNum = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;

const message = document.querySelector(".message");
const btnCheck = document.querySelector(".check");
const gameScore = document.querySelector(".score");
const gameHighScore = document.querySelector(".highscore");
const number = document.querySelector(".number");
const btnAgain = document.querySelector(".again");
const inputNum = document.querySelector(".guess");

// Function that parses the message
const displayMessage = (str) => {
  message.textContent = str;
  return message.textContent;
}

btnCheck.addEventListener("click", () => {
  const guess = Number(inputNum.value);

  if (!guess) {
    //TODO: If guess is not a number

    displayMessage("⛔ Invalid Number! ⛔");

  } else {

    if (score > 1) {
      //TODO: If the score is greater than 1

      if (guess <= 0 || guess > 20) {
        //TODO: If guess is less than or equal to 0 or not a valid number

        displayMessage("⛔ Invalid Number! ⛔");

      } else if (guess === secretNum) {
        // TODO: If guess equals secret number

        displayMessage("✅ Correct Number ✅");
        number.textContent = secretNum;
        document.body.style.backgroundColor = "#60b347";
        number.style.width = "30rem";

        if (score > highscore) {
          highscore = score;
        }
        gameHighScore.textContent = highscore;

      } else {
        // TODO: If the guess is higher or lower than secret number

        displayMessage(guess > secretNum ? "📈 Too high 📈" : "📉 Too Low 📉");
        score--;
        gameScore.textContent = score;
      }

    } else {
      // TODO: If score now less than 1 

      displayMessage("💥 GAME OVER 💥");
      gameScore.textContent = 0;

    }
  }
});

btnAgain.addEventListener("click", () => {
  document.body.style.backgroundColor = "#222";
  number.style.width = "15rem";
  score = 20;
  displayMessage("Start guessing...");
  gameScore.textContent = score;
  inputNum.value = "";
  number.textContent = "?";
  secretNum = Math.trunc(Math.random() * 20) + 1;
});
