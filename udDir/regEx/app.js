window.addEventListener("DOMContentLoaded", () => {
  let myString2 =
    "HelloWorld 4567, JavaScript Chrome Web someexampleemail@yahoo.co.uk I love JS abc@gmail.com";
  // Email matching
  let exp2 = /([A-Za-z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
  let emailData = myString2.match(exp2);
  console.log(emailData);

  emailData.forEach((email) => {
    console.log(email);
  });
  /////////////////////////////////
  ////////////////////////////////

  // let myString = "Today is a sunny day, mild wind and 15 degrees";
  // let reg = /(\w+)\s(\w+)/;
  // //   let temp1 = myString.replace("Today", "On this day");
  // temp1 = myString.replace(reg, "On this day:");
  // console.log(temp1);
  // console.log(myString.match(/unn/));
  // console.log("Test:Containing word -mild- ?: " + /mild/.test(myString));
  // console.log("Test:Containing digits?: " + /[0-9]/.test(myString));
  // console.log(/\i+/.exec(myString));
  // let myArr = ["one", "two", "three", "ONE", "five", "six", "one"];
  // let temp2 = myArr.toString();

  // let temp3 = myArr.join("-");
  // //Getting/ Searching the first occurrence in the array myArr
  // console.log(temp3.search(/one/));
  // //Getting all the instances of one, not case sensitive
  // console.log(temp3.match(/one/gi));
});
