const choices = ["rock", "paper", "sicssor"];

const playerDisplay = document.getElementById("playerdisplay");
const computerDisplay = document.getElementById("computerdisplay");
const resultDisplay = document.getElementById("resultdisplay");

const playerscoredisplay = document.getElementById("playerscoredisplay");
const computerscoredisplay = document.getElementById("computerscoredisplay");

let playerscore = 0;
let computerscore = 0;

function playgame(playerchoice) {
  const computerchoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerchoice === computerchoice) {
    result = "Its a Tie";
  } else {
    switch (playerchoice) {
      case "rock":
        result = computerchoice === "sicssor" ? "You win" : "you lose";
        break;
      case "paper":
        result = computerchoice === "rock" ? "You win" : "you lose";
        break;
      case "sicssor":
        result = computerchoice === "paper" ? "You win" : "you lose";
        break;
    }
  }
  // console.log(computerchoice)

  playerDisplay.textContent = `Player:${playerchoice}`;
  computerDisplay.textContent = `Computer:${computerchoice}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("greenText", "redText");

  switch (result) {
    case "You win":
      resultDisplay.classList.add("greenText");
      playerscore++;
      playerscoredisplay.textContent = playerscore;
      break;
    case "you lose":
      resultDisplay.classList.add("redText");
      computerscore++;
      computerscoredisplay.textContent = computerscore;
      break;
  }
}
