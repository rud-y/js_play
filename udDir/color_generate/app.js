window.addEventListener("DOMContentLoaded", () => {
  const button = document.createElement("button");
  button.id = "start";
  button.innerHTML = "RunColors▶▶▶";
  button.style.color = "green";
  button.style.border = "1px solid green";
  button.style.backgroundColor = "lightgrey";
  button.style.fontSize = "50px";
  button.style.display = "block";
  button.style.margin = "0 auto";
  document.body.appendChild(button);

  function runRandomColor() {
    return `#${Math.random().toString(16).substr(-6)}`;
  }

  function changeBodyColor() {
    document.body.style.backgroundColor = runRandomColor();
  }

  let timer;
  const stop = document.createElement("button");
  stop.id = "stop";
  stop.innerHTML = "❌";

  function startInterval() {
    timer = setInterval(changeBodyColor, 600);
    document.querySelector("#start").classList.add("hidden");
    document.body.appendChild(stop);
  }

  function stopInterval() {
    clearInterval(timer);
    document.querySelector("#start").classList.remove("hidden");
    stop.classList.add("hidden");
  }

  document.querySelector("#start").addEventListener("click", startInterval);
  stop.addEventListener("click", stopInterval);
});
