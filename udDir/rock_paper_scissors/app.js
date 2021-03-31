document.addEventListener("DOMContentLoaded", () => {
  const message = document.querySelector(".message");
  const score = document.querySelector(".score");
  const gameOver = document.querySelector(".gameover");
  const buttons = document.querySelectorAll("button");
  const tempScore = [0, 0];
  const playerIcon = document.getElementById("img1");
  const opponentIcon = document.getElementById("img2");
  console.log(buttons);

  const images = {
    rock: "images/rock.png",
    paper: "images/paper.png",
    scissors: "images/scissors.png",
  };

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", playGame);
  }

  ///
  function playGame(e) {
    //Player
    let playerSelection = e.target.innerText;
    if (playerSelection === "ROCK") {
      playerIcon.setAttribute("src", images.rock);
      playerIcon.style.maxWidth = "100px";
      playerIcon.style.height = "100px";
      playerIcon.style.margin = "0 auto";
    }
    if (playerSelection === "PAPER") {
      playerIcon.setAttribute("src", images.paper);
    }
    if (playerSelection === "SCISSORS") {
      playerIcon.setAttribute("src", images.scissors);
    }
    //Opponent
    let opponentSelection = Math.random();
    if (opponentSelection < 0.34) {
      opponentSelection = "ROCK";
      opponentIcon.setAttribute("src", images.rock);
      opponentIcon.style.maxWidth = "100px";
      opponentIcon.style.height = "100px";
      opponentIcon.style.margin = "0 auto";
    } else if (opponentSelection <= 0.67) {
      opponentSelection = "PAPER";
      opponentIcon.setAttribute("src", images.paper);
    } else {
      opponentSelection = "SCISSORS";
      opponentIcon.setAttribute("src", images.scissors);
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
    // Score output
    score.innerHTML = ` Player <b>${tempScore[0]} : ${tempScore[1]}</b> Opponent`;

    // End game
    // if (tempScore[0] || tempScore[1] === "6") {
    //   gameOver.innerHTML = `Game OVER !! ${tempScore[0]} : ${tempScore[1]}`;
    // }

    messageOutput(
      playerSelection +
        " vs " +
        opponentSelection +
        "<br><b>" +
        result +
        "</b>" +
        "<br>"
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
