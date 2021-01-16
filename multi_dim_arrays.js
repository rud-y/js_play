// Modifying an array into MD array by creating sub arrays of repeating elements
let array = [ 1, 1, 1, 1, 2, 2, 2, 4, 5, 10, 20, 20, 391, 392, 591 ]; 

let temp = {};
array.forEach( el => {
    if(temp[el] != null){
        temp[el].push(el)
    }else{
        temp[el] = [el]
    }
})

let output = Object.values(temp).map(e=>e[1]?e:e[0]);

console.log(output)

//Hashtags and mentions 
function countHashtagsAndMentions(str) {
  let hashtags = 0;
  let mentions = 0;
  for (const ch in str) {
    if (ch === "#") {
      ++hashtags;
    } else if (ch === "@") {
      ++mentions;
    }
  }
  return {hashtags, mentions};
}
let str = "@Monday - meeting,  #learntocode #codingbootcamp";
console.log(countHashtagsAndMentions(str));


// HRank: Spaces and #s contained in an array
// function staircase(n) {
// 
// }

function staircase(n) {
  let hash = '#';
  let number = 6;
  let result = ' ';
  for(let i = 1; i <= number; i++) {
    const outputArr = [];
    outputArr.push(result.repeat(number - i));
    outputArr.push(hash.repeat(i));
    
    console.log(outputArr.join(''));
  }
}
staircase(6);


