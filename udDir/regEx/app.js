window.addEventListener("DOMContentLoaded", () => {
  let myString = "Today is a sunny day, mild wind and 15 degrees";
  let reg = /(\w+)\s(\w+)/;
  //   let temp1 = myString.replace("Today", "On this day");
  temp1 = myString.replace(reg, "On this day:");
  console.log(temp1);
  console.log(myString.match(/unn/));
  console.log(/mild/.test(myString));
  console.log(/[0-9]/.test(myString));
  console.log(/\i+/.exec(myString));
});
