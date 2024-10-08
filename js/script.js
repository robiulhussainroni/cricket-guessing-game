"use strict";

const nextBowl = Math.trunc(Math.random() * 8 + 1);
console.log(nextBowl);

document.querySelector(".check").addEventListener("click", function () {
  document.querySelector(".wicket").value = 7;
  document.querySelector(".dot").value = 8;
  const guess = Number(document.querySelector(".select").value);

  if (guess === nextBowl) {
    document.querySelector(".message").textContent = "🥳 Hurray! You won..";
  }

  if (guess !== nextBowl) {
    document.querySelector(".message").textContent = "🐸 Your guess is wrong";
  }
});
