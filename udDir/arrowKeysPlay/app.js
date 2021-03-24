const player = {
  speed: 100,
  x: 50,
  y: 20,
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
  player.x = 50;
  player.y = 20;
  player.el.style.position = "absolute";
  player.el.style.top = player.x + "px";
  player.el.style.left = player.y + "px";
  player.el.style.width = "90px";
  player.el.style.height = "90px";
  player.el.style.backgroundColor = randomColor;
  document.body.appendChild(player.el);
}

//LocalStorage
let car1 = {
  name: "car",
  make: "Toyota",
  model: "Civic",
};

let temp = JSON.stringify(car1);
console.log(temp);
localStorage.setItem("anObject", temp);
let parsedObject = JSON.parse(localStorage.getItem("anObject"));
console.log(parsedObject);

localStorage.setItem("first", car1.model);
console.log(localStorage.getItem("first"));

//
if (localStorage.getItem("num")) {
  let count = localStorage.getItem("num");
  count = Number(count);
  count++;
  localStorage.setItem("num", count);
} else {
  localStorage.setItem("num", 1);
}

console.log(localStorage.getItem("num"));
