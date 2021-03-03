/////Finding a letter occurence in a sentence
const veta = "It is raining in Royston right now and it's getting dark.";
let counter = 0;
let occurenceIndex = veta.toUpperCase().indexOf("R");

while (occurenceIndex !== -1) {
  counter++;
  occurenceIndex = veta.toUpperCase().indexOf("R", occurenceIndex + 1);
}

console.log(`Number of occurences of lettter r/R in: ${veta} : ${counter} ! `);
console.log(veta.lastIndexOf("Royston"));
// console.log(veta.search("Royston"));
