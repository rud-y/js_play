document.addEventListener("DOMContentLoaded", () => {
  const message = document.querySelector(".message");
  const score = document.querySelector(".score");
  const gameOver = document.querySelector(".gameover");
  const buttons = document.querySelectorAll("button");
  const tempScore = [0, 0];
  const playerIcon = document.getElementById("img1");
  const opponentIcon = document.getElementById("img2");

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

    // Result as a String (either Player, Opponent or Draw)
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

    // Score color output
    let pl = document.createElement("p");
    let op = document.createElement("p");
    pl.textContent = "Player";
    op.textContent = "Opponent";

    score.innerHTML = `${pl.textContent} <b>${tempScore[0]} : ${tempScore[1]}</b> ${op.textContent}`;

    if (tempScore[0] > tempScore[1]) {
      score.style.color = "green";
    } else if (tempScore[0] < tempScore[1]) {
      score.style.color = "red";
    } else {
      score.style.color = "rgb(131,130,130)";
    }

    tempScore.forEach((score) => {
      if (score === 5) {
        endGame(tempScore);
      }
    });

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

  //
  function endGame(scoreArray) {
    let btnWrapper = document.querySelector(".buttonWrapper");
    console.log("btnWrapper", btnWrapper);
    if (scoreArray[0] < scoreArray[1]) {
      btnWrapper.style.backgroundColor = "red";
      btnWrapper.textContent = `Game Over! You LOST`;
      btnWrapper.style.color = "white";
      btnWrapper.style.width = "200px";
      btnWrapper.style.height = "30px";
      btnWrapper.style.padding = "10px";
      btnWrapper.style.margin = "0 auto";
      btnWrapper.style.marginTop = "10px";
      btnWrapper.style.border = "dotted 2px black";
    } else if (scoreArray[0] > scoreArray[1]) {
      btnWrapper.style.backgroundColor = "green";
      btnWrapper.textContent = "Game Over! You WON ";
      btnWrapper.style.color = "white";
      btnWrapper.style.width = "200px";
      btnWrapper.style.height = "30px";
      btnWrapper.style.padding = "10px";
      btnWrapper.style.margin = "0 auto";
      btnWrapper.style.marginTop = "10px";
      btnWrapper.style.border = "dotted 2px black";
    }
  }

  // Returns Player , Opponent or Draw
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
