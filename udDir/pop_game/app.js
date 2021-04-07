document.addEventListener("DOMContentLoaded", () => {
  const playArea = {};
  const player = {};

  let gameObj = {
    data: [
      {
        icon: "\u0026#8902;",
        value: 10,
      },
      {
        icon: "\u0026#10031;",
        value: 30,
      },
      {
        icon: "\u0026#10036;",
        value: 50,
      },
      {
        icon: "\u0026#10042;",
        value: 70,
      },
      {
        icon: "\u0026#10084;",
        value: 75,
      },
      {
        icon: "\u0026#9813;",
        value: 50,
      },
      {
        icon: "\u0026#9822;",
        value: 60,
      },
      {
        icon: "\u0026#9924;",
        value: 40,
      },
      {
        icon: "\u0026#9971;",
        value: 100,
      },
      {
        icon: "\u0026#9729;",
        value: -50,
      },
      {
        icon: "\u0026#9785;",
        value: -100,
      },
      {
        icon: "\u0026#9760;",
        value: -250,
      },
      {
        icon: "\u0026#9791;",
        value: -20,
      },
    ],
  };

  // document.addEventListener("DOMContentLoaded", getData);
  playArea.stats = document.querySelector(".stats");

  playArea.main = document.querySelector(".main");

  playArea.game = document.querySelector(".game");

  playArea.btns = Array.from(document.querySelectorAll(".btn"));

  playArea.page = Array.from(document.querySelectorAll(".page"));

  console.log("PlayArea", playArea);

  ///
  player.score = 0;
  player.items = 5;

  // Event listener for buttons
  playArea.btns.forEach((item) => {
    console.log(item);
    item.addEventListener("click", handleButtonClick);
  });

  function getData() {
    playArea.main.classList.add("visible");

    // fetch("https://api.myjson.com/bins/gungm")
    //   .then(function (rep) {
    //     return rep.json();
    //   })
    //   .then(function (data) {
    //     console.log(data);
    //     gameObj = data.data;
    //     console.log(gameObj);
    //   });

    console.log("DOMLoaded");
    console.log(gameObj);
    buildBoard();
  }
  getData();

  //Board grid
  function buildBoard() {
    console.log("ready");
    let rows = 4;
    let cols = 4;
    let cnt = 0;
    playArea.game.style.width = cols * 80 + cols * 2;
    playArea.game.style.margin = "auto";
    //Y axis
    for (let y = 0; y < rows; y++) {
      let divMain = document.createElement("div");
      divMain.setAttribute("class", "row");
      divMain.style.width = cols * 80 + cols * 2;
      // x Axis
      for (let x = 0; x < cols; x++) {
        let div = document.createElement("div");
        div.setAttribute("class", "pop");
        cnt++;
        div.innerText = cnt;
        div.cnt = cnt;
        divMain.appendChild(div);
      }
      playArea.game.appendChild(divMain);
    }
  }

  function handleButtonClick(e) {
    console.log(e.target.classList.contains("new-game"));
    if (e.target.classList.contains("new-game")) {
      console.log("YES");
      startGame();
    }
  }

  function startGame() {
    player.score = 0;
    player.items = 3;
    playArea.main.classList.remove("visible");
    playArea.game.classList.add("visible");
    console.log("Start");
    player.gameOver = false;
    startPop();
  }

  // Select random div from the grid
  function randomUp() {
    const pops = document.querySelectorAll(".pop");
    const idx = Math.floor(Math.random() * pops.length);

    if (pops[idx].cnt == playArea.last) {
      return randomUp();
    }
    playArea.last = pops[idx].cnt;
    return pops[idx];
  }

  function startPop() {
    let newPop = randomUp();

    console.log(newPop);
    newPop.classList.add("active");
  }
});
