document.addEventListener("DOMContentLoaded", () => {
  let message = document.querySelector(".message");
  const score = document.querySelector(".score");
  const buttons = document.querySelectorAll(".btn");

  let tempScore = [0, 0];
  const playerIcon = document.getElementById("img1");
  const opponentIcon = document.getElementById("img2");

  const images = {
    rock: "images/rock.png",
    paper: "images/paper.png",
    scissors: "images/scissors.png",
  };
  ///////////////////////
  //////////////////////

  function showButtons() {
    let buttonWrapper = document.querySelector(".buttonWrapper");
    buttonWrapper.classList.remove("hidden");
    start.classList.add("hidden");
  }
  let start = document.querySelector(".start");
  start.addEventListener("click", showButtons);

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", playGame);
  }

  //Starting the game by clicking one of the three options (buttons)
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

    //Score display on webpage
    score.style.padding = "10px";
    score.innerHTML = `Player <b>${tempScore[0]} : ${tempScore[1]}</b> Opponent`;

    // Score color output throughout the rounds of a game
    if (tempScore[0] > tempScore[1]) {
      score.style.color = "green";
    } else if (tempScore[0] < tempScore[1]) {
      score.style.color = "red";
    } else {
      score.style.color = "rgb(131,130,130)";
    }
    // endGame call when one of the scores reaches 5
    tempScore.forEach((score) => {
      if (score === 5) {
        endGame(tempScore);
      }
    });

    // Text output for each round
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

  // Removing childNodes
  const removeChildren = (parent) => {
    while (parent.lastChild) {
      parent.removeChild(parent.lastChild);
    }
  };

  //At the end of a game displays feedback div with final result message + Replay btn
  function endGame(scoreArray) {
    let btnWrapper = document.querySelector(".buttonWrapper");

    if (scoreArray[0] < scoreArray[1]) {
      btnWrapper.style.backgroundColor = "red";
      btnWrapper.textContent = `Game Over! You LOST`;
      btnWrapper.style.color = "white";
      btnWrapper.style.fontWeight = "bold";
      btnWrapper.style.width = "200px";
      btnWrapper.style.height = "40px";
      btnWrapper.style.padding = "10px";
      btnWrapper.style.margin = "auto";
      btnWrapper.style.border = "solid 2px black";
    }
    if (scoreArray[0] > scoreArray[1]) {
      btnWrapper.style.backgroundColor = "green";
      btnWrapper.textContent = "Congrats! You WON ";
      btnWrapper.style.color = "white";
      btnWrapper.style.fontWeight = "bold";
      btnWrapper.style.width = "200px";
      btnWrapper.style.height = "40px";
      btnWrapper.style.padding = "10px";
      btnWrapper.style.margin = "auto";
      btnWrapper.style.border = "dotted 2px black";
    }

    let replayBtn = document.createElement("button");
    replayBtn.textContent = "Replay";
    replayBtn.style.width = "350px";
    replayBtn.style.height = "35px";
    replayBtn.style.backgroundColor = "white";
    replayBtn.style.color = "#569bea";
    replayBtn.style.fontWeight = "bold";
    replayBtn.style.fontSize = "25px";
    replayBtn.style.borderRadius = "18px";
    document.body.appendChild(replayBtn);
    console.log(replayBtn);

    //Replay click event
    replayBtn.addEventListener("click", () => {
      removeChildren(btnWrapper);
      btnWrapper.style.all = "initial";
      for (let i = 0; i < buttons.length; i++) {
        btnWrapper.appendChild(buttons[i]);
        buttons[i].classList.add(".btn");
      }

      replayBtn.classList.add("hidden");
      tempScore = [0, 0];
      score.innerHTML = `${tempScore[0]} : ${tempScore[1]}`;
      score.style.color = "black";
    });
  }

  // Returns Player, Opponent or Draw String
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
