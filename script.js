"use strict";

let secretNum = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;

const text = document.querySelector(".message");
const btnCheck = document.querySelector(".check");
const gameScore = document.querySelector(".score");
const gameHighScore = document.querySelector(".highscore");
const number = document.querySelector(".number");
const btnAgain = document.querySelector(".again");
const Guess = document.querySelector(".guess");

// Function that parses the message
const message = (message) => {
  text.textContent = message;
  return text.textContent;
}

btnCheck.addEventListener("click", () => {
  const guess = Number(Guess.value);

  if (!guess) {
    message("⛔ Invalid Number ! ⛔");

  } else if (guess <= 0) {
    message("⛔ Invalid Number ! ⛔");

  } else if (score === 0) {
    message("💥 GAME OVER 💥");
    score = 0;
    gameScore.textContent = 0;

  } else if (guess === secretNum) {
    message("✅ Correct Number ✅");
    number.textContent = secretNum;
    document.body.style.backgroundColor = "#22ff52";
    number.style.width = "30rem";

    if (score > highscore) {
      highscore = score;
    }
    gameHighScore.textContent = highscore;

  } else {

    message(guess > secretNum ? "📈 Too high 📈" : "📉 Too Low 📉");
    score--;
    gameScore.textContent = score;

  }
});

btnAgain.addEventListener("click", () => {
  document.body.style.backgroundColor = "#222";
  number.style.width = "15rem";
  score = 20;
  message("Start guessing...");
  gameScore.textContent = score;
  Guess.value = "";
  number.textContent = "?";
  secretNum = Math.trunc(Math.random() * 20) + 1;
});
