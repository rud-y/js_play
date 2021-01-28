window.addEventListener("DOMContentLoaded", () => {
  //Fetch a certain number of random users/ num of users based on input
  const url2 = "https://randomuser.me/api/";
  //create input
  const inputElem = document.createElement("input");
  inputElem.setAttribute("type", "input");
  inputElem.setAttribute("value", 3);
  document.body.appendChild(inputElem);
  //create output for random users
  const userOutput = document.createElement("div");
  document.body.appendChild(userOutput);
  //create button to add random user
  const btn = document.createElement("button");
  btn.textContent = "Get users";
  document.body.appendChild(btn);

  function getAUser() {
    let temp = url2 + "?results=" + inputElem.value;
    fetch(temp)
      .then((res) => res.json())
      .then(function (data) {
        console.log(data);
        let html;
        for (let i = 0; i < data.results.length; i++) {
          //   console.log(data.results[i]);
          html += data.results[i].name.first + "<br>";
        }
        userOutput.innerHTML = html;
      });
  }

  btn.addEventListener("click", getAUser);

  // Fetch a random joke from api
  //   const url = "https://api.chucknorris.io/jokes/random";
  //   const btn = document.querySelector("button");

  //   if (btn) {
  //     btn.addEventListener("click", getJoke);
  //   }

  //   function getJoke() {
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then(function (data) {
  //         console.log(data);
  //         document.querySelector("#jokeDiv").textContent = data.value;

  //         let imageSrc = data.icon_url;
  //         document.querySelector("#image").src = imageSrc;
  //       });
  //   }
});
