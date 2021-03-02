document.addEventListener("DOMContentLoaded", () => {
  const outputEl = document.querySelector("section");
  const elements = document.querySelectorAll("div");

  for (let i = 0; i < elements.length; i++) {
    let el = elements[i];

    el.style.border = "2px solid green";
    el.style.width = "100px";
    el.style.padding = "20px";
    el.v = i + 1;
    el.addEventListener("click", capture, true);
    el.addEventListener("click", bubble, false);
  }

  function output(msg) {
    outputEl.innerHTML += `${msg}<br>`;
  }

  function bubble() {
    output("Bubble:" + this.v);
  }

  function capture() {
    output("Capture:" + this.v);
  }
});
