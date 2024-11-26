function one() {
  return new Promise((resolve, reject) => {
    console.log("primises running");
    setTimeout(() => {
      console.log("Done!");
      resolve("2 sec has passed");
    }, 2000);
  });
}

// console.log("calling function one");

// one().then((data) => {
//   console.log(data);
// });
// console.log("last line of code");

// function two() {
//   //it becomes asynchronus
//   console.log("calimg funcito two");
//   const oneResp = one(); //2nd it will executed becoz of asynchronous activity
//   console.log(oneResp); //1st it will executed
// }

// async function two() {
//   console.log("calimg funcito two");
//   const oneResp = await one(); //mak JS acts as a synchronous
//   console.log(oneResp);
// }

// two();
// console.log("last line of code");

const str = "aniket gurav";
const str1 = str.padEnd(13, "*");
console.log(str);
console.log(str1);
