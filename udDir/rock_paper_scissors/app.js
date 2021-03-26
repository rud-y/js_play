document.addEventListener("DOMContentLoaded", () => {
  const message = document.querySelector(".message");
  const score = document.querySelector(".score");
  const buttons = document.querySelectorAll("button");

  console.log(buttons);

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", playGame);
  }

  function playGame(e) {
    let playerSelection = e.target.innerText;
    let opponentSelection = Math.random();

    if (opponentSelection < 0.34) {
      opponentSelection = "ROCK";
    } else if (opponentSelection <= 0.67) {
      opponentSelection = "PAPER";
    } else {
      opponentSelection = "SCISSORS";
    }

    console.log(playerSelection + ":" + opponentSelection);

    let winner = checkWinner(playerSelection, opponentSelection);
    console.log(winner);
  }

  function checkWinner(player, comp) {
    if (player === comp) {
      return "Draw";
    }
    if (player === "ROCK") {
      if (comp === "PAPER") {
        return "Opponent";
      } else {
        return "Player";
      }
    }
    if (player === "PAPER") {
      console.log(player);
      if (comp === "SCISSORS") {
        return "Opponent";
      } else {
        return "Player";
      }
    }
    return;
  }
});
