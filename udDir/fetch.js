window.addEventListener("DOMContentLoaded", () => {
  const url = "https://api.chucknorris.io/jokes/random";
  const btn = document.querySelector("button");

  if (btn) {
    btn.addEventListener("click", getJoke);
  }

  function getJoke() {
    fetch(url)
      .then((resp) => resp.json())
      .then(function (data) {
        console.log(data.value);
        document.querySelector("#jokeDiv").textContent = data.value;
      });
  }
});
