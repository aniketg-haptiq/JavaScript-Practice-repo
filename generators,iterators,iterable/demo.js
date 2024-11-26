// Generator
// function* aGenerator() {
//   console.log("hiii111");
//   console.log("Hello111");

//   yield 1;
//   console.log("Hiii222");
//   yield 2;
//   console.log("Helooo333");
// }
// // aGenerator(); //not invoke generator functions
// const gen = aGenerator(); //return generator
// gen.next(); //executes upto yielda
// gen.next(); //executes after yield
// gen.next();

// function* counter() {
//   let i = 0;
//   while (true) {
//     console.log("I am before yield");
//     // yield i++;
//     const dataFromNext = yield i++;
//     console.log(dataFromNext);

//     console.log("I am after the yield");
//   }
// }
// const gen = counter();
// document.querySelector(".btn").addEventListener("click", () => {
//   gen.next("data of next");
// });

// function* fibo() {
//   var var1 = 0;
//   var var2 = 1;

//   while (true);
//   {
//     let current = var1;
//     var1 = var2;
//     var2 = current + var1;
//     var reset = yield current;
//     if (reset) {
//       var1 = 0;
//       var2 = 1;
//     }
//   }
// }
// let seq = fibo();
// console.log(seq);

// console.log(seq.next().value);
// console.log(seq.next().value);
// console.log(seq.next().value);
// console.log(seq.next().value);
// console.log(seq.next(true).value);

// Iterable

const str = "Hello!";
console.log(str[Symbol.iterator]);
for (let key of str) {
  console.log(key);
}

// console.log(str.next()); //String are Iterable but not Iterator
const arr = [11, 22, 33, 44];
for (let x of arr) {
  console.log(x);
}
console.log(arr.next);

const obj = {
  name: "aniket",
  age: 23,
};
// for (let x of obj) {      //objects are not Iterable but we can make it by adding next: property in [Symbole.iterator]()
//   console.log(x);
// }

console.log(obj.next);
// console.log(obj[Symbol.iterator]());
console.log(arr[Symbol.iterator]());
console.log(str[Symbol.iterator]());

const iterableObj = new Object();
iterableObj.name = "aniket";
iterableObj.age = 23;
iterableObj.city = "pune";

// iterableObj[Symbol.iterator] = function () {
//   return {
//     next: function () {

//       return {
//         value: "hh",
//         done: false,
//       };
//     },
//   };
//   yield 1;
//   yield 2;
//   yield 3;
// };

// for (let x of iterableObj) {
//   console.log(x);
// }

// make object as Iterable
// function iterable(obj) {
//   let arr = [];
//   for (let x in obj) {
//     arr.push(x);
//   }
//   //   console.log(arr);
//   //   console.log(obj[arr[0]]);
//   let i = 0;
//   return {
//     next: () => {
//       if (i < Object.keys(obj).length) {
//         return {
//           value: obj[arr[i++]],
//           done: false,
//         };
//       } else {
//         return {
//           done: true,
//         };
//       }
//     },
//   };
// }

// by using generators
function* myGen(obj) {
  let arr = Object.keys(obj);

  for (let i = 0; i < Object.keys(obj).length; i++) {
    yield obj[arr[i]];
  }
}
// const gen = iterable(iterableObj);
const gen1 = myGen(iterableObj);
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());

// Object.groupBy(items, callback)
let inventory = [
  { name: "aniket", age: 23, city: "kolhapur" },
  { name: "paku", age: 23, city: "satra" },
  { name: "dinga", age: 25, city: "kolhapur" },
];

const groupedBy = Object.groupBy(inventory, (obj) => {
  return obj.age;
});
console.log(groupedBy);
