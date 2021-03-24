document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector("div");
  el.style.width = "100px";
  el.style.height = "123px";
  el.style.position = "absolute";
  el.style.top = "60px";
  el.style.left = "30px";
  el.style.backgroundColor = "blue";
  console.log(el.getBoundingClientRect());
});
