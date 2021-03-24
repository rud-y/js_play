// function generateRandomNum(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min);
// }
// console.log(generateRandomNum(1, 5));

//Generating random numbers excluding selected ones:
const anArray = [10, 15, 8, 1, 4, 3];

function generateRandom(min, max, excludedArray) {
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  return excludedArray.includes(random)
    ? generateRandom(min, max, excludedArray)
    : random;
}

let numbersArray = [];
for (let x = 0; x < 5; x++) {
  let min = 3;
  let max = 10;
  numbersArray.push(generateRandom(min, max, anArray));
}
console.log(numbersArray);

// console.log(generateRandom(1, 10, anArray));
