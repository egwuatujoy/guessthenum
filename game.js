const containerEl = document.querySelector(".container");
const btnHeader = document.querySelector(".header-btn");
const btnInput = document.querySelector(".input-btn");
const mEssage = document.querySelector(".message");
const inputNUm = document.querySelector(".input-num");
const sCore = document.querySelector(".score");

let overrallNum = [Math.floor(Math.random() * 100)];

btnInput.addEventListener("click", () => {
  const guess = Number(inputNUm.value);

  if (guess) {
    if (guess == overrallNum) {
      mEssage.innerHTML = `You guessed right ,the number is ${overrallNum} `;
    } else if (guess < overrallNum) {
      mEssage.innerHTML = `${guess} is too  low, guess higher`;
    }
    if (guess > overrallNum) {
      mEssage.innerHTML = `${guess} is too  high, guess lower`;
    }
  } else {
    mEssage.textContent = "Please enter a number :(";
  }
  if (guess == overrallNum) {
    sCore.innerHTML++;
  }

  if (guess > 100) {
    mEssage.textContent = "I told you to guess between 1-100, you dummy";
  }
});

btnHeader.addEventListener("click", () => {
  prompt("ARE YOU SURE SURE YOU WANT TO QUIT THIS GAME??\n 1: YES \n 2: NO");
  alert("BYE");
});
