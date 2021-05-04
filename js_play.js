//Number arrays
const numbers = [38, 2, 6, 55, 29, 90, 48, 36];

function compare(a, b) {
  return b - a; //descending order
}
console.log(numbers.sort(compare));
const threeHighestNumbers = numbers.splice(0, 3);
console.log(threeHighestNumbers);

var mixedNumericArray = ["80", 150, "9", 40, "700", 1, 5];
console.log("mixedNumericArray:", mixedNumericArray.sort(compare));

//Strings - first mapping and then sorting puts Uppercased first !
var list = [
  "Delta",
  "alpha",
  "CHARLIE",
  "Andromeda",
  "bravo",
  "Tommy",
  "BRAVO",
  "lobster",
  "Love",
];
var mappedList = list.map((el) => {
  return el;
});
console.log("mappedList: ", mappedList.sort());

//Strings with non-ASCII characters: String.localeCompare()
//Return a sorted array disregarding uppper and lower case !
const localeList = list.sort(function (a, b) {
  return a.localeCompare(b);
});
console.log("localeList: ", localeList);

// console.log('Sorted without a compare function:', mixedNumericArray.sort());
// console.log('Sorted with compareNumbers:', mixedNumericArray.sort(compareNumbers));

//Given 2D array calculate the difference btween diagonals Top->leftToRigh an Top->RightToLeft
// Example:
// 11,2,4
// 4,5,6
// 10,8-12
const array = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

function diagonalDifference(arr) {
  let leftToRightArr = [];
  let rightToLeftArr = [];
  leftToRightArr.push(arr[0][0], arr[1][1], arr[2][2]);
  rightToLeftArr.push(arr[0][2], arr[1][1], arr[2][0]);

  var leftTotal = 0;
  var rightTotal = 0;
  for (let i = 0; i < leftToRightArr.length; i++) {
    leftTotal += leftToRightArr[i];
    rightTotal += rightToLeftArr[i];
  }
  console.log("rightTotal: ", rightTotal);
  console.log("leftTotal:", leftTotal);
  return leftTotal > rightTotal
    ? leftTotal - rightTotal
    : rightTotal - leftTotal;
}
console.log("diag.difference:", diagonalDifference(array));

//Create Mini-total and Max-total of an array elements sum
numAr = [2, 4, 8, 3, 12];
function miniMaxSum(arr) {
  let sortedArr = arr.sort(function compare(a, b) {
    return a - b;
  });
  let maxArr = sortedArr.slice(1, sortedArr.length);
  let minArr = sortedArr.slice(0, sortedArr.length - 1);

  let totalMax = maxArr.reduce(function (currentValue, acc) {
    return (acc += currentValue);
  }, 0);

  let totalMin = minArr.reduce(function (currentValue, acc) {
    return (acc += currentValue);
  }, 0);
  return totalMax + " " + totalMin;
}
console.log(miniMaxSum(numAr));

//Different dateformats

// let d = Date.now();
// d = new Date(2020, 11, 25);
let d = new Date();
console.log(d);
let d2 = new Date('05 03 2021');

function outputDateWithSuffix(date) {
  let suffix = "";
  if (date.getDay() === 1) {
    suffix = "st";
  } else if (date.getDay() === 2) {
    suffix = "nd";
  } else if (date.getDay() === 3) {
    suffix = "rd";
  } else {
    suffix = "th";
  }
  return `${date.getDay()}${suffix}`;
}

console.log(`Today is the ${outputDateWithSuffix(d)} day of the week.`);
console.log(`Today is the ${outputDateWithSuffix(d2)} day of the week.`);



let date = new Date();
function dayToString(date) {
  let dayNum = date.getDay();
  let dayString = "";
  switch (dayNum) {
    case 1:
      dayString = "Mon";
    case 2:
      dayString = "Tue";
    case 3:
      dayString = "Wed";
    case 4:
      dayString = "Thu";
    case 5:
      dayString = "Fri";
    case 6:
      dayString = "Sat";
    case 7:
      dayString = "Sun";
  }
  return dayString;
}
console.log(dayToString(date));
