"use strict";
let score = 10;
let highScore = 0;
const nextBowl = Math.trunc(Math.random() * 8 + 1);
console.log(nextBowl);

document.querySelector(".check").addEventListener("click", function () {
  document.querySelector(".wicket").value = 7;
  document.querySelector(".dot").value = 8;
  const guess = Number(document.querySelector(".select").value);

  if (guess === nextBowl) {
    document.querySelector(".message").textContent = "🥳 Hurray! You won..";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".high-score").textContent = highScore;
    }
  } else if (guess !== nextBowl) {
    if (score > 1) {
      if (guess < 7 && guess > nextBowl) {
        document.querySelector(".message").textContent =
          "🐸 Your guess is too high ! 📈";
      } else if (guess < 7 && guess < nextBowl) {
        document.querySelector(".message").textContent =
          "🐸 Your guess is too low ! 📉";
      } else {
        document.querySelector(".message").textContent =
          "🐸 Your guess is wrong ! 📉";
      }
    }

    score--;
    document.querySelector(".score").textContent = score;
  } else {
    document.querySelector(".message").textContent = "🚫 You lost the Game..";
    document.querySelector(".score").textContent = 0;
  }
});
