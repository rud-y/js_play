const player = {
  speed: 50,
  x: 200,
  y: 200,
};

let randomColor = "#" + Math.random().toString(16).substr(-6);

window.addEventListener("DOMContentLoaded", buildObject);

// keyCode deprecated
document.addEventListener("keydown", function (e) {
  let key = e.keyCode;
  console.log(key);
  if (key === 37) {
    player.x -= player.speed;
  }
  if (key === 38) {
    player.y -= player.speed;
  }
  if (key === 39) {
    player.x += player.speed;
  }
  if (key === 40) {
    player.y += player.speed;
  }
  player.el.style.left = player.x + "px";
  player.el.style.top = player.y + "px";
});

function buildObject() {
  player.el = document.createElement("div");
  player.x = 200;
  player.y = 200;
  player.el.style.position = "absolute";
  player.el.style.top = player.x + "px";
  player.el.style.left = player.y + "px";
  player.el.style.width = "90px";
  player.el.style.height = "90px";
  player.el.style.backgroundColor = randomColor;
  document.body.appendChild(player.el);
}
