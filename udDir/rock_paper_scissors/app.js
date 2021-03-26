document.addEventListener("DOMContentLoaded", () => {
  const message = document.querySelector(".message");
  const score = document.querySelector(".score");
  const buttons = document.querySelectorAll("button");
  const tempScore = [0, 0];
  const playerIcon = document.getElementById("img1");
  const opponentIcon = document.getElementById("img2");
  console.log(buttons);

  const images = {
    rock: "images/rock.png",
    paper: ".images/paper.png",
    scissors: ".images/scissors.png",
  };

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", playGame);
  }

  ///
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

    let result = checkWinner(playerSelection, opponentSelection);

    if (result == "Player") {
      result += " wins!";
      tempScore[0]++;
    } else if (result == "Opponent") {
      result += " wins!";
      tempScore[1]++;
    } else {
      result;
    }
    console.log(result);

    score.innerHTML = `Player ${tempScore[0]} : ${tempScore[1]} Opponent`;

    messageOutput(
      playerSelection + " vs " + opponentSelection + "<br><b>" + result + "</b>"
    );
  }

  ///
  function messageOutput(mes) {
    message.innerHTML = mes;
  }

  ///
  function checkWinner(player, opponent) {
    if (player === opponent) {
      return "Draw";
    }
    if (player === "ROCK") {
      if (opponent === "PAPER") {
        return "Opponent";
      } else {
        return "Player";
      }
    }
    if (player === "PAPER") {
      if (opponent === "SCISSORS") {
        return "Opponent";
      } else {
        return "Player";
      }
    }
    if (player === "SCISSORS") {
      if (opponent === "ROCK") {
        return "Opponent";
      } else {
        return "Player";
      }
    }
    return;
  }
});
