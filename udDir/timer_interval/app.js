window.addEventListener("DOMContentLoaded", () => {
  //   const intervalID = window.setInterval(myCallback, 1000, "interval");
  //   const timeoutID = window.setTimeout(myCallback, 500, "setTimeout");
  const el = document.querySelector("div");

  let y = 5;
  const inTimer = window.setInterval(counter, 1000);
  function counter() {
    el.style.fontSize = "40px";
    el.textContent = y;
    y--;
    if (y < 0) {
      clearInterval(inTimer);
      el.backgroundColor = "red";
      el.color = "white";
      el.textContent = "The End!";
    }
  }

  let x = 0;
  el.style.width = "100px";
  el.style.height = "100px";
  el.style.backgroundColor = "grey";

  function step() {
    x++;
    el.style.transform = "translateX(" + x + "px)";
    if (x < 400) {
      window.requestAnimationFrame(step);
    }
  }
  window.requestAnimationFrame(step);

  function myCallback(mes) {
    console.log(mes);
  }

  function stopInterval() {
    clearInterval();
  }
});
