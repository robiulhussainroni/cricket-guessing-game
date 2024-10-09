"use strict";
let score = 10;
let highScore = 0;
const nextBowl = Math.trunc(Math.random() * 8 + 1);
console.log(nextBowl);

document.querySelector(".check").addEventListener("click", function () {
  document.querySelector(".wicket").value = 7;
  document.querySelector(".dot").value = 8;
  const guess = Number(document.querySelector(".select").value);

  if (!guess) {
    document.querySelector(".message").textContent =
      "⛔ please  input a valid number";
  } else if (guess === nextBowl) {
    document.querySelector(".message").textContent = "🥳 Hurray! You won..";
    document.querySelector(".main").style.backgroundColor = "#37b24d";
    document.querySelector("body").style.backgroundColor = "#fa5252";
    document.querySelector(".message").style.fontSize = "3rem";
    document.querySelector(".message").style.color = "#9c36b5";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".high-score").textContent = highScore;
    }
  } else if (guess !== nextBowl) {
    if (score > 1) {
      if (guess < 7 && guess > nextBowl) {
        document.querySelector(".message").textContent =
          "🐸 Your guess is too high ! 📈";
      } else if (guess < 7 && nextBowl < 6 && guess < nextBowl) {
        document.querySelector(".message").textContent =
          "🐸 Your guess is too low ! 📉";
      } else {
        document.querySelector(".message").textContent =
          "🐸 Your guess is wrong ! 📉";
      }

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🚫 You lost the Game..";
      document.querySelector(".score").textContent = 0;
      document.querySelector(".main").style.backgroundColor = "#111";
      document.querySelector("body").style.backgroundColor = "#e03131";
      document.querySelector(".message").style.fontSize = "3rem";
      document.querySelector(".message").style.color = "#9c36b5";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".select").value = "Please choose one :";
  score = 10;
  document.querySelector(".score").textContent = 10;
  document.querySelector(".message").textContent = "Start Guessing..";

  document.querySelector(".main").style.backgroundColor = "#fff9db";
  document.querySelector("body").style.backgroundColor = "#fcc419";
  document.querySelector(".message").style.fontSize = "2.4rem";
  document.querySelector(".message").style.color = "#fa5252";
});
