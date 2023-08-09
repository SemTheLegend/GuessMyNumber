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

  } else if (guess <= 0) {
    //TODO: If guess is less than or equal to 0
    displayMessage("⛔ Invalid Number! ⛔");

  } else if (score < 1) {
    // TODO: If score equals 0
    displayMessage("💥 GAME OVER 💥");
    score = 0;
    gameScore.textContent = 0;

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


/* 
Guess My Number.

This is the first project of the series of The JavaScript projects that I will be doing on my road to JavaScript mastery. What I like about this miniature project is it demonstrates the power of JavaScript in manipulating the DOM and displaying the things you want when certain criteria is met. This project really introduces you to the world of JavaScript and the web. The nice part about this is that it is so easy to implement.



HOW IT WORKS

When you start the game, you have a score of 20. The more your guess is wrong the score is deducted by 1. If you have failed to guess the number and your score reaches 0 the game ends. Each time you guess correctly depending on how less tries it took you to guess the number, you set a new high-score. The number is generated randomly each time you play again. I have a high-score of 19, try beating that 😉.



What I like about the Project.

1. It allows me to capture user data.

2. It allows me to change the CSS classes based on the user data.

3. I get to deepen my understanding of working with event listeners.

4. It highlights the importance of building sound logic when developing programs.

5. It is simple but yet very challenging to implement.

6. It teaches you the how to manipulate the DOM.

7. You get to appreciate JavaScript.
*/