window.addEventListener("DOMContentLoaded", () => {
  //Fetch a random joke from api
  const url = "https://api.chucknorris.io/jokes/random";
  const btn = document.querySelector("button");

  if (btn) {
    btn.addEventListener("click", getJoke);
    btn.addEventListener("click", changeText);
  }

  function getJoke() {
    fetch(url)
      .then((res) => res.json())
      .then(function (data) {
        console.log(data);
        let container = document.querySelector("#jokeDiv");
        container.textContent = data.value;
        container.style.margin = "0 auto";
        container.style.width = "fit-content";
        container.style.padding = "10px";
        container.style.boxShadow = "1px 1px 2px black";

        let imageSrc = data.icon_url;
        document.querySelector("#image").src = imageSrc;
      });
  }

  function changeText() {
    btn.textContent = "Another one...";
  }
});
