// Modifying an array into MD array by creating sub arrays of repeating elements
let array = [1, 1, 1, 1, 2, 2, 2, 4, 5, 10, 20, 20, 391, 392, 591];

let temp = {};
array.forEach((el) => {
  if (temp[el] != null) {
    temp[el].push(el);
  } else {
    temp[el] = [el];
  }
});

let output = Object.values(temp).map((e) => (e[1] ? e : e[0]));

console.log(output);

//How many hashtags and mentions occur in a string
function countHashtagsAndMentions(string) {
  let hashtags = 0;
  let mentions = 0;
  for (const ch of string) {
    // console.log(string[ch]);
    if (ch === "#") {
      ++hashtags;
    } else if (ch === "@") {
      ++mentions;
    }
  }
  return { hashtags, mentions };
}
let str = "@Monday - meeting, #1:  #learntocode #codingbootcamp";
console.log(countHashtagsAndMentions(str));

// Spaces and #s contained in an array
// function staircase(n) :HRank
function staircase(number) {
  let hash = "#";
  let result = " ";
  for (let i = 1; i <= number; i++) {
    //creating MD array outputArr - adding amount of spaces($result) and hashes based on $number
    const outputArr = [];
    outputArr.push(result.repeat(number - i));
    outputArr.push(hash.repeat(i));

    console.log(outputArr.join(""));
  }
}
staircase(5);

//Finding intersection
const exampleArray = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];
function findIntersection(strArray) {
  const lists = strArray.map((str) => str.split(", "));
  const firstList = lists[0];
  const secondList = lists[1];

  let matchMap = {};
  let resultArray = [];

  firstList.forEach((num) => (matchMap[num] = true));
  secondList.forEach((num) => {
    if (matchMap[num]) {
      resultArray.push(num);
    }
  });
  if (resultArray.lengh > 0) {
    return resultArray.join(",");
  }
  return false;
}
console.log(findIntersection(exampleArray));

// example split() - String
var email = "me@email_1.com, him@email_2.com, her@email_3.com";
var email_array = email.split(",");

for (let i = 0; i < email_array.length; i++) {
  console.log(email_array[i] + "\n");
}

//Extracting all numbers from a string
const bookTitle = "Catch 22, Slaughterhouse 5,Fahrenheit 451";
const numbersOnly = [];
for (let i = 0; i < bookTitle.length; i++) {
  if (!isNaN(bookTitle[i]) && bookTitle[i] !== " ") {
    numbersOnly.push(bookTitle[i]);
  }
}
console.log("Numbers in the string: ", numbersOnly.join());

// Extracting certain sequence from a strings
const user = "Mozilla/5.0(iPad; iPad, iPad CPU OS 5_0_1 like Mac OS X)";
let iPad = "iPad";
let mac = "Mac OS X";
const extracted = [];
if (user.includes(iPad) || user.includes(mac)) {
  extracted.push(iPad);
  extracted.push(mac);
}
console.log(extracted);
