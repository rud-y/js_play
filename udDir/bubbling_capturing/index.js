document.addEventListener("DOMContentLoaded", () => {
  const outputEl = document.querySelector("section");
  const elements = document.querySelectorAll("div");

  for (let i = 0; i < elements.length; i++) {
    let el = elements[i];

    el.style.border = "2px solid green";
    el.style.width = "150px";
    el.style.padding = "28px";
    el.style.marginRight = "0px";
    el.level = i + 1;
    //Setting click event listener for each div el,
    //first buble() is executed (true) then capture
    el.addEventListener("click", capture, true);
    el.addEventListener("click", bubble, false);
    // el.addEventListener("click", colorElements);
  }

  function output(msg) {
    outputEl.innerHTML += `${msg}<br>`;
  }

  function bubble() {
    output("Bubble: " + this.level);
  }

  function capture() {
    output("Capture: " + this.level);
    this.style.backgroundColor = "lightblue";

    for (let i = 0; i < elements.length; i++) {
      let el = elements[i];
    }

    this.firstChild.style.backgroundColor = "yellow";
  }

  // function colorElements() {
  //   this.style.backgroundColor = "lightblue";
  //   let childNodes = this.childNodes;
  //   console.log(childNodes);

  //   for (let x = 0; x < childNodes.length; x++) {
  //     childNodes[x].style.backgroundColor = "white";
  //   }
  // }
});
