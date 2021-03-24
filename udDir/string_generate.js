//Random words output
const words = [
  "hello",
  "welcome",
  "bye bye",
  "morning",
  "good-bye",
  "Good afternoon",
  "Hey!",
];
let temp = randomWord(words);
let message = document.createTextNode(temp);

document.body.appendChild(message);

function randomWord(array) {
  let temp = Math.floor(Math.random() * array.length);
  return array[temp];
}
