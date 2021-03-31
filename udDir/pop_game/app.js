document.addEventListener("DOMContentLoaded", () => {
  const playArea = {};
  const player = {};

  playArea.stats = document.querySelector(".stats");

  playArea.main = document.querySelector(".main");

  playArea.game = document.querySelector(".main");

  playArea.btns = Array.from(document.querySelectorAll(".btn"));

  playArea.page = Array.from(document.querySelector(".page"));

  console.log(playArea.btns);

  ///
  player.score = 0;
  player.items = 3;

  const handleButtonClick = (e) => {
    console.log(e.target.classList.contains("new-game"));
    if (e.target.classList.contains("new-game")) {
      console.log("YES");
    }
  };

  playArea.btns.forEach((item) => {
    // console.log(item);
    item.addEventListener("click", handleButtonClick);
  });
});
