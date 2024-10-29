"use strict";
// Selectors
const wicketEl = document.querySelector(".wicket");
const dotEl = document.querySelector(".dot");
const messageEl = document.querySelector(".message");
const mainEl = document.querySelector(".main");
const bodyEl = document.querySelector("body");
const highScoreEl = document.querySelector(".high-score");
const scoreEl = document.querySelector(".score");
const selectEl = document.querySelector(".select");
const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");

// Hiding element
const hidden = function () {
  btnCheck.classList.add("hidden");
};

// Starting stage
let score = 10;
let highScore = 0;
const nextBowl = Math.trunc(Math.random() * 8 + 1); // 1-8

// Selecting Check Button
btnCheck.addEventListener("click", function () {
  // Setting value for wicket and dot (1-6 for score 7-8 for wicket and dot)
  wicketEl.value = 7;
  dotEl.value = 8;

  const guess = Number(selectEl.value);

  // If user doesn't guess anything
  if (!guess) {
    messageEl.textContent = "⛔ please  input a valid number";

    // If user guess it right
  } else if (guess === nextBowl) {
    messageEl.textContent = "🥳 Hurray! You won..";
    mainEl.style.backgroundColor = "#37b24d";
    bodyEl.style.backgroundColor = "#fa5252";
    messageEl.style.fontSize = "3rem";
    messageEl.style.color = "#9c36b5";
    hidden();

    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }

    // If user guess it wrong
  } else if (guess !== nextBowl) {
    if (score > 1) {
      if (guess < 7 && guess > nextBowl) {
        messageEl.textContent = "🐸 Your guess is too high ! 📈";
      } else if (guess < 7 && nextBowl < 6 && guess < nextBowl) {
        messageEl.textContent = "🐸 Your guess is too low ! 📉";
      } else {
        messageEl.textContent = "🐸 Your guess is wrong ! 📉";
      }

      score--;
      scoreEl.textContent = score;
    } else {
      messageEl.textContent = "🚫 You lost the Game..";
      scoreEl.textContent = 0;
      mainEl.style.backgroundColor = "#111";
      bodyEl.style.backgroundColor = "#e03131";
      messageEl.style.fontSize = "3rem";
      messageEl.style.color = "#9c36b5";
      hidden();
    }
  }
});

// Slecting the Play again button
btnAgain.addEventListener("click", function () {
  selectEl.value = "Please choose one :";
  score = 10;
  scoreEl.textContent = 10;
  messageEl.textContent = "Start Guessing..";
  mainEl.style.backgroundColor = "#fff9db";
  bodyEl.style.backgroundColor = "#fcc419";
  messageEl.style.fontSize = "2.4rem";
  messageEl.style.color = "#fa5252";
  btnCheck.classList.remove("hidden");
});
