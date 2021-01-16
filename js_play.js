//Number arrays
const numbers = [38, 2, 6, 55, 29, 90, 48, 36];

function compare(a,b) {
    return b - a; //descending order
};
console.log(numbers.sort(compare));
const threeHighestNumbers = numbers.splice(0, 3);
console.log(threeHighestNumbers);

var mixedNumericArray = ['80', 150,'9',40, '700', 1, 5];
console.log('mixedNumericArray:', mixedNumericArray.sort(compare));


//Strings - first mapping and then sorting puts Uppercased first !
var list = ['Delta', 'alpha', 'CHARLIE','Andromeda', 'bravo', 'Tommy', 'BRAVO', 'lobster', 'Love'];
var mappedList = list.map(el => {
    return el;
})
console.log("mappedList: ", mappedList.sort());


//Strings with non-ASCII characters: String.localeCompare()
//Return a sorted array disregarding uppper and lower case !
const localeList = list.sort(function(a,b) {
    return a.localeCompare(b);
})
console.log('localeList: ', localeList);


// console.log('Sorted without a compare function:', mixedNumericArray.sort());
// console.log('Sorted with compareNumbers:', mixedNumericArray.sort(compareNumbers));


//Given 2D array calculate the difference btween diagonals Top->leftToRigh an Top->RightToLeft
// Example:
// 11,2,4
// 4,5,6
// 10,8-12
const array = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];

function diagonalDifference(arr) {
    let leftToRightArr = [];
    let rightToLeftArr = [];
    leftToRightArr.push(arr[0][0], arr[1][1], arr[2][2]);
    rightToLeftArr.push(arr[0][2], arr[1][1], arr[2][0]);
   
   var leftTotal = 0;
   var rightTotal = 0;
   for(let i = 0; i < leftToRightArr.length; i++){
       leftTotal += leftToRightArr[i];
       rightTotal += rightToLeftArr[i];
   }
   console.log('rightTotal: ',rightTotal);
   console.log('leftTotal:', leftTotal);
   return leftTotal > rightTotal ? leftTotal - rightTotal : rightTotal - leftTotal;
   
}
console.log('diag.difference:', diagonalDifference(array));
